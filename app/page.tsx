import Link from 'next/link';
import { Bot, Braces, Brush, Languages, Orbit, TestTubeDiagonal } from 'lucide-react';
import { HeroRibbon } from '@/components/HeroRibbon';
import { Navigation } from '@/components/Navigation';
import { ProjectCard } from '@/components/ProjectCard';
import { SectionHeading } from '@/components/SectionHeading';
import { credentials } from '@/data/credentials';
import { featuredProjects, projects } from '@/data/projects';

const skills = {
  Languages: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C++', 'HTML/CSS'],
  'Frontend & full stack': ['React', 'Next.js', 'Tailwind CSS', 'Supabase', 'SQLite'],
  'AI & APIs': ['OpenAI API', 'Gemini API', 'Prompt design', 'AI-assisted application development'],
  'Testing & automation': ['Playwright', 'Google Lighthouse', 'axe-core'],
  Robotics: ['PROS', 'EZ-Template', 'PID control', 'Encoders', 'IMUs', 'Odometry'],
  'Design & research': ['Framer', 'Figma', 'Responsive design', 'Accessibility', 'UX research'],
};

const skillIcons = {
  Languages,
  'Frontend & full stack': Braces,
  'AI & APIs': Bot,
  'Testing & automation': TestTubeDiagonal,
  Robotics: Orbit,
  'Design & research': Brush,
};
const projectGroups = [
  { label: 'Engineering', slugs: ['ai-website-summarizer', 'vex-robotics'] },
  { label: 'Human-centered technology', slugs: ['nurses-of-the-future'] },
  { label: 'Design', slugs: ['necs-2026', 'border-cafe', 'brew-barn'] },
  { label: 'Research', slugs: ['smart-microbiome-filter'] },
];

