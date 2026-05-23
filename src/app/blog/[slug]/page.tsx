import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { MDXContent } from '@/components/mdx/MDXContent'
import { CategoryBadge } from '@/components/blog/CategoryBadge'
import { getAllSlugs, getMDXBySlug } from '@/lib/mdx'
import { formatDate } from '@/lib/utils'
import type { BlogMeta } from '@/types/blog'

export function generateStaticParams() {
  return getAllSlugs('blog').map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  try {
    const { meta } = getMDXBySlug<BlogMeta>('blog', slug)
    return { title: meta.title, description: meta.summary }
  } catch {
    return {}
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  let meta: BlogMeta & { slug: string }
  let content: string
  let readingTime: string

  try {
    const result = getMDXBySlug<BlogMeta>('blog', slug)
    meta = result.meta
    content = result.content
    readingTime = result.readingTime
  } catch {
    notFound()
  }

  return (
    <PageWrapper narrow>
      <article className="py-12 sm:py-16">
        <header className="mb-8">
          <CategoryBadge category={meta!.category} />
          <h1 className="text-3xl font-semibold text-primary mt-4 leading-tight">{meta!.title}</h1>
          <p className="text-secondary text-sm mt-3">{formatDate(meta!.date)} · {readingTime!}</p>
          <p className="text-secondary mt-3 text-base leading-relaxed">{meta!.summary}</p>
          <hr className="border-border mt-8" />
        </header>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <MDXContent source={content!} />
        </div>
      </article>
    </PageWrapper>
  )
}
