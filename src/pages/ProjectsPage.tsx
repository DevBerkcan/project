import { Link } from 'react-router'
import { projectArchive } from '../data/projectArchive'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-brand-dark text-brand-light">
      <main>
        <section className="px-6 md:px-10 pt-40 pb-24 md:pt-52 md:pb-36">
          <div className="flex flex-wrap items-end justify-between gap-8 border-b border-brand-light/15 pb-8">
            <div>
              <p className="text-[11px] tracking-[0.25em] uppercase text-brand-light/60">Archive — Work</p>
              <h1 className="mt-6 font-display font-semibold text-[16vw] md:text-[10vw] leading-[0.85] tracking-[-0.03em]">All<br /><span className="text-stroke">projects</span></h1>
            </div>
            <p className="max-w-sm text-brand-light/70 leading-relaxed">Ein vollständiger Überblick über veröffentlichte Projekte, digitale Produkte und technische Lösungen.</p>
          </div>
        </section>

        <section className="px-6 md:px-10 pb-32">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {projectArchive.map((project, index) => (
              <article key={project.title} className="group border-t border-brand-light/15 py-8 md:py-10">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-baseline gap-4">
                    <span className="text-xs text-brand-light/50 tabular-nums">{String(index + 1).padStart(2, '0')}</span>
                    <h2 className="font-display font-semibold text-3xl md:text-5xl leading-none transition-colors duration-300 group-hover:text-brand-primary">{project.title}</h2>
                  </div>
                  <a href={project.href} target="_blank" rel="noreferrer" aria-label={`${project.title} live ansehen`} className="shrink-0 text-brand-light/60 transition-colors hover:text-brand-primary">↗</a>
                </div>
                <p className="mt-6 max-w-xl text-brand-light/70 leading-relaxed">{project.description}</p>
                <div className="mt-6 grid sm:grid-cols-2 gap-6 border-t border-brand-light/10 pt-5">
                  <div>
                    <p className="text-[11px] tracking-[0.2em] uppercase text-brand-light/50 mb-3">Technologien</p>
                    <div className="flex flex-wrap gap-2">{project.technologies.map((technology) => <span key={technology} className="text-xs text-brand-light/80">{technology}</span>)}</div>
                  </div>
                  <div>
                    <p className="text-[11px] tracking-[0.2em] uppercase text-brand-light/50 mb-3">Leistungen</p>
                    <ul className="space-y-1 text-sm text-brand-light/70">{project.services.map((service) => <li key={service}>↳ {service}</li>)}</ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="px-6 md:px-10 py-24 bg-brand-light text-brand-dark">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div><p className="text-[11px] tracking-[0.25em] uppercase text-brand-dark/60">Nächster Schritt</p><h2 className="mt-4 font-display font-semibold text-4xl md:text-6xl">Ein Projekt besprechen.</h2></div>
            <a href="https://www.gentlegroup.de/project-questionnaire" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full bg-brand-primary px-6 py-4 text-sm uppercase tracking-[0.12em] hover:bg-brand-secondary transition-colors">Projekt starten ↗</a>
          </div>
        </section>
      </main>
      <footer className="px-6 md:px-10 py-8 border-t border-brand-light/15 flex flex-wrap justify-between gap-4 text-[11px] tracking-[0.15em] uppercase text-brand-light/60"><Link to="/" className="hover:text-brand-primary">← Zur Startseite</Link><span>© 2026 Gentle Group®</span></footer>
    </div>
  )
}
