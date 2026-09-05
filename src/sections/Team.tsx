import { InteractivePhotoStack } from '../components/ui/photo-stack'
import { teamProfiles } from '../data/siteContent'

export default function Team() {
  return (
    <section id="team" className="px-6 md:px-10 py-24 md:py-36 bg-brand-light text-brand-dark">
      <div className="flex items-baseline justify-between mb-14 md:mb-20">
        <span className="text-[11px] tracking-[0.25em] uppercase text-brand-dark/60">05 — Studio</span>
        <span className="text-[11px] tracking-[0.25em] uppercase text-brand-dark/60">Menschen & Rollen</span>
      </div>

      <div className="grid lg:grid-cols-12 gap-14 lg:gap-8 items-center">
        <div className="lg:col-span-4">
          <h2 className="font-display font-semibold text-[8vw] md:text-[3.5vw] leading-[0.95]">
            Das Team
            <span className="block text-brand-secondary">hinter der Arbeit.</span>
          </h2>
        </div>

        <div className="lg:col-span-8">
          <InteractivePhotoStack items={teamProfiles} />
        </div>
      </div>
    </section>
  )
}
