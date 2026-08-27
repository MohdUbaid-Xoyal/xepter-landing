import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';

const PlatformHighlight = () => {
  return (
    <section className="pt-12 md:pt-16 lg:pt-20">
      <div className="main-container">
        <div className="shadow-1 rounded-[20px] bg-white px-6 py-8 text-center md:px-16 md:py-10">
          <RevealAnimation delay={0.1}>
            <span className="text-tagline-1 text-primary-500 font-inter-tight font-semibold tracking-widest uppercase">
              One Platform. Endless Possibilities.
            </span>
          </RevealAnimation>
          <TextReveal delay={0.2}>
            <h2 className="mt-3">
              <span className="font-bold">Simple APIs</span>. Powerful Messaging.
              <br />
              <span className="[text-decoration-skip-ink:none] underline decoration-4 underline-offset-8 [text-decoration-color:#f78f1e]">
                Enterprise Reliability
              </span>
              .
            </h2>
          </TextReveal>
        </div>
      </div>
    </section>
  );
};

export default PlatformHighlight;
