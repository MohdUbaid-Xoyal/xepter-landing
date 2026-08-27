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
import { ButtonWhite } from '@/src/components/shared/ui/button';
import Link from 'next/link';

const faqItems = [
  {
    value: 'what-does-xepter-do',
    question: 'What does Xepter do?',
    answer:
      'Xepter is a business communications platform for SMS, MMS, Voice, and WhatsApp. Connect a number, reach customers on every channel, and see every conversation in one place inside GoHighLevel or HubSpot.',
  },
  {
    value: 'which-apps-can-i-connect',
    question: 'Which apps can I connect?',
    answer:
      'Xepter connects natively to GoHighLevel and HubSpot. For custom stacks, use the REST API and webhooks to send messages, place calls, and receive delivery events directly.',
  },
  {
    value: 'can-i-port-my-number',
    question: 'Can I use my existing number, or do I need a new one?',
    answer:
      'Either works. Port your existing local or toll-free number, or purchase a new one directly in Xepter — SMS, MMS, voice, and WhatsApp all run through the same number either way.',
  },
  {
    value: 'is-my-data-secure',
    question: 'Is my messaging data secure?',
    answer:
      "Yes. Xepter uses encryption in transit and at rest, role-based access controls, and audit logs, and every organization's data is isolated from every other.",
  },
  {
    value: 'sms-compliance-10dlc',
    question: 'Do I need to worry about SMS compliance (10DLC)?',
    answer:
      'No — Xepter handles brand and campaign registration for you, so your SMS traffic stays compliant and deliverable without extra paperwork on your end.',
  },
  {
    value: 'delivery-tracking',
    question: 'How do I know if a message was delivered?',
    answer:
      'Every message and call includes delivery status, and webhooks notify your system in real time when something is sent, delivered, or fails, so you always know what happened.',
  },
];

const FAQ = () => {
  return (
    <section className="pt-12 md:pt-16 lg:pt-20">
      <div className="main-container">
        <div className="flex flex-col items-start justify-center gap-y-6 overflow-hidden lg:flex-row lg:gap-x-18 lg:gap-y-0">
          <RevealAnimation delay={0.1} direction="left" offset={100} className="w-full lg:w-1/2">
            <div className="space-y-14 text-center lg:text-left">
              <div className="space-y-5">
                <RevealAnimation delay={0.1}>
                  <BadgePrimary>Frequently Asked Questions</BadgePrimary>
                </RevealAnimation>

                <div className="space-y-3">
                  <TextReveal delay={0.2}>
                    <h2>Frequently asked questions</h2>
                  </TextReveal>
                  <TextReveal delay={0.3}>
                    <p className="text-background-14/60 mx-auto max-w-[450px] lg:mx-0">
                      We&apos;ve gathered the most common questions about channels, integrations,
                      compliance, and pricing.
                    </p>
                  </TextReveal>
                </div>
              </div>

              <Link href="/contact" className="flex justify-center lg:justify-start">
                <ButtonWhite
                  className="mx-auto w-[80%]! md:mx-0 md:w-fit!"
                  textClassName="text-center max-sm:flex-1 max-sm:px-0! max-sm:pr-8!"
                >
                  Contact Us
                </ButtonWhite>
              </Link>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.2} direction="right" offset={100} className="w-full lg:w-1/2">
            <Accordion defaultOpen={faqItems[0].value} className="space-y-4" aria-label="FAQ">
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.value}
                  value={item.value}
                  className="group rounded-[20px] bg-white px-4 md:px-6"
                >
                  <AccordionAction
                    showIcon={false}
                    className="flex w-full cursor-pointer items-center justify-between gap-x-4 pt-6 transition-all duration-400 ease-in-out group-data-[state=closed]:pb-6 group-data-[state=open]:pb-4 md:pt-8 md:group-data-[state=closed]:pb-8"
                  >
                    <AccordionTitle>{item.question}</AccordionTitle>
                    <AccordionIcon className="shrink-0" />
                  </AccordionAction>
                  <AccordionContent contentClassName="text-tagline-3 sm:text-tagline-2 font-inter-tight cursor-text pb-8 text-left">
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
