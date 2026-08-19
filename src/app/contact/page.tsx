import ContactUs from '@/src/components/contact/contact-us';
import CTA from '@/src/components/shared/cta';
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
      <ContactUs />
      <CTA />
    </>
  );
};

export default ContactPage;
