import { MobileMenuData } from '../interface/interface';
import { DOCS_URL } from '../utils/constants';

export const mobileMenuData: MobileMenuData[] = [
  {
    id: 'company',
    title: 'Company',
    submenu: [
      { id: 'about-us', label: 'About Us', href: '/about' },
      { id: 'services', label: 'Our Services', href: '/services' },
      { id: 'features', label: 'Product Features', href: '#' },
      { id: 'blog', label: 'Blog & News', href: '/blog' },
      { id: 'use-cases', label: 'Use Cases', href: '/solutions/use-cases' },
      { id: 'industries', label: 'Industries', href: '/solutions/industries' },
      { id: 'teams', label: 'Teams', href: '/solutions/teams' },
    ],
  },
  {
    id: 'collaborate',
    title: 'Collaborate',
    submenu: [
      { id: 'affiliate', label: 'Affiliate', href: '#' },
      { id: 'referral', label: 'Referral', href: '#' },
      { id: 'login', label: 'Login', href: '/login' },
      { id: 'create-account', label: 'Create Account', href: '/signup' },
      { id: 'documentation', label: 'Documentation', href: DOCS_URL },
      { id: 'download', label: 'Download', href: '#' },
      { id: 'integration', label: 'Integration', href: '#' },
    ],
  },
  {
    id: 'inner-pages',
    title: 'Inner pages',
    submenu: [
      { id: 'sms', label: 'SMS', href: '/products/sms' },
      { id: 'mms', label: 'MMS', href: '/products/mms' },
      { id: 'voice', label: 'Voice', href: '/products/voice' },
      { id: 'whatsapp', label: 'WhatsApp', href: '/products/whatsapp' },
      { id: 'rcs', label: 'RCS (Coming soon)', href: '#' },
      { id: 'blog', label: 'Blog', href: '/blog' },
      { id: 'integration', label: 'Integration', href: '#' },
      { id: 'case-studies', label: 'Case Studies', href: '#' },
      { id: 'testimonial', label: 'Testimonial', href: '#' },
      { id: 'services', label: 'Services', href: '/services' },
      { id: 'contact', label: 'Contact', href: '/contact' },
      { id: 'team', label: 'Team', href: '/team' },
    ],
  },
  {
    id: 'people-culture',
    title: 'People & Culture',
    submenu: [
      { id: 'process', label: 'Process', href: '#' },
      { id: 'team', label: 'Team', href: '/team' },
      { id: 'career', label: 'Career', href: '#' },
      { id: 'testimonial', label: 'Testimonial', href: '#' },
      { id: 'customer', label: 'Customer', href: '#' },
      { id: 'contact', label: 'Contact', href: '/contact' },
      { id: 'pricing', label: 'Pricing', href: '/pricing' },
    ],
  },
];
