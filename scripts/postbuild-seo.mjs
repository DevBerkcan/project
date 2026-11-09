import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { pathToFileURL } from 'node:url'

const root = process.cwd()
const distDir = join(root, 'dist')
const ssrEntry = pathToFileURL(join(root, 'dist-ssr', 'entry-server.js')).href

function escapeHtml(value) {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function replaceOrInsert(html, regex, replacement, insertBeforeHead) {
  if (regex.test(html)) return html.replace(regex, replacement)
  return html.replace('</head>', `${insertBeforeHead}\n</head>`)
}

function applyPageMeta(templateHtml, appHtml, canonical, meta, siteUrl) {
  const title = escapeHtml(meta.title)
  const description = escapeHtml(meta.description)
  const robots = meta.noindex ? 'noindex, nofollow' : 'index, follow'
  const type = meta.type ?? 'website'

  let html = templateHtml.replace('<!--app-html-->', appHtml)

  html = html.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)

  html = replaceOrInsert(
    html,
    /<meta name="description" content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${description}" />`,
    `    <meta name="description" content="${description}" />`,
  )
  html = replaceOrInsert(
    html,
    /<meta name="robots" content="[^"]*"\s*\/?>/,
    `<meta name="robots" content="${robots}" />`,
    `    <meta name="robots" content="${robots}" />`,
  )
  if (canonical) {
    html = replaceOrInsert(
      html,
      /<link rel="canonical" href="[^"]*"\s*\/?>/,
      `<link rel="canonical" href="${canonical}" />`,
      `    <link rel="canonical" href="${canonical}" />`,
    )
  } else {
    // Error pages must not claim a canonical URL.
    html = html.replace(/\s*<link rel="canonical" href="[^"]*"\s*\/?>/, '')
  }
  html = replaceOrInsert(
    html,
    /<meta property="og:type" content="[^"]*"\s*\/?>/,
    `<meta property="og:type" content="${type}" />`,
    `    <meta property="og:type" content="${type}" />`,
  )
  html = replaceOrInsert(
    html,
    /<meta property="og:title" content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${title}" />`,
    `    <meta property="og:title" content="${title}" />`,
  )
  html = replaceOrInsert(
    html,
    /<meta property="og:description" content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${description}" />`,
    `    <meta property="og:description" content="${description}" />`,
  )
  html = replaceOrInsert(
    html,
    /<meta property="og:url" content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${canonical ?? siteUrl}" />`,
    `    <meta property="og:url" content="${canonical ?? siteUrl}" />`,
  )
  html = replaceOrInsert(
    html,
    /<meta name="twitter:title" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${title}" />`,
    `    <meta name="twitter:title" content="${title}" />`,
  )
  html = replaceOrInsert(
    html,
    /<meta name="twitter:description" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${description}" />`,
    `    <meta name="twitter:description" content="${description}" />`,
  )

  const jsonLd = JSON.stringify({ '@context': 'https://schema.org', '@graph': meta.jsonLd })
  html = html.replace(
    /(<script type="application\/ld\+json" data-seo-jsonld>)[\s\S]*?(<\/script>)/,
    `$1\n      ${jsonLd}\n    $2`,
  )

  return html
}

function canonicalPath(route) {
  return route === '/' ? '/' : route.replace(/\/$/, '')
}

async function main() {
  const templateHtml = readFileSync(join(distDir, 'index.html'), 'utf8')
  const { render, getStaticRoutes, getIndexableRoutes, getPageMeta, getNotFoundMeta, buildSitemapXml, buildLlmsTxt, siteConfig } =
    await import(ssrEntry)

  for (const route of getStaticRoutes()) {
    const appHtml = render(route)
    const meta = getPageMeta(route)
    const canonical = `${siteConfig.url}${canonicalPath(route)}`
    const html = applyPageMeta(templateHtml, appHtml, canonical, meta, siteConfig.url)

    const outPath = route === '/' ? join(distDir, 'index.html') : join(distDir, route.slice(1), 'index.html')
    mkdirSync(dirname(outPath), { recursive: true })
    writeFileSync(outPath, html, 'utf8')
  }

  // Vercel serves 404.html with a real 404 status for every unknown path.
  const notFoundHtml = applyPageMeta(templateHtml, render('/404'), null, getNotFoundMeta(), siteConfig.url)
  writeFileSync(join(distDir, '404.html'), notFoundHtml, 'utf8')

  const sitemap = buildSitemapXml(siteConfig.url, getIndexableRoutes())
  writeFileSync(join(distDir, 'sitemap.xml'), sitemap, 'utf8')
  writeFileSync(join(distDir, 'llms.txt'), buildLlmsTxt(), 'utf8')
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
