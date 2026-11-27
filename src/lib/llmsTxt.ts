import { siteConfig } from './siteConfig'
import { routes } from './routes'
import { services, solutions, workProjects, products, allServices, processStages } from '../data/siteContent'
import { serviceDetails } from '../data/serviceDetails'
import { faqs, regionFaqs, type FaqItem } from '../data/faqContent'
import type { BlogBlock } from '../data/blog'
import { blogPosts } from '../data/blog'
import { industries } from '../data/industries'

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
    '- Erstgespräch: kostenlos, per Video oder Telefon',
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
    `- [Vollständiger Inhalt als Markdown](${url('/llms-full.txt')})`,
    `- [Leistungsgebiet Wuppertal, Düsseldorf & NRW](${url(routes.region)})`,
    ...industries.map((industry) => `- [${industry.h1}](${url(routes.industry(industry.slug))})`),
    `- [Über uns](${url(routes.about)})`,
    `- [Kontakt](${url(routes.contact)})`,
    `- [Impressum](${url(routes.legal.impressum)})`,
    `- [Datenschutz](${url(routes.legal.datenschutz)})`,
    '',
  ]
  return lines.join('\n')
}

function faqLines(items: FaqItem[]): string[] {
  return items.flatMap((faq) => [`**${faq.question}**`, '', faq.answer, ''])
}

function blockLines(block: BlogBlock): string[] {
  switch (block.type) {
    case 'heading':
      return [`### ${block.text}`, '']
    case 'list':
      return [...block.items.map((item) => `- ${item}`), '']
    case 'quote':
      return [`> ${block.text}`, '']
    case 'link':
      return [`[${block.text}](${url(block.to)})`, '']
    default:
      return [block.text, '']
  }
}

/** Full-text companion to llms.txt: every service, case study, FAQ and article in one Markdown file. */
export function buildLlmsFullTxt(): string {
  const lines = [
    buildLlmsTxt().split('\n## Leistungen')[0].trimEnd(),
    `- Projektphasen: ${processStages.join(', ')}`,
    '',
    '## Häufige Fragen',
    '',
    ...faqLines(faqs),
    '## Leistungen im Detail',
    '',
    ...allServices.flatMap((service) => {
      const detail = serviceDetails[service.id]
      if (!detail) return []
      return [
        `### ${detail.h1}`,
        '',
        `URL: ${url(routes.service(service.slug))}`,
        '',
        detail.lead,
        '',
        ...detail.sections.flatMap((section) => [
          `#### ${section.heading}`,
          '',
          ...(section.paragraphs ?? []).flatMap((paragraph) => [paragraph, '']),
          ...(section.items?.length ? [...section.items.map((item) => `- ${item}`), ''] : []),
        ]),
        ...(detail.technologies?.length ? [`Technologien: ${detail.technologies.join(', ')}`, ''] : []),
        ...faqLines(detail.faqs),
      ]
    }),
    '## Fallstudien',
    '',
    ...workProjects.flatMap((project) => [
      `### ${project.seoTitle} (${project.industry}, ${project.year})`,
      '',
      `URL: ${url(routes.project(project.slug))}`,
      '',
      project.description,
      '',
      `- Herausforderung: ${project.challenge}`,
      `- Lösung: ${project.approach}`,
      `- Ergebnis: ${project.result}`,
      '',
    ]),
    '## Branchen',
    '',
    ...industries.flatMap((industry) => [
      `### ${industry.h1}`,
      '',
      `URL: ${url(routes.industry(industry.slug))}`,
      '',
      industry.lead,
      '',
      ...industry.challenges.flatMap((challenge) => [`- **${challenge.heading}:** ${challenge.text}`]),
      '',
      ...faqLines(industry.faqs),
    ]),
    '## Leistungsgebiet',
    '',
    `URL: ${url(routes.region)}`,
    '',
    ...faqLines(regionFaqs),
    '## Fachartikel',
    '',
    ...blogPosts.flatMap((post) => [
      `### ${post.title}`,
      '',
      `URL: ${url(routes.post(post.slug))} · veröffentlicht ${post.datePublished}${post.dateModified ? ` · aktualisiert ${post.dateModified}` : ''}`,
      '',
      ...post.body.flatMap(blockLines),
    ]),
  ]
  return `${lines.join('\n').replace(/\n{3,}/g, '\n\n').trimEnd()}\n`
}
