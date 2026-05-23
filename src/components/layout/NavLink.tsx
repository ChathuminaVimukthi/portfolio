'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface NavLinkProps { href: string; label: string }

export function NavLink({ href, label }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href)
  return (
    <Link
      href={href}
      className={cn(
        'group relative text-sm transition-colors duration-200',
        isActive ? 'text-primary font-medium' : 'text-secondary hover:text-primary'
      )}
    >
      {label}
      <span
        className={cn(
          'absolute left-0 -bottom-0.5 h-px bg-primary transition-[width] duration-300 ease-out',
          isActive ? 'w-full' : 'w-0 group-hover:w-full'
        )}
      />
    </Link>
  )
}
