# Gentle Group Studios - Repository Instructions

This file is binding for every AI agent and every Codex task in this repository. Read it before analyzing, planning, generating, or editing code. Apply these rules to all relevant subdirectories unless a more specific `AGENTS.md` adds stricter instructions.

## 1. Brand identity

- Brand name: **Gentle Group Studios**
- Short name, where space is limited: **Gentle Group**
- Do not use the former name **Gentle Webdesign** in new UI, metadata, assets, copy, or code unless it is explicitly required for a migration or historical reference.
- Brand positioning: a premium digital product studio for software, web applications, high-quality websites, AI solutions, and automation.
- Brand impression: precise, modern, calm, trustworthy, ambitious, human, and technically excellent.

## 2. Mandatory color system

Use semantic design tokens. Do not scatter raw hex values throughout components.

| Token | Color | HEX | RGB | HSL | Intended use |
| --- | --- | --- | --- | --- | --- |
| `--color-brand-primary` | Aquamarine Green | `#01FFA9` | `1, 255, 169` | `160 100% 50%` | Primary actions, active states, highlights, focus accents |
| `--color-brand-secondary` | Tropical Indigo | `#A97AFF` | `169, 122, 255` | `261 100% 74%` | Secondary accent, gradients, selected decorative highlights |
| `--color-brand-dark` | Oxford Blue | `#010A30` | `1, 10, 48` | `229 96% 10%` | Main dark background, dark text, navigation, footer |
| `--color-brand-light` | Ghost White | `#F0EFF4` | `240, 239, 244` | `252 19% 95%` | Main light background, light surfaces, text on dark backgrounds |

Reference values:

- Aquamarine Green: CMYK `100, 0, 34, 0`; LAB `89, -69, 27`
- Tropical Indigo: CMYK `34, 52, 0, 0`; LAB `61, 46, -60`
- Oxford Blue: CMYK `98, 79, 0, 81`; LAB `4, 10, -25`
- Ghost White: CMYK `2, 2, 0, 4`; LAB `95, 1, -2`

Suggested CSS foundation:

```css
:root {
  --color-brand-primary: #01ffa9;
  --color-brand-secondary: #a97aff;
  --color-brand-dark: #010a30;
  --color-brand-light: #f0eff4;

  --color-background: var(--color-brand-light);
  --color-foreground: var(--color-brand-dark);
  --color-surface: #ffffff;
  --color-primary-foreground: var(--color-brand-dark);
  --color-secondary-foreground: var(--color-brand-dark);
  --color-border: rgb(1 10 48 / 14%);
  --color-muted: rgb(1 10 48 / 68%);
  --color-focus: var(--color-brand-primary);
}
```

### Color rules

- Oxford Blue and Ghost White are the dominant foundation colors.
- Aquamarine Green is the primary conversion and interaction color; use it deliberately rather than flooding entire pages with it.
- Tropical Indigo is a supporting accent and must not compete with the primary CTA.
- Preferred gradient: `linear-gradient(135deg, #01FFA9 0%, #A97AFF 100%)`.
- Gradients are decorative accents, not default backgrounds for long text sections.
- Never rely on color alone to communicate status or meaning.
- Maintain WCAG 2.2 AA contrast for normal text, controls, and important UI states.
- Do not place Ghost White body text directly on Aquamarine Green; prefer Oxford Blue text.
- Test every newly introduced color combination with an automated contrast check where possible.

## 3. Logo system

- Official wordmark: **Gentle Group Studios**.
- Preserve the recognisable handwritten `GW` monogram from the source identity where an existing official asset is used.
- The preferred modernized lockup combines the monogram with the new wordmark.
- Primary light version: Oxford Blue wordmark on Ghost White or white, with Aquamarine Green monogram/accent.
- Primary dark version: Ghost White wordmark on Oxford Blue, with Aquamarine Green monogram/accent.
- Tropical Indigo may appear as a restrained secondary detail or gradient endpoint.
- Do not stretch, skew, rotate, outline, recolor arbitrarily, add drop shadows, or recreate the logo with an unrelated font.
- Preserve the logo's aspect ratio.
- Minimum clear space around the full logo: at least the visual height of the monogram stroke width multiplied by four.
- Provide horizontal, stacked, monochrome, dark-background, and icon-only variants when preparing production assets.
- Use SVG for UI wherever possible, PNG only when raster output is required, and include an accessible text alternative.
- The logo alt text should normally be `Gentle Group Studios` and must not include words such as "image" or "logo".

