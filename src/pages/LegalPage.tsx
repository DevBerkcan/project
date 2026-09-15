import { Link } from 'react-router'

export type LegalPageId = 'impressum' | 'datenschutz' | 'agb' | 'barrierefreiheit'

const LABELS: Record<LegalPageId, string> = {
  impressum: 'Impressum',
  datenschutz: 'Datenschutz',
  agb: 'AGB',
  barrierefreiheit: 'Barrierefreiheit',
}

export default function LegalPage({ id }: { id: LegalPageId }) {
  return (
    <div className="grain bg-brand-dark text-brand-light min-h-screen">
      <main className="px-6 md:px-10 pt-40 pb-32 md:pt-52">
        <Link to="/" className="text-xs uppercase tracking-[0.2em] text-brand-light/60 hover:text-brand-primary">← Startseite</Link>
        <h1 className="mt-16 max-w-4xl font-display font-semibold text-5xl md:text-7xl leading-[0.95]">{LABELS[id]}</h1>
        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-brand-light/70">Inhalt in Vorbereitung.</p>
      </main>
    </div>
  )
}
