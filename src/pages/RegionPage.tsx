import Footer from '../sections/Footer'
import { Link } from 'react-router'
import { regionFaqs } from '../data/faqContent'
import { allServices, workProjects } from '../data/siteContent'
import { routes } from '../lib/routes'
import { trackEvent } from '../lib/analytics'
import FaqList from '../components/FaqList'

const collaboration = [
  ['Erstgespräch', 'Per Video oder telefonisch klären wir Ziel, Ausgangslage und Rahmen Ihres Vorhabens.'],
  ['Analyse vor Ort, wenn sinnvoll', 'Wenn Abläufe im Betrieb verstanden werden müssen, kommen wir projektbezogen zu Ihnen — in Wuppertal, Düsseldorf oder anderswo in NRW.'],
  ['Entwicklung in Etappen', 'Sie sehen regelmäßig funktionierende Zwischenstände und entscheiden auf dieser Grundlage über die nächsten Schritte.'],
  ['Betrieb & Weiterentwicklung', 'Nach dem Launch bleiben wir Ansprechpartner für Betrieb, Updates und neue Anforderungen.'],
] as const

export default function RegionPage() {
  const highlightedServices = ['software', 'webapp', 'web', 'ai', 'crm', 'booking']
    .map((id) => allServices.find((service) => service.id === id))
    .filter((service): service is NonNullable<typeof service> => Boolean(service))

  return (
    <div className="grain bg-brand-dark text-brand-light min-h-screen">
      <main id="main" tabIndex={-1} className="px-6 md:px-10 pt-40 pb-28 md:pt-52">
        <Link to={routes.home} className="text-xs uppercase tracking-[0.2em] text-brand-light/60 hover:text-brand-primary">← Startseite</Link>
        <p className="mt-16 text-xs uppercase tracking-[0.25em] text-brand-primary">Leistungsgebiet</p>
        <h1 className="mt-6 max-w-5xl font-display font-semibold text-5xl md:text-[7vw] leading-[0.9]">
          <span className="block text-3xl md:text-[3vw] leading-tight text-brand-light/80">Softwareagentur für</span>
          Wuppertal, Düsseldorf<br /><span className="text-stroke">& Nordrhein-Westfalen.</span>
        </h1>
        <p className="mt-10 max-w-3xl text-xl leading-relaxed text-brand-light/80">Gentle Group Studios ist in Wuppertal ansässig und entwickelt individuelle Software, Web-Apps, Websites und KI-Automatisierungen für Unternehmen in Wuppertal, Düsseldorf und ganz Nordrhein-Westfalen. Wir haben kein eigenes Büro in Düsseldorf — die Zusammenarbeit läuft remote und, wenn es sinnvoll ist, projektbezogen vor Ort. Softwareprojekte setzen wir auch deutschlandweit um.</p>
        <Link to={routes.projectStart} onClick={() => trackEvent('projectCtaClicked', { location: 'region-hero' })} className="mt-10 inline-flex rounded-full bg-brand-primary px-7 py-4 text-sm uppercase tracking-[0.14em] text-brand-dark hover:bg-brand-secondary">Projekt besprechen ↗</Link>

        <section className="mt-28 grid gap-12 lg:grid-cols-12" aria-labelledby="region-services">
          <div className="lg:col-span-5">
            <h2 id="region-services" className="font-display font-semibold text-3xl md:text-5xl leading-tight">Was wir für Unternehmen in der Region entwickeln.</h2>
            <p className="mt-6 max-w-md text-brand-light/70 leading-relaxed">Für kleine und mittelständische Unternehmen digitalisieren wir Abläufe, die heute über Tabellen, E-Mails und getrennte Werkzeuge laufen.</p>
          </div>
          <ul className="lg:col-span-7 border-t border-brand-light/15">
            {highlightedServices.map((service) => (
              <li key={service.id} className="border-b border-brand-light/15 py-6">
                <Link to={routes.service(service.slug)} className="group block">
                  <span className="font-display font-semibold text-2xl md:text-3xl transition-colors group-hover:text-brand-primary">{service.title} →</span>
                  <span className="mt-2 block max-w-2xl text-brand-light/70 leading-relaxed">{service.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-28" aria-labelledby="region-process">
          <h2 id="region-process" className="font-display font-semibold text-3xl md:text-5xl leading-tight">So arbeiten wir mit Ihnen zusammen.</h2>
          <ol className="mt-10 grid gap-px bg-brand-light/15 md:grid-cols-2 lg:grid-cols-4">
            {collaboration.map(([title, description], index) => (
              <li key={title} className="bg-brand-dark p-6 md:p-8">
                <span className="text-brand-primary tabular-nums">0{index + 1}</span>
                <h3 className="mt-3 font-display font-semibold text-xl md:text-2xl">{title}</h3>
                <p className="mt-3 text-brand-light/70 leading-relaxed">{description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-28" aria-labelledby="region-work">
          <h2 id="region-work" className="font-display font-semibold text-3xl md:text-5xl leading-tight">Ausgewählte Projekte.</h2>
          <ul className="mt-8 flex flex-wrap gap-3">
            {workProjects.map((project) => (
              <li key={project.slug}>
                <Link to={routes.project(project.slug)} className="inline-flex rounded-full border border-brand-light/20 px-5 py-3 text-sm text-brand-light/85 transition-colors hover:border-brand-primary hover:text-brand-primary">{project.title} · {project.industry}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-28 max-w-3xl" aria-labelledby="region-faq">
          <h2 id="region-faq" className="font-display font-semibold text-3xl md:text-4xl">Häufige Fragen zur Zusammenarbeit in der Region.</h2>
          <div className="mt-10">
            <FaqList items={regionFaqs} tone="dark" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
