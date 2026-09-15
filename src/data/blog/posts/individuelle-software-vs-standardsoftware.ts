import type { BlogPost } from '../types'

const post: BlogPost = {
  slug: 'individuelle-software-vs-standardsoftware',
  title: 'Individuelle Software vs. Standardsoftware: Wann sich Eigenentwicklung lohnt',
  category: 'Softwareentwicklung',
  excerpt:
    'Standardsoftware deckt viele Abläufe gut ab — aber nicht alle. Ein Überblick, woran man erkennt, dass ein Unternehmen an die Grenzen von Standardlösungen stößt.',
  datePublished: '2026-07-06',
  relatedServiceIds: ['software'],
  relatedProjectSlugs: ['daily-gourmet', 'emma-solution'],
  body: [
    {
      type: 'paragraph',
      text: 'Die meisten Unternehmen starten mit Standardsoftware: Tabellen, Baukastensysteme, generische SaaS-Tools. Das ist sinnvoll, solange die Abläufe generisch genug sind, um in ein vorgefertigtes System zu passen. Schwierig wird es, wenn ein Ablauf so spezifisch ist, dass er mit Standardsoftware nur noch über Workarounds abgebildet werden kann.',
    },
    {
      type: 'heading',
      text: 'Woran man die Grenze erkennt',
    },
    {
      type: 'list',
      items: [
        'Mehrere Tabellen oder Tools müssen manuell synchron gehalten werden.',
        'Ein zentraler Ablauf (z. B. Bestellung, Planung, Abrechnung) läuft über E-Mail, Excel und Zuruf gleichzeitig.',
        'Die Standardsoftware bildet 80 % des Prozesses ab, aber die restlichen 20 % kosten den meisten manuellen Aufwand.',
        'Neue Mitarbeitende brauchen lange, um den improvisierten Prozess überhaupt zu verstehen.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Ein konkretes Beispiel aus unserer Arbeit: Für Daily Gourmet haben wir eine individuelle Catering-Software entwickelt, die Speiseplanung, Bestellungen, Produktion, Einkauf und Auslieferung in einem zentralen System verbindet. Vorher liefen diese Schritte über mehrere getrennte Werkzeuge. Die Lösung musste nicht "mehr Funktionen" haben als Standardsoftware — sie musste genau den tatsächlichen Ablauf abbilden.',
    },
    {
      type: 'paragraph',
      text: 'Bei Emma Solution war der Ausgangspunkt ähnlich: Fracht- und Fahrzeugverwaltung, operative Abläufe und Echtzeit-Tracking liefen getrennt. Die entstandene Logistik-Management-Plattform verbindet Web-Anwendung, Backend-API und eine Android-App in einem gemeinsamen System, damit Informationen zentral verwaltet und unterwegs abgerufen werden können.',
    },
    {
      type: 'heading',
      text: 'Individuelle Software heißt nicht: alles neu bauen',
    },
    {
      type: 'paragraph',
      text: 'Individuelle Software ersetzt selten das gesamte Tool-Ökosystem eines Unternehmens. Meistens geht es um einen konkreten, klar abgegrenzten Ablauf, der digitalisiert oder verbunden wird — über Systemintegration, APIs oder ein eigenständiges internes Tool. Der erste Schritt ist deshalb immer eine Analyse: Welcher Ablauf verursacht den Aufwand, und wo genau reicht Standardsoftware nicht mehr aus.',
    },
  ],
}

export default post