## 4. Typography

- Use a clean, contemporary grotesk sans-serif with excellent screen readability.
- Preferred family: **Geist Sans**; fallback: `Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`.
- Preferred monospace family: **Geist Mono** for code, technical labels, and small data accents only.
- Headings should feel confident and editorial, using strong weight and compact line-height without excessive all-caps.
- Body copy must remain calm and highly readable.
- Use fluid typography with `clamp()` where appropriate.
- Recommended hierarchy:
  - Display/H1: `clamp(2.75rem, 7vw, 7rem)`, weight 600-750, line-height 0.95-1.05
  - H2: `clamp(2rem, 4vw, 4.5rem)`, weight 600-700
  - H3: `clamp(1.4rem, 2vw, 2rem)`, weight 600
  - Body: `1rem-1.125rem`, line-height 1.55-1.7
  - Eyebrow/label: small, medium weight, restrained letter spacing
- Avoid condensed all-caps typography for long text. It may only be used sparingly for labels or the official logo asset.

## 5. Visual language

- Favor generous whitespace, clear grids, strong typographic hierarchy, precise alignment, and premium editorial composition.
- Use Oxford Blue for immersive dark sections and Ghost White for breathable light sections.
- Cards should be clean and purposeful, with restrained borders and minimal shadows.
- Corners may be softly rounded but must remain consistent through shared radius tokens.
- Prefer subtle depth, thin borders, soft glows, and controlled color accents over generic heavy shadows.
- Imagery should communicate craftsmanship, technology, collaboration, and real business outcomes.
- Avoid generic stock imagery, random neon effects, visual clutter, excessive glassmorphism, and decorative elements without purpose.
- Icons should use one consistent family and stroke style.

## 6. Motion and interaction

- Motion should feel smooth, premium, and intentional.
- Use motion to clarify hierarchy, progression, or feedback, not merely to decorate.
- Keep common UI transitions around 150-300 ms. Larger editorial entrances may be slower when justified.
- Prefer transform and opacity animations for performance.
- Support `prefers-reduced-motion` and ensure that content remains fully usable with animation disabled.
- Never delay access to essential content for an intro animation.
- Buttons and links require clear hover, focus-visible, active, loading, and disabled states.
- Do not introduce scroll hijacking or motion that harms accessibility or mobile usability.

## 7. Voice and messaging

- Write in clear, direct, confident language focused on customer outcomes.
- Explain technical competence in plain language.
- Emphasize business value: better processes, scalable software, stronger digital experiences, measurable efficiency, and sustainable growth.
- Avoid empty superlatives, vague agency jargon, exaggerated promises, and unexplained technical buzzwords.
- Calls to action should be concrete, such as `Projekt besprechen`, `Kostenloses Erstgespräch`, or `Lösung entdecken`.
- Keep naming consistent: always write `Gentle Group Studios` with this capitalization.
- Use one chosen form of address consistently across the site; do not mix `du` and `Sie`.

## 8. UI implementation rules

- Create or reuse centralized design tokens for colors, typography, spacing, radii, shadows, layers, and motion.
- Prefer semantic token names over visual names in components, for example `background`, `foreground`, `primary`, `surface`, and `border`.
- Build reusable primitives for buttons, links, inputs, headings, sections, containers, cards, badges, and dialogs.
- Do not duplicate style strings across multiple components when a shared primitive or variant is appropriate.
- Preserve responsive behavior from small mobile screens through large desktops.
- Every interactive element must be keyboard accessible and have a visible focus state.
- Use semantic HTML before adding ARIA. ARIA supplements semantics; it does not replace them.
- Images require meaningful alternative text unless they are purely decorative.
- Forms require programmatic labels, useful validation feedback, and accessible error states.
- Maintain or improve Core Web Vitals. Optimize fonts, images, animation, hydration, and JavaScript weight.

## 9. Repository behavior for Codex

Before changing code for any prompt:

1. Read this complete file.
2. Inspect the existing design tokens, theme, global styles, logo assets, metadata, and shared UI components.
3. Identify which requested changes affect the brand system.
4. Reuse existing sound abstractions before creating new ones.
5. Preserve unrelated user changes and inspect Git status before editing.
6. State any assumption that materially affects design or brand behavior.

