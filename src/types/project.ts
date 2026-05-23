export type ProjectStatus = 'active' | 'complete' | 'archived'

export interface ProjectMeta {
  slug: string
  title: string
  date: string
  stack: string[]
  summary: string
  status: ProjectStatus
  role?: string
  draft?: boolean
}
