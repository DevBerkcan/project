import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const line1 = 'DIGITALE'
const line2 = 'LÖSUNGEN'

function Letters({ text, delay, started }: { text: string; delay: number; started: boolean }) {
  return (
    <span className="inline-block overflow-hidden pb-[0.06em] -mb-[0.06em]">
      {text.split('').map((character, index) => (
        <motion.span
          key={`${character}-${index}`}
          className="inline-block"
          initial={{ y: '115%', rotate: 6 }}
          animate={started ? { y: 0, rotate: 0 } : {}}
          transition={{ duration: 0.9, delay: delay + index * 0.035, ease: [0.22, 1, 0.36, 1] }}
        >
          {character}
        </motion.span>
      ))}
    </span>
  )
}

export default function Hero({ started }: { started: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 220])
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0])

  return (
    <section id="top" ref={ref} className="relative min-h-screen flex flex-col justify-end px-6 md:px-10 pb-8 pt-32 overflow-hidden">
      <div className="absolute top-[-30%] right-[-15%] w-[60vw] h-[60vw] rounded-full bg-brand-primary opacity-[0.08] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-brand-secondary opacity-[0.08] blur-[120px] pointer-events-none" />

      <motion.div style={{ y, opacity }} className="relative">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 mb-6 md:mb-10">
          <motion.p
            className="max-w-md text-base leading-relaxed text-brand-light/70"
            initial={{ opacity: 0, y: 20 }}
            animate={started ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            Gentle Group Studios entwickelt individuelle Software, Web-Apps, Websites, KI-Lösungen und Automatisierungen für Unternehmen.
          </motion.p>
          <motion.a
            href="https://www.gentlegroup.de/project-questionnaire"
            target="_blank"
            rel="noreferrer"
            data-cursor="Projekt besprechen"
            className="inline-flex w-fit items-center gap-3 rounded-full border border-brand-light/20 px-5 py-3 text-[11px] tracking-[0.15em] uppercase text-brand-light transition-colors hover:bg-brand-primary hover:text-brand-dark hover:border-brand-primary"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={started ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            Projekt besprechen <span aria-hidden="true">↗</span>
          </motion.a>
        </div>

        <h1 className="font-display font-semibold leading-[0.85] tracking-[-0.02em] select-none">
          <span className="block text-[15.5vw] md:text-[13vw]"><Letters text={line1} delay={0.15} started={started} /></span>
          <span className="block text-[15.5vw] md:text-[13vw] text-stroke"><Letters text={line2} delay={0.45} started={started} /></span>
        </h1>

        <motion.div
          className="mt-8 md:mt-12 flex flex-wrap justify-between gap-4 border-t border-brand-light/15 pt-5 text-[11px] tracking-[0.2em] uppercase text-brand-light/60"
          initial={{ opacity: 0 }}
          animate={started ? { opacity: 1 } : {}}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          <span>Software / Design / Betrieb</span>
          <span className="hidden sm:inline">Von der Idee bis zum Produkt</span>
          <a href="#services" className="hover:text-brand-primary transition-colors">Leistungen entdecken ↓</a>
        </motion.div>
      </motion.div>
    </section>
  )
}
