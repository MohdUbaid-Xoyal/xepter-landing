'use client';

import mainLogo from '@/public/images/logo/Xepter ORIGINAL- Logo.png';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import MobileMenu from '@/src/components/shared/layout/mobile-menu/mobile-menu';
import { CompanyMenu } from '@/src/components/shared/layout/navbar/company-menu';
import { DevelopersMenu } from '@/src/components/shared/layout/navbar/developers-menu';
import { NavChevron } from '@/src/components/shared/layout/navbar/nav-chevron';
import { NavbarMobileMenuButton } from '@/src/components/shared/layout/navbar/navbar-mobile-menu-button';
import { PricingMenu } from '@/src/components/shared/layout/navbar/pricing-menu';
import { ProductsMenu } from '@/src/components/shared/layout/navbar/products-menu';
import { SolutionsMenu } from '@/src/components/shared/layout/navbar/solutions-menu';
import { ButtonPrimary } from '@/src/components/shared/ui/button';
import { mobileMenuData } from '@/src/data/mobile-meu';
import { useNavbarScroll } from '@/src/hooks/useScrollHeader';
import { cn } from '@/src/utils/cn';
import { SERVICE_STATUS_URL } from '@/src/utils/constants';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinkClass =
  'hover:border-stroke-2 text-tagline-1 text-secondary hover:text-secondary flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200';

const activeNavLinkClass = 'border-stroke-2 font-semibold';

