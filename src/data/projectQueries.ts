import type { Project } from './projects'

export function findProjectBySlug(projects: Project[], slug: string | undefined) {
  return projects.find((project) => project.slug === slug)
}

export function findNextProject(projects: Project[], currentIndex: number) {
  return projects[(currentIndex + 1) % projects.length]
}
