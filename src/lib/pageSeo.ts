import { siteConfig } from './siteConfig'
import { routes } from './routes'
import { workProjects, allServices, findService, type WorkProject, type Service } from '../data/siteContent'
import { serviceDetails } from '../data/serviceDetails'
import { faqs, regionFaqs, type FaqItem } from '../data/faqContent'
import { blogPosts, type BlogPost } from '../data/blog'

export type JsonLdNode = Record<string, unknown>

export type PageMeta = {
  title: string
  description: string
  type?: 'website' | 'article'
  noindex?: boolean
  /** ISO date of the last meaningful content change; used for the sitemap. */
  lastModified?: string
  jsonLd: JsonLdNode[]
}

type LegalPage = {
  path: string
  title: string
  description: string
  noindex: boolean
}

const LEGAL_PAGES: LegalPage[] = [
  {
    path: routes.legal.impressum,
    title: 'Impressum | Gentle Group Studios',
    description: 'Impressum und Anbieterkennzeichnung von Gentle Group Studios, Wuppertal.',
    noindex: false,
  },
  {
    path: routes.legal.datenschutz,
    title: 'Datenschutz | Gentle Group Studios',
    description: 'Datenschutzerklärung von Gentle Group Studios: welche Daten beim Besuch dieser Website verarbeitet werden und welche Rechte Sie haben.',
    noindex: false,
  },
  {
    path: routes.legal.barrierefreiheit,
    title: 'Barrierefreiheit | Gentle Group Studios',
    description: 'Erklärung zur Barrierefreiheit von Gentle Group Studios.',
    // Keep out of the index until the reviewed statement replaces the placeholder.
    noindex: true,
  },
]

const NOT_FOUND_META: PageMeta = {
  title: 'Seite nicht gefunden | Gentle Group Studios',
  description: 'Diese Seite wurde nicht gefunden. Zurück zu Gentle Group Studios.',
  noindex: true,
  jsonLd: [],
}

const ORGANIZATION_ID = `${siteConfig.url}/#organization`

export function canonicalPath(pathname: string): string {
  return pathname === '/' ? '/' : pathname.replace(/\/$/, '')
}

function absoluteUrl(pathname: string): string {
  return `${siteConfig.url}${canonicalPath(pathname)}`
}

/** Shortens text at a word boundary so meta descriptions stay within the SERP snippet length. */
export function clampDescription(text: string, max = 155): string {
  const normalized = text.replace(/\s+/g, ' ').trim()
  if (normalized.length <= max) return normalized
  const cut = normalized.slice(0, max - 1)
  return `${cut.slice(0, cut.lastIndexOf(' ')).replace(/[,;:.\s—–-]+$/, '')}…`
}

/** Appends the brand to the first candidate that stays within 70 characters; candidates go from long to short. */
function withBrand(...candidates: string[]): string {
  for (const candidate of candidates) {
    const branded = `${candidate} | ${siteConfig.name}`
    if (branded.length <= 70) return branded
  }
  return candidates[candidates.length - 1]
}

function organizationNode(): JsonLdNode {
  return {
    '@type': ['Organization', 'ProfessionalService'],
    '@id': ORGANIZATION_ID,
    name: siteConfig.name,
    alternateName: 'Gentle Group',
    url: siteConfig.url,
    logo: siteConfig.logo,
    image: siteConfig.defaultImage,
    email: siteConfig.email,
    telephone: siteConfig.phone.e164,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: siteConfig.email,
      telephone: siteConfig.phone.e164,
      availableLanguage: ['de'],
      areaServed: 'DE',
    },
    // Verified by the owner; the person also appears in the imprint.
    founder: { '@type': 'Person', name: siteConfig.founder.name, jobTitle: siteConfig.founder.jobTitle },
    ...(siteConfig.sameAs.length ? { sameAs: siteConfig.sameAs } : {}),
    description:
      'Softwareagentur aus Wuppertal für individuelle Software, Web-Apps, Websites, KI-Automatisierung sowie Cloud-Betrieb und Weiterentwicklung.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.location.locality,
      postalCode: siteConfig.location.postalCode,
      addressRegion: siteConfig.location.region,
      addressCountry: siteConfig.location.country,
    },
    areaServed: siteConfig.areaServed.map((name) => ({ '@type': name === 'Deutschland' ? 'Country' : 'Place', name })),
    knowsAbout: [
      'Individuelle Softwareentwicklung',
      'Web-App-Entwicklung',
      'SaaS-Entwicklung',
      'Webdesign',
      'Webentwicklung',
      'Next.js',
      'KI-Automatisierung',
      'CRM-Entwicklung',
      'Buchungssysteme',
      'Microsoft Power Platform',
      'App-Entwicklung',
    ],
  }
}

