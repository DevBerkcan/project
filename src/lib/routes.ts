export const routes = {
  home: '/',
  projects: '/projekte',
  project: (slug: string) => `/projekte/${slug}`,
  projectStart: '/projekt-starten',
  services: '/leistungen',
  service: (id: string) => `/leistungen/${id}`,
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
