import { DOCS_URL } from '@/src/utils/constants';

export interface FooterLinkItem {
  label: string;
  href: string;
}

export interface FooterLinkColumn {
  title: string;
  links: FooterLinkItem[];
}

export const footerNavColumns: FooterLinkColumn[] = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Career', href: '#' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'FAQ', href: '#' },
      { label: 'Documentation', href: DOCS_URL },
      { label: 'Tutorial', href: '#' },
      { label: 'Support', href: '#' },
    ],
  },
  {
    title: 'Legal Policies',
    links: [
      { label: 'Terms & Conditions', href: '/terms-of-service' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Refund Policy', href: '#' },
      { label: 'Affiliate Policy', href: '#' },
    ],
  },
];

export interface FooterSocialLink {
  label: string;
  href: string;
  icon: string;
}

export const footerSocialLinks: FooterSocialLink[] = [
  { label: 'LinkedIn', href: '#', icon: '/images/icons/linkedin-dark.svg' },
  { label: 'Instagram', href: '#', icon: '/images/icons/instagram-dark.svg' },
  { label: 'Youtube', href: '#', icon: '/images/icons/youtube-dark.svg' },
  { label: 'X', href: '#', icon: '/images/icons/x-dark.svg' },
];
