import Footer from '../sections/Footer'
import NotFoundPage from './NotFoundPage'
import { Link, useParams } from 'react-router'
import { blogPosts } from '../data/blog'
import { allServices, workProjects } from '../data/siteContent'
import { routes } from '../lib/routes'
import ArticleBody from '../components/ArticleBody'

function formatDate(isoDate: string): string {
  // Fixed time zone keeps prerendered and hydrated output identical.
  return new Intl.DateTimeFormat('de-DE', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(isoDate))
}

export default function BlogPostPage() {
  const { slug } = useParams()
  const post = blogPosts.find((entry) => entry.slug === slug)

  if (!post) return <NotFoundPage />

  const relatedServices = allServices.filter((service) => post.relatedServiceIds.includes(service.id))
  const relatedProjects = workProjects.filter((project) => post.relatedProjectSlugs?.includes(project.slug))

  return (
    <div className="grain bg-brand-dark text-brand-light min-h-screen">
      <main id="main" tabIndex={-1} className="px-6 md:px-10 pt-40 pb-32 md:pt-52">
        <Link to="/blog" className="text-xs uppercase tracking-[0.2em] text-brand-light/60 hover:text-brand-primary">← Zum Blog</Link>
        <p className="mt-16 text-xs uppercase tracking-[0.25em] text-brand-primary">{post.category} · Ein Beitrag von Gentle Group Studios</p>
        <p className="mt-3 text-xs uppercase tracking-[0.2em] text-brand-light/60">
          Veröffentlicht am <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
          {post.dateModified && post.dateModified !== post.datePublished && (
            <> · Aktualisiert am <time dateTime={post.dateModified}>{formatDate(post.dateModified)}</time></>
          )}
        </p>
        <h1 className="mt-6 max-w-4xl font-display font-semibold text-5xl md:text-7xl leading-[0.95]">{post.title}</h1>
        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-brand-light/80">{post.excerpt}</p>

        <div className="mt-16 border-t border-brand-light/15 pt-10">
          <ArticleBody blocks={post.body} />
        </div>

        {(relatedServices.length > 0 || relatedProjects.length > 0) && (
          <div className="mt-16 border-t border-brand-light/15 pt-8 grid gap-10 md:grid-cols-2">
            {relatedServices.length > 0 && (
              <div>
                <h2 className="text-xs uppercase tracking-[0.2em] text-brand-light/50">Verwandte Leistungen</h2>
                <ul className="mt-4 space-y-2">
                  {relatedServices.map((service) => (
                    <li key={service.id}><Link to={routes.service(service.slug)} className="text-brand-light/80 hover:text-brand-primary">{service.title} →</Link></li>
                  ))}
                </ul>
              </div>
            )}
            {relatedProjects.length > 0 && (
              <div>
                <h2 className="text-xs uppercase tracking-[0.2em] text-brand-light/50">Verwandte Projekte</h2>
                <ul className="mt-4 space-y-2">
                  {relatedProjects.map((project) => (
                    <li key={project.slug}><Link to={`/projekte/${project.slug}`} className="text-brand-light/80 hover:text-brand-primary">{project.title} →</Link></li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        <div className="mt-16 flex flex-wrap gap-4">
          <Link to={routes.projectStart} className="inline-flex rounded-full bg-brand-primary px-6 py-4 text-xs uppercase tracking-[0.18em] text-brand-dark hover:bg-brand-secondary">Projekt besprechen ↗</Link>
          <Link to={routes.blog} className="inline-flex rounded-full border border-brand-light/20 px-6 py-4 text-xs uppercase tracking-[0.18em] hover:border-brand-primary hover:text-brand-primary">Weitere Artikel ansehen</Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
