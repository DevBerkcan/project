export interface Service {
  id: string
  /** URL segment below /leistungen; keyword-bearing and stable once published. */
  slug: string
  number?: string
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
  /** Only set once the person has approved the text. */
  description?: string
  src: string
}

export const teamProfiles: TeamProfile[] = [
  {
    name: 'Berk-Can',
    label: 'Profil 01',
    role: 'Founder & Lead Developer',
    src: '/berk-can_founder.webp',
  },
  {
    name: 'Medin',
    label: 'Profil 02',
    role: 'Backend Specialist',
    src: '/medin_co-founder.webp',
  },
  {
    name: 'Alanur',
    label: 'Profil 03',
    role: 'Backoffice & Administration',
    src: '/alanur_backoffice.webp',
  },
]

export interface SolutionArea {
  title: string
  category: string
  description: string
  art: string
}

export interface WorkProject {
  slug: string
  title: string
  year: string
  intro: string
  description: string
  challenge: string
  approach: string
  result: string
  tags: string[]
  art: string
  href?: string
  /** Descriptive, keyword-bearing name used in the document title. */
  seoTitle: string
  industry: string
  relatedServiceIds?: string[]
}

export const workProjects: WorkProject[] = [
  {
    slug: 'daily-gourmet',
    title: 'Daily Gourmet',
    year: '2026',
    intro: 'Eine Plattform für den gesamten Catering-Prozess.',
    description:
      'Für Daily Gourmet haben wir eine individuelle Catering-Software entwickelt, die Speiseplanung, Bestellungen, Produktion, Einkauf und Auslieferung in einem zentralen System verbindet. Von der Veröffentlichung wöchentlicher Speisepläne über die Portionsbestellungen der Einrichtungen bis zur Berechnung des Zutatenbedarfs und der Planung von Lieferrouten greifen alle wichtigen Abläufe digital ineinander.',
    challenge: 'Speiseplanung, Bestellungen, Produktion, Einkauf und Auslieferung liefen als mehrere getrennte, nicht miteinander verbundene Abläufe.',
    approach: 'Eine individuelle Catering-Software verbindet alle Schritte in einem zentralen System: von der Veröffentlichung wöchentlicher Speisepläne über Portionsbestellungen bis zur Berechnung des Zutatenbedarfs und der Lieferroutenplanung.',
    result: 'Ein durchgängiger digitaler Prozess mit einer zentralen Datenbasis statt mehrerer getrennter Werkzeuge.',
    tags: ['Catering Management', 'Web-App', 'Prozessdigitalisierung'],
    art: 'radial-gradient(ellipse at 28% 22%, var(--color-brand-secondary) 0%, transparent 48%), linear-gradient(145deg, var(--color-brand-dark) 0%, rgb(169 122 255 / 30%) 100%)',
    seoTitle: 'Catering-Software für Daily Gourmet',
    industry: 'Catering & Gemeinschaftsverpflegung',
    relatedServiceIds: ['software', 'webapp'],
  },
  {
    slug: 'skinbloom-buchungssystem',
    title: 'Skinbloom Buchungssystem',
    year: '2026',
    intro: 'Online buchen. Intern effizient verwalten.',
    description:
      'Für Skinbloom Aesthetics haben wir ein individuelles Buchungssystem entwickelt, das die Online-Terminbuchung mit der internen Verwaltung des Studios verbindet. Kunden wählen Leistungen und Mitarbeiter online aus. Administratoren verwalten Termine, Services, Zeitblockierungen, Mitarbeiter und Kundendaten zentral. Mitarbeiter erhalten einen eigenen, auf ihre Termine begrenzten Kalenderzugriff.',
    challenge: 'Online-Terminbuchung und interne Studioverwaltung — Termine, Services, Zeitblockierungen, Mitarbeiter, Kundendaten — waren nicht miteinander verbunden.',
    approach: 'Ein individuelles Buchungssystem verbindet die öffentliche Terminbuchung mit einer zentralen internen Verwaltung; Mitarbeitende erhalten einen eigenen, auf ihre Termine begrenzten Kalenderzugriff.',
    result: 'Kunden buchen selbstständig online, während Administratoren und Mitarbeitende zentral und rollenbasiert auf dieselbe Datenbasis zugreifen.',
    tags: ['Booking System', 'Kundenportal', 'Administration'],
    art: 'radial-gradient(ellipse at 32% 72%, var(--color-brand-secondary) 0%, transparent 48%), linear-gradient(145deg, var(--color-brand-dark) 0%, rgb(169 122 255 / 24%) 100%)',
    href: 'https://skinbloombooking.gentlegroup.de/',
    seoTitle: 'Buchungssystem für Skinbloom Aesthetics',
    industry: 'Ästhetik & Beauty',
    relatedServiceIds: ['booking', 'software', 'web'],
  },
  {
    slug: 'skinbloom-preisrechner',
    title: 'Skinbloom Preisrechner',
    year: '2026',
    intro: 'Von der individuellen Behandlung zum fertigen Angebot.',
    description:
      'Für Skinbloom Aesthetics haben wir einen digitalen Preisrechner entwickelt, mit dem individuelle Behandlungskosten transparent zusammengestellt werden können. Die Verwaltung pflegt Kunden, Leistungen, Kategorien und Preise zentral. Auf Grundlage der ausgewählten Leistungen berechnet das System den Gesamtpreis und erstellt einen individuellen Kostenvoranschlag als PDF.',
    challenge: 'Individuelle Behandlungskosten mussten aus mehreren Leistungen und Kategorien manuell zusammengestellt werden.',
    approach: 'Ein digitaler Preisrechner berechnet auf Grundlage ausgewählter Leistungen automatisch den Gesamtpreis und erstellt einen individuellen Kostenvoranschlag als PDF; Kunden, Leistungen, Kategorien und Preise werden zentral gepflegt.',
    result: 'Transparente, wiederholbare Preisberechnung statt manueller Einzelkalkulation.',
    tags: ['Business Tool', 'Preisberechnung', 'PDF-Automatisierung'],
    art: 'radial-gradient(ellipse at 48% 18%, var(--color-brand-secondary) 0%, transparent 46%), linear-gradient(150deg, var(--color-brand-dark) 0%, rgb(169 122 255 / 30%) 100%)',
    seoTitle: 'Digitaler Preisrechner für Skinbloom',
    industry: 'Ästhetik & Beauty',
    relatedServiceIds: ['software', 'webapp'],
  },
  {
    slug: 'emma-solution',
    title: 'Emma Solution',
    year: '2025',
    intro: 'Logistikprozesse in einer zentralen Plattform.',
    description:
      'Für Emma Solution haben wir eine umfassende Logistik-Management-Plattform entwickelt. Die Lösung verbindet Fracht- und Fahrzeugverwaltung, operative Abläufe und Echtzeit-Tracking in einem gemeinsamen System. Neben der Web-Anwendung entstanden eine Backend-API und eine Android-App. Dadurch können relevante Informationen zentral verwaltet und unterwegs abgerufen werden.',
    challenge: 'Fracht- und Fahrzeugverwaltung, operative Abläufe und Tracking liefen in getrennten Systemen ohne durchgängigen Informationsfluss.',
    approach: 'Eine Logistik-Management-Plattform aus Web-Anwendung, Backend-API und Android-App verbindet Fracht- und Fahrzeugverwaltung, operative Abläufe und Echtzeit-Tracking in einem gemeinsamen System.',
    result: 'Relevante Informationen sind zentral verwaltet und auch unterwegs über die mobile Anwendung abrufbar.',
    tags: ['Logistiksoftware', 'Full-Stack', 'Android-App'],
    art: 'radial-gradient(ellipse at 72% 24%, var(--color-brand-primary) 0%, transparent 46%), linear-gradient(155deg, var(--color-brand-dark) 0%, rgb(1 10 48 / 60%) 100%)',
    seoTitle: 'Logistiksoftware für Emma Solution',
    industry: 'Logistik & Transport',
    relatedServiceIds: ['software', 'mobile'],
  },
  {
    slug: 'teretnjaci',
    title: 'Teretnjaci',
    year: '2025',
    intro: 'Eine Content-Plattform für Web und Mobile.',
    description:
      'Für Teretnjaci haben wir eine digitale Nachrichtenplattform rund um Trucks und Logistik entwickelt. Inhalte werden über ein zentrales Administrationsportal verwaltet und anschließend über die Website sowie Android- und iOS-Anwendungen veröffentlicht. Dadurch können redaktionelle Inhalte zentral gepflegt und auf mehreren Plattformen bereitgestellt werden.',
    challenge: 'Redaktionelle Inhalte sollten auf Website, Android- und iOS-Anwendung gleichzeitig erscheinen, ohne für jeden Kanal separat gepflegt zu werden.',
    approach: 'Ein zentrales Administrationsportal verwaltet Inhalte, die anschließend automatisch über Website sowie Android- und iOS-Anwendungen veröffentlicht werden.',
    result: 'Inhalte werden einmal gepflegt und konsistent auf mehreren Plattformen bereitgestellt.',
    tags: ['Content-Plattform', 'Web-App', 'Android & iOS'],
    art: 'radial-gradient(ellipse at 76% 68%, var(--color-brand-primary) 0%, transparent 44%), radial-gradient(ellipse at 22% 18%, var(--color-brand-secondary) 0%, transparent 42%), linear-gradient(165deg, var(--color-brand-dark) 0%, rgb(1 10 48 / 60%) 100%)',
    seoTitle: 'Content-Plattform & Apps für Teretnjaci',
    industry: 'Medien & Logistik',
    relatedServiceIds: ['software', 'mobile'],
  },
]

