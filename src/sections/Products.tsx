import { Link } from 'react-router'
import { products } from '../data/siteContent'
import { routes } from '../lib/routes'

export default function Products() {
  return (
    <section id="products" className="px-6 md:px-10 py-24 md:py-36 bg-brand-light text-brand-dark">
      <div className="flex items-baseline justify-between mb-14 md:mb-20">
        <span className="text-[11px] tracking-[0.25em] uppercase text-brand-dark/60">04 — GentleSuite</span>
        <span className="text-[11px] tracking-[0.25em] uppercase text-brand-dark/60">Produkte</span>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
        <div className="lg:col-span-5">
          <h2 className="font-display font-semibold text-[12vw] md:text-[7vw] leading-[0.9]">
            Werkzeuge für
            <span className="block text-brand-secondary">digitale Arbeit.</span>
          </h2>
          <p className="mt-8 max-w-md text-brand-dark/70 leading-relaxed">
            GentleSuite bündelt digitale Produkte für klare Abläufe, bessere Kommunikation und weniger Reibung im Alltag.
          </p>
          <Link to={routes.gentlesuite} data-cursor className="mt-6 inline-flex text-sm uppercase tracking-[0.12em] text-brand-secondary hover:text-brand-primary">Alle Produkte ansehen →</Link>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 border-t border-brand-dark/15">
          {products.map((product) => (
            <Link key={product.name} to={`${routes.gentlesuite}#${product.name.toLowerCase()}`} data-cursor className="group block border-b border-brand-dark/15 py-7 md:py-9">
              <div className="flex items-baseline justify-between gap-6">
                <h3 className="font-display font-semibold text-3xl md:text-5xl transition-colors group-hover:text-brand-secondary">{product.name}</h3>
                <span className="text-brand-secondary text-xl" aria-hidden="true">↗</span>
              </div>
              <p className="mt-4 max-w-xl text-brand-dark/70 leading-relaxed">{product.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span key={tag} className="text-[11px] tracking-[0.1em] uppercase border border-brand-dark/15 rounded-full px-3 py-1.5">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
