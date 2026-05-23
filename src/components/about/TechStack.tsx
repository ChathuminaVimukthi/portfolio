const stack = [
  {
    label: 'Frontend',
    items: ['React', 'React Native', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux'],
  },
  {
    label: 'Backend',
    items: ['.NET Core', 'C#', 'Java', 'Spring Boot', 'Spring WebFlux', 'GraphQL', 'Micronaut'],
  },
  {
    label: 'Cloud & Infra',
    items: ['Azure', 'Azure DevOps', 'Docker', 'Firebase FCM', 'Keycloak'],
  },
  {
    label: 'Data',
    items: ['PostgreSQL', 'SQL Server'],
  },
  {
    label: 'Practices',
    items: ['CI/CD', 'Agile/Scrum', 'Architecture Review', 'Code Review', 'Stakeholder Management'],
  },
]

export function TechStack() {
  return (
    <section className="mt-16">
      <h2 className="text-xl font-semibold text-primary mb-6">Things I work with</h2>
      <div className="space-y-5">
        {stack.map((group) => (
          <div key={group.label} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
            <span className="text-xs text-secondary w-24 shrink-0 pt-1 font-medium uppercase tracking-wide">
              {group.label}
            </span>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 text-sm rounded-full border border-border text-secondary font-mono transition-all duration-200 hover:border-accent/50 hover:text-primary hover:bg-accent/5 cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
