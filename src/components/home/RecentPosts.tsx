import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import { formatDate } from '@/lib/utils'

export function RecentPosts() {
  const posts = getAllPosts().slice(0, 3)

  return (
    <section className="mt-20">
      <h2 className="text-xl font-semibold text-primary mb-6">Recent Writing</h2>
      <ul>
        {posts.map(({ meta, readingTime }) => (
          <li key={meta.slug} className="border-b border-border pb-4 mb-4">
            <Link
              href={`/blog/${meta.slug}`}
              className="text-primary font-medium hover:text-accent"
            >
              {meta.title}
            </Link>
            <p className="text-sm text-secondary mt-1">
              {formatDate(meta.date)} · {readingTime}
            </p>
          </li>
        ))}
      </ul>
      <Link href="/blog" className="text-accent text-sm font-medium hover:opacity-80">
        All posts →
      </Link>
    </section>
  )
}
