import GhlEmbedForm from '@/src/components/shared/ghl-embed-form';
import SplitPromoSection from '@/src/components/shared/split-promo-section';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { CalendarCheck } from 'lucide-react';

const DemoContent = () => {
  return (
    <SplitPromoSection
      badge={<BadgePrimary>Book a Demo</BadgePrimary>}
      heading={
        <>
          Request a personalized
          <br />
          <span className="text-primary-500">demo today.</span>
        </>
      }
      subheading="One platform. Smarter business communications."
      description="Get a personalized look at how Xepter can help you manage SMS, MMS, Voice, APIs, 10DLC, and customer communications — all built around your business needs."
      cardIcon={CalendarCheck}
      cardTitle={
        <>
          See <span className="text-primary-500">Xepter</span> in Action
        </>
      }
      cardSubtitle="Fill out the form and our team will reach out shortly."
      cardForm={
        <GhlEmbedForm
          formId="CB2NqJhBVEBDvZR1vwVd"
          formName="XEPTER-BOOK-A-DEMO"
          height={745}
        />
      }
      cardClassName="max-w-[700px]"
      gridClassName="lg:grid-cols-[1fr_1.2fr] lg:gap-x-10"
    />
  );
};

export default DemoContent;
