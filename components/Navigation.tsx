import Link from 'next/link';

const links = [
  ['Work', '#work'],
  ['About', '#about'],
  ['Experience', '#experience'],
  ['Awards', '#awards'],
  ['Resume', '/akhil-gajula-resume.pdf'],
  ['Contact', '#contact'],
];

export function Navigation() {
  return <header className="nav">
    <Link href="/" className="wordmark">AKHIL<span>.</span></Link>
    <nav aria-label="Primary navigation">
      {links.map(([label, href]) => <a href={href} key={label}>{label}</a>)}
    </nav>
    <a className="nav-contact" href="/akhil-gajula-resume.pdf">Resume <span aria-hidden="true">↗</span></a>
  </header>;
}
