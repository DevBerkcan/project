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

export interface TeamProfile {
  name: string
  label: string
  role: string
  description: string
  src: string
}

export const teamProfiles: TeamProfile[] = [
  {
    name: 'Berk-Can',
    label: 'Profil 01',
    role: 'Founder & Lead Developer',
    description: 'Dummy-Text: Verantwortlich für Produktstrategie, technische Architektur und die Verbindung zwischen Idee und Umsetzung.',
    src: '/berk-can_founder.png',
  },
  {
    name: 'Medin',
    label: 'Profil 02',
    role: 'Backend Specialist',
    description: 'Dummy-Text: Entwickelt skalierbare Backend-Architekturen, Datenmodelle und zuverlässige Schnittstellen für digitale Produkte.',
    src: '/medin_co-founder.png',
  },
  {
    name: 'Alanur',
    label: 'Profil 03',
    role: 'Backoffice & Administration',
    description: 'Dummy-Text: Unterstützt Organisation, Projektkoordination und die Abläufe, die gute Zusammenarbeit im Hintergrund möglich machen.',
    src: '/alanur_backoffice.png',
  },
]

export interface SolutionArea {
  title: string
  category: string
  description: string
  art: string
}

export interface WorkProject {
  title: string
  year: string
  intro: string
  description: string
  tags: string[]
  art: string
  href?: string
}

export const workProjects: WorkProject[] = [
  {
    title: 'Daily Gourmet',
    year: '2026',
    intro: 'Eine Plattform für den gesamten Catering-Prozess.',
    description:
      'Für Daily Gourmet haben wir eine individuelle Catering-Software entwickelt, die Speiseplanung, Bestellungen, Produktion, Einkauf und Auslieferung in einem zentralen System verbindet. Von der Veröffentlichung wöchentlicher Speisepläne über die Portionsbestellungen der Einrichtungen bis zur Berechnung des Zutatenbedarfs und der Planung von Lieferrouten greifen alle wichtigen Abläufe digital ineinander.',
    tags: ['Catering Management', 'Web-App', 'Prozessdigitalisierung'],
    art: 'radial-gradient(ellipse at 28% 22%, var(--color-brand-secondary) 0%, transparent 48%), linear-gradient(145deg, var(--color-brand-dark) 0%, rgb(169 122 255 / 30%) 100%)',
  },
  {
    title: 'Skinbloom Buchungssystem',
    year: '2026',
    intro: 'Online buchen. Intern effizient verwalten.',
    description:
      'Für Skinbloom Aesthetics haben wir ein individuelles Buchungssystem entwickelt, das die Online-Terminbuchung mit der internen Verwaltung des Studios verbindet. Kunden wählen Leistungen und Mitarbeiter online aus. Administratoren verwalten Termine, Services, Zeitblockierungen, Mitarbeiter und Kundendaten zentral. Mitarbeiter erhalten einen eigenen, auf ihre Termine begrenzten Kalenderzugriff.',
    tags: ['Booking System', 'Kundenportal', 'Administration'],
    art: 'radial-gradient(ellipse at 32% 72%, var(--color-brand-secondary) 0%, transparent 48%), linear-gradient(145deg, var(--color-brand-dark) 0%, rgb(169 122 255 / 24%) 100%)',
    href: 'https://skinbloombooking.gentlegroup.de/',
  },
  {
    title: 'Skinbloom Preisrechner',
    year: '2026',
    intro: 'Von der individuellen Behandlung zum fertigen Angebot.',
    description:
      'Für Skinbloom Aesthetics haben wir einen digitalen Preisrechner entwickelt, mit dem individuelle Behandlungskosten transparent zusammengestellt werden können. Die Verwaltung pflegt Kunden, Leistungen, Kategorien und Preise zentral. Auf Grundlage der ausgewählten Leistungen berechnet das System den Gesamtpreis und erstellt einen individuellen Kostenvoranschlag als PDF.',
    tags: ['Business Tool', 'Preisberechnung', 'PDF-Automatisierung'],
    art: 'radial-gradient(ellipse at 48% 18%, var(--color-brand-secondary) 0%, transparent 46%), linear-gradient(150deg, var(--color-brand-dark) 0%, rgb(169 122 255 / 30%) 100%)',
  },
  {
    title: 'Emma Solution',
    year: '2025',
    intro: 'Logistikprozesse in einer zentralen Plattform.',
    description:
      'Für Emma Solution haben wir eine umfassende Logistik-Management-Plattform entwickelt. Die Lösung verbindet Fracht- und Fahrzeugverwaltung, operative Abläufe und Echtzeit-Tracking in einem gemeinsamen System. Neben der Web-Anwendung entstanden eine Backend-API und eine Android-App. Dadurch können relevante Informationen zentral verwaltet und unterwegs abgerufen werden.',
    tags: ['Logistiksoftware', 'Full-Stack', 'Android-App'],
    art: 'radial-gradient(ellipse at 72% 24%, var(--color-brand-primary) 0%, transparent 46%), linear-gradient(155deg, var(--color-brand-dark) 0%, rgb(1 10 48 / 60%) 100%)',
  },
  {
    title: 'Teretnjaci',
    year: '2025',
    intro: 'Eine Content-Plattform für Web und Mobile.',
    description:
      'Für Teretnjaci haben wir eine digitale Nachrichtenplattform rund um Trucks und Logistik entwickelt. Inhalte werden über ein zentrales Administrationsportal verwaltet und anschließend über die Website sowie Android- und iOS-Anwendungen veröffentlicht. Dadurch können redaktionelle Inhalte zentral gepflegt und auf mehreren Plattformen bereitgestellt werden.',
    tags: ['Content-Plattform', 'Web-App', 'Android & iOS'],
    art: 'radial-gradient(ellipse at 76% 68%, var(--color-brand-primary) 0%, transparent 44%), radial-gradient(ellipse at 22% 18%, var(--color-brand-secondary) 0%, transparent 42%), linear-gradient(165deg, var(--color-brand-dark) 0%, rgb(1 10 48 / 60%) 100%)',
  },
]

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
