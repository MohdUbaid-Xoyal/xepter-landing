import ComingSoonContent from '@/src/components/products/coming-soon-content';
import { generateMetadata as buildMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = buildMetadata(
  'Voice API for Business | Programmable Voice | Xepter',
  "Build voice communications into your applications with Xepter's programmable Voice API. Make and receive calls, automate communications and scale your business.",
  '/products/voice',
  undefined,
  undefined,
  undefined,
  [
    'Voice API',
    'Voice API for business',
    'programmable voice API',
    'business voice API',
    'voice calling API',
    'cloud communications API',
    'VoIP API',
    'programmable calling',
    'voice messaging platform',
    'Voice API USA',
  ]
);

const VoicePage = () => <ComingSoonContent productName="Voice" />;

export default VoicePage;
