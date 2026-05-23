import { PageWrapper } from '@/components/layout/PageWrapper'
import { Hero } from '@/components/home/Hero'
import { ShortIntro } from '@/components/home/ShortIntro'
import { ExperienceHighlights } from '@/components/home/ExperienceHighlights'
import { QuickNav } from '@/components/home/QuickNav'
import { RecentPosts } from '@/components/home/RecentPosts'

export default function HomePage() {
  return (
    <PageWrapper>
      <Hero />
      <ShortIntro />
      <ExperienceHighlights />
      <QuickNav />
      <RecentPosts />
    </PageWrapper>
  )
}
