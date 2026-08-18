import FeaturesSection from '@/src/components/features/features';
import WorkFlow from '@/src/components/features/work-flow';
import Testimonial from '@/src/components/home/testimonial';
import CTA from '@/src/components/shared/cta';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata('Features | Xepter', undefined, '/features');

const FeaturesPage = () => {
  return (
    <>
      <FeaturesSection />
      <WorkFlow />
      <Testimonial />
      <CTA />
    </>
  );
};

export default FeaturesPage;
