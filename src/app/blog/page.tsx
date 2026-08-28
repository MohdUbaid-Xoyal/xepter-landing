import ComingSoonContent from '@/src/components/products/coming-soon-content';
import { generateMetadata as buildMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = buildMetadata(
  'News & Updates | Coming Soon | Xepter',
  'Our news and updates page is coming soon. Subscribe to be the first to know when it goes live.',
  '/blog'
);

const Page = () => <ComingSoonContent productName="News & Updates" />;

export default Page;