When implementing a branding task:

1. Create a small plan and inventory affected files.
2. Update the central tokens/theme first.
3. Update shared primitives and layout components next.
4. Replace outdated brand names and assets carefully, including metadata, manifests, structured data, email templates, and accessibility labels where applicable.
5. Verify representative pages at mobile, tablet, and desktop widths.
6. Run lint, typecheck, tests, and production build.
7. Check browser console errors, broken assets, contrast, keyboard focus, and reduced motion.
8. Summarize modified files, verification results, and anything not verified.

## 9.1 Current website migration baseline

The current public reference is `https://gentlegroup2027website.vercel.app/`. Treat its composition and motion language as a visual starting point, not as an authoritative source for company facts.

- Preserve the strong editorial direction: immersive dark canvas, oversized typography, outlined display words, horizontal marquees, fine rules, numbered sections, generous vertical rhythm, and deliberate motion.
- Replace the current acid-lime accent consistently with Aquamarine Green `#01FFA9`.
- Replace near-black foundations with Oxford Blue `#010A30` where technically and visually appropriate; retain enough tonal separation between background, surface, border, and type.
- Introduce Tropical Indigo `#A97AFF` only as a controlled secondary accent, for example on selected hover states, small highlights, or the Aquamarine-to-Indigo brand gradient.
- Replace off-white interface text and surfaces with the Ghost White family based on `#F0EFF4` while maintaining accessible contrast.
- Standardize all visible naming from `Gentle Group`, `Gentle Group Studio`, and former `Gentle Webdesign` variants to **Gentle Group Studios**, except when the intentionally shorter **Gentle Group** wordmark is approved for the compact navigation lockup.
- Retain the current site's premium, cinematic atmosphere. Do not turn it into a generic SaaS template, colorful gradient page, or card-heavy dashboard.
- Reposition service language toward the actual offer: custom software, web applications, high-quality websites, AI solutions, automations, UX/UI, and scalable digital products.
- The primary conversion goal is a qualified project inquiry. Ensure a concrete CTA is visible early and repeated naturally near the end.

### Current content that requires verification

Do not publish, preserve as fact, or reinforce the following current-site claims unless the repository or user provides evidence:

- `Est. 2016`
- `10+ Years of practice`
- `140 Projects shipped`
- `32 Industry awards`
- `12 Humans, zero egos`
- offices or studios in Paris, Tokyo, New York, Le Marais, Shibuya, or SoHo
- the French telephone number `+33 1 00 00 00 00`
- Awwwards, FWA, CSSDA, D&AD, or Webby wins and nomination counts
- invented portfolio projects such as Solstice, Meridian Bank, Kiosko Records, Aether Parfums, and Northwind AI
- availability statements such as `Available for Q3 2026`

When evidence is missing, replace fabricated social proof with truthful, useful content or clearly marked development placeholders that cannot be mistaken for published facts. Never manufacture clients, awards, testimonials, offices, metrics, certifications, or case-study results.

### Current usability and content corrections

- Use a single language strategy per page. Do not mix English interface copy with German commercial content accidentally.
- Replace placeholder social links that point to `#top` with verified destination URLs or remove them until supplied.
- Use real routable portfolio URLs rather than `#/work/...` placeholders when case studies exist.
- Ensure low-contrast outlined and manifesto text remains readable; visual subtlety must not make core messaging inaccessible.
- Make the contact section legally and commercially appropriate for the actual German business, including verified contact data and required legal pages.
- Update copyright text and year from one central source rather than repeating hard-coded variants.

## 9.2 Legacy website as content source

The legacy production website is `https://www.gentlegroup.de/`. Use it as the primary migration source for existing offers, products, projects, navigation, legal-page coverage, and brand history. Do not copy its old visual system into the new site and do not assume that every legacy claim is verified.

### Confirmed strategic direction from the legacy site

- Gentle Group is presented as an umbrella brand for digital services and software products under the GentleSuite name.
- The new public-facing studio name is **Gentle Group Studios**.
- The primary market is German-speaking businesses, with a regional association to Düsseldorf and NRW.
- The core commercial positioning is custom digital solutions from strategy and design through implementation and continued operation.
- The default site language should be German. English may be added only as an intentional, complete locale with correct metadata and language switching.
- Primary contact email: `office@gentlegroup.de`.
- Primary conversion route: `/project-questionnaire`, subject to verification that the route exists and works in the new application.
- Required legal destinations include Impressum, Datenschutz, AGB, Barrierefreiheit, and cookie settings. Preserve valid legal content and URL continuity during the migration.

