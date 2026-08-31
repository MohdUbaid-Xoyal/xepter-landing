import ComingSoonContent from '@/src/components/products/coming-soon-content';
import { generateMetadata as buildMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = buildMetadata(
  'Business Messaging Solutions by Industry | Xepter',
  'Explore communication solutions built for different industries. Use SMS, MMS, Voice, RCS and WhatsApp to engage customers, automate workflows and improve communication.',
  '/solutions/industries',
  undefined,
  undefined,
  undefined,
  [
    'business messaging by industry',
    'SMS solutions by industry',
    'industry messaging solutions',
    'SMS for businesses',
    'business communication solutions',
    'SMS marketing for businesses',
    'customer communication platform',
    'business texting solutions',
    'industry SMS platform',
    'enterprise messaging solutions',
  ]
);

const IndustriesPage = () => <ComingSoonContent productName="Industries" />;

export default IndustriesPage;
