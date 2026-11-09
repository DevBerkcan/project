import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { getStaticRoutes, getIndexableRoutes, getPageMeta, buildSitemapXml } from '../lib/pageSeo'
import { siteConfig } from '../lib/siteConfig'
import { buildLlmsTxt } from '../lib/llmsTxt'
import { workProjects, allServices } from './siteContent'
import { serviceDetails } from './serviceDetails'
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
    for (const legalRoute of ['/impressum', '/datenschutz', '/barrierefreiheit']) {
      expect(routes).toContain(legalRoute)
    }
    expect(routes).not.toContain('/agb')
    expect(routes).toContain('/leistungsgebiet')
    expect(routes).toContain('/leistungen')
    expect(routes).toContain('/gentlesuite')
    for (const service of allServices) {
      expect(routes).toContain(`/leistungen/${service.slug}`)
      expect(serviceDetails[service.id], `missing detail content for ${service.id}`).toBeDefined()
    }
    expect(routes).toContain('/blog')
    for (const post of blogPosts) {
      expect(routes).toContain(`/blog/${post.slug}`)
    }

    const sitemap = buildSitemapXml(siteConfig.url, getIndexableRoutes())
    expect(sitemap).toContain('https://www.gentlegroup.de/projekte')
    expect(sitemap).not.toContain('127.0.0.1')
    expect(sitemap).not.toContain('vercel.app')
  })

  it('keeps noindex pages out of the sitemap', () => {
    const indexable = getIndexableRoutes()
    for (const route of getStaticRoutes()) {
      expect(indexable.includes(route), route).toBe(!getPageMeta(route).noindex)
    }
    expect(indexable).not.toContain('/barrierefreiheit')
  })

  it('gives every indexable page a unique title and description within SERP limits', () => {
    const metas = getIndexableRoutes().map((route) => ({ ...getPageMeta(route), route }))
    const problems = metas.flatMap((meta) => [
      ...(meta.title.length > 70 ? [`${meta.route}: title has ${meta.title.length} chars`] : []),
      // Article headlines may drop the suffix: Google shows the site name separately.
      ...(!meta.title.includes('Gentle Group Studios') && !meta.route.startsWith('/blog/') ? [`${meta.route}: title lacks brand (${meta.title})`] : []),
      ...(meta.description.length < 50 || meta.description.length > 155
        ? [`${meta.route}: description has ${meta.description.length} chars`]
        : []),
    ])
    expect(problems).toEqual([])
    expect(new Set(metas.map((meta) => meta.title)).size).toBe(metas.length)
    expect(new Set(metas.map((meta) => meta.description)).size).toBe(metas.length)
  })

  it('301-redirects every retired service URL to a live route', () => {
    const vercel = JSON.parse(readFileSync(`${projectRoot}/vercel.json`, 'utf8')) as {
      redirects: { source: string; destination: string; statusCode: number }[]
      rewrites?: unknown[]
    }
    const routes = getStaticRoutes()
    for (const oldId of ['software', 'web', 'ai', 'operations', 'mobile']) {
      const redirect = vercel.redirects.find((entry) => entry.source === `/leistungen/${oldId}`)
      expect(redirect, oldId).toBeDefined()
      expect(redirect!.statusCode).toBe(301)
      expect(routes).toContain(redirect!.destination)
    }
    // A catch-all rewrite would answer unknown URLs with 200 instead of 404.
    expect(vercel.rewrites ?? []).toEqual([])
  })

  it('covers the findings of the external audit (2026-11-09)', () => {
    const html = readFileSync(`${projectRoot}/index.html`, 'utf8')
    const app = readFileSync(`${projectRoot}/src/App.tsx`, 'utf8')
    const photoStack = readFileSync(`${projectRoot}/src/components/ui/photo-stack.tsx`, 'utf8')

    // Social previews need a raster image.
    expect(html).toContain('og-default.png')
    expect(html).not.toContain('og-default.svg')
    // No third-party font request before consent.
    expect(html).not.toContain('fontshare')
    expect(readFileSync(`${projectRoot}/src/index.css`, 'utf8')).not.toContain('fontshare')
    // Skip link and manifest.
    expect(app).toContain('href="#main"')
    expect(html).toContain('site.webmanifest')
    // Hidden team cards use inert, never aria-hidden on a focusable button.
    expect(photoStack).not.toContain('aria-hidden={')
    expect(photoStack).toContain('inert=')
  })

  it('publishes an llms.txt profile with every indexable service', () => {
    const llms = buildLlmsTxt()
    expect(llms.startsWith('# Gentle Group Studios')).toBe(true)
    for (const service of allServices) {
      expect(llms).toContain(`${siteConfig.url}/leistungen/${service.slug}`)
    }
    expect(llms).toContain('Kein Büro in Düsseldorf')
  })

  it('never reintroduces fabricated schema types (Review, AggregateRating, SearchAction)', () => {
    const pageSeoSource = readFileSync(`${projectRoot}/src/lib/pageSeo.ts`, 'utf8')

    for (const forbiddenType of ["'Review'", "'AggregateRating'", "'SearchAction'"]) {
      expect(pageSeoSource).not.toContain(forbiddenType)
    }
    // Person is allowed exactly once: the owner-approved founder from siteConfig.
    expect(pageSeoSource.match(/'@type': 'Person'/g) ?? []).toHaveLength(1)
    expect(pageSeoSource).toContain('siteConfig.founder.name')
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
    expect(footer).not.toContain('routes.legal.agb')
    expect(footer).not.toContain('siteConfig.url}/barrierefreiheit')
    expect(footer).not.toContain('siteConfig.url}/projekt-starten')
    expect(hero).not.toContain('siteConfig.url}/projekt-starten')
  })
})
