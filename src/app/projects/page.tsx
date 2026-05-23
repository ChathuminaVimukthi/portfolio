import { Metadata } from 'next'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { getAllProjects } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Real-world engineering projects — problems, approaches, and what I learned.',
}

export default function ProjectsPage() {
  const projects = getAllProjects()
  return (
    <PageWrapper>
      <div className="py-12 sm:py-16">
        <h1 className="text-3xl font-semibold text-primary">Projects</h1>
        <p className="text-secondary mt-2">Real things I've built and what I learned from them.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map(({ meta }) => (
            <ProjectCard key={meta.slug} meta={meta} />
          ))}
        </div>
        {projects.length === 0 && (
          <p className="text-secondary mt-8">No projects yet — check back soon.</p>
        )}
      </div>
    </PageWrapper>
  )
}
