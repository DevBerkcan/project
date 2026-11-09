import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  // Decided after mount so the hydrated markup matches the prerendered HTML.
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [label, setLabel] = useState('')

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 400, damping: 35, mass: 0.6 })
  const springY = useSpring(y, { stiffness: 400, damping: 35, mass: 0.6 })

  useEffect(() => {
    const isFine = window.matchMedia('(pointer: fine)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time client capability check
    setEnabled(isFine && !reducedMotion)
  }, [])

  useEffect(() => {
    if (!enabled) return

    document.documentElement.classList.add('cursor-none-desktop')

    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const target = (e.target as HTMLElement).closest('[data-cursor], #cc--main a, #cc--main button:not(:disabled), #cc--main label, .consent-settings-link')
      if (target) {
        setHovering(true)
        // A bare `data-cursor` prop renders as "true"; only explicit text is a label.
        const value = target.getAttribute('data-cursor')
        setLabel(value && value !== 'true' ? value : '')
      } else {
        setHovering(false)
        setLabel('')
      }
    }
    window.addEventListener('mousemove', move)
    return () => {
      window.removeEventListener('mousemove', move)
      document.documentElement.classList.remove('cursor-none-desktop')
    }
  }, [enabled, x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden="true"
      className="custom-cursor fixed top-0 left-0 pointer-events-none mix-blend-difference"
      style={{ x: springX, y: springY }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full bg-white -translate-x-1/2 -translate-y-1/2"
        animate={{
          width: hovering ? (label ? 72 : 28) : 8,
          height: hovering ? (label ? 72 : 28) : 8,
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 28 }}
      >
        {label && hovering && (
          <span className="text-black text-[10px] font-medium tracking-[0.1em] uppercase select-none">
            {label}
          </span>
        )}
      </motion.div>
    </motion.div>
  )
}
