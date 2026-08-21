export type SenderTypeId = 'local' | 'tollfree' | 'shortcode' | 'voice' | 'whatsapp';

/** Sender types that have published rate tables; the rest render a coming-soon panel. */
export type LiveSenderTypeId = 'local';

export type SenderStatus = 'live' | 'soon';

export interface SenderType {
  id: SenderTypeId;
  name: string;
  description: string;
  status: SenderStatus;
  statusLabel: string;
}

export interface RateRow {
  label: string;
  value: string;
  best?: boolean;
}

export interface RateTable {
  columns: [string, string];
  rows: RateRow[];
  footnote?: string;
}

export interface CarrierFeeCell {
  outbound: string;
  inbound: string;
}

export interface CarrierFeeGroupRow {
  carrier: string;
  sms: CarrierFeeCell;
  mms: CarrierFeeCell;
}

export interface CarrierFeesTable {
  title: string;
  subtitle: string;
  rows: CarrierFeeGroupRow[];
}

export interface MessagingRates {
  title: string;
  subtitle: string;
  sms: RateTable;
  mms: RateTable;
}

export interface NumberPricing {
  title: string;
  subtitle: string;
  /** Volume-tiered table (10DLC) or a single flat rate (toll-free) — never both. */
  table?: RateTable;
  /** Suffix shown under each tiered row, e.g. "/ number / month". */
  unitLabel?: string;
  flat?: { value: string; unit: string; note: string };
}

export interface SenderPanel {
  numberPricing: NumberPricing;
  messagingRates: MessagingRates;
  carrierFees: CarrierFeesTable;
  panelFootnote?: string;
}

export const senderTypes: SenderType[] = [
  {
    id: 'local',
    name: 'Local · 10DLC',
    description: 'Local 10-digit numbers your community recognizes and trusts',
    status: 'live',
    statusLabel: 'Live',
  },
  {
    id: 'voice',
    name: 'Voice',
    description: 'Inbound and outbound calling on the numbers you already own',
    status: 'soon',
    statusLabel: 'Coming soon',
  },
  {
    id: 'tollfree',
    name: 'Toll-Free',
    description: 'Nationwide 8XX numbers with high verified throughput',
    status: 'soon',
    statusLabel: 'Coming soon',
  },
  {
    id: 'shortcode',
    name: 'Short Code',
    description: '5–6 digit codes built for the highest-volume campaigns',
    status: 'soon',
    statusLabel: 'Coming soon',
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    description: 'Rich two-way conversations on the channel your customers live in',
    status: 'soon',
    statusLabel: 'Coming soon',
  },
];

const negotiableNote = 'All rates are negotiable based on volume and agreement terms.';

const sharedMmsRates: RateTable = {
  columns: ['Monthly volume', 'Rate'],
  rows: [
    { label: '0 – 500k', value: '$0.0030' },
    { label: '500k+', value: '$0.0025', best: true },
  ],
  footnote: negotiableNote,
};

export const senderPanels: Record<LiveSenderTypeId, SenderPanel> = {
  local: {
    numberPricing: {
      title: 'Number Pricing',
      subtitle: 'United States • Local Numbers',
      table: {
        columns: ['Volume', 'Per number / month'],
        rows: [
          { label: '0 – 250 numbers', value: '$1.00' },
          { label: '251 – 500 numbers', value: '$0.75' },
          { label: '501 – 1,000 numbers', value: '$0.50' },
          { label: '1,000+ numbers', value: '$0.25', best: true },
        ],
      },
      unitLabel: '/ number / month',
    },
    messagingRates: {
      title: 'Messaging rates',
      subtitle: 'Per outbound segment · volume-based discounts',
      sms: {
        columns: ['Monthly volume', 'Rate'],
        rows: [
          { label: '0 – 500k', value: '$0.0060' },
          { label: '501k – 1m', value: '$0.0050' },
          { label: '1m – 5m', value: '$0.0040' },
          { label: '5m – 10m', value: '$0.0035' },
          { label: '10m+', value: '$0.0030', best: true },
        ],
        footnote: negotiableNote,
      },
      mms: sharedMmsRates,
    },
    carrierFees: {
      title: 'Carrier fees',
      subtitle: 'Set by the carriers, passed through at cost — per segment',
      rows: [
        {
          carrier: 'AT&T',
          sms: { outbound: '$0.0035', inbound: '$0.0035' },
          mms: { outbound: '$0.009', inbound: '$0.009' },
        },
        {
          carrier: 'Verizon',
          sms: { outbound: '$0.0045', inbound: 'No carrier fee' },
          mms: { outbound: '$0.007', inbound: 'No carrier fee' },
        },
        {
          carrier: 'T-Mobile',
          sms: { outbound: '$0.0045', inbound: '$0.0025' },
          mms: { outbound: '$0.01', inbound: '$0.01' },
        },
      ],
    },
  },
};

