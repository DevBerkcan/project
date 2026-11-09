# SEO-Audit & Umsetzung — Gentle Group Studios

Stand: 2026-11-02 · Branch: `seo/vollstaendige-optimierung` · Domain: `https://www.gentlegroup.de`

## 1. Ausgangssituation

**Technik.** Die Website ist **keine Next.js-Anwendung**, sondern eine React-19-SPA mit Vite 7 und React Router 7. Beim Build rendert `scripts/postbuild-seo.mjs` jede Route über `src/entry-server.tsx` vorab als statisches HTML (Static Site Generation) und schreibt Meta-Tags, Canonical und JSON-LD hinein. Gehostet wird auf Vercel. Die Next.js Metadata API ist daher nicht anwendbar; ihr Gegenstück ist `src/lib/pageSeo.ts` (zentrale Metadaten) zusammen mit `src/components/Seo.tsx` (Aktualisierung bei Client-Navigation).

**Bereits vorhanden und solide:** vorgerenderte Seiten, Canonicals auf `https://www.gentlegroup.de`, Sitemap, robots.txt, JSON-LD (Organization, WebSite, Breadcrumb, Service, BlogPosting, FAQPage), `noindex` auf Preview-Hosts, Content-Guard-Test gegen Template-Behauptungen, zwölf Blogartikel und fünf Fallstudien.

**Live-Prüfung (2026-11-02):** `http://` → `https://` sowie `gentlegroup.de` → `www.gentlegroup.de` leiten korrekt per 308 weiter, `/pfad/` → `/pfad` ebenfalls. Unbekannte URLs liefern 404. Die Legacy-URLs `/projects` und `/project-questionnaire` liefern **404 statt einer Weiterleitung**.

**Geschäftliche Klärungen mit dem Auftraggeber:**

- Sitz ist **Wuppertal**. Düsseldorf/NRW ist Leistungsgebiet; es gibt **kein Büro in Düsseldorf**. Deshalb gibt es keine künstlichen Seiten wie `/softwareentwicklung-duesseldorf`; Düsseldorf wird ehrlich über `/leistungsgebiet` bedient.
- Als echte Angebote bestätigt: individuelle CRM-Systeme, Microsoft Power Platform, Next.js als Hauptstack und SaaS-Produktentwicklung.
- Markenname in allen Titeln und strukturierten Daten: **Gentle Group Studios** (laut AGENTS.md).
- Preloader: nur noch einmal pro Browser-Sitzung und kürzer.

## 2. Gefundene SEO-Probleme (priorisiert nach Auswirkung)

