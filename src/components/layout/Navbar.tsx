import { PageWrapper } from './PageWrapper'
import { ThemeToggle } from './ThemeToggle'
import { NavLink } from './NavLink'
import { NavMobile } from './NavMobile'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/projects', label: 'Work' },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border relative">
      <PageWrapper>
        <div className="flex items-center justify-end h-16 gap-6">
          <div className="hidden sm:flex items-center gap-6">
            {links.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
            <ThemeToggle />
          </div>
          <div className="sm:hidden flex items-center gap-4">
            <ThemeToggle />
            <NavMobile links={links} />
          </div>
        </div>
      </PageWrapper>
    </header>
  )
}
