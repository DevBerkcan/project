import { motion } from 'framer-motion'
import { processStages } from '../data/siteContent'

export default function Recognition() {
  return (
    <section className="px-6 md:px-10 py-24 md:py-36">
      <div className="flex items-baseline justify-between mb-14 md:mb-20">
        <span className="text-[11px] tracking-[0.25em] uppercase text-brand-light/60">05 — Prozess</span>
        <span className="text-[11px] tracking-[0.25em] uppercase text-brand-light/60">Klar von Anfang an</span>
      </div>
      <div className="grid md:grid-cols-2 gap-16 md:gap-10">
        <div>
          <h2 className="font-display font-semibold text-[10vw] md:text-[4.5vw] leading-[1.02]">Von der <span className="text-brand-primary">Idee</span><br /><span className="text-brand-light/60">bis zum Betrieb.</span></h2>
          <p className="mt-8 max-w-md text-brand-light/70 leading-relaxed">Wir arbeiten in nachvollziehbaren Etappen und machen Entscheidungen, Prioritäten und nächste Schritte sichtbar.</p>
        </div>
        <div>
          {processStages.map((stage, index) => (
            <motion.div key={stage} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }} className="flex items-center justify-between border-t border-brand-light/15 last:border-b py-5 md:py-6">
              <div className="flex items-center gap-5"><span className="text-brand-primary tabular-nums">0{index + 1}</span><span className="font-display text-lg md:text-2xl font-semibold">{stage}</span></div>
              <span className="text-brand-light/40" aria-hidden="true">↗</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
