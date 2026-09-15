import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const base = process.env.GITHUB_ACTIONS && repository
  ? `https://akr0g.github.io/${repository}`
  : 'https://akhil-gajula-portfolio.abloom-rhino-7232.chatgpt.site';

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: base, lastModified: new Date() }, ...projects.map((project) => ({ url: `${base}/work/${project.slug}`, lastModified: new Date() }))];
}
