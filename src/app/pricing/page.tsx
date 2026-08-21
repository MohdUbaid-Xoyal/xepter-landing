import PricingFaq from '@/src/components/pricing/pricing-faq';
import PricingHero from '@/src/components/pricing/pricing-hero';
import PricingRates from '@/src/components/pricing/pricing-rates';
import CTA from '@/src/components/shared/cta';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Transparent Pricing, Always | Xepter',
  'Clear, transparent, volume-based pricing for 10DLC SMS and MMS. Number pricing, messaging rates, and carrier pass-through fees on one panel.',
  '/pricing'
);

const PricingPage = () => {
  return (
    <>
      <PricingHero />
      <PricingRates />
      <PricingFaq />
      <CTA />
    </>
  );
};

export default PricingPage;
