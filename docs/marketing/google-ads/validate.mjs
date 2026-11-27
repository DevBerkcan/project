#!/usr/bin/env node
// Validiert google-ads-editor-import.csv und die Asset-Tabellen in README.md.
// Keine Abhängigkeiten. Aufruf: node docs/marketing/google-ads/validate.mjs
// Exit-Code 0 = alles in Ordnung, 1 = mindestens ein Verstoß.

import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const csvPath = process.argv[2] ?? join(here, 'google-ads-editor-import.csv')
const readmePath = process.argv[3] ?? join(here, 'README.md')

const LIMITS = { headline: 30, description: 90, path: 15, sitelinkText: 25, sitelinkDesc: 35, callout: 25, snippetValue: 25 }
const FORBIDDEN = ['kostenlos', '24 stunden', 'nr. 1', 'garantie', 'bester', 'beste ', 'günstigste', '%', '€']
const ALLOWED_CRITERIA = new Set(['phrase', 'exact', 'broad', 'negative phrase', 'negative exact', 'negative broad'])
const URL_PREFIX = 'https://www.gentlegroup.de/'

const errors = []
const warn = (where, msg) => errors.push(`${where}: ${msg}`)
const len = (s) => s.length // Zeichen als JS-String-Länge

/** RFC-4180-konformer CSV-Parser (Anführungszeichen, "" als Escape, Zeilenumbrüche in Feldern). */
function parseCsv(text) {
  if (text.charCodeAt(0) === 0xfeff) text = text.slice(1)
  const out = []
  let rec = []
  let field = ''
  let q = false
  for (let i = 0; i < text.length; i++) {
    const ch = text[i]
    if (q) {
      if (ch === '"') {
        if (text[i + 1] === '"') { field += '"'; i++ } else q = false
      } else field += ch
    } else if (ch === '"') q = true
    else if (ch === ',') { rec.push(field); field = '' }
    else if (ch === '\n' || ch === '\r') {
      if (ch === '\r' && text[i + 1] === '\n') i++
      rec.push(field); field = ''
      if (rec.length > 1 || rec[0] !== '') out.push(rec)
      rec = []
    } else field += ch
  }
  if (q) throw new Error('CSV: nicht geschlossenes Anführungszeichen')
  if (field !== '' || rec.length) { rec.push(field); out.push(rec) }
  return out
}

function checkForbidden(where, text) {
  const t = text.toLowerCase()
  for (const w of FORBIDDEN) if (t.includes(w)) warn(where, `verbotener Begriff "${w.trim() || w}" in "${text}"`)
}

function checkLen(where, text, max) {
  if (len(text) > max) warn(where, `${len(text)} > ${max} Zeichen: "${text}"`)
}

// ---------- CSV ----------
const records = parseCsv(readFileSync(csvPath, 'utf8'))
const header = records.shift()
const col = Object.fromEntries(header.map((h, i) => [h, i]))
for (const req of ['Campaign', 'Ad Group', 'Keyword', 'Criterion Type', 'Ad type', 'Final URL', 'Campaign Status']) {
  if (!(req in col)) warn('CSV-Header', `Spalte "${req}" fehlt`)
}
const get = (r, name) => (name in col ? (r[col[name]] ?? '').trim() : '')

let ads = 0
let keywords = 0
const kwSeen = new Set()
const adGroupsWithAd = new Set()
const adGroups = new Set()

