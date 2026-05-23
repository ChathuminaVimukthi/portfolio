'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface NavMobileProps {
  links: Array<{ href: string; label: string }>
}

export function NavMobile({ links }: NavMobileProps) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <div>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="text-secondary hover:text-primary transition-colors"
        aria-label="Toggle menu"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
      {open && (
        <nav className="absolute left-0 right-0 top-full bg-bg border-b border-border">
          <div className="flex flex-col px-4 py-3 gap-4">
            {links.map((link) => {
              const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn('text-sm transition-colors py-1', isActive ? 'text-primary font-medium' : 'text-secondary hover:text-primary')}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
        </nav>
      )}
    </div>
  )
}
