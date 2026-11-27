import type { BlogPost } from '../types'

// Editorial review required before publication: no prices are stated on purpose
// (AGENTS.md §9.2). Add verified price ranges here once the owner supplies them.
const post: BlogPost = {
  slug: 'was-kostet-individuelle-software',
  title: 'Was kostet individuelle Software? Die Kostenfaktoren im Überblick',
  seoTitle: 'Was kostet individuelle Software? Die Kostenfaktoren',
  category: 'Softwareentwicklung',
  excerpt:
    'Die Kosten einer individuellen Software hängen weniger von der Technik ab als vom Umfang des Ablaufs, den sie abbilden soll. Welche Faktoren den Preis bestimmen und wie Sie ihn steuern.',
  metaDescription:
    'Was kostet individuelle Software? Welche Faktoren den Preis bestimmen – Umfang, Rollen, Schnittstellen, Betrieb – und wie Sie die Kosten gezielt steuern.',
  datePublished: '2026-11-27',
  relatedServiceIds: ['software', 'webapp', 'operations'],
  relatedProjectSlugs: ['daily-gourmet', 'emma-solution'],
  body: [
    {
      type: 'paragraph',
      text: 'Auf die Frage „Was kostet eine individuelle Software?“ gibt es keine seriöse Pauschalantwort. Eine Anwendung, die einen einzelnen Ablauf digitalisiert, und eine Plattform mit Web-App, mobiler App und mehreren Schnittstellen liegen weit auseinander. Entscheidend ist, welche Faktoren den Aufwand treiben – und welche Sie selbst beeinflussen können.',
    },
    { type: 'heading', text: 'Die wichtigsten Kostenfaktoren' },
    {
      type: 'list',
      items: [
        'Umfang des Ablaufs: Wie viele Schritte, Sonderfälle und Ausnahmen muss die Software abbilden?',
        'Rollen und Rechte: Arbeiten nur Mitarbeitende im System oder auch Kunden, Partner oder Fahrer mit eigenen Zugängen?',
        'Schnittstellen: Muss die Software mit bestehenden Systemen wie Buchhaltung, CRM, Shop oder Microsoft 365 Daten austauschen?',
        'Plattformen: Reicht eine Web-Anwendung im Browser, oder werden zusätzlich Apps für Android und iOS gebraucht?',
        'Daten und Dokumente: Müssen Bestandsdaten übernommen oder Dokumente wie Angebote und Rechnungen automatisch erzeugt werden?',
        'Anforderungen an Sicherheit, Datenschutz und Verfügbarkeit.',
        'Betrieb und Weiterentwicklung nach dem Launch: Hosting, Updates, Monitoring und neue Funktionen.',
      ],
    },
    { type: 'heading', text: 'Beispiele aus der Praxis' },
    {
      type: 'paragraph',
      text: 'Für Daily Gourmet verbindet eine Catering-Software Speiseplanung, Bestellungen, Produktion, Einkauf und Auslieferung in einem System. Der Aufwand ergibt sich hier vor allem aus der Zahl der verbundenen Abläufe. Bei Emma Solution kamen zur Web-Anwendung eine Backend-API und eine Android-App hinzu – jede zusätzliche Plattform erweitert den Umfang.',
    },
    { type: 'heading', text: 'So steuern Sie die Kosten' },
    {
      type: 'list',
      items: [
        'Mit dem Ablauf beginnen, der heute den meisten manuellen Aufwand verursacht, statt alles auf einmal zu digitalisieren.',
        'Eine erste Version mit dem Kern des Ablaufs live nehmen und danach anhand echter Nutzung erweitern.',
        'Prüfen, ob Standardsoftware oder die Microsoft Power Platform einen Teil abdecken kann.',
        'Anforderungen vor dem Start schriftlich festhalten, damit Umfang und Prioritäten klar sind.',
        'Laufende Kosten für Betrieb und Weiterentwicklung von Anfang an einplanen.',
      ],
    },
    { type: 'heading', text: 'Wie Sie zu einer belastbaren Einschätzung kommen' },
    {
      type: 'paragraph',
      text: 'Eine verlässliche Kostenschätzung setzt voraus, dass der Ablauf verstanden ist. Deshalb beginnt jedes Projekt bei uns mit einem Erstgespräch und einer kurzen Analyse. Auf dieser Grundlage erhalten Sie eine Einschätzung zu Vorgehen, Umfang und Aufwand, die auf Ihrem konkreten Vorhaben beruht.',
    },
    { type: 'link', text: 'Individuelle Softwareentwicklung bei Gentle Group Studios', to: '/leistungen/individuelle-softwareentwicklung' },
  ],
}

export default post
