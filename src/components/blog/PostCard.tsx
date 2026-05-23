'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { CategoryBadge } from '@/components/blog/CategoryBadge'
import { formatDate } from '@/lib/utils'
import type { BlogMeta } from '@/types/blog'

interface PostCardProps {
  meta: BlogMeta & { slug: string }
  readingTime: string
  index?: number
}

export function PostCard({ meta, readingTime, index = 0 }: PostCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
      className="h-full"
    >
      <Link href={`/blog/${meta.slug}`} className="group block h-full">
        <div className="h-full rounded-xl border border-border bg-bg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-accent/40">
          <div className="flex items-center gap-2.5 flex-wrap">
            <CategoryBadge category={meta.category} />
            <span className="text-xs text-secondary">{formatDate(meta.date)}</span>
            <span className="text-xs text-secondary">·</span>
            <span className="text-xs text-secondary">{readingTime}</span>
          </div>
          <h2 className="text-lg font-semibold text-primary mt-3 leading-snug transition-colors duration-300 group-hover:text-accent">
            {meta.title}
          </h2>
          <p className="text-sm text-secondary mt-2 leading-relaxed line-clamp-2">
            {meta.summary}
          </p>
          <div className="mt-4 flex items-center gap-1 text-xs font-medium text-accent opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            Read more
            <ArrowRight size={12} />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
