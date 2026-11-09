import Footer from '../sections/Footer'
import { Link } from 'react-router'
import LegalCockpitSeal from '../components/LegalCockpitSeal'
import privacyHtml from '../data/legal/privacy.html?raw'

export type LegalPageId = 'impressum' | 'datenschutz' | 'barrierefreiheit'

const LABELS: Record<LegalPageId, string> = {
  impressum: 'Impressum',
  datenschutz: 'Datenschutz',
  barrierefreiheit: 'Barrierefreiheit',
}

function ProviderAddress() {
  return (
    <address className="not-italic">
      Berk-Can Atesoglu<br />
      Girardetstraße 17<br />
      42109 Wuppertal<br />
      Deutschland
    </address>
  )
}

function ImprintContent() {
  return (
    <div className="legal-copy mt-10 max-w-3xl space-y-12 text-base md:text-lg leading-relaxed text-brand-light">
      <section lang="de" aria-labelledby="imprint-de" className="space-y-8">
        <h2 id="imprint-de" className="font-display text-2xl md:text-3xl font-semibold">
          Anbieter:
        </h2>
        <div className="space-y-4">
          <ProviderAddress />
          <p>Umsatzsteuer-Identifikationsnummer: DE346263022</p>
          <p>Steuernummer: 132/5007/3899</p>
          <p>Telefonnummer: <a className="underline underline-offset-4 hover:text-brand-secondary" href="tel:+491754701892">+49 175 4701892</a></p>
          <p>E-Mail-Adresse: <a className="break-words underline underline-offset-4 hover:text-brand-secondary" href="mailto:office@gentlegroup.de">office@gentlegroup.de</a></p>
        </div>
        <div className="space-y-4">
          <h3 className="font-semibold text-xl">
            Verantwortlich für journalistisch-redaktionelle Inhalte:
          </h3>
          <ProviderAddress />
          <p>E-Mail-Adresse: <a className="break-words underline underline-offset-4 hover:text-brand-secondary" href="mailto:office@gentle-webdesign.com">office@gentle-webdesign.com</a></p>
        </div>
      </section>
      <div className="border-t border-brand-light/15 pt-8">
        <LegalCockpitSeal />
      </div>
    </div>
  )
}

export default function LegalPage({ id }: { id: LegalPageId }) {
  return (
    <div className="grain bg-brand-dark text-brand-light min-h-screen">
      <main id="main" tabIndex={-1} className="px-6 md:px-10 pt-40 pb-32 md:pt-52">
        <Link to="/" className="text-xs uppercase tracking-[0.2em] text-brand-light/60 hover:text-brand-primary">← Startseite</Link>
        <h1 className="mt-16 max-w-4xl font-display font-semibold text-5xl md:text-7xl leading-[0.95]">{LABELS[id]}</h1>
        {id === 'impressum' ? <ImprintContent /> : id === 'datenschutz' ? (
          // Static, reviewed HTML supplied by the site owner; never use visitor input here.
          <div className="privacy-copy mt-10 max-w-3xl text-base md:text-lg leading-relaxed text-brand-light" dangerouslySetInnerHTML={{ __html: privacyHtml }} />
        ) : (
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-brand-light/70">Inhalt in Vorbereitung.</p>
        )}
      </main>
      <Footer />
    </div>
  )
}
