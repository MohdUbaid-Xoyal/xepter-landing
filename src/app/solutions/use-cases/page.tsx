import ComingSoonContent from '@/src/components/products/coming-soon-content';
import { generateMetadata as buildMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = buildMetadata(
  'Use Cases | Coming Soon | Xepter',
  'Our use-cases page is coming soon. Subscribe to be the first to know when it goes live.',
  '/solutions/use-cases'
);

const UseCasesPage = () => <ComingSoonContent productName="Use Cases" />;

export default UseCasesPage;
