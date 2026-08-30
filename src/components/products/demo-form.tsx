'use client';

import { Loader2 } from 'lucide-react';
import Script from 'next/script';
import { useState } from 'react';

// The GHL form iframe carries its own top/bottom padding that leaves dead space
// inside the card, so it's trimmed with small negative margins on a clipped
// wrapper. The `height` style value stays constant across renders so React
// never re-applies it and clobbers a height form_embed.js may set.
const DemoForm = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full overflow-hidden">
      {!loaded && (
        <div className="absolute inset-x-0 top-0 z-10 flex h-[717px] items-center justify-center bg-white">
          <Loader2 className="text-primary-500 size-8 animate-spin" />
        </div>
      )}

      <iframe
        src="https://api.leadconnectorhq.com/widget/form/CB2NqJhBVEBDvZR1vwVd"
        scrolling="no"
        style={{
          width: '100%',
          height: '745px',
          marginTop: '-14px',
          marginBottom: '-14px',
          border: 'none',
          borderRadius: '12px',
          display: 'block',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 300ms ease-in-out',
        }}
        id="inline-CB2NqJhBVEBDvZR1vwVd"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="XEPTER-BOOK-A-DEMO"
        data-height="745"
        data-layout-iframe-id="inline-CB2NqJhBVEBDvZR1vwVd"
        data-form-id="CB2NqJhBVEBDvZR1vwVd"
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        title="XEPTER-BOOK-A-DEMO"
        onLoad={() => setLoaded(true)}
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
    </div>
  );
};

export default DemoForm;
