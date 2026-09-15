# Content-Cluster-Plan — Gentle Group Studios

Stand: 2026-09-15

Dieser Plan listet Themenideen für den Blog, gruppiert nach sechs Kategorien. Jedes Thema ist mit einer realen Verknüpfung (Leistung, Projekt oder Produkt aus `src/data/siteContent.ts`) versehen — keine Themen ohne Bezug zur tatsächlichen Arbeit von Gentle Group Studios. 12 Themen sind bereits als vollständige Artikel geschrieben (`src/data/blog/posts/`), der Rest ist Planungsstand für künftige Artikel.

Spalten: **Suchintention** (was jemand sucht), **GEO-Potenzial** (wie gut sich das Thema für Zitate durch KI-Suchsysteme eignet), **Conversion-Potenzial** (wie nah das Thema an einer Projektanfrage liegt), **Verknüpfung** (Service-ID / Projekt-Slug / Produkt), **Status**.

## Webdesign

| Titel | Suchintention | GEO-Potenzial | Conversion-Potenzial | Verknüpfung | Status |
|---|---|---|---|---|---|
| UX/UI und Designsysteme: Strategie vor Pixeln | informational | Mittel | Mittel | `web` | Geschrieben |
| Barrierefreiheit im Web: Warum sie früh mitgedacht werden sollte | informational | Mittel | Niedrig | `web`, GentleAccess | Geschrieben |
| Woran man eine gute Unternehmenswebsite erkennt | informational | Mittel | Mittel | `web` | Geplant |
| Responsive Design jenseits von "funktioniert auf dem Handy" | informational | Niedrig | Niedrig | `web` | Geplant |
| Ladezeit als UX-Faktor | informational | Mittel | Niedrig | `web` | Geplant |
| Vom Wireframe zum fertigen Design | informational | Niedrig | Mittel | `web`, `processStages` | Geplant |
| Website-Relaunch: wann er sich lohnt | commercial | Mittel | Hoch | `web` | Geplant |
| Designsysteme für wachsende Unternehmen | informational | Niedrig | Mittel | `web` | Geplant |

## SEO

| Titel | Suchintention | GEO-Potenzial | Conversion-Potenzial | Verknüpfung | Status |
|---|---|---|---|---|---|
| SEO-Grundlagen für kleine Unternehmen in NRW | informational | Mittel | Mittel | `web` | Geplant |
| Technisches SEO: Ladezeit, Struktur, Meta-Daten | informational | Mittel | Niedrig | `web` | Geplant |
| Lokales SEO für Dienstleister in Wuppertal/Düsseldorf | informational | Hoch | Mittel | `/leistungsgebiet` | Geplant |
| Content-Struktur für Mensch und Maschine | informational | Hoch | Niedrig | `web` | Geplant |
| Warum strukturierte Daten (JSON-LD) wichtig sind | informational | Hoch | Niedrig | `src/lib/pageSeo.ts` | Geplant |
| SEO für Buchungssysteme und digitale Tools | informational | Mittel | Mittel | `software` | Geplant |
| Von Prerendering zu sichtbarer Google-Präsenz | technical | Hoch | Niedrig | technische Umsetzung | Geplant |
| Warum eine SPA ohne SEO-Strategie unsichtbar bleibt | technical | Mittel | Niedrig | technische Umsetzung | Geplant |

## GEO

| Titel | Suchintention | GEO-Potenzial | Conversion-Potenzial | Verknüpfung | Status |
|---|---|---|---|---|---|
| Generative Engine Optimization: Wie wir gentlegroup.de für KI-Suche aufbereitet haben | informational | Hoch | Mittel | eigene Umsetzung | Geschrieben |
| Ortsunabhängige Softwareentwicklung aus Wuppertal für NRW | commercial | Hoch | Hoch | `/leistungsgebiet` | Geschrieben |
| Wie ChatGPT/Perplexity Unternehmen finden und zitieren | informational | Hoch | Niedrig | — | Geplant |
| Schema.org als Grundlage für GEO | technical | Hoch | Niedrig | `src/lib/pageSeo.ts` | Geplant |
| Zitierbare Sätze statt Keyword-Dichte | informational | Hoch | Niedrig | — | Geplant |
| GEO vs. klassisches SEO | informational | Mittel | Niedrig | — | Geplant |
| FAQ-Seiten als GEO-Werkzeug | informational | Hoch | Niedrig | `src/data/faqContent.ts` | Geplant |
| Wie kleine Studios mit ehrlichem Content bestehen | informational | Mittel | Niedrig | — | Geplant |

