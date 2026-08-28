import ComingSoonContent from '@/src/components/products/coming-soon-content';
import { generateMetadata as buildMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = buildMetadata(
  'Industries | Coming Soon | Xepter',
  'Our industries page is coming soon. Subscribe to be the first to know when it goes live.',
  '/solutions/industries'
);

const IndustriesPage = () => <ComingSoonContent productName="Industries" />;

export default IndustriesPage;
