import { generateMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Xepter – Powerful SMS, MMS & Voice APIs at Competitive Rates',
  'Connect with customers through SMS, MMS, Voice and messaging APIs with Xepter. Scale your communications with reliable APIs, transparent pricing and volume-based rates.',
  '/',
  undefined,
  'Xepter – SMS, MMS & Voice APIs for Business Communication',
  'Power your customer communications with Xepter SMS, MMS and Voice APIs with transparent, volume-based pricing and competitive rates.'
);

import AboutUs from '@/src/components/home/about-us';
import Benefits from '@/src/components/home/benefits';
import CoreFeatures from '@/src/components/home/core-features';
import FAQ from '@/src/components/home/faq';
import Features from '@/src/components/home/features';
import Hero from '@/src/components/home/hero';
import Integration from '@/src/components/home/integration';
import NetworkBand from '@/src/components/home/network-band';
import Pricing from '@/src/components/home/pricing';
import Process from '@/src/components/home/process';
import Testimonial from '@/src/components/home/testimonial';
import CTA from '@/src/components/shared/cta';

const Page = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Features />
      <Process />
      <CoreFeatures />
      <Benefits />
      <NetworkBand />
      <Pricing />
      <Integration />
      <Testimonial />
      <FAQ />
      <CTA />
    </>
  );
};

export default Page;
