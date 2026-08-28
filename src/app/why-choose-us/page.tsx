import ComingSoonContent from '@/src/components/products/coming-soon-content';
import { generateMetadata as buildMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = buildMetadata(
  'Why Choose Us | Coming Soon | Xepter',
  'Our Why Choose Us page is coming soon. Subscribe to be the first to know when it goes live.',
  '/why-choose-us'
);

const WhyChooseUsPage = () => <ComingSoonContent productName="Why Choose Us" />;

export default WhyChooseUsPage;
