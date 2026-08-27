import dashboardScreenshot from '@/public/images/dashboard-screenshot.png';
import processCardFourImg from '@/public/images/ns-img-16.webp';
import processCardThreeImg from '@/public/images/ns-img-17.webp';
import processCardTwoImg from '@/public/images/ns-img-18.webp';
import CounterNumberOnScroll from '@/src/components/animation/counter-number-on-scroll';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import CTA from '@/src/components/shared/cta';
import {
  Accordion,
  AccordionAction,
  AccordionContent,
  AccordionIcon,
  AccordionItem,
  AccordionTitle,
} from '@/src/components/shared/ui/accordion';
import { ButtonPrimary, ButtonSecondary, ButtonWhite } from '@/src/components/shared/ui/button';
import {
  Ban,
  BarChart3,
  CalendarCheck,
  Clock,
  Code2,
  FlaskConical,
  Globe,
  Hash,
  Headset,
  CircleCheck as IconCheck,
  Image as ImageIcon,
  KeyRound,
  LayoutTemplate,
  Lock,
  Megaphone,
  MessagesSquare,
  ShieldCheck,
  Users,
  Webhook,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const trustStats = [
  { value: 99, suffix: '%', label: 'SMS Delivery Rate' },
  { value: 99.9, suffix: '%', label: 'Platform Uptime' },
  { value: 50, suffix: '', label: 'States Covered' },
];

const apartItems = [
  {
    icon: ShieldCheck,
    title: 'Deliver with confidence',
    description:
      'Direct carrier routing and 10DLC-backed campaigns keep delivery fast, reliable, and compliant.',
  },
  {
    icon: Lock,
    title: 'Communicate securely',
    description:
      'Encryption in transit and at rest, with role-based access, protects every conversation and your brand.',
  },
  {
    icon: Globe,
    title: 'Reach everyone, everywhere',
    description: 'SMS works on every device, bridging the gaps other channels leave behind.',
  },
];

const alternatingSections = [
  {
    eyebrow: 'Reliable delivery',
    title: 'Expand reach with a messaging platform built for scale',
    description:
      'Enjoy universal coverage, high availability, and consistent performance. With 600+ direct carrier connections, your campaigns perform better and your systems stay resilient as your business grows.',
    bullets: [
      'Carrier-grade routing for high-availability delivery',
      'Real-time delivery receipts and webhooks for every message',
    ],
    image: processCardTwoImg,
    imageAlt: 'Sending a reliable SMS message',
    imageSide: 'left' as const,
  },
  {
    eyebrow: '10DLC compliance',
    title: 'Keep every campaign compliant and deliverable',
    description:
      'Brand and campaign registration, keyword filtering, and opt-out handling are built in, so your traffic stays inside carrier guidelines without extra paperwork on your end.',
    bullets: [
      'Brand & campaign registration handled for you',
      'Automatic STOP/HELP opt-out and keyword handling',
    ],
    image: processCardThreeImg,
    imageAlt: 'Reviewing compliant SMS campaign settings',
    imageSide: 'right' as const,
  },
  {
    eyebrow: 'Built for developers',
    title: 'Launch fast with a developer-friendly SMS API',
    description:
      'A unified API and managed compliance governance let your team move from idea to implementation quickly — without regulatory headaches slowing you down.',
    bullets: [
      'One REST API for SMS, MMS, and delivery events',
      'Webhooks, docs, and expert support when you need it',
    ],
    image: processCardFourImg,
    imageAlt: 'Reviewing SMS API documentation',
    imageSide: 'left' as const,
  },
];

const featureGrid = [
  { icon: MessagesSquare, label: 'Two-way SMS' },
  { icon: ImageIcon, label: 'MMS & rich media' },
  { icon: LayoutTemplate, label: 'Campaigns & templates' },
  { icon: BarChart3, label: 'Delivery tracking' },
  { icon: ShieldCheck, label: '10DLC compliance' },
  { icon: Users, label: 'Contact segmentation' },
  { icon: Webhook, label: 'Webhooks & events' },
  { icon: Code2, label: 'REST API & SDKs' },
  { icon: Ban, label: 'Opt-out automation' },
  { icon: Clock, label: 'Message scheduling' },
  { icon: Hash, label: 'Number pooling' },
  { icon: FlaskConical, label: 'Sandbox testing' },
];

const useCases = [
  {
    icon: Megaphone,
    title: 'Marketing campaigns',
    description: 'Reach customers with promotions and announcements that open in seconds.',
  },
  {
    icon: CalendarCheck,
    title: 'Appointment reminders',
    description: 'Cut no-shows with automatic reminders and two-way confirmations.',
  },
  {
    icon: KeyRound,
    title: 'OTP & verification',
    description: 'Secure logins and transactions with fast, reliable one-time passcodes.',
  },
  {
    icon: Headset,
    title: 'Customer service',
    description: 'Let customers text in for support without leaving the conversation thread.',
  },
];

const faqItems = [
  {
    value: 'what-is-xepter-sms-api',
    question: "What is Xepter's SMS API and how does it work?",
    answer:
      'Xepter is a programmable SMS API that lets applications send and receive text messages. It connects directly to carrier networks, giving you reliable delivery with built-in 10DLC compliance.',
  },
  {
    value: 'how-is-xepter-different',
    question: "How does Xepter's SMS differ from other providers?",
    answer:
      "Xepter combines carrier-grade routing, automatic 10DLC compliance, and native CRM integrations with GoHighLevel and HubSpot — so you get enterprise reliability without extra integration work.",
  },
  {
    value: 'bulk-messaging',
    question: 'Can I use Xepter for bulk messaging?',
    answer:
      'Yes. Xepter supports campaign sends to segmented contact lists with delivery tracking, so you can message thousands of contacts while staying within carrier and opt-out rules.',
  },
  {
    value: '10dlc-explained',
    question: 'How does 10DLC compliance work?',
    answer:
      'Xepter handles brand and campaign registration on your behalf, so your SMS traffic is registered, verified, and stays deliverable without you needing to manage the paperwork yourself.',
  },
  {
    value: 'delivery-rates',
    question: 'What kind of delivery rates can I expect?',
    answer:
      'Customers typically see delivery rates around 99% thanks to direct carrier connections and real-time delivery tracking that flags issues as they happen.',
  },
  {
    value: 'getting-started',
    question: 'How do I get started?',
    answer:
      'Create an account, connect or purchase a number, and register your 10DLC campaign. Most teams are sending their first message within minutes.',
  },
];

const SmsPageContent = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-[190px] pb-20 md:pb-25 lg:pb-28">
        <div className="main-container">
          <div className="grid grid-cols-1 items-center gap-y-10 lg:grid-cols-12 lg:gap-x-10">
            <div className="space-y-5 text-center lg:col-span-6 lg:text-left">
              <RevealAnimation delay={0.1}>
                <p className="text-tagline-2 text-primary-500 font-inter-tight font-semibold tracking-widest uppercase">
                  API for SMS Messaging
                </p>
              </RevealAnimation>
              <div className="space-y-3">
                <TextReveal delay={0.2}>
                  <h1>Two-way SMS your customers actually reply to</h1>
                </TextReveal>
                <TextReveal delay={0.3}>
                  <p className="text-secondary/60 mx-auto max-w-[520px] lg:mx-0">
                    Send and receive SMS from a single number your team already uses inside
                    GoHighLevel or HubSpot — campaigns, templates, and real conversations, not
                    just blasts.
                  </p>
                </TextReveal>
              </div>
              <RevealAnimation delay={0.4} instant>
                <div className="flex flex-col items-center justify-center gap-y-3 md:flex-row md:justify-start md:gap-x-5">
                  <Link href="/signup" className="w-[70%] md:w-auto">
                    <ButtonPrimary
                      className="w-full md:w-auto"
                      textClassName="text-center text-nowrap max-sm:flex-1 max-sm:pr-8!"
                    >
                      Get started
                    </ButtonPrimary>
                  </Link>
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

            <RevealAnimation delay={0.3} direction="left" offset={60} className="lg:col-span-6">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -inset-x-6 -inset-y-8 -z-10 rounded-[40px] opacity-40 blur-3xl"
                  style={{
                    background:
                      'radial-gradient(55% 55% at 20% 25%, #117cc1 0%, transparent 70%)',
                  }}
                />
                <figure className="h-[280px] w-full overflow-hidden rounded-[20px] sm:h-[360px] md:h-[440px]">
                  <Image
                    src={dashboardScreenshot}
                    alt="Xepter SMS dashboard"
                    className="size-full"
                  />
                </figure>
                <div className="bg-secondary absolute top-6 -left-3 z-10 flex items-center gap-2 rounded-full px-4 py-2 text-white shadow-lg md:-left-6">
                  <span className="text-tagline-2 font-semibold text-nowrap">
                    99% delivered
                  </span>
                </div>
              </div>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.5}>
            <div className="border-stroke-1 mt-16 grid grid-cols-1 gap-8 border-t pt-10 text-center sm:grid-cols-3 md:mt-20">
              {trustStats.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <h3 className="text-heading-4 text-secondary">
                    <CounterNumberOnScroll value={stat.value} />
                    {stat.suffix}
                  </h3>
                  <p className="text-tagline-2 text-secondary/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* What sets Xepter SMS apart */}
      <section className="pb-20 md:pb-25 lg:pb-28">
        <div className="main-container space-y-10 md:space-y-14">
          <div className="mx-auto max-w-[650px] space-y-2 text-center md:space-y-3">
            <RevealAnimation delay={0.1}>
              <p className="text-tagline-2 text-primary-500 font-inter-tight font-semibold tracking-widest uppercase">
                What sets Xepter SMS apart
              </p>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2>The trusted SMS API for every essential workflow</h2>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="text-secondary/60">
                Xepter SMS connects to a global carrier network with AI-driven delivery
                intelligence, so you can send confidently, communicate securely, and get worldwide
                coverage for alerts, codes, and commands.
              </p>
            </TextReveal>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {apartItems.map((item, index) => (
              <RevealAnimation key={item.title} delay={0.1 + index * 0.05}>
                <div className="space-y-4 text-center">
                  <span className="border-stroke-1 mx-auto flex size-12 items-center justify-center rounded-full border">
                    <item.icon className="text-primary-500 size-5" />
                  </span>
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

      {/* Alternating image + text sections */}
      {alternatingSections.map((section) => (
        <section key={section.title} className="pb-20 md:pb-25 lg:pb-28">
          <div className="main-container">
            <div className="grid grid-cols-1 items-center gap-y-8 lg:grid-cols-12 lg:gap-x-14">
              <RevealAnimation
                direction={section.imageSide === 'left' ? 'left' : 'right'}
                offset={80}
                className={`lg:col-span-6 ${
                  section.imageSide === 'right' ? 'lg:order-2' : ''
                }`}
              >
                <figure className="h-[280px] w-full overflow-hidden rounded-[20px] md:h-[380px]">
                  <Image
                    src={section.image}
                    alt={section.imageAlt}
                    className="size-full object-cover"
                  />
                </figure>
              </RevealAnimation>

              <div
                className={`space-y-5 lg:col-span-6 ${
                  section.imageSide === 'right' ? 'lg:order-1' : ''
                }`}
              >
                <RevealAnimation delay={0.1}>
                  <p className="text-tagline-2 text-primary-500 font-inter-tight font-semibold tracking-widest uppercase">
                    {section.eyebrow}
                  </p>
                </RevealAnimation>
                <div className="space-y-3">
                  <TextReveal delay={0.2}>
                    <h2 className="text-heading-4">{section.title}</h2>
                  </TextReveal>
                  <TextReveal delay={0.3}>
                    <p className="text-secondary/60">{section.description}</p>
                  </TextReveal>
                </div>
                <div className="space-y-3">
                  {section.bullets.map((bullet, index) => (
                    <RevealAnimation key={bullet} delay={0.35 + index * 0.05}>
                      <div className="flex items-start gap-x-2.5">
                        <IconCheck className="text-primary-500 mt-0.5 size-5 shrink-0" />
                        <span className="text-tagline-1 text-secondary/80">{bullet}</span>
                      </div>
                    </RevealAnimation>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Innovative features grid */}
      <section className="pb-20 md:pb-25 lg:pb-28">
        <div className="main-container space-y-10 md:space-y-14">
          <div className="max-w-[650px] space-y-2 md:space-y-3">
            <TextReveal delay={0.1}>
              <h2>Everything you need to launch, manage, and scale SMS messaging</h2>
            </TextReveal>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {featureGrid.map((item, index) => (
              <RevealAnimation key={item.label} delay={0.05 + index * 0.03}>
                <div className="flex items-center gap-x-3">
                  <span className="border-stroke-1 flex size-11 shrink-0 items-center justify-center rounded-xl border">
                    <item.icon className="text-primary-500 size-5" />
                  </span>
                  <span className="text-tagline-2 text-secondary font-medium">{item.label}</span>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Proven use cases */}
      <section className="pb-20 md:pb-25 lg:pb-28">
        <div className="main-container">
          <div className="bg-background-1 rounded-[20px] px-6 py-16 md:px-16 md:py-20">
            <div className="mx-auto max-w-[650px] space-y-2 text-center md:space-y-3">
              <RevealAnimation delay={0.1}>
                <p className="text-tagline-2 text-primary-500 font-inter-tight font-semibold tracking-widest uppercase">
                  Proven use cases
                </p>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2>Engage, secure, and support at scale with a trusted SMS gateway</h2>
              </TextReveal>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {useCases.map((item, index) => (
                <RevealAnimation key={item.title} delay={0.1 + index * 0.05}>
                  <div className="h-full space-y-4 rounded-2xl bg-white p-6">
                    <span className="bg-primary-50 text-primary-500 flex size-11 items-center justify-center rounded-xl">
                      <item.icon className="size-5" />
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-heading-6 text-secondary">{item.title}</h3>
                      <p className="text-tagline-2 text-secondary/60">{item.description}</p>
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-20 md:pb-25 lg:pb-28">
        <div className="main-container">
          <div className="mx-auto max-w-[720px] space-y-10 md:space-y-14">
            <div className="space-y-3 text-center">
              <TextReveal delay={0.1}>
                <h2>Frequently asked questions about Xepter SMS</h2>
              </TextReveal>
            </div>

            <RevealAnimation delay={0.2}>
              <Accordion defaultOpen={faqItems[0].value} className="space-y-4" aria-label="SMS FAQ">
                {faqItems.map((item) => (
                  <AccordionItem
                    key={item.value}
                    value={item.value}
                    className="group border-stroke-1 rounded-[20px] border bg-white px-4 md:px-6"
                  >
                    <AccordionAction
                      showIcon={false}
                      className="flex w-full cursor-pointer items-center justify-between gap-x-4 py-6 transition-all duration-400 ease-in-out"
                    >
                      <AccordionTitle>{item.question}</AccordionTitle>
                      <AccordionIcon className="shrink-0" />
                    </AccordionAction>
                    <AccordionContent contentClassName="text-tagline-3 sm:text-tagline-2 font-inter-tight cursor-text pb-6 text-left">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </RevealAnimation>

            <RevealAnimation delay={0.3} className="flex justify-center">
              <Link href="/contact">
                <ButtonWhite
                  className="mx-auto w-[80%]! md:mx-0 md:w-fit!"
                  textClassName="text-center max-sm:flex-1 max-sm:px-0! max-sm:pr-8!"
                >
                  Contact Us
                </ButtonWhite>
              </Link>
            </RevealAnimation>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
};

export default SmsPageContent;
