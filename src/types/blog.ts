export type BlogCategory = 'leadership' | 'engineering' | 'delivery' | 'interview'

export interface BlogMeta {
  slug: string
  title: string
  date: string        // ISO format: "2026-05-15"
  category: BlogCategory
  summary: string
  tags?: string[]
  draft?: boolean
}