## KI

| Titel | Suchintention | GEO-Potenzial | Conversion-Potenzial | Verknüpfung | Status |
|---|---|---|---|---|---|
| KI & Automatisierung in bestehenden Systemen — ohne Neubau | informational | Mittel | Mittel | `ai` | Geschrieben |
| Wann sich ein KI-Assistent für interne Prozesse lohnt | commercial | Mittel | Hoch | `ai` | Geplant |
| KI-Integration ohne bestehende Abläufe zu zerstören | informational | Mittel | Mittel | `ai` | Geplant |
| Automatisierte PDF-/Angebotserstellung mit KI | informational | Niedrig | Mittel | `ai`, GentleCalc | Geplant |
| Grenzen von KI-Automatisierung | informational | Mittel | Niedrig | `ai` | Geplant |
| APIs als Brücke zu KI-Diensten | technical | Niedrig | Niedrig | `ai` | Geplant |
| KI-gestützte Datenauswertung für kleine Unternehmen | informational | Mittel | Mittel | `ai` | Geplant |
| Vom manuellen Prozess zum automatisierten Workflow | informational | Mittel | Mittel | `ai`, `processStages` | Geplant |

## Web-Apps

| Titel | Suchintention | GEO-Potenzial | Conversion-Potenzial | Verknüpfung | Status |
|---|---|---|---|---|---|
| Digitale Buchungssysteme für Dienstleistungsbetriebe | commercial | Mittel | Hoch | `software`/`web`, Skinbloom Buchungssystem, GentleBook | Geschrieben |
| Digitale Preisrechner: vom Angebot zum fertigen PDF | commercial | Mittel | Hoch | `software`, Skinbloom Preisrechner, GentleCalc | Geschrieben |
| Logistiksoftware mit Web, API und mobiler Anwendung | commercial | Mittel | Hoch | `software`/`mobile`, Emma Solution | Geschrieben |
| Eine Content-Plattform für Web und Mobile | informational | Mittel | Mittel | `software`/`mobile`, Teretnjaci | Geschrieben |
| Portale und Kundenzugänge | informational | Niedrig | Mittel | `software` | Geplant |
| Dashboards, die Entscheidungen erleichtern | informational | Niedrig | Mittel | `software` | Geplant |
| API-first entwickeln | technical | Niedrig | Niedrig | `software` | Geplant |
| Web-App vs. native App: wann was | informational | Mittel | Mittel | `software`/`mobile` | Geplant |

## Softwareentwicklung

| Titel | Suchintention | GEO-Potenzial | Conversion-Potenzial | Verknüpfung | Status |
|---|---|---|---|---|---|
| Individuelle Software vs. Standardsoftware | commercial | Hoch | Hoch | `software`, Daily Gourmet, Emma Solution | Geschrieben |
| Cloud, Betrieb & Weiterentwicklung nach dem Launch | informational | Mittel | Mittel | `operations` | Geschrieben |
| Unser Projektprozess: von der Analyse bis zum Betrieb | informational | Hoch | Mittel | `processStages` (Hub-Artikel) | Geschrieben |
| Systemintegration: wenn Tools zusammenarbeiten müssen | informational | Niedrig | Mittel | `software` | Geplant |
| Skalierbare Architektur für kleine Teams | informational | Niedrig | Niedrig | `software` | Geplant |
| Wartung und Weiterentwicklung nach dem Launch | informational | Niedrig | Mittel | `operations` | Geplant |
| Monitoring und Sicherheit für KMU | informational | Mittel | Mittel | `operations` | Geplant |
| Vom Prototyp zum produktiven System | informational | Niedrig | Mittel | `software`, `processStages` | Geplant |

## Hinweise

- Kein Thema behauptet Kundenzahlen, Presseerwähnungen oder Unternehmensgeschichte, die nicht in `src/data/siteContent.ts` belegt sind.
- Der Barrierefreiheit-Artikel bezieht sich ausschließlich auf GentleAccess als Produkt/Methodik — keine Aussage darüber, dass gentlegroup.de selbst vollständig barrierefrei ist (die Seite `/barrierefreiheit` ist aktuell ein Platzhalter).
- Neue Artikel werden als eigene Datei unter `src/data/blog/posts/<slug>.ts` angelegt und in `src/data/blog/index.ts` registriert — die Route `/blog/<slug>` sowie Sitemap-Eintrag und JSON-LD entstehen dadurch automatisch über `src/lib/pageSeo.ts`.
