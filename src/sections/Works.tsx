import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { solutionAreas } from '../data/siteContent'

export function ProjectArt({ art, className }: { art: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className ?? ''}`} style={{ background: art }}>
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgb(1 10 48 / 18%) 3px, rgb(1 10 48 / 18%) 4px)' }} />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
    </div>
  )
}

export default function Works() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState<number | null>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 180, damping: 24, mass: 0.5 })
  const sy = useSpring(my, { stiffness: 180, damping: 24, mass: 0.5 })
  const headerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: headerRef, offset: ['start end', 'end start'] })
  const hx = useTransform(scrollYProgress, [0, 1], ['4%', '-14%'])

  const onMove = (event: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    mx.set(event.clientX - rect.left)
    my.set(event.clientY - rect.top)
  }

  return (
    <section id="work" className="py-24 md:py-36 bg-brand-light text-brand-dark">
      <div ref={headerRef} className="overflow-hidden mb-14 md:mb-20">
        <motion.h2 style={{ x: hx }} className="font-display font-semibold text-[16vw] md:text-[11vw] leading-none whitespace-nowrap text-stroke-dark select-none">Selected Works — Selected Works</motion.h2>
      </div>
      <div className="px-6 md:px-10 flex items-baseline justify-between mb-6">
        <span className="text-[11px] tracking-[0.25em] uppercase text-brand-dark/60">02 — Work</span>
        <span className="text-[11px] tracking-[0.25em] uppercase text-brand-dark/60">Selected work</span>
      </div>
      <div ref={containerRef} className="relative" onMouseMove={onMove} onMouseLeave={() => setActive(null)}>
        <AnimatePresence>
          {active !== null && (
            <motion.div className="hidden md:block absolute z-20 w-[26vw] h-[17vw] pointer-events-none" style={{ left: sx, top: sy, x: '-50%', y: '-50%' }} initial={{ scale: 0.55, opacity: 0, rotate: -4 }} animate={{ scale: 1, opacity: 1, rotate: 2 }} exit={{ scale: 0.55, opacity: 0, rotate: 4 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}>
              <ProjectArt art={solutionAreas[active].art} className="w-full h-full rounded-md" />
            </motion.div>
          )}
        </AnimatePresence>
        {solutionAreas.map((area, index) => (
          <article key={area.title} onMouseEnter={() => setActive(index)} className="group block border-t border-brand-dark/15 last:border-b px-6 md:px-10">
            <div className="md:hidden pt-6"><ProjectArt art={area.art} className="w-full h-44 rounded-md" /></div>
            <div className="relative flex items-center justify-between gap-6 py-7 md:py-10">
              <div className="flex items-baseline gap-5 md:gap-10">
                <span className="text-xs text-brand-dark/60 tabular-nums">0{index + 1}</span>
                <h3 className="font-display font-semibold text-3xl md:text-6xl leading-none transition-all duration-500 md:group-hover:translate-x-6 md:group-hover:text-brand-secondary">{area.title}</h3>
              </div>
              <div className="flex items-center gap-6 md:gap-14 shrink-0">
                <span className="hidden lg:block text-[12px] tracking-[0.15em] uppercase text-brand-dark/60">{area.category}</span>
                <span className="hidden md:flex w-10 h-10 rounded-full border border-brand-dark/20 items-center justify-center transition-all duration-500 group-hover:bg-brand-secondary group-hover:border-brand-secondary group-hover:text-brand-dark">↗</span>
              </div>
            </div>
            <p className="max-w-xl pb-7 md:pb-10 pl-10 md:pl-20 text-brand-dark/70 leading-relaxed">{area.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
