import { Link, useParams } from 'react-router'
import { workProjects } from '../data/siteContent'

export default function ProjectPage() {
  const { slug } = useParams()
  const project = workProjects.find((entry) => entry.slug === slug)

  if (project) {
    return (
      <div className="grain bg-brand-dark text-brand-light min-h-screen">
        <main className="px-6 md:px-10 pt-40 pb-32 md:pt-52">
          <Link to="/projekte" className="text-xs uppercase tracking-[0.2em] text-brand-light/60 hover:text-brand-primary">← Alle Projekte</Link>
          <p className="mt-16 text-xs uppercase tracking-[0.25em] text-brand-primary">{project.year} · Fallstudie</p>
          <h1 className="mt-6 max-w-5xl font-display font-semibold text-6xl md:text-[10vw] leading-[0.88]">{project.title}</h1>
          <p className="mt-10 max-w-3xl text-xl md:text-2xl leading-relaxed text-brand-light/80">{project.description}</p>
          <div className="mt-16 grid gap-10 border-t border-brand-light/15 pt-8 md:grid-cols-3">
            <div><h2 className="text-xs uppercase tracking-[0.2em] text-brand-light/50">Leistungsbereiche</h2><ul className="mt-4 space-y-2 text-brand-light/80">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></div>
            <div className="md:col-span-2"><h2 className="text-xs uppercase tracking-[0.2em] text-brand-light/50">Projektkontext</h2><p className="mt-4 max-w-2xl leading-relaxed text-brand-light/75">Gentle Group Studios entwickelte diese digitale Lösung als konkreten Beitrag zu den beschriebenen Abläufen. Veröffentlicht werden nur Inhalte und Ergebnisse, die als Projektinformationen vorliegen.</p></div>
          </div>
          <Link to="/projekte" className="mt-16 inline-flex rounded-full border border-brand-light/20 px-6 py-4 text-xs uppercase tracking-[0.18em] hover:border-brand-primary hover:text-brand-primary">Weitere Projekte ansehen</Link>
        </main>
      </div>
    )
  }

  return (
    <div className="grain bg-brand-dark text-brand-light min-h-screen flex flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="text-[11px] tracking-[0.25em] uppercase text-brand-light/60">Referenzen in Vorbereitung</p>
      <h1 className="font-display font-semibold text-5xl md:text-7xl max-w-4xl">Freigegebene Projekte werden hier ergänzt.</h1>
      <p className="max-w-xl text-brand-light/70 leading-relaxed">Wir veröffentlichen nur Arbeiten, deren Inhalte, Namen und Ergebnisse geprüft und freigegeben sind.</p>
      <Link to="/" data-cursor className="mt-4 inline-flex items-center gap-3 border border-brand-light/20 rounded-full px-8 py-4 text-[12px] tracking-[0.2em] uppercase transition-colors duration-500 hover:bg-brand-primary hover:text-brand-dark hover:border-brand-primary">Zur Startseite <span aria-hidden="true">↗</span></Link>
    </div>
  )
}
