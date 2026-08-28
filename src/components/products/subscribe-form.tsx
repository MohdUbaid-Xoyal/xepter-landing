'use client';

import { Loader2 } from 'lucide-react';
import Script from 'next/script';
import { useState } from 'react';

// The GHL form iframe carries its own top/bottom padding that leaves dead space
// inside the card. We clip it: the wrapper hides overflow and the iframe is
// pulled in with negative margins, then sized just tall enough for the fields.
// The `height` style value stays constant across renders so React never
// re-applies it and clobbers a height form_embed.js may set.
const SubscribeForm = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full overflow-hidden">
      {!loaded && (
        <div className="absolute inset-x-0 top-0 z-10 flex h-[190px] items-center justify-center bg-white">
          <Loader2 className="text-primary-500 size-8 animate-spin" />
        </div>
      )}

      <iframe
        src="https://api.leadconnectorhq.com/widget/form/S3Jz5oNz6PO9YDqULkmt"
        scrolling="no"
        style={{
          width: '100%',
          height: '215px',
          marginTop: '-14px',
          marginBottom: '-14px',
          border: 'none',
          borderRadius: '12px',
          display: 'block',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 300ms ease-in-out',
        }}
        id="inline-S3Jz5oNz6PO9YDqULkmt"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="XEPTER-COMING SOON - SUBSCRIPTION"
        data-height="215"
        data-layout-iframe-id="inline-S3Jz5oNz6PO9YDqULkmt"
        data-form-id="S3Jz5oNz6PO9YDqULkmt"
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        title="XEPTER-COMING SOON - SUBSCRIPTION"
        onLoad={() => setLoaded(true)}
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
    </div>
  );
};

export default SubscribeForm;
