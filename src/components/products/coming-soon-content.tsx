import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import SubscribeForm from '@/src/components/products/subscribe-form';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { Bell, Image as ImageIcon, LayoutGrid, Lock, MessageSquare, Phone } from 'lucide-react';

const channels = [
  { icon: MessageSquare, label: 'SMS', className: 'text-primary-500' },
  { icon: ImageIcon, label: 'MMS', className: 'text-primary-500' },
  { icon: Phone, label: 'Voice', className: 'text-brand-red' },
  { icon: LayoutGrid, label: 'and more', className: 'text-secondary' },
];

const ComingSoonContent = ({ productName }: { productName: string }) => {
  return (
    <section className="bg-background-13 relative overflow-hidden pt-[140px] pb-12 md:pt-[160px] md:pb-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 -z-10 size-[560px] rounded-full opacity-60 blur-[130px]"
        style={{ background: 'radial-gradient(circle, #d3ecfa 0%, transparent 70%)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-52 bottom-0 -z-10 size-[520px] rounded-full opacity-40 blur-[130px]"
        style={{ background: 'radial-gradient(circle, #ffb9a2 0%, transparent 70%)' }}
      />

      <div className="main-container">
        <div className="grid grid-cols-1 items-start gap-y-12 lg:grid-cols-2 lg:gap-x-16">
          {/* Left — message */}
          <div className="space-y-6 text-center lg:text-left">
            <RevealAnimation delay={0.1} asChild={false} className="flex justify-center lg:justify-start">
              <BadgePrimary>{productName} — Coming Soon</BadgePrimary>
            </RevealAnimation>

            <div className="space-y-5">
              <TextReveal delay={0.2}>
                <h1 className="text-heading-3 md:text-heading-2 text-secondary leading-[1.1] font-bold">
                  Something powerful
                  <br />
                  <span className="text-primary-500">is on the way.</span>
                </h1>
              </TextReveal>

              <RevealAnimation delay={0.3} asChild={false} className="flex justify-center lg:justify-start">
                <span className="bg-brand-red block h-[3px] w-14 rounded-full" />
              </RevealAnimation>

              <div className="space-y-3">
                <TextReveal delay={0.35}>
                  <h2 className="text-heading-5 text-secondary font-bold">
                    Smarter Business Communication Starts Here.
                  </h2>
                </TextReveal>
                <TextReveal delay={0.4}>
                  <p className="text-secondary/60 mx-auto max-w-[460px] lg:mx-0">
                    SMS, MMS, Voice, and more — all in one powerful communication platform.
                  </p>
                </TextReveal>
              </div>
            </div>

            <RevealAnimation delay={0.5} asChild={false}>
              <ul className="flex items-center justify-center gap-x-6 pt-2 sm:gap-x-8 lg:justify-start">
                {channels.map((channel, index) => (
                  <li key={channel.label} className="flex items-center gap-x-6 sm:gap-x-8">
                    <div className="flex flex-col items-center gap-y-2">
                      <channel.icon className={`size-6 ${channel.className}`} />
                      <span className="text-tagline-2 text-secondary font-medium">
                        {channel.label}
                      </span>
                    </div>
                    {index < channels.length - 1 && (
                      <span aria-hidden="true" className="bg-stroke-1 h-10 w-px" />
                    )}
                  </li>
                ))}
              </ul>
            </RevealAnimation>
          </div>

          {/* Right — subscribe */}
          <RevealAnimation delay={0.3} asChild={false} direction="left" offset={60}>
            <div className="shadow-2 border-stroke-1 mx-auto w-full max-w-[460px] rounded-[28px] border bg-white p-6 md:p-8">
              <div className="space-y-4 text-center">
                <span className="bg-primary-50 mx-auto flex size-16 items-center justify-center rounded-full">
                  <Bell className="text-primary-500 size-7" />
                </span>
                <div className="space-y-2">
                  <h3 className="text-heading-4 text-secondary leading-tight font-bold">
                    Want to know when
                    <br />
                    <span className="whitespace-nowrap">
                      <span className="text-primary-500">Xepter</span> goes live?
                    </span>
                  </h3>
                  <p className="text-tagline-2 text-secondary/60">
                    Subscribe below and be the first to know.
                  </p>
                </div>
              </div>

              <hr className="border-stroke-1 my-6" />

              <SubscribeForm />

              <p className="text-tagline-2 text-secondary/50 mt-5 flex items-center justify-center gap-x-1.5">
                <Lock className="size-4 shrink-0" />
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonContent;
