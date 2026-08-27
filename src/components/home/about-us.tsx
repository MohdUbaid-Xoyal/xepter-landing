import aboutImgPrimary from '@/public/images/ns-img-6.webp';
import aboutImgSecondary from '@/public/images/ns-img-7.webp';
import CounterNumberOnScroll from '@/src/components/animation/counter-number-on-scroll';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonWhite } from '@/src/components/shared/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const AboutUs = () => {
  return (
    <section className="pt-12 md:pt-16 lg:pt-20">
      <div className="main-container space-y-8 lg:space-y-14">
        <div className="text-center">
          <RevealAnimation delay={0.1}>
            <BadgePrimary>Why Choose Xepter</BadgePrimary>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-12 items-center justify-center gap-y-8 lg:gap-x-8 xl:gap-x-14">
          <RevealAnimation
            delay={0.1}
            direction="left"
            offset={100}
            className="col-span-12 lg:col-span-3"
          >
            <figure className="h-[260px] w-full overflow-hidden rounded-[20px] sm:h-[320px] md:h-[400px] lg:h-[520px]">
              <Image src={aboutImgPrimary} alt="about-us-img" className="size-full object-cover" />
            </figure>
          </RevealAnimation>

          <div className="col-span-12 lg:col-span-9">
            <RevealAnimation delay={0.2}>
              <div className="flex flex-col items-start gap-y-8 md:flex-row md:gap-x-8 xl:gap-x-14">
                <div className="w-full space-y-8 md:w-1/2">
                  <div className="space-y-5">
                    <TextReveal delay={0.3}>
                      <h2 className="text-heading-4 font-normal">
                        Built for Reliable Messaging.
                        <br />
                        Designed to Help Your Business{' '}
                        Grow.
                      </h2>
                    </TextReveal>
                    <TextReveal delay={0.35}>
                      <p className="text-background-14/60">
                        Whether you&apos;re sending marketing campaigns, appointment reminders, OTPs, or customer
                        notifications, Xepter delivers fast, reliable, and compliant messaging across the US. Our
                        platform combines powerful APIs, transparent pricing, and enterprise-grade infrastructure
                        to help your business communicate with confidence.
                      </p>
                    </TextReveal>
                  </div>

                  <div className="flex items-center gap-x-8">
                    <div className="space-y-1">
                      <h3 className="text-heading-5">
                        <CounterNumberOnScroll value={99} />%
                      </h3>
                      <p className="text-background-14/60">SMS Delivery Rate</p>
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-heading-5">
                        <CounterNumberOnScroll value={99.9} />%
                      </h3>
                      <p className="text-background-14/60">Platform Uptime</p>
                    </div>
                  </div>
                </div>

                <div className="w-full space-y-5 md:w-1/2">
                  <div className="space-y-3">
                    <TextReveal delay={0.4}>
                      <p className="text-tagline-2 text-secondary/60 font-inter-tight font-semibold tracking-widest uppercase">
                        See Xepter in Action
                      </p>
                    </TextReveal>
                    <TextReveal delay={0.45}>
                      <h3 className="text-heading-4">
                        Everything You Need to Send, Track &amp; Scale SMS Campaigns
                      </h3>
                    </TextReveal>
                    <Link href="/about" className="inline-block pt-3">
                      <ButtonWhite
                        className="mx-auto w-[80%]! md:mx-0 md:w-fit!"
                        textClassName="text-center text-nowrap max-sm:flex-1 max-sm:pr-8!"
                      >
                        Learn more
                      </ButtonWhite>
                    </Link>
                  </div>

                  <figure className="h-[220px] w-full overflow-hidden rounded-[20px] md:h-[260px] lg:h-[290px]">
                    <Image
                      src={aboutImgSecondary}
                      alt="about-us-img"
                      className="size-full object-cover"
                    />
                  </figure>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
