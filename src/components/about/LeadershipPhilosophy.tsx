const units = [
  {
    label: 'The Client',
    detail: 'Ensuring clients feel confident in delivery',
  },
  {
    label: 'The Company',
    detail: 'Supporting organizational goals through sustainable execution',
  },
  {
    label: 'The Team',
    detail: 'Creating an environment where engineers can grow and perform effectively',
  },
]

export function LeadershipPhilosophy() {
  return (
    <section className="mt-16 pt-16 border-t border-border">
      <h2 className="text-xl font-semibold text-primary mb-4">How I Think About Leadership</h2>
      <div className="space-y-4 text-secondary leading-relaxed mb-8">
        <p>
          A leadership framework introduced by our CEO shaped how I approach engineering leadership today.
        </p>
        <p>I usually think in three connected units:</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
        {units.map(({ label, detail }) => (
          <div
            key={label}
            className="rounded-lg border border-border bg-border/10 px-4 py-4"
          >
            <p className="text-sm font-semibold text-primary mb-1">{label}</p>
            <p className="text-xs text-secondary leading-relaxed">{detail}</p>
          </div>
        ))}
      </div>
      <p className="text-secondary leading-relaxed">
        My responsibility is to build trust and alignment across all three. Over time, I&apos;ve realized that successful delivery is rarely just about writing good code. It&apos;s about balancing people, communication, execution, and long-term relationships.
      </p>
    </section>
  )
}
