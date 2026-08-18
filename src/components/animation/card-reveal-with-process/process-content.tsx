'use client';

import { cn } from '@/src/utils/cn';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ComponentPropsWithoutRef, ReactNode, useEffect, useRef } from 'react';
import { PROCESS_ANIMATION } from './process-animation-config';
import { useProcessContext } from './process-context';

gsap.registerPlugin(useGSAP);

type ProcessContentProps = {
  index: number;
  eyebrow?: string;
  title: ReactNode;
  description: ReactNode;
  details: { title: string; description: string }[];
  actions?: ReactNode;
} & Omit<ComponentPropsWithoutRef<'div'>, 'title'>;

const ProcessContent = ({
  index,
  eyebrow,
  title,
  description,
  details,
  actions,
  className,
  ...props
}: ProcessContentProps) => {
  const { registerContent } = useProcessContext();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerContent(index, contentRef.current);
    return () => registerContent(index, null);
  }, [index, registerContent]);

  useGSAP(
    () => {
      const el = contentRef.current;
      if (!el) return;

      gsap.set(el, {
        yPercent: 0,
        opacity: index === 0 ? 1 : 0,
        filter: PROCESS_ANIMATION.BLUR_OUT,
        willChange: 'transform, opacity, filter',
      });
    },
    { dependencies: [index] },
  );

  return (
    <div className={cn('relative w-full overflow-hidden py-5 md:w-1/2', className)} {...props}>
      <div ref={contentRef} className="h-fit w-full space-y-8 max-md:p-5 md:h-full">
        <div>
          <div className="space-y-1">
            {eyebrow && (
              <span className="text-tagline-3 font-inter-tight text-primary-500 block font-semibold tracking-widest uppercase">
                {eyebrow}
              </span>
            )}
            <h3 className="font-inter-tight text-heading-4 text-secondary font-normal">{title}</h3>
          </div>
          <p className="text-tagline-2 mt-4 max-w-[440px] text-left">{description}</p>
        </div>
        {details.length > 0 && (
          <div className="hidden space-y-6 md:block">
            {details.map((detail) => (
              <div key={detail.title} className="space-y-1">
                <h4 className="text-tagline-new">{detail.title}</h4>
                <p className="text-tagline-2 max-w-[400px] text-left">{detail.description}</p>
              </div>
            ))}
          </div>
        )}
        {actions && <div className="flex flex-wrap items-center gap-4">{actions}</div>}
      </div>
    </div>
  );
};

export default ProcessContent;
