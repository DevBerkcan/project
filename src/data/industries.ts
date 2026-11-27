import type { FaqItem } from './faqContent'

export interface IndustryPage {
  slug: string
  /** Short name used in breadcrumbs and navigation. */
  name: string
  seoTitle: string
  metaDescription: string
  eyebrow: string
  h1: string
  lead: string
  challenges: { heading: string; text: string }[]
  /** Service ids from siteContent that solve the challenges above. */
  serviceIds: string[]
  /** Real, published case studies only. */
  projectSlugs: string[]
  postSlugs: string[]
  faqs: FaqItem[]
}

// Only industries with published case studies get a page; no claims beyond those projects.
export const industries: IndustryPage[] = [
  {
    slug: 'beauty-kosmetik',
    name: 'Beauty & Kosmetik',
    seoTitle: 'Software & Websites für Kosmetikstudios | Gentle Group Studios',
    metaDescription:
      'Online-Terminbuchung, Studioverwaltung, digitale Preisrechner und Websites für Kosmetik-, Beauty- und Ästhetikstudios – entwickelt in Wuppertal.',
    eyebrow: 'Branche — Beauty & Kosmetik',
    h1: 'Software & Websites für Kosmetik- und Beautystudios',
    lead:
      'Kosmetik-, Beauty- und Ästhetikstudios arbeiten mit vielen Terminen, individuellen Behandlungen und einem Team, das gleichzeitig beraten, behandeln und verwalten muss. Wir entwickeln digitale Lösungen, die genau diese Abläufe abbilden: von der Online-Terminbuchung über die interne Verwaltung bis zum Kostenvoranschlag als PDF.',
    challenges: [
      {
        heading: 'Termine laufen über Telefon, Messenger und Kalender',
        text: 'Ein individuelles Buchungssystem lässt Kundinnen und Kunden Leistung und Mitarbeitende selbst online wählen. Termine, Zeitblockierungen und Kundendaten liegen anschließend zentral in einer Verwaltung statt in mehreren Kanälen.',
      },
      {
        heading: 'Jede Behandlung wird einzeln kalkuliert',
        text: 'Ein digitaler Preisrechner stellt Behandlungskosten aus gepflegten Leistungen, Kategorien und Preisen zusammen und erzeugt daraus einen Kostenvoranschlag als PDF. Das macht Preise nachvollziehbar und spart wiederholte Handarbeit.',
      },
      {
        heading: 'Mitarbeitende brauchen ihren eigenen Überblick',
        text: 'Rollenbasierte Zugänge geben dem Team einen Kalender mit den eigenen Terminen, während die Studioleitung Leistungen, Preise und Personal zentral verwaltet.',
      },
      {
        heading: 'Die Website führt nicht zur Buchung',
        text: 'Eine schnelle, mobil optimierte Studio-Website erklärt Behandlungen verständlich und führt Interessierte direkt in die Online-Buchung oder zur Anfrage.',
      },
    ],
    serviceIds: ['booking', 'web', 'software'],
    projectSlugs: ['skinbloom-buchungssystem', 'skinbloom-preisrechner'],
    postSlugs: ['digitale-buchungssysteme-fuer-dienstleister', 'digitale-preisrechner-vom-angebot-zum-pdf'],
    faqs: [
      {
        question: 'Brauchen wir ein eigenes Buchungssystem oder reicht ein Standard-Tool?',
        answer:
          'Ein Standard-Tool reicht, solange Ihre Abläufe zu dessen Vorgaben passen. Ein individuelles System lohnt sich, wenn Buchung, interne Verwaltung, Mitarbeiterrollen oder Preisberechnung so zusammenspielen müssen, wie es Ihr Studio tatsächlich arbeitet.',
      },
      {
        question: 'Kann die Online-Buchung in unsere bestehende Website eingebunden werden?',
        answer:
          'Ja. Die Buchung kann als eigener Bereich laufen und von Ihrer Website verlinkt oder eingebunden werden. Ob wir dafür Ihre bestehende Website anpassen oder eine neue entwickeln, klären wir im Erstgespräch.',
      },
      {
        question: 'Für welche Studios eignen sich diese Lösungen?',
        answer:
          'Für Kosmetik-, Beauty- und Ästhetikstudios sowie andere terminbasierte Dienstleister mit mehreren Leistungen und Mitarbeitenden, zum Beispiel Friseur- oder Barbersalons.',
      },
      {
        question: 'Wie sieht ein solches Projekt in der Praxis aus?',
        answer:
          'Für Skinbloom Aesthetics haben wir ein Buchungssystem mit interner Studioverwaltung und einen digitalen Preisrechner mit PDF-Kostenvoranschlag entwickelt. Beide Fallstudien finden Sie auf dieser Seite.',
      },
    ],
  },
]

export function findIndustry(slug: string): IndustryPage | undefined {
  return industries.find((industry) => industry.slug === slug)
}
