export const siteConfig = {
  name: 'Gentle Group Studios',
  url: 'https://www.gentlegroup.de',
  locale: 'de_DE',
  email: 'office@gentlegroup.de',
  // Approved for public use by the owner (2026-11-09); same number as in the imprint.
  phone: { display: '+49 175 4701892', e164: '+491754701892' },
  founder: { name: 'Berk-Can Atesoglu', jobTitle: 'Founder & Lead Developer' },
  // Verified social profiles only (exact URLs). Empty until supplied.
  sameAs: [] as string[],
  defaultImage: 'https://www.gentlegroup.de/og-default.png',
  defaultImageAlt: 'Gentle Group Studios — individuelle Software, Web-Apps, Websites und KI-Automatisierung',
  logo: 'https://www.gentlegroup.de/logo/gentle-group-studios-navy.png',
  // Public business location as stated in the imprint. The street address stays
  // on the legal page only; structured data uses locality-level data.
  location: {
    locality: 'Wuppertal',
    postalCode: '42109',
    region: 'Nordrhein-Westfalen',
    country: 'DE',
  },
  // Market region, not office locations.
  areaServed: ['Wuppertal', 'Düsseldorf', 'Nordrhein-Westfalen', 'Deutschland'],
} as const

export function copyrightNotice(year = new Date().getFullYear()): string {
  return `© ${year} ${siteConfig.name}`
}
