'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { PostCard } from '@/components/blog/PostCard'
import type { BlogCategory, BlogMeta } from '@/types/blog'

interface CategoryFilterProps {
  posts: Array<{ meta: BlogMeta & { slug: string }; readingTime: string }>
}

const categories: Array<{ value: BlogCategory | 'all'; label: string }> = [
  { value: 'all', label: 'All' },
  { value: 'leadership', label: 'Leadership' },
  { value: 'engineering', label: 'Engineering' },
  { value: 'delivery', label: 'Delivery' },
  { value: 'interview', label: 'Interview' },
]

export function CategoryFilter({ posts }: CategoryFilterProps) {
  const [active, setActive] = useState<BlogCategory | 'all'>('all')

  const filtered =
    active === 'all' ? posts : posts.filter(({ meta }) => meta.category === active)

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {categories.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => setActive(value)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
              active === value
                ? 'bg-accent text-white shadow-sm'
                : 'bg-bg border border-border text-secondary hover:text-primary hover:border-accent/50'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {filtered.length === 0 ? (
          <motion.p
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-secondary mt-8"
          >
            No posts in this category yet.
          </motion.p>
        ) : (
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6"
          >
            {filtered.map((post, index) => (
              <PostCard
                key={post.meta.slug}
                meta={post.meta}
                readingTime={post.readingTime}
                index={index}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