| Prio | Problem | Auswirkung |
| --- | --- | --- |
| Hoch | H1 der Startseite lautete „DIGITALE LÖSUNGEN“, ohne Leistung und ohne Ort | Schwaches Relevanzsignal für die wichtigste Seite |
| Hoch | Leistungsseiten bestanden aus einem einzigen Absatz (~40 Wörter) | Dünne Inhalte, kaum rankingfähig |
| Hoch | Keine Seiten für CRM, Buchungssysteme, Web-Apps/SaaS, Power Platform | Kernsuchbegriffe ohne Zielseite |
| Hoch | Leistungs-URLs ohne Keywords (`/leistungen/software`, `/ai` …) | Schwaches URL-Signal |
| Hoch | Im Services-Akkordeon wurde nur das geöffnete Panel ins HTML gerendert | 4 von 5 Leistungslinks und -texte fehlten im vorgerenderten HTML |
| Hoch | Menü und Footer-Navigation bestanden aus `<button>`-Elementen | Interne Links für Crawler nicht verfolgbar |
| Hoch | Unterseiten ohne Footer: keine Rechtslinks, kein Kontakt-CTA, kaum interne Verlinkung | Crawl-Tiefe, Conversion |
| Mittel | `createRoot` statt `hydrateRoot`: vorgerendertes HTML wurde verworfen und neu gerendert | Unnötige Arbeit, Flackern |
| Mittel | Preloader (~2,8 s) bei *jedem* Aufruf der Startseite, auch bei Client-Navigation | LCP, Nutzererlebnis |
| Mittel | Font-CSS per `@import` im Stylesheet (Request-Kette HTML → CSS → Font-CSS → Font) | ~0,8–1 s render-blockierend |
| Mittel | OG-Bild als SVG | Facebook, LinkedIn und X zeigen keine Vorschau |
| Mittel | Sitemap enthielt `noindex`-Seiten; `lastmod` war bei jedem Build das Build-Datum | Widersprüchliche Signale |
| Mittel | Impressum und Datenschutz `noindex`, obwohl echter Inhalt vorhanden ist | Unnötig, schwächt Vertrauenssignale |
| Mittel | Keine echte 404-Seite im Deployment; die Vercel-Catch-all-Rewrite konnte unbekannte URLs mit 200 beantworten | Soft-404-Risiko |
| Mittel | Legacy-URLs `/projects`, `/work/*`, `/project-questionnaire` nur clientseitig umgeleitet oder 404 | Linkkraft geht verloren |
| Mittel | Meta-Descriptions der Fallstudien mit 300–400 Zeichen (ganze Beschreibung) | Werden in den Suchergebnissen abgeschnitten |
| Mittel | Blogartikel ohne sichtbares Datum, ohne Kontakt-CTA, ohne Links zu Leistungsseiten | E-E-A-T, Conversion, interne Links |
| Niedrig | Platzhalter live: „Dummy-Text:“ in Team-Profilen, „Verifizierter Projekteintrag“, `<a>` ohne `href` | Qualität und Vertrauen |
| Niedrig | „LASS UNS STARTEN“ und „Entwickelt ihr …“ (du/ihr-Form statt Sie) | Markenstimme |
| Niedrig | FAQ-Antworten auf `/leistungsgebiet`: dunkler Text auf dunklem Grund | Unlesbar |
| Niedrig | Manifest-Text startete mit 24 % Deckkraft (Kontrast 1,4:1) | Barrierefreiheit |
| Niedrig | „Gentle Group®“ im Preloader | Unbelegter Marken-Registrierungshinweis |
| Niedrig | Ungenutzte Schrift Satoshi im Font-Request | Überflüssige Bytes |

## 3. Umgesetzte Optimierungen

### Inhalte und Struktur

- Startseite: neue semantische H1 „Softwareagentur aus Wuppertal für individuelle Software, Web-Apps, Websites und KI-Automatisierung — für Unternehmen in Düsseldorf und ganz NRW“. Der große Schriftzug „DIGITALE LÖSUNGEN“ und seine Animation bleiben optisch unverändert, sind aber jetzt dekorativ (`aria-hidden`).
- Neun Leistungsseiten mit eigenem Inhalt (Ausgangslagen, Leistungsumfang, Vorgehen, Technologien, FAQ, Referenzen, Blog-Links, passende Leistungen, CTA): 5 Kernleistungen und 4 neue Schwerpunkte (Web-App/SaaS, CRM, Buchungssysteme, Power Platform).
- Leistungsübersicht mit „Kernleistungen“ und „Schwerpunkte“; Schwerpunkt-Links zusätzlich auf der Startseite.
- `/leistungsgebiet` als ehrliche regionale Zielseite für Düsseldorf/Wuppertal/NRW ausgebaut (Leistungen, Zusammenarbeit, Projekte, FAQ).
- Startseiten-FAQ auf 9 Fragen erweitert (Düsseldorf, Kosten, Technologien, Zielgruppen), durchgängig in der Sie-Form.
- Fallstudien: Branche, eigene SEO-Titel, Links zu Leistungen und passenden Blogartikeln. Projektübersicht ohne Platzhalter.
- Blog: sichtbares Veröffentlichungsdatum (`<time>`), Kontakt-CTA, Kontextlinks zu Leistungsseiten über den neuen Block-Typ `link`.
- Zentraler Footer mit Kontakt-CTA, Leistungslinks und Rechtslinks auf allen Seiten außer dem Anfrageformular. Copyright-Jahr kommt aus einer zentralen Quelle.

### Technisches SEO

