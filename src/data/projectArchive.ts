export interface ArchivedProject {
  title: string
  description: string
  technologies: string[]
  services: string[]
  href: string
}

export const projectArchive: ArchivedProject[] = [
  {
    title: 'Emma Solution',
    description: 'Umfassende Logistik-Management-Plattform mit Web-App, Backend-API und Android-App für Fracht- und Fahrzeugverwaltung mit Echtzeit-Tracking.',
    technologies: ['React', 'TypeScript', 'ASP.NET Core 8', 'Android', 'Azure SQL'],
    services: ['Web-App für Frachtverwaltung', 'Backend-API mit ASP.NET Core 8', 'Android-App für Fahrer', 'Echtzeit-Fahrzeug-Tracking', 'Azure SQL Datenbank'],
    href: 'https://emmasolution.com/',
  },
  {
    title: 'Gentle Track',
    description: 'Projektmanagement-System mit React Frontend und ASP.NET Core Backend für Echtzeit-Zusammenarbeit und umfassende Berichterstattung.',
    technologies: ['React', 'Vite', 'ASP.NET Core 8', 'MS SQL', 'Multi-language'],
    services: ['Echtzeit-Projektverfolgung', 'Multi-language Unterstützung', 'Umfassende Berichterstattung', 'ASP.NET Core 8 Backend', 'MS SQL Datenbank'],
    href: 'https://f7e2b27f.gentle-track-ui.pages.dev/',
  },
  {
    title: 'Creative Hairstyling',
    description: 'Moderne Friseur-Website entwickelt mit React und Vite für schnelle Performance und reaktionsschnelle Benutzeroberfläche.',
    technologies: ['React', 'TypeScript', 'Vite', 'Responsive Design'],
    services: ['React + Vite für schnelle Performance', 'Vollständig responsives Design', 'TypeScript für Typsicherheit', 'Modernes UI/UX'],
    href: 'https://creative-hairstyling-3u6e.vercel.app/',
  },
  {
    title: 'Hautliebe & Laser',
    description: 'Professionelle WordPress-Website für Hautpflege und Laser-Behandlungen mit modernem Design und optimaler Performance.',
    technologies: ['WordPress', 'PHP', 'Custom Theme', 'SEO'],
    services: ['Custom WordPress Theme', 'SEO-Optimierung', 'PHP Backend', 'Professionelles Design'],
    href: 'https://hautliebeundlaser.de/',
  },
  {
    title: 'JJ Immobilienpartner',
    description: 'Elegante Immobilien-Website mit Next.js für optimale SEO-Performance und moderne Benutzererfahrung.',
    technologies: ['Next.js', 'React', 'TypeScript', 'SEO'],
    services: ['Next.js für optimales SEO', 'Modernes Immobilien-Layout', 'TypeScript', 'Responsives Design'],
    href: 'https://www.jj-immobilienpartner.de/',
  },
  {
    title: 'Kabelbrücken24',
    description: 'E-Commerce-Plattform für Kabelbrücken mit Next.js, optimiert für Performance und Conversion.',
    technologies: ['Next.js', 'React', 'TypeScript', 'E-Commerce'],
    services: ['Next.js E-Commerce-Plattform', 'Produktkatalog', 'Performance-optimiert', 'TypeScript'],
    href: 'https://www.kabelbruecken24.de/',
  },
  {
    title: 'Skinbloom Aesthetics',
    description: 'Ästhetische Klinik-Website mit Next.js für professionelle Präsentation und optimale Ladezeiten.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Responsive Design'],
    services: ['Next.js für schnelle Ladezeiten', 'Professionelles Klinik-Design', 'Responsiv auf allen Geräten', 'TypeScript'],
    href: 'https://www.skinbloom-aesthetics.ch/',
  },
  {
    title: 'NRW Real Estate',
    description: 'Immobilienportal mit Next.js für effiziente Darstellung von Immobilienangeboten und SEO-Optimierung.',
    technologies: ['Next.js', 'React', 'TypeScript', 'SEO'],
    services: ['Next.js Immobilienportal', 'SEO-Optimierung', 'Immobilienangebote-Verwaltung', 'TypeScript'],
    href: 'https://www.nrwrealestate.de/',
  },
  {
    title: 'Teretnjaci',
    description: 'News-Plattform rund um Trucks und Logistik als Web-App, Android-App und iOS-App. Admins verwalten Beiträge über ein Admin-Portal.',
    technologies: ['React', 'Vite', 'Node.js', 'MySQL', 'Android', 'iOS', 'Cloudflare'],
    services: ['Web-App mit React + Vite', 'Node.js Backend auf cPanel', 'MySQL Datenbank', 'Android-App', 'iOS-App', 'Admin-Portal für Beiträge'],
    href: 'https://teretnjaci.ba/',
  },
  {
    title: 'Skinbloom Buchungssystem',
    description: 'Buchungsplattform für Skinbloom Aesthetics. Admins verwalten Buchungen, Zeitblockierungen, Services, Mitarbeiter und Kunden.',
    technologies: ['Next.js', 'React', 'C#', 'ASP.NET', 'MS SQL', 'SMTP', 'Vercel'],
    services: ['Admin-Dashboard', 'Zeitblockierung', 'Mitarbeiter-Kalender', 'Service- und Kundenverwaltung', 'E-Mail-Versand via SMTP', 'Online-Buchung'],
    href: 'https://skinbloombooking.gentlegroup.de/',
  },
  {
    title: 'Skinbloom Preisrechner',
    description: 'Preisrechner für Skinbloom Aesthetics. Admins legen Kunden, Services, Kategorien und Preise fest. Kostenvoranschläge werden als PDF exportiert.',
    technologies: ['Next.js', 'React', 'TypeScript', 'C#', 'ASP.NET', 'MS SQL', 'PDF'],
    services: ['Admin-Verwaltung', 'Kundenverwaltung', 'Service-Kategorien', 'PDF-Export', 'C# ASP.NET Backend', 'MS SQL Datenbank'],
    href: 'https://skinbloompreisrechner.gentlegroup.de/skinbloom',
  },
  {
    title: 'Zoey Preisrechner',
    description: 'Einfacher Preisrechner zur schnellen Berechnung von Preisen und Rabatten ohne Kundenverwaltung oder Service-Konfiguration.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Vercel'],
    services: ['Schnelle Preisberechnung', 'Rabatt-Kalkulation', 'Einfaches UI ohne Verwaltung', 'Next.js auf Vercel'],
    href: 'https://zoey-preisrechner.vercel.app/',
  },
  {
    title: 'VIPShuttle24',
    description: 'Elegante Landing Page für erstklassigen Chauffeur-Service in Düsseldorf und NRW. Diskretion, Pünktlichkeit und Komfort im Mittelpunkt.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Vercel'],
    services: ['Professionelle Landing Page', 'Next.js für schnelle Ladezeiten', 'Responsives Design', 'TypeScript'],
    href: 'https://vipshuttle-24.de/',
  },
  {
    title: 'Dario Barber',
    description: 'Linktree und Buchungssystem für Dario Barber mit Online-Buchung, Admin-Verwaltung, Services und Mitarbeiterkalender.',
    technologies: ['Next.js', 'React', 'C#', 'ASP.NET', 'MS SQL', 'Vercel'],
    services: ['Linktree-Seite', 'Online-Buchungssystem', 'Admin-Dashboard', 'Mitarbeiter-Kalender', 'Service-Verwaltung'],
    href: 'https://limktree-keinfriseur.vercel.app/',
  },
  {
    title: 'Casa del Soul Tattoostudio',
    description: 'Linktree und Buchungssystem für Casa del Soul Tattoostudio mit Online-Buchung und zentraler Verwaltung.',
    technologies: ['Next.js', 'React', 'C#', 'ASP.NET', 'MS SQL', 'Vercel'],
    services: ['Linktree-Seite', 'Online-Buchungssystem', 'Admin-Dashboard', 'Mitarbeiter-Kalender', 'Service-Verwaltung'],
    href: 'https://casa-del-soul-tattoostudio.vercel.app/',
  },
  {
    title: 'Hautliebe Preisrechner',
    description: 'Preisrechner für Hautliebe zur einfachen Berechnung von Preisen und Rabatten ohne Kundenverwaltung oder Service-Konfiguration.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Vercel'],
    services: ['Schnelle Preisberechnung', 'Rabatt-Kalkulation', 'Einfaches UI ohne Verwaltung', 'Next.js auf Vercel'],
    href: 'https://hautliebepreisrechner-fyg2.vercel.app/api/auth/signin',
  },
  {
    title: 'Autocenter Kaddoura',
    description: 'Professionelle Landing Page für Autocenter Kaddoura mit modernem Design und optimaler Performance.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Vercel'],
    services: ['Professionelle Landing Page', 'Next.js für schnelle Ladezeiten', 'Responsives Design', 'TypeScript'],
    href: 'https://kaddouraautocenter.vercel.app/',
  },
  {
    title: 'Golden Ticket',
    description: 'Ansprechende Landing Page, entwickelt mit Next.js, React und TypeScript für schnelle Ladezeiten.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Vercel'],
    services: ['Professionelle Landing Page', 'Next.js für schnelle Ladezeiten', 'Responsives Design', 'TypeScript'],
    href: 'https://goldentickethomepage.vercel.app/',
  },
  {
    title: 'Sweet Funnel Gewinnspiel',
    description: 'Landing Page für das Sweet Funnel Gewinnspiel mit demselben erprobten technischen Aufbau wie Golden Ticket.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Vercel'],
    services: ['Professionelle Landing Page', 'Next.js für schnelle Ladezeiten', 'Responsives Design', 'TypeScript'],
    href: 'https://sweetfunnelgewinnspiel.vercel.app/',
  },
  {
    title: 'Sweets Funnel',
    description: 'Landing Page für Sweets Funnel mit demselben technischen Aufbau wie Golden Ticket.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Vercel'],
    services: ['Professionelle Landing Page', 'Next.js für schnelle Ladezeiten', 'Responsives Design', 'TypeScript'],
    href: 'https://sweetsfunnel.vercel.app/',
  },
]