function websiteNode(): JsonLdNode {
  return {
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: 'de-DE',
    publisher: { '@id': ORGANIZATION_ID },
  }
}

function breadcrumbNode(items: { name: string; path: string }[]): JsonLdNode {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

function serviceId(service: Service): string {
  return `${absoluteUrl(routes.service(service.slug))}#service`
}

function creativeWorkNode(project: WorkProject): JsonLdNode {
  return {
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    keywords: project.tags.join(', '),
    dateCreated: project.year,
    creator: { '@id': ORGANIZATION_ID },
    inLanguage: 'de-DE',
    ...(project.href ? { url: project.href } : {}),
    ...(project.relatedServiceIds?.length
      ? {
          about: project.relatedServiceIds
            .map((id) => findService(id))
            .filter((service): service is Service => Boolean(service))
            .map((service) => ({ '@id': serviceId(service) })),
        }
      : {}),
  }
}

function serviceNode(service: Service, description: string): JsonLdNode {
  return {
    '@type': 'Service',
    '@id': serviceId(service),
    name: service.title,
    description,
    serviceType: service.title,
    url: absoluteUrl(routes.service(service.slug)),
    provider: { '@id': ORGANIZATION_ID },
    areaServed: siteConfig.areaServed,
    availableLanguage: 'de',
  }
}

function webPageNode(pathname: string, name: string): JsonLdNode {
  return {
    '@type': 'WebPage',
    name,
    url: absoluteUrl(pathname),
    inLanguage: 'de-DE',
    isPartOf: { '@id': `${siteConfig.url}/#website` },
  }
}

function faqPageNode(items: FaqItem[]): JsonLdNode {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

function blogPostingNode(post: BlogPost, pathname: string): JsonLdNode {
  return {
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.datePublished,
    dateModified: post.dateModified ?? post.datePublished,
    inLanguage: 'de-DE',
    image: siteConfig.defaultImage,
    articleSection: post.category,
    author: { '@id': ORGANIZATION_ID },
    publisher: { '@id': ORGANIZATION_ID },
    mainEntityOfPage: absoluteUrl(pathname),
    about: post.relatedServiceIds
      .map((id) => findService(id))
      .filter((service): service is Service => Boolean(service))
      .map((service) => ({ '@id': serviceId(service) })),
  }
}

/** Every route that is prerendered at build time, including noindex pages. */
export function getStaticRoutes(): string[] {
  return [
    routes.home,
    routes.projects,
    routes.projectStart,
    routes.region,
    routes.services,
    routes.gentlesuite,
    ...LEGAL_PAGES.map((page) => page.path),
    ...workProjects.map((project) => routes.project(project.slug)),
    ...allServices.map((service) => routes.service(service.slug)),
    routes.blog,
    ...blogPosts.map((post) => routes.post(post.slug)),
  ]
}

/** Routes that belong in the XML sitemap: prerendered and indexable. */
export function getIndexableRoutes(): string[] {
  return getStaticRoutes().filter((route) => !getPageMeta(route).noindex)
}

export function getPageMeta(pathname: string): PageMeta {
  const base = [organizationNode(), websiteNode()]
  const path = canonicalPath(pathname)

  if (path === routes.home) {
    return {
      title: 'Softwareagentur Wuppertal für Software & KI | Gentle Group Studios',
      description:
        'Softwareagentur aus Wuppertal: individuelle Software, Web-Apps, Websites und KI-Automatisierung für Unternehmen in Düsseldorf und NRW. Projekt anfragen.',
      jsonLd: [...base, faqPageNode(faqs)],
    }
  }

  if (path === routes.projects) {
    return {
      title: 'Referenzen & Projekte | Gentle Group Studios',
      description:
        'Referenzen: individuelle Software, Buchungssysteme, Preisrechner, Logistiksoftware und Apps — jeweils mit Ausgangslage, Lösung und Ergebnis.',
      jsonLd: [
        ...base,
        breadcrumbNode([
          { name: 'Start', path: routes.home },
          { name: 'Projekte', path: routes.projects },
        ]),
      ],
    }
  }

  if (path === routes.projectStart) {
    return {
      title: 'Projekt anfragen | Gentle Group Studios',
      description:
        'Beschreiben Sie Ihr Vorhaben in wenigen Schritten: Software, Web-App, Website oder KI-Automatisierung. Gentle Group Studios meldet sich zur Abstimmung.',
      jsonLd: [...base, webPageNode(path, 'Projekt anfragen')],
    }
  }

  if (path === routes.region) {
    return {
      title: 'Softwareagentur für Düsseldorf, Wuppertal & NRW | Gentle Group Studios',
      description:
        'Softwareentwicklung, Webdesign und KI-Automatisierung für Unternehmen in Düsseldorf, Wuppertal und NRW — Sitz Wuppertal, remote und vor Ort.',
      jsonLd: [
        ...base,
        breadcrumbNode([
          { name: 'Start', path: routes.home },
          { name: 'Leistungsgebiet', path: routes.region },
        ]),
        faqPageNode(regionFaqs),
      ],
    }
  }

  if (path === routes.services) {
    return {
      title: 'Leistungen: Software, Web & KI | Gentle Group Studios',
      description:
        'Softwareentwicklung, Web-Apps & SaaS, Webdesign, KI-Automatisierung, CRM- und Buchungssysteme, Power Platform, Cloud-Betrieb und Apps.',
      jsonLd: [
        ...base,
        breadcrumbNode([
          { name: 'Start', path: routes.home },
          { name: 'Leistungen', path: routes.services },
        ]),
      ],
    }
  }

  if (path === routes.gentlesuite) {
    return {
      title: 'GentleSuite: eigene Softwareprodukte | Gentle Group Studios',
      description:
        'GentleSuite: GentleTrack, GentleAccess, GentleCalc und GentleBook — eigene Tools für Projektübersicht, Barrierefreiheit, Preise und Online-Buchung.',
      jsonLd: [
        ...base,
        breadcrumbNode([
          { name: 'Start', path: routes.home },
          { name: 'GentleSuite', path: routes.gentlesuite },
        ]),
      ],
    }
  }

  if (path === routes.blog) {
    return {
      title: 'Blog: Software, Web & KI | Gentle Group Studios',
      description:
        'Fachartikel zu individueller Softwareentwicklung, Webdesign, KI-Automatisierung, Buchungssystemen und SEO — verankert in echten Projekten.',
      lastModified: blogPosts[0]?.dateModified ?? blogPosts[0]?.datePublished,
      jsonLd: [
        ...base,
        breadcrumbNode([
          { name: 'Start', path: routes.home },
          { name: 'Blog', path: routes.blog },
        ]),
      ],
    }
  }

  const serviceMatch = path.match(/^\/leistungen\/([^/]+)$/)
  if (serviceMatch) {
    const service = allServices.find((item) => item.slug === serviceMatch[1])
    const detail = service ? serviceDetails[service.id] : undefined
    if (service && detail) {
      return {
        title: detail.seoTitle,
        description: detail.metaDescription,
        jsonLd: [
          ...base,
          breadcrumbNode([
            { name: 'Start', path: routes.home },
            { name: 'Leistungen', path: routes.services },
            { name: service.title, path },
          ]),
          serviceNode(service, detail.metaDescription),
          faqPageNode(detail.faqs),
        ],
      }
    }
  }

  const blogMatch = path.match(/^\/blog\/([^/]+)$/)
  if (blogMatch) {
    const post = blogPosts.find((item) => item.slug === blogMatch[1])
    if (post) {
      return {
        title: withBrand(post.seoTitle ?? post.title),
        description: clampDescription(post.excerpt),
        type: 'article',
        lastModified: post.dateModified ?? post.datePublished,
        jsonLd: [
          ...base,
          breadcrumbNode([
            { name: 'Start', path: routes.home },
            { name: 'Blog', path: routes.blog },
            { name: post.title, path },
          ]),
          blogPostingNode(post, path),
        ],
      }
    }
  }

  const legalPage = LEGAL_PAGES.find((page) => page.path === path)
  if (legalPage) {
    return {
      title: legalPage.title,
      description: legalPage.description,
      noindex: legalPage.noindex,
      jsonLd: [...base, webPageNode(path, legalPage.title)],
    }
  }

  const projectMatch = path.match(/^\/projekte\/([^/]+)$/)
  if (projectMatch) {
    const project = workProjects.find((item) => item.slug === projectMatch[1])
    if (project) {
      return {
        title: withBrand(`${project.seoTitle} – Fallstudie`, project.seoTitle),
        description: clampDescription(`Fallstudie ${project.title} (${project.industry}): ${project.intro} ${project.challenge}`),
        type: 'article',
        jsonLd: [
          ...base,
          breadcrumbNode([
            { name: 'Start', path: routes.home },
            { name: 'Projekte', path: routes.projects },
            { name: project.title, path },
          ]),
          creativeWorkNode(project),
        ],
      }
    }
  }

  return NOT_FOUND_META
}

export function getNotFoundMeta(): PageMeta {
  return NOT_FOUND_META
}

export function isPreviewHost(hostname: string): boolean {
  return hostname !== new URL(siteConfig.url).hostname
}

export function buildSitemapXml(baseUrl: string, routeList: string[]): string {
  const urls = routeList
    .map((route) => {
      const lastModified = getPageMeta(route).lastModified
      const lastmod = lastModified ? `<lastmod>${lastModified}</lastmod>` : ''
      return `  <url><loc>${baseUrl}${canonicalPath(route)}</loc>${lastmod}</url>`
    })
    .join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
}
