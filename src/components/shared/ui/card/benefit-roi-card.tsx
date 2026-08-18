'use client';

import benefitRoiImg from '@/public/images/ns-img-23.webp';
import CounterNumberOnScroll from '@/src/components/animation/counter-number-on-scroll';
import { cn } from '@/src/utils/cn';
import Image from 'next/image';
import type { HTMLAttributes } from 'react';

export type BenefitRoiCardProps = HTMLAttributes<HTMLDivElement>;

export const BenefitRoiCard = ({ className, ...props }: BenefitRoiCardProps) => {
  return (
    <div
      className={cn(
        'relative flex h-[350px] flex-col items-center justify-end overflow-hidden rounded-[20px] p-6 md:h-[550px]',
        className
      )}
      {...props}
    >
      <Image
        src={benefitRoiImg}
        alt="one-platform-every-channel"
        fill
        className="object-cover object-center"
        sizes="(max-width: 768px) 100vw, 25vw"
      />

      <div className="bg-accent/5 relative z-10 w-full space-y-6 rounded-2xl p-6 backdrop-blur-xl">
        <h3 className="text-heading-5 text-accent">
          <CounterNumberOnScroll value={4} />
          <span> channels, one platform</span>
        </h3>

        <div className="flex items-center justify-between">
          <span className="font-inter-tight text-tagline-3 text-accent font-normal">
            SMS · MMS · Voice · WhatsApp
          </span>
        </div>
      </div>
    </div>
  );
};
