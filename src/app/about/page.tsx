import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { NowCard } from '@/components/about/NowCard'
import { Timeline } from '@/components/about/Timeline'
import { TechStack } from '@/components/about/TechStack'
import { LeadershipPhilosophy } from '@/components/about/LeadershipPhilosophy'
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
              src="/images/avatar.jpg"
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

        {/* About Me */}
        <div className="space-y-4 text-secondary leading-relaxed mt-8">
          <p>
            I&apos;m an Associate Tech Lead based in Sri Lanka with experience building enterprise-grade web, mobile, and cloud solutions across multiple industries including HR/payroll systems, banking platforms, compliance systems, and telecom infrastructure.
          </p>
          <p>
            My background spans full-stack engineering with technologies such as React, React Native, TypeScript, .NET, Spring Boot, Azure, and Docker. Over time, my responsibilities expanded beyond engineering into team leadership, delivery ownership, stakeholder alignment, and account-level planning.
          </p>
          <p>
            One of the most valuable parts of my journey has been learning how engineering decisions connect to business outcomes — balancing delivery quality, team growth, client expectations, and long-term sustainability.
          </p>
          <p>
            Currently, I&apos;m focused on improving as a technology leader by strengthening communication, decision-making, delivery thinking, and business awareness while continuing to stay technically hands-on.
          </p>
        </div>

        {/* Leadership Philosophy */}
        <LeadershipPhilosophy />

        {/* Right now */}
        <NowCard />

        {/* Timeline */}
        <Timeline />

        {/* Tech stack */}
        <TechStack />

        {/* Where I'm growing */}
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
