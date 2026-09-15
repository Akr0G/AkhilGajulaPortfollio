import Link from 'next/link';
import type { Project } from '@/data/projects';

export function ProjectCard({ project, number }: { project: Project; number: string }) {
  return <article className="project-card">
    <div className="project-topline"><span>{number}</span><span>{project.category}</span></div>
    <h3>{project.title}</h3><p>{project.summary}</p>
    <div className="tags">{project.stack.slice(0, 4).map((item) => <span key={item}>{item}</span>)}</div>
    <p className="project-impact"><strong>Result</strong> {project.impact}</p>
    <Link className="text-link" href={`/work/${project.slug}`}>View project <span aria-hidden="true">↗</span></Link>
  </article>;
}
