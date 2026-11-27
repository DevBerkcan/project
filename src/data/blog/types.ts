export type BlogBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'quote'; text: string }
  | { type: 'link'; text: string; to: string }

export interface BlogPost {
  slug: string
  title: string
  /** Shorter document title when `title` exceeds the SERP length. */
  seoTitle?: string
  category: 'Webdesign' | 'SEO' | 'GEO' | 'KI' | 'Web-Apps' | 'Softwareentwicklung'
  excerpt: string
  /** Search snippet (max. 155 characters); falls back to the shortened excerpt. */
  metaDescription?: string
  datePublished: string
  dateModified?: string
  relatedServiceIds: string[]
  relatedProjectSlugs?: string[]
  body: BlogBlock[]
}
