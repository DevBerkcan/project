import type { BlogPost } from '../types'

const post: BlogPost = {
  slug: 'cloud-betrieb-weiterentwicklung-nach-launch',
  title: 'Cloud, Betrieb & Weiterentwicklung: Was nach dem Launch beginnt',
  category: 'Softwareentwicklung',
  excerpt:
    'Ein digitales Produkt ist mit dem Launch nicht fertig. Cloud-Architektur, Deployment, Monitoring, Sicherheit und Support entscheiden, ob es zuverlässig bleibt.',
  datePublished: '2026-09-08',
  relatedServiceIds: ['operations'],
  body: [
    {
      type: 'paragraph',
      text: 'Der Launch einer individuellen Software fühlt sich oft wie ein Endpunkt an — ist aber der Beginn der eigentlichen Betriebsphase. Nutzerzahlen, Datenmengen und Anforderungen verändern sich, und ein System, das beim Launch gut funktioniert hat, braucht danach kontinuierliche Aufmerksamkeit.',
    },
    {
      type: 'heading',
      text: 'Was zum laufenden Betrieb gehört',
    },
    {
      type: 'list',
      items: [
        'Cloud-Architektur, die mit wachsender Nutzung mitwächst statt an Grenzen zu stoßen.',
        'Deployment-Prozesse, mit denen Änderungen sicher und nachvollziehbar ausgerollt werden.',
        'Monitoring, das Probleme erkennt, bevor Nutzer sie melden.',
        'Sicherheit und Backups als laufender Prozess, nicht als einmalige Maßnahme.',
        'Support für Weiterentwicklung, wenn sich Anforderungen nach dem Launch ändern.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Diese Punkte werden oft erst dann sichtbar, wenn sie fehlen — ein System, das ohne Monitoring läuft, zeigt Probleme erst, wenn Nutzer sich melden. Ein System ohne geplante Weiterentwicklung wird mit jeder neuen Anforderung schwerer wartbar.',
    },
    {
      type: 'heading',
      text: 'Betrieb ist Teil des Projekts, nicht ein Zusatz danach',
    },
    {
      type: 'paragraph',
      text: 'In unserem Projektprozess ist "Betrieb" deshalb eine eigene Phase nach Analyse, Konzeption, Design, Entwicklung und Qualitätssicherung — nicht ein optionales Zusatzpaket. Wer diese Phase von Anfang an mitdenkt, vermeidet, dass technische Schulden entstehen, die später aufwendiger zu beheben sind als von Beginn an eingeplant zu werden.',
    },
  ],
}

export default post
