import { Link, useParams } from 'react-router'
import { blogPosts } from '../data/blog'
import { services, workProjects } from '../data/siteContent'
import ArticleBody from '../components/ArticleBody'

export default function BlogPostPage() {
  const { slug } = useParams()
  const post = blogPosts.find((entry) => entry.slug === slug)

  if (!post) {
    return (
      <div className="grain bg-brand-dark text-brand-light min-h-screen flex flex-col items-center justify-center gap-6 px-6 text-center">
        <p className="text-[11px] tracking-[0.25em] uppercase text-brand-light/60">Artikel nicht gefunden</p>
        <h1 className="font-display font-semibold text-5xl md:text-7xl max-w-4xl">Diesen Beitrag gibt es nicht.</h1>
        <Link to="/blog" data-cursor className="mt-4 inline-flex items-center gap-3 border border-brand-light/20 rounded-full px-8 py-4 text-[12px] tracking-[0.2em] uppercase transition-colors duration-500 hover:bg-brand-primary hover:text-brand-dark hover:border-brand-primary">Zum Blog <span aria-hidden="true">↗</span></Link>
      </div>
    )
  }

  const relatedServices = services.filter((service) => post.relatedServiceIds.includes(service.id))
  const relatedProjects = workProjects.filter((project) => post.relatedProjectSlugs?.includes(project.slug))

  return (
    <div className="grain bg-brand-dark text-brand-light min-h-screen">
      <main className="px-6 md:px-10 pt-40 pb-32 md:pt-52">
        <Link to="/blog" className="text-xs uppercase tracking-[0.2em] text-brand-light/60 hover:text-brand-primary">← Zum Blog</Link>
        <p className="mt-16 text-xs uppercase tracking-[0.25em] text-brand-primary">{post.category} · Ein Beitrag von Gentle Group Studios</p>
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
                    <li key={service.id}><Link to={`/leistungen/${service.id}`} className="text-brand-light/80 hover:text-brand-primary">{service.title} →</Link></li>
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

        <Link to="/blog" className="mt-16 inline-flex rounded-full border border-brand-light/20 px-6 py-4 text-xs uppercase tracking-[0.18em] hover:border-brand-primary hover:text-brand-primary">Weitere Artikel ansehen</Link>
      </main>
    </div>
  )
}
