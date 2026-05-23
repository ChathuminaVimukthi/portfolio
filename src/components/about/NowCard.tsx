const focusItems = [
  'Improving communication and leadership maturity',
  'Learning more about delivery strategy and business operations',
  'Exploring AI-assisted engineering workflows',
  'Writing more consistently about engineering and leadership',
  'Building scalable systems with modern full-stack technologies',
]

export function NowCard() {
  return (
    <div className="rounded-xl border border-accent/30 bg-accent/5 p-6 mt-10">
      <div className="flex items-center gap-2 mb-4">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
        </span>
        <span className="text-xs font-medium text-accent uppercase tracking-wider">What I&apos;m Currently Focused On</span>
      </div>
      <ul className="space-y-2">
        {focusItems.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-primary">
            <span className="text-accent mt-1 shrink-0">·</span>
            {item}
          </li>
        ))}
      </ul>
      <p className="text-xs text-secondary mt-4">Updated May 2026</p>
    </div>
  )
}
