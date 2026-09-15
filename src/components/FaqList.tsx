import type { FaqItem } from '../data/faqContent'

export default function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="border-t border-brand-dark/15">
      {items.map((faq) => (
        <details key={faq.question} className="group border-b border-brand-dark/15 py-6 md:py-7">
          <summary className="flex cursor-pointer items-center justify-between gap-6 font-display text-xl md:text-2xl font-semibold marker:content-none">
            {faq.question}
            <span className="shrink-0 text-brand-secondary transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="mt-4 max-w-xl text-brand-dark/70 leading-relaxed">{faq.answer}</p>
        </details>
      ))}
    </div>
  )
}
