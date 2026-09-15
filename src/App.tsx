import { useEffect } from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router'
import Lenis from 'lenis'
import Home from './pages/Home'
import ProjectPage from './pages/ProjectPage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectStartPage from './pages/ProjectStartPage'
import LegalPage from './pages/LegalPage'
import RegionPage from './pages/RegionPage'
import ServicesIndexPage from './pages/ServicesIndexPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import BlogIndexPage from './pages/BlogIndexPage'
import BlogPostPage from './pages/BlogPostPage'
import Cursor from './components/Cursor'
import Nav from './components/Nav'
import { setLenis, scrollToTop } from './lib/scroll'
import Seo from './components/Seo'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    scrollToTop(true)
  }, [pathname])
  return null
}

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 1 })
    setLenis(lenis)
    let raf: number
    const loop = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
      setLenis(null)
    }
  }, [])

  return (
    <>
      <Cursor />
      <Nav />
      <Seo />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projekte" element={<ProjectsPage />} />
        <Route path="/projekt-starten" element={<ProjectStartPage />} />
        <Route path="/impressum" element={<LegalPage id="impressum" />} />
        <Route path="/datenschutz" element={<LegalPage id="datenschutz" />} />
        <Route path="/agb" element={<LegalPage id="agb" />} />
        <Route path="/barrierefreiheit" element={<LegalPage id="barrierefreiheit" />} />
        <Route path="/leistungsgebiet" element={<RegionPage />} />
        <Route path="/leistungen" element={<ServicesIndexPage />} />
        <Route path="/leistungen/:slug" element={<ServiceDetailPage />} />
        <Route path="/blog" element={<BlogIndexPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/projects" element={<Navigate to="/projekte" replace />} />
        <Route path="/projekte/:slug" element={<ProjectPage />} />
        <Route path="/work/:slug" element={<Navigate to="/projekte" replace />} />
        <Route path="*" element={<ProjectPage />} />
      </Routes>
    </>
  )
}