### Service architecture to migrate and refine

Consolidate the legacy service catalogue into a clear hierarchy. Avoid presenting six overlapping capabilities as unrelated services.

1. **Individuelle Software & Web-Apps**
   - custom business software
   - portals, dashboards, management systems, and SaaS products
   - API and system integrations
   - scalable backend and database architecture
2. **Websites & digitale Erlebnisse**
   - strategy, UX/UI, design systems, and development
   - responsive, accessible, SEO-ready, conversion-oriented websites
   - e-commerce and high-performance landing pages where relevant
3. **KI & Automatisierung**
   - AI integrations and assistants
   - automated business processes and workflows
   - responsible integration into existing systems
4. **Cloud, Betrieb & Weiterentwicklung**
   - Azure and appropriate cloud architecture
   - deployment, monitoring, maintenance, security, and backups
   - continued product development and support
5. **Mobile Anwendungen**
   - Android and iOS applications when they are genuinely part of the offer

Technology names such as Next.js, React, .NET, C#, SQL, Azure, Vercel, and mobile platforms support credibility but must not replace customer-focused value propositions.

### GentleSuite product candidates

The legacy site currently presents these products. Before publishing, confirm current availability, product spelling, routes, features, and prices:

- **GentleBook** - online booking and business link solution for beauty and local service businesses
- **GentleTrack** - project tracking, milestones, and transparent customer communication
- **GentleAccess** - accessibility analysis and improvement product
- **GentleCalc** - configurable pricing and quotation calculator, particularly for beauty and wellness

Do not automatically migrate legacy starting prices, subscription promises, compatibility claims, compliance claims, or feature lists. In particular, accessibility compliance must never be guaranteed solely by an automated product.

### Portfolio candidates from the legacy site

Replace all invented template projects with verified work. The following are migration candidates found on the legacy site, not automatically approved public references:

- Emma Solution
- GentleTrack
- Creative Hairstyling
- Hautliebe & Laser
- JJ Immobilienpartner
- Kabelbrücken24
- Skinbloom Aesthetics
- NRW Real Estate
- Teretnjaci
- Skinbloom Buchungssystem
- Skinbloom Preisrechner
- Zoey Preisrechner
- VIPShuttle24
- Dario Barber
- Casa del Soul Tattoostudio
- Hautliebe Preisrechner
- Autocenter Kaddoura
- Golden Ticket
- Sweet Funnel Gewinnspiel
- Sweets Funnel

Before using any project, confirm client permission, correct naming, live URL, screenshots, technology stack, scope, and measurable outcome. Prefer three to six strong case studies with real context over a list of many thin entries. Never invent results, quotes, dates, or performance improvements.

### Team content

The legacy site names Berk-Can as Founder and Lead Developer and also lists Medin, Moritz, and Alanur in specialist roles. Treat all names, roles, biographies, photographs, contact links, and continued team membership as requiring confirmation before migration. Do not turn the template's `12 Humans` claim into a company fact.

### Legacy claims requiring explicit verification

Do not migrate the following without evidence:

- `50+ Projekte`
- `99% Uptime`
- `KI-First`, when presented as a measurable certification or methodology rather than positioning
- all starting prices and subscription terms
- all customer testimonials and named testimonial companies
- claims that a conversion rate doubled
- claims of automatic WCAG compliance or automatic accessibility remediation
- response-time promises such as `innerhalb von 24 Stunden`
- every project technology stack and project description
- the current size and composition of the team

The legacy testimonials currently use generic names and companies and must be removed unless authentic approval and attribution can be demonstrated.

### Legal and contact-data handling

- Gentle Group is described in the current imprint as a brand rather than a separately registered company. Preserve the legally responsible provider information from the verified legal source, but do not duplicate sensitive tax, address, or personal data into ordinary marketing components.
- The legacy imprint contains two different email domains. Resolve this inconsistency before launch and use `office@gentlegroup.de` as the provisional public contact address.
- The new template's French phone number and international studio addresses are placeholders and must be removed.
- The website title may target Düsseldorf while legal provider information references Wuppertal. Treat Wuppertal as the legal location and Düsseldorf/NRW as a market-region statement unless the user confirms an actual Düsseldorf office.
- Never improvise legal text. Preserve reviewed legal pages or flag them for legal review.

