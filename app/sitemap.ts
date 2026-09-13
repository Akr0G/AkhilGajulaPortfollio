import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
export default function sitemap(): MetadataRoute.Sitemap { const base = 'https://akhil-gajula-portfolio.abloom-rhino-7232.chatgpt.site'; return [{ url: base, lastModified: new Date() }, ...projects.map((project) => ({ url: `${base}/work/${project.slug}`, lastModified: new Date() }))]; }
