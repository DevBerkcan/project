# Google Ads (SEA) – Startpaket Gentle Group Studios

Stand: 27.11.2026 · Sprache: Deutsch (Sie-Form) · Status: **startbereit vorbereitet, aber noch nicht live**

Dieses Verzeichnis enthält alles, um ein schlankes, auf Projektanfragen ausgerichtetes Google-Ads-Konto für Gentle Group Studios aufzusetzen:

| Datei | Inhalt |
| --- | --- |
| `README.md` | Strategie, Struktur, Budget, Tracking-Voraussetzungen, Assets, Checkliste, Optimierungsplan |
| `google-ads-editor-import.csv` | Bulk-Import für Google Ads Editor: 4 Kampagnen, 14 Anzeigengruppen, 212 Keywords, 14 responsive Suchanzeigen |
| `negative-keywords.txt` | Ausschlusskeywords als kontoweite Liste |
| `validate.mjs` | Prüfskript ohne Abhängigkeiten für Zeichenlimits und verbotene Formulierungen (CSV und Asset-Tabellen in dieser README) |
| `generate.mjs` | Erzeugt die CSV aus den Kampagnendaten im Skript. Änderungen an Keywords und Anzeigen dort vornehmen, dann CSV neu erzeugen und `validate.mjs` ausführen. |

> **Wichtig:** Alle Kampagnen sind im CSV auf `Paused` gesetzt. Nach dem Import läuft nichts, bis Sie die Kampagnen bewusst aktivieren. **Vor dem Aktivieren muss das Conversion-Tracking stehen (Abschnitt 5).**

---

## 1. Ziel & Strategie

**Ziel:** qualifizierte Projektanfragen über `https://www.gentlegroup.de/projekt-starten` sowie Anrufe von Unternehmen aus Wuppertal, NRW und – bei Nischenthemen – Deutschland.

**Rolle von SEA:** Die neue Website und ihre Leistungsseiten brauchen Zeit, bis sie organisch ranken. Google Ads überbrückt diese Phase:

1. **Sofortige Sichtbarkeit** für Suchanfragen mit klarer Kaufabsicht („… entwickeln lassen“, „Agentur Wuppertal“).
2. **Lernen für SEO:** Der Suchbegriffbericht zeigt, mit welchen Worten echte Interessenten suchen. Begriffe mit guten Klick- und Anfragewerten wandern in die SEO-Planung (`docs/content-cluster-plan.md`, `docs/seo-migration-plan.md`): Seitentitel, H1/H2, FAQ-Abschnitte, neue Leistungs- oder Ratgeberseiten.
3. **Botschaften testen:** Responsive Suchanzeigen zeigen, welche Aussagen (Ergebnis, Prozess, Referenzen, Region) am besten ziehen. Gewinner-Formulierungen fließen in Meta-Descriptions und Seitentexte.

**Grundsätze:**

- Nur Suchnetzwerk. Kein Display, keine Performance Max, keine Suchnetzwerk-Partner zum Start – volle Kontrolle über Suchbegriffe bei kleinem Budget.
- Nur Phrase- und Exact-Match. Broad Match erst, wenn conversionbasierte Gebote mit belastbaren Daten laufen.
- Jede Anzeigengruppe führt auf die passende Leistungsseite, nicht auf die Startseite (Ausnahme: allgemeine Agentur- und Brand-Suchen).
- Anzeigentexte enthalten **nur belegte Aussagen** (siehe AGENTS.md, Abschnitte 7 und 9.2). Keine Preise, Rabatte, Kundenzahlen, Bewertungen, Auszeichnungen, Reaktionszeitversprechen, Garantien oder Superlative.

---

## 2. Kontostruktur

Sprache in allen Kampagnen: **Deutsch**. Netzwerke: **nur Google-Suche**. Standortoption in allen Kampagnen: **„Präsenz: Personen, die sich in Ihren Zielregionen befinden oder sich regelmäßig dort aufhalten“** – *nicht* „Präsenz oder Interesse“. Sonst werden Klicks von Personen bezahlt, die sich nur für die Region interessieren, aber woanders sitzen.

