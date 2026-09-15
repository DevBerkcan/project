import { Link } from 'react-router'
import { siteConfig } from '../lib/siteConfig'

export default function ProjectStartPage() {
  return (
    <div className="grain bg-brand-dark text-brand-light min-h-screen">
      <main className="px-6 md:px-10 pt-40 pb-32 md:pt-52">
        <Link to="/" className="text-xs uppercase tracking-[0.2em] text-brand-light/60 hover:text-brand-primary">← Startseite</Link>
        <p className="mt-16 text-xs uppercase tracking-[0.25em] text-brand-primary">Projektanfrage</p>
        <h1 className="mt-6 max-w-5xl font-display font-semibold text-6xl md:text-[10vw] leading-[0.88]">Lassen Sie uns starten.</h1>
        <p className="mt-10 max-w-2xl text-xl leading-relaxed text-brand-light/80">Beschreiben Sie kurz, welche Abläufe, Produkte oder Websites Sie digital weiterentwickeln möchten. Gentle Group Studios prüft die Anfrage und meldet sich über den passenden nächsten Schritt.</p>
        <a href={`mailto:${siteConfig.email}?subject=Projektanfrage%20Gentle%20Group%20Studios`} className="mt-12 inline-flex rounded-full bg-brand-primary px-7 py-4 text-sm uppercase tracking-[0.14em] text-brand-dark hover:bg-brand-secondary">Anfrage per E-Mail senden ↗</a>
        <p className="mt-5 text-sm text-brand-light/60">{siteConfig.email}</p>
      </main>
    </div>
  )
}
