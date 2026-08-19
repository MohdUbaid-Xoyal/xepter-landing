'use client';

import {
  AboutIcon,
  BlogIcon,
  ContactIcon,
  FeatureIcon,
  ServiceIcon,
  WhyChooseUsIcon,
} from '@/src/components/shared/icon/menu-icon';
import {
  MenuLink,
  type MenuLinkProps,
} from '@/src/components/shared/layout/navbar/menu-link';
import { cn } from '@/src/utils/cn';

const MENU_COMPANY_ID = 'company-mega-menu-v2';

type CompanyLink = Omit<MenuLinkProps, 'onClose'>;

const aboutLinksColumnOne: CompanyLink[] = [
  {
    title: 'About Us',
    description: 'See how teams are using Xepter',
    href: '/about',
    icon: AboutIcon,
  },
  {
    title: 'Features',
    description: 'What you can do with Xepter',
    href: '/features',
    icon: FeatureIcon,
  },
  {
    title: 'Services',
    description: 'Our services and offerings',
    href: '/services',
    icon: ServiceIcon,
  },
];

const aboutLinksColumnTwo: CompanyLink[] = [
  {
    title: 'Why Choose Us',
    description: 'Our unique selling points and competitive advantages',
    href: '#',
    icon: WhyChooseUsIcon,
  },
  {
    title: 'Blog',
    description: 'News, updates, and guides',
    href: '/blog',
    icon: BlogIcon,
  },
  {
    title: 'Contact',
    description: 'Get in touch with our team',
    href: '/contact',
    icon: ContactIcon,
  },
];

interface CompanyMenuProps {
  menuDropdownId: string | null;
  setMenuDropdownId: (id: string | null) => void;
}

export const CompanyMenu = ({ menuDropdownId, setMenuDropdownId }: CompanyMenuProps) => {
  const handleClose = () => setMenuDropdownId(null);
  const isOpen = menuDropdownId === MENU_COMPANY_ID;

  return (
    <div>
      <div className="dropdown-menu-bridge pointer-events-none fixed top-full left-1/2 z-40 h-3 w-full -translate-x-1/2 bg-transparent transition-opacity duration-300 lg:w-[760px]" />
      <div
        id={MENU_COMPANY_ID}
        className={cn(
          'dropdown-menu border-stroke-1 fixed top-full left-1/2 z-50 mt-2 flex w-full -translate-x-1/2 items-start gap-y-6 rounded-[20px] border bg-white p-4 transition-all duration-300 md:gap-x-6 lg:w-[760px]',
          isOpen && 'active'
        )}
      >
        <div className="flex-1 space-y-3">
          <ul className="space-y-2">
            {aboutLinksColumnOne.map((link) => (
              <MenuLink key={link.title} {...link} onClose={handleClose} />
            ))}
          </ul>
        </div>
        <div className="flex-1 space-y-3">
          <ul className="space-y-2">
            {aboutLinksColumnTwo.map((link) => (
              <MenuLink key={link.title} {...link} onClose={handleClose} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