| Kampagne | Anzeigengruppe | Keywords (Phrase + Exact) | Landingpage | Geo | Tagesbudget |
| --- | --- | --- | --- | --- | --- |
| Search \| Lokal Wuppertal | Softwareentwicklung Wuppertal | 14 | /leistungen/individuelle-softwareentwicklung | Wuppertal + 30 km Umkreis | 4,50 € (Kampagne) |
| | Webdesign Wuppertal | 16 | /leistungen/webdesign-webentwicklung | ″ | ″ |
| | App-Entwicklung Wuppertal | 12 | /leistungen/app-entwicklung | ″ | ″ |
| | Digitalagentur Wuppertal | 12 | / (Startseite) | ″ | ″ |
| Search \| Software & Web-Apps NRW | Individualsoftware | 20 | /leistungen/individuelle-softwareentwicklung | Nordrhein-Westfalen | 4,50 € (Kampagne) |
| | Web-App entwickeln | 18 | /leistungen/web-app-saas-entwicklung | ″ | ″ |
| | SaaS entwickeln | 14 | /leistungen/web-app-saas-entwicklung | ″ | ″ |
| | Software Düsseldorf | 12 | /leistungen/individuelle-softwareentwicklung | ″ | ″ |
| Search \| Nischen NRW+DE | CRM-Entwicklung | 16 | /leistungen/crm-entwicklung | NRW (Option: Deutschland) | 3,50 € (Kampagne) |
| | Buchungssystem-Entwicklung | 16 | /leistungen/buchungssystem-entwicklung | ″ | ″ |
| | Power Platform | 16 | /leistungen/microsoft-power-platform | ″ | ″ |
| | KI-Automatisierung | 18 | /leistungen/ki-automatisierung | ″ | ″ |
| | Cloud-Betrieb & Wartung | 16 | /leistungen/cloud-betrieb-wartung | ″ | ″ |
| Search \| Brand | Brand | 12 | / (Startseite) | Deutschland | 1,00 € (Kampagne) |

Alle Landingpages beginnen mit `https://www.gentlegroup.de`.

**Hinweise zur Struktur**

- **Lokal Wuppertal:** Umkreis 30 km um Wuppertal deckt u. a. Solingen, Remscheid, Velbert, Hagen, Schwelm und Teile von Essen und Düsseldorf ab. Die Keywords enthalten „wuppertal“, die Region schränkt zusätzlich auf Personen vor Ort ein.
- **Software & Web-Apps NRW:** generische Begriffe ohne Ortsnamen, ausgespielt in ganz NRW (inkl. Wuppertal). Die Anzeigengruppe **Software Düsseldorf** bedient Kunden aus Düsseldorf. Da es dort **kein Büro** gibt, ist „Sitz in Wuppertal“ auf Position 2 gepinnt, und die Texte sprechen von „für Kunden in Düsseldorf“, nie von einem Standort dort.
- **Nischen NRW+DE:** spezialisierte Themen mit geringem Suchvolumen. Start mit NRW; wenn nach 2–4 Wochen zu wenige Impressionen kommen (Budget wird nicht ausgeschöpft), Geo auf **Deutschland** erweitern – Projekte werden auch remote betreut.
- **Brand:** schützt Markensuchen günstig vor Mitbewerbern und fängt Personen ab, die die Website über Empfehlungen suchen. Geringes Budget genügt.
- **Überschneidung Lokal/NRW:** Google bevorzugt bei identischen Keywords die passendere Kampagne. Falls im Suchbegriffbericht Wuppertal-Suchen über die NRW-Kampagne laufen, in „Search | Software & Web-Apps NRW“ den Ausschluss `"wuppertal"` (Phrase) auf Kampagnenebene setzen. **Nicht** in der Nischen-Kampagne, dort gibt es keine Wuppertal-Entsprechung.

**Pinning:** Pro Anzeige ist nur Headline 1 (Leistungsbegriff) auf Position 1 gepinnt. Ausnahme Düsseldorf (zusätzlich „Sitz in Wuppertal“ auf Position 2). Weiteres Pinning senkt die Anzeigeneffektivität und ist nicht nötig.

---

## 3. Budgetvorschlag

**Startrahmen: 300–500 € pro Monat.** Der CSV-Import ist auf die Mitte ausgelegt (13,50 €/Tag ≈ 410 €/Monat bei 30,4 Tagen).

| Kampagne | Anteil | 300 €/Monat | **≈ 410 €/Monat (CSV)** | 500 €/Monat |
| --- | --- | --- | --- | --- |
| Search \| Lokal Wuppertal | ca. 33 % | 3,30 €/Tag | **4,50 €/Tag** | 5,50 €/Tag |
| Search \| Software & Web-Apps NRW | ca. 33 % | 3,30 €/Tag | **4,50 €/Tag** | 5,50 €/Tag |
| Search \| Nischen NRW+DE | ca. 26 % | 2,60 €/Tag | **3,50 €/Tag** | 4,20 €/Tag |
| Search \| Brand | ca. 8 % | 0,70 €/Tag | **1,00 €/Tag** | 1,20 €/Tag |
| **Summe** | 100 % | ≈ 9,90 €/Tag | **13,50 €/Tag** | ≈ 16,40 €/Tag |

**Klickpreise (CPC) sind nicht bekannt.** In diesem Paket stehen bewusst keine CPC-Schätzungen. Vor dem Start:

