import type { BlogPost } from '../types'

const post: BlogPost = {
  slug: 'digitale-buchungssysteme-fuer-dienstleister',
  title: 'Digitale Buchungssysteme für Dienstleistungsbetriebe',
  category: 'Web-Apps',
  excerpt:
    'Online-Terminbuchung ist für Kunden Standard geworden. Für Dienstleistungsbetriebe entscheidet sich der Nutzen aber erst an der internen Verwaltung dahinter.',
  datePublished: '2026-07-20',
  relatedServiceIds: ['software', 'web'],
  relatedProjectSlugs: ['skinbloom-buchungssystem'],
  body: [
    {
      type: 'paragraph',
      text: 'Ein Buchungssystem hat zwei Seiten: die Buchungsstrecke, die Kunden sehen, und die Verwaltung, mit der ein Team tatsächlich arbeitet. Viele Anbieter lösen nur die erste Seite gut. Die zweite — Termine, Services, Zeitblockierungen, Mitarbeiterzugänge, Kundendaten — bleibt oft eine Mischung aus mehreren Tools.',
    },
    {
      type: 'heading',
      text: 'Was ein Buchungssystem in der Praxis leisten muss',
    },
    {
      type: 'list',
      items: [
        'Kunden wählen Leistung und Mitarbeiter online aus, ohne Rückfragen per Telefon.',
        'Administratoren verwalten Termine, Services, Zeitblockierungen, Mitarbeiter und Kundendaten zentral.',
        'Mitarbeitende sehen nur die für sie relevanten Termine — nicht den gesamten Kalender des Betriebs.',
        'Änderungen (z. B. eine Zeitblockierung) wirken sich sofort auf die öffentlich sichtbare Verfügbarkeit aus.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Für Skinbloom Aesthetics haben wir genau dieses Zusammenspiel umgesetzt: ein individuelles Buchungssystem, das die Online-Terminbuchung mit der internen Verwaltung des Studios verbindet. Administratoren verwalten Termine, Services, Zeitblockierungen, Mitarbeiter und Kundendaten zentral, während Mitarbeitende einen eigenen, auf ihre Termine begrenzten Kalenderzugriff erhalten.',
    },
    {
      type: 'paragraph',
      text: 'Das Skinbloom-Buchungssystem war eine für dieses Studio maßgeschneiderte Eigenentwicklung. Für Betriebe, die keine vollständig individuelle Lösung benötigen, entwickeln wir mit GentleBook außerdem ein eigenes Tool für Online-Buchung und Serviceverwaltung — ein anderer Ausgangspunkt als eine kundenspezifische Einzelentwicklung.',
    },
    {
      type: 'heading',
      text: 'Eigenentwicklung vs. Buchungssoftware von der Stange',
    },
    {
      type: 'paragraph',
      text: 'Fertige Buchungstools sind sinnvoll, wenn Standard-Terminvergabe ausreicht. Sobald Rollen, Berechtigungen oder Abläufe spezifisch werden — etwa unterschiedliche Sichtbarkeiten für Mitarbeitende oder eine enge Verzahnung mit weiteren internen Prozessen — lohnt sich eine individuelle Lösung, die genau auf den Betrieb zugeschnitten ist statt umgekehrt den Betrieb an die Software anzupassen.',
    },
  ],
}

export default post
