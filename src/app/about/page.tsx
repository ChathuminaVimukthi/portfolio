import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { NowCard } from '@/components/about/NowCard'
import { Timeline } from '@/components/about/Timeline'
import { TechStack } from '@/components/about/TechStack'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'About',
  description: 'My engineering background, the transition into Tech Lead, and where I am growing.',
}

export default function AboutPage() {
  return (
    <PageWrapper narrow>
      <div className="py-12 sm:py-16">

        {/* Profile header */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-6">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden ring-2 ring-border shrink-0">
            <Image
              src="/avatar.jpg"
              alt={siteConfig.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-primary">{siteConfig.name}</h1>
            <p className="text-secondary mt-1">{siteConfig.role} · Backend &amp; Cloud</p>
            <div className="flex items-center gap-4 mt-3">
              {[
                { href: siteConfig.github, label: 'GitHub' },
                { href: siteConfig.linkedin, label: 'LinkedIn' },
              ].map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-secondary hover:text-primary transition-colors duration-200"
                >
                  <ExternalLink size={13} />
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Intro */}
        <p className="text-secondary leading-relaxed mt-8">
          I lead a team of 18 engineers and QAs at Verdentra, where I am responsible for delivery,
          technical direction, and stakeholder management across client and internal sides. On top of
          that I carry a stretch role as Account Owner, which covers everything from resourcing and
          finances to pre-sales and proactive proposals. The technical work still matters a lot to me,
          but the team and delivery side turned out to be a different kind of challenge than I expected.
        </p>

        {/* Right now */}
        <NowCard />

        {/* Timeline */}
        <Timeline />

        {/* Tech stack */}
        <TechStack />

        {/* Where I'm growing — kept as prose, it's the most personal part */}
        <section className="mt-16 pt-16 border-t border-border">
          <h2 className="text-xl font-semibold text-primary mb-6">Where I&apos;m growing</h2>
          <div className="space-y-4 text-secondary leading-relaxed">
            <p>
              Right now I am working toward AZ-104 and AZ-305 certifications, which is partly about
              the credentials and mostly about having a cleaner mental model of Azure at the
              architecture level. I want to be more credible in design conversations, not just
              delivery ones.
            </p>
            <p>
              The pre-sales side is newer territory. I am running proactive proposals and working
              with potential clients on POCs. That requires a different kind of communication than
              engineering work does, and I am still figuring out how to do it well without it
              feeling like a pitch.
            </p>
            <p>
              I am also trying to build an AI productivity program across the team. Not just tooling,
              but changing how people think about where AI fits into their workflow. That is harder
              to measure than a certification, which is probably why I find it more interesting.
            </p>
            <p>
              This site is where I document that process: what I am learning, what I am building,
              and occasionally what I got wrong. Not a resume. More like a working log.
            </p>
          </div>
        </section>

      </div>
    </PageWrapper>
  )
}