1. In **Google Ads > Tools > Keyword-Planer > „Suchvolumen und Prognosen abrufen“** alle Keywords aus dem CSV einfügen (Region und Sprache je Kampagne wie oben).
2. Für jede Anzeigengruppe die Spanne „Gebot für obere Seitenpositionen (niedriger/höherer Bereich)“ notieren.
3. Prüfen: Reicht das Tagesbudget für mindestens ca. 3–5 Klicks pro Tag und Kampagne? Wenn nicht, lieber **weniger Anzeigengruppen aktivieren** (z. B. Lokal + Individualsoftware + Brand) als alles zu dünn zu verteilen.
4. CPC-Obergrenze (Abschnitt 4) auf Basis dieser Werte setzen.

Google kann an einzelnen Tagen bis zum Doppelten des Tagesbudgets ausgeben; das Monatsbudget (Tagesbudget × 30,4) wird nicht überschritten.

---

## 4. Gebotsstrategie

| Phase | Strategie | Einstellung |
| --- | --- | --- |
| Woche 1 bis 2–4 | **Klicks maximieren** mit CPC-Obergrenze (im CSV voreingestellt, Obergrenze manuell setzen) **oder** **Manueller CPC** | Obergrenze aus dem Keyword-Planer ableiten (eher unteres Ende der „oberen Seitenpositionen“). Kein „Auto-optimierter CPC“, solange Conversions fehlen. |
| ab ≥ 15–30 Conversions in 30 Tagen (pro Kampagne oder über ein Portfolio) | **Conversions maximieren** | Zwei Wochen beobachten, Budget nicht gleichzeitig stark ändern. |
| danach, bei stabiler Datenlage | **Ziel-CPA (tCPA)** | Ziel = tatsächliche Kosten pro Anfrage der letzten 30 Tage, nicht niedriger ansetzen. |

**Ohne funktionierendes Conversion-Tracking (Abschnitt 5) wird nicht auf conversionbasierte Gebote umgestellt.** Die Strategie würde sonst „blind“ optimieren.

Kontoeinstellungen zum Start:

- **Automatisch angewendete Empfehlungen: alle aus** (Google Ads > Empfehlungen > Automatisch anwenden).
- **Automatisch erstellte Assets: aus** (Kampagneneinstellungen > Weitere Einstellungen). Sonst erzeugt Google Texte aus der Website, die ungeprüfte Aussagen enthalten können.
- **Suchnetzwerk-Partner und Displaynetzwerk: aus.**
- **Broad Match auf Kampagnenebene: aus.**
- **Auto-Tagging: an** (Verwaltung > Kontoeinstellungen), notwendig für GA4-Verknüpfung.

---

## 5. Conversion-Tracking – Voraussetzung vor dem Start (Blocker)

> **Status: BLOCKER.** Die Website hat derzeit **kein Tracking**. `src/lib/analytics.ts` ist ein No-op (definiert nur Events wie `contactSubmitted`, sendet nichts). Laut `docs/consent-integration.md` sind im Legal Cockpit die Kategorien `Google Tag Manager`, `Microsoft` und `Google Analytics` *konfiguriert, aber nicht installiert*; es gibt weder GTM-Container noch GA4-Mess-ID. **Ohne Tracking keine Messung von Anfragen, keine Optimierung, keine conversionbasierten Gebote.**

Kampagnen dürfen technisch ohne Tracking starten (z. B. Brand oder ein kurzer Test mit „Klicks maximieren“), aber jede Auswertung jenseits von Klicks ist dann unmöglich. Empfehlung: **Tracking zuerst, dann Kampagnen aktivieren.**

### Was der Inhaber bereitstellt

| # | Element | Wo | Ergebnis |
| --- | --- | --- | --- |
| 1 | **GA4-Property + Web-Datenstream** für `www.gentlegroup.de` | analytics.google.com > Verwaltung > Property erstellen | Mess-ID `G-XXXXXXXXXX` |
| 2 | **Google-Ads-Konto** (Kunden-ID `XXX-XXX-XXXX`) | ads.google.com | Konto im „Expertenmodus“ anlegen, *nicht* Smart-Kampagnen |
| 3 | **Verknüpfung GA4 ↔ Google Ads** | GA4 > Verwaltung > Produktverknüpfungen > Google Ads | Conversions und Zielgruppen können übergeben werden |
| 4 | **Consent-Kategorie für Google Ads im Legal Cockpit** | Legal Cockpit-Konfiguration | Eigene Kategorie, z. B. „Google Ads“ (Marketing), zusätzlich zur vorhandenen Kategorie „Google Analytics“; Banner-Text entsprechend anpassen |
| 5 | **Datenschutzerklärung ergänzen** (Google Analytics 4, Google Ads Conversion-Tracking, Consent Mode) | `/datenschutz` | Rechtlich prüfen lassen – Texte nicht improvisieren |
| 6 | **Datenverarbeitungsbedingungen** von Google akzeptieren | Google Ads und GA4 > Verwaltung | Auftragsverarbeitung geregelt |

