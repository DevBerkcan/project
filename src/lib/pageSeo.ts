import { siteConfig } from './siteConfig'
import { workProjects, services, type WorkProject, type Service } from '../data/siteContent'
import { faqs, regionFaqs } from '../data/faqContent'
import { blogPosts, type BlogPost } from '../data/blog'

export type JsonLdNode = Record<string, unknown>

export type PageMeta = {
  title: string
  description: string
  type?: 'website' | 'article'
  noindex?: boolean
  jsonLd: JsonLdNode[]
}

type LegalPage = {
  path: string
  title: string
  description: string
}

const LEGAL_PAGES: LegalPage[] = [
  {
    path: '/impressum',
    title: 'Impressum | Gentle Group Studios',
    description: 'Impressum von Gentle Group Studios.',
  },
  {
    path: '/datenschutz',
    title: 'Datenschutz | Gentle Group Studios',
    description: 'Datenschutzerklärung von Gentle Group Studios.',
  },
  {
    path: '/agb',
    title: 'AGB | Gentle Group Studios',
    description: 'Allgemeine Geschäftsbedingungen von Gentle Group Studios.',
  },
  {
    path: '/barrierefreiheit',
    title: 'Barrierefreiheit | Gentle Group Studios',
    description: 'Erklärung zur Barrierefreiheit von Gentle Group Studios.',
  },
]

const NOT_FOUND_META: PageMeta = {
  title: 'Seite nicht gefunden | Gentle Group Studios',
  description: 'Diese Seite wurde nicht gefunden. Zurück zu Gentle Group Studios.',
  noindex: true,
  jsonLd: [],
}

function canonicalPath(pathname: string): string {
  return pathname === '/' ? '/' : pathname.replace(/\/$/, '')
}

function organizationNode(): JsonLdNode {
  return {
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    areaServed: ['Wuppertal', 'Düsseldorf', 'Nordrhein-Westfalen'],
  }
}

function websiteNode(): JsonLdNode {
  return {
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: 'de-DE',
    publisher: { '@id': `${siteConfig.url}/#organization` },
  }
}

function breadcrumbNode(items: { name: string; path: string }[]): JsonLdNode {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${canonicalPath(item.path)}`,
    })),
  }
}

function creativeWorkNode(project: WorkProject): JsonLdNode {
  return {
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    keywords: project.tags.join(', '),
    dateCreated: project.year,
    ...(project.href ? { url: project.href } : {}),
    ...(project.relatedServiceIds?.length
      ? { about: project.relatedServiceIds.map((id) => ({ '@id': `${siteConfig.url}/leistungen/${id}#service` })) }
      : {}),
  }
}

function serviceNode(service: Service, pathname: string): JsonLdNode {
  return {
    '@type': 'Service',
    '@id': `${siteConfig.url}${canonicalPath(pathname)}#service`,
    name: service.title,
    description: service.description,
    serviceType: service.title,
    provider: { '@id': `${siteConfig.url}/#organization` },
    areaServed: ['Wuppertal', 'Düsseldorf', 'Nordrhein-Westfalen'],
    keywords: service.tags.join(', '),
  }
}

function webPageNode(pathname: string, name: string): JsonLdNode {
  return {
    '@type': 'WebPage',
    name,
    url: `${siteConfig.url}${canonicalPath(pathname)}`,
  }
}

