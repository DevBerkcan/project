import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { motion, AnimatePresence } from 'framer-motion'
import { scrollToTop } from '../lib/scroll'
import { routes } from '../lib/routes'

// `href` targets a section on the home page; `route` is a standalone page.
const links: { label: string; index: string; href?: string; route?: string }[] = [
  { label: 'Leistungen', index: '01', route: routes.services },
  { label: 'Projekte', index: '02', route: routes.projects },
  { label: 'GentleSuite', index: '03', route: routes.gentlesuite },
  { label: 'Studio', index: '04', href: '#studio' },
  { label: 'Blog', index: '05', route: routes.blog },
  { label: 'Kontakt', index: '06', route: routes.projectStart },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const scrollTo = (href: string) => {
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, 500)
  }

  const go = (event: React.MouseEvent, link: { href?: string; route?: string }) => {
    event.preventDefault()
    setOpen(false)
    if (link.route) {
      navigate(link.route)
      return
    }
    const href = link.href!
    if (pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
      }, 900)
    } else {
      scrollTo(href)
    }
  }

  const goHome = (e: React.MouseEvent) => {
    e.preventDefault()
    if (pathname !== '/') {
      navigate('/')
    } else {
      scrollToTop(false)
    }
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[200] mix-blend-difference">
        <div className="flex items-center justify-between px-6 md:px-10 py-6">
          <a
            href="/"
            data-cursor
            onClick={goHome}
            className="brand-logo block"
          >
            <img
              src="/logo/gentle-group-studios-vector.svg"
              alt="Gentle Group Studios"
              width={1044}
              height={729}
              className="h-10 md:h-12 w-auto"
            />
          </a>
          <div className="flex items-center gap-8">
            <span className="hidden md:block text-[11px] tracking-[0.25em] uppercase text-white/60">Software — Design — Betrieb</span>
            <button
              data-cursor
              onClick={() => setOpen(!open)}
              className="flex flex-col items-end gap-[6px] w-10"
              aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
              aria-expanded={open}
              aria-controls="site-menu"
            >
              <motion.span
                className="block h-[2px] bg-white"
                animate={{ width: open ? 32 : 40, rotate: open ? 45 : 0, y: open ? 4 : 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block h-[2px] bg-white"
                animate={{ width: open ? 32 : 24, rotate: open ? -45 : 0, y: open ? -4 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="site-menu"
            aria-label="Hauptnavigation"
            className="fixed inset-0 z-[150] bg-brand-primary"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="h-full flex flex-col justify-center px-6 md:px-10">
              {links.map((link, i) => (
                <div key={link.label} className="overflow-hidden border-b border-brand-dark/15">
                  <motion.a
                    href={link.route ?? `/${link.href}`}
                    data-cursor
                    onClick={(event) => go(event, link)}
                    className="group flex items-baseline gap-4 md:gap-8 py-3 md:py-4 w-full text-left"
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '110%', transition: { duration: 0.4, delay: 0 } }}
                    transition={{ duration: 0.7, delay: 0.15 + i * 0.07, ease: [0.76, 0, 0.24, 1] }}
                  >
                    <span className="text-xs md:text-sm font-medium text-brand-dark/60 tabular-nums">
                      {link.index}
                    </span>
                    <span className="font-display font-medium text-[13vw] md:text-[7.5vw] leading-[0.95] text-brand-dark transition-transform duration-500 group-hover:translate-x-4 md:group-hover:translate-x-8">
                      {link.label}
                    </span>
                  </motion.a>
                </div>
              ))}
              <motion.div
                className="mt-10 flex flex-wrap gap-x-10 gap-y-3 text-[11px] tracking-[0.2em] uppercase text-brand-dark/70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.5 }}
              >
                <span>office@gentlegroup.de</span>
                <span>Deutschland</span>
                <span>Software & Design</span>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
