import { getAllContent, getMDXBySlug } from '@/lib/mdx'
import type { BlogMeta, BlogCategory } from '@/types/blog'

export function getAllPosts() {
  return getAllContent<BlogMeta>('blog')
}

export function getPostsByCategory(category: BlogCategory) {
  return getAllPosts().filter(({ meta }) => meta.category === category)
}

export function getPost(slug: string) {
  return getMDXBySlug<BlogMeta>('blog', slug)
}
