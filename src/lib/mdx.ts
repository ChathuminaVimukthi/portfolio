import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

type ContentType = 'blog' | 'projects'

interface ContentMeta {
  date: string
  draft?: boolean
}

const contentRoot = path.join(process.cwd(), 'content')

function contentDir(type: ContentType): string {
  return path.join(contentRoot, type)
}

export function getAllSlugs(type: ContentType): string[] {
  const dir = contentDir(type)
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''))
}

export function getMDXBySlug<T>(
  type: ContentType,
  slug: string
): { meta: T & { slug: string }; content: string; readingTime: string } {
  const filePath = path.join(contentDir(type), `${slug}.mdx`)
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  return {
    meta: { ...(data as T), slug },
    content,
    readingTime: readingTime(content).text,
  }
}

export function getAllContent<T extends ContentMeta>(
  type: ContentType
): Array<{ meta: T & { slug: string }; readingTime: string }> {
  const slugs = getAllSlugs(type)
  return slugs
    .map((slug) => {
      const { meta, readingTime: rt } = getMDXBySlug<T>(type, slug)
      return { meta, readingTime: rt }
    })
    .filter(({ meta }) => meta.draft !== true)
    .sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime())
}

export function getAboutContent(): { content: string } {
  const filePath = path.join(contentRoot, 'about.mdx')
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { content } = matter(raw)
  return { content }
}
