'use client';

import Script from 'next/script';

// The GHL form iframe carries a little top/bottom chrome padding baked into
// its declared data-height. It's trimmed with small negative margins on a
// clipped wrapper — the form itself needs close to the full 948px.
const ContactForm = () => {
  return (
    <div className="relative w-full overflow-hidden pt-5">
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/e1lJnQ2TwlUBDtSDd3Su"
        scrolling="no"
        style={{
          width: '100%',
          height: '948px',
          marginTop: '-14px',
          marginBottom: '-14px',
          border: 'none',
          borderRadius: '20px',
          display: 'block',
        }}
        id="inline-e1lJnQ2TwlUBDtSDd3Su"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Form 1"
        data-height="948"
        data-layout-iframe-id="inline-e1lJnQ2TwlUBDtSDd3Su"
        data-form-id="e1lJnQ2TwlUBDtSDd3Su"
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        title="Form 1"
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
    </div>
  );
};

export default ContactForm;
