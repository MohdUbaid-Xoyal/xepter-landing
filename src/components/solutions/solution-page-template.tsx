import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import CTA from '@/src/components/shared/cta';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonSecondary } from '@/src/components/shared/ui/button';
import type { SolutionPageContent } from '@/src/data/solutions-content';
import Link from 'next/link';

const SolutionPageTemplate = ({ content }: { content: SolutionPageContent }) => {
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
              <div className="flex justify-center">
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
              <h2>{content.gridTitle}</h2>
            </TextReveal>
            <TextReveal delay={0.2}>
              <p className="text-secondary/60">{content.gridSubtitle}</p>
            </TextReveal>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {content.items.map((item, index) => (
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

      <CTA />
    </>
  );
};

export default SolutionPageTemplate;
