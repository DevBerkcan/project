import { Link } from 'react-router'

export default function ProjectPage() {
  return (
    <div className="grain bg-brand-dark text-brand-light min-h-screen flex flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="text-[11px] tracking-[0.25em] uppercase text-brand-light/60">Referenzen in Vorbereitung</p>
      <h1 className="font-display font-semibold text-5xl md:text-7xl max-w-4xl">Freigegebene Projekte werden hier ergänzt.</h1>
      <p className="max-w-xl text-brand-light/70 leading-relaxed">Wir veröffentlichen nur Arbeiten, deren Inhalte, Namen und Ergebnisse geprüft und freigegeben sind.</p>
      <Link to="/" data-cursor className="mt-4 inline-flex items-center gap-3 border border-brand-light/20 rounded-full px-8 py-4 text-[12px] tracking-[0.2em] uppercase transition-colors duration-500 hover:bg-brand-primary hover:text-brand-dark hover:border-brand-primary">Zur Startseite <span aria-hidden="true">↗</span></Link>
    </div>
  )
}
