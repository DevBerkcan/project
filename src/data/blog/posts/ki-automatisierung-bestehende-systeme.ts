import type { BlogPost } from '../types'

const post: BlogPost = {
  slug: 'ki-automatisierung-bestehende-systeme',
  title: 'KI & Automatisierung in bestehenden Systemen — ohne Neubau',
  category: 'KI',
  excerpt:
    'KI-Integration muss nicht bedeuten, bestehende Software zu ersetzen. Meist geht es darum, wiederkehrende Arbeitsschritte innerhalb der vorhandenen Systeme zu automatisieren.',
  datePublished: '2026-09-01',
  relatedServiceIds: ['ai'],
  body: [
    {
      type: 'paragraph',
      text: 'Wenn von "KI im Unternehmen" die Rede ist, entsteht schnell der Eindruck, dass bestehende Systeme ersetzt werden müssen. In der Praxis ist das Gegenteil sinnvoller: Bestehende Systeme bleiben der Ausgangspunkt, KI ergänzt sie an den Stellen, an denen wiederkehrende, regelbasierte oder textlastige Aufgaben Zeit kosten.',
    },
    {
      type: 'heading',
      text: 'Wo sich KI-Integration typischerweise lohnt',
    },
    {
      type: 'list',
      items: [
        'Assistenten für wiederkehrende, klar umrissene Anfragen (z. B. interne Nachfragen, Standardauskünfte).',
        'Automatisierte Workflows zwischen Systemen, die bisher manuell verbunden wurden.',
        'Strukturierung und Auswertung großer Mengen unstrukturierter Daten oder Texte.',
        'Anbindung bestehender Systeme über APIs an KI-Dienste, statt eines separaten Parallelsystems.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Der wichtigste Grundsatz dabei: Automatisierung soll bestehende Abläufe erleichtern, nicht unnötig verändern. Ein Team, das seit Jahren mit einem bestimmten Prozess arbeitet, profitiert selten davon, dass dieser Prozess komplett umgebaut wird — es profitiert davon, dass der zeitaufwendigste Teil davon automatisiert wird.',
    },
    {
      type: 'heading',
      text: 'Analyse vor Automatisierung',
    },
    {
      type: 'paragraph',
      text: 'Wie bei jeder individuellen Softwareentwicklung steht auch hier die Analyse am Anfang: Welcher Arbeitsschritt kostet wiederkehrend am meisten Zeit, und ist er regelbasiert genug, um automatisiert zu werden? Erst danach folgt die technische Umsetzung — Assistent, Workflow oder API-Integration in das bestehende System.',
    },
  ],
}

export default post
