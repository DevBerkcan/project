import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion'
import { scrollToTop } from '../lib/scroll'

function ContactButton() {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 })

  const onMove = (event: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((event.clientX - (rect.left + rect.width / 2)) * 0.4)
    y.set((event.clientY - (rect.top + rect.height / 2)) * 0.4)
  }

  return (
    <motion.a
      ref={ref}
      href="https://www.gentlegroup.de/project-questionnaire"
      target="_blank"
      rel="noreferrer"
      data-cursor="Projekt starten"
      onMouseMove={onMove}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      style={{ x: sx, y: sy }}
      className="group relative inline-flex items-center justify-center w-40 h-40 md:w-56 md:h-56 rounded-full bg-brand-primary text-brand-dark shrink-0"
    >
      <span className="absolute inset-2 rounded-full border border-brand-dark/20 transition-transform duration-500 group-hover:scale-110" />
      <span className="text-center text-[12px] md:text-sm font-semibold tracking-[0.12em] uppercase leading-relaxed">Projekt<br />besprechen</span>
    </motion.a>
  )
}

const menu = [
  ['Work', '#work'],
  ['Studio', '#studio'],
  ['Services', '#services'],
  ['Contact', '#contact'],
]

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] })
  const y = useTransform(scrollYProgress, [0, 1], [-120, 0])

  return (
    <footer id="contact" ref={ref} className="relative overflow-hidden bg-brand-dark">
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[70vw] h-[40vw] rounded-full bg-brand-primary opacity-[0.08] blur-[140px] pointer-events-none" />
      <motion.div style={{ y }} className="px-6 md:px-10 pt-28 md:pt-44 pb-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-14">
          <h2 className="font-display font-semibold leading-[0.88] tracking-[-0.02em]"><span className="block text-[17vw] lg:text-[11vw]">LASS UNS</span><span className="block text-[17vw] lg:text-[11vw] text-stroke">STARTEN</span></h2>
          <div className="lg:pr-[6vw] lg:pt-[6vw]"><ContactButton /></div>
        </div>

        <div className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-brand-light/15 pt-10">
          <div>
            <div className="text-[11px] tracking-[0.25em] uppercase text-brand-light/60 mb-4">Kontakt</div>
            <a href="mailto:office@gentlegroup.de" data-cursor className="block hover:text-brand-primary transition-colors">office@gentlegroup.de</a>
            <a href="https://www.gentlegroup.de/project-questionnaire" target="_blank" rel="noreferrer" data-cursor className="block mt-3 text-brand-primary hover:text-brand-light transition-colors">Projektfragebogen ↗</a>
          </div>
          <div>
            <div className="text-[11px] tracking-[0.25em] uppercase text-brand-light/60 mb-4">Region</div>
            <p>Deutschland</p><p className="mt-1 text-brand-light/70">Wuppertal / NRW</p>
          </div>
          <div>
            <div className="text-[11px] tracking-[0.25em] uppercase text-brand-light/60 mb-4">Fokus</div>
            <p>Software</p><p className="mt-1">Design</p><p className="mt-1">Weiterentwicklung</p>
          </div>
          <div>
            <div className="text-[11px] tracking-[0.25em] uppercase text-brand-light/60 mb-4">Navigation</div>
            {menu.map(([label, href]) => <button key={label} data-cursor onClick={() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })} className="block mt-1 first:mt-0 text-left hover:text-brand-primary transition-colors">{label}</button>)}
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 text-[11px] tracking-[0.15em] uppercase text-brand-light/60 border-t border-brand-light/15 pt-6">
          <span>© 2026 Gentle Group®</span>
          <div className="flex flex-wrap gap-4"><a href="https://www.gentlegroup.de/impressum" target="_blank" rel="noreferrer" className="hover:text-brand-light">Impressum</a><a href="https://www.gentlegroup.de/datenschutzerklaerung" target="_blank" rel="noreferrer" className="hover:text-brand-light">Datenschutz</a><a href="https://www.gentlegroup.de/agb" target="_blank" rel="noreferrer" className="hover:text-brand-light">AGB</a><a href="https://www.gentlegroup.de/barrierefreiheit" target="_blank" rel="noreferrer" className="hover:text-brand-light">Barrierefreiheit</a></div>
          <button data-cursor onClick={() => scrollToTop(false)} className="hover:text-brand-light transition-colors">Nach oben ↑</button>
        </div>
      </motion.div>
    </footer>
  )
}
