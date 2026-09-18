import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArchitectureFlow } from '@/components/ArchitectureFlow';
import { ProjectImagePlaceholder } from '@/components/ProjectImagePlaceholder';
import { projects } from '@/data/projects';

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const details = project.caseStudy;
  const implementationSections = project.sections.filter((section) => !['Overview', 'Organization need', 'Testimonial', 'Result', 'Competition result', 'Recognition'].includes(section.title));
  const testimonial = project.sections.find((section) => section.title === 'Testimonial');
  const gallery = details?.gallery ?? [`${project.title} project screenshot`, 'Technical implementation screenshot', 'Project demo screenshot'];

  return <main className="case-study">
    <header className="case-nav"><Link href="/" className="wordmark">AKHIL<span>.</span></Link><Link href="/#work">← All work</Link></header>
    <article>
      <section className="case-hero">
        <p className="eyebrow">{project.category} · {project.period}</p>
        <h1>{project.title}</h1>
        <p className="case-lede">{project.summary}</p>
        <div className="tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
        <div className="actions">
          {project.liveUrl && <a className="button primary" href={project.liveUrl} target="_blank" rel="noreferrer">Live demo <span aria-hidden="true">↗</span></a>}
          {project.github && <a className="button" href={project.github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>}
          <Link className="button" href="/#work">Back to work</Link>
        </div>
        <ProjectImagePlaceholder label={`${project.title} hero screenshot`} />
      </section>

      <div className="case-meta"><div><span>My role</span><p>{project.role}</p></div><div><span>Purpose / outcome</span><p>{project.impact}</p></div></div>

      <div className="case-content">
        <section><p className="eyebrow">The problem</p><h2>{details ? 'The work behind the project.' : 'Project overview.'}</h2><p>{details?.problem ?? project.sections[0]?.body}</p></section>
        <section><p className="eyebrow">What I built</p><h2>My contribution</h2><p>{details?.built ?? project.role}</p></section>
        {details && <section className="system-section"><p className="eyebrow">How it works</p><h2>System flow</h2><ArchitectureFlow steps={details.architecture} /></section>}
        {details && <section><p className="eyebrow">Technical challenges</p><h2>What required careful iteration</h2><ul className="challenge-list">{details.challenges.map((challenge) => <li key={challenge}>{challenge}</li>)}</ul></section>}
        {implementationSections.length > 0 && <section><p className="eyebrow">Technical implementation</p><h2>Key decisions</h2><div className="implementation-grid">{implementationSections.map((section) => <div key={section.title}><h3>{section.title}</h3><p>{section.body}</p></div>)}</div></section>}
        <section><p className="eyebrow">Results and impact</p><h2>What the work enabled</h2><p>{project.impact}</p>{testimonial && <blockquote className="case-testimonial">{testimonial.body}</blockquote>}</section>
        <section><p className="eyebrow">Gallery</p><h2>Project visuals to add</h2><div className="case-gallery">{gallery.map((label) => <ProjectImagePlaceholder key={label} label={label} />)}</div></section>
      </div>
    </article>
    <footer><Link href="/#work">← Back to selected work</Link><a href="mailto:akhilgajula@gmail.com">Get in touch ↗</a></footer>
  </main>;
}
