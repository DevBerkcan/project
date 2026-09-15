import { faqs } from '../data/faqContent'
import FaqList from '../components/FaqList'

export default function Faq() {
  return (
    <section id="faq" className="px-6 md:px-10 py-24 md:py-36 bg-brand-light text-brand-dark">
      <div className="flex items-baseline justify-between mb-14 md:mb-20">
        <span className="text-[11px] tracking-[0.25em] uppercase text-brand-dark/60">07 — FAQ</span>
        <span className="text-[11px] tracking-[0.25em] uppercase text-brand-dark/60">Häufige Fragen</span>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
        <div className="lg:col-span-5">
          <h2 className="font-display font-semibold text-[10vw] md:text-[4.5vw] leading-[0.95]">
            Fragen zur
            <span className="block text-brand-secondary">Zusammenarbeit.</span>
          </h2>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <FaqList items={faqs} />
        </div>
      </div>
    </section>
  )
}
