import type { BlogPost } from '../types'

const post: BlogPost = {
  slug: 'ux-ui-designsysteme-strategie-vor-pixeln',
  title: 'UX/UI und Designsysteme: Strategie vor Pixeln',
  category: 'Webdesign',
  excerpt:
    'Ein gutes Design entsteht nicht am Bildschirm allein. Strategie, UX/UI, Designsystem und Entwicklung greifen ineinander — in dieser Reihenfolge.',
  datePublished: '2026-06-22',
  relatedServiceIds: ['web'],
  body: [
    {
      type: 'paragraph',
      text: 'Eine Website oder Web-App wirkt erst dann überzeugend, wenn Design nicht isoliert entsteht, sondern aus einer klaren Strategie folgt: Wer soll die Seite nutzen, welches Ziel soll sie erreichen, und welche Informationen brauchen Nutzer, um dorthin zu kommen. Erst danach folgen UX/UI und ein konsistentes Designsystem.',
    },
    {
      type: 'heading',
      text: 'Der Ablauf von der Idee zur Umsetzung',
    },
    {
      type: 'list',
      items: [
        'Analyse: Ziele, Zielgruppe und bestehende Abläufe verstehen.',
        'Konzeption: Struktur, Informationsarchitektur und Kernfunktionen festlegen.',
        'Design: UX/UI und Designsystem entwickeln — wiederverwendbare Komponenten statt Einzelseiten.',
        'Entwicklung: Umsetzung als responsive, zugängliche und performante Website oder App.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Diese Reihenfolge folgt unserem allgemeinen Projektprozess: Analyse, Konzeption, Design, Entwicklung, Qualitätssicherung, Betrieb. Wird Design vor Konzeption begonnen, entstehen oft hübsche Einzelseiten, die sich später schwer zu einem konsistenten System zusammenfügen lassen.',
    },
    {
      type: 'heading',
      text: 'Warum ein Designsystem mehr ist als eine Stilvorlage',
    },
    {
      type: 'paragraph',
      text: 'Ein Designsystem definiert wiederverwendbare Komponenten (Buttons, Formulare, Layout-Bausteine) statt einzelner Seiten. Das beschleunigt nicht nur die Entwicklung neuer Seiten, sondern sorgt auch dafür, dass eine Website mit wachsendem Umfang visuell konsistent bleibt — ein Aspekt, der bei reiner "Seite für Seite"-Gestaltung häufig verloren geht.',
    },
  ],
}

export default post
