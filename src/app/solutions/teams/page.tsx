import ComingSoonContent from '@/src/components/products/coming-soon-content';
import { generateMetadata as buildMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = buildMetadata(
  'Messaging Solutions for Marketing, Sales & Support Teams | Xepter',
  'Give marketing, sales, support and development teams the tools to communicate with customers using SMS, MMS, Voice, RCS and WhatsApp from one powerful platform.',
  '/solutions/teams',
  undefined,
  undefined,
  undefined,
  [
    'SMS for marketing teams',
    'SMS for sales teams',
    'SMS for customer support',
    'business messaging for teams',
    'team messaging platform',
    'SMS marketing platform',
    'customer communication platform',
    'sales SMS',
    'support SMS',
    'business texting platform',
  ]
);

const TeamsPage = () => <ComingSoonContent productName="Teams" />;

export default TeamsPage;
