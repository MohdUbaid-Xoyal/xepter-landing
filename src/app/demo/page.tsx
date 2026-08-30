import DemoContent from '@/src/components/products/demo-content';
import { generateMetadata as buildMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = buildMetadata(
  'Request a Demo | Xepter',
  'See Xepter in action. Get a personalized look at SMS, MMS, Voice, APIs, 10DLC, and customer communications built around your business needs.',
  '/demo'
);

const DemoPage = () => <DemoContent />;

export default DemoPage;
