import Link from 'next/link';
import type { Project } from '@/data/projects';
import { ProjectImagePlaceholder } from '@/components/ProjectImagePlaceholder';

export function ProjectCard({ project, number, compact = false }: { project: Project; number: string; compact?: boolean }) {
  return <article className={`project-card${compact ? ' compact-project-card' : ''}`}>
    {!compact && <ProjectImagePlaceholder label={`${project.title} project screenshot`} />}
    <div className="project-topline"><span>{number}</span><span>{project.category}</span></div>
    <h3><Link href={`/work/${project.slug}`}>{project.title}</Link></h3><p>{project.summary}</p>
    <div className="tags">{project.stack.slice(0, compact ? 3 : 5).map((item) => <span key={item}>{item}</span>)}</div>
    {!compact && <p className="project-impact"><strong>Purpose</strong> {project.impact}</p>}
    <div className="project-card-actions">
      <Link className="text-link" href={`/work/${project.slug}`}>View case study <span aria-hidden="true">&rarr;</span></Link>
      {project.github && <a className="text-link secondary-link" href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub repository (opens in a new tab)`}>GitHub <span aria-hidden="true">&#8599;</span></a>}
      {project.liveUrl && <a className="text-link secondary-link" href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`${project.liveLabel ?? project.title} live demo (opens in a new tab)`}>Live demo <span aria-hidden="true">&#8599;</span></a>}
    </div>
  </article>;
}
