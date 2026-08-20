'use client';

import bottomGradient from '@/public/images/bottom-gradient.svg';
import dashboardScreenshot from '@/public/images/dashboard-screenshot.png';
import leftElement from '@/public/images/ns-img-27.svg';
import rightElement from '@/public/images/ns-img-28.svg';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { ButtonPrimary, ButtonSecondary } from '@/src/components/shared/ui/button';
import { useSlightlyMoveOnMouseMove } from '@/src/hooks/use-slightly-move-on-mouse-move';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

const Hero = () => {
  const rootRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLElement>(null);
  const rightRef = useRef<HTMLElement>(null);

  useSlightlyMoveOnMouseMove(rootRef, [
    { ref: leftRef, shift: 12 },
    { ref: rightRef, shift: 10 },
  ]);

  return (
    <section ref={rootRef} className="relative isolate overflow-hidden pt-[190px]">
      <div className="main-container relative z-10">
        <div className="space-y-9 text-center md:space-y-18">
          <div className="space-y-8 md:space-y-[70px]">
            <div className="space-y-6">
              <RevealAnimation delay={0.1} instant>
                <p className="text-tagline-2 text-secondary/60 font-inter-tight font-semibold tracking-widest uppercase">
                  For Businesses, Marketers &amp; SaaS Platforms
                </p>
              </RevealAnimation>
              <div className="space-y-4">
                <TextReveal delay={0.3}>
                  <h1 className="mx-auto max-w-[950px]">
                    Powerful SMS &amp; 10DLC Messaging Platform for Growing Businesses
                  </h1>
                </TextReveal>
                <TextReveal delay={0.4}>
                  <p className="mx-auto max-w-[950px]">
                    Xepter helps businesses send high-delivery SMS &amp; MMS across the US with
                    10DLC compliance. Launch campaigns, generate leads, and engage customers
                    instantly with our fast and scalable messaging platform.
                  </p>
                </TextReveal>
              </div>
            </div>

            <RevealAnimation delay={0.3} instant>
              <div className="flex flex-col items-center justify-center gap-y-3 md:flex-row md:gap-x-5">
                <Link href="/contact" className="w-[70%] md:w-auto">
                  <ButtonSecondary
                    className="w-full outline-0! md:w-auto"
                    textClassName="text-center text-nowrap max-sm:flex-1 max-sm:pr-8!"
                  >
                    Talk to an Expert
                  </ButtonSecondary>
                </Link>
                <Link href="/signup" className="w-[70%] md:w-auto">
                  <ButtonPrimary
                    className="bg-brand-red hover:bg-brand-red/90 w-full md:w-auto"
                    textClassName="text-center text-nowrap max-sm:flex-1 max-sm:pr-8!"
                  >
                    Get Started
                  </ButtonPrimary>
                </Link>
              </div>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.4} instant>
            <figure className="h-[350px] w-full overflow-hidden rounded-[20px] backdrop-blur-[20px] md:h-[650px] xl:h-[825px]">
              <Image
                src={dashboardScreenshot}
                alt="Xepter dashboard screenshot"
                className="size-full"
                priority
              />
            </figure>
          </RevealAnimation>
        </div>

        <figure
          ref={leftRef}
          className="absolute top-[57%] left-[2%] z-30 hidden h-14 will-change-transform md:block xl:top-[50%] xl:left-[-5%] 2xl:left-[-8%]"
        >
          <RevealAnimation delay={0.5} direction="left" offset={50}>
            <div className="size-full">
              <Image src={leftElement} alt="left-elements" className="size-full object-cover" />
            </div>
          </RevealAnimation>
        </figure>

        <figure
          ref={rightRef}
          className="absolute top-[59%] right-[8%] z-30 hidden h-14 will-change-transform md:block xl:top-[42%] xl:right-[-3%] 2xl:right-[-5%]"
        >
          <RevealAnimation delay={0.6} direction="right" offset={50}>
            <div className="size-full">
              <Image src={rightElement} alt="right-elements" className="size-full object-cover" />
            </div>
          </RevealAnimation>
        </figure>
      </div>

      <RevealAnimation delay={0.5} instant>
        <figure className="absolute -bottom-1 left-0 z-20 h-[500px] w-full md:h-[600px] xl:h-[700px]">
          <Image src={bottomGradient} alt="bottom-gradient" className="size-full object-cover" />
        </figure>
      </RevealAnimation>
    </section>
  );
};

export default Hero;
