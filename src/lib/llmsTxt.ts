import { siteConfig } from './siteConfig'
import { routes } from './routes'
import { services, solutions, workProjects, products } from '../data/siteContent'
import { blogPosts } from '../data/blog'

const url = (path: string) => `${siteConfig.url}${path}`

/** Markdown profile for AI crawlers (llmstxt.org), generated from the same data as the pages. */
export function buildLlmsTxt(): string {
  const lines = [
    `# ${siteConfig.name}`,
    '',
    `> Softwareagentur mit Sitz in ${siteConfig.location.locality} (${siteConfig.location.region}). Gentle Group Studios entwickelt individuelle Software, Web-Apps und SaaS-Produkte, Websites, KI-Automatisierungen, CRM- und Buchungssysteme für Unternehmen in Wuppertal, Düsseldorf, NRW und deutschlandweit.`,
    '',
    `- Sitz: ${siteConfig.location.locality}, ${siteConfig.location.region}. Kein Büro in Düsseldorf; Zusammenarbeit remote und projektbezogen vor Ort.`,
    `- Gründer: ${siteConfig.founder.name} (${siteConfig.founder.jobTitle})`,
    `- Kontakt: ${siteConfig.email}, ${siteConfig.phone.display}, Projektanfrage: ${url(routes.projectStart)}`,
    '- Sprache: Deutsch (Sie-Form)',
    '',
    '## Leistungen',
    '',
    ...services.map((service) => `- [${service.title}](${url(routes.service(service.slug))}): ${service.description}`),
    '',
    '## Schwerpunkte',
    '',
    ...solutions.map((service) => `- [${service.title}](${url(routes.service(service.slug))}): ${service.description}`),
    '',
    '## Referenzprojekte',
    '',
    ...workProjects.map((project) => `- [${project.title}](${url(routes.project(project.slug))}) (${project.industry}, ${project.year}): ${project.intro}`),
    '',
    '## Eigene Produkte (GentleSuite)',
    '',
    ...products.map((product) => `- ${product.name}: ${product.description}`),
    `- Übersicht: ${url(routes.gentlesuite)}`,
    '',
    '## Fachartikel',
    '',
    ...blogPosts.map((post) => `- [${post.title}](${url(routes.post(post.slug))}): ${post.excerpt}`),
    '',
    '## Optional',
    '',
    `- [Leistungsgebiet Wuppertal, Düsseldorf & NRW](${url(routes.region)})`,
    `- [Impressum](${url(routes.legal.impressum)})`,
    `- [Datenschutz](${url(routes.legal.datenschutz)})`,
    '',
  ]
  return lines.join('\n')
}
