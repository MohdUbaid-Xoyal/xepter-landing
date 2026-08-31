import ComingSoonContent from '@/src/components/products/coming-soon-content';
import { generateMetadata as buildMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = buildMetadata(
  'Business Messaging Solutions & Use Cases | Xepter',
  'Discover how businesses use Xepter for marketing, notifications, customer engagement, authentication, alerts and automated communications through SMS, MMS, Voice and more.',
  '/solutions/use-cases',
  undefined,
  undefined,
  undefined,
  [
    'business messaging solutions',
    'SMS use cases',
    'SMS business solutions',
    'SMS automation',
    'business SMS solutions',
    'customer communication platform',
    'SMS marketing solutions',
    'automated business messaging',
    'customer engagement messaging',
    'communication automation',
  ]
);

const UseCasesPage = () => <ComingSoonContent productName="Use Cases" />;

export default UseCasesPage;
