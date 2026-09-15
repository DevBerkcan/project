import { Link } from 'react-router'
import { services } from '../data/siteContent'

export default function ServicesIndexPage() {
  return (
    <div className="min-h-screen bg-brand-dark text-brand-light">
      <main>
        <section className="px-6 md:px-10 pt-40 pb-24 md:pt-52 md:pb-36">
          <div className="flex flex-wrap items-end justify-between gap-8 border-b border-brand-light/15 pb-8">
            <div>
              <p className="text-[11px] tracking-[0.25em] uppercase text-brand-light/60">Was wir entwickeln</p>
              <h1 className="mt-6 font-display font-semibold text-[16vw] md:text-[10vw] leading-[0.85] tracking-[-0.03em]">Alle<br /><span className="text-stroke">Leistungen</span></h1>
            </div>
            <p className="max-w-sm text-brand-light/70 leading-relaxed">Individuelle Software, Websites, KI-Automatisierung, Cloud &amp; Betrieb sowie mobile Anwendungen — jede Leistung mit eigener Detailseite.</p>
          </div>
        </section>

        <section className="px-6 md:px-10 pb-32">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {services.map((service) => (
              <article key={service.id} className="group border-t border-brand-light/15 py-8 md:py-10">
                <div className="flex items-baseline gap-4">
                  <span className="text-xs text-brand-light/50 tabular-nums">{service.number}</span>
                  <h2 className="font-display font-semibold text-3xl md:text-5xl leading-none transition-colors duration-300 group-hover:text-brand-primary">
                    <Link to={`/leistungen/${service.id}`}>{service.title}</Link>
                  </h2>
                </div>
                <p className="mt-6 max-w-xl text-brand-light/70 leading-relaxed">{service.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => <span key={tag} className="text-xs text-brand-light/80">{tag}</span>)}
                </div>
                <Link to={`/leistungen/${service.id}`} className="mt-6 inline-flex text-sm uppercase tracking-[0.12em] text-brand-primary hover:text-brand-secondary">Mehr erfahren →</Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <footer className="px-6 md:px-10 py-8 border-t border-brand-light/15 flex flex-wrap justify-between gap-4 text-[11px] tracking-[0.15em] uppercase text-brand-light/60">
        <Link to="/" className="hover:text-brand-primary">← Zur Startseite</Link>
        <span>© 2026 Gentle Group Studios</span>
      </footer>
    </div>
  )
}
