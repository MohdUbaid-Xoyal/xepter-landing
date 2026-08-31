import ComingSoonContent from '@/src/components/products/coming-soon-content';
import { generateMetadata as buildMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = buildMetadata(
  'RCS Messaging API for Business | Rich Business Messaging | Xepter',
  'Engage customers with rich, interactive RCS messaging through Xepter. Deliver branded messages with rich media, buttons and enhanced customer experiences.',
  '/products/rcs',
  undefined,
  undefined,
  undefined,
  [
    'RCS API',
    'RCS messaging API',
    'RCS business messaging',
    'RCS for business',
    'RCS messaging platform',
    'rich communication services',
    'business RCS',
    'RCS API USA',
    'RCS messaging service',
    'programmable RCS',
  ]
);

const RcsPage = () => <ComingSoonContent productName="RCS" />;

export default RcsPage;