export const services: Service[] = [
  {
    id: 'software',
    slug: 'individuelle-softwareentwicklung',
    number: '01',
    title: 'Individuelle Software & Web-Apps',
    description:
      'Digitale Werkzeuge für Abläufe, die mit Standardsoftware nicht weiterkommen. Von Portalen und Dashboards bis zu APIs und skalierbaren Systemen entsteht eine Lösung, die zu Ihrem Unternehmen passt.',
    tags: ['Web-Apps', 'Portale', 'APIs', 'SaaS', 'Systemintegration'],
  },
  {
    id: 'web',
    slug: 'webdesign-webentwicklung',
    number: '02',
    title: 'Websites & digitale Erlebnisse',
    description:
      'Strategie, UX/UI, Designsystem und Entwicklung aus einer Hand. Wir bauen responsive Websites, die verständlich, zugänglich, schnell und auf konkrete Ziele ausgerichtet sind.',
    tags: ['Strategie', 'UX/UI', 'Designsysteme', 'SEO', 'Performance'],
  },
  {
    id: 'ai',
    slug: 'ki-automatisierung',
    number: '03',
    title: 'KI & Automatisierung',
    description:
      'Sinnvolle KI-Integrationen und automatisierte Prozesse für Teams, die weniger Zeit mit wiederkehrender Arbeit verbringen wollen. Bestehende Systeme bleiben dabei der Ausgangspunkt.',
    tags: ['KI-Integration', 'Assistenten', 'Workflows', 'Automatisierung', 'APIs'],
  },
  {
    id: 'operations',
    slug: 'cloud-betrieb-wartung',
    number: '04',
    title: 'Cloud, Betrieb & Weiterentwicklung',
    description:
      'Ein digitales Produkt ist nach dem Launch nicht fertig. Wir unterstützen bei Cloud-Architektur, Deployment, Monitoring, Sicherheit, Backups und kontinuierlicher Weiterentwicklung.',
    tags: ['Azure', 'Deployment', 'Monitoring', 'Security', 'Support'],
  },
  {
    id: 'mobile',
    slug: 'app-entwicklung',
    number: '05',
    title: 'Mobile Anwendungen',
    description:
      'Mobile Anwendungen für Android und iOS, wenn sie für den Anwendungsfall wirklich den besseren Zugang schaffen. Von der Idee bis zur technischen Umsetzung bleibt der Nutzungskontext im Mittelpunkt.',
    tags: ['Android', 'iOS', 'Mobile UX', 'APIs', 'Betrieb'],
  },
]