## 9.3 New homepage content blueprint

Keep the visual sequence and cinematic pacing of the new template, but map it to truthful Gentle Group Studios content:

1. **Navigation** - logo, Leistungen, Projekte, Produkte, Studio, Wissen, Kontakt
2. **Hero** - a concise German value proposition for software, web applications, websites, AI, and automation; include one primary project CTA and one secondary work CTA
3. **Capability marquee** - Software, Web-Apps, Websites, KI, Automatisierung, UX/UI, Cloud, APIs
4. **Manifesto/value section** - explain how Gentle Group Studios turns business problems into maintainable digital products
5. **Proof section** - use only verified figures; otherwise show working principles, technologies, or process stages instead of vanity metrics
6. **Selected work** - three to six approved real projects with problem, solution, role, stack, and outcome
7. **Services** - use the consolidated service architecture from this document
8. **GentleSuite** - introduce only products that are currently active or clearly labelled as being developed
9. **Process** - Analyse, Konzeption, Design, Entwicklung, Qualitätssicherung, Betrieb
10. **Trust** - authentic testimonials, partner facts, technical standards, or no section until evidence exists
11. **Insights** - preserve useful blog content with updated dates and technical accuracy
12. **Contact** - concrete next step, working inquiry route, verified email, and realistic response expectations
13. **Footer** - verified social destinations, German legal links, correct entity disclosure, and current copyright

### Content migration rules

- Do not perform a literal copy-and-paste migration. Rewrite legacy copy for clarity, specificity, SEO intent, and conversion while preserving factual meaning.
- Keep the `Sie` form consistently across German commercial pages unless the user explicitly changes the brand voice.
- Lead with the customer problem and business outcome; follow with the technical implementation.
- Separate services from proprietary products so prospects immediately understand what can be commissioned and what can be subscribed to.
- Use authentic case studies as the strongest proof. Technology badges are supporting information.
- Preserve valuable legacy URLs through a documented redirect map and permanent `301` redirects.
- Retain or improve existing metadata, canonical URLs, sitemap, robots directives, structured data, and internal links.
- Do not publish future-dated, outdated, or AI-generated blog articles without editorial review.

## 9.4 Template removal checklist

Before launch, search the complete repository and remove or replace every occurrence of:

- `Gentle Group Studio` when the full official brand name is required
- `Paris`, `Tokyo`, `NYC`, `New York`, `Le Marais`, `Shibuya`, and `SoHo`
- the placeholder French phone number and `+33` telephone links
- `Est. 2016`, unless confirmed
- `Q3 2026` and other stale availability copy
- `140 Projects`, `32 Industry awards`, `12 Humans`, and award-count claims
- Awwwards, FWA, CSSDA, D&AD, and Webby claims without evidence
- Solstice, Meridian Bank, Kiosko Records, Aether Parfums, and Northwind AI
- placeholder `#top` social links
- generic template metadata, Open Graph images, manifests, JSON-LD, favicons, image alt text, and email templates

Add an automated repository-level content test or script that fails when prohibited template strings reappear in production-facing files.

## 10. Change boundaries

- Do not change business logic, routes, API contracts, tracking, consent behavior, or customer data merely as part of a visual branding task.
- Do not silently rewrite product messaging or remove content.
- Do not replace a functioning design system wholesale without documenting the migration impact.
- Do not invent additional brand colors as permanent tokens without approval. Neutral opacity variants derived from Oxford Blue, Ghost White, black, or white are permitted for accessibility and layering.
- Do not weaken linting, typing, tests, or accessibility checks to make a change pass.
- If a requested change conflicts with these guidelines, explain the conflict and ask before making a materially different brand decision.

## 11. Definition of done

A branding change is complete only when:

- the name `Gentle Group Studios` is consistent in all intended surfaces;
- approved colors are implemented as centralized tokens;
- light and dark contexts remain legible;
- logo usage follows this document;
- responsive layouts are verified;
- keyboard and focus behavior are intact;
- reduced-motion behavior is respected;
- no broken assets or console errors were introduced;
- relevant tests, lint, typecheck, and build pass, or pre-existing failures are explicitly documented.
