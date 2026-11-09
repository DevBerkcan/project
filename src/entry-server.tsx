import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App'

export { getStaticRoutes, getIndexableRoutes, getPageMeta, getNotFoundMeta, buildSitemapXml } from './lib/pageSeo'
export { siteConfig } from './lib/siteConfig'
export { buildLlmsTxt } from './lib/llmsTxt'

export function render(url: string) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  )
}
