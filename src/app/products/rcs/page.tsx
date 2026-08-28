import ComingSoonContent from '@/src/components/products/coming-soon-content';
import { generateMetadata as buildMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = buildMetadata(
  'RCS | Coming Soon | Xepter',
  'Xepter RCS is coming soon. Subscribe to be the first to know when it goes live.',
  '/products/rcs'
);

const RcsPage = () => <ComingSoonContent productName="RCS" />;

export default RcsPage;
