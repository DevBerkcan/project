import { Link } from 'react-router'
import Footer from '../sections/Footer'
import { services, solutions } from '../data/siteContent'
import { routes } from '../lib/routes'

export default function ServicesIndexPage() {
  return (
    <div className="min-h-screen bg-brand-dark text-brand-light">
      <main id="main" tabIndex={-1}>
        <section className="px-6 md:px-10 pt-40 pb-24 md:pt-52 md:pb-36">
          <div className="flex flex-wrap items-end justify-between gap-8 border-b border-brand-light/15 pb-8">
            <div>
              <p className="text-[11px] tracking-[0.25em] uppercase text-brand-light/60">Was wir entwickeln</p>
              <h1 className="mt-6 font-display font-semibold text-[16vw] md:text-[10vw] leading-[0.85] tracking-[-0.03em]">Alle<br /><span className="text-stroke">Leistungen</span></h1>
            </div>
            <p className="max-w-sm text-brand-light/70 leading-relaxed">Softwareentwicklung, Webdesign, KI-Automatisierung, Cloud-Betrieb und App-Entwicklung für Unternehmen in Wuppertal, Düsseldorf und NRW — von der Analyse bis zum laufenden Betrieb.</p>
          </div>
        </section>

        <section className="px-6 md:px-10 pb-24" aria-labelledby="core-services">
          <h2 id="core-services" className="text-[11px] tracking-[0.25em] uppercase text-brand-light/60 mb-6">Kernleistungen</h2>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {services.map((service) => (
              <article key={service.id} className="group border-t border-brand-light/15 py-8 md:py-10">
                <div className="flex items-baseline gap-4">
                  <span className="text-xs text-brand-light/50 tabular-nums">{service.number}</span>
                  <h3 className="font-display font-semibold text-3xl md:text-5xl leading-none transition-colors duration-300 group-hover:text-brand-primary">
                    <Link to={routes.service(service.slug)}>{service.title}</Link>
                  </h3>
                </div>
                <p className="mt-6 max-w-xl text-brand-light/70 leading-relaxed">{service.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => <span key={tag} className="text-xs text-brand-light/80">{tag}</span>)}
                </div>
                <Link to={routes.service(service.slug)} className="mt-6 inline-flex text-sm uppercase tracking-[0.12em] text-brand-primary hover:text-brand-secondary">Mehr erfahren →</Link>
              </article>
            ))}
          </div>
        </section>

        <section className="px-6 md:px-10 pb-32" aria-labelledby="solutions">
          <h2 id="solutions" className="text-[11px] tracking-[0.25em] uppercase text-brand-light/60 mb-6">Schwerpunkte</h2>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {solutions.map((solution) => (
              <article key={solution.id} className="group border-t border-brand-light/15 py-8">
                <h3 className="font-display font-semibold text-2xl md:text-4xl leading-tight transition-colors duration-300 group-hover:text-brand-primary">
                  <Link to={routes.service(solution.slug)}>{solution.title}</Link>
                </h3>
                <p className="mt-4 max-w-xl text-brand-light/70 leading-relaxed">{solution.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
