import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin',
          '/login',
          '/register',
          '/forgot-password',
          '/post-',
          '/blog.html',
          '/contact.html',
        ],
      },
    ],
    sitemap: 'https://www.rosiesjanitorialoc.com/sitemap.xml',
    host: 'https://www.rosiesjanitorialoc.com',
  };
}
