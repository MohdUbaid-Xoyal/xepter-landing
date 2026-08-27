import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';

const highlights = [
  {
    title: 'Global reach',
    description: 'Send to customers across markets with local, toll-free, and short code numbers.',
  },
  {
    title: 'Real-time delivery',
    description: 'Delivery receipts and webhooks so you always know what happened, and when.',
  },
  {
    title: 'Built-in compliance',
    description: 'Routing and safeguards designed to keep every channel compliant by default.',
  },
  {
    title: 'Always-on support',
    description: 'A team that answers when a channel goes down or a launch needs a hand.',
  },
];

const NetworkBand = () => {
  return (
    <section className="pt-12 md:pt-16 lg:pt-20">
      <div className="main-container">
        <div className="bg-secondary rounded-[20px] px-6 py-16 md:px-16 md:py-20">
          <div className="mx-auto max-w-[640px] space-y-3 text-center">
            <span className="text-tagline-3 font-inter-tight text-primary-200 font-semibold tracking-widest uppercase">
              The Xepter network
            </span>
            <TextReveal delay={0.1}>
              <h2 className="text-white">Built on a network designed for reliability</h2>
            </TextReveal>
            <p className="text-white/60">
              Every message and call runs through infrastructure designed for delivery you can
              count on, wherever your customers are.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <RevealAnimation key={item.title} delay={0.2}>
                <div className="space-y-2 text-center lg:text-left">
                  <h3 className="text-heading-6 text-white">{item.title}</h3>
                  <p className="text-tagline-2 text-white/60">{item.description}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkBand;
