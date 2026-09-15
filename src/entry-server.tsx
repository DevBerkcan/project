import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App'

export { getStaticRoutes, getPageMeta, buildSitemapXml } from './lib/pageSeo'
export { siteConfig } from './lib/siteConfig'

export function render(url: string) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  )
}
