'use client';

import {
  AboutIcon,
  BlogIcon,
  ContactIcon,
  WhyChooseUsIcon,
} from '@/src/components/shared/icon/menu-icon';
import newArrowWhite from '@/public/images/icons/new-arrow-white.svg';
import whatsNewImage from '@/public/images/xepter-whats-new-card.jpg';
import {
  MenuLink,
  type MenuLinkProps,
} from '@/src/components/shared/layout/navbar/menu-link';
import { cn } from '@/src/utils/cn';
import Image from 'next/image';
import Link from 'next/link';

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
    title: 'Why Choose Us (Coming soon)',
    description: 'Our unique selling points and competitive advantages',
    href: '/why-choose-us',
    icon: WhyChooseUsIcon,
  },
];

const aboutLinksColumnTwo: CompanyLink[] = [
  {
    title: 'Contact',
    description: 'Get in touch with our team',
    href: '/contact',
    icon: ContactIcon,
  },
  {
    title: 'News & Updates (Coming soon)',
    description: 'News, updates, and guides',
    href: '/blog',
    icon: BlogIcon,
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
      <div className="dropdown-menu-bridge pointer-events-none fixed top-full left-1/2 z-40 h-3 w-full -translate-x-1/2 bg-transparent transition-opacity duration-300 lg:w-[860px]" />
      <div
        id={MENU_COMPANY_ID}
        className={cn(
          'dropdown-menu border-stroke-1 fixed top-full left-1/2 z-50 mt-2 flex w-full -translate-x-1/2 items-start gap-y-6 rounded-[20px] border bg-white p-4 transition-all duration-300 md:gap-x-6 lg:w-[860px]',
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
        <div className="flex-1">
          <p className="text-tagline-2 text-secondary/60 p-3 font-medium">What&apos;s new</p>
          <div>
            <figure className="group relative min-h-[196px] w-full max-w-full overflow-hidden rounded-[14px]">
              <Image
                src={whatsNewImage}
                alt="What's new"
                fill
                className="rounded-[14px] object-cover"
                sizes="(max-width: 1024px) 100vw, 300px"
              />
              <div className="absolute top-3 bottom-3 left-3 w-full space-y-5 p-2">
                <div>
                  <p className="text-tagline-1 text-secondary font-normal">Product updates</p>
                  <p className="text-tagline-2 text-secondary/60 w-full max-w-[169px] font-normal">
                    Stay ahead with the latest features and improvements.
                  </p>
                </div>
                <Link
                  href="/blog"
                  onClick={handleClose}
                  className="group/arrow bg-secondary group-hover:bg-primary-500 relative flex h-9.5 w-16 items-center justify-center space-y-5 overflow-hidden rounded-[40px] px-5 py-2 ring-[6px] ring-white transition-all duration-500 ease-in-out"
                >
                  <span className="relative flex size-6 items-center justify-center overflow-hidden">
                    <Image
                      src={newArrowWhite}
                      alt=""
                      width={24}
                      height={24}
                      className="absolute inset-0 size-full -translate-x-6 object-cover transition-transform duration-400 ease-in-out group-hover/arrow:translate-x-1"
                    />
                    <Image
                      src={newArrowWhite}
                      alt=""
                      width={24}
                      height={24}
                      className="size-full object-cover transition-transform duration-400 ease-in-out group-hover/arrow:translate-x-6"
                    />
                  </span>
                </Link>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};
