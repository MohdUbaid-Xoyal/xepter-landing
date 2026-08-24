import ContactHero from '@/src/components/contact/contact-hero';
import ContactQuickLinks from '@/src/components/contact/contact-quick-links';
import ContactUs from '@/src/components/contact/contact-us';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Contact - Xepter SMS',
  "Let's talk about how Xepter can bring SMS, MMS, voice, and WhatsApp into the CRM you already run.",
  '/contact'
);

const ContactPage = () => {
  return (
    <>
      <ContactHero />
      <ContactUs />
      <ContactQuickLinks />
    </>
  );
};

export default ContactPage;
