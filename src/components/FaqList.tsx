import type { FaqItem } from '../data/faqContent'

const tones = {
  light: { border: 'border-brand-dark/15', answer: 'text-brand-dark/70' },
  dark: { border: 'border-brand-light/15', answer: 'text-brand-light/75' },
} as const

/** `tone` describes the section background the list sits on. */
export default function FaqList({ items, tone = 'light' }: { items: FaqItem[]; tone?: keyof typeof tones }) {
  const colors = tones[tone]
  return (
    <div className={`border-t ${colors.border}`}>
      {items.map((faq) => (
        <details key={faq.question} className={`group border-b ${colors.border} py-6 md:py-7`}>
          <summary className="flex cursor-pointer items-center justify-between gap-6 font-display text-xl md:text-2xl font-semibold marker:content-none">
            {faq.question}
            <span className="shrink-0 text-brand-secondary transition-transform group-open:rotate-45" aria-hidden="true">+</span>
          </summary>
          <p className={`mt-4 max-w-xl ${colors.answer} leading-relaxed`}>{faq.answer}</p>
        </details>
      ))}
    </div>
  )
}
