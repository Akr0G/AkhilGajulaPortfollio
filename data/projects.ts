export type Project = {
  slug: string;
  title: string;
  period: string;
  category: string;
  summary: string;
  role: string;
  impact: string;
  stack: string[];
  github?: string;
  sections: { title: string; body: string }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'uxbench', title: 'UXBench', period: 'Sep 2026 — Present', category: 'Full-stack / Testing infrastructure', featured: true,
    summary: 'A full-stack website auditing and comparison platform that turns subjective UX claims into measurable evidence.',
    role: 'Engineer — automated testing pipeline, scoring, evidence capture',
    impact: 'Compares real websites across accessibility, performance, responsive behavior, technical quality, and usability-related signals.',
    stack: ['Next.js', 'TypeScript', 'SQLite', 'Playwright', 'Lighthouse', 'axe-core'],
    sections: [
      { title: 'Overview', body: 'UXBench evaluates real websites with a standardized, repeatable audit workflow. It is designed as testing infrastructure—not simply as a design critique tool.' },
      { title: 'Architecture', body: 'The platform runs audits across viewport sizes, combines results from Lighthouse and axe-core, captures evidence for findings, then converts raw signals into prioritized scores.' },
      { title: 'Technical challenge', body: 'A useful audit needs more than one score. The pipeline brings accessibility, performance, responsive behavior, and technical quality into one comparable system while retaining the evidence behind each finding.' },
      { title: 'Result', body: 'UXBench creates a more objective basis for evaluating and comparing websites.' },
    ],
  },
  {
    slug: 'outreachflow', title: 'OutreachFlow', period: 'Sep 2026 — Present', category: 'Full-stack / AI workflow', featured: true,
    summary: 'An outreach management platform for organizing contacts, communication workflows, and thoughtfully personalized messages.',
    role: 'Full-stack developer — product architecture, database workflows, integrations',
    impact: 'Pairs AI-assisted message generation with explicit user review before communication is sent.',
    stack: ['Next.js', 'React', 'TypeScript', 'Supabase', 'OpenAI API', 'Gmail'], github: 'https://github.com/Akr0G/OutreachFlow',
    sections: [
      { title: 'Overview', body: 'OutreachFlow brings contact management, outreach tracking, AI-assisted drafting, and persistent workflow organization into one application.' },
      { title: 'Architecture', body: 'The application combines authentication, database-backed contact and outreach records, API-driven message generation, and Gmail integration.' },
      { title: 'Responsible automation', body: 'AI helps create personalized draft messages, but users review communication before it is sent. The goal is useful workflow automation without removing human judgment.' },
      { title: 'What I learned', body: 'Building workflow software requires careful attention to state, integrations, authentication, and the handoff between AI assistance and user control.' },
    ],
  },
  {
    slug: 'our-daily-bread', title: 'Our Daily Bread', period: 'Jun 2025 — Early 2026', category: 'Community technology', featured: true,
    summary: 'Survey, data-collection, and mapping tools for a nonprofit dining room to better understand the community it serves.',
    role: 'Technology contributor — survey design, data organization, geographic mapping',
    impact: 'The survey report was reviewed by the board; leadership used the map to help communicate a census-district mapping need.',
    stack: ['Google Forms', 'Google Sheets', 'Data visualization', 'Mapping'],
    sections: [
      { title: 'Organization need', body: 'Our Daily Bread Dining Room of MOT needed clearer, usable information about the people and communities it serves.' },
      { title: 'Solution', body: 'I designed a survey and data-collection system, organized collected information, and created a geographic/service map to support planning and outreach.' },
      { title: 'Real-world use', body: 'The survey instrument helped the organization conduct and analyze its food survey. Its board reviewed the resulting report, and leadership used the map as an example when communicating a census-district mapping need. University of Delaware students later worked on a demographics survey as a capstone project.' },
      { title: 'Testimonial', body: '“I used your map to show him what I wanted, so it was a valuable tool. I am very pleased with the results of the survey and we could not have done it without your help.” — Marjorie Crofts, Our Daily Bread' },
    ],
  },
  {
    slug: 'necs-2026', title: 'NECS 2026: The Battle for Nashville', period: 'Sep 2025 — May 2026', category: 'Competition / UX engineering',
    summary: 'An interactive esports championship digital experience created for BPA User Experience Design.', role: 'UX designer & prototyper', impact: '1st place, Delaware BPA State Leadership Conference · 4th place, BPA National Leadership Conference.',
    stack: ['Framer', 'Interactive prototyping', 'Accessibility Insights', 'Responsive design'],
    sections: [
      { title: 'Research', body: 'The project progressed from competitor analysis and information architecture into a design system, responsive prototypes, and accessibility validation.' },
      { title: 'Design decisions', body: 'The experience included event navigation, match, team, and game information; community features; ticketing concepts; interactive cards and popups; and an original Discord-inspired community interface.' },
      { title: 'Testing & iteration', body: 'Accessibility considerations were integrated into the work and evaluated with Accessibility Insights for Web. Mobile layouts were treated as a deliberate prototype, not a scaled-down desktop page.' },
      { title: 'Competition result', body: '1st place at Delaware BPA State Leadership Conference and 4th place at BPA National Leadership Conference. This was a competition project, not an official NECS website.' },
    ],
  },
  {
    slug: 'ai-website-summarizer', title: 'AI Website Summarizer', period: '2025', category: 'Browser extension / AI',
    summary: 'A Chrome extension that extracts useful webpage content and generates structured summaries with Gemini.', role: 'Developer — extraction pipeline and interface', impact: 'Designed content filtering, PDF support, accessible controls, and a persistent floating interface.',
    stack: ['JavaScript', 'Gemini API', 'PDF.js', 'Chrome Extension APIs', 'ARIA'],
    sections: [
      { title: 'Overview', body: 'The extension is more than a page-to-model shortcut: it identifies visible DOM text, filters it heuristically, and applies text-length controls before prompting the model.' },
      { title: 'Technical implementation', body: 'It supports PDFs with PDF.js, structured prompts, API-key management, error handling, a floating persistent interface, ARIA roles, and keyboard navigation.' },
      { title: 'What I learned', body: 'The usefulness of an AI feature depends on extraction quality and interface design as much as model output.' },
    ],
  },
  {
    slug: 'vex-robotics', title: 'VEX Robotics', period: 'Ongoing', category: 'Robotics / engineering',
    summary: 'Autonomous programming, control systems, and iterative robot development for VEX team 19709A.', role: 'Lead Programmer / Programmer', impact: 'Multiple regional qualifications; team earned the VEX Design Award at the DelMarVa V5 Regional Championship.',
    stack: ['C++', 'PROS', 'EZ-Template', 'PID control', 'IMU', 'Odometry'],
    sections: [
      { title: 'Engineering loop', body: 'Build → Test → Measure → Tune → Repeat. Robotics taught me to treat every assumption as something to test on the field.' },
      { title: 'Technical work', body: 'I worked on autonomous routines, drivetrain controls, PID/proportional control, encoder feedback, IMU integration, odometry experimentation, pneumatic controls, motion tuning, debugging, and iteration.' },
      { title: 'Result', body: 'The team qualified for regional competition multiple times and earned the VEX Design Award at the DelMarVa V5 Regional Championship.' },
    ],
  },
  {
    slug: 'brew-barn', title: 'The Brew Barn', period: 'Sep 2024 — May 2025', category: 'Competition / UX foundation',
    summary: 'A responsive coffee-shop digital experience demonstrating the UX foundation that informs my current software work.', role: 'UX designer & prototyper', impact: '1st place, Delaware BPA UX Design · 7th nationally at BPA NLC 2025.',
    stack: ['Framer', 'Responsive design', 'Information architecture', 'Accessibility'],
    sections: [
      { title: 'Overview', body: 'The Brew Barn focused on menu browsing, merchandise, locations, brand storytelling, navigation, responsive behavior, usability, and accessibility.' },
      { title: 'What it shaped', body: 'This project reflects an earlier UX focus. The research and human-centered design habits developed here now strengthen the software and automation work I build.' },
      { title: 'Competition result', body: '1st place in Delaware BPA UX Design; top 10 nationally and 7th nationally at BPA NLC 2025.' },
    ],
  },
  {
    slug: 'smart-microbiome-filter', title: 'Smart Microbiome Filter', period: 'Apr 2026', category: 'Bioengineering research concept',
    summary: 'A research and design concept exploring a proactive microbiome filter that preserves beneficial microbes while distinguishing harmful bacterial activity.', role: 'Research & poster presentation contributor', impact: '3rd place overall in a Biomedical Engineering Society / Penn Engineering-related high school program.',
    stack: ['Research', 'Microbiome', 'Quorum sensing', 'CRISPR-Cas', 'Research poster'],
    sections: [
      { title: 'Research concept', body: 'This was a bioengineering research concept—not a clinically tested device or finished medical technology.' },
      { title: 'Approach', body: 'The team explored microbiome dysbiosis, quorum sensing, AHL signaling, AI-2, CRISPR-Cas, bacteriophage/nanocarrier delivery concepts, virulence genes, off-target effects, and delivery specificity.' },
      { title: 'Result', body: 'Working with an undergraduate mentor, the team presented the concept through a research poster and placed 3rd overall.' },
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
