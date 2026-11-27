// Erzeugt die Google-Ads-Editor-CSV aus den Daten unten:
//   node docs/marketing/google-ads/generate.mjs docs/marketing/google-ads/google-ads-editor-import.csv
//   node docs/marketing/google-ads/validate.mjs
import { writeFileSync } from 'node:fs'

const B = 'https://www.gentlegroup.de'
const U = {
  home: `${B}/`,
  sw: `${B}/leistungen/individuelle-softwareentwicklung`,
  web: `${B}/leistungen/webdesign-webentwicklung`,
  saas: `${B}/leistungen/web-app-saas-entwicklung`,
  ki: `${B}/leistungen/ki-automatisierung`,
  app: `${B}/leistungen/app-entwicklung`,
  crm: `${B}/leistungen/crm-entwicklung`,
  book: `${B}/leistungen/buchungssystem-entwicklung`,
  pp: `${B}/leistungen/microsoft-power-platform`,
  ops: `${B}/leistungen/cloud-betrieb-wartung`,
}

// Tagesbudgets (EUR) – Summe 13,50 €/Tag ≈ 410 €/Monat
const campaigns = [
  { name: 'Search | Lokal Wuppertal', budget: '4.50', groups: [
    { name: 'Softwareentwicklung Wuppertal', url: U.sw, p: ['software', 'wuppertal'],
      kw: ['softwareentwicklung wuppertal', 'softwareagentur wuppertal', 'software agentur wuppertal', 'software entwickeln lassen wuppertal', 'individuelle software wuppertal', 'individualsoftware wuppertal', 'softwarefirma wuppertal'],
      h: [['Softwareentwicklung Wuppertal', 1], 'Softwareagentur in Wuppertal', 'Individuelle Software', 'Software passend zum Betrieb', 'Prozesse digital abbilden', 'Passt zu Ihren Systemen', 'Von Analyse bis Betrieb', 'Entwicklung in Etappen', 'Sichtbare Zwischenstände', 'Referenzen: Catering & Beauty', 'Referenzen aus der Logistik', 'Betreuung nach dem Launch', 'Gentle Group Studios', 'Projekt besprechen', 'Jetzt Projekt anfragen'],
      d: ['Individuelle Software aus Wuppertal – geplant, entwickelt und betreut aus einer Hand.', 'Wir bilden Ihre Abläufe digital ab und binden bestehende Systeme sauber an.', 'Entwicklung in Etappen mit sichtbaren Zwischenständen. Jetzt Projekt besprechen.', 'Referenzen aus Catering, Logistik und Beauty. Lösung entdecken auf gentlegroup.de.'] },
    { name: 'Webdesign Wuppertal', url: U.web, p: ['webdesign', 'wuppertal'],
      kw: ['webdesign wuppertal', 'webagentur wuppertal', 'webdesigner wuppertal', 'webdesign agentur wuppertal', 'internetagentur wuppertal', 'webentwicklung wuppertal', 'website erstellen lassen wuppertal', 'homepage erstellen lassen wuppertal'],
      h: [['Webdesign Wuppertal', 1], 'Webagentur aus Wuppertal', 'Website erstellen lassen', 'Webdesign & Webentwicklung', 'SEO-freundlich aufgebaut', 'Für Mobilgeräte optimiert', 'Design & Code aus einer Hand', 'Auf Anfragen ausgerichtet', 'Klare Struktur, klares Design', 'Pflege nach dem Launch', 'Referenzen ansehen', 'Gentle Group Studios', 'Sitz in Wuppertal', 'Projekt besprechen', 'Website-Projekt anfragen'],
      d: ['Websites aus Wuppertal: Strategie, UX/UI, Design und Entwicklung aus einer Hand.', 'Responsiv, SEO-freundlich und auf Anfragen ausgerichtet – für Ihr Unternehmen.', 'Klare Etappen mit sichtbaren Zwischenständen und Betreuung nach dem Launch.', 'Referenzen aus Beauty, Catering und Logistik ansehen. Jetzt Projekt besprechen.'] },
    { name: 'App-Entwicklung Wuppertal', url: U.app, p: ['app', 'wuppertal'],
      kw: ['app entwicklung wuppertal', 'app entwickeln lassen wuppertal', 'app agentur wuppertal', 'app programmieren lassen wuppertal', 'android app entwicklung wuppertal', 'ios app entwicklung wuppertal'],
      h: [['App-Entwicklung Wuppertal', 1], 'App entwickeln lassen', 'Apps für Android & iOS', 'App-Agentur aus Wuppertal', 'App und Web aus einer Hand', 'Anbindung an Ihre Systeme', 'Von Konzept bis Store-Release', 'Entwicklung in Etappen', 'Sichtbare Zwischenstände', 'Referenz: Logistik-App', 'Wartung nach dem Release', 'Gentle Group Studios', 'Sitz in Wuppertal', 'Projekt besprechen', 'App-Projekt anfragen'],
      d: ['Android- und iOS-Apps aus Wuppertal – von der Konzeption bis zum Betrieb.', 'Apps, die mit Ihrer Web-Plattform und bestehenden Systemen zusammenarbeiten.', 'Entwicklung in Etappen mit testbaren Zwischenständen. Jetzt Projekt besprechen.', 'Referenzen u. a. aus Logistik und Content-Plattformen. Lösung entdecken.'] },
    { name: 'Digitalagentur Wuppertal', url: U.home, p: ['agentur', 'wuppertal'],
      kw: ['digitalagentur wuppertal', 'it agentur wuppertal', 'it dienstleister wuppertal', 'agentur für digitalisierung wuppertal', 'digitalisierung unternehmen wuppertal', 'programmierer wuppertal'],
      h: [['Digitalagentur Wuppertal', 1], 'IT-Dienstleister in Wuppertal', 'Software, Web & Apps', 'KI & Automatisierung', 'Digitalisierung mit Plan', 'Von Analyse bis Betrieb', 'Passt zu Ihren Systemen', 'Entwicklung in Etappen', 'Design & Code aus einer Hand', 'Referenzen ansehen', 'Branchen: Catering bis Beauty', 'Betreuung nach dem Launch', 'Gentle Group Studios', 'Projekt besprechen', 'Lösung entdecken'],
      d: ['Software, Web-Apps, Websites und KI-Automatisierung – aus Wuppertal für Ihr Unternehmen.', 'Wir verbinden Strategie, Design und Entwicklung und bleiben nach dem Launch an Bord.', 'Analyse, Konzeption, Design, Entwicklung, QS und Betrieb – klar in Etappen geplant.', 'Referenzen aus Catering, Logistik und Beauty. Jetzt Projekt besprechen.'] },
  ] },
  { name: 'Search | Software & Web-Apps NRW', budget: '4.50', groups: [
    { name: 'Individualsoftware', url: U.sw, p: ['software', 'individuell'],
      kw: ['individuelle software', 'individuelle softwareentwicklung', 'software entwickeln lassen', 'individualsoftware', 'individualsoftware entwickeln lassen', 'software nach maß', 'maßgeschneiderte software', 'softwareentwicklung für unternehmen', 'unternehmenssoftware entwickeln lassen', 'softwareagentur'],
      h: [['Individuelle Software', 1], 'Software entwickeln lassen', 'Software nach Maß für NRW', 'Individualsoftware für KMU', 'Prozesse digital abbilden', 'Statt Excel & Insellösungen', 'Passt zu Ihren Systemen', 'Von Analyse bis Betrieb', 'Sichtbare Zwischenstände', 'Referenzen: Catering & Beauty', 'Referenzen aus der Logistik', 'Betrieb & Weiterentwicklung', 'Gentle Group Studios', 'Projekt besprechen', 'Jetzt Projekt anfragen'],
      d: ['Individuelle Software für Unternehmen in NRW – von der Analyse bis zum Betrieb.', 'Wir bilden Ihre Abläufe ab und binden bestehende Systeme sauber an.', 'Entwicklung in Etappen mit sichtbaren Zwischenständen. Projekt besprechen.', 'Referenzen aus Catering, Logistik und Beauty. Sitz in Wuppertal, Projekte NRW-weit.'] },
    { name: 'Web-App entwickeln', url: U.saas, p: ['web-app', 'entwicklung'],
      kw: ['web app entwickeln lassen', 'web app entwicklung', 'webanwendung entwickeln lassen', 'webapplikation entwickeln lassen', 'kundenportal entwickeln lassen', 'dashboard entwickeln lassen', 'next.js agentur', 'react agentur', 'react entwicklung agentur'],
      h: [['Web-App entwickeln lassen', 1], 'Web-Apps mit Next.js & React', 'Portale & Dashboards', 'Kundenportal nach Maß', 'Skalierbare Architektur', 'Schnittstellen & APIs', 'Passt zu Ihren Systemen', 'Entwicklung in Etappen', 'Sichtbare Zwischenstände', 'Von Analyse bis Betrieb', 'Referenzen ansehen', 'Betrieb & Weiterentwicklung', 'Gentle Group Studios', 'Projekt besprechen', 'Lösung entdecken'],
      d: ['Web-Apps, Portale und Dashboards mit Next.js und React – geplant und gebaut für Sie.', 'Saubere Schnittstellen zu Ihren Systemen und eine Architektur, die mitwachsen kann.', 'Entwicklung in Etappen mit sichtbaren Zwischenständen. Jetzt Projekt besprechen.', 'Aus Wuppertal für Unternehmen in NRW und deutschlandweit remote.'] },
    { name: 'SaaS entwickeln', url: U.saas, p: ['saas', 'entwicklung'],
      kw: ['saas entwickeln lassen', 'saas entwicklung', 'saas agentur', 'saas plattform entwickeln', 'saas mvp entwickeln lassen', 'mvp entwickeln lassen', 'software as a service entwickeln'],
      h: [['SaaS entwickeln lassen', 1], 'SaaS-Entwicklung mit Next.js', 'Vom MVP zum Produkt', 'Nutzerkonten & Rollen', 'Skalierbare Architektur', 'Schnittstellen & APIs', 'UX/UI und Entwicklung', 'Entwicklung in Etappen', 'Sichtbare Zwischenstände', 'Betrieb & Weiterentwicklung', 'Cloud-Betrieb mit Azure', 'Referenzen ansehen', 'Gentle Group Studios', 'Projekt besprechen', 'SaaS-Projekt anfragen'],
      d: ['Ihre SaaS-Idee als Produkt: Konzeption, UX/UI, Entwicklung und Betrieb aus einer Hand.', 'Start mit einem fokussierten MVP, danach Ausbau in Etappen mit sichtbaren Ergebnissen.', 'Moderne Technik wie Next.js und React, betrieben auf Azure oder Vercel.', 'Aus Wuppertal für Gründer und Unternehmen in NRW und deutschlandweit.'] },
    { name: 'Software Düsseldorf', url: U.sw, p: ['software', 'duesseldorf'],
      kw: ['softwareentwicklung düsseldorf', 'software entwickeln lassen düsseldorf', 'individuelle software düsseldorf', 'softwareagentur düsseldorf', 'web app entwicklung düsseldorf', 'app entwicklung düsseldorf'],
      h: [['Software für Düsseldorf', 1], ['Sitz in Wuppertal', 2], 'Für Kunden in Düsseldorf', 'Individuelle Software', 'Web-Apps & Apps nach Maß', 'Prozesse digital abbilden', 'Passt zu Ihren Systemen', 'Von Analyse bis Betrieb', 'Entwicklung in Etappen', 'Sichtbare Zwischenstände', 'Referenzen: Catering & Beauty', 'Betrieb & Weiterentwicklung', 'Gentle Group Studios', 'Projekt besprechen', 'Jetzt Projekt anfragen'],
      d: ['Softwareentwicklung für Unternehmen in Düsseldorf – von unserem Sitz in Wuppertal aus.', 'Individuelle Software, Web-Apps und Apps, die zu Ihren bestehenden Systemen passen.', 'Entwicklung in Etappen mit sichtbaren Zwischenständen. Jetzt Projekt besprechen.', 'Referenzen aus Catering, Logistik und Beauty. Lösung entdecken auf gentlegroup.de.'] },
  ] },
  { name: 'Search | Nischen NRW+DE', budget: '3.50', groups: [
    { name: 'CRM-Entwicklung', url: U.crm, p: ['crm', 'individuell'],
      kw: ['crm entwickeln lassen', 'individuelles crm', 'crm individuell entwickeln', 'crm software individuell', 'crm system entwickeln lassen', 'crm nach maß', 'eigenes crm entwickeln', 'kundenverwaltung software individuell'],
      h: [['CRM entwickeln lassen', 1], 'Individuelles CRM-System', 'CRM nach Ihren Abläufen', 'Kunden & Aufträge im Blick', 'Statt Excel & Insellösungen', 'Anbindung an Ihre Systeme', 'Rollen & Rechte nach Bedarf', 'Von Analyse bis Betrieb', 'Entwicklung in Etappen', 'Sichtbare Zwischenstände', 'Referenzen ansehen', 'Betrieb & Weiterentwicklung', 'Gentle Group Studios', 'Projekt besprechen', 'CRM-Projekt anfragen'],
      d: ['Ein CRM, das zu Ihren Abläufen passt – statt Abläufe an Standardsoftware anzupassen.', 'Kunden, Aufträge und Kommunikation zentral, mit Anbindung an bestehende Systeme.', 'Entwicklung in Etappen mit sichtbaren Zwischenständen. Jetzt Projekt besprechen.', 'Gentle Group Studios aus Wuppertal – für Unternehmen in NRW und deutschlandweit.'] },
    { name: 'Buchungssystem-Entwicklung', url: U.book, p: ['buchungssystem', 'individuell'],
      kw: ['buchungssystem entwickeln lassen', 'buchungssystem individuell', 'terminbuchungssystem individuell', 'online buchungssystem individuell', 'terminbuchung software entwickeln', 'buchungssystem programmieren lassen', 'buchungssystem für kosmetikstudio', 'reservierungssystem entwickeln lassen'],
      h: [['Buchungssystem nach Maß', 1], 'Buchungssystem entwickeln', 'Online-Terminbuchung', 'Für Beauty & Dienstleister', 'Referenz aus der Ästhetik', 'Mit Preisrechner kombinierbar', 'Passt zu Ihren Abläufen', 'Anbindung an Ihre Systeme', 'Entwicklung in Etappen', 'Sichtbare Zwischenstände', 'Betrieb & Weiterentwicklung', 'Referenzen ansehen', 'Gentle Group Studios', 'Projekt besprechen', 'Lösung entdecken'],
      d: ['Individuelle Online-Buchung für Studios und Dienstleister – passend zu Ihren Abläufen.', 'Referenz aus Beauty & Ästhetik: Buchungssystem und Preisrechner aus einer Hand.', 'Entwicklung in Etappen mit sichtbaren Zwischenständen. Jetzt Projekt besprechen.', 'Aus Wuppertal für Unternehmen in NRW und deutschlandweit remote.'] },
    { name: 'Power Platform', url: U.pp, p: ['power-apps', 'beratung'],
      kw: ['power apps agentur', 'power apps entwicklung', 'power apps dienstleister', 'power apps entwickler', 'power platform beratung', 'microsoft power platform agentur', 'power automate beratung', 'power automate workflows erstellen'],
      h: [['Power Apps & Power Automate', 1], 'Power Platform Beratung', 'Power-Apps-Agentur', 'Abläufe automatisieren', 'Microsoft 365 sinnvoll nutzen', 'Apps für Ihre Teams', 'Anbindung an Ihre Systeme', 'Von Analyse bis Betrieb', 'Entwicklung in Etappen', 'Sichtbare Zwischenstände', 'Betrieb & Weiterentwicklung', 'Referenzen ansehen', 'Gentle Group Studios', 'Projekt besprechen', 'Lösung entdecken'],
      d: ['Power Apps und Power Automate für Ihre Abläufe – geplant, gebaut und betreut.', 'Wir automatisieren wiederkehrende Aufgaben und binden Ihre bestehenden Systeme an.', 'Entwicklung in Etappen mit sichtbaren Zwischenständen. Jetzt Projekt besprechen.', 'Gentle Group Studios aus Wuppertal – für Unternehmen in NRW und deutschlandweit.'] },
    { name: 'KI-Automatisierung', url: U.ki, p: ['ki', 'automatisierung'],
      kw: ['ki automatisierung', 'ki automatisierung unternehmen', 'ki agenten entwickeln lassen', 'ki agentur', 'ki lösungen für unternehmen', 'ki integration unternehmen', 'ki assistent für unternehmen', 'prozessautomatisierung ki', 'workflow automatisierung agentur'],
      h: [['KI-Automatisierung', 1], 'KI-Agenten entwickeln lassen', 'KI für Ihre Abläufe', 'Routineaufgaben automatisieren', 'KI-Assistenten für Teams', 'Verantwortungsvoll integriert', 'Passt zu Ihren Systemen', 'Von Analyse bis Betrieb', 'Entwicklung in Etappen', 'Sichtbare Zwischenstände', 'Betrieb & Weiterentwicklung', 'Referenzen ansehen', 'Gentle Group Studios', 'Projekt besprechen', 'Lösung entdecken'],
      d: ['KI-Automatisierung und KI-Agenten, die in Ihre bestehenden Systeme passen.', 'Wir prüfen Ihre Abläufe und automatisieren dort, wo es im Alltag Zeit spart.', 'Verantwortungsvolle Integration in Etappen mit sichtbaren Zwischenständen.', 'Aus Wuppertal für Unternehmen in NRW und deutschlandweit. Jetzt Projekt besprechen.'] },
    { name: 'Cloud-Betrieb & Wartung', url: U.ops, p: ['betrieb', 'wartung'],
      kw: ['website wartung agentur', 'web app wartung', 'webanwendung betreuung', 'software wartung dienstleister', 'software weiterentwicklung dienstleister', 'azure betreuung', 'cloud betrieb software', 'vercel agentur'],
      h: [['Cloud-Betrieb & Wartung', 1], 'Betrieb mit Azure & Vercel', 'Wartung für Web-Apps', 'Updates & Monitoring', 'Backups & Sicherheit', 'Weiterentwicklung nach Launch', 'Deployment & Monitoring', 'Passt zu Ihren Systemen', 'Von Analyse bis Betrieb', 'Software sicher betreiben', 'Referenzen ansehen', 'Gentle Group Studios', 'Sitz in Wuppertal', 'Projekt besprechen', 'Lösung entdecken'],
      d: ['Betrieb, Wartung und Weiterentwicklung Ihrer Web-Apps auf Azure oder Vercel.', 'Deployment, Monitoring, Updates und Backups – damit Ihre Anwendung stabil läuft.', 'Wir entwickeln Ihre Software nach dem Launch in Etappen weiter. Projekt besprechen.', 'Gentle Group Studios aus Wuppertal – für Unternehmen in NRW und deutschlandweit.'] },
  ] },
  { name: 'Search | Brand', budget: '1.00', groups: [
    { name: 'Brand', url: U.home, p: ['studio', 'wuppertal'],
      kw: ['gentle group', 'gentle group studios', 'gentlegroup', 'gentlegroup de', 'gentle group wuppertal', 'gentle group software'],
      h: [['Gentle Group Studios', 1], 'Offizielle Website', 'Software, Web & Apps', 'KI & Automatisierung', 'Sitz in Wuppertal', 'Individuelle Software', 'Websites & Web-Apps', 'Von Analyse bis Betrieb', 'Entwicklung in Etappen', 'Referenzen ansehen', 'Betrieb & Weiterentwicklung', 'Projekt besprechen', 'Jetzt Projekt anfragen', 'Lösung entdecken', 'Für NRW & deutschlandweit'],
      d: ['Gentle Group Studios: Software, Web-Apps, Websites, Apps und KI-Automatisierung.', 'Aus Wuppertal für Unternehmen in NRW und deutschlandweit remote.', 'Von Analyse und Konzeption bis Betrieb – Entwicklung in Etappen.', 'Referenzen aus Catering, Logistik und Beauty. Jetzt Projekt besprechen.'] },
  ] },
]

