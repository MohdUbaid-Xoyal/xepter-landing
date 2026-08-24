import TermsContent from '@/src/components/terms-of-service/terms-content';
import TermsHero from '@/src/components/terms-of-service/terms-hero';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Terms of Service | Xepter',
  'The terms and conditions governing access to and use of Xepter LLC communications services, including ordering, billing, acceptable use, and liability terms.',
  '/terms-of-service'
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
