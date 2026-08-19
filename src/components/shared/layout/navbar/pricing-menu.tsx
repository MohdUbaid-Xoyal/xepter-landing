'use client';

import {
  AnalyticsIconV2,
  IntegrationIconV2,
  PricingIcon,
  SupportIconV2,
  WhitePaperIconV2,
} from '@/src/components/shared/icon/menu-icon';
import { SimpleMenuLink } from '@/src/components/shared/layout/navbar/simple-menu-link';
import { cn } from '@/src/utils/cn';
import type { ComponentType } from 'react';

interface PricingLink {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
}

const MENU_PRICING_ID = 'pricing-dropdown-menu-v2';

const pricingLinks: PricingLink[] = [
  { label: 'Pricing', href: '/pricing', icon: PricingIcon },
  { label: 'Customer Support', href: '#', icon: SupportIconV2 },
  { label: 'Analytics & Reporting', href: '#', icon: AnalyticsIconV2 },
  { label: 'Whitepaper & Reports', href: '#', icon: WhitePaperIconV2 },
  { label: 'Explore All Integrations', href: '#', icon: IntegrationIconV2 },
];

interface PricingMenuProps {
  menuDropdownId: string | null;
  setMenuDropdownId: (id: string | null) => void;
}

export const PricingMenu = ({ menuDropdownId, setMenuDropdownId }: PricingMenuProps) => {
  const handleClose = () => setMenuDropdownId(null);
  const isOpen = menuDropdownId === MENU_PRICING_ID;

  return (
    <div>
      <div className="dropdown-menu-bridge pointer-events-none absolute top-full left-1/2 z-40 h-3 w-full min-w-[280px] -translate-x-1/2 bg-transparent transition-opacity duration-300" />
      <ul
        id={MENU_PRICING_ID}
        className={cn(
          'dropdown-menu shadow-14 border-stroke-1 absolute top-full left-1/2 z-50 mt-2 w-[280px] -translate-x-1/2 rounded-[20px] border bg-white p-3 transition-all duration-300',
          isOpen && 'active'
        )}
      >
        {pricingLinks.map((link) => (
          <SimpleMenuLink key={link.label} {...link} onClose={handleClose} />
        ))}
      </ul>
    </div>
  );
};
