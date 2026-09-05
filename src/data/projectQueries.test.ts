import { describe, expect, it } from 'vitest'
import { projects } from './projects'
import { findNextProject, findProjectBySlug } from './projectQueries'

describe('project queries', () => {
  it('finds a project by its route slug', () => {
    expect(findProjectBySlug(projects, 'solstice')?.title).toBe('Solstice')
  })

  it('returns no project for an unknown slug', () => {
    expect(findProjectBySlug(projects, 'unknown')).toBeUndefined()
  })

  it('wraps from the final project to the first project', () => {
    expect(findNextProject(projects, projects.length - 1)?.slug).toBe(projects[0].slug)
  })
})
