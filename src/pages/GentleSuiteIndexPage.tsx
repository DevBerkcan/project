import { useEffect } from 'react'
import { Link } from 'react-router'
import { products } from '../data/siteContent'
import { routes } from '../lib/routes'
import { trackEvent } from '../lib/analytics'

export default function GentleSuiteIndexPage() {
  useEffect(() => {
    for (const product of products) trackEvent('gentlesuiteProductViewed', { name: product.name })
  }, [])

  return (
    <div className="min-h-screen bg-brand-dark text-brand-light">
      <main>
        <section className="px-6 md:px-10 pt-40 pb-24 md:pt-52 md:pb-36">
          <div className="flex flex-wrap items-end justify-between gap-8 border-b border-brand-light/15 pb-8">
            <div>
              <p className="text-[11px] tracking-[0.25em] uppercase text-brand-light/60">Eigene Produkte</p>
              <h1 className="mt-6 font-display font-semibold text-[16vw] md:text-[10vw] leading-[0.85] tracking-[-0.03em]">Gentle<br /><span className="text-stroke">Suite</span></h1>
            </div>
            <p className="max-w-sm text-brand-light/70 leading-relaxed">Während Gentle Group Studios individuelle Lösungen für einzelne Kunden entwickelt, ist GentleSuite unsere eigene Produktfamilie — Werkzeuge, die wir selbst bauen und weiterentwickeln.</p>
          </div>
        </section>

        <section className="px-6 md:px-10 pb-32">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {products.map((product) => (
              <article key={product.name} id={product.name.toLowerCase()} className="scroll-mt-32 border-t border-brand-light/15 py-8 md:py-10">
                <h2 className="font-display font-semibold text-3xl md:text-5xl leading-none">{product.name}</h2>
                <p className="mt-6 max-w-xl text-brand-light/70 leading-relaxed">{product.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {product.tags.map((tag) => <span key={tag} className="text-xs text-brand-light/80">{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="px-6 md:px-10 py-24 bg-brand-light text-brand-dark">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div><p className="text-[11px] tracking-[0.25em] uppercase text-brand-dark/60">Interesse an einem dieser Tools?</p><h2 className="mt-4 font-display font-semibold text-4xl md:text-6xl">Sprechen wir darüber.</h2></div>
            <Link to={routes.projectStart} className="inline-flex items-center gap-3 rounded-full bg-brand-primary px-6 py-4 text-sm uppercase tracking-[0.12em] hover:bg-brand-secondary transition-colors">Projekt starten ↗</Link>
          </div>
        </section>
      </main>
      <footer className="px-6 md:px-10 py-8 border-t border-brand-light/15 flex flex-wrap justify-between gap-4 text-[11px] tracking-[0.15em] uppercase text-brand-light/60">
        <Link to={routes.home} className="hover:text-brand-primary">← Zur Startseite</Link>
        <span>© 2026 Gentle Group Studios</span>
      </footer>
    </div>
  )
}
