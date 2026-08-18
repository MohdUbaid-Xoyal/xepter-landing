import DevelopersPageContent from '@/src/components/developers/developers-page-content';
import CTA from '@/src/components/shared/cta';
import { generateMetadata as buildMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = buildMetadata(
  'Developers | Xepter',
  "REST APIs and webhooks for SMS, MMS, voice, and WhatsApp — build on the same platform that powers Xepter's app.",
  '/developers'
);

const DevelopersPage = () => (
  <>
    <DevelopersPageContent />
    <CTA />
  </>
);

export default DevelopersPage;
