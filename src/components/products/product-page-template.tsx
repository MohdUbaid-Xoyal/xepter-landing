import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import CTA from '@/src/components/shared/cta';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonPrimary, ButtonSecondary } from '@/src/components/shared/ui/button';
import type { ProductPageContent } from '@/src/data/products-content';
import Link from 'next/link';

const ProductPageTemplate = ({ content }: { content: ProductPageContent }) => {
  return (
    <>
      <section className="relative overflow-hidden pt-[190px] pb-20 md:pb-25 lg:pb-28">
        <div className="main-container">
          <div className="mx-auto max-w-[720px] space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>{content.eyebrow}</BadgePrimary>
            </RevealAnimation>
            <div className="space-y-3">
              <TextReveal delay={0.2}>
                <h1 className="mx-auto max-w-[650px]">{content.title}</h1>
              </TextReveal>
              <TextReveal delay={0.3}>
                <p className="text-background-14/60 mx-auto max-w-[560px]">{content.subtitle}</p>
              </TextReveal>
            </div>
            <RevealAnimation delay={0.4} instant>
              <div className="flex flex-col items-center justify-center gap-y-3 md:flex-row md:gap-x-5">
                <Link href="/demo" className="w-[70%] md:w-auto">
                  <ButtonPrimary
                    className="w-full md:w-auto"
                    textClassName="text-center text-nowrap max-sm:flex-1 max-sm:pr-8!"
                  >
                    Get started
                  </ButtonPrimary>
                </Link>
                <Link href="/contact" className="w-[70%] md:w-auto">
                  <ButtonSecondary
                    className="w-full outline-0! md:w-auto"
                    textClassName="text-center text-nowrap max-sm:flex-1 max-sm:pr-8!"
                  >
                    Talk to an Expert
                  </ButtonSecondary>
                </Link>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-25 lg:pb-28">
        <div className="main-container space-y-10 md:space-y-14">
          <div className="mx-auto max-w-[650px] space-y-2 text-center md:space-y-3">
            <TextReveal delay={0.1}>
              <h2>{content.capabilitiesTitle}</h2>
            </TextReveal>
            <TextReveal delay={0.2}>
              <p className="text-secondary/60">{content.capabilitiesSubtitle}</p>
            </TextReveal>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {content.capabilities.map((item, index) => (
              <RevealAnimation key={item.title} delay={0.1 + index * 0.05}>
                <div className="border-stroke-1 h-full space-y-4 rounded-2xl border bg-white p-8">
                  <div className="border-stroke-1 flex size-11 items-center justify-center rounded-xl border">
                    <item.icon />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-heading-6 text-secondary">{item.title}</h3>
                    <p className="text-tagline-2 text-secondary/60">{item.description}</p>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-25 lg:pb-28">
        <div className="main-container">
          <div className="bg-secondary rounded-[20px] px-6 py-16 md:px-16 md:py-20">
            <div className="mx-auto max-w-[640px] space-y-3 text-center">
              <TextReveal delay={0.1}>
                <h2 className="text-white">{content.howItWorksTitle}</h2>
              </TextReveal>
              <p className="text-white/60">{content.howItWorksSubtitle}</p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
              {content.steps.map((step, index) => (
                <RevealAnimation key={step.title} delay={0.2 + index * 0.05}>
                  <div className="space-y-2 text-center md:text-left">
                    <span className="text-tagline-3 font-inter-tight text-primary-200 font-semibold tracking-widest uppercase">
                      Step {index + 1}
                    </span>
                    <h3 className="text-heading-6 text-white">{step.title}</h3>
                    <p className="text-tagline-2 text-white/60">{step.description}</p>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
};

export default ProductPageTemplate;