- Keyword-haltige Leistungs-URLs mit 301-Weiterleitungen von den alten Pfaden.
- 301-Weiterleitungen für `/projects`, `/work/:slug` und `/project-questionnaire`.
- Catch-all-Rewrite entfernt; vorgerenderte `404.html` (`noindex`, ohne Canonical) liefert einen echten 404-Status.
- Sitemap enthält nur indexierbare Seiten; `lastmod` nur bei echten Inhaltsdaten (Blog).
- Impressum und Datenschutz indexierbar; Barrierefreiheit bleibt `noindex`, solange dort nur ein Platzhalter steht.
- JSON-LD: `Organization` + `ProfessionalService` mit Ort (Wuppertal, PLZ, NRW; ohne Straße), Logo, `areaServed` und `knowsAbout`; `Service` und `FAQPage` je Leistungsseite; `BlogPosting` mit `inLanguage`, `image` und `about`; `CreativeWork` mit `creator`.
- Titel ≤ 70 Zeichen mit Marke (Blogartikel dürfen ohne Markenzusatz sein); Descriptions 50–160 Zeichen, alle eindeutig.
- PNG-OG-Bild (1200×630) mit `og:image:width/height/alt`, dazu ein Apple-Touch-Icon.
- Menü- und Footer-Navigation als echte Links. Die Akkordeon-Panels bleiben im DOM (geschlossen per `inert`), sodass alle Texte und Links im HTML stehen.

### Performance

- `hydrateRoot` statt `createRoot`; die Hydration-Unterschiede bei Cursor und Preloader sind behoben (Konsole fehlerfrei).
- Preloader nur noch beim ersten Besuch pro Sitzung (vor dem ersten Paint per Inline-Skript ausgeblendet), Laufzeit ~1,5 s statt ~2,8 s; die Hero-Animation startet bereits, während der Vorhang hochfährt. `prefers-reduced-motion` überspringt den Preloader komplett.
- Font-CSS als `<link>` mit Preconnect statt `@import`; Satoshi entfernt.
- Metrisch angepasste Fallback-Schrift (`size-adjust`/`ascent-override` auf Arial-Basis) verhindert Layout-Sprünge beim Schriftwechsel; Hero-Zeilen mit `whitespace-nowrap`.
- `Cache-Control: immutable` für gehashte Assets unter `/assets/`.
- Mobile H1 der Leistungsseiten verkleinert, mit deutscher Silbentrennung (verhindert Überlauf bei langen Komposita).

### Barrierefreiheit

- Manifest-Text startet mit 65 % Deckkraft (≥ 3:1), FAQ-Kontrast auf dunklem Grund korrigiert, Menü-Button mit deutschem, zustandsabhängigem `aria-label`, `nav`-Landmarke, Brotkrumen-Navigation auf Leistungsseiten.

## 4. Geänderte Dateien

Neu: `src/data/serviceDetails.ts`, `src/data/prerender.test.tsx`, `scripts/generate-social-images.mjs`, `public/og-default.png`, `public/apple-touch-icon.png`, `SEO_AUDIT_GENTLEGROUP.md`.

Geändert: `index.html`, `vercel.json`, `scripts/postbuild-seo.mjs`, `public/og-default.svg`, `src/main.tsx`, `src/entry-server.tsx`, `src/index.css`, `src/lib/{pageSeo,routes,siteConfig}.ts`, `src/components/{ArticleBody,Cursor,FaqList,Nav,Preloader,Seo}.tsx`, `src/sections/{Footer,Hero,Manifesto,Services}.tsx`, `src/pages/{BlogIndexPage,BlogPostPage,GentleSuiteIndexPage,Home,LegalPage,ProjectPage,ProjectsPage,RegionPage,ServiceDetailPage,ServicesIndexPage}.tsx`, `src/data/{siteContent,faqContent}.ts`, `src/data/blog/types.ts`, zehn Blogartikel (Links, `seoTitle`, Leistungszuordnung), `src/data/{seoContract,templateContentGuard}.test.ts`.

## 5. Neue Seiten und Keyword-Mapping

Suchvolumen, Wettbewerb und Keyword-Schwierigkeit wurden **nicht** gemessen, weil kein Zugriff auf eine SEO-Datenquelle (z. B. Search Console, Sistrix, Ahrefs) bestand. Die Zuordnung beruht auf Suchintention und Angebot. Die Messwerte sollten nachträglich ergänzt werden.

