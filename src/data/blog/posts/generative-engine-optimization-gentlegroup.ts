import type { BlogPost } from '../types'

const post: BlogPost = {
  slug: 'generative-engine-optimization-gentlegroup',
  title: 'Generative Engine Optimization: Wie wir gentlegroup.de für KI-Suche aufbereitet haben',
  category: 'GEO',
  excerpt:
    'Klassisches SEO reicht nicht mehr aus, wenn Antworten zunehmend von ChatGPT, Claude, Gemini oder Perplexity zusammengefasst werden. Ein Einblick in die konkreten technischen Schritte.',
  datePublished: '2026-09-15',
  relatedServiceIds: ['web', 'software'],
  body: [
    {
      type: 'paragraph',
      text: 'Generative Engine Optimization (GEO) beschreibt, wie Inhalte dafür aufbereitet werden, dass KI-gestützte Suchsysteme sie zuverlässig lesen, verstehen und zitieren können. Anders als klassisches SEO geht es dabei nicht nur um Rankings, sondern darum, dass ein System wie ChatGPT oder Perplexity eine Website überhaupt korrekt "sieht" — inklusive aller Unterseiten, nicht nur der Startseite.',
    },
    {
      type: 'heading',
      text: 'Der Ausgangspunkt: eine reine Client-Side-Anwendung',
    },
    {
      type: 'paragraph',
      text: 'gentlegroup.de ist als React-Anwendung gebaut, die ursprünglich vollständig im Browser gerendert wurde. Für Menschen mit aktiviertem JavaScript kein Problem — für Systeme, die Seiten ohne JavaScript-Ausführung abrufen, sahen aber alle Unterseiten identisch aus wie die Startseite, inklusive Titel, Beschreibung und strukturierter Daten.',
    },
    {
      type: 'heading',
      text: 'Was wir konkret umgesetzt haben',
    },
    {
      type: 'list',
      items: [
        'Eine zentrale Metadaten-Quelle, die für jede URL Titel, Beschreibung, Canonical-Link und strukturierte Daten (JSON-LD) definiert.',
        'Statisches Vorab-Rendering: Jede Seite wird beim Build als eigenständiges HTML-Dokument erzeugt, nicht erst im Browser zusammengesetzt.',
        'Strukturierte Daten nach schema.org für Organisation, Website, Breadcrumbs und einzelne Leistungen — ausschließlich mit tatsächlich zutreffenden Angaben.',
        'Eine automatisch generierte Sitemap, die sich direkt aus den echten Inhalten ableitet, statt manuell gepflegt zu werden.',
        'FAQ-Bereiche, deren sichtbarer Text exakt mit den hinterlegten strukturierten Daten übereinstimmt.',
      ],
    },
    {
      type: 'quote',
      text: 'Der wichtigste Grundsatz dabei: Nur Angaben verwenden, die tatsächlich zutreffen — keine erfundenen Standorte, keine erfundenen Bewertungen, keine Funktionen, die es nicht gibt.',
    },
    {
      type: 'heading',
      text: 'Warum Genauigkeit wichtiger ist als Vollständigkeit',
    },
    {
      type: 'paragraph',
      text: 'Es wäre technisch einfach gewesen, zusätzliche strukturierte Daten für Bewertungen oder Standorte einzufügen, für die es keine echte Grundlage gibt. Wir haben uns bewusst dagegen entschieden: Weder für Suchmaschinen noch für KI-Systeme ist etwas gewonnen, wenn strukturierte Daten Dinge behaupten, die eine Website nicht einlösen kann. Stattdessen ist jede Angabe auf gentlegroup.de darauf ausgelegt, direkt überprüfbar zu sein.',
    },
  ],
}

export default post
