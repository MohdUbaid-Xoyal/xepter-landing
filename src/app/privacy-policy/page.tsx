import PrivacyContent from '@/src/components/privacy-policy/privacy-content';
import PrivacyHero from '@/src/components/privacy-policy/privacy-hero';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Privacy Policy | Xepter',
  'How Xepter LLC collects, uses, discloses, retains, and protects personal information across our websites, applications, APIs, and communications services.',
  '/privacy-policy'
);

const PrivacyPolicyPage = () => {
  return (
    <>
      <PrivacyHero />
      <PrivacyContent />
    </>
  );
};

export default PrivacyPolicyPage;
