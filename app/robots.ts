import type { MetadataRoute } from 'next';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const base = process.env.GITHUB_ACTIONS && repository
  ? `https://akr0g.github.io/${repository}`
  : 'https://akhil-gajula-portfolio.abloom-rhino-7232.chatgpt.site';

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: '*', allow: '/' }, sitemap: `${base}/sitemap.xml` };
}
