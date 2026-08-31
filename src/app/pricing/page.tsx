import PricingCta from '@/src/components/pricing/pricing-cta';
import PricingHero from '@/src/components/pricing/pricing-hero';
import PricingRates from '@/src/components/pricing/pricing-rates';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'SMS API Pricing | Transparent & Competitive Messaging Rates | Xepter',
  'Get transparent, volume-based pricing for SMS, MMS, Voice and business messaging. Start using Xepter with rates from $0.0065 per SMS segment, based on usage.',
  '/pricing',
  undefined,
  undefined,
  undefined,
  [
    'SMS API pricing',
    'SMS pricing',
    'SMS API cost',
    'SMS messaging pricing',
    'business SMS pricing',
    'MMS API pricing',
    'Voice API pricing',
    'SMS rates',
    'SMS cost per message',
    'affordable SMS API',
    'SMS API pricing USA',
  ]
);

const PricingPage = () => {
  return (
    <>
      <PricingHero />
      <PricingRates />
      <PricingCta />
    </>
  );
};

export default PricingPage;
