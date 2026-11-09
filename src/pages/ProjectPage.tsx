import { useEffect } from 'react'
import Footer from '../sections/Footer'
import NotFoundPage from './NotFoundPage'
import { Link, useParams } from 'react-router'
import { workProjects, allServices } from '../data/siteContent'
import { blogPosts } from '../data/blog'
import { routes } from '../lib/routes'
import { trackEvent } from '../lib/analytics'

export default function ProjectPage() {
  const { slug } = useParams()
  const project = workProjects.find((entry) => entry.slug === slug)

  useEffect(() => {
    if (project) trackEvent('projectViewed', { slug: project.slug })
  }, [project])

  if (project) {
    const relatedServices = allServices.filter((service) => project.relatedServiceIds?.includes(service.id))
    const relatedPosts = blogPosts.filter((post) => post.relatedProjectSlugs?.includes(project.slug))

    return (
      <div className="grain bg-brand-dark text-brand-light min-h-screen">
        <main id="main" tabIndex={-1} className="px-6 md:px-10 pt-40 pb-32 md:pt-52">
          <Link to={routes.projects} className="text-xs uppercase tracking-[0.2em] text-brand-light/60 hover:text-brand-primary">← Alle Projekte</Link>
          <p className="mt-16 text-xs uppercase tracking-[0.25em] text-brand-primary">{project.year} · {project.industry} · Fallstudie</p>
          <h1 className="mt-6 max-w-5xl font-display font-semibold text-6xl md:text-[10vw] leading-[0.88]">{project.title}</h1>
          <p className="mt-10 max-w-3xl text-xl md:text-2xl leading-relaxed text-brand-light/80">{project.description}</p>

          <div className="mt-16 grid gap-10 border-t border-brand-light/15 pt-8 md:grid-cols-3">
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-brand-light/50">Herausforderung</h2>
              <p className="mt-4 leading-relaxed text-brand-light/75">{project.challenge}</p>
            </div>
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-brand-light/50">Lösung</h2>
              <p className="mt-4 leading-relaxed text-brand-light/75">{project.approach}</p>
            </div>
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-brand-light/50">Ergebnis</h2>
              <p className="mt-4 leading-relaxed text-brand-light/75">{project.result}</p>
            </div>
          </div>

          <div className="mt-10 border-t border-brand-light/15 pt-8">
            <h2 className="text-xs uppercase tracking-[0.2em] text-brand-light/50">Leistungsbereiche</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => <span key={tag} className="text-[11px] tracking-[0.1em] uppercase border border-brand-light/20 rounded-full px-4 py-2 text-brand-light/80">{tag}</span>)}
            </div>
          </div>

          {relatedServices.length > 0 && (
            <div className="mt-10 border-t border-brand-light/15 pt-8">
              <h2 className="text-xs uppercase tracking-[0.2em] text-brand-light/50">Verwandte Leistungen</h2>
              <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
                {relatedServices.map((service) => (
                  <li key={service.id}><Link to={routes.service(service.slug)} className="text-brand-light/80 hover:text-brand-primary">{service.title} →</Link></li>
                ))}
              </ul>
            </div>
          )}

          {relatedPosts.length > 0 && (
            <div className="mt-10 border-t border-brand-light/15 pt-8">
              <h2 className="text-xs uppercase tracking-[0.2em] text-brand-light/50">Mehr zum Thema</h2>
              <ul className="mt-4 space-y-2">
                {relatedPosts.map((post) => (
                  <li key={post.slug}><Link to={routes.post(post.slug)} className="text-brand-light/80 hover:text-brand-primary">{post.title} →</Link></li>
                ))}
              </ul>
            </div>
          )}

          <Link to={routes.projectStart} className="mt-16 inline-flex rounded-full bg-brand-primary px-7 py-4 text-sm uppercase tracking-[0.14em] text-brand-dark hover:bg-brand-secondary" onClick={() => trackEvent('projectCtaClicked', { location: 'project-detail' })}>Ähnliches Projekt besprechen ↗</Link>
          <Link to={routes.projects} className="mt-16 ml-4 inline-flex rounded-full border border-brand-light/20 px-6 py-4 text-xs uppercase tracking-[0.18em] hover:border-brand-primary hover:text-brand-primary">Weitere Projekte ansehen</Link>
        </main>
        <Footer />
      </div>
    )
  }

  return <NotFoundPage />
}
