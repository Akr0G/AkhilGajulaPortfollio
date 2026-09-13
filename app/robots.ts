import type { MetadataRoute } from 'next';
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: '*', allow: '/' }, sitemap: 'https://akhil-gajula-portfolio.abloom-rhino-7232.chatgpt.site/sitemap.xml' }; }
