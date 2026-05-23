"use client"

import { motion, type Variants } from 'framer-motion'

const highlights = [
  {
    title: 'Enterprise Modernization',
    body: 'Contributed to modernization initiatives for enterprise HR/payroll systems by building scalable Dynamic UI frameworks using React, .NET, and template-driven architectures.',
  },
  {
    title: 'Mobile Banking Platform',
    body: 'Developed end-to-end mobile banking solutions with React Native, React, Spring Boot, and Keycloak, including mobile apps, admin dashboards, campaign management, and push notification systems.',
  },
  {
    title: 'Delivery & Team Leadership',
    body: 'Leading engineering teams across multiple time zones while coordinating delivery, planning, execution, and stakeholder alignment for enterprise applications.',
  },
  {
    title: 'Telecom Infrastructure',
    body: 'Worked on high TPS telecom infrastructure systems including SMSC/SMPP gateways and USSD frameworks for mission-critical communication platforms.',
  },
]

const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }
const item: Variants = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } } }

export function ExperienceHighlights() {
  return (
    <section className="mt-16">
      <h2 className="text-xl font-semibold text-primary mb-6">Experience Highlights</h2>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        {highlights.map((h) => (
          <motion.div
            key={h.title}
            variants={item}
            className="rounded-xl border border-border bg-border/10 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/30"
          >
            <p className="text-sm font-semibold text-primary mb-2">{h.title}</p>
            <p className="text-sm text-secondary leading-relaxed">{h.body}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
