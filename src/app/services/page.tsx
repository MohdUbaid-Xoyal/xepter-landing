import ServicesHero from '@/src/components/services/hero';
import ServicesList from '@/src/components/services/services-list';
import WhyChoose from '@/src/components/services/why-choose';
import CTA from '@/src/components/shared/cta';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Services | Xepter',
  'Hands-on services to get you live faster — number porting, 10DLC compliance, CRM setup, and custom API integrations.',
  '/services'
);

const ServicesPage = () => {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <WhyChoose />
      <CTA />
    </>
  );
};

export default ServicesPage;
