export const contactMeta = {
  company: 'Xepter LLC',
  address: ['30 N Gould St, Ste N', 'Sheridan, WY 82801', 'United States'],
  contactEmail: 'support@xepter.io',
  phone: '+1 949-393-3901',
  website: 'https://www.xepter.io',
};

export interface ContactQuickLink {
  title: string;
  description: string;
  mailtoSubject: string;
  cta: string;
}

export const contactQuickLinks: ContactQuickLink[] = [
  {
    title: 'Contact sales',
    description: 'Get pricing, a demo, or help picking the right plan for your team.',
    mailtoSubject: 'Sales inquiry',
    cta: 'Talk to sales',
  },
  {
    title: 'Get support',
    description: 'Already a customer? Reach the support team for help with your account.',
    mailtoSubject: 'Support request',
    cta: 'Contact support',
  },
  {
    title: 'Partnerships',
    description: 'Explore integrations, agency programs, or reseller partnerships.',
    mailtoSubject: 'Partnership inquiry',
    cta: 'Get in touch',
  },
];

export const jobFunctionOptions = [
  'C-Level / Executive',
  'Sales',
  'Marketing',
  'Customer Support / Success',
  'Operations',
  'IT / Technical',
  'Other',
];

export const productInterestOptions = [
  'SMS',
  'MMS',
  'Voice (WebRTC Dialer)',
  'WhatsApp',
  'Developer APIs',
  'Number porting',
  'Not sure yet / General inquiry',
];

export const countryOptions = [
  'United States',
  'Canada',
  'United Kingdom',
  'Ireland',
  'Australia',
  'New Zealand',
  'Germany',
  'France',
  'Spain',
  'Italy',
  'Netherlands',
  'Belgium',
  'Switzerland',
  'Austria',
  'Sweden',
  'Norway',
  'Denmark',
  'Finland',
  'Poland',
  'Portugal',
  'Mexico',
  'Brazil',
  'Argentina',
  'Colombia',
  'Chile',
  'India',
  'Singapore',
  'Philippines',
  'Malaysia',
  'Indonesia',
  'Japan',
  'South Korea',
  'United Arab Emirates',
  'Saudi Arabia',
  'South Africa',
  'Nigeria',
  'Other',
];
