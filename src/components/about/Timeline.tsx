'use client'

import { motion } from 'framer-motion'

const milestones = [
  {
    period: '2019',
    title: 'Backend Developer',
    description:
      'Started as a backend developer working with .NET and Azure. Learned how systems fit together, built APIs, data pipelines, and cloud infrastructure from the ground up.',
    tags: ['.NET', 'Azure', 'SQL Server'],
  },
  {
    period: '2021',
    title: 'Senior Engineer',
    description:
      'Took on more technical ownership: leading design decisions, reviewing architecture, and mentoring junior engineers alongside delivery work.',
    tags: ['.NET', 'Azure DevOps', 'PostgreSQL'],
  },
  {
    period: '2023',
    title: 'First Delivery Ownership',
    description:
      'Started getting pulled into planning sessions, risk discussions, and stakeholder updates. Owned a delivery end-to-end for the first time and started mentoring three engineers directly.',
    tags: ['Delivery', 'Stakeholders', 'Mentoring'],
  },
  {
    period: '2024',
    title: 'Associate Tech Lead, Verdentra',
    description:
      'Leading a team of 18 engineers and QAs. Responsible for delivery velocity, technical direction, client and internal stakeholder management, and building a second layer of leadership. Also carrying a stretch role as Account Owner, which means being accountable for the account from finances and resourcing to pre-sales and strategic proposals.',
    tags: ['Team Lead', 'Account Owner', 'Pre-Sales', 'Mentoring'],
  },
]

export function Timeline() {
  return (
    <section className="mt-16">
      <h2 className="text-xl font-semibold text-primary mb-8">Career so far</h2>
      <div className="relative">
        <div className="absolute left-3 top-2 bottom-2 w-px bg-border" />
        <div className="space-y-8">
          {milestones.map((m, i) => (
            <motion.div
              key={m.period}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: 'easeOut' }}
              className="relative pl-10"
            >
              <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg" />
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                <span className="text-xs font-mono text-accent shrink-0">{m.period}</span>
                <h3 className="text-base font-semibold text-primary">{m.title}</h3>
              </div>
              <p className="text-sm text-secondary mt-1.5 leading-relaxed">{m.description}</p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {m.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs rounded bg-border/60 text-secondary font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
