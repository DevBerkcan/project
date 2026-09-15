export type BlogBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'quote'; text: string }

export interface BlogPost {
  slug: string
  title: string
  category: 'Webdesign' | 'SEO' | 'GEO' | 'KI' | 'Web-Apps' | 'Softwareentwicklung'
  excerpt: string
  datePublished: string
  dateModified?: string
  relatedServiceIds: string[]
  relatedProjectSlugs?: string[]
  body: BlogBlock[]
}
