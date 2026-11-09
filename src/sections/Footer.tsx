import { useRef } from 'react'
import { Link } from 'react-router'
import { motion, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion'
import { scrollToTop } from '../lib/scroll'
import { siteConfig, copyrightNotice } from '../lib/siteConfig'
import { findService } from '../data/siteContent'
import { routes } from '../lib/routes'
import { trackEvent } from '../lib/analytics'
import LegalCockpitSeal from '../components/LegalCockpitSeal'

const MotionLink = motion.create(Link)

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
    <MotionLink
      ref={ref}
      to={routes.projectStart}
      data-cursor="Projekt starten"
      onClick={() => trackEvent('projectCtaClicked', { location: 'footer' })}
      onMouseMove={onMove}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      style={{ x: sx, y: sy }}
      className="group relative inline-flex items-center justify-center w-40 h-40 md:w-56 md:h-56 rounded-full bg-brand-primary text-brand-dark shrink-0"
    >
      <span className="absolute inset-2 rounded-full border border-brand-dark/20 transition-transform duration-500 group-hover:scale-110" />
      <span className="text-center text-[12px] md:text-sm font-semibold tracking-[0.12em] uppercase leading-relaxed">Projekt<br />besprechen</span>
    </MotionLink>
  )
}

const menu: { label: string; href: string }[] = [
  { label: 'Projekte', href: routes.projects },
  { label: 'Leistungen', href: routes.services },
  { label: 'GentleSuite', href: routes.gentlesuite },
  { label: 'Leistungsgebiet', href: routes.region },
  { label: 'Blog', href: routes.blog },
  { label: 'Projekt starten', href: routes.projectStart },
]

const footerServices = ['software', 'webapp', 'web', 'ai', 'crm', 'booking']
  .map((id) => findService(id))
  .filter((service): service is NonNullable<typeof service> => Boolean(service))

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] })
  const y = useTransform(scrollYProgress, [0, 1], [-120, 0])

  return (
    <footer id="contact" ref={ref} className="relative overflow-hidden bg-brand-dark">
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[70vw] h-[40vw] rounded-full bg-brand-primary opacity-[0.08] blur-[140px] pointer-events-none" />
      <motion.div style={{ y }} className="px-6 md:px-10 pt-28 md:pt-44 pb-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-14">
          <h2 className="font-display font-semibold leading-[0.88] tracking-[-0.02em]"><span className="block text-[17vw] lg:text-[11vw]">PROJEKT</span><span className="block text-[17vw] lg:text-[11vw] text-stroke">STARTEN</span></h2>
          <div className="lg:pr-[6vw] lg:pt-[6vw]"><ContactButton /></div>
        </div>

        <div className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-brand-light/15 pt-10">
          <div>
            <div className="text-[11px] tracking-[0.25em] uppercase text-brand-light/60 mb-4">Kontakt</div>
            <a href={`mailto:${siteConfig.email}`} data-cursor className="block hover:text-brand-primary transition-colors">{siteConfig.email}</a>
            <a href={`tel:${siteConfig.phone.e164}`} data-cursor className="block mt-1 hover:text-brand-primary transition-colors">{siteConfig.phone.display}</a>
            <Link to={routes.projectStart} data-cursor className="block mt-3 text-brand-primary hover:text-brand-light transition-colors" onClick={() => trackEvent('projectCtaClicked', { location: 'footer-kontakt' })}>Projekt starten ↗</Link>
          </div>
          <div>
            <div className="text-[11px] tracking-[0.25em] uppercase text-brand-light/60 mb-4">Region</div>
            <p>Deutschland</p><p className="mt-1 text-brand-light/70">Wuppertal / NRW</p>
            <Link to={routes.region} data-cursor className="block mt-3 text-brand-primary hover:text-brand-light transition-colors">Leistungsgebiet ansehen →</Link>
          </div>
          <div>
            <div className="text-[11px] tracking-[0.25em] uppercase text-brand-light/60 mb-4">Leistungen</div>
            {footerServices.map((service) => (
              <Link key={service.id} to={routes.service(service.slug)} data-cursor className="block mt-1 first:mt-0 hover:text-brand-primary transition-colors">{service.title}</Link>
            ))}
          </div>
          <nav aria-label="Footer-Navigation">
            <div className="text-[11px] tracking-[0.25em] uppercase text-brand-light/60 mb-4">Navigation</div>
            {menu.map(({ label, href }) => (
              <Link key={label} to={href} data-cursor className="block mt-1 first:mt-0 hover:text-brand-primary transition-colors">{label}</Link>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex justify-start md:justify-end">
          <LegalCockpitSeal />
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-[11px] tracking-[0.15em] uppercase text-brand-light/60 border-t border-brand-light/15 pt-6">
          <span>{copyrightNotice()}</span>
          <nav aria-label="Rechtliches" className="flex flex-wrap gap-4">
            <Link to={routes.legal.impressum} className="hover:text-brand-light">Impressum</Link>
            <Link to={routes.legal.datenschutz} className="hover:text-brand-light">Datenschutz</Link>
            <Link to={routes.legal.barrierefreiheit} className="hover:text-brand-light">Barrierefreiheit</Link>
          </nav>
          <button data-cursor onClick={() => scrollToTop(false)} className="hover:text-brand-light transition-colors">Nach oben ↑</button>
        </div>
      </motion.div>
    </footer>
  )
}
