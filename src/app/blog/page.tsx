import { Metadata } from 'next'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { CategoryFilter } from '@/components/blog/CategoryFilter'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Reflections on engineering leadership, delivery, and technical growth.',
}

export default function BlogPage() {
  const posts = getAllPosts()
  return (
    <PageWrapper>
      <div className="py-12 sm:py-16">
        <h1 className="text-3xl font-semibold text-primary">Thoughts, Lessons &amp; Reflections</h1>
        <p className="text-secondary mt-2 max-w-xl">A collection of lessons from engineering, leadership, delivery ownership, interviews, and the business side of software development.</p>
        <div className="mt-8">
          <CategoryFilter posts={posts} />
        </div>
      </div>
    </PageWrapper>
  )
}
