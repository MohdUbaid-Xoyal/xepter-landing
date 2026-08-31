import { DEFAULT_URL } from '@/src/utils/generateMetaData';
import type { MetadataRoute } from 'next';

const BASE_URL = DEFAULT_URL.replace(/\/$/, '');

// One timestamp for the whole build, used only as a fallback where we have no
// real "last changed" date to report — never a per-request `new Date()`,
// which would tell crawlers a page changed on every single crawl.
const BUILD_DATE = new Date();

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>;

type StaticRoute = {
  path: string;
  changeFrequency: ChangeFrequency;
  priority: number;
};

// Real, unique-content pages — the ones worth Google's crawl budget.
const liveRoutes: StaticRoute[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/demo', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/pricing', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/products/sms', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/products/mms', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/developers', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/terms-of-service', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.3 },
];

// "Coming Soon" stub pages — all render the same placeholder component with
// near-duplicate copy (only the product/section name differs), so they get
// low priority and an infrequent changefreq until real content replaces
// them. Bump each one into `liveRoutes` above as it actually launches.
const comingSoonRoutes: StaticRoute[] = [
  { path: '/blog', changeFrequency: 'monthly', priority: 0.4 },
  { path: '/products/voice', changeFrequency: 'monthly', priority: 0.4 },
  { path: '/products/whatsapp', changeFrequency: 'monthly', priority: 0.4 },
  { path: '/products/rcs', changeFrequency: 'monthly', priority: 0.4 },
  { path: '/solutions/use-cases', changeFrequency: 'monthly', priority: 0.4 },
  { path: '/solutions/industries', changeFrequency: 'monthly', priority: 0.4 },
  { path: '/solutions/teams', changeFrequency: 'monthly', priority: 0.4 },
  { path: '/why-choose-us', changeFrequency: 'monthly', priority: 0.4 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [...liveRoutes, ...comingSoonRoutes].map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: BUILD_DATE,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