### Was die Entwicklung umsetzt (sobald die IDs vorliegen)

- **Google-Tag (gtag.js) oder GTM** laden – nur blockiert über Legal Cockpit: `type="text/plain"` und exakt die konfigurierte Kategorie (z. B. `data-cookiecategory="Google Analytics"`), siehe `docs/consent-integration.md`.
- **Consent Mode v2**: Standard vor jeder Einwilligung `analytics_storage`, `ad_storage`, `ad_user_data`, `ad_personalization` = `denied`; Aktualisierung auf `granted` nur für die Kategorien, denen zugestimmt wurde; Widerruf setzt wieder auf `denied`. Prüfen, ob Legal Cockpit Consent Mode v2 selbst sendet; sonst über dessen Callback ein `gtag('consent', 'update', …)` auslösen.
- **Conversion „Projektanfrage“** = erfolgreiches Absenden des Formulars auf `/projekt-starten`, also das bestehende Event **`contactSubmitted`** aus `src/lib/analytics.ts`, ausgelöst **erst nach bestätigter erfolgreicher Übermittlung** (nicht beim Klick, nicht beim Öffnen eines Mail-Programms). **Keine Formularwerte und keine personenbezogenen Daten** (Name, E-Mail, Telefon, Freitext) an GA4 oder Google Ads senden. Enhanced Conversions (gehashte E-Mail) daher **nicht** aktivieren, sofern nicht später ausdrücklich rechtlich geprüft und freigegeben.
- Optional als Mikro-Conversion (nur „Sekundär“, nicht für Gebote): `projectCtaClicked`, `contactStarted`.
- Projektanfrage-Flow von Session-Recordings (Microsoft Clarity) ausschließen, siehe `docs/consent-integration.md`.

### Einrichtung in Google Ads

1. GA4: Event `contactSubmitted` als **Schlüsselereignis** markieren.
2. Google Ads > Ziele > Conversions > **Neue Conversion-Aktion > Import > Google Analytics 4 > Web** > `contactSubmitted` wählen. Name: „Projektanfrage“, Kategorie „Lead-Formular senden“, Zählung **„Eine“**, Aktion **primär**.
3. **Anrufe über Anzeigen:** Conversion-Aktion „Anrufe über Anzeigen“ anlegen, Mindestdauer z. B. 60 Sekunden, Zählung „Eine“, primär. Voraussetzung: Anrufbericht im Anruf-Asset aktiv (Abschnitt 6).
4. Optional später: „Anrufe von Website“ über Google-Weiterleitungsnummer (erfordert Website-Snippet und Einwilligung).
5. Funktionstest: Testanfrage mit Einwilligung absenden, in GA4 „Echtzeit“/DebugView prüfen; in Google Ads Status „Aufzeichnung von Conversions“ abwarten (bis zu 24–48 h). Gegenprobe: Einwilligung ablehnen, im Netzwerk-Tab dürfen keine Cookies gesetzt werden.

> **Merksatz:** Erst wenn „Projektanfrage“ in Google Ads als „aktiv“ Conversions aufzeichnet, ist die Umstellung auf „Conversions maximieren“ erlaubt.

---

## 6. Assets (Anzeigenerweiterungen)

Assets werden **im Google-Ads-UI auf Kontoebene** angelegt (Anzeigen & Assets > Assets > +). Sie stehen nicht im CSV, weil Google Ads Editor Assets in eigenen Tabellen/Importformaten führt und ein gemischter Import fehleranfällig ist. Die folgenden Tabellen werden von `validate.mjs` mitgeprüft (Markierungen nicht entfernen).

### Sitelinks (Linktext ≤ 25, Beschreibungen ≤ 35 Zeichen)

<!-- assets:sitelinks:start -->
| Linktext | Beschreibung 1 | Beschreibung 2 | Final URL |
| --- | --- | --- | --- |
| Projekt anfragen | Formular für Ihr Vorhaben | In wenigen Schritten ausfüllen | https://www.gentlegroup.de/projekt-starten |
| Referenzen | Projekte aus Catering und Beauty | Logistik- und Content-Plattformen | https://www.gentlegroup.de/projekte |
| Individuelle Software | Software nach Ihren Abläufen | Passend zu bestehenden Systemen | https://www.gentlegroup.de/leistungen/individuelle-softwareentwicklung |
| Web-Apps & SaaS | Portale, Dashboards und SaaS | Mit Next.js und React | https://www.gentlegroup.de/leistungen/web-app-saas-entwicklung |
| KI-Automatisierung | KI-Agenten und Workflows | Verantwortungsvoll integriert | https://www.gentlegroup.de/leistungen/ki-automatisierung |
| Webdesign | Websites mit klarer Struktur | Responsiv und SEO-freundlich | https://www.gentlegroup.de/leistungen/webdesign-webentwicklung |
| App-Entwicklung | Apps für Android und iOS | Von der Konzeption bis zum Betrieb | https://www.gentlegroup.de/leistungen/app-entwicklung |
| Buchungssysteme | Online-Terminbuchung nach Maß | Referenz aus Beauty & Ästhetik | https://www.gentlegroup.de/leistungen/buchungssystem-entwicklung |
<!-- assets:sitelinks:end -->

