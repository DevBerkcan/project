import { readdirSync } from 'node:fs'
import { join } from 'node:path'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { describe, expect, it } from 'vitest'
import App from '../App'
import { getPageMeta, getStaticRoutes } from '../lib/pageSeo'

function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  )
}

const routes = getStaticRoutes()
const publicFiles = new Set(
  (readdirSync(join(process.cwd(), 'public'), { recursive: true }) as string[]).map((file) => `/${file.split('\\').join('/')}`),
)
const rendered = new Map(routes.map((route) => [route, render(route)]))

describe('prerendered pages', () => {
  it.each(routes)('%s renders exactly one h1', (route) => {
    expect(rendered.get(route)!.match(/<h1[\s>]/g) ?? []).toHaveLength(1)
  })

  it.each(routes)('%s has the skip-link target', (route) => {
    expect(rendered.get(route)!.match(/<main id="main"/g) ?? []).toHaveLength(1)
  })

  it('only links internally to routes that exist', () => {
    const broken: string[] = []
    for (const [route, html] of rendered) {
      for (const [, href] of html.matchAll(/href="(\/[^"#?]*)/g)) {
        const target = href === '/' ? '/' : href.replace(/\/$/, '')
        if (!routes.includes(target) && !publicFiles.has(target)) broken.push(`${route} -> ${href}`)
      }
    }
    expect(broken).toEqual([])
  })

  it('links every indexable page from at least one other page', () => {
    const linked = new Set<string>()
    for (const [route, html] of rendered) {
      for (const [, href] of html.matchAll(/href="(\/[^"#?]*)/g)) if (href !== route) linked.add(href)
    }
    const orphans = routes.filter((route) => route !== '/' && !getPageMeta(route).noindex && !linked.has(route))
    expect(orphans).toEqual([])
  })

  it('renders the not-found page for unknown URLs', () => {
    expect(render('/gibt-es-nicht')).toContain('Diese Seite gibt es nicht.')
  })
})
