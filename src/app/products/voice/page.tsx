import ComingSoonContent from '@/src/components/products/coming-soon-content';
import { generateMetadata as buildMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = buildMetadata(
  'Voice | Coming Soon | Xepter',
  'Xepter Voice is coming soon. Subscribe to be the first to know when it goes live.',
  '/products/voice'
);

const VoicePage = () => <ComingSoonContent productName="Voice" />;

export default VoicePage;
