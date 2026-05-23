import { PageWrapper } from '@/components/layout/PageWrapper'
import { Hero } from '@/components/home/Hero'
import { QuickNav } from '@/components/home/QuickNav'
import { RecentPosts } from '@/components/home/RecentPosts'

export default function HomePage() {
  return (
    <PageWrapper>
      <Hero />
      <QuickNav />
      <RecentPosts />
    </PageWrapper>
  )
}
