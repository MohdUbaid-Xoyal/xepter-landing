'use client';

import {
  DocsIcon,
  LoginIcon,
  // temporarily hidden — see commented-out entries below
  // LegalNoticeIcon,
  // PrivacyIcon,
  // SignUpIcon,
  // TermsConditionsIcon,
} from '@/src/components/shared/icon/menu-icon';
import {
  DevelopersMenuLink,
  type DevelopersMenuLinkProps,
} from '@/src/components/shared/layout/navbar/developers-menu-link';
import { DOCS_URL } from '@/src/utils/constants';
import { cn } from '@/src/utils/cn';

const MENU_DEVELOPERS_ID = 'product-mega-menu';

type DeveloperLink = Omit<DevelopersMenuLinkProps, 'onClose'>;

const columnOne: DeveloperLink[] = [
  {
    title: 'Documentation',
    description: 'REST APIs and webhooks for every channel',
    href: DOCS_URL,
    icon: DocsIcon,
  },
  {
    title: 'Login to Portal',
    description: 'Log into your dashboard',
    href: '/login',
    icon: LoginIcon,
  },
  // {
  //   title: 'Create Account',
  //   description: 'Create your free account',
  //   href: '/signup',
  //   icon: SignUpIcon,
  // },
];

// const columnTwo: DeveloperLink[] = [
//   {
//     title: 'Terms & Conditions',
//     description: 'Understand our terms',
//     href: '#',
//     icon: TermsConditionsIcon,
//   },
//   {
//     title: 'Privacy Policy',
//     description: 'Understand data protection',
//     href: '#',
//     icon: PrivacyIcon,
//   },
//   {
//     title: 'Legal',
//     description: 'Read legal policies',
//     href: '#',
//     icon: LegalNoticeIcon,
//   },
// ];

interface DevelopersMenuProps {
  menuDropdownId: string | null;
  setMenuDropdownId: (id: string | null) => void;
}

export const DevelopersMenu = ({
  menuDropdownId,
  setMenuDropdownId,
}: DevelopersMenuProps) => {
  const handleClose = () => setMenuDropdownId(null);
  const isOpen = menuDropdownId === MENU_DEVELOPERS_ID;

  return (
    <div>
      <div className="dropdown-menu-bridge pointer-events-none fixed top-full left-1/2 z-40 h-3 w-full -translate-x-1/2 bg-transparent transition-opacity duration-300 md:w-[360px]" />
      <div
        id={MENU_DEVELOPERS_ID}
        className={cn(
          'dropdown-menu border-stroke-1 fixed top-full left-1/2 z-50 mt-2 w-full -translate-x-1/2 space-y-6 rounded-[20px] border bg-white p-4 transition-all duration-300 md:w-[360px]',
          isOpen && 'active'
        )}
      >
        <div className="flex items-start gap-y-6 md:gap-x-6">
          <ul className="flex-1 space-y-2">
            {columnOne.map((item) => (
              <DevelopersMenuLink key={item.title} {...item} onClose={handleClose} />
            ))}
          </ul>
          {/* <ul className="flex-1 space-y-2">
            {columnTwo.map((item) => (
              <DevelopersMenuLink key={item.title} {...item} onClose={handleClose} />
            ))}
          </ul> */}
        </div>
      </div>
    </div>
  );
};
