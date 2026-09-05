import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'

const text = 'Wir machen aus komplexen Geschäftsproblemen digitale Produkte, die verständlich beginnen, zuverlässig funktionieren und langfristig weiterentwickelt werden können.'

function Word({ word, progress, range }: { word: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.24, 1])
  const color = useTransform(progress, range, ['var(--color-brand-secondary)', 'var(--color-brand-light)'])
  return <motion.span style={{ opacity, color }} className="inline-block mr-[0.28em]">{word}</motion.span>
}

export default function Manifesto() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.45'] })
  const words = text.split(' ')

  return (
    <section id="studio" ref={ref} className="px-6 md:px-10 py-28 md:py-44">
      <div className="flex items-start gap-4 mb-12 md:mb-16">
        <span className="text-[11px] tracking-[0.25em] uppercase text-brand-light/60 mt-2">01 — Studio</span>
      </div>
      <p className="font-display font-semibold text-[7.2vw] md:text-[4.2vw] leading-[1.12] max-w-6xl">
        {words.map((word, index) => <Word key={`${word}-${index}`} word={word} progress={scrollYProgress} range={[index / words.length, (index + 1) / words.length]} />)}
      </p>
      <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-brand-light/15">
        {[
          ['Analyse', 'Wir hören zu.'],
          ['Konzeption', 'Wir schaffen Klarheit.'],
          ['Entwicklung', 'Wir bauen solide.'],
          ['Betrieb', 'Wir bleiben dran.'],
        ].map(([title, description]) => (
          <div key={title} className="bg-brand-dark py-10 md:py-14 px-6">
            <div className="font-display font-semibold text-3xl md:text-4xl text-brand-primary">{title}</div>
            <div className="mt-3 text-[11px] tracking-[0.12em] uppercase text-brand-light/60">{description}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
