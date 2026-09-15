# SEO- und GEO-Migrationsplan

Stand: 2026-09-09

## Ausgangslage

Die Anwendung ist eine React/Vite-SPA. Sie nutzte zunächst `HashRouter`, eine gemeinsame statische Meta Description, keine Canonical-/Social-Metadaten und keine strukturierte Daten. Die Projektübersicht veröffentlichte mehr Legacy-Kandidaten als die bestätigte Home-Seite. Die neue kanonische Quelle ist `https://www.gentlegroup.de`.

## Umgesetzt

- Browser-Routen `/`, `/projekte`, `/projekte/:slug` und `/projekt-starten`.
- Routenspezifische Titles, Descriptions, Canonicals, Open Graph, Twitter Cards und `Organization`/`WebSite`-JSON-LD.
- Preview-Hosts erhalten im initialen HTML und nach Navigation `noindex, nofollow`.
- Sitemap und Robots-Datei enthalten ausschließlich die vorhandenen kanonischen Seiten.
- Fünf bestätigte Projekt-Datensätze besitzen eigene interne Detail-URLs.
- Öffentliche Projektübersicht zeigt keine unbestätigten Legacy-Archivkandidaten.
- Sichtbare englische Navigationsbegriffe und alte Markenschreibweisen wurden entfernt.

## URL- und Keyword-Map

| URL | Suchintention | Primäres Thema | Conversion |
| --- | --- | --- | --- |
| `/` | kommerzielle Orientierung | individuelle Software, Web-Apps und KI für Unternehmen | Projektanfrage |
| `/projekte` | Referenzsuche | digitale Projekte und Fallstudien | Projektanfrage |
| `/projekte/daily-gourmet` | Case Study | individuelle Catering-Management-Plattform | vergleichbares Projekt anfragen |
| `/projekte/skinbloom-buchungssystem` | Case Study | individuelles Buchungssystem | vergleichbares Projekt anfragen |
| `/projekte/skinbloom-preisrechner` | Case Study | digitaler Preisrechner | vergleichbares Projekt anfragen |
| `/projekte/emma-solution` | Case Study | Logistik-Management-Plattform | vergleichbares Projekt anfragen |
| `/projekte/teretnjaci` | Case Study | Content-Plattform für Web und Mobile | vergleichbares Projekt anfragen |
| `/projekt-starten` | transaktional | digitale Projektanfrage | E-Mail-Anfrage |

Regionale Begriffe wie Wuppertal, Düsseldorf und NRW werden als Leistungsgebiet verwendet. Es wird kein Büro in Düsseldorf behauptet.

## Redirect-Matrix für den Go-live

| Alte URL | Neue URL | Status |
| --- | --- | --- |
| `/#/` | `/` | 301 auf Server-/Hostingebene |
| `/#/projects` | `/projekte` | 301 auf Server-/Hostingebene |
| `/#/work/daily-gourmet` | `/projekte/daily-gourmet` | 301 auf Server-/Hostingebene |
| `/#/work/skinbloom-buchungssystem` | `/projekte/skinbloom-buchungssystem` | 301 auf Server-/Hostingebene |
| Legacy-Projekt-URLs | nur nach Prüfung je URL | offen, keine pauschale Startseiten-Weiterleitung |

Hash-Fragmente werden nicht serverseitig an den Server gesendet. Die Hash-Kompatibilität muss deshalb beim alten Hosting oder per Client-Migration begleitet werden.

## Offene Risiken und Bestätigungen

- Impressum, Datenschutz, AGB und Barrierefreiheit benötigen geprüfte Inhalte und eigene finale Routen.
- Technologie-, Rollen-, Kunden- und Ergebnisangaben der Case Studies müssen vor Veröffentlichung fachlich und rechtlich freigegeben werden.
- Für ein echtes 301-Mapping der alten Website wird ein Crawl-/Export der alten URL-Struktur benötigt.
- Vercel muss für alle Browser-Routen einen SPA-Fallback auf `index.html` konfigurieren; die aktuelle Vorschau-Deployment-Konfiguration wurde nicht verändert.
- Search Console, Bing Webmaster Tools, Analytics und Unternehmensprofile wurden nicht verändert.

## Go-live-Checkliste

1. Domain auf `www.gentlegroup.de` und HTTPS prüfen.
2. SPA-Fallback und 301-Redirects im Hosting konfigurieren.
3. Legaltexte und Unternehmensdaten freigeben.
4. Sitemap und Robots unter der Produktionsdomain abrufen.
5. Canonicals, Statuscodes, JSON-LD, mobile Darstellung, Tastaturfokus und Browserkonsole prüfen.
6. Erst danach Sitemap in Search Console und Bing Webmaster Tools einreichen.
