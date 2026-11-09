import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { siteConfig } from '../lib/siteConfig'
import { canonicalPath, getNotFoundMeta, getPageMeta, isPreviewHost } from '../lib/pageSeo'

function setMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.content = content
}

function setLink(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!element) {
    element = document.createElement('link')
    element.rel = rel
    document.head.appendChild(element)
  }
  element.href = href
}

export default function Seo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const page = getPageMeta(pathname)
    const canonical = `${siteConfig.url}${canonicalPath(pathname)}`
    const notFound = page === getNotFoundMeta()
    const previewHost = isPreviewHost(window.location.hostname)
    const noindex = page.noindex || previewHost

    document.documentElement.lang = 'de'
    document.title = page.title
    if (notFound) document.head.querySelector('link[rel="canonical"]')?.remove()
    else setLink('canonical', canonical)
    setMeta('name', 'description', page.description)
    setMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow')
    setMeta('property', 'og:locale', siteConfig.locale)
    setMeta('property', 'og:type', page.type ?? 'website')
    setMeta('property', 'og:title', page.title)
    setMeta('property', 'og:description', page.description)
    setMeta('property', 'og:url', canonical)
    setMeta('property', 'og:image', siteConfig.defaultImage)
    setMeta('property', 'og:site_name', siteConfig.name)
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', page.title)
    setMeta('name', 'twitter:description', page.description)
    setMeta('name', 'twitter:image', siteConfig.defaultImage)

    const structuredData =
      document.head.querySelector<HTMLScriptElement>('script[data-seo-jsonld]') ?? document.createElement('script')
    structuredData.type = 'application/ld+json'
    structuredData.dataset.seoJsonld = 'true'
    structuredData.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': page.jsonLd,
    })
    if (!structuredData.parentNode) document.head.appendChild(structuredData)
  }, [pathname])

  return null
}
