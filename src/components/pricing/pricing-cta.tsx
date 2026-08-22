import globeImg from '@/public/images/ns-img-26.svg';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonPrimary, ButtonSecondary } from '@/src/components/shared/ui/button';
import { pricingCtaButtons } from '@/src/data/pricing-content';
import Image from 'next/image';
import Link from 'next/link';

const PricingCta = () => {
  return (
    <section>
      <RevealAnimation delay={0.1}>
        <div className="main-container">
          <div className="relative overflow-hidden rounded-2xl bg-white px-5 pt-20 pb-20 md:px-16 md:pt-39 md:pb-39 lg:pt-60">
            <RevealAnimation
              delay={0.2}
              className="absolute top-15 left-1/2 z-10 size-[639px] -translate-x-1/2"
            >
              <figure>
                <Image src={globeImg} alt="globe" className="size-full object-cover" />
              </figure>
            </RevealAnimation>

            <div className="relative z-20 space-y-8">
              <div className="space-y-5 text-center">
                <RevealAnimation delay={0.3}>
                  <BadgePrimary>CTA</BadgePrimary>
                </RevealAnimation>

                <div className="space-y-3">
                  <TextReveal delay={0.4}>
                    <h2 className="mx-auto max-w-[650px]">
                      Ready to put every channel to work?
                    </h2>
                  </TextReveal>
                  <TextReveal delay={0.5}>
                    <p className="text-background-14/60 mx-auto max-w-[550px]">
                      Talk to a Xepter expert about SMS, MMS, voice, and WhatsApp — and see how it
                      fits the CRM you already run.
                    </p>
                  </TextReveal>
                </div>
              </div>

              <RevealAnimation
                asChild={false}
                delay={0.6}
                className="flex flex-col items-center justify-center gap-3 sm:flex-row"
              >
                <Link href={pricingCtaButtons.primary.href} className="w-full sm:w-auto">
                  <ButtonSecondary
                    className="w-full sm:w-auto"
                    textClassName="text-center text-nowrap max-sm:flex-1 max-sm:pr-8!"
                  >
                    {pricingCtaButtons.primary.label}
                  </ButtonSecondary>
                </Link>
                <Link href={pricingCtaButtons.secondary.href} className="w-full sm:w-auto">
                  <ButtonPrimary
                    className="w-full sm:w-auto"
                    textClassName="text-center text-nowrap max-sm:flex-1 max-sm:pr-8!"
                  >
                    {pricingCtaButtons.secondary.label}
                  </ButtonPrimary>
                </Link>
              </RevealAnimation>
            </div>

            <div
              className="absolute bottom-0 left-0 z-10 h-[300px] w-full rounded-b-[20px] lg:h-[390px]"
              style={{
                background:
                  'linear-gradient(180deg, rgba(255, 255, 255, 0) -59.75%, rgba(255, 255, 255, 0.5) -10.1%, rgba(255, 255, 255, 0.8) 30.12%, #fff 70.98%)',
              }}
            />
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default PricingCta;
