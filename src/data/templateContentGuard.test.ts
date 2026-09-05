import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'

const forbiddenTerms = [
  'Gentle Webdesign',
  'Paris',
  'Tokyo',
  'NYC',
  'New York',
  'Le Marais',
  'Shibuya',
  'SoHo',
  '+33',
  'Est. 2016',
  'Q3 2026',
  '140 Projects',
  '32 Industry',
  '12 Humans',
  'Awwwards',
  'FWA',
  'CSSDA',
  'D&D',
  'Webby',
  'Solstice',
  'Meridian Bank',
  'Kiosko Records',
  'Aether Parfums',
  'Northwind AI',
  '#top',
]

function sourceFiles(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name)
    if (entry.isDirectory()) return sourceFiles(path)
    return entry.name.endsWith('.test.ts') ? [] : [path]
  })
}

describe('production content guard', () => {
  it('does not allow removed template claims back into src', () => {
    const files = sourceFiles(join(process.cwd(), 'src'))
    const violations = files.flatMap((file) => {
      const content = readFileSync(file, 'utf8')
      return forbiddenTerms.filter((term) => content.includes(term)).map((term) => `${file}: ${term}`)
    })

    expect(violations).toEqual([])
  })
})