'use client';
import { ReactLenis, useLenis } from 'lenis/react';
import { usePathname, useSearchParams } from 'next/navigation';
import { ReactNode, useEffect, useRef } from 'react';

interface SmoothScrollingProps {
  children: ReactNode;
}

const SmoothScrollProvider = ({ children }: Readonly<SmoothScrollingProps>) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const previousPathnameRef = useRef<string>(pathname);
  const isInitialRender = useRef(true);

  const lenis = useLenis();

  useEffect(() => {
    // Only scroll to top if pathname actually changed (navigation), not on initial render or reload
    if (!isInitialRender.current && previousPathnameRef.current !== pathname) {
      lenis?.scrollTo(0, { immediate: true });
    }

    // Update refs
    previousPathnameRef.current = pathname;
    isInitialRender.current = false;
  }, [pathname, searchParams, lenis]);

  useEffect(() => {
    if (!lenis) {
      return;
    }

    const handleClick = (ele: Element) => {
      const href = ele.getAttribute('href');
      if (!href) return;
      lenis.scrollTo(href, {
        offset: -100,
      });
    };

    const elements = document.querySelectorAll('.lenis-scroll-to');
    const clickHandler = (e: Event) => {
      // Let Lenis own the scroll animation — without this, the browser's native
      // anchor-jump also fires and races Lenis for control of the scroll position.
      e.preventDefault();
      handleClick(e.currentTarget as Element);
    };

    elements.forEach((ele) => {
      ele.addEventListener('click', clickHandler);
    });

    return () => {
      elements.forEach((ele) => {
        ele.removeEventListener('click', clickHandler);
      });
    };
  }, [lenis, pathname]);

  return (
    <ReactLenis root options={{ duration: 1.1 }}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScrollProvider;
