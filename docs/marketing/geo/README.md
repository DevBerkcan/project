# GEO – Sichtbarkeit in KI-Antworten

Stand: 27.11.2026 · Ziel: Gentle Group Studios wird in ChatGPT, Perplexity, Gemini, Claude, Copilot und Google AI Overviews genannt, wenn jemand eine Softwareagentur, Web-App-Entwicklung oder KI-Automatisierung in Wuppertal, Düsseldorf oder NRW sucht.

## 1. Wie KI-Assistenten Anbieter auswählen

- **Websuche in Echtzeit:** ChatGPT-Suche und Copilot nutzen vor allem den Bing-Index, Gemini und AI Overviews den Google-Index, Perplexity eigene Crawler und weitere Quellen. Was dort nicht indexiert ist, wird nicht zitiert.
- **Drittquellen schlagen Eigenwerbung:** Verzeichnisse (Sortlist, Clutch, Das Örtliche, golocal), Bewertungsportale, Presse und Vergleichsartikel werden häufiger als Beleg zitiert als die eigene Website.
- **Klare, zitierbare Fakten:** Kurze Sätze mit Ort, Leistung und Beleg („Softwareagentur mit Sitz in Wuppertal, entwickelt …“) werden eher übernommen als Werbesprache.
- **Konsistenz:** Wenn Name, Adresse, Leistungen und Beschreibung überall gleich sind, ordnen die Modelle die Quellen derselben Firma zu.

## 2. Ausgangslage (Baseline)

| Messung | Ergebnis | Quelle |
| --- | --- | --- |
| Domain in Websuchen gefunden | Nein, in rund 20 Suchen nicht aufgetaucht (auch nicht bei Suche nach dem eigenen Namen) | Wettbewerbsanalyse 27.11.2026 |
| Google-Index | Sitemap mit 35 URLs eingereicht, Webdesign-Seite war unbekannt | Search Console 27.11.2026 |
| Verzeichniseinträge | Keine gefunden | Wettbewerbsanalyse |
| KI-Antworten direkt geprüft | **Noch nicht gemessen.** Erste Messung mit den Prompts aus Abschnitt 3 durchführen und hier eintragen. | – |

Erwartung: Solange die Domain kaum indexiert ist und keine Drittquellen existieren, nennen KI-Assistenten Gentle Group Studios bei generischen Fragen nicht. Bei der Frage nach dem eigenen Namen sollte die Website nach der Indexierung gefunden werden.

## 3. Ziel-Prompts

Monatlich in ChatGPT (mit Suche), Perplexity, Gemini, Copilot und in Google (AI Overview) eingeben, jeweils in einem neuen Chat ohne Anmeldung-Verlauf.

**Lokal & generisch**
1. Welche Softwareagentur in Wuppertal kannst du empfehlen?
2. Ich suche eine Agentur für individuelle Software in NRW. Wen kannst du empfehlen?
3. Webdesign-Agentur in Wuppertal für ein mittelständisches Unternehmen?
4. Wer entwickelt Web-Apps mit Next.js in Düsseldorf oder Wuppertal?
5. App-Entwicklung Wuppertal – welche Anbieter gibt es?
6. KI-Automatisierung für kleine Unternehmen in NRW – welche Dienstleister gibt es?

**Nischen**
7. Wer entwickelt ein individuelles Buchungssystem für ein Kosmetikstudio?
8. Agentur für ein individuelles CRM-System in NRW?
9. Power Platform Beratung in NRW – welche Anbieter?
10. Wer baut einen digitalen Preisrechner mit PDF-Angebot?

**Wissensfragen (Zitate aus dem Blog)**
11. Was kostet individuelle Software und wovon hängt der Preis ab?
12. Web-App oder native App – was ist für mein Unternehmen besser?
13. Worauf sollte ich bei der Auswahl einer Softwareagentur achten?
14. Wann lohnt sich ein Website-Relaunch?
15. Individualsoftware oder Standardsoftware – wann lohnt sich Eigenentwicklung?

**Marke**
16. Was ist Gentle Group Studios?
17. Gentle Group Studios Wuppertal Erfahrungen
18. Was bietet Gentle Group Studios an und wo sitzt die Firma?

### Messprotokoll

| Datum | Plattform | Prompt-Nr. | Genannt? | Position | Korrekt? | Zitierte Quelle(n) | Wettbewerber genannt |
| --- | --- | --- | --- | --- | --- | --- | --- |
| | | | | | | | |