| URL | Primäres Keyword | Sekundäre Keywords | Intention |
| --- | --- | --- | --- |
| `/` | Softwareagentur Wuppertal | Softwareagentur NRW, individuelle Software, Web-Apps, KI-Automatisierung | kommerziell |
| `/leistungsgebiet` | Softwareagentur Düsseldorf | Softwareentwicklung Düsseldorf, Webdesign Düsseldorf, Softwareentwicklung NRW | lokal-kommerziell |
| `/leistungen` | Leistungen Softwareagentur | Softwareentwicklung, Webentwicklung, KI | Navigation |
| `/leistungen/individuelle-softwareentwicklung` | individuelle Softwareentwicklung | Software entwickeln lassen, Business-Software, Kundenportal | kommerziell |
| `/leistungen/web-app-saas-entwicklung` *(neu)* | Web-App-Entwicklung | SaaS entwickeln lassen, Next.js Agentur, SaaS-Entwicklung | kommerziell |
| `/leistungen/webdesign-webentwicklung` | Webdesign für Unternehmen | Webentwicklung, Website erstellen lassen, professionelle Website | kommerziell |
| `/leistungen/ki-automatisierung` | KI-Automatisierung Unternehmen | Geschäftsprozesse automatisieren, KI-Agenten entwickeln lassen, KI-Agentur | kommerziell |
| `/leistungen/crm-entwicklung` *(neu)* | individuelles CRM-System | CRM-Software entwickeln lassen | kommerziell |
| `/leistungen/buchungssystem-entwicklung` *(neu)* | Buchungssystem entwickeln lassen | Buchungssoftware für Unternehmen, Terminbuchung | kommerziell |
| `/leistungen/microsoft-power-platform` *(neu)* | Microsoft Power Platform Beratung | Power Apps, Power Automate, Power Platform vs. Individualentwicklung | kommerziell |
| `/leistungen/cloud-betrieb-wartung` | Software-Wartung & Cloud-Betrieb | Azure, Monitoring, Weiterentwicklung | kommerziell |
| `/leistungen/app-entwicklung` | App-Entwicklung Android & iOS | App entwickeln lassen | kommerziell |
| `/projekte/*` | Projektname + Lösungstyp | z. B. „Catering-Software“, „Logistiksoftware“ | Referenz |
| `/blog/*` | Informationsthemen | siehe Content-Plan | informational |

**Gegen Kannibalisierung:** „Softwareagentur + Ort“ ist auf `/` (Wuppertal) und `/leistungsgebiet` (Düsseldorf) aufgeteilt. „Individuelle Software“ und „Web-App/SaaS“ zielen auf getrennte Suchanfragen und verlinken gegenseitig.

## 6. Technische SEO-Verbesserungen (Prüfergebnisse)

- Prerendering: 37 Routen plus `404.html`, jede mit genau einer H1 (per Test erzwungen).
- Sitemap: 35 indexierbare URLs, keine `noindex`-Seiten, keine Preview-Hosts.
- robots.txt: `Allow: /` plus Sitemap-Verweis. Interne Bereiche gibt es auf dieser Domain nicht; die Buchungssystem-Subdomain ist separat.
- Canonicals: absolut, ohne Slash am Ende, auf `www`; die 404-Seite hat bewusst keinen.
- JSON-LD einer Leistungsseite: `Organization+ProfessionalService, WebSite, BreadcrumbList, Service, FAQPage`. Gültiges JSON per Build geprüft. Eine Validierung mit dem Google Rich Results Test steht noch aus (siehe Abschnitt 9).
- Interne Links: Der Test findet keine kaputten internen Links und keine verwaisten indexierbaren Seiten.

## 7. Performance-Ergebnisse (Lighthouse 12, lokal)

**Aufbau:** Produktions-Build lokal ausgeliefert (`serve`), Hostname per `--host-resolver-rules` auf `www.gentlegroup.de` gemappt, damit das Preview-`noindex` nicht greift. Mobile-Profil mit simulierter Drosselung. Lokal läuft nur HTTP; deshalb liegt Best Practices bei 79 („is-on-https“). Unter `localhost`, das als sicherer Kontext gilt, lag der Wert vorher wie nachher bei 100. Lighthouse schwankt zwischen Läufen um bis zu ±8 Punkte, deshalb sind Bandbreiten angegeben.

