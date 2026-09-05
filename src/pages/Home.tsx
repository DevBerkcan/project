import { useState } from 'react'
import Preloader from '../components/Preloader'
import Hero from '../sections/Hero'
import Marquee from '../sections/Marquee'
import Manifesto from '../sections/Manifesto'
import Works from '../sections/Works'
import Services from '../sections/Services'
import Recognition from '../sections/Recognition'
import Products from '../sections/Products'
import Team from '../sections/Team'
import Footer from '../sections/Footer'

export default function Home() {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="grain bg-brand-dark text-brand-light min-h-screen">
      <Preloader onDone={() => setLoaded(true)} />
      <main>
        <Hero started={loaded} />
        <Marquee items={['Software', 'Web-Apps', 'Websites', 'KI', 'Automatisierung', 'UX/UI', 'Cloud', 'APIs']} dark />
        <Manifesto />
        <Works />
        <Marquee items={['Gentle Group®', 'Software', 'Design', 'Entwicklung', 'Betrieb', 'GentleSuite']} slow />
        <Services />
        <Products />
        <Team />
        <Recognition />
      </main>
      <Footer />
    </div>
  )
}
