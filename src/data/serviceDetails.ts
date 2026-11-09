import type { FaqItem } from './faqContent'

export interface DetailSection {
  heading: string
  paragraphs?: string[]
  items?: string[]
}

/**
 * Landing-page content for every entry in `allServices`.
 * Rules: no prices, no response-time promises, no invented results. Technology
 * names support the value proposition but never replace it.
 */
export interface ServiceDetail {
  seoTitle: string
  metaDescription: string
  eyebrow: string
  h1: string
  lead: string
  sections: DetailSection[]
  technologies?: string[]
  faqs: FaqItem[]
  relatedIds: string[]
}

export const serviceDetails: Record<string, ServiceDetail> = {
  software: {
    seoTitle: 'Individuelle Softwareentwicklung | Gentle Group Studios',
    metaDescription:
      'Software entwickeln lassen, die zu Ihren Abläufen passt: Portale, Dashboards, APIs und Business-Software für Unternehmen in Wuppertal, Düsseldorf und NRW.',
    eyebrow: 'Leistung 01 — Softwareentwicklung',
    h1: 'Individuelle Softwareentwicklung für Unternehmen',
    lead:
      'Wenn Standardsoftware Ihre Abläufe nur mit Umwegen abbildet, entwickeln wir eine Lösung, die genau zu Ihrem Unternehmen passt — von der ersten Analyse über die Umsetzung bis zum laufenden Betrieb.',
    sections: [
      {
        heading: 'Wann sich individuelle Software lohnt',
        items: [
          'Wichtige Abläufe laufen über Excel-Listen, E-Mails und mehrere Werkzeuge, die nicht miteinander sprechen.',
          'Standardsoftware deckt nur einen Teil Ihres Prozesses ab und muss mit manueller Arbeit ergänzt werden.',
          'Kunden, Partner oder Mitarbeitende brauchen einen eigenen, auf ihre Rolle zugeschnittenen Zugang.',
          'Ihr Geschäftsmodell ist selbst digital und braucht eine Software, die Sie besitzen und weiterentwickeln können.',
        ],
      },
      {
        heading: 'Was wir für Sie entwickeln',
        items: [
          'Business-Software und interne Verwaltungssysteme',
          'Kunden- und Partnerportale mit Rollen und Rechten',
          'Dashboards, die relevante Daten an einem Ort zusammenführen',
          'Schnittstellen (APIs) und Integrationen zu bestehenden Systemen',
          'Skalierbare Backend- und Datenbankarchitekturen',
        ],
      },
      {
        heading: 'Wie ein Softwareprojekt bei uns abläuft',
        paragraphs: [
          'Am Anfang steht nicht die Technik, sondern Ihr Prozess. In der Analyse klären wir, welche Abläufe die Software unterstützen soll, wer sie nutzt und welche Daten wo entstehen. Daraus entsteht ein Konzept mit klarem Umfang und Prioritäten.',
          'Anschließend entwickeln wir in überschaubaren Etappen, sodass Sie früh funktionierende Zwischenstände sehen und Entscheidungen auf Basis echter Nutzung treffen können. Qualitätssicherung und Betrieb gehören von Beginn an zum Projekt.',
        ],
      },
      {
        heading: 'Software, die Ihnen gehört',
        paragraphs: [
          'Individuelle Software ist kein Mietprodukt, dessen Funktionsumfang ein Anbieter festlegt. Sie entscheiden, welche Funktionen als Nächstes entstehen, und die Lösung kann mit Ihrem Unternehmen wachsen. Eine saubere Architektur und Dokumentation sorgen dafür, dass das System auch langfristig wartbar bleibt.',
        ],
      },
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'REST-APIs', 'Relationale Datenbanken', 'Microsoft Azure'],
    faqs: [
      {
        question: 'Was kostet individuelle Softwareentwicklung?',
        answer:
          'Das hängt vor allem vom Funktionsumfang, der Anzahl der Nutzerrollen und den nötigen Integrationen ab. Nach einem Erstgespräch und einer kurzen Analyse erhalten Sie eine Einschätzung, die auf Ihrem konkreten Vorhaben beruht statt auf Pauschalpreisen.',
      },
      {
        question: 'Können bestehende Systeme angebunden werden?',
        answer:
          'Ja, sofern die Systeme eine Schnittstelle oder einen Datenexport anbieten. Wir prüfen in der Analyse, welche Daten ausgetauscht werden müssen und wie die Anbindung zuverlässig gelingt.',
      },
      {
        question: 'Wann ist Standardsoftware die bessere Wahl?',
        answer:
          'Wenn ein etabliertes Produkt Ihren Prozess ohne große Umwege abdeckt, ist es meist schneller und günstiger. Individuelle Software lohnt sich dort, wo Ihr Ablauf ein echter Unterschied ist oder Standardlösungen dauerhaft manuelle Zusatzarbeit erzeugen.',
      },
    ],
    relatedIds: ['webapp', 'crm', 'booking', 'operations'],
  },

  web: {
    seoTitle: 'Webdesign & Webentwicklung für Unternehmen | Gentle Group Studios',
    metaDescription:
      'Professionelle Website erstellen lassen: Strategie, UX/UI-Design und Entwicklung für schnelle, barrierearme und gut auffindbare Unternehmenswebsites.',
    eyebrow: 'Leistung 02 — Websites',
    h1: 'Webdesign & Webentwicklung für Unternehmen',
    lead:
      'Eine Unternehmenswebsite soll verständlich erklären, was Sie anbieten, und Interessenten zu einer Anfrage führen. Wir verbinden Strategie, Design und Entwicklung zu Websites, die schnell laden, auf allen Geräten funktionieren und gefunden werden.',
    sections: [
      {
        heading: 'Typische Ausgangslagen',
        items: [
          'Die bestehende Website wirkt veraltet und spiegelt Ihr heutiges Angebot nicht mehr wider.',
          'Besucher finden nicht schnell genug, was Sie anbieten und wie sie Kontakt aufnehmen.',
          'Die Seite lädt langsam, ist mobil schwer zu bedienen oder wird in Suchmaschinen kaum gefunden.',
          'Inhalte lassen sich nur umständlich pflegen oder erweitern.',
        ],
      },
      {
        heading: 'Was zu einer Website von uns gehört',
        items: [
          'Strategie und Seitenstruktur, abgeleitet aus Ihren Zielgruppen und Zielen',
          'UX/UI-Design und, wo sinnvoll, ein wiederverwendbares Designsystem',
          'Responsive Entwicklung mit Fokus auf Ladezeit und Core Web Vitals',
          'Technisches SEO: saubere Metadaten, strukturierte Daten, Sitemap und Canonicals',
          'Barrierearme Umsetzung mit semantischem HTML, Tastaturbedienung und ausreichenden Kontrasten',
          'Klare Kontaktwege und Anfrageformulare',
        ],
      },
      {
        heading: 'Modern entwickelt statt nur gestaltet',
        paragraphs: [
          'Wir setzen Websites bevorzugt mit Next.js und React um. Dadurch lassen sich Inhalte vorab rendern, Seiten laden schnell, und die Website kann später um Funktionen wie Buchung, Kundenbereiche oder Rechner erweitert werden, ohne neu zu beginnen.',
          'Wenn ein klassisches Content-Management-System für Ihr Team der bessere Weg ist, sagen wir das offen. Entscheidend ist, dass Sie Ihre Inhalte pflegen können und die Website ihr Ziel erfüllt.',
        ],
      },
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Schema.org'],
    faqs: [
      {
        question: 'Was kostet eine professionelle Website?',
        answer:
          'Der Aufwand hängt von der Anzahl der Seiten, dem Designumfang, den Inhalten und zusätzlichen Funktionen ab. Nach einem Erstgespräch erhalten Sie ein Angebot, das auf Ihren konkreten Anforderungen basiert.',
      },
      {
        question: 'Ist SEO im Website-Projekt enthalten?',
        answer:
          'Technisches SEO gehört zu jeder Website, die wir entwickeln: Seitenstruktur, Metadaten, strukturierte Daten, Ladezeit und eine saubere Indexierung. Laufende Content- oder Kampagnenarbeit stimmen wir bei Bedarf separat ab.',
      },
      {
        question: 'Warum Next.js statt WordPress?',
        answer:
          'Next.js eignet sich besonders, wenn Ladezeit, individuelle Gestaltung und spätere Erweiterungen wichtig sind. WordPress kann sinnvoll sein, wenn viele Personen ohne technische Unterstützung Inhalte pflegen. Wir empfehlen die Lösung, die zu Ihrem Team passt.',
      },
    ],
    relatedIds: ['webapp', 'booking', 'operations'],
  },

  ai: {
    seoTitle: 'KI-Automatisierung & KI-Agenten | Gentle Group Studios',
    metaDescription:
      'Geschäftsprozesse automatisieren und KI sinnvoll integrieren: KI-Assistenten, KI-Agenten und Workflows, die mit Ihren bestehenden Systemen arbeiten.',
    eyebrow: 'Leistung 03 — KI & Automatisierung',
    h1: 'KI-Automatisierung für Unternehmen',
    lead:
      'Viele Teams verlieren täglich Zeit mit wiederkehrenden Aufgaben: Daten übertragen, Dokumente erstellen, Anfragen sortieren. Wir automatisieren solche Abläufe und integrieren KI dort, wo sie einen klaren Nutzen bringt — verantwortungsvoll und auf Basis Ihrer bestehenden Systeme.',
    sections: [
      {
        heading: 'Wo Automatisierung typischerweise ansetzt',
        items: [
          'Daten werden manuell zwischen Systemen, Tabellen und E-Mails übertragen.',
          'Angebote, Berichte oder Dokumente entstehen jedes Mal von Hand nach demselben Muster.',
          'Eingehende Anfragen müssen gelesen, eingeordnet und an die richtige Stelle weitergegeben werden.',
          'Wissen steckt in Dokumenten und ist für das Team nur mühsam auffindbar.',
        ],
      },
      {
        heading: 'Was wir umsetzen',
        items: [
          'Automatisierte Workflows zwischen bestehenden Anwendungen',
          'KI-Assistenten, die auf Ihre eigenen Inhalte und Daten zugreifen',
          'KI-Agenten, die mehrstufige Aufgaben mit klar definierten Grenzen erledigen',
          'Automatische Dokument- und PDF-Erstellung',
          'Integration von KI-Diensten über Schnittstellen in vorhandene Software',
        ],
      },
      {
        heading: 'Verantwortungsvoll statt Hype',
        paragraphs: [
          'Nicht jeder Prozess braucht KI. Häufig ist eine klassische Automatisierung zuverlässiger und günstiger. Wir prüfen deshalb zuerst, welcher Ansatz zu Ihrer Aufgabe passt, und setzen KI dort ein, wo sie Texte, Dokumente oder unstrukturierte Informationen tatsächlich besser verarbeitet.',
          'Datenschutz, nachvollziehbare Ergebnisse und menschliche Kontrolle bei wichtigen Entscheidungen planen wir von Anfang an mit ein.',
        ],
      },
    ],
    technologies: ['LLM-APIs', 'Power Automate', 'REST-APIs', 'Webhooks', 'Microsoft Azure'],
    faqs: [
      {
        question: 'Was ist der Unterschied zwischen Automatisierung und KI-Agenten?',
        answer:
          'Eine klassische Automatisierung folgt festen Regeln: Wenn A passiert, wird B ausgeführt. Ein KI-Agent kann Inhalte verstehen und innerhalb festgelegter Grenzen selbst entscheiden, welcher nächste Schritt sinnvoll ist. Für viele Abläufe ist eine Kombination aus beidem am besten.',
      },
      {
        question: 'Müssen wir dafür unsere bestehenden Systeme ersetzen?',
        answer:
          'Nein. Automatisierung setzt in der Regel an vorhandenen Systemen an und verbindet sie über Schnittstellen. Ein Neubau ist nur dann sinnvoll, wenn die bestehende Lösung keine Anbindung zulässt.',
      },
      {
        question: 'Wie gehen Sie mit Datenschutz bei KI um?',
        answer:
          'Wir klären vor der Umsetzung, welche Daten verarbeitet werden, wo die Verarbeitung stattfindet und welche Anbieter geeignet sind. Personenbezogene Daten werden nur verarbeitet, wenn es dafür eine Grundlage gibt und es für die Aufgabe nötig ist.',
      },
    ],
    relatedIds: ['powerplatform', 'software', 'crm'],
  },

  operations: {
    seoTitle: 'Cloud-Betrieb, Wartung & Weiterentwicklung | Gentle Group Studios',
    metaDescription:
      'Cloud-Architektur, Deployment, Monitoring, Backups und Weiterentwicklung — damit Ihre Software oder Website nach dem Launch zuverlässig weiterläuft.',
    eyebrow: 'Leistung 04 — Betrieb',
    h1: 'Cloud-Betrieb, Wartung & Weiterentwicklung',
    lead:
      'Ein digitales Produkt ist nach dem Launch nicht fertig. Updates, Sicherheit, Backups und neue Anforderungen gehören zum Alltag. Wir begleiten Ihre Anwendung im Betrieb und entwickeln sie gemeinsam mit Ihnen weiter.',
    sections: [
      {
        heading: 'Was zum Betrieb gehört',
        items: [
          'Cloud-Architektur und Hosting, passend zu Last, Datenschutz und Budget',
          'Automatisierte Deployments und nachvollziehbare Versionen',
          'Monitoring, damit Fehler früh auffallen',
          'Sicherheitsupdates und Pflege von Abhängigkeiten',
          'Backups und ein Plan für den Ernstfall',
          'Kontinuierliche Weiterentwicklung auf Basis echter Nutzung',
        ],
      },
      {
        heading: 'Auch für bestehende Anwendungen',
        paragraphs: [
          'Wir übernehmen auch Software und Websites, die nicht von uns entwickelt wurden. Am Anfang steht eine Bestandsaufnahme von Code, Infrastruktur und offenen Risiken. Danach wissen Sie, welche Schritte dringend sind und was warten kann.',
        ],
      },
    ],
    technologies: ['Microsoft Azure', 'Vercel', 'CI/CD', 'Monitoring', 'Backups'],
    faqs: [
      {
        question: 'Übernehmen Sie auch Anwendungen anderer Entwickler?',
        answer:
          'Ja. Nach einer technischen Bestandsaufnahme entscheiden wir gemeinsam, ob die Anwendung weitergeführt, schrittweise modernisiert oder in Teilen neu aufgebaut werden sollte.',
      },
      {
        question: 'Welche Cloud-Anbieter nutzen Sie?',
        answer:
          'Wir arbeiten unter anderem mit Microsoft Azure und Vercel. Die Wahl hängt von Ihren Anforderungen an Datenschutz, Skalierung, bestehende Microsoft-Umgebungen und Kosten ab.',
      },
    ],
    relatedIds: ['software', 'webapp', 'web'],
  },

  mobile: {
    seoTitle: 'App-Entwicklung für Android & iOS | Gentle Group Studios',
    metaDescription:
      'Mobile Apps für Android und iOS, verbunden mit Web-Anwendung und Backend — für Teams unterwegs, Kunden und Inhalte auf mehreren Plattformen.',
    eyebrow: 'Leistung 05 — Mobile',
    h1: 'App-Entwicklung für Android & iOS',
    lead:
      'Eine App lohnt sich, wenn Menschen unterwegs arbeiten, regelmäßig auf Informationen zugreifen oder Funktionen des Smartphones brauchen. Wir entwickeln mobile Anwendungen, die mit Ihrer Web-Anwendung und Ihrem Backend eine gemeinsame Datenbasis teilen.',
    sections: [
      {
        heading: 'Wann eine App sinnvoll ist',
        items: [
          'Mitarbeitende im Außendienst, in der Logistik oder auf Baustellen brauchen mobilen Zugriff.',
          'Ihre Kunden nutzen Ihr Angebot regelmäßig und profitieren von schnellem Zugang.',
          'Inhalte sollen gleichzeitig auf Website, Android und iOS erscheinen.',
        ],
      },
      {
        heading: 'Was wir umsetzen',
        items: [
          'Android- und iOS-Apps mit Fokus auf den Nutzungskontext',
          'Backend-APIs, die Web und Mobile gemeinsam versorgen',
          'Administrationsportale, aus denen Inhalte auf alle Kanäle ausgespielt werden',
          'Betrieb und Weiterentwicklung nach dem Store-Release',
        ],
      },
      {
        heading: 'Web-App oder native App?',
        paragraphs: [
          'Nicht jede Anwendung braucht eine App aus dem Store. Häufig erfüllt eine gut gemachte Web-App denselben Zweck mit weniger Aufwand. Wir empfehlen eine native App dann, wenn der Nutzungskontext sie tatsächlich verlangt.',
        ],
      },
    ],
    technologies: ['Android', 'iOS', 'REST-APIs', 'Push-Benachrichtigungen'],
    faqs: [
      {
        question: 'Entwickeln Sie Apps für Android und iOS gleichzeitig?',
        answer:
          'Ja, wenn beide Plattformen für Ihre Nutzer relevant sind. Wir besprechen zu Projektbeginn, ob beide Plattformen von Anfang an nötig sind oder ob ein schrittweiser Start sinnvoller ist.',
      },
      {
        question: 'Kann die App mit unserer bestehenden Software verbunden werden?',
        answer:
          'Ja. Apps greifen in der Regel über eine Schnittstelle auf dieselben Daten zu wie Ihre Web-Anwendung oder Ihr bestehendes System.',
      },
    ],
    relatedIds: ['software', 'webapp', 'operations'],
  },

  webapp: {
    seoTitle: 'Web-App- & SaaS-Entwicklung mit Next.js | Gentle Group Studios',
    metaDescription:
      'Web-Apps und SaaS-Produkte mit Next.js und React entwickeln lassen: von der ersten Version über Mandantenfähigkeit bis zu Betrieb und Weiterentwicklung.',
    eyebrow: 'Schwerpunkt — Web-Apps & SaaS',
    h1: 'Web-App- & SaaS-Entwicklung mit Next.js',
    lead:
      'Ob internes Werkzeug, Kundenportal oder eigenes SaaS-Produkt: Wir entwickeln browserbasierte Anwendungen, die ohne Installation auf jedem Gerät funktionieren und mit Nutzerzahl und Funktionsumfang wachsen können.',
    sections: [
      {
        heading: 'Für wen wir Web-Apps entwickeln',
        items: [
          'Unternehmen, die einen internen Prozess als Anwendung für mehrere Teams abbilden möchten',
          'Gründerinnen und Gründer, die eine SaaS-Idee als erste marktfähige Version umsetzen wollen',
          'Anbieter, die ihren Kunden einen eigenen Zugang mit Daten, Status und Dokumenten bieten möchten',
        ],
      },
      {
        heading: 'Was eine SaaS-Anwendung braucht',
        items: [
          'Benutzerverwaltung, Rollen und sichere Anmeldung',
          'Mandantenfähigkeit, damit Kundendaten sauber getrennt bleiben',
          'Abrechnungs- und Abo-Logik, wenn das Produkt verkauft wird',
          'Schnittstellen für Integrationen mit anderen Werkzeugen',
          'Monitoring, Backups und ein belastbarer Release-Prozess',
        ],
      },
      {
        heading: 'Warum Next.js',
        paragraphs: [
          'Next.js verbindet React mit serverseitigem Rendering, schnellen Ladezeiten und einer klaren Projektstruktur. Öffentliche Seiten und die eigentliche Anwendung können in einem Projekt entstehen und sind von Beginn an suchmaschinenfreundlich.',
          'Wir starten bewusst mit einem klar abgegrenzten Funktionsumfang. So entsteht schnell eine nutzbare Version, aus deren Einsatz die nächsten Prioritäten folgen.',
        ],
      },
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'REST-APIs', 'Relationale Datenbanken', 'Vercel', 'Microsoft Azure'],
    faqs: [
      {
        question: 'Was ist der Unterschied zwischen einer Web-App und einer Website?',
        answer:
          'Eine Website informiert vor allem. Eine Web-App ist ein Werkzeug: Nutzer melden sich an, bearbeiten Daten und erledigen Aufgaben. Beides kann auch in einem Projekt zusammen entstehen.',
      },
      {
        question: 'Können wir mit einer kleinen ersten Version starten?',
        answer:
          'Ja, und das empfehlen wir in den meisten Fällen. Eine erste Version mit den wichtigsten Funktionen zeigt früh, was Nutzer tatsächlich brauchen, und senkt das Risiko.',
      },
      {
        question: 'Wem gehört der Quellcode?',
        answer:
          'Die Rechte am Quellcode regeln wir im Projektvertrag. Unser Ziel ist, dass Sie Ihre Anwendung langfristig unabhängig weiterentwickeln können.',
      },
    ],
    relatedIds: ['software', 'crm', 'operations'],
  },

  crm: {
    seoTitle: 'Individuelles CRM-System entwickeln lassen | Gentle Group Studios',
    metaDescription:
      'CRM-Software entwickeln lassen, die Ihren Kundenprozess abbildet: Kontakte, Anfragen, Angebote und Aufgaben in einem System, angebunden an Ihre Tools.',
    eyebrow: 'Schwerpunkt — CRM',
    h1: 'Individuelles CRM-System entwickeln lassen',
    lead:
      'Standard-CRMs sind für viele Unternehmen ein guter Start. Wenn Ihr Kundenprozess aber eigene Schritte, Daten oder Rollen hat, entsteht schnell ein Flickenteppich aus Zusatzfeldern, Tabellen und Workarounds. Ein individuelles CRM bildet genau Ihren Ablauf ab.',
    sections: [
      {
        heading: 'Anzeichen, dass ein Standard-CRM nicht mehr reicht',
        items: [
          'Wichtige Kundeninformationen liegen weiterhin in Tabellen und Postfächern statt im CRM.',
          'Ihr Vertriebs- oder Auftragsprozess passt nur mit vielen Anpassungen in das System.',
          'Lizenzkosten steigen mit jedem Nutzer, obwohl viele nur wenige Funktionen brauchen.',
          'Das CRM ist nicht mit Ihrer Buchhaltung, Ihrer Website oder anderen Kernsystemen verbunden.',
        ],
      },
      {
        heading: 'Was ein individuelles CRM enthalten kann',
        items: [
          'Kontakt- und Unternehmensverwaltung mit den Feldern, die Sie wirklich brauchen',
          'Anfrage-, Angebots- und Auftragsstatus entlang Ihres Prozesses',
          'Aufgaben, Wiedervorlagen und Verantwortlichkeiten im Team',
          'Rollen und Rechte für Vertrieb, Projektleitung und Verwaltung',
          'Anbindung von Website-Formularen, E-Mail und weiteren Systemen',
          'Auswertungen und Dashboards für Pipeline und Auslastung',
        ],
      },
      {
        heading: 'Individuell oder anpassen?',
        paragraphs: [
          'Nicht jede Herausforderung erfordert eine Neuentwicklung. Manchmal reicht es, ein bestehendes CRM besser anzubinden oder mit der Microsoft Power Platform zu erweitern. Wir schauen uns Ihren Prozess an und empfehlen den Weg, der langfristig am wenigsten Reibung erzeugt.',
        ],
      },
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'REST-APIs', 'Relationale Datenbanken'],
    faqs: [
      {
        question: 'Können Daten aus unserem bisherigen CRM übernommen werden?',
        answer:
          'In der Regel ja, über einen Export oder eine Schnittstelle des bisherigen Systems. Die Datenübernahme planen wir als eigenen Projektschritt, damit nichts verloren geht.',
      },
      {
        question: 'Ist ein individuelles CRM DSGVO-konform möglich?',
        answer:
          'Ja. Rollen und Rechte, Löschkonzepte und der Speicherort der Daten werden von Anfang an mitgeplant. Die datenschutzrechtliche Bewertung Ihres konkreten Einsatzes sollte zusätzlich mit Ihrer Datenschutzberatung abgestimmt werden.',
      },
    ],
    relatedIds: ['software', 'webapp', 'powerplatform', 'ai'],
  },

  booking: {
    seoTitle: 'Buchungssystem entwickeln lassen | Gentle Group Studios',
    metaDescription:
      'Individuelles Buchungssystem für Dienstleister: Online-Terminbuchung, Mitarbeiterkalender, Leistungen und Kundendaten zentral verwaltet.',
    eyebrow: 'Schwerpunkt — Buchungssysteme',
    h1: 'Buchungssystem entwickeln lassen',
    lead:
      'Ein Buchungssystem soll Ihren Kunden die Terminbuchung leicht machen und Ihrem Team die Planung abnehmen. Wir entwickeln Buchungslösungen, bei denen Online-Buchung und interne Verwaltung auf derselben Datenbasis arbeiten.',
    sections: [
      {
        heading: 'Typische Anforderungen von Dienstleistern',
        items: [
          'Kunden sollen Leistung, Mitarbeitende und Zeitfenster selbst online wählen können.',
          'Mitarbeitende brauchen einen eigenen Kalender mit ihren Terminen.',
          'Abwesenheiten, Pausen und Zeitblockierungen müssen zentral gepflegt werden.',
          'Kundendaten und Terminhistorie sollen an einem Ort liegen statt in mehreren Programmen.',
        ],
      },
      {
        heading: 'Was wir umsetzen',
        items: [
          'Öffentliche Online-Buchung mit Auswahl von Leistung, Person und Zeit',
          'Verwaltungsbereich für Termine, Leistungen, Mitarbeitende und Kunden',
          'Rollenbasierter Zugriff, zum Beispiel Mitarbeitende nur auf eigene Termine',
          'Zeitblockierungen und Verfügbarkeiten',
          'Anbindung an Ihre Website und, wenn gewünscht, an Preisrechner oder weitere Systeme',
        ],
      },
      {
        heading: 'Individuell entwickelt oder als Produkt',
        paragraphs: [
          'Für Skinbloom Aesthetics haben wir ein individuelles Buchungssystem entwickelt, das Online-Terminbuchung und interne Studioverwaltung verbindet. Für lokale Dienstleistungsbetriebe mit typischen Anforderungen entwickeln wir außerdem GentleBook als eigenes Produkt der GentleSuite.',
        ],
      },
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Relationale Datenbanken'],
    faqs: [
      {
        question: 'Lohnt sich ein individuelles Buchungssystem gegenüber einem Standard-Tool?',
        answer:
          'Ein Standard-Tool ist oft der schnellste Einstieg. Individuell wird es interessant, wenn Ihre Buchungslogik besonders ist, mehrere Standorte oder Rollen abgebildet werden müssen oder die Buchung eng mit weiteren Abläufen wie Preisberechnung oder Kundenverwaltung verbunden sein soll.',
      },
      {
        question: 'Kann das Buchungssystem in unsere bestehende Website eingebunden werden?',
        answer:
          'Ja. Die Buchung kann als eigener Bereich, als Subdomain oder direkt in Ihre bestehende Website integriert werden.',
      },
    ],
    relatedIds: ['software', 'web', 'crm'],
  },

  powerplatform: {
    seoTitle: 'Microsoft Power Platform Beratung | Gentle Group Studios',
    metaDescription:
      'Power Apps und Power Automate für Unternehmen mit Microsoft 365: Beratung, Umsetzung und ehrliche Einschätzung, wann Individualentwicklung passt.',
    eyebrow: 'Schwerpunkt — Power Platform',
    h1: 'Microsoft Power Platform: Beratung & Umsetzung',
    lead:
      'Wenn Ihr Unternehmen bereits mit Microsoft 365 arbeitet, lassen sich viele Abläufe mit Power Apps und Power Automate schnell digitalisieren. Wir helfen bei Auswahl, Aufbau und sauberer Umsetzung — und sagen offen, wann eine individuelle Lösung langfristig besser ist.',
    sections: [
      {
        heading: 'Wofür sich die Power Platform eignet',
        items: [
          'Formulare und einfache Fachanwendungen für interne Teams',
          'Genehmigungs- und Freigabeprozesse',
          'Automatisierte Abläufe zwischen Outlook, Teams, SharePoint und weiteren Diensten',
          'Schnelle Prototypen, um einen neuen Prozess zu testen',
        ],
      },
      {
        heading: 'Wann Individualentwicklung besser passt',
        items: [
          'Die Anwendung soll von Kunden oder Partnern außerhalb Ihrer Organisation genutzt werden.',
          'Komplexe Logik, viele Datensätze oder hohe Anforderungen an Performance stoßen an Plattformgrenzen.',
          'Lizenzkosten pro Nutzer werden bei wachsender Nutzerzahl zum entscheidenden Faktor.',
          'Sie möchten nicht dauerhaft an eine Plattform gebunden sein.',
        ],
      },
      {
        heading: 'Unser Vorgehen',
        paragraphs: [
          'Wir analysieren den Prozess, bevor wir ein Werkzeug wählen. Häufig ist eine Kombination sinnvoll: Power Automate für Abläufe innerhalb von Microsoft 365, eine individuelle Anwendung für den Teil, der nach außen sichtbar ist oder besondere Logik braucht.',
        ],
      },
    ],
    technologies: ['Power Apps', 'Power Automate', 'SharePoint', 'Microsoft Teams', 'Microsoft Azure'],
    faqs: [
      {
        question: 'Power Platform oder Individualentwicklung — was ist günstiger?',
        answer:
          'Für interne, überschaubare Anwendungen ist die Power Platform oft schneller umgesetzt. Bei vielen Nutzern, externen Zugriffen oder komplexer Logik kann Individualentwicklung über die Zeit wirtschaftlicher sein. Wir rechnen das für Ihren konkreten Fall durch.',
      },
      {
        question: 'Können bestehende Power-Apps übernommen oder verbessert werden?',
        answer:
          'Ja. Wir sehen uns bestehende Apps und Flows an, beheben Schwachstellen und dokumentieren die Lösung, damit sie wartbar bleibt.',
      },
    ],
    relatedIds: ['ai', 'software', 'crm'],
  },
}
