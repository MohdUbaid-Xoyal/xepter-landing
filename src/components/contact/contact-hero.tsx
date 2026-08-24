import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { BadgePrimary } from '@/src/components/shared/ui/badge';

const ContactHero = () => {
  return (
    <section className="relative isolate overflow-hidden pt-[190px] pb-10 md:pb-14 lg:pb-16">
      <div className="main-container relative z-10">
        <div className="space-y-6 text-center">
          <RevealAnimation delay={0.1} instant>
            <div className="flex justify-center">
              <BadgePrimary>Contact</BadgePrimary>
            </div>
          </RevealAnimation>

          <div className="space-y-4">
            <TextReveal delay={0.3}>
              <h1 className="mx-auto max-w-[700px]">Get in touch with us</h1>
            </TextReveal>
            <TextReveal delay={0.4}>
              <p className="text-background-14/60 mx-auto max-w-[600px]">
                Have a general inquiry for the Xepter team? Complete the form and we&apos;ll be in touch as soon
                as possible.
              </p>
            </TextReveal>
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

export default ContactHero;
