import { generateMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Xepter | SMS, MMS, Voice, RCS & WhatsApp APIs',
  'Connect with customers through SMS, MMS, Voice, RCS and WhatsApp APIs. Xepter provides reliable business messaging, powerful APIs and competitive US pricing.',
  '/',
  undefined,
  undefined,
  undefined,
  [
    'SMS API',
    'MMS API',
    'Voice API',
    'RCS API',
    'WhatsApp API',
    'business messaging platform',
    'CPaaS platform',
    'business communication API',
    'SMS messaging API',
    'communications platform',
  ]
);

import AboutUs from '@/src/components/home/about-us';
import Benefits from '@/src/components/home/benefits';
import FAQ from '@/src/components/home/faq';
import Features from '@/src/components/home/features';
import Hero from '@/src/components/home/hero';
import Integration from '@/src/components/home/integration';
import NetworkBand from '@/src/components/home/network-band';
import PlatformHighlight from '@/src/components/home/platform-highlight';
import Process from '@/src/components/home/process';
import Testimonial from '@/src/components/home/testimonial';
import CTA from '@/src/components/shared/cta';

const Page = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <PlatformHighlight />
      <Features />
      <Process />
      <Benefits />
      <NetworkBand />
      <Integration />
      <Testimonial />
      <FAQ />
      <CTA />
    </>
  );
};

export default Page;
