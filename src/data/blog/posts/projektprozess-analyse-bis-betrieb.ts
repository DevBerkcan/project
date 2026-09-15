import type { BlogPost } from '../types'

const post: BlogPost = {
  slug: 'projektprozess-analyse-bis-betrieb',
  title: 'Unser Projektprozess: von der Analyse bis zum Betrieb',
  category: 'Softwareentwicklung',
  excerpt:
    'Jedes Projekt bei Gentle Group Studios durchläuft dieselben sechs Phasen. Ein Überblick, was in jeder Phase passiert und warum die Reihenfolge wichtig ist.',
  datePublished: '2026-06-08',
  relatedServiceIds: ['software', 'web', 'ai', 'operations', 'mobile'],
  body: [
    {
      type: 'paragraph',
      text: 'Unabhängig davon, ob ein Projekt eine Website, eine individuelle Web-App, eine KI-Integration oder eine mobile Anwendung ist, folgt die Zusammenarbeit bei uns demselben Ablauf: Analyse, Konzeption, Design, Entwicklung, Qualitätssicherung, Betrieb.',
    },
    {
      type: 'list',
      items: [
        'Analyse — Ziele, Zielgruppe und bestehende Abläufe verstehen, bevor über Lösungen gesprochen wird.',
        'Konzeption — Struktur, Umfang und Kernfunktionen festlegen.',
        'Design — UX/UI und Designsystem entwickeln, bei Software auch Datenmodelle und Architektur.',
        'Entwicklung — technische Umsetzung entlang der zuvor festgelegten Konzeption.',
        'Qualitätssicherung — Testen gegen die ursprünglichen Ziele, nicht nur gegen technische Spezifikationen.',
        'Betrieb — Cloud-Architektur, Deployment, Monitoring, Sicherheit und Weiterentwicklung nach dem Launch.',
      ],
    },
    {
      type: 'heading',
      text: 'Warum diese Reihenfolge wichtig ist',
    },
    {
      type: 'paragraph',
      text: 'Jede übersprungene Phase verschiebt Aufwand nach hinten. Wird ohne Analyse direkt entwickelt, entstehen Lösungen für die falschen Probleme. Wird Betrieb nicht mitgedacht, entstehen Systeme, die nach dem Launch schwer wartbar sind. Die sechs Phasen sind deshalb kein formaler Prozess, sondern die Reihenfolge, in der Entscheidungen tatsächlich am wenigsten kosten.',
    },
    {
      type: 'heading',
      text: 'Gleiche Struktur, unterschiedliche Projekte',
    },
    {
      type: 'paragraph',
      text: 'Diese Struktur gilt gleichermaßen für eine individuelle Catering-Software wie Daily Gourmet, ein Buchungssystem wie bei Skinbloom Aesthetics oder eine plattformübergreifende Lösung wie bei Emma Solution oder Teretnjaci — der Ablauf bleibt derselbe, nur Umfang und technische Details je Phase unterscheiden sich.',
    },
  ],
}

export default post
