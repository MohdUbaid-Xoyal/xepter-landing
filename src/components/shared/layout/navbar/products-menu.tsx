'use client';

import newArrowWhite from '@/public/images/icons/new-arrow-white.svg';
import whatsNewImage from '@/public/images/xepter-whats-new-card.jpg';
import {
  MmsIcon,
  RcsIcon,
  SmsIcon,
  VoiceIcon,
  WhatsAppIcon,
} from '@/src/components/shared/icon/menu-icon';
import {
  MenuLink,
  type MenuLinkProps,
} from '@/src/components/shared/layout/navbar/menu-link';
import { cn } from '@/src/utils/cn';
import Image from 'next/image';
import Link from 'next/link';

const MENU_PRODUCTS_ID = 'platform-mega-menu-v2';

type ProductLink = Omit<MenuLinkProps, 'onClose'>;

const productLinksColumnOne: ProductLink[] = [
  {
    title: 'SMS',
    description: 'Two-way text messaging with campaigns and templates',
    href: '/products/sms',
    icon: SmsIcon,
  },
  {
    title: 'MMS',
    description: 'Images, video, and rich media in every conversation',
    href: '/products/mms',
    icon: MmsIcon,
  },
  {
    title: 'Voice (Coming soon)',
    description: 'A browser-based dialer with hold, transfer, and conferencing',
    href: '/products/voice',
    icon: VoiceIcon,
  },
];

const productLinksColumnTwo: ProductLink[] = [
  {
    title: 'WhatsApp (Coming soon)',
    description: 'Template messaging and two-way WhatsApp conversations',
    href: '/products/whatsapp',
    icon: WhatsAppIcon,
  },
  {
    title: 'RCS (Coming soon)',
    description: 'Rich messaging for Android',
    href: '/products/rcs',
    icon: RcsIcon,
  },
];

interface ProductsMenuProps {
  menuDropdownId: string | null;
  setMenuDropdownId: (id: string | null) => void;
}

export const ProductsMenu = ({ menuDropdownId, setMenuDropdownId }: ProductsMenuProps) => {
  const handleClose = () => setMenuDropdownId(null);
  const isOpen = menuDropdownId === MENU_PRODUCTS_ID;

  return (
    <div>
      <div className="dropdown-menu-bridge pointer-events-none fixed top-full left-1/2 z-40 h-3 w-full -translate-x-1/2 bg-transparent transition-opacity duration-300 lg:w-[860px]" />
      <div
        id={MENU_PRODUCTS_ID}
        className={cn(
          'dropdown-menu border-stroke-1 fixed top-full left-1/2 z-50 mt-2 flex w-full -translate-x-1/2 items-start gap-y-6 rounded-[20px] border bg-white p-4 transition-all duration-300 md:gap-x-6 lg:w-[860px]',
          isOpen && 'active'
        )}
      >
        <div className="flex-1 space-y-3">
          <ul className="space-y-2">
            {productLinksColumnOne.map((link) => (
              <MenuLink key={link.title} {...link} onClose={handleClose} />
            ))}
          </ul>
        </div>
        <div className="flex-1 space-y-3">
          <ul className="space-y-2">
            {productLinksColumnTwo.map((link) => (
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
                  href="#"
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
