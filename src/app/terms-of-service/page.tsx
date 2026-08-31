import TermsContent from '@/src/components/terms-of-service/terms-content';
import TermsHero from '@/src/components/terms-of-service/terms-hero';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Terms of Use | Xepter',
  "Review the Xepter Terms of Use governing access to and use of Xepter's website, platform, APIs and communication services.",
  '/terms-of-service',
  undefined,
  undefined,
  undefined,
  ['Xepter terms', 'Xepter terms of use', 'Xepter terms of service']
);

const TermsOfServicePage = () => {
  return (
    <>
      <TermsHero />
      <TermsContent />
    </>
  );
};

export default TermsOfServicePage;
