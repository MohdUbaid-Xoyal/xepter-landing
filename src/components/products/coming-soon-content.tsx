import GhlEmbedForm from '@/src/components/shared/ghl-embed-form';
import SplitPromoSection from '@/src/components/shared/split-promo-section';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { Bell, Lock } from 'lucide-react';

const ComingSoonContent = ({ productName }: { productName: string }) => {
  return (
    <SplitPromoSection
      badge={<BadgePrimary>{productName} — Coming Soon</BadgePrimary>}
      heading={
        <>
          Something powerful
          <br />
          <span className="text-primary-500">is on the way.</span>
        </>
      }
      subheading="Smarter Business Communication Starts Here."
      description="SMS, MMS, Voice, and more — all in one powerful communication platform."
      cardIcon={Bell}
      cardTitle={
        <>
          Want to know when
          <br />
          <span className="whitespace-nowrap">
            <span className="text-primary-500">Xepter</span> goes live?
          </span>
        </>
      }
      cardSubtitle="Subscribe below and be the first to know."
      cardForm={
        <GhlEmbedForm
          formId="S3Jz5oNz6PO9YDqULkmt"
          formName="XEPTER-COMING SOON - SUBSCRIPTION"
          height={215}
        />
      }
      cardFootnote={
        <>
          <Lock className="size-4 shrink-0" />
          We respect your privacy. Unsubscribe anytime.
        </>
      }
    />
  );
};

export default ComingSoonContent;