const isPathActive = (pathname: string, prefixes: string[]) =>
  prefixes.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`));

const loginLinkClass =
  'border-stroke-1 hover:border-stroke-2 text-tagline-1 text-secondary flex items-center gap-1 rounded-full border px-4 py-2 font-normal transition-all duration-200';

const Navbar = () => {
  const [menuDropdownId, setMenuDropdownId] = useState<string | null>(null);
  const scroll = useNavbarScroll(100);
  const pathname = usePathname();

  const isHomeActive = pathname === '/';
  const isProductsActive = isPathActive(pathname, ['/products']);
  const isSolutionsActive = isPathActive(pathname, ['/solutions']);
  const isDevelopersActive = isPathActive(pathname, ['/developers']);
  const isCompanyActive = isPathActive(pathname, [
    '/about',
    '/features',
    '/services',
    '/blog',
    '/contact',
  ]);
  const isPricingActive = isPathActive(pathname, ['/pricing']);

  return (
    <header onMouseLeave={() => setMenuDropdownId(null)}>
      <div className="fixed top-0 left-0 z-50 hidden w-full bg-transparent pt-2 xl:flex">

        <div className="lp:max-w-[1290px]! mx-auto flex w-full max-w-[350px] items-center gap-x-6 pl-4.5 min-[425px]:max-w-[375px] min-[500px]:max-w-[450px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
          <a
            href={SERVICE_STATUS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-tagline-2 text-secondary font-normal uppercase transition-opacity duration-200 hover:opacity-70"
          >
            Service Status
          </a>
          <Link
            href="/contact"
            className="text-tagline-2 text-secondary font-normal uppercase transition-opacity duration-200 hover:opacity-70"
          >
            Support Center
          </Link>
        </div>
      </div>
      <div
        className={cn(
          'lp:max-w-[1290px]! fixed left-1/2 z-50 mx-auto w-full max-w-[350px] -translate-x-1/2 rounded-full backdrop-blur-[25px] transition-all duration-500 ease-in-out min-[425px]:max-w-[375px] min-[500px]:max-w-[450px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]',
          scroll.isScrolled ? 'top-2 xl:top-8' : 'top-2 xl:top-10'
        )}
      >
        <RevealAnimation direction="up" offset={100} delay={0.1} instant>
          <div className="flex w-full items-center justify-between rounded-full bg-white px-2.5 py-2.5 xl:py-0">
            <div>
              <Link href="/">
                <span className="sr-only">Home</span>
                <figure>
                  <Image
                    src={mainLogo}
                    alt="Xepter Logo"
                    width={150}
                    height={42}
                    unoptimized
                    priority
                    className="h-auto w-[110px] min-[425px]:w-[120px] sm:w-[130px] md:w-[140px] lg:w-[150px]"
                  />
                </figure>
              </Link>
            </div>

            <nav className="hidden items-center xl:flex" aria-label="Main">
              <ul className="flex items-center">
                <li className="nav-item relative py-2.5">
                  <Link href="/" className={cn(navLinkClass, isHomeActive && activeNavLinkClass)}>
                    <span>Home</span>
                  </Link>
                </li>
                <li
                  className={cn(
                    'nav-item relative cursor-pointer py-2.5',
                    menuDropdownId === 'platform-mega-menu-v2' && 'active menu-active'
                  )}
                  data-menu="platform-mega-menu-v2"
                  onMouseEnter={() => setMenuDropdownId('platform-mega-menu-v2')}
                >
                  <Link
                    href="#"
                    className={cn(navLinkClass, isProductsActive && activeNavLinkClass)}
                    onClick={(e) => e.preventDefault()}
                  >
                    <span>Products</span>
                    <NavChevron open={menuDropdownId === 'platform-mega-menu-v2'} />
                  </Link>
                  <ProductsMenu
                    menuDropdownId={menuDropdownId}
                    setMenuDropdownId={setMenuDropdownId}
                  />
                </li>
                <li
                  className={cn(
                    'nav-item relative cursor-pointer py-2.5',
                    menuDropdownId === 'resources-dropdown-menu-v2' && 'active menu-active'
                  )}
                  data-menu="resources-dropdown-menu-v2"
                  onMouseEnter={() => setMenuDropdownId('resources-dropdown-menu-v2')}
                >
                  <Link
                    href="#"
                    className={cn(navLinkClass, isSolutionsActive && activeNavLinkClass)}
                    onClick={(e) => e.preventDefault()}
                  >
                    <span>Solutions</span>
                    <NavChevron open={menuDropdownId === 'resources-dropdown-menu-v2'} />
                  </Link>
                  <SolutionsMenu
                    menuDropdownId={menuDropdownId}
                    setMenuDropdownId={setMenuDropdownId}
                  />
                </li>
                <li
                  className={cn(
                    'nav-item relative cursor-pointer py-2.5',
                    menuDropdownId === 'product-mega-menu' && 'active menu-active'
                  )}
                  data-menu="product-mega-menu"
                  onMouseEnter={() => setMenuDropdownId('product-mega-menu')}
                >
                  <Link
                    href="#"
                    className={cn(navLinkClass, isDevelopersActive && activeNavLinkClass)}
                    onClick={(e) => e.preventDefault()}
                  >
                    <span>Developers</span>
                    <NavChevron open={menuDropdownId === 'product-mega-menu'} />
                  </Link>
                  <DevelopersMenu
                    menuDropdownId={menuDropdownId}
                    setMenuDropdownId={setMenuDropdownId}
                  />
                </li>
                <li
                  className={cn(
                    'nav-item relative cursor-pointer py-2.5',
                    menuDropdownId === 'company-mega-menu-v2' && 'active menu-active'
                  )}
                  data-menu="company-mega-menu-v2"
                  onMouseEnter={() => setMenuDropdownId('company-mega-menu-v2')}
                >
                  <Link
                    href="#"
                    className={cn(navLinkClass, isCompanyActive && activeNavLinkClass)}
                    onClick={(e) => e.preventDefault()}
                  >
                    <span>Company</span>
                    <NavChevron open={menuDropdownId === 'company-mega-menu-v2'} />
                  </Link>
                  <CompanyMenu
                    menuDropdownId={menuDropdownId}
                    setMenuDropdownId={setMenuDropdownId}
                  />
                </li>
                <li
                  className={cn(
                    'nav-item relative cursor-pointer py-2.5',
                    menuDropdownId === 'pricing-dropdown-menu-v2' && 'active menu-active'
                  )}
                  data-menu="pricing-dropdown-menu-v2"
                  onMouseEnter={() => setMenuDropdownId('pricing-dropdown-menu-v2')}
                >
                  <Link
                    href="#"
                    className={cn(navLinkClass, isPricingActive && activeNavLinkClass)}
                    onClick={(e) => e.preventDefault()}
                  >
                    <span>Pricing</span>
                    <NavChevron open={menuDropdownId === 'pricing-dropdown-menu-v2'} />
                  </Link>
                  <PricingMenu
                    menuDropdownId={menuDropdownId}
                    setMenuDropdownId={setMenuDropdownId}
                  />
                </li>
              </ul>
            </nav>

            <div className="hidden items-center justify-center gap-x-3 xl:flex">
              <Link href="/login" className={loginLinkClass}>
                Login
              </Link>
              <Link href="/signup" className="inline-block" aria-label="Get started">
                <ButtonPrimary>Get started</ButtonPrimary>
              </Link>
            </div>
            <NavbarMobileMenuButton />
          </div>
        </RevealAnimation>
      </div>
      <MobileMenu menuData={mobileMenuData} />
    </header>
  );
};

export default Navbar;
