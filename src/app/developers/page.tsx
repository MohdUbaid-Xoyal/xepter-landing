import DevelopersPageContent from '@/src/components/developers/developers-page-content';
import CTA from '@/src/components/shared/cta';
import { generateMetadata as buildMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = buildMetadata(
  'SMS, MMS & Voice API Documentation | Xepter Developers',
  'Explore Xepter API documentation for SMS, MMS, Voice and business messaging. Find API references, guides, code examples and integration resources for developers.',
  '/developers',
  undefined,
  undefined,
  undefined,
  [
    'SMS API documentation',
    'SMS API docs',
    'MMS API documentation',
    'Voice API documentation',
    'SMS API developer',
    'messaging API documentation',
    'communications API documentation',
    'SMS API integration',
    'SMS API reference',
    'developer messaging API',
  ]
);

const DevelopersPage = () => (
  <>
    <DevelopersPageContent />
    <CTA />
  </>
);

export default DevelopersPage;
