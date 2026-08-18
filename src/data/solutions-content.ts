import {
  AnalyticsIconV2,
  FeatureIcon,
  IndustriesIcon,
  IntegrationIcon,
  SecurityIcon,
  SupportIconV2,
  TeamIcon,
  UseCaseIcon,
} from '@/src/components/shared/icon/menu-icon';
import type { ComponentType } from 'react';

export interface SolutionItem {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface SolutionPageContent {
  slug: 'use-cases' | 'industries' | 'teams';
  eyebrow: string;
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  gridTitle: string;
  gridSubtitle: string;
  items: SolutionItem[];
}

export const solutionsContent: Record<SolutionPageContent['slug'], SolutionPageContent> = {
  'use-cases': {
    slug: 'use-cases',
    eyebrow: 'Use cases',
    title: 'Every conversation your business has, on one platform',
    subtitle:
      'From the first outreach to the last follow-up, SMS, MMS, voice, and WhatsApp work together instead of living in separate tools.',
    metaTitle: 'Use Cases | Xepter',
    metaDescription:
      'How teams use Xepter for marketing campaigns, notifications, identity verification, sales outreach, and customer care.',
    gridTitle: 'Built for how you actually reach people',
    gridSubtitle: 'The same channels, applied to every stage of the customer relationship.',
    items: [
      {
        icon: FeatureIcon,
        title: 'Marketing campaigns',
        description:
          'Reach segments with SMS, MMS, and WhatsApp campaigns triggered straight from your CRM workflows.',
      },
      {
        icon: SupportIconV2,
        title: 'Notifications & alerts',
        description:
          "Send appointment reminders, order updates, and time-sensitive alerts your customers will actually see.",
      },
      {
        icon: SecurityIcon,
        title: 'Identity & verification',
        description:
          'Verify a phone number or send a one-time code over SMS or voice before a customer completes a signup or transaction.',
      },
      {
        icon: TeamIcon,
        title: 'Customer care',
        description:
          'Let support and sales teams call, text, and message from the same number your customers already have saved.',
      },
      {
        icon: IntegrationIcon,
        title: 'Two-way conversations',
        description:
          'Keep every SMS, MMS, WhatsApp, and call attached to one contact timeline, so context never gets lost between channels.',
      },
      {
        icon: UseCaseIcon,
        title: 'Sales outreach',
        description:
          'Dial and text prospects from a browser-based dialer without leaving your pipeline view.',
      },
    ],
  },
  industries: {
    slug: 'industries',
    eyebrow: 'Industries',
    title: 'Purpose-built for GoHighLevel and HubSpot-run businesses',
    subtitle:
      'Agencies and the businesses they run all rely on the same thing: a number their customers trust, wired into the CRM they already use.',
    metaTitle: 'Industries | Xepter',
    metaDescription:
      'How agencies, real estate, home services, healthcare, financial services, and retail teams use Xepter inside GoHighLevel and HubSpot.',
    gridTitle: 'Where Xepter fits',
    gridSubtitle: 'A dedicated number and full messaging stack for every account you run.',
    items: [
      {
        icon: IndustriesIcon,
        title: 'Agencies & marketing',
        description:
          'Give every client account its own number, campaigns, and reporting inside the CRM you already run for them.',
      },
      {
        icon: UseCaseIcon,
        title: 'Real estate',
        description:
          'Text leads the moment they inquire, and call from the same number on your listings.',
      },
      {
        icon: FeatureIcon,
        title: 'Home services',
        description:
          'Confirm appointments, send arrival windows, and follow up on jobs by SMS without switching apps.',
      },
      {
        icon: SupportIconV2,
        title: 'Healthcare & wellness',
        description:
          'Send appointment reminders and intake follow-ups by SMS and voice, synced to the patient record in your CRM.',
      },
      {
        icon: SecurityIcon,
        title: 'Financial & professional services',
        description:
          'Verify identity, send secure updates, and call clients from a compliant, dedicated business number.',
      },
      {
        icon: AnalyticsIconV2,
        title: 'Retail & e-commerce',
        description:
          'Recover carts, confirm orders, and run promotions over SMS and MMS without leaving your storefront tools.',
      },
    ],
  },
  teams: {
    slug: 'teams',
    eyebrow: 'Teams',
    title: 'The right tools for the team using them',
    subtitle:
      'Marketing, sales, support, and operations all touch the same numbers and conversations — just in different ways.',
    metaTitle: 'Teams | Xepter',
    metaDescription:
      'How marketing, sales, customer support, and operations teams use Xepter for messaging, calling, and access control.',
    gridTitle: 'Built for every team that talks to customers',
    gridSubtitle: 'One platform, with the right view for each team.',
    items: [
      {
        icon: FeatureIcon,
        title: 'Marketing teams',
        description:
          'Launch SMS and WhatsApp campaigns to segments and see delivery and reply performance without pulling in engineering.',
      },
      {
        icon: UseCaseIcon,
        title: 'Sales teams',
        description:
          'Call and text prospects from a browser dialer that logs every touch back to the deal.',
      },
      {
        icon: SupportIconV2,
        title: 'Customer support teams',
        description:
          'Handle SMS, WhatsApp, and calls from one shared inbox so no conversation gets missed.',
      },
      {
        icon: SecurityIcon,
        title: 'Operations & RevOps',
        description:
          'Provision numbers, manage compliance, and control access for every team from one admin console.',
      },
    ],
  },
};
