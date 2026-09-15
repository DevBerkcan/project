import type { BlogPost } from '../types'

const post: BlogPost = {
  slug: 'digitale-preisrechner-vom-angebot-zum-pdf',
  title: 'Digitale Preisrechner: vom Angebot zum fertigen PDF',
  category: 'Web-Apps',
  excerpt:
    'Wenn Preise von mehreren Faktoren abhängen, wird ein manuelles Angebot schnell fehleranfällig. Ein digitaler Preisrechner macht die Kalkulation transparent und wiederholbar.',
  datePublished: '2026-08-03',
  relatedServiceIds: ['software'],
  relatedProjectSlugs: ['skinbloom-preisrechner'],
  body: [
    {
      type: 'paragraph',
      text: 'Individuelle Behandlungen, Konfigurationen oder Dienstleistungen haben oft keinen festen Preis — der Endpreis ergibt sich aus einer Kombination von Leistungen, Kategorien und Zusatzoptionen. Wird das manuell kalkuliert, entstehen leicht Inkonsistenzen: Zwei Mitarbeitende kommen für dieselbe Anfrage auf unterschiedliche Preise.',
    },
    {
      type: 'heading',
      text: 'Was ein digitaler Preisrechner konkret löst',
    },
    {
      type: 'list',
      items: [
        'Kunden oder Mitarbeitende wählen Leistungen aus, das System berechnet den Gesamtpreis nach hinterlegter Logik.',
        'Die Verwaltung pflegt Kunden, Leistungen, Kategorien und Preise zentral statt in verstreuten Tabellen.',
        'Aus der Auswahl entsteht automatisch ein individueller Kostenvoranschlag als PDF.',
        'Preisänderungen wirken sich sofort und einheitlich auf alle neuen Berechnungen aus.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Für Skinbloom Aesthetics haben wir genau einen solchen Preisrechner entwickelt: Auf Grundlage der ausgewählten Leistungen berechnet das System den Gesamtpreis und erstellt daraus einen individuellen Kostenvoranschlag als PDF — inklusive zentraler Verwaltung von Kunden, Leistungen, Kategorien und Preisen.',
    },
    {
      type: 'paragraph',
      text: 'Dieses Prinzip — konfigurierbare Preis- und Angebotslogik für transparente digitale Anfragen — ist auch der Kern von GentleCalc, unserem eigenen Produkt für Unternehmen, die eine vergleichbare Kalkulationslogik brauchen, aber keine vollständig individuelle Neuentwicklung. Beides sind unterschiedliche Ausgangspunkte: eine kundenspezifische Einzelentwicklung wie der Skinbloom-Preisrechner auf der einen, ein konfigurierbares eigenes Produkt auf der anderen Seite.',
    },
  ],
}

export default post
