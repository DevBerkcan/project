import { Link } from 'react-router'
import { regionFaqs } from '../data/faqContent'
import FaqList from '../components/FaqList'

export default function RegionPage() {
  return (
    <div className="grain bg-brand-dark text-brand-light min-h-screen">
      <main className="px-6 md:px-10 pt-40 pb-32 md:pt-52">
        <Link to="/" className="text-xs uppercase tracking-[0.2em] text-brand-light/60 hover:text-brand-primary">← Startseite</Link>
        <p className="mt-16 text-xs uppercase tracking-[0.25em] text-brand-primary">Leistungsgebiet</p>
        <h1 className="mt-6 max-w-5xl font-display font-semibold text-6xl md:text-[9vw] leading-[0.88]">Wuppertal, Düsseldorf<br /><span className="text-stroke">& Nordrhein-Westfalen.</span></h1>
        <p className="mt-10 max-w-3xl text-xl leading-relaxed text-brand-light/80">Gentle Group Studios ist in Wuppertal ansässig und entwickelt individuelle Software, Web-Apps, Websites und KI-Automatisierungen für Unternehmen in Wuppertal, Düsseldorf und Nordrhein-Westfalen. Wir haben kein eigenes Büro in Düsseldorf — die Zusammenarbeit läuft remote und, wenn es sinnvoll ist, projektbezogen vor Ort.</p>

        <div className="mt-20 max-w-2xl">
          <h2 className="font-display font-semibold text-3xl md:text-4xl">Häufige Fragen zur Zusammenarbeit in der Region.</h2>
          <div className="mt-10">
            <FaqList items={regionFaqs} />
          </div>
        </div>

        <Link to="/projekt-starten" className="mt-16 inline-flex rounded-full bg-brand-primary px-7 py-4 text-sm uppercase tracking-[0.14em] text-brand-dark hover:bg-brand-secondary">Projekt starten ↗</Link>
      </main>
    </div>
  )
}