| Seite (Mobil) | Perf. vorher | Perf. nachher | A11y vorher → nachher | SEO vorher → nachher | CLS nachher |
| --- | --- | --- | --- | --- | --- |
| Startseite | 86–88 | 87–88 | 92 → 93 | 100 → 100 | 0,01 |
| Leistungsseite | 89 | 87–89 | 96 → 96 | 100 → 100 | 0,00 |
| Blogartikel | – | 88–89 | – → 96 | – → 100 | 0,04 |
| Startseite Desktop | 98 | 98 | 92 → 93 | 100 → 100 | 0,04 |

**Startseite ohne Consent-Banner** (entspricht wiederkehrenden Besuchern mit gespeicherter Einwilligung): Performance vorher 81–89 / LCP 3,1–3,7 s → nachher 90–96 / LCP 2,3–2,9 s.

**Warum der mobile LCP beim Erstbesuch bei ~3,2–3,4 s bleibt:** Das größte Element ist der **Text des Cookie-Banners** von Legal Cockpit. Er erscheint erst, nachdem das Drittanbieter-Skript geladen ist (`app.cockpit.legal`, ~62 kB, vom Anbieter unkomprimiert ausgeliefert). Ein Preload des Skripts brachte messbar nichts und wurde wieder entfernt. Das LCP-Ziel von 2,5 s ist beim Erstbesuch daher **nicht erreicht**.

Feldwerte (CrUX/INP) konnten lokal nicht gemessen werden. INP lässt sich nur mit echten Nutzerdaten bestimmen; TBT lag in allen Läufen unter 110 ms.

## 8. Testergebnisse

| Prüfung | Ergebnis |
| --- | --- |
| `tsc -b` | ✓ ohne Fehler |
| `npm run lint` | ✓ ohne Befunde |
| `npm test` | ✓ 4 Dateien, 53 Tests |
| `npm run build` | ✓ (Hinweis: JS-Bundle 595 kB / 180 kB gzip, Vite-Warnung > 500 kB) |
| Browser-Konsole (Lighthouse `errors-in-console`) | ✓ keine Fehler, keine Hydration-Warnungen |
| Mobile/Desktop-Sichtprüfung | Leistungsseiten, Übersicht, Leistungsgebiet; mobiler H1-Überlauf gefunden und behoben |

**Neue automatisierte Prüfungen:** genau eine H1 pro Route; keine kaputten internen Links; keine verwaisten Seiten; Titel ≤ 70 Zeichen mit Marke; Descriptions 50–160 Zeichen und eindeutig; keine `noindex`-Seiten in der Sitemap; 301 für alte Leistungs-URLs; keine Catch-all-Rewrite; erweiterter Template-Guard (Dummy-Text, du-Form, ®).

## 9. Offene Punkte (Entscheidung oder Prüfung nötig)

1. **Redaktionelle Freigabe** der neuen Leistungstexte (`src/data/serviceDetails.ts`) und FAQs. Sie enthalten keine Preise, Garantien oder Ergebnisse, beschreiben aber das Angebot und müssen fachlich bestätigt werden.
2. **Technologie-Listen** auf den Leistungsseiten (Next.js, React, TypeScript, Azure, Vercel, Power Apps …) bestätigen; .NET/C# vom alten Auftritt wurden bewusst nicht übernommen.
3. **Markenfarbe:** `--color-brand-primary` steht noch auf dem alten Acid-Lime `#d7ff3f` statt Aquamarine `#01FFA9` (AGENTS.md). Nicht geändert, weil das eine sichtbare Designentscheidung ist.
4. **Kontrast:** Tropical Indigo `#A97AFF` auf Ghost White (Überschriften-Akzente in GentleSuite, FAQ und Team) erreicht nur 2,65:1 statt 3:1. Lösung erfordert eine Designentscheidung.
5. **Impressum:** Unter „Verantwortlich für journalistisch-redaktionelle Inhalte“ steht noch `office@gentle-webdesign.com`. Das sollte rechtlich geprüft und vereinheitlicht werden; nicht verändert.
6. **Barrierefreiheitserklärung** fehlt noch (Seite bleibt `noindex`).
7. **Cookie-Banner:** LCP-Treiber sowie drei A11y-Befunde (Checkbox-Labels, `aria-label`-Abweichung) liegen beim Anbieter Legal Cockpit. Empfehlung: Anbieter auf Komprimierung und Barrierefreiheit ansprechen.
8. **Schriftlizenz/Self-Hosting:** Clash Display lokal auszuliefern würde den Fontshare-Umweg sparen. Vorher die Lizenz prüfen.
9. **Bundle-Größe:** framer-motion via `LazyMotion` und Splitting auf Routenebene (SSR-tauglich mit Suspense) könnten 30–60 kB gzip sparen. Das ist ein eigenes Refactoring.
10. **Team-Texte:** Die Platzhalter-Beschreibungen wurden entfernt; freigegebene Kurzbiografien können in `teamProfiles[].description` ergänzt werden.
11. **Fallback-Schrift auf Android:** Die Metrik-Anpassung greift dort nur, wo Arial bzw. Liberation Sans installiert ist.
12. **Rich Results Test / Schema Validator** auf der Live-Domain nach dem Deployment ausführen.
13. **Nicht deployt.** Die Änderungen liegen ungecommittet im Branch `seo/vollstaendige-optimierung`.

