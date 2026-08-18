import {
  AnalyticsIconV2,
  BlogIcon,
  FeatureIcon,
  IntegrationIcon,
  IntegrationIconV2,
  SecurityIcon,
  SupportIconV2,
  TeamIcon,
} from '@/src/components/shared/icon/menu-icon';
import type { ComponentType } from 'react';

export interface ProductCapability {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface ProductHowItWorksStep {
  title: string;
  description: string;
}

export interface ProductPageContent {
  slug: 'sms' | 'mms' | 'voice' | 'whatsapp';
  eyebrow: string;
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  capabilitiesTitle: string;
  capabilitiesSubtitle: string;
  capabilities: ProductCapability[];
  howItWorksTitle: string;
  howItWorksSubtitle: string;
  steps: ProductHowItWorksStep[];
}

export const productsContent: Record<ProductPageContent['slug'], ProductPageContent> = {
  sms: {
    slug: 'sms',
    eyebrow: 'SMS',
    title: 'Two-way SMS your customers actually reply to',
    subtitle:
      'Send and receive SMS from a single number your team already uses inside GoHighLevel or HubSpot — campaigns, templates, and real conversations, not just blasts.',
    metaTitle: 'SMS | Xepter',
    metaDescription:
      'Two-way SMS messaging with campaigns, templates, delivery tracking, and built-in 10DLC compliance — synced into your CRM.',
    capabilitiesTitle: 'Everything you need to text at scale',
    capabilitiesSubtitle:
      'One number, one conversation thread, and a delivery pipeline built to stay compliant as you grow.',
    capabilities: [
      {
        icon: FeatureIcon,
        title: 'Two-way conversations',
        description:
          "Every reply lands back in the same conversation thread inside your CRM, so nothing gets lost in a separate SMS tool.",
      },
      {
        icon: BlogIcon,
        title: 'Campaigns & templates',
        description:
          'Build reusable message templates and send targeted campaigns to segments without leaving your workflow.',
      },
      {
        icon: AnalyticsIconV2,
        title: 'Delivery tracking',
        description:
          'Real-time delivery receipts and webhooks show exactly what was sent, delivered, or failed.',
      },
      {
        icon: SecurityIcon,
        title: '10DLC compliance built in',
        description:
          'Brand and campaign registration is handled for you, so your traffic stays compliant and deliverable.',
      },
    ],
    howItWorksTitle: 'From number to first reply',
    howItWorksSubtitle: 'Three steps between signing up and your first two-way conversation.',
    steps: [
      {
        title: 'Connect a number',
        description: 'Buy or port a local or toll-free number in minutes.',
      },
      {
        title: 'Send from your CRM',
        description:
          'Trigger SMS from GoHighLevel, HubSpot, or the API — no separate app to manage.',
      },
      {
        title: 'Track every reply',
        description: 'Replies, delivery status, and opt-outs sync back automatically.',
      },
    ],
  },
  mms: {
    slug: 'mms',
    eyebrow: 'MMS',
    title: 'Rich media messaging that gets noticed',
    subtitle:
      'Send images, PDFs, and short video alongside your text — the same number, the same conversation thread, more ways to get a response.',
    metaTitle: 'MMS | Xepter',
    metaDescription:
      'Send images, PDFs, and video over MMS from the same numbers and workflows as SMS, with automatic fallback and delivery tracking.',
    capabilitiesTitle: 'Say more than text allows',
    capabilitiesSubtitle: 'Media-rich messages that run on the same infrastructure as your SMS.',
    capabilities: [
      {
        icon: FeatureIcon,
        title: 'Media-rich messages',
        description: 'Attach images, PDFs, and short video clips directly to outbound messages.',
      },
      {
        icon: IntegrationIcon,
        title: 'Works everywhere SMS does',
        description: 'MMS runs on the same numbers and workflows as SMS — no separate setup.',
      },
      {
        icon: SecurityIcon,
        title: 'Automatic fallback',
        description:
          "Messages gracefully fall back to SMS with a link when a carrier or device doesn't support MMS.",
      },
      {
        icon: AnalyticsIconV2,
        title: 'Campaign broadcasts',
        description:
          'Send visual promotions and updates to segments and track delivery events as they happen.',
      },
    ],
    howItWorksTitle: 'From attachment to delivery',
    howItWorksSubtitle: 'Sending rich media works exactly like sending SMS.',
    steps: [
      {
        title: 'Attach your media',
        description: 'Drop in an image, PDF, or short video when composing a message or template.',
      },
      {
        title: 'Send from any channel',
        description: 'Trigger MMS the same way you send SMS, from the CRM or the API.',
      },
      {
        title: 'Confirm it landed',
        description: 'Delivery events tell you when media was delivered or fell back to a link.',
      },
    ],
  },
  voice: {
    slug: 'voice',
    eyebrow: 'Voice',
    title: 'A browser-based dialer built for real sales and support calls',
    subtitle:
      'Make and receive calls straight from GoHighLevel or HubSpot with hold, transfer, merge, and conferencing — every call logged automatically.',
    metaTitle: 'Voice | Xepter',
    metaDescription:
      'A WebRTC browser dialer with hold, transfer, merge, and conferencing, plus number porting and automatic call logging into your CRM.',
    capabilitiesTitle: 'Calling built for how teams actually work',
    capabilitiesSubtitle: 'No desk phones, no separate softphone — calls stay inside your CRM.',
    capabilities: [
      {
        icon: FeatureIcon,
        title: 'WebRTC dialer',
        description: 'Call from the browser — no desk phone or softphone install required.',
      },
      {
        icon: TeamIcon,
        title: 'Hold, transfer & merge',
        description:
          "Put a caller on hold, warm-transfer to a teammate, or merge into a conference without dropping the call.",
      },
      {
        icon: SecurityIcon,
        title: 'Numbers & porting',
        description:
          'Buy local and toll-free numbers, or port your existing ones, without downtime.',
      },
      {
        icon: IntegrationIconV2,
        title: 'Calls logged automatically',
        description:
          "Every call is logged back to the contact's conversation, so your team has full context.",
      },
    ],
    howItWorksTitle: 'From dial to logged call',
    howItWorksSubtitle: 'The dialer lives where your team already works.',
    steps: [
      {
        title: 'Pick up the dialer',
        description: 'Answer or place calls from the browser, right inside your CRM.',
      },
      {
        title: 'Run the call your way',
        description:
          'Hold, transfer, merge into a conference, or send DTMF mid-call.',
      },
      {
        title: 'Review afterward',
        description: 'Call activity logs to the contact record automatically.',
      },
    ],
  },
  whatsapp: {
    slug: 'whatsapp',
    eyebrow: 'WhatsApp',
    title: 'Business messaging on the channel customers already use',
    subtitle:
      'Send approved template messages and hold two-way WhatsApp conversations — synced into the same inbox as your SMS and voice.',
    metaTitle: 'WhatsApp | Xepter',
    metaDescription:
      'Template messaging and two-way WhatsApp conversations, synced into the same conversation thread as SMS, MMS, and voice.',
    capabilitiesTitle: 'One more channel, the same inbox',
    capabilitiesSubtitle: 'WhatsApp conversations sit right next to every other channel you use.',
    capabilities: [
      {
        icon: FeatureIcon,
        title: 'Template messaging',
        description:
          'Send pre-approved WhatsApp templates for notifications, reminders, and updates.',
      },
      {
        icon: SupportIconV2,
        title: 'Two-way conversations',
        description:
          'Customers reply on WhatsApp and it shows up in the same conversation thread as every other channel.',
      },
      {
        icon: IntegrationIcon,
        title: 'Rich media',
        description: 'Share images, documents, and links inside the conversation.',
      },
      {
        icon: TeamIcon,
        title: 'One inbox, every channel',
        description:
          'WhatsApp sits next to SMS, MMS, and voice — no separate app for your team to check.',
      },
    ],
    howItWorksTitle: 'From approval to conversation',
    howItWorksSubtitle: 'Get set up once, then message like any other channel.',
    steps: [
      {
        title: 'Get approved',
        description: 'Submit your business and message templates for WhatsApp approval.',
      },
      {
        title: 'Message from one place',
        description:
          'Send and receive WhatsApp messages from the same CRM inbox as everything else.',
      },
      {
        title: 'Keep the thread',
        description:
          'Every reply, on every channel, stays attached to the same contact record.',
      },
    ],
  },
};
