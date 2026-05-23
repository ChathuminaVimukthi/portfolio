import { cn } from '@/lib/utils'

interface PageWrapperProps {
  children: React.ReactNode
  className?: string
  narrow?: boolean
}

export function PageWrapper({ children, className, narrow = false }: PageWrapperProps) {
  return (
    <div className={cn('mx-auto w-full px-4 sm:px-6 lg:px-8', narrow ? 'max-w-2xl' : 'max-w-content', className)}>
      {children}
    </div>
  )
}
