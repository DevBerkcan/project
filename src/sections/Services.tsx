import { useState } from 'react'
import { Link } from 'react-router'
import { motion } from 'framer-motion'
import { services, solutions } from '../data/siteContent'
import { routes } from '../lib/routes'

export default function Services() {
  const [open, setOpen] = useState<number | null>(1)

  return (
    <section id="services" className="px-6 md:px-10 py-24 md:py-36">
      <div className="flex items-baseline justify-between mb-14 md:mb-20">
        <span className="text-[11px] tracking-[0.25em] uppercase text-brand-light/60">03 — Leistungen</span>
        <span className="text-[11px] tracking-[0.25em] uppercase text-brand-light/60">Was wir entwickeln</span>
      </div>
      <h2 className="font-display font-semibold text-[11vw] md:text-[6.5vw] leading-[0.95] mb-16 md:mb-24">
        Digitale <span className="text-stroke">Substanz</span><br />für echte Aufgaben<span className="text-brand-primary">.</span>
      </h2>
      <div>
        {services.map((service, index) => {
          const isOpen = open === index
          return (
            <div key={service.id} className="border-t border-brand-light/15 last:border-b">
              <button
                id={`service-trigger-${service.id}`}
                data-cursor
                onClick={() => setOpen(isOpen ? null : index)}
                className="w-full flex items-center justify-between gap-6 py-7 md:py-9 text-left group"
                aria-expanded={isOpen}
                aria-controls={`service-panel-${service.id}`}
              >
                <div className="flex min-w-0 items-baseline gap-6 md:gap-12">
                  <span className={`text-sm tabular-nums transition-colors duration-300 ${isOpen ? 'text-brand-primary' : 'text-brand-light/60'}`}>{service.number}</span>
                  <span className={`min-w-0 hyphens-auto font-display font-semibold text-2xl md:text-5xl transition-all duration-500 ${isOpen ? 'translate-x-2 md:translate-x-4 text-brand-primary' : 'group-hover:translate-x-2 md:group-hover:translate-x-4'}`}>{service.title}</span>
                </div>
                <motion.span
                  className={`shrink-0 w-11 h-11 md:w-14 md:h-14 rounded-full border flex items-center justify-center text-xl transition-colors duration-500 ${isOpen ? 'bg-brand-primary border-brand-primary text-brand-dark' : 'border-brand-light/20'}`}
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >+</motion.span>
              </button>
              {/* Panels stay mounted so every description and link is part of the prerendered HTML. */}
              <motion.div
                id={`service-panel-${service.id}`}
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
                role="region"
                aria-labelledby={`service-trigger-${service.id}`}
                inert={!isOpen}
              >
                <div className="pb-10 md:pb-12 md:pl-[4.5rem] lg:pl-[7.5rem] max-w-3xl">
                  <p className="text-brand-light/70 leading-relaxed text-base md:text-lg">{service.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.tags.map((tag) => <span key={tag} className="text-[11px] tracking-[0.1em] uppercase border border-brand-light/20 rounded-full px-4 py-2 text-brand-light/80">{tag}</span>)}
                  </div>
                  <Link to={routes.service(service.slug)} data-cursor className="mt-6 inline-flex text-sm uppercase tracking-[0.12em] text-brand-primary hover:text-brand-secondary">{service.title}: mehr erfahren →</Link>
                </div>
              </motion.div>
            </div>
          )
        })}
      </div>
      <div className="mt-14 md:mt-20 grid gap-6 md:grid-cols-12">
        <h3 className="md:col-span-3 text-[11px] tracking-[0.25em] uppercase text-brand-light/60">Schwerpunkte</h3>
        <ul className="md:col-span-9 flex flex-wrap gap-3">
          {solutions.map((solution) => (
            <li key={solution.id}>
              <Link to={routes.service(solution.slug)} data-cursor className="inline-flex rounded-full border border-brand-light/20 px-5 py-3 text-sm text-brand-light/85 transition-colors hover:border-brand-primary hover:text-brand-primary">{solution.title}</Link>
            </li>
          ))}
          <li>
            <Link to={routes.services} data-cursor className="inline-flex rounded-full px-5 py-3 text-sm uppercase tracking-[0.12em] text-brand-primary hover:text-brand-secondary">Alle Leistungen →</Link>
          </li>
        </ul>
      </div>
    </section>
  )
}