Empfehlung: alle 8 auf Kontoebene; in „Search | Brand“ zusätzlich auf Kampagnenebene die vier wichtigsten (Projekt anfragen, Referenzen, Individuelle Software, Web-Apps & SaaS).

### Callouts / Zusatzinformationen (≤ 25 Zeichen)

<!-- assets:callouts:start -->
| Text |
| --- |
| Kostenloses Erstgespräch |
| Sitz in Wuppertal |
| Entwicklung in Etappen |
| Sichtbare Zwischenstände |
| Design und Code vereint |
| Betrieb nach dem Launch |
| Passt zu Ihren Systemen |
| Für NRW & deutschlandweit |
| Next.js, React & Azure |
<!-- assets:callouts:end -->

### Snippets (Header „Leistungen“ bzw. „Typen“, Werte ≤ 25 Zeichen, mit `;` getrennt)

<!-- assets:snippets:start -->
| Header | Werte |
| --- | --- |
| Leistungen | Individuelle Software; Web-Apps; Websites; Android- & iOS-Apps; KI-Automatisierung; CRM-Systeme; Buchungssysteme; Cloud-Betrieb |
| Typen | Kundenportale; Dashboards; SaaS-Plattformen; Buchungssysteme; Preisrechner; Workflow-Automationen |
<!-- assets:snippets:end -->

Im deutschen UI heißen die Header „Leistungen“ (Service catalog) und „Typen“ (Types).

### Anruf-Asset

| Feld | Wert |
| --- | --- |
| Land | Deutschland |
| Telefonnummer | +49 175 4701892 (für die Veröffentlichung freigegeben) |
| Anrufberichte | **an** (Voraussetzung für Conversion „Anrufe über Anzeigen“) |
| Zeitplan | **nur zu Zeiten, in denen tatsächlich jemand abnimmt** – vom Inhaber festzulegen (offener Punkt) |
| Ebene | Konto (alle Kampagnen) |

Hinweis: Google prüft Mobilnummern teilweise strenger (Nummernverifizierung). Falls das Asset abgelehnt wird, Verifizierung per Code im UI durchführen.

### Standort-Asset

Sobald das **Google Unternehmensprofil** (Girardetstraße 17, 42109 Wuppertal) verifiziert ist: Google Ads > Assets > Standort > Unternehmensprofil verknüpfen. Bis dahin entfällt das Standort-Asset. Kein Standort-Asset für Düsseldorf.

### Optional: Bilder und Logo

Bild-Assets (quadratisch 1:1 und 1,91:1) und Logo erst einsetzen, wenn freigegebene Motive vorliegen. Logo gemäß AGENTS.md, Abschnitt 3; Projekt-Screenshots nur mit Kundenfreigabe.

---

## 7. Negative-Keyword-Strategie

Die vollständige Liste steht in `negative-keywords.txt` und wird als **kontoweite Ausschlussliste** („Gemeinsam genutzte Bibliothek > Listen mit auszuschließenden Keywords“) angelegt und mit allen Kampagnen verknüpft.

| Gruppe | Warum | Beispiele |
| --- | --- | --- |
| Jobs & Karriere | Jobsuchende statt Auftraggeber | job, stellenangebot, gehalt, ausbildung, praktikum, werkstudent, bewerbung |
| Bildung | Lernende statt Auftraggeber | studium, kurs, schulung, zertifizierung, tutorial, lernen |
| Selbermachen & gratis | Kein Projektbudget / Do-it-yourself | kostenlos, gratis, vorlage, template, selber, baukasten |
| Baukästen & Hosting | Nutzer suchen das fremde Produkt | wix, jimdo, squarespace, ionos, strato |
| Fremdsoftware | Nutzer wollen ein bestehendes Produkt nutzen oder herunterladen | download, apk, login, crack, salesforce, hubspot, datev, doctolib, treatwell |
| Wissen & Definition | Informationssuche ohne Auftragsabsicht | was ist, definition, bedeutung, wikipedia, pdf |
| Unpassende Themen | Spiele, Privates, Hausaufgaben | spiele, game, minecraft, privat, hausaufgabe |

