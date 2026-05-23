import type { BlogCategory } from '@/types/blog'

const categoryConfig: Record<BlogCategory, { label: string; className: string }> = {
  leadership: { label: 'Leadership', className: 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300' },
  engineering: { label: 'Engineering', className: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' },
  delivery: { label: 'Delivery', className: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300' },
  interview: { label: 'Interview', className: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300' },
}

interface CategoryBadgeProps {
  category: BlogCategory
}

export function CategoryBadge({ category }: CategoryBadgeProps) {
  const { label, className } = categoryConfig[category]
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${className}`}>
      {label}
    </span>
  )
}
