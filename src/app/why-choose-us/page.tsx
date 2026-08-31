import ComingSoonContent from '@/src/components/products/coming-soon-content';
import { generateMetadata as buildMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = buildMetadata(
  'Why Choose Xepter | Reliable & Cost-Effective Messaging',
  'Discover why businesses choose Xepter for reliable messaging, competitive pricing, scalable APIs, real-time analytics, compliance tools and customer communications.',
  '/why-choose-us',
  undefined,
  undefined,
  undefined,
  [
    'SMS API provider',
    'best SMS API',
    'affordable SMS API',
    'SMS platform',
    'business messaging platform',
    'CPaaS provider',
    'SMS API pricing',
    'reliable SMS provider',
    'SMS messaging provider',
    'Twilio alternative',
  ]
);

const WhyChooseUsPage = () => <ComingSoonContent productName="Why Choose Us" />;

export default WhyChooseUsPage;