records.forEach((r, idx) => {
  const line = idx + 2
  if (r.length !== header.length) warn(`Zeile ${line}`, `${r.length} Felder statt ${header.length}`)
  const campaign = get(r, 'Campaign')
  const group = get(r, 'Ad Group')
  const where = `Zeile ${line} [${campaign}${group ? ' / ' + group : ''}]`

  // Kampagnenzeile
  if (campaign && !group) {
    if (get(r, 'Campaign Status') !== 'Paused') warn(where, 'Kampagne muss beim Import "Paused" sein')
    const budget = get(r, 'Budget')
    if (budget && !/^\d+(\.\d{1,2})?$/.test(budget)) warn(where, `Budget "${budget}" ist keine Zahl mit Punkt als Dezimaltrenner`)
    return
  }
  if (group) adGroups.add(`${campaign}|${group}`)

  // Keywordzeile
  const kw = get(r, 'Keyword')
  if (kw) {
    keywords++
    const type = get(r, 'Criterion Type')
    if (!ALLOWED_CRITERIA.has(type.toLowerCase())) warn(where, `unbekannter Criterion Type "${type}"`)
    if (/["[\]]/.test(kw)) warn(where, `Keyword "${kw}" enthält Match-Type-Zeichen; Match-Type gehört in "Criterion Type"`)
    if (kw !== kw.toLowerCase()) warn(where, `Keyword "${kw}" bitte kleingeschrieben`)
    if (len(kw) > 80) warn(where, `Keyword länger als 80 Zeichen`)
    const key = `${campaign}|${group}|${kw}|${type}`
    if (kwSeen.has(key)) warn(where, `doppeltes Keyword "${kw}" (${type})`)
    kwSeen.add(key)
    return
  }

  // Anzeigenzeile
  if (get(r, 'Ad type')) {
    ads++
    adGroupsWithAd.add(`${campaign}|${group}`)
    if (get(r, 'Ad type') !== 'Responsive search ad') warn(where, `Ad type "${get(r, 'Ad type')}" ist keine RSA`)
    const headlines = []
    for (let i = 1; i <= 15; i++) {
      const h = get(r, `Headline ${i}`)
      const pos = get(r, `Headline ${i} position`)
      if (!h) { if (pos) warn(where, `Headline ${i} leer, aber gepinnt`); continue }
      headlines.push(h)
      checkLen(`${where} Headline ${i}`, h, LIMITS.headline)
      checkForbidden(`${where} Headline ${i}`, h)
      if (pos && !['1', '2', '3'].includes(pos)) warn(where, `Headline ${i} position "${pos}" ungültig (1–3)`)
    }
    if (headlines.length < 3) warn(where, `nur ${headlines.length} Headlines (min. 3)`)
    const lower = headlines.map((h) => h.toLowerCase())
    lower.forEach((h, i) => { if (lower.indexOf(h) !== i) warn(where, `doppelte Headline "${headlines[i]}"`) })

    const descs = []
    for (let i = 1; i <= 4; i++) {
      const d = get(r, `Description ${i}`)
      if (!d) continue
      descs.push(d)
      checkLen(`${where} Description ${i}`, d, LIMITS.description)
      checkForbidden(`${where} Description ${i}`, d)
    }
    if (descs.length < 2) warn(where, `nur ${descs.length} Descriptions (min. 2)`)
    const dl = descs.map((d) => d.toLowerCase())
    dl.forEach((d, i) => { if (dl.indexOf(d) !== i) warn(where, `doppelte Description`) })

    for (const p of ['Path 1', 'Path 2']) {
      const v = get(r, p)
      if (!v) continue
      checkLen(`${where} ${p}`, v, LIMITS.path)
      checkForbidden(`${where} ${p}`, v)
      if (/[\s/]/.test(v)) warn(where, `${p} "${v}" darf keine Leerzeichen oder "/" enthalten`)
    }
    if (get(r, 'Path 2') && !get(r, 'Path 1')) warn(where, 'Path 2 ohne Path 1')
    const url = get(r, 'Final URL')
    if (!url.startsWith(URL_PREFIX)) warn(where, `Final URL "${url}" muss mit ${URL_PREFIX} beginnen`)
  }
})

for (const g of adGroups) if (!adGroupsWithAd.has(g)) warn(`Anzeigengruppe ${g.replace('|', ' / ')}`, 'keine Anzeige')

// ---------- README-Assets ----------
let assetCount = 0
let readme = ''
try { readme = readFileSync(readmePath, 'utf8') } catch { warn('README', `nicht gefunden: ${readmePath}`) }

/** Liest Markdown-Tabellenzeilen zwischen <!-- assets:NAME:start --> und <!-- assets:NAME:end -->. */
function tableRows(name) {
  const m = readme.match(new RegExp(`<!-- assets:${name}:start -->([\\s\\S]*?)<!-- assets:${name}:end -->`))
  if (!m) { warn('README', `Asset-Block "${name}" fehlt`); return [] }
  return m[1].split('\n').map((l) => l.trim()).filter((l) => l.startsWith('|'))
    .slice(2) // Kopfzeile + Trennzeile
    .map((l) => l.replace(/^\||\|$/g, '').split('|').map((c) => c.trim().replace(/^`|`$/g, '')))
}

if (readme) {
  for (const [text, d1, d2] of tableRows('sitelinks')) {
    assetCount++
    checkLen(`Sitelink "${text}"`, text, LIMITS.sitelinkText)
    checkLen(`Sitelink "${text}" Beschreibung 1`, d1, LIMITS.sitelinkDesc)
    checkLen(`Sitelink "${text}" Beschreibung 2`, d2, LIMITS.sitelinkDesc)
    for (const t of [text, d1, d2]) checkForbidden(`Sitelink "${text}"`, t)
  }
  for (const [text] of tableRows('callouts')) {
    assetCount++
    checkLen(`Callout`, text, LIMITS.callout)
    checkForbidden(`Callout`, text)
  }
  for (const [hdr, values] of tableRows('snippets')) {
    assetCount++
    if (!['Leistungen', 'Typen'].includes(hdr)) warn(`Snippet "${hdr}"`, 'Header muss "Leistungen" oder "Typen" sein')
    const vals = values.split(';').map((v) => v.trim()).filter(Boolean)
    if (vals.length < 3) warn(`Snippet "${hdr}"`, 'mindestens 3 Werte nötig')
    for (const v of vals) { checkLen(`Snippet "${hdr}"`, v, LIMITS.snippetValue); checkForbidden(`Snippet "${hdr}"`, v) }
  }
}

// ---------- Ergebnis ----------
console.log(`Geprüft: ${adGroups.size} Anzeigengruppen, ${keywords} Keywords, ${ads} RSAs, ${assetCount} Asset-Zeilen (README).`)
if (errors.length) {
  console.error(`\n${errors.length} Verstoß/Verstöße:`)
  for (const e of errors) console.error(' - ' + e)
  process.exit(1)
}
console.log('OK – alle Zeichenlimits und Inhaltsregeln eingehalten.')
