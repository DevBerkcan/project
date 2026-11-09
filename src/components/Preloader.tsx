import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Shared with the inline script in index.html, which hides the preloader
// before first paint once it has been shown in this browser session.
const INTRO_SEEN_KEY = 'gg-intro-seen'

function shouldSkipIntro(): boolean {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return true
  if (document.documentElement.dataset.introSeen) return true
  try {
    return sessionStorage.getItem(INTRO_SEEN_KEY) === '1'
  } catch {
    return false
  }
}

function markIntroSeen() {
  try {
    sessionStorage.setItem(INTRO_SEEN_KEY, '1')
  } catch {
    // Storage can be unavailable (private mode); the intro then simply replays.
  }
}

export default function Preloader({ onDone }: { onDone: () => void }) {
  // Initial state matches the prerendered HTML; the skip decision happens after hydration.
  const [count, setCount] = useState(0)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    if (shouldSkipIntro()) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- client-only decision after hydration
      setGone(true)
      onDone()
      return
    }
    markIntroSeen()
    let raf: number
    let hideTimeout: ReturnType<typeof setTimeout>
    const start = performance.now()
    const duration = 900
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(Math.round(eased * 100))
      if (p < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        hideTimeout = setTimeout(() => {
          setGone(true)
          // Start the hero while the curtain lifts instead of after it.
          onDone()
        }, 100)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(hideTimeout)
    }
  }, [onDone])

  return (
    <AnimatePresence>
      {!gone && (
        <motion.div
          className="preloader fixed inset-0 z-[10000] bg-brand-dark flex flex-col justify-between p-6 md:p-10"
          aria-hidden="true"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex justify-between text-[11px] tracking-[0.25em] uppercase text-brand-light/60">
            <img
              src="/logo/gentle-group-studios-vector.svg"
              alt=""
              width={1044}
              height={729}
              className="h-10 md:h-12 w-auto"
            />
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
