'use client'

import { motion } from 'framer-motion'

const milestones = [
  {
    period: '2018',
    title: 'Trainee Software Engineer, hSenid Mobile',
    description:
      'Started as a trainee building the TAP Insights dashboard — a data visualisation tool for a Telco Application Platform tracking revenue, traffic, subscriptions, and trending applications. First exposure to React and production frontend development.',
    tags: ['React', 'JavaScript', 'Redux'],
  },
  {
    period: '2020',
    title: 'Software Engineer, hSenid Mobile',
    description:
      'Rejoined hSenid Mobile after completing my degree, moving into full-stack work across web and mobile platforms. Worked across two products: hView (an internal HR and data visualisation platform built with React, Spring WebFlux, GraphQL, and Keycloak) and RemitPlus (a mobile banking app for a leading bank, built with React Native and a React admin dashboard for campaign and user management).',
    tags: ['React Native', 'React', 'Spring Boot', 'Keycloak'],
  },
  {
    period: '2022',
    title: 'Senior Engineer, hSenid Mobile',
    description:
      'Promoted to Senior Engineer in April 2022. Continued on the RemitPlus platform and took on SMSC/SMPP-GW — a high TPS telecom infrastructure project for mission-critical SMS delivery. Took direct ownership of the admin panel with React and Spring WebFlux and collaborated with senior architects on backend improvements.',
    tags: ['Spring WebFlux', 'React', 'TypeScript', 'Telecom'],
  },
  {
    period: '2023',
    title: 'Senior Software Engineer, Verdentra',
    description:
      'Joined Verdentra as a Senior Engineer on an enterprise HR/Payroll modernization engagement for a US-based Fortune 500 client. Contributed to the Dynamic UI framework delivery — a template-driven architecture replacing 50+ legacy pages — working across RBAC implementation, form validation, and delivery stabilisation under a tight deadline. Also led a team of 4 on a staff-augmented project for GitLab, enhancing GLAS (GitLab Advanced SAST) detection coverage across Java, JavaScript, and Go.',
    tags: ['.NET', 'React', 'TypeScript', 'GitLab'],
  },
  {
    period: '2025',
    title: 'Associate Tech Lead, Verdentra',
    description:
      'Promoted to Associate Tech Lead in May 2025. Leading a cross-functional team of 18 engineers and QAs on an enterprise HR/Payroll modernization engagement for a US-based Fortune 500 client, coordinating daily with offshore teams across time zones. Responsible for delivery, architecture, Azure infrastructure, and stakeholder alignment. Also carrying account-level responsibilities including pre-sales activities, resource planning, and building the next layer of engineering leadership.',
    tags: ['Team Lead', 'Azure', 'Architecture', 'Delivery'],
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