Wichtig:

- **Nicht ausschließen:** „agentur“, „kosten“, „preis“, „freelancer“, „erfahrungen“, „vergleich“ – das sind häufig echte Interessenten. Werte im Suchbegriffbericht beobachten.
- Die Notation in der Datei folgt Google Ads: `wort` = Broad-Ausschluss, `"wort folge"` = Phrase-Ausschluss, `[wort folge]` = Exact-Ausschluss.
- Zeilen mit `#` sind Kommentare und werden beim Einfügen nicht mitkopiert (siehe Checkliste).
- Ausschlüsse **wöchentlich** aus dem Suchbegriffbericht ergänzen (Abschnitt 9).

---

## 8. Launch-Checkliste

**A. Vorbereitung (einmalig)**

1. [ ] Google-Ads-Konto im **Expertenmodus** anlegen, Zeitzone **Europe/Berlin**, Währung **EUR** (beides später nicht änderbar). Rechnungsdaten hinterlegen.
2. [ ] **Werbetreibenden-Bestätigung** (Advertiser Verification) abschließen, falls Google sie anfordert.
3. [ ] **Conversion-Tracking** komplett gemäß Abschnitt 5 (inkl. Testanfrage und Consent-Gegenprobe).
4. [ ] Datenschutzerklärung um Google Ads/GA4 ergänzt und rechtlich geprüft.
5. [ ] Landingpages live und erreichbar (alle Final URLs aus Abschnitt 2 mit Status 200, mobil geprüft, Formular auf `/projekt-starten` funktioniert).
6. [ ] **Keyword-Planer**: CPC-Spannen je Anzeigengruppe prüfen (Abschnitt 3).

**B. Dateien prüfen**

7. [ ] Im Repository ausführen:
   ```bash
   node docs/marketing/google-ads/validate.mjs
   ```
   Erwartet: `OK – alle Zeichenlimits und Inhaltsregeln eingehalten.` und Exit-Code 0. Nach jeder Textänderung erneut ausführen.

**C. Import mit Google Ads Editor**

8. [ ] Google Ads Editor installieren, mit dem Konto anmelden, **„Neueste Änderungen abrufen“**.
9. [ ] **Konto > Importieren > Aus Datei…** > `google-ads-editor-import.csv` wählen. Falls der Editor Spalten nicht automatisch zuordnet, Zuordnung im Dialog bestätigen (Spaltennamen: `Campaign`, `Campaign Type`, `Networks`, `Budget`, `Budget type`, `Bid Strategy Type`, `Languages`, `Campaign Status`, `Ad Group`, `Ad Group Status`, `Keyword`, `Criterion Type`, `Ad type`, `Headline 1…15`, `Headline 1…15 position`, `Description 1…4`, `Path 1`, `Path 2`, `Final URL`, `Status`).
   - Match-Typen stehen in `Criterion Type` (`Phrase`/`Exact`), die Keywords selbst ohne Anführungszeichen/Klammern – das ist eindeutiger als die Notation `"keyword"`/`[keyword]` und vermeidet Escaping-Probleme im CSV.
   - Alternativ: Inhalt in **Konto > Mehrere Änderungen vornehmen** einfügen.
10. [ ] Importvorschau prüfen: 4 Kampagnen, 14 Anzeigengruppen, 212 Keywords, 14 Anzeigen; keine Fehler. Warnungen lesen.
11. [ ] Im Editor pro Kampagne ergänzen (nicht im CSV, da Ortsnamen-Zuordnung im Editor fehleranfällig ist):
    - **Standorte** gemäß Abschnitt 2 (Wuppertal-Umkreis 30 km / Nordrhein-Westfalen / Deutschland).
    - **Standortoption „Präsenz“** (Erweiterte Standortoptionen).
    - Sprache prüfen: Deutsch.
    - Netzwerke: Suchnetzwerk-Partner **aus**, Displaynetzwerk **aus**.
    - Gebotsstrategie „Klicks maximieren“ mit **Max. CPC-Gebotsobergrenze** aus Schritt 6, oder auf „Manueller CPC“ umstellen und Gebote je Anzeigengruppe setzen.
    - Angabe zu **politischer Werbung in der EU**: „Diese Kampagne enthält keine politische Werbung in der EU“.
    - Werbezeitplan optional (z. B. Mo–Fr), anfangs ganztägig laufen lassen, um Daten zu sammeln.
12. [ ] **Änderungen veröffentlichen** (Kampagnen bleiben pausiert).

**D. Im Google-Ads-UI**

