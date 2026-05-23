"use client"

import Link from 'next/link'
import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'

const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const item: Variants = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } } }

export function Hero() {
  return (
    <section className="py-20 sm:py-28">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-10"
      >
        <div className="flex-1">
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl font-semibold text-primary leading-tight tracking-tight max-w-xl"
          >
            Engineering Delivery, Leadership &amp; Scalable Systems
          </motion.h1>
          <motion.div variants={item} className="mt-6 max-w-lg space-y-3">
            <p className="text-lg text-secondary">
              Associate Tech Lead with experience leading engineering teams and delivering enterprise software solutions using .NET, React, React Native, and Azure.
            </p>
            <p className="text-lg text-secondary">
              Currently focused on delivery ownership, team growth, scalable system design, and evolving into a more business-aware technology leader.
            </p>
          </motion.div>
          <motion.div variants={item} className="flex flex-wrap gap-3 mt-8">
            <Link
              href="/blog"
              className="px-5 py-2.5 rounded-lg bg-accent text-white text-sm font-medium transition-opacity duration-200 hover:opacity-90"
            >
              Read My Thoughts
            </Link>
            <Link
              href="/projects"
              className="px-5 py-2.5 rounded-lg border border-border text-primary text-sm font-medium transition-colors duration-200 hover:border-accent/50 hover:text-accent"
            >
              View Work &amp; Projects
            </Link>
          </motion.div>
        </div>
        <motion.div variants={item} className="flex-shrink-0 flex sm:justify-end">
          <div className="relative w-32 h-32 sm:w-44 sm:h-44 rounded-full overflow-hidden ring-2 ring-border">
            <Image
              src="/images/avatar.jpg"
              alt="Chathumina Vimukthi"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
