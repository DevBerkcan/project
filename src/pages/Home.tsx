import { useCallback, useState } from 'react'
import Preloader from '../components/Preloader'
import Hero from '../sections/Hero'
import Marquee from '../sections/Marquee'
import Manifesto from '../sections/Manifesto'
import Works from '../sections/Works'
import Services from '../sections/Services'
import Recognition from '../sections/Recognition'
import Products from '../sections/Products'
import Faq from '../sections/Faq'
import Footer from '../sections/Footer'
import Team from '@/sections/Team'

export default function Home() {
  const [loaded, setLoaded] = useState(false)
  const handleIntroDone = useCallback(() => setLoaded(true), [])

  return (
    <div className="grain bg-brand-dark text-brand-light min-h-screen">
      <Preloader onDone={handleIntroDone} />
      <main id="main" tabIndex={-1}>
        <Hero started={loaded} />
        <Marquee items={['Software', 'Web-Apps', 'Websites', 'KI', 'Automatisierung', 'UX/UI', 'Cloud', 'Azure', 'APIs']} dark />
        <Manifesto />
        <Works />
        <Marquee items={['Gentle Group Studios', 'Software', 'Design', 'Entwicklung', 'Betrieb', 'GentleSuite']} slow />
        <Services />
        <Products />
        <Team />
        <Recognition />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}
