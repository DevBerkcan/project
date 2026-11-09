export const routes = {
  home: '/',
  projects: '/projekte',
  project: (slug: string) => `/projekte/${slug}`,
  projectStart: '/projekt-starten',
  services: '/leistungen',
  service: (slug: string) => `/leistungen/${slug}`,
  gentlesuite: '/gentlesuite',
  region: '/leistungsgebiet',
  blog: '/blog',
  post: (slug: string) => `/blog/${slug}`,
  legal: {
    impressum: '/impressum',
    datenschutz: '/datenschutz',
    barrierefreiheit: '/barrierefreiheit',
  },
} as const