## 10. Empfehlungen für Google Search Console

1. Domain-Property `gentlegroup.de` (DNS-Verifizierung) anlegen bzw. prüfen, damit alle Varianten erfasst sind.
2. Nach dem Deployment `https://www.gentlegroup.de/sitemap.xml` einreichen und den Status „Erfolgreich“ abwarten.
3. URL-Prüfung und „Indexierung beantragen“ für `/`, `/leistungsgebiet` und die vier neuen Leistungsseiten.
4. Unter „Seiten“ die alten URLs `/leistungen/software|web|ai|operations|mobile` als „Seite mit Weiterleitung“ beobachten. Interne Links zeigen bereits auf die neuen URLs.
5. Im Bericht „Leistung“ Filter für Suchanfragen mit „düsseldorf“, „wuppertal“, „crm“, „buchungssystem“ und „power platform“ anlegen, um das Keyword-Mapping mit echten Daten zu prüfen.
6. Core-Web-Vitals-Bericht nach ~28 Tagen auswerten (Felddaten inkl. INP).
7. Zusätzlich Bing Webmaster Tools (Import aus der GSC) und ein **Google-Unternehmensprofil** für den Sitz Wuppertal. Für Düsseldorf **kein** Profil ohne echte Adresse anlegen.

## 11. Weitere Maßnahmen für bessere Rankings

- **Fallstudien vertiefen:** Mit Kundenfreigabe Screenshots, Projektumfang, eingesetzte Technologien und *belegbare* Ergebnisse ergänzen. Das sind die stärksten Vertrauens- und Rankingsignale.
- **Echte Kundenstimmen** mit schriftlicher Freigabe sammeln.
- **Lokale Signale:** Google-Unternehmensprofil (Wuppertal), konsistente NAP-Daten, Einträge in seriösen regionalen Verzeichnissen (IHK, Branchenverbände).
- **Backlinks:** Kunden um einen Credit-Link bitten (z. B. Skinbloom-Buchungssystem), Fachbeiträge, regionale Netzwerke und Veranstaltungen.
- **Content-Plan für drei Monate** (je Artikel: Fachprüfung vor Veröffentlichung, keine erfundenen Zahlen):

| Monat | Thema | Ziel-Keyword | Verlinkt auf |
| --- | --- | --- | --- |
| 1 | Was kostet individuelle Softwareentwicklung? Die wichtigsten Kostentreiber | Softwareentwicklung Kosten | `/leistungen/individuelle-softwareentwicklung` |
| 1 | Power Platform oder Individualentwicklung? Ein ehrlicher Vergleich | Power Platform vs. Individualentwicklung | `/leistungen/microsoft-power-platform` |
| 1 | Next.js oder WordPress für die Unternehmenswebsite | Next.js vs. WordPress | `/leistungen/webdesign-webentwicklung` |
| 2 | Was kostet eine professionelle Website? Aufwand verstehen | Website Kosten | `/leistungen/webdesign-webentwicklung` |
| 2 | KI-Agenten im Unternehmen: Einsatzfelder und Grenzen | KI-Agenten für Unternehmen | `/leistungen/ki-automatisierung` |
| 2 | Individuelles CRM oder Standard-CRM? | CRM individuell entwickeln | `/leistungen/crm-entwicklung` |
| 3 | SaaS entwickeln lassen: von der Idee zur ersten Version | SaaS entwickeln lassen | `/leistungen/web-app-saas-entwicklung` |
| 3 | Web-App oder native App? Entscheidungshilfe | Web-App vs. App | `/leistungen/app-entwicklung` |
| 3 | Website-Relaunch ohne Rankingverlust: Redirects, Canonicals, Sitemap | Website Relaunch SEO | `/leistungen/webdesign-webentwicklung` |