/** Focused offers that sit below the core services and get their own landing page. */
export const solutions: Service[] = [
  {
    id: 'webapp',
    slug: 'web-app-saas-entwicklung',
    title: 'Web-App- & SaaS-Entwicklung',
    description:
      'Browserbasierte Anwendungen und SaaS-Produkte mit Next.js und React: von der ersten Version bis zum Produkt, das mit Nutzern, Mandanten und Funktionen wächst.',
    tags: ['Next.js', 'React', 'SaaS', 'Mandantenfähigkeit', 'APIs'],
  },
  {
    id: 'crm',
    slug: 'crm-entwicklung',
    title: 'Individuelle CRM-Systeme',
    description:
      'Ein CRM, das Ihren Vertriebs- und Kundenprozess abbildet statt umgekehrt: Kontakte, Anfragen, Angebote und Aufgaben in einem System, angebunden an Ihre bestehenden Werkzeuge.',
    tags: ['CRM', 'Kundenverwaltung', 'Vertrieb', 'Integrationen', 'Rollen & Rechte'],
  },
  {
    id: 'booking',
    slug: 'buchungssystem-entwicklung',
    title: 'Buchungssysteme & Terminverwaltung',
    description:
      'Online-Terminbuchung, die mit Ihrer internen Planung verbunden ist: Leistungen, Mitarbeitende, Zeitfenster und Kundendaten zentral verwaltet.',
    tags: ['Online-Buchung', 'Kalender', 'Mitarbeiterplanung', 'Kundendaten', 'Verwaltung'],
  },
  {
    id: 'powerplatform',
    slug: 'microsoft-power-platform',
    title: 'Microsoft Power Platform',
    description:
      'Beratung und Umsetzung mit Power Apps und Power Automate für Unternehmen, die bereits mit Microsoft 365 arbeiten — und eine ehrliche Einschätzung, wann Individualentwicklung die bessere Wahl ist.',
    tags: ['Power Apps', 'Power Automate', 'Microsoft 365', 'Workflows', 'Beratung'],
  },
]

export const allServices: Service[] = [...services, ...solutions]

export function findService(id: string): Service | undefined {
  return allServices.find((service) => service.id === id)
}

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
