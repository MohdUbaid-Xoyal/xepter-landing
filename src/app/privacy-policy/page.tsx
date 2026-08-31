import PrivacyContent from '@/src/components/privacy-policy/privacy-content';
import PrivacyHero from '@/src/components/privacy-policy/privacy-hero';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Privacy Policy | Xepter',
  "Read Xepter's Privacy Policy to understand how we collect, use, protect and manage information when you use our website and communication services.",
  '/privacy-policy',
  undefined,
  undefined,
  undefined,
  ['Xepter privacy policy', 'Xepter data privacy', 'Xepter privacy']
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
