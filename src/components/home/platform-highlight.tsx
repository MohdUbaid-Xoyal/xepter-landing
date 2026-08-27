import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';

const PlatformHighlight = () => {
  return (
    <section className="pt-12 md:pt-16 lg:pt-20">
      <div className="main-container">
        <div className="shadow-1 rounded-[20px] bg-white px-5 py-7 text-center sm:px-8 md:px-16 md:py-10">
          <RevealAnimation delay={0.1}>
            <span className="text-tagline-3 sm:text-tagline-1 text-primary-500 font-inter-tight font-semibold tracking-wide sm:tracking-widest text-nowrap uppercase">
              One Platform. Endless Possibilities.
            </span>
          </RevealAnimation>
          <TextReveal delay={0.2}>
            <h2 className="mt-3 text-[14px] leading-snug min-[375px]:text-[18px] sm:text-[24px] md:text-[30px] lg:text-heading-3 xl:text-heading-3">
              <span className="text-nowrap">
                <span className="font-bold">Simple APIs</span>. Powerful Messaging.
              </span>
              <br />
              <span className="[text-decoration-skip-ink:none] text-nowrap underline decoration-4 underline-offset-8 [text-decoration-color:#f78f1e]">
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