- **Bestehende Artikel:** Die zwölf Artikel sind fachlich korrekt, aber mit 40–55 Zeilen eher kurz. Empfohlen: die drei mit der höchsten Conversion-Nähe (Buchungssysteme, Preisrechner, Individual- vs. Standardsoftware) um Praxisbeispiele und Entscheidungskriterien erweitern und `dateModified` pflegen.

## Nachtrag 2026-11-09: Abgleich mit dem externen Website-Audit (Note B-, 78/100)

Der externe Audit hat die **Live-Seite** geprüft, also den Stand vor diesem Branch. Abgleich:

| Audit-Befund | Stand im Branch |
| --- | --- |
| og:image als SVG (FAIL) | Bereits behoben: PNG 1200×630 mit Maßen und Alt-Text |
| H1 in Buchstaben-Spans ohne Bezeichnung | Bereits behoben: echte Text-H1, Schriftzug dekorativ (`aria-hidden`) |
| H1 generisch, ohne Kernbegriffe | Bereits behoben: „Softwareagentur aus Wuppertal …“ |
| Team-Karten `<button aria-hidden>` fokussierbar | Behoben: `inert` statt `aria-hidden`/`tabIndex`, Container als `role="group"` |
| Kein Skip-Link | Behoben: „Zum Inhalt springen“ als erster Tab-Stopp, `<main id="main">` auf jeder Seite (per Test geprüft) |
| Kein `<nav>`-Landmark | Behoben: Hauptmenü, Footer-Navigation und Rechtslinks jeweils als `<nav aria-label>` |
| Marquee-H2 doppelt, Taglines als H4 | Behoben: Wiederholung `aria-hidden`, Taglines als `<p>` |
| Meta-Description > 155 Zeichen | Behoben: alle Descriptions ≤ 155 Zeichen (per Test erzwungen) |
| JSON-LD zu dünn | Behoben: `Organization`+`ProfessionalService`, Logo, Ort, Telefon, `contactPoint`, Gründer, `knowsAbout`, Service-Knoten. **`sameAs` fehlt noch**: Es werden die exakten Profil-URLs benötigt (Feld `siteConfig.sameAs`). |
| Keine `/llms.txt` | Behoben: wird bei jedem Build aus denselben Daten wie die Seiten erzeugt (`src/lib/llmsTxt.ts`) |
| Fonts von api.fontshare.com vor Einwilligung | Behoben: Clash Display selbst gehostet (`public/fonts`, WOFF2 400/500/600, Preload für 600). Kein Drittanbieter-Request mehr. **Bitte prüfen**, ob die ITF Free Font License Self-Hosting abdeckt. |
| Keine Telefonnummer | Behoben: Nummer aus dem Impressum (vom Inhaber freigegeben) in Footer und JSON-LD |
| Apple-Touch-Icon, PNG-Favicon, Manifest | Behoben: `apple-touch-icon.png`, `favicon-32.png`, `icon-192/512.png`, `site.webmanifest` |
| Outline-Schrift schwer lesbar, 10–11-px-Labels, `mix-blend-difference` im Header | **Offen**: Designentscheidung (wie Abschnitt 9, Punkte 3–4) |
| Team nur mit Vornamen | **Offen**: Vollständige Namen und Profil-Links nur mit Zustimmung der Personen |

**Messung nach dem Nachtrag** (Lighthouse 12, Mobil, lokal unter Produktions-Hostname): Startseite Performance 92, Accessibility 93, SEO 100, LCP 3,0 s, CLS 0,013. Leistungsseite CRM: 93 / 97 / 100, LCP 2,9 s, CLS 0. Die verbleibenden A11y-Befunde sind der Indigo-auf-Ghost-White-Kontrast (Designentscheidung) und das Cookie-Banner des Drittanbieters.

**Tests:** 91 (vorher 53), zusätzlich mit Regressionsprüfungen für die Audit-Befunde.