export interface ComingSoonPanel {
  badge: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

export const comingSoonPanels: Record<Exclude<SenderTypeId, LiveSenderTypeId>, ComingSoonPanel> = {
  tollfree: {
    badge: 'Coming soon',
    title: 'Toll-free pricing is on its way',
    description:
      'Nationwide 8XX numbers with high verified throughput. Rates will follow the same transparent structure: number pricing, messaging tiers, and carrier fees on one panel.',
    ctaLabel: 'Talk to an Expert',
    ctaHref: '/contact',
  },
  shortcode: {
    badge: 'Coming soon',
    title: 'Short code pricing is on its way',
    description:
      'Dedicated 5–6 digit short codes for the highest-volume, highest-throughput campaigns. Rates will follow the same transparent structure: messaging tiers and carrier fees on one panel.',
    ctaLabel: 'Talk to an Expert',
    ctaHref: '/contact',
  },
  voice: {
    badge: 'Coming soon',
    title: 'Voice pricing is on its way',
    description:
      'Inbound and outbound calling on the numbers you already run for messaging. Rates will follow the same transparent structure: per-minute tiers and carrier fees on one panel.',
    ctaLabel: 'Talk to an Expert',
    ctaHref: '/contact',
  },
  whatsapp: {
    badge: 'Coming soon',
    title: 'WhatsApp pricing is on its way',
    description:
      'Rich two-way conversations on the channel your customers already use. Rates will follow the same transparent structure: conversation tiers and pass-through fees on one panel.',
    ctaLabel: 'Talk to an Expert',
    ctaHref: '/contact',
  },
};

export const lookupFee = {
  title: 'Number look-up fee',
  subtitle: 'Applies across all sender types',
  value: '$0.005',
  unit: '/ look-up',
};

export const liveSupport = {
  title: 'Live support',
  subtitle: 'Real humans, every plan',
  rows: [
    { label: 'Pay as you go', value: 'Free' },
    { label: '500k+ segments / mo', value: 'Free + dedicated Slack' },
  ] satisfies RateRow[],
};

export const volumeCta = {
  title: "Sending at volume? Let's talk numbers.",
  description: 'All rates are negotiable based on volume and agreement terms.',
  primary: { label: 'Talk to an Expert', href: '/contact' },
  secondary: { label: 'Start sending free', href: '/signup' },
};

export interface PricingFaqItem {
  value: string;
  question: string;
  answer: string;
}

export const pricingFaqs: PricingFaqItem[] = [
  {
    value: 'tier-2-aggregation',
    question: 'What is Tier 2 Aggregation?',
    answer:
      'Xepter is a Tier 2 Aggregator which means, at most, your messages will go through one additional layer before reaching the carriers and your customer’s handsets. This is in contrast to many CPaaS providers who go through 3-4 layers before doing the same. This enables us to deliver messages in <1 second, have quick support turn-around times, and provide you with unrivaled transparency and visibility into the metrics that matter most.',
  },
  {
    value: 'what-is-cpaas',
    question: 'What is a CPaaS?',
    answer:
      'CPaaS stands for Communications Platform as a Service. It’s a cloud-based platform that provides businesses with Application Programming Interfaces (APIs) for integrating real-time communication features like SMS, voice calls, video chat, and more, into their applications.',
  },
  {
    value: 'xepter-instead-of-twilio',
    question: 'Can I use Xepter instead of Twilio?',
    answer:
      'Yes! Xepter offers the same services as Twilio; however, we provide up to 90% cheaper pricing, unparalleled support for all business types, superior integrations and documentation, and higher message throughput. If you are currently using Twilio looking for better delivery and pricing, Xepter is your partner!',
  },
  {
    value: 'downtime-when-switching',
    question: 'Will we have downtime when we switch?',
    answer:
      'No! We leverage our connections with the Direct Connect Aggregators (DCAs) and other upstream partners to ensure seamless migration of any existing messaging campaigns.',
  },
  {
    value: 'cheaper-than-twilio',
    question: 'Why is your messaging so much cheaper than Twilio?',
    answer:
      "We are very transparent with our pricing and don't price gouge. With our strong network partnerships we are able to leverage substantial discounted pricing and pass those savings to our clients.",
  },
  {
    value: 'port-numbers',
    question: 'Can I port numbers to Xepter?',
    answer:
      'Absolutely! Our proprietary LOA port infrastructure supports single and bulk phone porting for 10DLC and Toll Free.',
  },
  {
    value: 'a2p-registration-fees',
    question: 'What are registration (A2P) fees for 10DLC?',
    answer:
      'We do not make a margin on 10DLC, A2P registration fees — they are passed-through to the upstream providers (TCR, DCAs, etc.). They are as follows: Brand: $4.50 (each time the brand is attempted to be verified; usually this is one-time). Campaign: $15 (one time). Low Volume Campaign: $1.50/month. Standard Campaign: $10/month.',
  },
];
