import { getAllContent, getMDXBySlug } from '@/lib/mdx'
import type { ProjectMeta } from '@/types/project'

export function getAllProjects() {
  return getAllContent<ProjectMeta>('projects')
}

export function getProject(slug: string) {
  return getMDXBySlug<ProjectMeta>('projects', slug)
}
