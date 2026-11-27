import Footer from '../sections/Footer'
import { Link, useParams } from 'react-router'
import { findIndustry } from '../data/industries'
import { findService, workProjects } from '../data/siteContent'
import { blogPosts } from '../data/blog'
import { routes } from '../lib/routes'
import { trackEvent } from '../lib/analytics'
import FaqList from '../components/FaqList'
import NotFoundPage from './NotFoundPage'

export default function IndustryPage() {
  const { slug } = useParams()
  const industry = slug ? findIndustry(slug) : undefined
  if (!industry) return <NotFoundPage />

  const services = industry.serviceIds
    .map((id) => findService(id))
    .filter((service): service is NonNullable<typeof service> => Boolean(service))
  const projects = workProjects.filter((project) => industry.projectSlugs.includes(project.slug))
  const posts = blogPosts.filter((post) => industry.postSlugs.includes(post.slug))

  return (
    <div className="grain bg-brand-dark text-brand-light min-h-screen">
      <main id="main" tabIndex={-1} className="px-6 md:px-10 pt-40 pb-28 md:pt-52">
        <nav aria-label="Brotkrumen" className="text-xs uppercase tracking-[0.2em] text-brand-light/60">
          <Link to={routes.home} className="hover:text-brand-primary">Start</Link>
          <span aria-hidden="true"> / </span>
          <span>Branchen</span>
          <span aria-hidden="true"> / </span>
          <span>{industry.name}</span>
        </nav>
        <p className="mt-16 text-xs uppercase tracking-[0.25em] text-brand-primary">{industry.eyebrow}</p>
        <h1 lang="de" className="mt-6 max-w-6xl font-display font-semibold text-4xl sm:text-5xl md:text-[6vw] leading-[0.95] tracking-[-0.02em] hyphens-auto break-words">{industry.h1}</h1>
        <p className="mt-10 max-w-3xl text-xl md:text-2xl leading-relaxed text-brand-light/80">{industry.lead}</p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link to={routes.projectStart} onClick={() => trackEvent('projectCtaClicked', { location: `industry-${industry.slug}` })} className="inline-flex rounded-full bg-brand-primary px-7 py-4 text-sm uppercase tracking-[0.14em] text-brand-dark transition-colors hover:bg-brand-secondary">Projekt besprechen ↗</Link>
          <a href="#referenzen" className="inline-flex rounded-full border border-brand-light/20 px-6 py-4 text-xs uppercase tracking-[0.18em] transition-colors hover:border-brand-primary hover:text-brand-primary">Referenzen ansehen ↓</a>
        </div>

        <section className="mt-28" aria-labelledby="industry-challenges">
          <h2 id="industry-challenges" className="font-display font-semibold text-3xl md:text-5xl leading-tight">Typische Ausgangslagen und Lösungen.</h2>
          <ul className="mt-10 grid gap-x-10 gap-y-12 lg:grid-cols-2">
            {industry.challenges.map((challenge) => (
              <li key={challenge.heading} className="border-t border-brand-light/15 pt-8">
                <h3 className="font-display font-semibold text-2xl md:text-3xl leading-tight">{challenge.heading}</h3>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-brand-light/75">{challenge.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="referenzen" className="mt-28 scroll-mt-28" aria-labelledby="industry-work">
          <h2 id="industry-work" className="font-display font-semibold text-3xl md:text-5xl leading-tight">So sieht das in der Praxis aus.</h2>
          <ul className="mt-10 grid gap-px bg-brand-light/15 md:grid-cols-2">
            {projects.map((project) => (
              <li key={project.slug} className="bg-brand-dark p-6 md:p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-brand-light/60">{project.industry} · {project.year}</p>
                <h3 className="mt-3 font-display font-semibold text-2xl md:text-3xl"><Link to={routes.project(project.slug)} className="hover:text-brand-primary transition-colors">{project.seoTitle} →</Link></h3>
                <p className="mt-3 text-brand-light/70 leading-relaxed">{project.result}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-28 grid gap-12 lg:grid-cols-2" aria-label="Passende Leistungen und Fachartikel">
          <div className="border-t border-brand-light/15 pt-8">
            <h2 className="text-xs uppercase tracking-[0.2em] text-brand-light/60">Passende Leistungen</h2>
            <ul className="mt-6 space-y-3">
              {services.map((service) => (
                <li key={service.id}><Link to={routes.service(service.slug)} className="font-display font-semibold text-xl md:text-2xl hover:text-brand-primary transition-colors">{service.title} →</Link></li>
              ))}
              <li><Link to={routes.gentlesuite} className="font-display font-semibold text-xl md:text-2xl hover:text-brand-primary transition-colors">GentleSuite: GentleBook & GentleCalc →</Link></li>
            </ul>
          </div>
          <div className="border-t border-brand-light/15 pt-8">
            <h2 className="text-xs uppercase tracking-[0.2em] text-brand-light/60">Fachartikel</h2>
            <ul className="mt-6 space-y-3">
              {posts.map((post) => (
                <li key={post.slug}><Link to={routes.post(post.slug)} className="font-display font-semibold text-xl md:text-2xl hover:text-brand-primary transition-colors">{post.title} →</Link></li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-28 max-w-3xl" aria-labelledby="industry-faq">
          <h2 id="industry-faq" className="font-display font-semibold text-3xl md:text-4xl">Häufige Fragen</h2>
          <div className="mt-10">
            <FaqList items={industry.faqs} tone="dark" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
