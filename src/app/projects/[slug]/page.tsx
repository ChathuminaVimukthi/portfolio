import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { MDXContent } from '@/components/mdx/MDXContent'
import { getProject } from '@/lib/projects'
import { getAllSlugs } from '@/lib/mdx'
import { formatDate } from '@/lib/utils'

const statusConfig = {
  active: { label: 'Active', className: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300' },
  complete: { label: 'Complete', className: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' },
  archived: { label: 'Archived', className: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400' },
}

export function generateStaticParams() {
  return getAllSlugs('projects').map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  try {
    const { meta } = getProject(slug)
    return { title: meta.title, description: meta.summary }
  } catch {
    return {}
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  let meta, content
  try {
    ;({ meta, content } = getProject(slug))
  } catch {
    notFound()
  }

  const { label, className } = statusConfig[meta.status]

  return (
    <PageWrapper narrow>
      <article className="py-12 sm:py-16">
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${className}`}>
              {label}
            </span>
            {meta.role && <span className="text-sm text-secondary">{meta.role}</span>}
            {meta.role && <span className="text-secondary">·</span>}
            <span className="text-sm text-secondary">{formatDate(meta.date)}</span>
          </div>
          <h1 className="text-3xl font-semibold text-primary leading-tight">{meta.title}</h1>
          <p className="text-secondary mt-3 text-base leading-relaxed">{meta.summary}</p>
          <div className="flex flex-wrap gap-1.5 mt-4">
            {meta.stack.map((tech) => (
              <span key={tech} className="inline-flex items-center px-2.5 py-1 rounded text-xs font-mono bg-border/40 text-secondary border border-border">
                {tech}
              </span>
            ))}
          </div>
          <hr className="border-border mt-8" />
        </header>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <MDXContent source={content} />
        </div>
      </article>
    </PageWrapper>
  )
}
