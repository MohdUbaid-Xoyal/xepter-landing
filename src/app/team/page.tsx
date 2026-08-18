import CoreValues from '@/src/components/team/core-values';
import OurTeam from '@/src/components/team/our-team';
import CTA from '@/src/components/shared/cta';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Team | Xepter',
  'Meet the team behind Xepter — product, design, and engineering shipping SMS, MMS, voice, and WhatsApp for teams that talk to customers every day.',
  '/team'
);

const Page = () => {
  return (
    <>
      <OurTeam />
      <CoreValues />
      <CTA />
    </>
  );
};

export default Page;
