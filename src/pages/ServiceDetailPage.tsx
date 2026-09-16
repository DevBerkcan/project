import { useEffect } from 'react'
import { Link, useParams } from 'react-router'
import { services, workProjects } from '../data/siteContent'
import { routes } from '../lib/routes'
import { trackEvent } from '../lib/analytics'

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const service = services.find((entry) => entry.id === slug)

  useEffect(() => {
    if (service) trackEvent('serviceViewed', { id: service.id })
  }, [service])

  if (!service) {
    return (
      <div className="grain bg-brand-dark text-brand-light min-h-screen flex flex-col items-center justify-center gap-6 px-6 text-center">
        <p className="text-[11px] tracking-[0.25em] uppercase text-brand-light/60">Leistung nicht gefunden</p>
        <h1 className="font-display font-semibold text-5xl md:text-7xl max-w-4xl">Diese Leistung gibt es nicht.</h1>
        <Link to={routes.services} data-cursor className="mt-4 inline-flex items-center gap-3 border border-brand-light/20 rounded-full px-8 py-4 text-[12px] tracking-[0.2em] uppercase transition-colors duration-500 hover:bg-brand-primary hover:text-brand-dark hover:border-brand-primary">Alle Leistungen <span aria-hidden="true">↗</span></Link>
      </div>
    )
  }

  const relatedProjects = workProjects.filter((project) => project.relatedServiceIds?.includes(service.id))

  return (
    <div className="grain bg-brand-dark text-brand-light min-h-screen">
      <main className="px-6 md:px-10 pt-40 pb-32 md:pt-52">
        <Link to={routes.services} className="text-xs uppercase tracking-[0.2em] text-brand-light/60 hover:text-brand-primary">← Alle Leistungen</Link>
        <p className="mt-16 text-xs uppercase tracking-[0.25em] text-brand-primary">Leistung {service.number}</p>
        <h1 className="mt-6 max-w-5xl font-display font-semibold text-6xl md:text-[9vw] leading-[0.88]">{service.title}</h1>
        <p className="mt-10 max-w-3xl text-xl md:text-2xl leading-relaxed text-brand-light/80">{service.description}</p>
        <div className="mt-8 flex flex-wrap gap-2">
          {service.tags.map((tag) => <span key={tag} className="text-[11px] tracking-[0.1em] uppercase border border-brand-light/20 rounded-full px-4 py-2 text-brand-light/80">{tag}</span>)}
        </div>

        {relatedProjects.length > 0 && (
          <div className="mt-16 border-t border-brand-light/15 pt-8">
            <h2 className="text-xs uppercase tracking-[0.2em] text-brand-light/50">So sieht das in der Praxis aus</h2>
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              {relatedProjects.map((project) => (
                <Link key={project.slug} to={routes.project(project.slug)} className="group block border border-brand-light/15 rounded-2xl p-6 hover:border-brand-primary transition-colors">
                  <h3 className="font-display font-semibold text-2xl group-hover:text-brand-primary transition-colors">{project.title}</h3>
                  <p className="mt-3 text-brand-light/70 leading-relaxed">{project.intro}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        <Link to={routes.projectStart} className="mt-16 inline-flex rounded-full bg-brand-primary px-7 py-4 text-sm uppercase tracking-[0.14em] text-brand-dark hover:bg-brand-secondary" onClick={() => trackEvent('projectCtaClicked', { location: 'service-detail' })}>Projekt besprechen ↗</Link>
      </main>
    </div>
  )
}
