import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { AnimatePresence, motion } from 'framer-motion'
import { siteConfig } from '../lib/siteConfig'
import { routes } from '../lib/routes'
import { trackEvent } from '../lib/analytics'

const PROJECT_TYPES = ['Software', 'Website', 'KI / Automatisierung', 'Mobile App', 'Sonstiges'] as const

type FormState = {
  projectType: string
  description: string
  budget: string
  startDate: string
  name: string
  company: string
  email: string
}

const EMPTY_FORM: FormState = {
  projectType: PROJECT_TYPES[0],
  description: '',
  budget: '',
  startDate: '',
  name: '',
  company: '',
  email: '',
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const STEPS = ['Projektart', 'Anforderungen', 'Rahmenbedingungen', 'Kontakt', 'Zusammenfassung'] as const

function buildMailto(form: FormState): string {
  const subject = `Projektanfrage: ${form.projectType} — ${form.name || 'Gentle Group Studios'}`
  const bodyLines = [
    `Projektart: ${form.projectType}`,
    '',
    'Projektbeschreibung:',
    form.description,
    '',
    form.budget ? `Budgetrahmen: ${form.budget}` : null,
    form.startDate ? `Gewünschter Start: ${form.startDate}` : null,
    '',
    `Name: ${form.name}`,
    form.company ? `Unternehmen: ${form.company}` : null,
    `E-Mail: ${form.email}`,
  ].filter((line): line is string => line !== null)

  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`
}

const inputClass = 'mt-1.5 w-full rounded-xl border border-brand-light/20 bg-transparent px-4 py-2.5 text-brand-light placeholder:text-brand-light/40 focus-visible:outline-2 focus-visible:outline-brand-primary focus-visible:outline-offset-2'
const labelClass = 'text-xs uppercase tracking-[0.15em] text-brand-light/60'

export default function ProjectStartPage() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState<FormState>(EMPTY_FORM)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [sent, setSent] = useState(false)

  useEffect(() => {
    trackEvent('contactStarted')
  }, [])

  const update = (field: keyof FormState) => (value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const validateStep = (index: number): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (index === 1 && !form.description.trim()) next.description = 'Bitte beschreiben Sie kurz Ihr Vorhaben.'
    if (index === 3) {
      if (!form.name.trim()) next.name = 'Bitte geben Sie Ihren Namen an.'
      if (!form.email.trim() || !EMAIL_PATTERN.test(form.email)) next.email = 'Bitte geben Sie eine gültige E-Mail-Adresse an.'
    }
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const goNext = () => {
    if (!validateStep(step)) return
    setStep((current) => Math.min(current + 1, STEPS.length - 1))
  }

  const goBack = () => setStep((current) => Math.max(current - 1, 0))

  const handleSubmit = () => {
    trackEvent('contactSubmitted', { projectType: form.projectType })
    window.location.href = buildMailto(form)
    setSent(true)
  }

  const progress = ((step + 1) / STEPS.length) * 100

  return (
    <div className="grain bg-brand-dark text-brand-light h-dvh overflow-hidden flex flex-col">
      <main id="main" tabIndex={-1} className="flex-1 min-h-0 flex flex-col justify-center px-6 md:px-10 pt-24 md:pt-28 pb-6 overflow-y-auto">
        <div className="mx-auto w-full max-w-2xl">
          <div className="flex items-center justify-between gap-4">
            <Link to={routes.home} className="text-xs uppercase tracking-[0.2em] text-brand-light/60 hover:text-brand-primary">← Startseite</Link>
            <span className="text-xs uppercase tracking-[0.25em] text-brand-primary">Projektanfrage</span>
          </div>

          <h1 className="mt-3 font-display font-semibold text-3xl md:text-5xl leading-[0.95]">Lassen Sie uns starten.</h1>
          {step === 0 && (
            <p className="mt-3 max-w-xl text-brand-light/75 leading-relaxed">In wenigen Schritten zu Ihren Anforderungen und Ihrem Budgetrahmen.</p>
          )}

          <div className="mt-6">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.15em] text-brand-light/60">
              <span>Frage {step + 1} / {STEPS.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="mt-2 h-1 w-full rounded-full bg-brand-light/15" role="progressbar" aria-valuenow={Math.round(progress)} aria-valuemin={0} aria-valuemax={100}>
              <motion.div className="h-1 rounded-full bg-brand-primary" animate={{ width: `${progress}%` }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6"
              >
                {step === 0 && (
                  <div>
                    <h2 className="font-display font-semibold text-xl md:text-2xl">Worum geht es?</h2>
                    <div className="mt-4 flex flex-wrap gap-2.5">
                      {PROJECT_TYPES.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => update('projectType')(type)}
                          className={`rounded-full border px-4 py-2.5 text-sm transition-colors ${form.projectType === type ? 'border-brand-primary bg-brand-primary text-brand-dark' : 'border-brand-light/20 text-brand-light hover:border-brand-primary'}`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 1 && (
                  <div>
                    <h2 className="font-display font-semibold text-xl md:text-2xl">Was möchten Sie umsetzen?</h2>
                    <label htmlFor="description" className="sr-only">Projektbeschreibung</label>
                    <textarea
                      id="description"
                      autoFocus
                      rows={4}
                      className={inputClass}
                      placeholder="Welchen Ablauf, welches Produkt oder welche Website möchten Sie umsetzen?"
                      value={form.description}
                      onChange={(event) => update('description')(event.target.value)}
                      aria-invalid={Boolean(errors.description)}
                      aria-describedby={errors.description ? 'description-error' : undefined}
                    />
                    {errors.description && <p id="description-error" className="mt-1.5 text-sm text-brand-secondary">{errors.description}</p>}
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <h2 className="font-display font-semibold text-xl md:text-2xl">Rahmenbedingungen (optional)</h2>
                    <div className="mt-4 grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="budget" className={labelClass}>Budgetrahmen</label>
                        <input id="budget" type="text" autoFocus className={inputClass} placeholder="z. B. 10.000–20.000 €" value={form.budget} onChange={(event) => update('budget')(event.target.value)} />
                      </div>
                      <div>
                        <label htmlFor="startDate" className={labelClass}>Gewünschter Start</label>
                        <input id="startDate" type="text" className={inputClass} placeholder="z. B. Q1 2027" value={form.startDate} onChange={(event) => update('startDate')(event.target.value)} />
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <h2 className="font-display font-semibold text-xl md:text-2xl">Ihre Kontaktdaten</h2>
                    <div className="mt-4 space-y-4">
                      <div>
                        <label htmlFor="name" className={labelClass}>Name *</label>
                        <input
                          id="name"
                          type="text"
                          autoFocus
                          className={inputClass}
                          value={form.name}
                          onChange={(event) => update('name')(event.target.value)}
                          aria-invalid={Boolean(errors.name)}
                          aria-describedby={errors.name ? 'name-error' : undefined}
                        />
                        {errors.name && <p id="name-error" className="mt-1.5 text-sm text-brand-secondary">{errors.name}</p>}
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="company" className={labelClass}>Unternehmen (optional)</label>
                          <input id="company" type="text" className={inputClass} value={form.company} onChange={(event) => update('company')(event.target.value)} />
                        </div>
                        <div>
                          <label htmlFor="email" className={labelClass}>E-Mail *</label>
                          <input
                            id="email"
                            type="email"
                            className={inputClass}
                            value={form.email}
                            onChange={(event) => update('email')(event.target.value)}
                            aria-invalid={Boolean(errors.email)}
                            aria-describedby={errors.email ? 'email-error' : undefined}
                          />
                          {errors.email && <p id="email-error" className="mt-1.5 text-sm text-brand-secondary">{errors.email}</p>}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div>
                    <h2 className="font-display font-semibold text-xl md:text-2xl">Zusammenfassung</h2>
                    <dl className="mt-4 max-h-[26vh] overflow-y-auto divide-y divide-brand-light/15 border-t border-b border-brand-light/15">
                      {[
                        ['Projektart', form.projectType],
                        ['Anforderungen', form.description],
                        ['Budgetrahmen', form.budget || '—'],
                        ['Gewünschter Start', form.startDate || '—'],
                        ['Name', form.name],
                        ['Unternehmen', form.company || '—'],
                        ['E-Mail', form.email],
                      ].map(([label, value]) => (
                        <div key={label} className="py-2 grid grid-cols-3 gap-4">
                          <dt className="text-xs uppercase tracking-[0.15em] text-brand-light/50">{label}</dt>
                          <dd className="col-span-2 text-sm text-brand-light/85 leading-relaxed whitespace-pre-wrap">{value}</dd>
                        </div>
                      ))}
                    </dl>

                    {sent ? (
                      <p className="mt-5 text-brand-primary">Ihr E-Mail-Programm sollte sich mit der vorausgefüllten Anfrage geöffnet haben. Falls nicht, senden Sie die Angaben gerne direkt an {siteConfig.email}.</p>
                    ) : (
                      <>
                        <button type="button" onClick={handleSubmit} className="mt-5 inline-flex rounded-full bg-brand-primary px-6 py-3 text-sm uppercase tracking-[0.14em] text-brand-dark hover:bg-brand-secondary">Anfrage per E-Mail senden ↗</button>
                        <p className="mt-2.5 text-sm text-brand-light/60">Öffnet Ihr E-Mail-Programm mit einer vorausgefüllten Nachricht an {siteConfig.email}.</p>
                      </>
                    )}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {!sent && (
              <div className="mt-6 flex items-center justify-between">
                <button type="button" onClick={goBack} disabled={step === 0} className="text-sm uppercase tracking-[0.14em] text-brand-light/60 hover:text-brand-primary disabled:opacity-30 disabled:pointer-events-none">← Zurück</button>
                {step < STEPS.length - 1 && (
                  <button type="button" onClick={goNext} className="inline-flex rounded-full border border-brand-light/20 px-5 py-2.5 text-sm uppercase tracking-[0.14em] hover:border-brand-primary hover:text-brand-primary">Weiter →</button>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
