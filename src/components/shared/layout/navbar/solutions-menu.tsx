'use client';

import {
  IndustriesIcon,
  TeamIcon,
  UseCaseIcon,
} from '@/src/components/shared/icon/menu-icon';
import {
  MenuLink,
  type MenuLinkProps,
} from '@/src/components/shared/layout/navbar/menu-link';
import { cn } from '@/src/utils/cn';

type SolutionLink = Omit<MenuLinkProps, 'onClose'>;

const MENU_SOLUTIONS_ID = 'resources-dropdown-menu-v2';

const solutionLinks: SolutionLink[] = [
  {
    title: 'Use Cases',
    description: 'Real-world examples of our solutions',
    href: '/solutions/use-cases',
    icon: UseCaseIcon,
  },
  {
    title: 'Industries',
    description: 'Built for agencies, real estate, and more',
    href: '/solutions/industries',
    icon: IndustriesIcon,
  },
  {
    title: 'Teams',
    description: 'For marketing, sales, support, and operations',
    href: '/solutions/teams',
    icon: TeamIcon,
  },
];

interface SolutionsMenuProps {
  menuDropdownId: string | null;
  setMenuDropdownId: (id: string | null) => void;
}

export const SolutionsMenu = ({ menuDropdownId, setMenuDropdownId }: SolutionsMenuProps) => {
  const handleClose = () => setMenuDropdownId(null);
  const isOpen = menuDropdownId === MENU_SOLUTIONS_ID;

  return (
    <div>
      <div className="dropdown-menu-bridge pointer-events-none absolute top-full left-1/2 z-40 h-3 w-full min-w-[340px] -translate-x-1/2 bg-transparent transition-opacity duration-300" />
      <ul
        id={MENU_SOLUTIONS_ID}
        className={cn(
          'dropdown-menu shadow-14 border-stroke-1 absolute top-full left-1/2 z-50 mt-2 w-[340px] -translate-x-1/2 rounded-[20px] border bg-white p-3 transition-all duration-300',
          isOpen && 'active'
        )}
      >
        {solutionLinks.map((link) => (
          <MenuLink key={link.title} {...link} onClose={handleClose} />
        ))}
      </ul>
    </div>
  );
};
