"use client"

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
            I lead a team of 18 engineers and QAs. This is where I write about what that actually looks like.
          </motion.h1>
          <motion.p variants={item} className="text-lg text-secondary mt-6 max-w-lg">
            Associate Tech Lead at Verdentra. Backend, cloud, delivery, and learning the account ownership side of the job.
          </motion.p>
        </div>
        <motion.div variants={item} className="flex-shrink-0 flex sm:justify-end">
          <div className="relative w-32 h-32 sm:w-44 sm:h-44 rounded-full overflow-hidden ring-2 ring-border">
            <Image
              src="/avatar.jpg"
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