Bewertung je Plattform: Anteil der Prompts mit Nennung (Presence), Richtigkeit der Angaben, Position und welche Quellen zitiert werden. Die zitierten Quellen zeigen, wo ein Eintrag oder Artikel fehlt.

## 4. Auf der Website umgesetzt

| Maßnahme | Wo |
| --- | --- |
| `llms.txt` mit Kurzprofil, Leistungen, Referenzen, Artikeln | `/llms.txt` (aus `src/lib/llmsTxt.ts`) |
| `llms-full.txt` mit vollständigem Inhalt aller Leistungen, Fallstudien, Branchen, FAQs und Artikel | `/llms-full.txt` |
| Organization- und ProfessionalService-Schema mit Adresse, Telefon, Gründer, Leistungskatalog (`hasOfferCatalog`) und kostenlosem Erstgespräch (`makesOffer`) | `src/lib/pageSeo.ts` |
| FAQ-Schema auf Startseite, Leistungsseiten, Leistungsgebiet und Branchenseite | `src/data/faqContent.ts`, `serviceDetails.ts`, `industries.ts` |
| Antwortorientierte Artikel für die Wissens-Prompts 11–15 | `src/data/blog/posts/` |
| Seiten „Über uns“ und „Kontakt“ mit eindeutigen Fakten | `/ueber-uns`, `/kontakt` |
| Alle Crawler erlaubt, auch GPTBot, ClaudeBot, PerplexityBot, Google-Extended | `public/robots.txt` (`Allow: /`) |
| Tests sichern Vollständigkeit von `llms-full.txt` und Schema | `src/data/seoContract.test.ts` |

## 5. Außerhalb der Website (größter Hebel, Aufgabe des Inhabers)

Reihenfolge nach Wirkung. Überall exakt dieselben Angaben verwenden: **Gentle Group Studios · Girardetstraße 17 · 42109 Wuppertal · +49 175 4701892 · office@gentlegroup.de · https://www.gentlegroup.de** und dieselbe Kurzbeschreibung:

> Gentle Group Studios ist eine Softwareagentur mit Sitz in Wuppertal. Wir entwickeln individuelle Software, Web-Apps, Websites und KI-Automatisierungen für Unternehmen in Wuppertal, Düsseldorf und NRW – von der Analyse bis zum Betrieb. Das Erstgespräch ist kostenlos.

1. **Bing Webmaster Tools** einrichten (Import aus der Search Console möglich) und Sitemap einreichen. ChatGPT-Suche und Copilot greifen auf den Bing-Index zurück.
2. **Google-Unternehmensprofil** vollständig ausfüllen (Kategorie, Leistungen, Fotos, Beschreibung oben) und echte Bewertungen sammeln.
3. **Agenturverzeichnisse**, die KI-Assistenten bei „Agentur empfehlen“-Fragen häufig zitieren: Sortlist, Clutch, GoodFirms, DesignRush. Profile mit Leistungen, Fallstudien und Bewertungen.
4. **Lokale Verzeichnisse:** Das Örtliche, Gelbe Seiten, golocal, kennstdueinen, 11880, Apple Business Connect, Bing Places.
5. **LinkedIn-Unternehmensseite** und Gründerprofil mit Link zur Website.
6. **Regionale Erwähnungen:** IHK Wuppertal-Solingen-Remscheid, Wirtschaftsförderung Wuppertal, Bergische Netzwerke, Fachbeiträge oder Vorträge, die online dokumentiert werden.
7. **Kundenprojekte:** Hinweis „Umsetzung: Gentle Group Studios“ mit Link auf Kunden-Websites (z. B. Skinbloom) und, wo erlaubt, eine kurze Erwähnung im Kundenblog oder Pressebereich.

Sobald Profile existieren: URLs an die Entwicklung geben. Sie werden in `siteConfig.sameAs` eingetragen, damit Suchmaschinen und KI die Profile der Firma zuordnen.

## 6. Rhythmus

| Wann | Was |
| --- | --- |
| Monatlich | Prompts aus Abschnitt 3 prüfen, Protokoll ergänzen, zitierte Quellen auswerten |
| Monatlich | Ein neuer Artikel zu einer Frage, bei der Wettbewerber zitiert werden, Gentle Group Studios aber nicht |
| Quartalsweise | Fakten auf Website, Profilen und Verzeichnissen abgleichen (Leistungen, Team, Adresse) |
| Nach jedem Projekt | Fallstudie mit Ausgangslage, Lösung, Ergebnis und Kundenfreigabe veröffentlichen |
