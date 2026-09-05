import { describe, expect, it } from 'vitest'
import { products, services, solutionAreas } from './siteContent'

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
})