13. [ ] Ausschlussliste anlegen: Gemeinsam genutzte Bibliothek > Listen mit auszuschließenden Keywords > „+“ > Name „Konto – Standard-Ausschlüsse“. Inhalt ohne Kommentare einfügen:
    ```bash
    grep -v '^#' docs/marketing/google-ads/negative-keywords.txt | grep -v '^[[:space:]]*$'
    ```
    Liste mit **allen vier Kampagnen** verknüpfen.
14. [ ] Assets gemäß Abschnitt 6 anlegen (Sitelinks, Callouts, Snippets, Anruf). Standort-Asset, sobald das Unternehmensprofil verifiziert ist.
15. [ ] Automatisch angewendete Empfehlungen **aus**, automatisch erstellte Assets **aus**, Auto-Tagging **an**.
16. [ ] Conversion-Ziele: nur „Projektanfrage“ und „Anrufe über Anzeigen“ als **primär**; alle anderen sekundär.
17. [ ] **Anzeigenvorschau-Tool** (Tools > Anzeigenvorschau und -diagnose) mit Standort Wuppertal für 2–3 Keywords prüfen – nicht selbst googeln und klicken.
18. [ ] Kampagnen aktivieren: zuerst **Brand** und **Lokal Wuppertal**, nach 2–3 Tagen ohne Auffälligkeiten **NRW** und **Nischen**.
19. [ ] Nach 24 h: Anzeigenstatus „Berechtigt“, keine abgelehnten Anzeigen/Assets, Budget läuft an.

---

## 9. Optimierungsplan

**Woche 1 – Kontrolle**

- Täglich: abgelehnte Anzeigen/Assets, Budgetverbrauch, Fehlklicks.
- **Suchbegriffbericht** (Keywords > Suchbegriffe) alle 2–3 Tage: Irrelevantes sofort ausschließen (kontoweite Liste oder Kampagnenebene).
- Conversion-Tracking prüfen: kommen Anfragen im CRM/Postfach an *und* in Google Ads?
- Noch nichts an Geboten oder Anzeigen ändern – zu wenig Daten.

**Woche 2–4 – Bereinigen und umschichten**

- Wöchentlich: Suchbegriffbericht → Ausschlüsse ergänzen; gute Suchbegriffe als neue Phrase/Exact-Keywords in die passende Anzeigengruppe übernehmen.
- Keywords mit vielen Impressionen und sehr geringer CTR: Anzeigentext oder Landingpage-Passung prüfen, notfalls pausieren.
- Keywords ohne Impressionen („Geringes Suchvolumen“): ok bei Nischen; bei Kernbegriffen Varianten ergänzen.
- **Budget umschichten**: Kampagne, die durch Budget begrenzt ist *und* gute CTR/Anfragen hat, erhält Budget von schwächeren Kampagnen.
- Nischen-Kampagne: bei zu wenig Impressionen Geo auf Deutschland erweitern.
- CPC-Obergrenze anpassen, wenn Anteil an möglichen Impressionen wegen Rang (nicht Budget) gering ist.

**Monat 2–3 – Qualität und Skalierung**

- **Asset-Bewertung** der RSAs (Anzeigen & Assets > Assets ansehen): Headlines/Descriptions mit Bewertung „Niedrig“ nach ≥ 2–3 Wochen Laufzeit durch neue, belegte Varianten ersetzen. Danach `validate.mjs` erneut ausführen.
- Anzeigeneffektivität auf „Gut“ oder „Sehr gut“ bringen, ohne verbotene Aussagen.
- **Qualitätsfaktor** (Spalten „Qualitätsfaktor“, „Erwartete CTR“, „Anzeigenrelevanz“, „Nutzererfahrung mit der Landingpage“): bei „Unterdurchschnittlich“ für die Landingpage → Seite inhaltlich auf das Keyword schärfen (H1, erster Absatz, CTA sichtbar, Ladezeit/Core Web Vitals prüfen).
- Ab ≥ 15–30 Conversions/30 Tage: Umstellung auf **Conversions maximieren**, später **tCPA** (Abschnitt 4).
- Optional zweite RSA je starker Anzeigengruppe für A/B-Tests (andere Botschaftsschwerpunkte).
- Erst danach: Broad Match testen (nur mit conversionbasierten Geboten), Remarketing-Listen (nur mit Einwilligung), ggf. Performance Max – jeweils einzeln und bewusst.

---

## 10. KPIs & Reporting

