"use client"

import { motion, type Variants } from 'framer-motion'

const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }
const item: Variants = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } } }

export function ShortIntro() {
  return (
    <section className="border-t border-border pt-16 pb-4">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
      >
        <motion.h2
          variants={item}
          className="text-2xl font-semibold text-primary mb-6"
        >
          More Than Just Building Software
        </motion.h2>
        <div className="space-y-4 text-secondary leading-relaxed max-w-2xl">
          <motion.p variants={item}>
            Over the years, my role has evolved from hands-on software engineering into a broader technical leadership position involving delivery ownership, team coordination, and client-focused execution.
          </motion.p>
          <motion.p variants={item}>
            Alongside engineering, I've gained increasing exposure to delivery planning, account-level thinking, resource management, and building long-term trust across clients, teams, and the organization.
          </motion.p>
          <motion.p variants={item}>
            This website is a place where I document that journey — sharing technical learnings, leadership reflections, and lessons from real-world software delivery.
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}