function faqPageNode(): JsonLdNode {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

function regionFaqPageNode(): JsonLdNode {
  return {
    '@type': 'FAQPage',
    mainEntity: regionFaqs.map((faq) => ({
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
    author: { '@id': `${siteConfig.url}/#organization` },
    publisher: { '@id': `${siteConfig.url}/#organization` },
    mainEntityOfPage: `${siteConfig.url}${canonicalPath(pathname)}`,
  }
}

export function getStaticRoutes(): string[] {
  return [
    '/',
    '/projekte',
    '/projekt-starten',
    '/leistungsgebiet',
    '/leistungen',
    '/gentlesuite',
    ...LEGAL_PAGES.map((page) => page.path),
    ...workProjects.map((project) => `/projekte/${project.slug}`),
    ...services.map((service) => `/leistungen/${service.id}`),
    '/blog',
    ...blogPosts.map((post) => `/blog/${post.slug}`),
  ]
}

export function getPageMeta(pathname: string): PageMeta {
  const base = [organizationNode(), websiteNode()]

  if (pathname === '/') {
    return {
      title: 'Individuelle Software, Web-Apps & KI | Gentle Group Studios',
      description:
        'Gentle Group Studios entwickelt individuelle Software, Web-Apps, leistungsstarke Websites und KI-Automatisierungen für Unternehmen in Wuppertal, Düsseldorf und NRW.',
      jsonLd: [...base, faqPageNode()],
    }
  }

  if (pathname === '/projekte') {
    return {
      title: 'Ausgewählte Projekte | Gentle Group Studios',
      description:
        'Verifizierte digitale Projekte von Gentle Group Studios: individuelle Software, Web-Apps, Buchungssysteme und mobile Anwendungen.',
      jsonLd: [
        ...base,
        breadcrumbNode([
          { name: 'Home', path: '/' },
          { name: 'Projekte', path: '/projekte' },
        ]),
      ],
    }
  }

  if (pathname === '/projekt-starten') {
    return {
      title: 'Projekt starten | Gentle Group Studios',
      description:
        'Beschreiben Sie Ihr digitales Vorhaben. Gentle Group Studios entwickelt individuelle Software, Web-Apps, Websites und Automatisierungen für Unternehmen.',
      jsonLd: [...base, webPageNode(pathname, 'Projekt starten')],
    }
  }

  if (pathname === '/leistungsgebiet') {
    return {
      title: 'Leistungsgebiet Wuppertal, Düsseldorf & NRW | Gentle Group Studios',
      description:
        'Gentle Group Studios ist in Wuppertal ansässig und entwickelt individuelle Software, Web-Apps und Websites für Unternehmen in Wuppertal, Düsseldorf und Nordrhein-Westfalen.',
      jsonLd: [
        ...base,
        breadcrumbNode([
          { name: 'Home', path: '/' },
          { name: 'Leistungsgebiet', path: '/leistungsgebiet' },
        ]),
        regionFaqPageNode(),
      ],
    }
  }

  if (pathname === '/leistungen') {
    return {
      title: 'Leistungen | Gentle Group Studios',
      description:
        'Individuelle Software & Web-Apps, Websites, KI & Automatisierung, Cloud & Betrieb sowie mobile Anwendungen von Gentle Group Studios.',
      jsonLd: [
        ...base,
        breadcrumbNode([
          { name: 'Home', path: '/' },
          { name: 'Leistungen', path: '/leistungen' },
        ]),
      ],
    }
  }

  if (pathname === '/gentlesuite') {
    return {
      title: 'GentleSuite | Eigene Produkte von Gentle Group Studios',
      description:
        'GentleSuite: GentleTrack, GentleAccess, GentleCalc und GentleBook — eigene digitale Produkte von Gentle Group Studios für Projektübersicht, Barrierefreiheit, Preisberechnung und Buchung.',
      jsonLd: [
        ...base,
        breadcrumbNode([
          { name: 'Home', path: '/' },
          { name: 'GentleSuite', path: '/gentlesuite' },
        ]),
      ],
    }
  }

  if (pathname === '/blog') {
    return {
      title: 'Blog | Gentle Group Studios',
      description:
        'Artikel zu individueller Softwareentwicklung, Webdesign, KI & Automatisierung sowie SEO & GEO von Gentle Group Studios.',
      jsonLd: [
        ...base,
        breadcrumbNode([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
        ]),
      ],
    }
  }

  const serviceMatch = pathname.match(/^\/leistungen\/([^/]+)$/)
  if (serviceMatch) {
    const service = services.find((item) => item.id === serviceMatch[1])
    if (service) {
      return {
        title: `${service.title} | Leistungen | Gentle Group Studios`,
        description: service.description,
        jsonLd: [
          ...base,
          breadcrumbNode([
            { name: 'Home', path: '/' },
            { name: 'Leistungen', path: '/leistungen' },
            { name: service.title, path: pathname },
          ]),
          serviceNode(service, pathname),
        ],
      }
    }
  }

  const blogMatch = pathname.match(/^\/blog\/([^/]+)$/)
  if (blogMatch) {
    const post = blogPosts.find((item) => item.slug === blogMatch[1])
    if (post) {
      return {
        title: `${post.title} | Blog | Gentle Group Studios`,
        description: post.excerpt,
        type: 'article',
        jsonLd: [
          ...base,
          breadcrumbNode([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
            { name: post.title, path: pathname },
          ]),
          blogPostingNode(post, pathname),
        ],
      }
    }
  }

  const legalPage = LEGAL_PAGES.find((page) => page.path === pathname)
  if (legalPage) {
    return {
      title: legalPage.title,
      description: legalPage.description,
      // TODO: flip to false once real legal text replaces the placeholder shell
      noindex: true,
      jsonLd: [...base, webPageNode(pathname, legalPage.title)],
    }
  }

  const projectMatch = pathname.match(/^\/projekte\/([^/]+)$/)
  if (projectMatch) {
    const project = workProjects.find((item) => item.slug === projectMatch[1])
    if (project) {
      return {
        title: `${project.title} | Projekte | Gentle Group Studios`,
        description: project.description,
        type: 'article',
        jsonLd: [
          ...base,
          breadcrumbNode([
            { name: 'Home', path: '/' },
            { name: 'Projekte', path: '/projekte' },
            { name: project.title, path: pathname },
          ]),
          creativeWorkNode(project),
        ],
      }
    }
  }

  return NOT_FOUND_META
}

export function isPreviewHost(hostname: string): boolean {
  return hostname !== new URL(siteConfig.url).hostname
}

export function buildSitemapXml(baseUrl: string, routes: string[]): string {
  const lastmod = new Date().toISOString().slice(0, 10)
  const urls = routes
    .map((route) => `  <url><loc>${baseUrl}${canonicalPath(route)}</loc><lastmod>${lastmod}</lastmod></url>`)
    .join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
}
