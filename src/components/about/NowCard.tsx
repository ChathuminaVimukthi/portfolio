const now = {
  working: 'Building a second layer of leadership on my team and running the pre-sales pipeline for two new client engagements.',
  reading: '"An Elegant Puzzle" — Will Larson',
  thinking: 'How to get my team to raise problems early without me having to ask.',
  updated: 'May 2026',
}

export function NowCard() {
  return (
    <div className="rounded-xl border border-accent/30 bg-accent/5 p-6 mt-10">
      <div className="flex items-center gap-2 mb-4">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
        </span>
        <span className="text-xs font-medium text-accent uppercase tracking-wider">Right now</span>
      </div>
      <div className="space-y-3">
        <div className="flex gap-3">
          <span className="text-xs text-secondary w-20 shrink-0 pt-0.5">Working on</span>
          <span className="text-sm text-primary">{now.working}</span>
        </div>
        <div className="flex gap-3">
          <span className="text-xs text-secondary w-20 shrink-0 pt-0.5">Reading</span>
          <span className="text-sm text-primary">{now.reading}</span>
        </div>
        <div className="flex gap-3">
          <span className="text-xs text-secondary w-20 shrink-0 pt-0.5">Thinking</span>
          <span className="text-sm text-primary">{now.thinking}</span>
        </div>
      </div>
      <p className="text-xs text-secondary mt-4">Updated {now.updated}</p>
    </div>
  )
}
