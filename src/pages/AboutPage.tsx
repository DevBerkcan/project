import Footer from '../sections/Footer'
import { Link } from 'react-router'
import { routes } from '../lib/routes'
import { siteConfig } from '../lib/siteConfig'
import { trackEvent } from '../lib/analytics'
import { processStages, services, teamProfiles, workProjects } from '../data/siteContent'

// Principles restate how the studio already describes its work on service and region pages.
const principles = [
  ['Erst verstehen, dann bauen', 'Jedes Projekt beginnt mit einer Analyse des tatsächlichen Ablaufs. Erst danach entscheiden wir, ob Standardsoftware, Power Platform oder eine individuelle Lösung passt.'],
  ['Sichtbare Zwischenstände', 'Wir entwickeln in Etappen. Sie sehen früh funktionierende Zwischenstände und entscheiden auf dieser Grundlage über die nächsten Schritte.'],
  ['Barrierefreiheit von Anfang an', 'Zugänglichkeit, Ladezeit und Auffindbarkeit planen wir ab dem ersten Entwurf mit, statt sie später nachzurüsten.'],
  ['Betrieb nach dem Launch', 'Nach dem Start bleiben wir Ansprechpartner für Betrieb, Updates, Sicherheit und Weiterentwicklung.'],
] as const

export default function AboutPage() {
  return (
    <div className="grain bg-brand-dark text-brand-light min-h-screen">
      <main id="main" tabIndex={-1}>
        <section className="px-6 md:px-10 pt-40 pb-20 md:pt-52">
          <nav aria-label="Brotkrumen" className="text-xs uppercase tracking-[0.2em] text-brand-light/60">
            <Link to={routes.home} className="hover:text-brand-primary">Start</Link>
            <span aria-hidden="true"> / </span>
            <span>Über uns</span>
          </nav>
          <p className="mt-16 text-xs uppercase tracking-[0.25em] text-brand-primary">Studio</p>
          <h1 className="mt-6 max-w-5xl font-display font-semibold text-5xl md:text-[7vw] leading-[0.9]">
            Über uns
            <span className="mt-6 block text-xl md:text-3xl font-normal leading-snug tracking-normal text-brand-light/80">Gentle Group Studios – Softwareagentur aus Wuppertal</span>
          </h1>
          <p className="mt-10 max-w-3xl text-xl leading-relaxed text-brand-light/80">
            Gentle Group Studios entwickelt individuelle Software, Web-Apps, Websites und KI-Automatisierungen – von der Strategie über Design und Entwicklung bis zum laufenden Betrieb. Unser Sitz ist in {siteConfig.location.locality}; wir arbeiten für Unternehmen in Wuppertal, Düsseldorf, ganz NRW und deutschlandweit.
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-brand-light/70">
            Unter dem Namen GentleSuite entwickeln wir außerdem eigene Softwareprodukte. So kennen wir beide Seiten: Projekte für Kunden und den Betrieb eigener Produkte.
          </p>
        </section>

        <section className="px-6 md:px-10 py-20 md:py-28 bg-brand-light text-brand-dark" aria-labelledby="about-team">
          <h2 id="about-team" className="font-display font-semibold text-3xl md:text-5xl leading-tight">Das Team.</h2>
          <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {teamProfiles.map((person) => {
              const isFounder = siteConfig.founder.name.startsWith(person.name)
              return (
                <li key={person.name} className="grid gap-4 content-start">
                  <img src={person.src} alt="" width={256} height={256} loading="lazy" decoding="async" className="h-64 w-full max-w-xs rounded-lg object-contain" />
                  <div>
                    <h3 className="font-display font-semibold text-2xl">{isFounder ? siteConfig.founder.name : person.name}</h3>
                    <p className="mt-1 text-brand-dark/70">{person.role}</p>
                    {person.description ? <p className="mt-3 leading-relaxed text-brand-dark/80">{person.description}</p> : null}
                  </div>
                </li>
              )
            })}
          </ul>
        </section>

        <section className="px-6 md:px-10 py-20 md:py-28" aria-labelledby="about-principles">
          <h2 id="about-principles" className="font-display font-semibold text-3xl md:text-5xl leading-tight">Wie wir arbeiten.</h2>
          <ul className="mt-10 grid gap-px bg-brand-light/15 md:grid-cols-2">
            {principles.map(([title, description]) => (
              <li key={title} className="bg-brand-dark p-6 md:p-8">
                <h3 className="font-display font-semibold text-xl md:text-2xl">{title}</h3>
                <p className="mt-3 text-brand-light/70 leading-relaxed">{description}</p>
              </li>
            ))}
          </ul>
          <h3 className="mt-16 text-xs uppercase tracking-[0.2em] text-brand-light/60">Projektphasen</h3>
          <ol className="mt-4 flex flex-wrap gap-3">
            {processStages.map((stage, index) => (
              <li key={stage} className="rounded-full border border-brand-light/20 px-5 py-3 text-sm"><span className="text-brand-primary tabular-nums">0{index + 1}</span> {stage}</li>
            ))}
          </ol>
          <Link to="/blog/projektprozess-analyse-bis-betrieb" className="mt-6 inline-block text-brand-primary hover:text-brand-light transition-colors">Den Projektprozess im Detail lesen →</Link>
        </section>

        <section className="px-6 md:px-10 pb-28 grid gap-12 lg:grid-cols-2" aria-label="Leistungen und Referenzen">
          <div className="border-t border-brand-light/15 pt-8">
            <h2 className="font-display font-semibold text-3xl md:text-4xl">Leistungen</h2>
            <ul className="mt-6 space-y-2">
              {services.map((service) => (
                <li key={service.id}><Link to={routes.service(service.slug)} className="text-lg hover:text-brand-primary transition-colors">{service.title} →</Link></li>
              ))}
            </ul>
          </div>
          <div className="border-t border-brand-light/15 pt-8">
            <h2 className="font-display font-semibold text-3xl md:text-4xl">Referenzen</h2>
            <ul className="mt-6 space-y-2">
              {workProjects.map((project) => (
                <li key={project.slug}><Link to={routes.project(project.slug)} className="text-lg hover:text-brand-primary transition-colors">{project.seoTitle} →</Link></li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2 flex flex-wrap gap-4">
            <Link to={routes.projectStart} onClick={() => trackEvent('projectCtaClicked', { location: 'about-page' })} className="inline-flex rounded-full bg-brand-primary px-7 py-4 text-sm uppercase tracking-[0.14em] text-brand-dark hover:bg-brand-secondary">Projekt besprechen ↗</Link>
            <Link to={routes.contact} className="inline-flex rounded-full border border-brand-light/20 px-6 py-4 text-xs uppercase tracking-[0.18em] transition-colors hover:border-brand-primary hover:text-brand-primary">Kontakt</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
