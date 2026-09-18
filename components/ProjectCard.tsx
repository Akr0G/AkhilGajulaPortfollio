import Link from 'next/link';
import type { Project } from '@/data/projects';
import { ProjectImagePlaceholder } from '@/components/ProjectImagePlaceholder';

export function ProjectCard({ project, number, compact = false }: { project: Project; number: string; compact?: boolean }) {
  return <article className={`project-card${compact ? ' compact-project-card' : ''}`}>
    {!compact && <ProjectImagePlaceholder label={`${project.title} project screenshot`} />}
    <div className="project-topline"><span>{number}</span><span>{project.category}</span></div>
    <h3>{project.title}</h3><p>{project.summary}</p>
    <div className="tags">{project.stack.slice(0, compact ? 3 : 5).map((item) => <span key={item}>{item}</span>)}</div>
    {!compact && <p className="project-impact"><strong>Purpose</strong> {project.impact}</p>}
    <div className="project-card-actions">
      <Link className="text-link" href={`/work/${project.slug}`}>View case study <span aria-hidden="true">→</span></Link>
      {project.github && <a className="text-link secondary-link" href={project.github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>}
      {project.liveUrl && <a className="text-link secondary-link" href={project.liveUrl} target="_blank" rel="noreferrer">Live demo <span aria-hidden="true">↗</span></a>}
    </div>
  </article>;
}
