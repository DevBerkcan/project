import { describe, expect, it } from 'vitest'
import { products, services, solutionAreas, workProjects } from './siteContent'
import { projectArchive } from './projectArchive'

describe('Gentle Group Studios content', () => {
  it('contains the approved service architecture', () => {
    expect(services.map((service) => service.title)).toEqual([
      'Individuelle Software & Web-Apps',
      'Websites & digitale Erlebnisse',
      'KI & Automatisierung',
      'Cloud, Betrieb & Weiterentwicklung',
      'Mobile Anwendungen',
    ])
  })

  it('keeps products separate from commissioned services', () => {
    expect(products.map((product) => product.name)).toEqual([
      'GentleTrack',
      'GentleAccess',
      'GentleCalc',
      'GentleBook',
    ])
  })

  it('provides only factual solution areas for the work section', () => {
    expect(solutionAreas).toHaveLength(3)
    expect(solutionAreas.every((area) => area.description.length > 0)).toBe(true)
  })

  it('keeps the approved work order and known external link', () => {
    expect(workProjects.map((project) => `${project.title} / ${project.year}`)).toEqual([
      'Daily Gourmet / 2026',
      'Skinbloom Buchungssystem / 2026',
      'Skinbloom Preisrechner / 2026',
      'Emma Solution / 2025',
      'Teretnjaci / 2025',
    ])
    expect(workProjects[1].href).toBe('https://skinbloombooking.gentlegroup.de/')
  })

  it('contains the complete legacy project archive', () => {
    expect(projectArchive).toHaveLength(20)
    expect(projectArchive.map((project) => project.title)).toContain('Sweets Funnel')
    expect(projectArchive.every((project) => project.href.startsWith('https://'))).toBe(true)
  })
})
