import Link from 'next/link'
import { ProjectMeta } from '@/types/project'
import { formatShortDate } from '@/lib/utils'

const statusConfig = {
  active: { label: 'Active', className: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300' },
  complete: { label: 'Complete', className: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' },
  archived: { label: 'Archived', className: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400' },
}

export function ProjectCard({ meta }: { meta: ProjectMeta & { slug: string } }) {
  const { label, className } = statusConfig[meta.status]

  return (
    <Link href={`/projects/${meta.slug}`} className="group block rounded-xl border border-border bg-bg p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-black/5">
      <div className="flex items-center justify-between">
        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${className}`}>
          {label}
        </span>
        <div className="flex items-center gap-1.5 text-xs text-secondary">
          {meta.role && <><span>{meta.role}</span><span>·</span></>}
          <span>{formatShortDate(meta.date)}</span>
        </div>
      </div>
      <h2 className="text-lg font-semibold text-primary mt-3 group-hover:text-accent transition-colors">{meta.title}</h2>
      <p className="text-sm text-secondary mt-2 leading-relaxed">{meta.summary}</p>
      <div className="flex flex-wrap mt-4">
        {meta.stack.map((tech) => (
          <span key={tech} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-mono bg-border/40 text-secondary mr-1.5 mb-1">
            {tech}
          </span>
        ))}
      </div>
    </Link>
  )
}
