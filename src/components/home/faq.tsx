import faqImg from '@/public/images/xepter-process-launch-scale.webp';
import CounterNumberOnScroll from '@/src/components/animation/counter-number-on-scroll';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import {
  Accordion,
  AccordionAction,
  AccordionContent,
  AccordionIcon,
  AccordionItem,
  AccordionTitle,
} from '@/src/components/shared/ui/accordion';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import Image from 'next/image';

const faqItems = [
  {
    value: 'how-quickly-can-i-start',
    question: 'How quickly can I start sending messages?',
    answer:
      'You can get started in minutes. Once your account is set up and compliance requirements are completed, you can begin sending SMS immediately.',
  },
  {
    value: 'volume-based-pricing',
    question: 'Do you offer volume-based pricing?',
    answer:
      'Yes. Xepter provides transparent, usage-based pricing with discounted rates for higher messaging volumes.',
  },
  {
    value: '10dlc-registration',
    question: 'Is 10DLC registration supported?',
    answer:
      'Absolutely. We guide businesses through campaign registration to ensure compliant and reliable delivery across US carriers.',
  },
  {
    value: 'integrate-with-software',
    question: 'Can I integrate Xepter with my software?',
    answer:
      'Yes. Our APIs and webhooks make it easy to integrate SMS, MMS, and analytics into your applications or CRM systems.',
  },
];

const FAQ = () => {
  return (
    <section className="pt-12 md:pt-16 lg:pt-20">
      <div className="main-container">
        <div className="flex flex-col items-start justify-center gap-y-10 overflow-hidden lg:flex-row lg:items-center lg:gap-x-18 lg:gap-y-0">
          <RevealAnimation delay={0.1} direction="left" offset={100} className="w-full lg:w-1/2">
            <RevealAnimation delay={0.2} asChild={false} className="relative">
              <div aria-hidden="true" className="pointer-events-none absolute top-4 right-4 -z-10">
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

              <figure className="h-[350px] w-full overflow-hidden rounded-t-[999px] rounded-b-3xl">
                <Image src={faqImg} alt="Xepter support" className="size-full object-cover" />
              </figure>

              <div className="bg-secondary mt-3 flex items-center justify-between rounded-2xl px-6 py-6 sm:px-10">
                <div className="flex items-center gap-x-3">
                  <div className="flex items-end gap-x-0.5">
                    <span className="text-heading-3 text-white font-bold">24</span>
                    <span className="text-tagline-1 text-white mb-1 font-bold">/7</span>
                  </div>
                  <p className="text-tagline-2 text-white/70">
                    Expert Support
                    <br />
                    Available
                  </p>
                </div>
                <div className="bg-white/15 h-10 w-px shrink-0" />
                <div className="flex items-center gap-x-3">
                  <div className="flex items-end gap-x-0.5">
                    <span className="text-heading-3 text-white font-bold">
                      <CounterNumberOnScroll value={99.9} />
                    </span>
                    <span className="text-tagline-1 text-white mb-1 font-bold">%</span>
                  </div>
                  <p className="text-tagline-2 text-white/70">Platform Uptime</p>
                </div>
              </div>
            </RevealAnimation>
          </RevealAnimation>

          <RevealAnimation
            delay={0.2}
            direction="right"
            offset={100}
            asChild={false}
            className="w-full lg:w-1/2"
          >
            <div className="mb-8 space-y-5 text-center lg:text-left">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Frequently Asked Questions</BadgePrimary>
              </RevealAnimation>

              <div className="space-y-3">
                <TextReveal delay={0.2}>
                  <h2>
                    Everything You Need to
                    <br />
                    <span className="font-bold">Launch with Confidence</span>
                  </h2>
                </TextReveal>
                <TextReveal delay={0.3}>
                  <p className="text-background-14/60 mx-auto max-w-[450px] lg:mx-0">
                    Get clear answers about pricing, compliance, onboarding, and how Xepter helps
                    you scale business messaging with ease.
                  </p>
                </TextReveal>
              </div>
            </div>

            <Accordion className="space-y-4" aria-label="FAQ">
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.value}
                  value={item.value}
                  className="data-[state=open]:bg-secondary rounded-[20px] bg-white px-4 transition-colors duration-300 md:px-6"
                >
                  <AccordionAction
                    showIcon={false}
                    className="group flex w-full cursor-pointer items-center justify-between gap-x-4 py-6 transition-all duration-400 ease-in-out"
                  >
                    <AccordionTitle className="group-data-[state=open]:text-white">
                      {item.question}
                    </AccordionTitle>
                    <AccordionIcon className="shrink-0 data-[state=open]:[&_svg]:stroke-white" />
                  </AccordionAction>
                  <AccordionContent
                    className="data-[state=open]:[&_p]:text-white/85"
                    contentClassName="text-tagline-3 sm:text-tagline-2 font-inter-tight cursor-text pb-6 text-left"
                  >
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
