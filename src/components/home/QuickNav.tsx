import Link from 'next/link'
import { User, PenLine, Code2 } from 'lucide-react'

const cards = [
  { href: '/about', label: 'About', description: 'Background, current role, and where I\'m trying to get better.', icon: User },
  { href: '/blog', label: 'Blog', description: 'Things I\'ve been thinking about in engineering and leadership.', icon: PenLine },
  { href: '/projects', label: 'Projects', description: 'Stuff I\'ve built, what worked, and what didn\'t.', icon: Code2 },
]

export function QuickNav() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16">
      {cards.map(({ href, label, description, icon: Icon }) => (
        <Link
          key={href}
          href={href}
          className="group block rounded-xl border border-border bg-bg p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:shadow-black/5"
        >
          <Icon size={20} className="text-accent mb-3" />
          <p className="text-base font-semibold text-primary">{label}</p>
          <p className="text-sm text-secondary mt-1">{description}</p>
        </Link>
      ))}
    </div>
  )
}
