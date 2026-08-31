import { DEFAULT_URL } from '@/src/utils/generateMetaData';
import type { MetadataRoute } from 'next';

const BASE_URL = DEFAULT_URL.replace(/\/$/, '');

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/login', '/signup'],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
