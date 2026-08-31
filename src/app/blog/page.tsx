import ComingSoonContent from '@/src/components/products/coming-soon-content';
import { generateMetadata as buildMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = buildMetadata(
  'Xepter News & Updates | Messaging & Communications',
  'Get the latest Xepter news, product updates, messaging technology developments, platform improvements and business communication insights.',
  '/blog',
  undefined,
  undefined,
  undefined,
  [
    'Xepter news',
    'Xepter updates',
    'SMS industry news',
    'messaging technology',
    'business messaging news',
    'CPaaS news',
    'SMS technology updates',
    'communications technology',
  ]
);

const Page = () => <ComingSoonContent productName="News & Updates" />;

export default Page;
