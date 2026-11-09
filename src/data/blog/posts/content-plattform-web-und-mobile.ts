import type { BlogPost } from '../types'

const post: BlogPost = {
  slug: 'content-plattform-web-und-mobile',
  title: 'Eine Content-Plattform für Web und Mobile aus einem Administrationsportal',
  seoTitle: 'Content-Plattform für Web, Android und iOS',
  category: 'Web-Apps',
  excerpt:
    'Wer Inhalte auf Website, Android und iOS gleichzeitig veröffentlicht, braucht ein zentrales Redaktionssystem — sonst pflegt man dieselben Inhalte mehrfach.',
  datePublished: '2026-08-31',
  relatedServiceIds: ['software', 'mobile'],
  relatedProjectSlugs: ['teretnjaci'],
  body: [
    {
      type: 'paragraph',
      text: 'Sobald Inhalte auf mehr als einem Kanal erscheinen sollen — Website, Android-App, iOS-App — stellt sich eine grundsätzliche Frage: Wird für jeden Kanal separat redigiert, oder gibt es eine zentrale Quelle, aus der alle Kanäle beliefert werden? Die zweite Variante spart nicht nur Zeit, sie verhindert auch, dass Inhalte auf einzelnen Plattformen veralten.',
    },
    {
      type: 'heading',
      text: 'Ein Administrationsportal als zentrale Quelle',
    },
    {
      type: 'paragraph',
      text: 'Für Teretnjaci haben wir eine digitale Nachrichtenplattform rund um Trucks und Logistik entwickelt. Inhalte werden über ein zentrales Administrationsportal verwaltet und anschließend über die Website sowie Android- und iOS-Anwendungen veröffentlicht. Redaktionelle Inhalte werden dadurch einmal gepflegt und auf mehreren Plattformen bereitgestellt, statt für jeden Kanal einzeln erfasst zu werden.',
    },
    {
      type: 'heading',
      text: 'Was bei einer Content-Plattform technisch zusammenkommt',
    },
    {
      type: 'list',
      items: [
        'Ein Administrationsportal für Redaktion, Freigabe und Verwaltung von Inhalten.',
        'Eine Website, die diese Inhalte öffentlich ausspielt.',
        'Native Android- und iOS-Anwendungen für mobile Leser.',
        'Eine gemeinsame Datenbasis, damit alle drei Kanäle konsistent bleiben.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Diese Struktur ist nicht auf Nachrichteninhalte beschränkt — dasselbe Prinzip gilt für Produktkataloge, Wissensdatenbanken oder interne Kommunikation, sobald mehrere Plattformen dieselben Inhalte anzeigen sollen.',
    },
  ],
}

export default post
