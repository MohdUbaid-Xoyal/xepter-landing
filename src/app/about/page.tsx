import { generateMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'About Xepter | Business Communications & Messaging Platform',
  'Learn about Xepter, a communications platform helping businesses connect with customers through SMS, MMS, Voice, RCS and WhatsApp APIs.',
  '/about',
  undefined,
  undefined,
  undefined,
  [
    'Xepter',
    'Xepter LLC',
    'Xepter communications',
    'business communications platform',
    'messaging platform',
    'CPaaS provider',
    'communication API provider',
    'business messaging company',
    'SMS API provider',
  ]
);

import AboutHero from '@/src/components/about/hero';
import OurMission from '@/src/components/about/our-mission';
import Integration from '@/src/components/home/integration';
import CTA from '@/src/components/shared/cta';

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <OurMission />
      <Integration />
      <CTA />
    </>
  );
};

export default AboutPage;