export default function Home() {
  const completedCredentials = credentials.filter((credential) => credential.visible && credential.status === 'completed');
  const projectsBySlug = new Map(projects.map((project) => [project.slug, project]));

  return <>
    <a className="skip-link" href="#main-content">Skip to main content</a>
    <main id="main-content" tabIndex={-1}>
    <Navigation />
    <section className="hero" id="home">
      <HeroRibbon />
      <div className="hero-copy">
        <img className="profile-photo" src="/akhil-gajula-profile.png" alt="Akhil Gajula" width={78} height={78} fetchPriority="high" />
        <p className="eyebrow">Software developer · AI builder · student engineer</p>
        <h1>Akhil <em>Gajula.</em></h1>
        <p className="hero-intro">Software developer building AI and full-stack technology for real-world problems.</p>
        <p className="hero-supporting">I build automated testing systems, AI-powered applications, robotics software, and technology for community organizations.</p>
        <div className="actions">
          <a className="button primary" href="#work">View projects <span aria-hidden="true">↓</span></a>
          <a className="button" href="/akhil-gajula-resume.pdf">Resume <span aria-hidden="true">↗</span></a>
          <a className="button" href="https://github.com/Akr0G" target="_blank" rel="noreferrer" aria-label="GitHub profile (opens in a new tab)">GitHub <span aria-hidden="true">↗</span></a>
        </div>
        <p className="credibility">BPA National Finalist <span aria-hidden="true">·</span> VEX Lead Programmer <span aria-hidden="true">·</span> Community Technology</p>
      </div>
    </section>

    <section className="section work-section" id="work">
      <SectionHeading eyebrow="Featured projects" title="Engineering work with evidence behind it." copy="Three projects that best show how I translate a real problem into a technical system." />
      <div className="featured-project-grid">{featuredProjects.map((project, index) => <ProjectCard key={project.slug} project={project} number={String(index + 1).padStart(2, '0')} />)}</div>
    </section>

    <section className="section impact-section" aria-labelledby="impact-heading">
      <div className="impact-layout">
        <div>
          <p className="eyebrow">Technical and community impact</p>
          <h2 id="impact-heading">Technology is most useful when people can act on it.</h2>
          <p>I build software with the same goal across independent projects, robotics, and community work: make complex work clearer, more testable, and more useful.</p>
        </div>
        <blockquote className="impact-quote">“I used your map to show him what I wanted, so it was a valuable tool. I am very pleased with the results of the survey and we could not have done it without your help.”<cite>Marjorie Crofts · Our Daily Bread</cite><a className="text-link" href="https://akr0g.github.io/OurDailyBreadMap/" target="_blank" rel="noreferrer" aria-label="Open the Our Daily Bread community map (opens in a new tab)">Open the community map <span aria-hidden="true">↗</span></a></blockquote>
      </div>
    </section>

    <section className="section more-work-section">
      <SectionHeading eyebrow="More work" title="A broader record of building and iteration." copy="Selected work across software, design, robotics, and research." />
      <div className="project-groups">{projectGroups.map((group) => <section key={group.label} className="project-group"><h3>{group.label}</h3><div className="compact-project-grid">{group.slugs.map((slug, index) => { const project = projectsBySlug.get(slug); return project ? <ProjectCard key={slug} project={project} number={String(index + 1).padStart(2, '0')} compact /> : null; })}</div></section>)}</div>
    </section>

    <section className="section leadership" id="experience">
      <SectionHeading eyebrow="Experience and leadership" title="Building alongside other people." />
      <div className="leadership-grid">
        <article><span>01</span><h3>Business Professionals of America</h3><p className="role">Chapter President</p><ul><li>Lead a chapter of 150+ members.</li><li>Helped increase State Leadership Conference participation from about 20 to 50+ competitors.</li></ul></article>
        <article><span>02</span><h3>VEX Robotics · Team 19709A</h3><p className="role">Lead Programmer</p><ul><li>Contribute technical leadership across autonomous programming, controls, debugging, and iteration.</li></ul></article>
        <article><span>03</span><h3>National Honor Society</h3><p className="role">Secretary</p><ul><li>Support organizational and student leadership responsibilities.</li></ul></article>
        <article><span>04</span><h3>Student Government</h3><p className="role">11th Grade Senator</p><ul><li>Represent student perspectives and contribute to class and school initiatives.</li></ul></article>
      </div>
    </section>

    <section className="section awards-section" id="awards">
      <SectionHeading eyebrow="Awards" title="Recognition for research, iteration, and competition." />
      <div className="awards-layout">
        <div className="award-timeline"><p className="eyebrow">BPA competition</p><div><time>2026</time><p><strong>4th Place</strong> · BPA National Leadership Conference, User Experience Design Team<br /><strong>1st Place</strong> · Delaware BPA State Leadership Conference, User Experience Design Team</p></div><div><time>2025</time><p><strong>7th Place / National Finalist</strong> · BPA National Leadership Conference, User Experience Design Team<br /><strong>1st Place</strong> · Delaware BPA State Leadership Conference, User Experience Design Team</p></div><div><time>2024</time><p><strong>3rd Place</strong> · Delaware BPA State Leadership Conference, Website Design Team</p></div></div>
        <aside className="award-aside"><p className="eyebrow">Robotics and research</p><ul><li>VEX Robotics Design Award</li><li>VEX Robotics Regional Qualifier</li><li>3rd Place Overall · Smart Microbiome Filter, 2026</li></ul><div><span>2023 · Before high school</span><p><strong>1st Place Nationally</strong><br />BPA Website Design Team, Middle Level</p></div></aside>
      </div>
    </section>

    <section className="section about-section" id="about">
      <SectionHeading eyebrow="About" title="A design foundation. A more technical direction." />
      <div className="about-layout"><div><p className="large-copy">I started in web development and UX competitions. Over time, I became more interested in the systems, data, logic, testing, and engineering decisions that make a product genuinely useful.</p><p>Today, my work spans AI applications, full-stack software, testing and automation, robotics, accessibility, and community technology.</p></div><dl className="profile-list"><div><dt>Based in</dt><dd>Middletown, Delaware</dd></div><div><dt>Education</dt><dd>MOT Charter High School<br />Class of 2027</dd></div><div><dt>Academic interests</dt><dd>Computer Science · AI<br />Engineering · Mathematics</dd></div><div><dt>Languages</dt><dd>English · Telugu · Spanish</dd></div></dl></div>
      <div className="skills-grid">{Object.entries(skills).map(([name, items]) => { const SkillIcon = skillIcons[name as keyof typeof skillIcons]; return <article key={name}><h3>{SkillIcon && <SkillIcon className="skill-heading-icon" aria-hidden="true" strokeWidth={2.4} />}{name}</h3><p>{items.join(' · ')}</p></article>; })}</div>
    </section>

    {completedCredentials.length > 0 && <section className="section certifications-section" id="credentials"><SectionHeading eyebrow="Certification" title="Learning with evidence behind it." /><div className="certification-grid">{completedCredentials.map((credential) => <article className="certificate-card" key={credential.name}><p className="eyebrow">Completed</p><h3>{credential.name}</h3><p className="issuer">{credential.issuer}</p>{credential.dateEarned && <p>{credential.dateEarned}</p>}</article>)}</div></section>}

    <section className="contact" id="contact"><p className="eyebrow">Contact</p><h2>Let’s build something <em>useful.</em></h2><p>I’m interested in opportunities to learn, build, and contribute to work with real-world impact.</p><div className="contact-links"><a href="mailto:akhilgajula@gmail.com">Email <span aria-hidden="true">↗</span></a><a href="https://github.com/Akr0G" target="_blank" rel="noreferrer" aria-label="GitHub profile (opens in a new tab)">GitHub <span aria-hidden="true">↗</span></a><a href="https://www.linkedin.com/in/akhil-gajula-13-/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile (opens in a new tab)">LinkedIn <span aria-hidden="true">↗</span></a></div></section>
    <footer><span>© {new Date().getFullYear()} Akhil Gajula</span><a href="#home">Back to top ↑</a></footer>
    </main>
  </>;
}
