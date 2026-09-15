import { Link } from 'react-router'
import { blogPosts } from '../data/blog'

export default function BlogIndexPage() {
  const categories = Array.from(new Set(blogPosts.map((post) => post.category)))

  return (
    <div className="min-h-screen bg-brand-dark text-brand-light">
      <main>
        <section className="px-6 md:px-10 pt-40 pb-24 md:pt-52 md:pb-36">
          <div className="flex flex-wrap items-end justify-between gap-8 border-b border-brand-light/15 pb-8">
            <div>
              <p className="text-[11px] tracking-[0.25em] uppercase text-brand-light/60">Wissen & Einblicke</p>
              <h1 className="mt-6 font-display font-semibold text-[16vw] md:text-[10vw] leading-[0.85] tracking-[-0.03em]">Der<br /><span className="text-stroke">Blog</span></h1>
            </div>
            <p className="max-w-sm text-brand-light/70 leading-relaxed">Artikel zu individueller Softwareentwicklung, Webdesign, KI &amp; Automatisierung sowie SEO &amp; GEO — verankert in echten Projekten und Leistungen.</p>
          </div>
        </section>

        {categories.map((category) => (
          <section key={category} className="px-6 md:px-10 pb-20">
            <p className="text-[11px] tracking-[0.25em] uppercase text-brand-light/50 border-b border-brand-light/15 pb-4 mb-6">{category}</p>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {blogPosts.filter((post) => post.category === category).map((post) => (
                <article key={post.slug} className="group border-t border-brand-light/15 py-8 md:py-10">
                  <h2 className="font-display font-semibold text-2xl md:text-3xl leading-tight transition-colors duration-300 group-hover:text-brand-primary">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="mt-4 max-w-xl text-brand-light/70 leading-relaxed">{post.excerpt}</p>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>
      <footer className="px-6 md:px-10 py-8 border-t border-brand-light/15 flex flex-wrap justify-between gap-4 text-[11px] tracking-[0.15em] uppercase text-brand-light/60">
        <Link to="/" className="hover:text-brand-primary">← Zur Startseite</Link>
        <span>© 2026 Gentle Group Studios</span>
      </footer>
    </div>
  )
}
