import Footer from '../sections/Footer'
import { Link } from 'react-router'
import { routes } from '../lib/routes'
import { siteConfig } from '../lib/siteConfig'
import { trackEvent } from '../lib/analytics'

const nextSteps = [
  ['Anfrage', 'Sie beschreiben Ihr Vorhaben über das Projektformular oder per E-Mail. Stichpunkte reichen für den Anfang.'],
  ['Kostenloses Erstgespräch', 'Per Video oder telefonisch klären wir Ziel, Ausgangslage, Rahmen und offene Fragen. Das Erstgespräch ist für Sie kostenlos.'],
  ['Einschätzung', 'Auf Grundlage des Gesprächs und einer kurzen Analyse erhalten Sie eine Einschätzung zu Vorgehen, Umfang und nächsten Schritten.'],
] as const

const { location } = siteConfig
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${siteConfig.name}, ${location.streetAddress}, ${location.postalCode} ${location.locality}`,
)}`

export default function ContactPage() {
  return (
    <div className="grain bg-brand-dark text-brand-light min-h-screen">
      <main id="main" tabIndex={-1} className="px-6 md:px-10 pt-40 pb-28 md:pt-52">
        <nav aria-label="Brotkrumen" className="text-xs uppercase tracking-[0.2em] text-brand-light/60">
          <Link to={routes.home} className="hover:text-brand-primary">Start</Link>
          <span aria-hidden="true"> / </span>
          <span>Kontakt</span>
        </nav>
        <p className="mt-16 text-xs uppercase tracking-[0.25em] text-brand-primary">Kontakt</p>
        <h1 className="mt-6 max-w-5xl font-display font-semibold text-5xl md:text-[7vw] leading-[0.9]">
          Kontakt
          <span className="mt-6 block text-xl md:text-3xl font-normal leading-snug tracking-normal text-brand-light/80">Gentle Group Studios · Softwareagentur in Wuppertal</span>
        </h1>
        <p className="mt-10 max-w-3xl text-xl leading-relaxed text-brand-light/80">
          Sie planen eine Software, Web-App, Website oder KI-Automatisierung? Schreiben Sie uns oder rufen Sie an. Wir arbeiten von Wuppertal aus für Unternehmen in Düsseldorf, ganz NRW und deutschlandweit.
        </p>

        <section className="mt-20 grid gap-px bg-brand-light/15 md:grid-cols-3" aria-label="Kontaktdaten">
          <div className="bg-brand-dark p-6 md:p-8">
            <h2 className="text-xs uppercase tracking-[0.2em] text-brand-light/60">E-Mail</h2>
            <a href={`mailto:${siteConfig.email}`} className="mt-4 block font-display font-semibold text-2xl md:text-3xl [overflow-wrap:anywhere] hover:text-brand-primary transition-colors">{siteConfig.email}</a>
          </div>
          <div className="bg-brand-dark p-6 md:p-8">
            <h2 className="text-xs uppercase tracking-[0.2em] text-brand-light/60">Telefon</h2>
            <a href={`tel:${siteConfig.phone.e164}`} className="mt-4 block font-display font-semibold text-2xl md:text-3xl hover:text-brand-primary transition-colors">{siteConfig.phone.display}</a>
          </div>
          <div className="bg-brand-dark p-6 md:p-8">
            <h2 className="text-xs uppercase tracking-[0.2em] text-brand-light/60">Adresse</h2>
            <address className="mt-4 not-italic text-xl leading-relaxed">
              {siteConfig.name}<br />
              {location.streetAddress}<br />
              {location.postalCode} {location.locality}
            </address>
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm uppercase tracking-[0.14em] text-brand-primary hover:text-brand-light transition-colors">In Google Maps öffnen ↗</a>
          </div>
        </section>

        <section className="mt-28 grid gap-12 lg:grid-cols-12" aria-labelledby="contact-project">
          <div className="lg:col-span-5">
            <h2 id="contact-project" className="font-display font-semibold text-3xl md:text-5xl leading-tight">Projekt direkt anfragen.</h2>
            <p className="mt-6 max-w-md text-brand-light/70 leading-relaxed">Das Projektformular führt Sie in wenigen Schritten durch die wichtigsten Fragen. So können wir Ihr Vorhaben schon vor dem ersten Gespräch einordnen.</p>
            <Link to={routes.projectStart} onClick={() => trackEvent('projectCtaClicked', { location: 'contact-page' })} className="mt-8 inline-flex rounded-full bg-brand-primary px-7 py-4 text-sm uppercase tracking-[0.14em] text-brand-dark hover:bg-brand-secondary">Projekt anfragen ↗</Link>
          </div>
          <ol className="lg:col-span-7 border-t border-brand-light/15">
            {nextSteps.map(([title, description], index) => (
              <li key={title} className="border-b border-brand-light/15 py-6 grid grid-cols-[3rem_1fr] gap-4">
                <span className="text-brand-primary tabular-nums">0{index + 1}</span>
                <div>
                  <h3 className="font-display font-semibold text-xl md:text-2xl">{title}</h3>
                  <p className="mt-2 text-brand-light/70 leading-relaxed">{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-28 max-w-3xl" aria-labelledby="contact-region">
          <h2 id="contact-region" className="font-display font-semibold text-3xl md:text-4xl">Vor Ort in Wuppertal, remote in ganz NRW.</h2>
          <p className="mt-6 text-lg leading-relaxed text-brand-light/75">
            Unser Sitz ist in Wuppertal. In Düsseldorf haben wir kein eigenes Büro – dort und im übrigen NRW arbeiten wir remote und kommen projektbezogen vor Ort, wenn es dem Projekt hilft.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to={routes.region} className="inline-flex rounded-full border border-brand-light/20 px-5 py-3 text-sm transition-colors hover:border-brand-primary hover:text-brand-primary">Leistungsgebiet ansehen →</Link>
            <Link to={routes.about} className="inline-flex rounded-full border border-brand-light/20 px-5 py-3 text-sm transition-colors hover:border-brand-primary hover:text-brand-primary">Über uns →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
