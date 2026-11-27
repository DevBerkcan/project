import type { BlogPost } from '../types'

const post: BlogPost = {
  slug: 'website-relaunch-wann-er-sich-lohnt',
  title: 'Website-Relaunch: Wann er sich lohnt und wie er gelingt',
  seoTitle: 'Website-Relaunch: Wann er sich lohnt und wie er gelingt',
  category: 'Webdesign',
  excerpt:
    'Nicht jede ältere Website braucht einen Relaunch. Woran Sie erkennen, dass Anpassungen nicht mehr reichen, und worauf es ankommt, damit Sichtbarkeit bei Google erhalten bleibt.',
  metaDescription:
    'Website-Relaunch oder Überarbeitung? Woran Sie erkennen, dass sich ein Relaunch lohnt, und wie Sie Rankings, Inhalte und Anfragen dabei sicher mitnehmen.',
  datePublished: '2026-11-27',
  relatedServiceIds: ['web'],
  body: [
    {
      type: 'paragraph',
      text: 'Ein Relaunch ist mehr als ein neues Design. Er verändert Struktur, Inhalte und Technik einer Website gleichzeitig. Das lohnt sich, wenn die bestehende Website Ihr Angebot nicht mehr verständlich erklärt oder technisch an Grenzen stößt. Wenn nur einzelne Inhalte veraltet sind, reicht oft eine gezielte Überarbeitung.',
    },
    { type: 'heading', text: 'Anzeichen, dass sich ein Relaunch lohnt' },
    {
      type: 'list',
      items: [
        'Ihr Angebot hat sich verändert, die Website erklärt aber noch das alte.',
        'Die Seite lädt langsam oder ist auf dem Smartphone schwer zu bedienen.',
        'Inhalte lassen sich nur mit Aufwand oder über Dritte ändern.',
        'Besucher finden nicht schnell genug zur Anfrage, Buchung oder zum Kontakt.',
        'Das Content-Management-System oder Plugins werden nicht mehr zuverlässig aktualisiert.',
        'Barrierefreiheit wurde bisher nicht berücksichtigt.',
      ],
    },
    { type: 'heading', text: 'Sichtbarkeit bei Google mitnehmen' },
    {
      type: 'paragraph',
      text: 'Der häufigste Fehler bei einem Relaunch ist der Verlust von Rankings. Er entsteht, wenn sich Adressen ändern, ohne dass alte URLs weitergeleitet werden, oder wenn gut rankende Inhalte wegfallen. Vor dem Start gehört deshalb eine Bestandsaufnahme dazu: Welche Seiten bringen heute Besucher und Anfragen?',
    },
    {
      type: 'list',
      items: [
        'Alle bestehenden URLs erfassen und für jede eine neue Zieladresse festlegen.',
        'Geänderte Adressen dauerhaft mit 301-Weiterleitungen umleiten.',
        'Seitentitel, Beschreibungen und strukturierte Daten übernehmen oder verbessern.',
        'Nach dem Launch die Sitemap in der Google Search Console einreichen und die Indexierung beobachten.',
      ],
    },
    { type: 'heading', text: 'So gehen wir einen Relaunch an' },
    {
      type: 'paragraph',
      text: 'Wir beginnen mit Zielen und Zielgruppen, nicht mit dem Layout. Danach folgen Struktur und Inhalte, Design und Entwicklung. Technisches SEO, Ladezeit und Barrierefreiheit planen wir von Anfang an mit. Für unsere eigene Website haben wir alle alten Leistungs-URLs per 301 auf die neuen Seiten weitergeleitet.',
    },
    { type: 'link', text: 'Webdesign & Webentwicklung aus Wuppertal', to: '/leistungen/webdesign-webentwicklung' },
  ],
}

export default post
