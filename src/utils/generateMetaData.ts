import type { Metadata } from 'next';

export const DEFAULT_URL = 'https://xepter.com/';
export const DEFAULT_TITLE = 'Xepter – Powerful SMS, MMS & Voice APIs at Competitive Rates';
export const DEFAULT_DESCRIPTION =
  'Connect with customers through SMS, MMS, Voice and messaging APIs with Xepter. Scale your communications with reliable APIs, transparent pricing and volume-based rates.';
export const DEFAULT_IMAGE_URL =
  'https://images.prismic.io/staticmania/aPD-K55xUNkB2D2X_og-image.jpg';
export const DEFAULT_KEYWORDS = [
  'SMS API',
  'SMS API provider',
  'MMS API',
  'Voice API',
  'messaging API',
  'business messaging',
  'SMS messaging',
  'SMS platform',
  'CPaaS',
  'communication platform',
  'SMS gateway',
  'bulk SMS API',
  'programmable SMS',
  'programmable voice',
  '10DLC',
  'SMS campaigns',
  'customer communication',
  'business communication',
  'messaging platform',
  'Xepter',
];

const defaultMetadata: Metadata = {
  metadataBase: new URL(DEFAULT_URL),
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  keywords: DEFAULT_KEYWORDS,
  robots: { index: true, follow: true },
  authors: [{ name: 'Xepter' }],
  openGraph: {
    type: 'website',
    siteName: 'Xepter',
    url: DEFAULT_URL,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [{ url: DEFAULT_IMAGE_URL, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_IMAGE_URL],
  },
};

const generateMetadata = (
  title?: string,
  description?: string,
  canonicaUrl?: string,
  imageUrl?: string,
  ogTitle?: string,
  ogDescription?: string
): Metadata => {
  return {
    ...defaultMetadata,
    title: title ?? defaultMetadata.title,
    description: description ?? defaultMetadata.description,
    alternates: {
      canonical: canonicaUrl,
    },
    openGraph: {
      ...defaultMetadata.openGraph,
      title: ogTitle ?? title ?? defaultMetadata.openGraph?.title,
      description: ogDescription ?? description ?? defaultMetadata.openGraph?.description,
      url: canonicaUrl ?? defaultMetadata.openGraph?.url,
      images: imageUrl
        ? [{ url: imageUrl, width: 1200, height: 630 }]
        : defaultMetadata.openGraph?.images,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: ogTitle ?? title ?? defaultMetadata.twitter?.title,
      description: ogDescription ?? description ?? defaultMetadata.twitter?.description,
      images: imageUrl ? [imageUrl] : defaultMetadata.twitter?.images,
    },
  };
};

export { defaultMetadata, generateMetadata };
