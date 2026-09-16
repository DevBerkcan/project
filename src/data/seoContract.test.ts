import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { getStaticRoutes, buildSitemapXml } from '../lib/pageSeo'
import { siteConfig } from '../lib/siteConfig'
import { workProjects, services } from './siteContent'
import { blogPosts } from './blog'

const projectRoot = process.cwd()

describe('SEO contract', () => {
  it('keeps production metadata on the canonical domain', () => {
    const html = readFileSync(`${projectRoot}/index.html`, 'utf8')

    expect(html).toContain('<link rel="canonical" href="https://www.gentlegroup.de/"')
    expect(html).toContain('application/ld+json')
  })

  it('generates a sitemap covering every static route and project slug on the canonical domain', () => {
    const routes = getStaticRoutes()
    expect(routes).toContain('/projekte')
    for (const project of workProjects) {
      expect(routes).toContain(`/projekte/${project.slug}`)
    }
    for (const legalRoute of ['/impressum', '/datenschutz', '/agb', '/barrierefreiheit']) {
      expect(routes).toContain(legalRoute)
    }
    expect(routes).toContain('/leistungsgebiet')
    expect(routes).toContain('/leistungen')
    expect(routes).toContain('/gentlesuite')
    for (const service of services) {
      expect(routes).toContain(`/leistungen/${service.id}`)
    }
    expect(routes).toContain('/blog')
    for (const post of blogPosts) {
      expect(routes).toContain(`/blog/${post.slug}`)
    }

    const sitemap = buildSitemapXml(siteConfig.url, routes)
    expect(sitemap).toContain('https://www.gentlegroup.de/projekte')
    expect(sitemap).not.toContain('127.0.0.1')
    expect(sitemap).not.toContain('vercel.app')
  })

  it('never reintroduces fabricated schema types (Person, Review, AggregateRating, SearchAction)', () => {
    const pageSeoSource = readFileSync(`${projectRoot}/src/lib/pageSeo.ts`, 'utf8')

    for (const forbiddenType of ["'Person'", "'Review'", "'AggregateRating'", "'SearchAction'"]) {
      expect(pageSeoSource).not.toContain(forbiddenType)
    }
  })

  it('does not reintroduce hash project URLs or legacy template labels', () => {
    const source = readFileSync(`${projectRoot}/src/sections/Works.tsx`, 'utf8')
    const footer = readFileSync(`${projectRoot}/src/sections/Footer.tsx`, 'utf8')

    expect(source).not.toContain('to="/projects"')
    expect(source).not.toContain('Selected Work')
    expect(source).not.toContain('Selected work')
    expect(footer).not.toContain('project-questionnaire')
    expect(footer).not.toContain('https://www.gentlegroup.de/impressum')
  })

  it('keeps internal legal/contact links on router <Link>, not full-page reloads', () => {
    const footer = readFileSync(`${projectRoot}/src/sections/Footer.tsx`, 'utf8')
    const hero = readFileSync(`${projectRoot}/src/sections/Hero.tsx`, 'utf8')

    expect(footer).not.toContain('siteConfig.url}/impressum')
    expect(footer).not.toContain('siteConfig.url}/datenschutz')
    expect(footer).not.toContain('siteConfig.url}/agb')
    expect(footer).not.toContain('siteConfig.url}/barrierefreiheit')
    expect(footer).not.toContain('siteConfig.url}/projekt-starten')
    expect(hero).not.toContain('siteConfig.url}/projekt-starten')
  })
})
