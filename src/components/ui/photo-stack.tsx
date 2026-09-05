import { useState, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export interface PhotoStackItem {
  src: string
  name: string
  role?: string
  description?: string
}

interface InteractivePhotoStackProps {
  items: PhotoStackItem[]
  title?: ReactNode
}

const buildSpreadOffsets = (count: number) =>
  Array.from({ length: count }, (_, index) => {
    const angle = (index / count) * 2 * Math.PI - Math.PI / 2
    return {
      x: Math.cos(angle) * 90,
      y: Math.sin(angle) * 130,
      rotate: (index - (count - 1) / 2) * 8,
    }
  })

export function InteractivePhotoStack({ items, title }: InteractivePhotoStackProps) {
  const [isSpread, setIsSpread] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const selected = selectedIndex === null ? null : items[selectedIndex]
  const spreadOffsets = buildSpreadOffsets(items.length)

  const handleCardClick = (index: number) => {
    if (!isSpread) {
      setIsSpread(true)
      return
    }
    setSelectedIndex((current) => (current === index ? null : index))
  }

  return (
    <div>
      {title ? <div className="mb-8 font-display text-2xl font-semibold text-brand-dark md:text-3xl">{title}</div> : null}

      <div className="grid items-center gap-8 md:grid-cols-2">
        <div className="relative h-[28rem] md:h-[34rem]" aria-label="Teamprofile">
          {items.map((item, index) => {
            const isSelected = selectedIndex === index
            const offset = spreadOffsets[index]
            return (
              <button
                key={item.name}
                type="button"
                onClick={() => handleCardClick(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex((current) => (current === index ? null : current))}
                aria-pressed={isSelected}
                tabIndex={!isSpread && index !== 0 ? -1 : 0}
                aria-hidden={!isSpread && index !== 0}
                className="absolute left-1/2 top-1/2 h-96 w-64 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border border-brand-dark/15 bg-brand-light p-3 text-left shadow-xl transition-all duration-700 ease-out focus-visible:outline-2 focus-visible:outline-brand-secondary"
                style={{
                  zIndex: isSelected ? 30 : isSpread ? 20 - index : items.length - index + 10,
                  opacity: !isSpread && index !== 0 ? 0 : 1,
                  pointerEvents: !isSpread && index !== 0 ? 'none' : 'auto',
                  transform: !isSpread
                    ? `translate(-50%, -50%) translateY(${index * 6}px) scale(${1 - index * 0.03})`
                    : `translate(calc(-50% + ${offset.x}px), calc(-50% + ${offset.y}px)) rotate(${offset.rotate}deg) scale(${isSelected ? 1.05 : hoveredIndex === index ? 1.04 : 1})`,
                }}
              >
                <span className="flex h-full flex-col justify-between">
                  <img src={item.src} alt={item.name} className="h-64 w-full rounded-lg object-contain" />
                  <span>
                    <span className="block font-display text-2xl font-semibold text-brand-dark">{item.name}</span>
                    {item.role ? <span className="mt-1 block text-xs text-brand-dark/65">{item.role}</span> : null}
                    <span className="mt-2 block text-[11px] tracking-[0.12em] uppercase text-brand-dark/60">Profil ansehen ↗</span>
                  </span>
                </span>
              </button>
            )
          })}
        </div>

        <motion.div layout className="min-h-48 border-t border-brand-dark/15 pt-6">
          <AnimatePresence mode="wait">
            {selected ? (
              <motion.div key={selected.name} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35 }}>
                <h3 className="font-display text-3xl font-semibold text-brand-secondary md:text-4xl">{selected.name}</h3>
                {selected.role ? <p className="mt-2 text-sm text-brand-dark/60">{selected.role}</p> : null}
                {selected.description ? <p className="mt-5 leading-relaxed text-brand-dark/70">{selected.description}</p> : null}
                <button type="button" onClick={() => setSelectedIndex(null)} className="mt-7 text-[11px] uppercase tracking-[0.16em] text-brand-dark/60 hover:text-brand-secondary">Zur Auswahl zurück ↗</button>
              </motion.div>
            ) : (
              <motion.div key={isSpread ? 'spread-hint' : 'collapsed-hint'} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <p className="text-[11px] uppercase tracking-[0.2em] text-brand-dark/55">Auswahl</p>
                {isSpread ? (
                  <>
                    <p className="mt-4 font-display text-2xl font-semibold md:text-3xl">Wählen Sie ein Profil aus.</p>
                    <p className="mt-4 leading-relaxed text-brand-dark/65">Klicken Sie auf eine Karte, um die Rolle und den jeweiligen Fokus zu sehen.</p>
                  </>
                ) : (
                  <>
                    <p className="mt-4 font-display text-2xl font-semibold md:text-3xl">Lernen Sie das Team kennen.</p>
                    <p className="mt-4 leading-relaxed text-brand-dark/65">Klicken Sie auf das Bild, um das gesamte Team zu zeigen.</p>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}