const cols = ['Campaign', 'Campaign Type', 'Networks', 'Budget', 'Budget type', 'Bid Strategy Type', 'Languages', 'Campaign Status', 'Ad Group', 'Ad Group Status', 'Keyword', 'Criterion Type', 'Ad type']
for (let i = 1; i <= 15; i++) cols.push(`Headline ${i}`, `Headline ${i} position`)
for (let i = 1; i <= 4; i++) cols.push(`Description ${i}`)
cols.push('Path 1', 'Path 2', 'Final URL', 'Status')

const esc = (v) => (v == null ? '' : /[",\n\r]/.test(String(v)) ? `"${String(v).replace(/"/g, '""')}"` : String(v))
const rows = []
const row = (o) => rows.push(cols.map((c) => esc(o[c])).join(','))

const summary = []
for (const c of campaigns) {
  row({ Campaign: c.name, 'Campaign Type': 'Search', Networks: 'Google search', Budget: c.budget, 'Budget type': 'Daily', 'Bid Strategy Type': 'Maximize clicks', Languages: 'de', 'Campaign Status': 'Paused' })
  for (const g of c.groups) {
    row({ Campaign: c.name, 'Ad Group': g.name, 'Ad Group Status': 'Enabled' })
    for (const k of g.kw) for (const t of ['Phrase', 'Exact']) row({ Campaign: c.name, 'Ad Group': g.name, Keyword: k, 'Criterion Type': t, Status: 'Enabled' })
    const ad = { Campaign: c.name, 'Ad Group': g.name, 'Ad type': 'Responsive search ad', 'Path 1': g.p[0], 'Path 2': g.p[1], 'Final URL': g.url, Status: 'Enabled' }
    g.h.forEach((h, i) => {
      const [text, pos] = Array.isArray(h) ? h : [h, '']
      ad[`Headline ${i + 1}`] = text
      ad[`Headline ${i + 1} position`] = pos
    })
    g.d.forEach((d, i) => { ad[`Description ${i + 1}`] = d })
    row(ad)
    summary.push(`${c.name} / ${g.name}: ${g.kw.length} Begriffe = ${g.kw.length * 2} Keywords`)
  }
}
writeFileSync(process.argv[2], [cols.join(','), ...rows].join('\r\n') + '\r\n', 'utf8')
console.log(summary.join('\n'))
