import { useEffect } from 'react'
import Footer from '../sections/Footer'
import { Link, useParams } from 'react-router'
import { allServices, workProjects } from '../data/siteContent'
import { serviceDetails } from '../data/serviceDetails'
import { blogPosts } from '../data/blog'
import { routes } from '../lib/routes'
import { trackEvent } from '../lib/analytics'
import FaqList from '../components/FaqList'
import NotFoundPage from './NotFoundPage'

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const service = allServices.find((entry) => entry.slug === slug)
  const detail = service ? serviceDetails[service.id] : undefined

  useEffect(() => {
    if (service) trackEvent('serviceViewed', { id: service.id })
  }, [service])

  if (!service || !detail) return <NotFoundPage />

  const relatedProjects = workProjects.filter((project) => project.relatedServiceIds?.includes(service.id))
  const relatedPosts = blogPosts.filter((post) => post.relatedServiceIds.includes(service.id)).slice(0, 4)
  const relatedServices = detail.relatedIds
    .map((id) => allServices.find((entry) => entry.id === id))
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry))

  return (
    <div className="grain bg-brand-dark text-brand-light min-h-screen">
      <main id="main" tabIndex={-1}>
        <section className="px-6 md:px-10 pt-40 pb-20 md:pt-52 md:pb-28">
          <nav aria-label="Brotkrumen" className="text-xs uppercase tracking-[0.2em] text-brand-light/60">
            <Link to={routes.home} className="hover:text-brand-primary">Start</Link>
            <span aria-hidden="true"> / </span>
            <Link to={routes.services} className="hover:text-brand-primary">Leistungen</Link>
          </nav>
          <p className="mt-16 text-xs uppercase tracking-[0.25em] text-brand-primary">{detail.eyebrow}</p>
          <h1 lang="de" className="mt-6 max-w-6xl font-display font-semibold text-4xl sm:text-5xl md:text-[6.5vw] leading-[0.95] tracking-[-0.02em] hyphens-auto break-words">{detail.h1}</h1>
          <p className="mt-10 max-w-3xl text-xl md:text-2xl leading-relaxed text-brand-light/80">{detail.lead}</p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link to={routes.projectStart} className="inline-flex rounded-full bg-brand-primary px-7 py-4 text-sm uppercase tracking-[0.14em] text-brand-dark transition-colors hover:bg-brand-secondary" onClick={() => trackEvent('projectCtaClicked', { location: 'service-hero' })}>Projekt besprechen ↗</Link>
            {relatedProjects.length > 0 && (
              <a href="#referenzen" className="inline-flex rounded-full border border-brand-light/20 px-6 py-4 text-xs uppercase tracking-[0.18em] transition-colors hover:border-brand-primary hover:text-brand-primary">Referenzen ansehen ↓</a>
            )}
          </div>
        </section>

        <section className="px-6 md:px-10 pb-20 md:pb-28">
          <div className="grid gap-x-10 gap-y-16 lg:grid-cols-2">
            {detail.sections.map((section) => (
              <div key={section.heading} className="border-t border-brand-light/15 pt-8">
                <h2 className="font-display font-semibold text-3xl md:text-4xl leading-tight">{section.heading}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-light/75">{paragraph}</p>
                ))}
                {section.items && (
                  <ul className="mt-6 space-y-3">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-3 text-lg leading-relaxed text-brand-light/75">
                        <span className="text-brand-primary" aria-hidden="true">↳</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {detail.technologies && (
            <div className="mt-16 border-t border-brand-light/15 pt-8">
              <h2 className="text-xs uppercase tracking-[0.2em] text-brand-light/60">Technologien, mit denen wir arbeiten</h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {detail.technologies.map((technology) => (
                  <li key={technology} className="text-[11px] tracking-[0.1em] uppercase border border-brand-light/20 rounded-full px-4 py-2 text-brand-light/80">{technology}</li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {relatedProjects.length > 0 && (
          <section id="referenzen" className="scroll-mt-24 px-6 md:px-10 py-20 md:py-28 bg-brand-light text-brand-dark">
            <p className="text-[11px] tracking-[0.25em] uppercase text-brand-dark/60">Referenzen</p>
            <h2 className="mt-4 font-display font-semibold text-4xl md:text-6xl leading-[0.95]">So sieht das in der Praxis aus.</h2>
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              {relatedProjects.map((project) => (
                <Link key={project.slug} to={routes.project(project.slug)} className="group block border border-brand-dark/15 rounded-2xl p-6 md:p-8 transition-colors hover:border-brand-secondary">
                  <p className="text-[11px] tracking-[0.2em] uppercase text-brand-dark/60">{project.industry} · {project.year}</p>
                  <h3 className="mt-3 font-display font-semibold text-2xl md:text-3xl transition-colors group-hover:text-brand-secondary">{project.title}</h3>
                  <p className="mt-3 text-brand-dark/70 leading-relaxed">{project.challenge}</p>
                  <span className="mt-5 inline-flex text-sm uppercase tracking-[0.12em]">Fallstudie lesen →</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="px-6 md:px-10 py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="font-display font-semibold text-4xl md:text-5xl leading-[0.95]">Häufige Fragen</h2>
              {relatedPosts.length > 0 && (
                <div className="mt-12">
                  <h3 className="text-xs uppercase tracking-[0.2em] text-brand-light/60">Weiterlesen im Blog</h3>
                  <ul className="mt-4 space-y-3">
                    {relatedPosts.map((post) => (
                      <li key={post.slug}><Link to={routes.post(post.slug)} className="text-brand-light/80 leading-relaxed hover:text-brand-primary">{post.title} →</Link></li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="lg:col-span-7">
              <FaqList items={detail.faqs} tone="dark" />
            </div>
          </div>
        </section>

        {relatedServices.length > 0 && (
          <section className="px-6 md:px-10 pb-12">
            <div className="border-t border-brand-light/15 pt-8">
              <h2 className="text-xs uppercase tracking-[0.2em] text-brand-light/60">Passende Leistungen</h2>
              <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
                {relatedServices.map((entry) => (
                  <li key={entry.id}><Link to={routes.service(entry.slug)} className="text-lg text-brand-light/80 hover:text-brand-primary">{entry.title} →</Link></li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  )
}
