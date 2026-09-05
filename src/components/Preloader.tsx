import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [reducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [count, setCount] = useState(() => reducedMotion ? 100 : 0)
  const [gone, setGone] = useState(reducedMotion)

  useEffect(() => {
    if (reducedMotion) {
      onDone()
      return
    }
    let raf: number
    const start = performance.now()
    const duration = 1800
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(Math.round(eased * 100))
      if (p < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setTimeout(() => {
          setGone(true)
          setTimeout(onDone, 750)
        }, 250)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [onDone, reducedMotion])

  return (
    <AnimatePresence>
      {!gone && (
        <motion.div
          className="fixed inset-0 z-[10000] bg-brand-dark flex flex-col justify-between p-6 md:p-10"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex justify-between text-[11px] tracking-[0.25em] uppercase text-brand-light/60">
            <span className="brand-logo">Gentle Group<sup>®</sup></span>
            <span>Digitale Lösungen</span>
          </div>
          <div className="flex items-end justify-between">
            <motion.p
              className="text-[11px] tracking-[0.25em] uppercase text-brand-light/60 mb-4"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.4, repeat: Infinity }}
            >
              Digitale Lösungen laden
            </motion.p>
            <span className="font-display font-semibold text-[22vw] md:text-[16vw] leading-[0.8] text-brand-light tabular-nums">
              {count}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