| KPI | Bedeutung | Wo |
| --- | --- | --- |
| **CTR** (Klickrate) | Passen Keyword und Anzeigentext zusammen? | Kampagnen-/Keyword-Ebene |
| **Ø CPC** | Tatsächlicher Klickpreis je Keyword/Anzeigengruppe | Keyword-Ebene |
| **Conversion-Rate** | Anteil der Klicks, die zu einer Anfrage/einem Anruf führen – misst vor allem die Landingpage | Kampagnen-Ebene |
| **Kosten pro Anfrage (CPA)** | Kosten / Conversions – Hauptsteuerungsgröße | Kampagnen-Ebene |
| **Anteil an möglichen Impressionen (Suche)** | Wie oft die Anzeige erschien, wenn sie hätte erscheinen können | Spalten „Anteil an möglichen Impressionen“, „… verloren (Budget)“, „… verloren (Rang)“ |
| **Qualität der Anfragen** | Wie viele Anfragen passten (Budget, Thema, Region)? | Manuell: Anfragen im Monat mit „passend/unpassend“ markieren |

Zielwerte werden **nicht vorab festgelegt**, sondern nach den ersten 4 Wochen aus eigenen Daten abgeleitet (z. B. CPA-Ziel = Ø CPA der Wochen 3–4).

**Monatsbericht (1 Seite):** Kosten, Klicks, CTR, Ø CPC, Conversions (Formular/Anruf getrennt), CPA, Impression Share je Kampagne, Top-10-Suchbegriffe, neue Ausschlüsse, umgesetzte Änderungen, nächste Schritte.

**Rückfluss in SEO (monatlich):**

1. Suchbegriffbericht exportieren (Suchbegriff, Klicks, CTR, Conversions).
2. Begriffe mit Conversions oder hoher CTR markieren → in `docs/content-cluster-plan.md` als Ziel-Keywords für bestehende oder neue Seiten aufnehmen.
3. Häufige Fragen/Formulierungen aus Suchbegriffen → FAQ-Abschnitte auf Leistungsseiten.
4. Sobald eine Seite organisch für einen Begriff stabil auf Seite 1 steht (Search Console), Gebot für diesen Begriff testweise senken und beobachten, ob Gesamtanfragen gleich bleiben.

---

## 11. Offene Punkte für den Inhaber

> **Diese Punkte sind nicht verifiziert und deshalb bewusst NICHT in Anzeigen oder Assets enthalten.** Bitte bestätigen oder korrigieren; danach können Texte ergänzt werden (anschließend `validate.mjs` ausführen – ggf. die Liste verbotener Begriffe dort bewusst anpassen).

| # | Frage | Wirkung, wenn bestätigt |
| --- | --- | --- |
| 1 | ~~Ist das Erstgespräch kostenlos?~~ **Geklärt (27.11.2026): Ja.** | Umgesetzt: Headline „Kostenloses Erstgespräch“ in allen 14 Anzeigen, Callout ergänzt. `validate.mjs` erlaubt nur diese Formulierung, jedes andere „kostenlos“ bleibt gesperrt. Ob das Gespräch auch „unverbindlich“ genannt werden darf, ist nicht bestätigt. Der Ausschluss „kostenlos“ in `negative-keywords.txt` bleibt bestehen (gegen Gratis-Suchen). |
| 2 | **Verbindliche Reaktionszeit** auf Anfragen? | Nur mit belegbarer, gelebter Praxis als Aussage nutzen (z. B. „Antwort in der Regel am nächsten Werktag“). |
| 3 | **Preisspannen / Einstiegspreise** je Leistung? | Preis-Assets und Headlines mit Preisen wären möglich; aktuell keine Preisangaben. |
| 4 | **Telefon-Erreichbarkeit** (Tage/Uhrzeiten) | Zeitplan für das Anruf-Asset. |
| 5 | **Google-Unternehmensprofil** verifiziert? | Standort-Asset und lokale Sichtbarkeit. |
| 6 | **Freigabe der Kundennamen** (Daily Gourmet, Skinbloom, Emma Solution, Teretnjaci) für Anzeigen? | Derzeit nur generische Branchen („Catering, Logistik, Beauty“). Mit Freigabe z. B. Sitelinks zu einzelnen Case Studies. |
| 7 | **Monatsbudget** final (300, 410 oder 500 €)? | Tagesbudgets gemäß Abschnitt 3. |
| 8 | **Wer betreut das Konto** (wöchentlicher Suchbegriffbericht)? | Ohne regelmäßige Pflege verschwendet das Konto Budget. |
| 9 | **Power Platform, App-Entwicklung, KI-Agenten** aktiv verkaufbar und mit Kapazität? | Sonst die jeweilige Anzeigengruppe pausiert lassen. |
| 10 | **Projektgrößen / Mindestbudget**, das Sie annehmen? | Hilft bei Ausschlüssen (z. B. „billig“) und bei der Bewertung der Anfragequalität. |
| 11 | **IDs für Tracking**: GA4-Mess-ID, Google-Ads-Kunden-ID, Legal-Cockpit-Kategorie „Google Ads“ | Entwicklung baut Tracking ein (Abschnitt 5). |
