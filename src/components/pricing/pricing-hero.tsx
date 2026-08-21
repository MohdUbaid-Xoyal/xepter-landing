import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { BadgePrimary } from '@/src/components/shared/ui/badge';

const PricingHero = () => {
  return (
    <section className="relative isolate overflow-hidden pt-[190px] pb-20 md:pb-25 lg:pb-28">
      <div className="main-container relative z-10">
        <div className="space-y-9 text-center md:space-y-18">
          <div>
            <div className="space-y-6">
              <RevealAnimation delay={0.1} instant>
                <div className="flex justify-center">
                  <BadgePrimary>Pricing</BadgePrimary>
                </div>
              </RevealAnimation>

              <div className="space-y-4">
                <TextReveal delay={0.3}>
                  <h1 className="mx-auto max-w-[900px]">
                    Simple pricing that{' '}
                    <span className="text-primary-500">scales with you</span>
                  </h1>
                </TextReveal>
                <TextReveal delay={0.4}>
                  <p className="text-background-14/60 mx-auto max-w-[520px]">
                    Upgrade anytime as you grow — from a single SMS number to every channel your
                    team needs.
                  </p>
                </TextReveal>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[520px] w-[900px] -translate-x-1/2 opacity-40 blur-3xl"
        style={{
          background:
            'radial-gradient(50% 50% at 30% 40%, #117cc1 0%, transparent 70%), radial-gradient(40% 40% at 75% 60%, #ed2329 0%, transparent 70%)',
        }}
      />
    </section>
  );
};

export default PricingHero;
