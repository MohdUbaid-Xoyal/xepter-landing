'use client';

import { Loader2 } from 'lucide-react';
import Script from 'next/script';
import { useState } from 'react';

// GoHighLevel's form iframe bakes a fixed ~14px of top/bottom chrome padding
// into whatever height it's given, which otherwise shows up as dead space
// inside the card. Every GHL embed on this site trims it the same way: a
// clipped wrapper with the iframe pulled in by this many px on each side.
const CHROME_TRIM_PX = 14;

interface GhlEmbedFormProps {
  /** The GHL form id, e.g. from the widget URL /widget/form/<formId>. */
  formId: string;
  /** GHL's internal form name (shown in their dashboard, and as the iframe title). */
  formName: string;
  /** The form's real rendered height in px — not necessarily GHL's declared data-height. */
  height: number;
  borderRadius?: number;
  /** Extra classes on the outer wrapper, e.g. `pt-5` for a little breathing room above the first field. */
  className?: string;
}

// One reusable wrapper for every GHL form embedded on the site (newsletter
// subscribe, book-a-demo, contact) instead of a near-identical copy per form.
const GhlEmbedForm = ({ formId, formName, height, borderRadius = 12, className }: GhlEmbedFormProps) => {
  const [loaded, setLoaded] = useState(false);
  const elementId = `inline-${formId}`;

  return (
    <div className={`relative w-full overflow-hidden ${className ?? ''}`}>
      {!loaded && (
        <div
          className="absolute inset-x-0 top-0 z-10 flex items-center justify-center bg-white"
          style={{ height }}
        >
          <Loader2 className="text-primary-500 size-8 animate-spin" />
        </div>
      )}

      <iframe
        src={`https://api.leadconnectorhq.com/widget/form/${formId}`}
        scrolling="no"
        style={{
          width: '100%',
          height: `${height}px`,
          marginTop: `-${CHROME_TRIM_PX}px`,
          marginBottom: `-${CHROME_TRIM_PX}px`,
          border: 'none',
          borderRadius: `${borderRadius}px`,
          display: 'block',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 300ms ease-in-out',
        }}
        id={elementId}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name={formName}
        data-height={height}
        data-layout-iframe-id={elementId}
        data-form-id={formId}
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        title={formName}
        onLoad={() => setLoaded(true)}
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
    </div>
  );
};

export default GhlEmbedForm;
