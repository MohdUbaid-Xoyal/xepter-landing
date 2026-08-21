import { MobileMenuData } from '../interface/interface';
import { DOCS_URL } from '../utils/constants';

export const mobileMenuData: MobileMenuData[] = [
  {
    id: 'home',
    title: 'Home',
    href: '/',
    submenu: [],
  },
  {
    id: 'products',
    title: 'Products',
    submenu: [
      { id: 'sms', label: 'SMS', href: '/products/sms' },
      { id: 'mms', label: 'MMS', href: '/products/mms' },
      { id: 'voice', label: 'Voice', href: '/products/voice' },
      { id: 'whatsapp', label: 'WhatsApp', href: '/products/whatsapp' },
      { id: 'rcs', label: 'RCS (Coming soon)', href: '#' },
    ],
  },
  {
    id: 'solutions',
    title: 'Solutions',
    submenu: [
      { id: 'use-cases', label: 'Use Cases', href: '/solutions/use-cases' },
      { id: 'industries', label: 'Industries', href: '/solutions/industries' },
      { id: 'teams', label: 'Teams', href: '/solutions/teams' },
    ],
  },
  {
    id: 'developers',
    title: 'Developers',
    submenu: [
      { id: 'login', label: 'Login', href: '/login' },
      { id: 'create-account', label: 'Create Account', href: '/signup' },
      { id: 'documentation', label: 'Documentation', href: DOCS_URL },
      { id: 'terms', label: 'Terms & Conditions', href: '#' },
      { id: 'privacy', label: 'Privacy Policy', href: '#' },
      { id: 'legal', label: 'Legal', href: '#' },
    ],
  },
  {
    id: 'company',
    title: 'Company',
    submenu: [
      { id: 'about-us', label: 'About Us', href: '/about' },
      { id: 'features', label: 'Features', href: '/features' },
      { id: 'services', label: 'Services', href: '/services' },
      { id: 'why-choose-us', label: 'Why Choose Us', href: '#' },
      { id: 'blog', label: 'Blog', href: '/blog' },
      { id: 'contact', label: 'Contact', href: '/contact' },
    ],
  },
  {
    id: 'pricing',
    title: 'Pricing',
    href: '/pricing',
    submenu: [],
  },
];
