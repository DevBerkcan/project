import { Link } from 'react-router'
import type { BlogBlock } from '../data/blog'

export default function ArticleBody({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="max-w-2xl">
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'heading':
            return (
              <h2 key={index} className="mt-14 first:mt-0 font-display font-semibold text-3xl md:text-4xl">
                {block.text}
              </h2>
            )
          case 'paragraph':
            return (
              <p key={index} className="mt-6 text-lg leading-relaxed text-brand-light/80">
                {block.text}
              </p>
            )
          case 'list':
            return (
              <ul key={index} className="mt-6 space-y-3">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-3 text-lg leading-relaxed text-brand-light/80">
                    <span className="text-brand-primary" aria-hidden="true">↳</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )
          case 'quote':
            return (
              <blockquote
                key={index}
                className="mt-8 border-l-2 border-brand-primary pl-6 text-xl md:text-2xl font-display font-semibold leading-snug text-brand-light"
              >
                {block.text}
              </blockquote>
            )
          case 'link':
            return (
              <p key={index} className="mt-6 text-lg">
                <Link to={block.to} className="text-brand-primary underline underline-offset-4 hover:text-brand-secondary">{block.text} →</Link>
              </p>
            )
          default:
            return null
        }
      })}
    </div>
  )
}
