import { generateMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'About | Xepter',
  'Xepter was built to bring SMS, MMS, voice, and WhatsApp into one number and one platform, wired directly into the CRM you already use.',
  '/about'
);

import AboutHero from '@/src/components/about/hero';
import OurMission from '@/src/components/about/our-mission';
import AboutTeam from '@/src/components/about/team';
import Integration from '@/src/components/home/integration';
import CTA from '@/src/components/shared/cta';

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <OurMission />
      <AboutTeam />
      <Integration />
      <CTA />
    </>
  );
};

export default AboutPage;
