import Link from 'next/link';
const links = [['Work', '#work'], ['Impact', '#impact'], ['About', '#about'], ['Awards', '#awards'], ['Resume', '/akhil-gajula-resume.pdf'], ['Contact', '#contact']];
export function Navigation() { return <header className="nav"><Link href="/" className="wordmark">AKHIL<span>.</span></Link><nav aria-label="Primary navigation">{links.map(([label, href]) => <a href={href} key={label}>{label}</a>)}</nav><a className="nav-contact" href="#contact">Get in touch <span aria-hidden="true">↗</span></a></header>; }
