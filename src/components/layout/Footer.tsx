import { PageWrapper } from './PageWrapper'

export function Footer() {
  return (
    <footer className="border-t border-border py-12 mt-16">
      <PageWrapper>
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="text-sm font-medium text-primary">This website is not just a portfolio.</p>
          <p className="text-sm text-secondary max-w-xl leading-relaxed">
            It&apos;s a long-term reflection of my growth as an engineer evolving into a leadership role — learning how technology, delivery, people, and business intersect in real-world software development.
          </p>
          <p className="text-xs text-secondary mt-2">© 2026 Chathumina Vimukthi · Built with Next.js</p>
        </div>
      </PageWrapper>
    </footer>
  )
}
