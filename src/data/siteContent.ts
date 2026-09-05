export interface Service {
  id: string
  number: string
  title: string
  description: string
  tags: string[]
}

export interface Product {
  name: string
  description: string
  tags: string[]
}

export interface SolutionArea {
  title: string
  category: string
  description: string
  art: string
}

export const services: Service[] = [
  {
    id: 'software',
    number: '01',
    title: 'Individuelle Software & Web-Apps',
    description:
      'Digitale Werkzeuge für Abläufe, die mit Standardsoftware nicht weiterkommen. Von Portalen und Dashboards bis zu APIs und skalierbaren Systemen entsteht eine Lösung, die zu Ihrem Unternehmen passt.',
    tags: ['Web-Apps', 'Portale', 'APIs', 'SaaS', 'Systemintegration'],
  },
  {
    id: 'web',
    number: '02',
    title: 'Websites & digitale Erlebnisse',
    description:
      'Strategie, UX/UI, Designsystem und Entwicklung aus einer Hand. Wir bauen responsive Websites, die verständlich, zugänglich, schnell und auf konkrete Ziele ausgerichtet sind.',
    tags: ['Strategie', 'UX/UI', 'Designsysteme', 'SEO', 'Performance'],
  },
  {
    id: 'ai',
    number: '03',
    title: 'KI & Automatisierung',
    description:
      'Sinnvolle KI-Integrationen und automatisierte Prozesse für Teams, die weniger Zeit mit wiederkehrender Arbeit verbringen wollen. Bestehende Systeme bleiben dabei der Ausgangspunkt.',
    tags: ['KI-Integration', 'Assistenten', 'Workflows', 'Automatisierung', 'APIs'],
  },
  {
    id: 'operations',
    number: '04',
    title: 'Cloud, Betrieb & Weiterentwicklung',
    description:
      'Ein digitales Produkt ist nach dem Launch nicht fertig. Wir unterstützen bei Cloud-Architektur, Deployment, Monitoring, Sicherheit, Backups und kontinuierlicher Weiterentwicklung.',
    tags: ['Azure', 'Deployment', 'Monitoring', 'Security', 'Support'],
  },
  {
    id: 'mobile',
    number: '05',
    title: 'Mobile Anwendungen',
    description:
      'Mobile Anwendungen für Android und iOS, wenn sie für den Anwendungsfall wirklich den besseren Zugang schaffen. Von der Idee bis zur technischen Umsetzung bleibt der Nutzungskontext im Mittelpunkt.',
    tags: ['Android', 'iOS', 'Mobile UX', 'APIs', 'Betrieb'],
  },
]

export const products: Product[] = [
  {
    name: 'GentleTrack',
    description: 'Projektfortschritt, Meilensteine und Kommunikation an einem gemeinsamen Ort.',
    tags: ['Projektübersicht', 'Status', 'Kommunikation'],
  },
  {
    name: 'GentleAccess',
    description: 'Ein Werkzeug, das Teams dabei unterstützt, Barrierefreiheit systematisch zu prüfen und zu verbessern.',
    tags: ['Analyse', 'Barrierefreiheit', 'Verbesserung'],
  },
  {
    name: 'GentleCalc',
    description: 'Konfigurierbare Preis- und Angebotslogik für transparente digitale Anfragen.',
    tags: ['Konfiguration', 'Berechnung', 'Anfragen'],
  },
  {
    name: 'GentleBook',
    description: 'Online-Buchung und Serviceverwaltung für lokale Dienstleistungsunternehmen.',
    tags: ['Buchung', 'Services', 'Kalender'],
  },
]

export const solutionAreas: SolutionArea[] = [
  {
    title: 'Digitale Produkte',
    category: 'Software & Web-Apps',
    description: 'Wir übersetzen komplexe Abläufe in klare, wartbare digitale Produkte.',
    art: 'radial-gradient(ellipse at 30% 20%, var(--color-brand-primary) 0%, transparent 48%), linear-gradient(145deg, var(--color-brand-dark) 0%, rgb(169 122 255 / 24%) 100%)',
  },
  {
    title: 'Starke Auftritte',
    category: 'Websites & UX/UI',
    description: 'Wir verbinden eine klare Geschichte mit einem Erlebnis, das Menschen gerne nutzen.',
    art: 'radial-gradient(ellipse at 70% 25%, var(--color-brand-secondary) 0%, transparent 50%), linear-gradient(155deg, var(--color-brand-dark) 0%, rgb(169 122 255 / 30%) 100%)',
  },
  {
    title: 'Weniger Reibung',
    category: 'KI & Automatisierung',
    description: 'Wir schaffen Verbindungen zwischen Menschen, Systemen und den Aufgaben dazwischen.',
    art: 'radial-gradient(ellipse at 50% 75%, var(--color-brand-primary) 0%, transparent 46%), radial-gradient(ellipse at 85% 15%, var(--color-brand-secondary) 0%, transparent 42%), linear-gradient(165deg, var(--color-brand-dark) 0%, rgb(1 10 48 / 60%) 100%)',
  },
]

export const processStages = ['Analyse', 'Konzeption', 'Design', 'Entwicklung', 'Qualitätssicherung', 'Betrieb']
