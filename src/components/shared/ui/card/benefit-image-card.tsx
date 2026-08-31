import benefitImage from '@/public/images/xepter-benefit-analytics-chart.webp';
import { cn } from '@/src/utils/cn';
import Image from 'next/image';
import type { HTMLAttributes } from 'react';

export type BenefitImageCardProps = HTMLAttributes<HTMLDivElement>;

export const BenefitImageCard = ({ className, ...props }: BenefitImageCardProps) => {
  return (
    <div
      className={cn('relative h-[273px] overflow-hidden rounded-[20px]', className)}
      {...props}
    >
      <Image
        src={benefitImage}
        alt="Delivery analytics chart on a phone screen"
        fill
        className="object-cover object-center"
        sizes="(max-width: 768px) 100vw, 25vw"
      />
    </div>
  );
};
