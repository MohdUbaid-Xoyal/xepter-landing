import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { ArrowDotRightIcon } from '@/src/components/shared/icon';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonPrimary } from '@/src/components/shared/ui/button';
import { cn } from '@/src/utils/cn';
import { BarChart3, CircleCheck, MessagesSquare, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const checklist = [
  '99% High Delivery SMS Across USA (10DLC Ready)',
  'Instant Campaign Launch & Lead Generation',
  'Real-Time Analytics, Tracking & Insights',
];

const cards = [
  {
    icon: MessagesSquare,
    title: 'SMS & MMS Messaging',
    description:
      'Send high-delivery SMS & MMS campaigns across the US with lightning-fast speed and enterprise-grade reliability.',
    offset: '',
  },
  {
    icon: ShieldCheck,
    title: '10DLC Campaign Management',
    description:
      'Register, manage, and scale your 10DLC campaigns with full compliance and higher delivery rates.',
    offset: 'lg:mt-16',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics & Insights',
    description: 'Track delivery rates, clicks, failures, and campaign performance with real-time dashboards.',
    offset: 'lg:mt-48',
  },
];

const Features = () => {
  return (
    <section className="pt-12 md:pt-16 lg:pt-20">
      <div className="main-container space-y-8 lg:space-y-12">
        <div className="text-center">
          <RevealAnimation delay={0.1}>
            <BadgePrimary>Features</BadgePrimary>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 items-start gap-y-12 lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-4">
            <TextReveal delay={0.2}>
              <h2>
                Scale Your Business with Reliable{' '}
                <span className="font-bold">SMS &amp; 10DLC&nbsp;Messaging</span>
              </h2>
            </TextReveal>

            <div className="mt-8 space-y-4">
              {checklist.map((item, index) => (
                <RevealAnimation key={item} asChild={false} delay={0.25 + index * 0.05}>
                  <div className="flex items-start gap-x-2.5">
                    <CircleCheck className="text-primary-500 mt-0.5 size-5 shrink-0" />
                    <span className="text-tagline-1 text-secondary/80">{item}</span>
                  </div>
                </RevealAnimation>
              ))}
            </div>

            <RevealAnimation delay={0.4} className="mt-8 inline-block">
              <Link href="/pricing">
                <ButtonPrimary
                  className="w-full sm:w-fit"
                  textClassName="text-center text-nowrap max-sm:flex-1 max-sm:pr-8!"
                >
                  View all services
                </ButtonPrimary>
              </Link>
            </RevealAnimation>
          </div>

          <div className="relative lg:col-span-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-8 right-4 -z-10 hidden lg:block"
            >
              <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
                {Array.from({ length: 4 }).map((_, row) =>
                  Array.from({ length: 4 }).map((_, col) => (
                    <circle
                      key={`${row}-${col}`}
                      cx={col * 12 + 6}
                      cy={row * 12 + 6}
                      r="2"
                      className="fill-secondary/15"
                    />
                  ))
                )}
              </svg>
            </div>

            <div className="flex flex-col gap-y-6 lg:flex-row lg:items-start lg:gap-x-4 lg:gap-y-0">
              {cards.map((card, index) => (
                <RevealAnimation
                  key={card.title}
                  delay={0.2 + index * 0.1}
                  className={cn('w-full lg:w-0 lg:flex-1', card.offset)}
                >
                  <div className="shadow-1 rounded-2xl bg-white p-5 xl:p-6">
                    <span className="bg-primary-50 text-primary-500 mb-5 flex size-12 shrink-0 items-center justify-center rounded-2xl">
                      <card.icon className="size-6" />
                    </span>
                    <h3 className="text-heading-6 text-secondary font-bold">{card.title}</h3>
                    <p className="text-tagline-2 text-secondary/80 mt-2">{card.description}</p>
                    <Link
                      href="/features"
                      aria-label={`Learn more about ${card.title}`}
                      className="bg-secondary hover:bg-secondary/90 mt-5 flex size-10 items-center justify-center rounded-full transition-colors duration-200"
                    >
                      <ArrowDotRightIcon className="size-5 fill-white" />
                    </Link>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
