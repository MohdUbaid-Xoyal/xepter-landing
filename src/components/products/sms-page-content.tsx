import processCardFourImg from '@/public/images/xepter-process-launch-scale.webp';
import processCardThreeImg from '@/public/images/xepter-process-connect-number.webp';
import processCardTwoImg from '@/public/images/xepter-process-10dlc-registration.webp';
import smsHeroImg from '@/public/images/xepter-sms-hero.png';
import CounterNumberOnScroll from '@/src/components/animation/counter-number-on-scroll';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import FAQ from '@/src/components/home/faq';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonPrimary, ButtonSecondary } from '@/src/components/shared/ui/button';
import {
  BarChart3,
  CalendarCheck,
  Clock,
  Code2,
  FlaskConical,
  Globe,
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
      'Direct-to-carrier routing and SLA-backed uptime deliver time-sensitive alerts and codes quickly, every time.',
  },
  {
    icon: Lock,
    title: 'Communicate securely',
    description:
      'Built-in AI blocks smishing and artificially inflated traffic to protect your customers, your budget, and your brand.',
  },
  {
    icon: Globe,
    title: 'Reach everyone, everywhere',
    description:
      'SMS works on every device, bridging connectivity gaps and staying reliable when other channels fail.',
  },
];

const alternatingSections = [
  {
    eyebrow: 'Reliable delivery',
    title: 'Expand reach and operational certainty with a bulk messaging API',
    description:
      'Enjoy universal coverage, high availability, and consistent performance. With 600+ direct carrier connections, your campaigns perform better, your systems stay resilient, and your business stays connected — even when conditions change.',
    bullets: [
      'Enterprise-grade SLA and high availability',
      'Prioritized routing for rapid OTP delivery',
      'Real-time delivery intelligence for audit-ready data',
    ],
    image: processCardTwoImg,
    imageAlt: 'Sending a reliable SMS message',
    imageSide: 'left' as const,
  },
  {
    eyebrow: 'Proactive security',
    title: 'Protect customers and budgets from SMS fraud with secure, AI-protected APIs',
    description:
      'Our integrated AI security proactively identifies and blocks smishing, bot traffic, and unauthorized device commands to minimize risk and protect your customers and budget.',
    bullets: [
      'Real-time smishing and AIT detection',
      'Filters mixed traffic types (A2P, P2P)',
      'Preserves data integrity for accurate analytics',
    ],
    image: processCardThreeImg,
    imageAlt: 'Reviewing compliant SMS campaign settings',
    imageSide: 'right' as const,
  },
  {
    eyebrow: 'Agile innovation',
    title: 'Launch fast and easily with a developer-friendly SMS API',
    description:
      'A unified platform and managed compliance simplify integration, letting your team move from idea to implementation quickly — without regulatory headaches.',
    bullets: [
      'One API for global SMS messaging',
      'Expert-backed compliance and governance',
      'Shared templates and routing for faster rollout',
    ],
    image: processCardFourImg,
    imageAlt: 'Reviewing SMS API documentation',
    imageSide: 'left' as const,
  },
];

const featureGrid = [
  {
    icon: Webhook,
    label: 'WAP Push',
    description: 'Send short URLs and clickable links through WAP-Push to direct mobile users in an instant.',
  },
  {
    icon: BarChart3,
    label: 'Delivery Reporting',
    description: 'Track each SMS delivery easily with detailed status updates and error codes.',
  },
  {
    icon: ShieldCheck,
    label: 'Traffic Controls',
    description:
      'Easily manage the flow and performance of callback traffic with rate planning and scalable webhook infrastructure.',
  },
  {
    icon: Code2,
    label: 'Developer Tools',
    description: "Access essential tools and documentation for developers working with Xepter's API.",
  },
  {
    icon: LayoutTemplate,
    label: 'Message Optimization',
    description: 'Craft clear, concise, and personal SMS messages to boost engagement and response rates.',
  },
  {
    icon: Users,
    label: 'Contact Workflows',
    description: 'Manage the entire customer journey from the first message to the final reply in a single flow.',
  },
  {
    icon: MessagesSquare,
    label: 'Two-Way SMS',
    description:
      'Have a simple back-and-forth with customers via text with two-way SMS, so you can send and receive replies seamlessly.',
  },
  {
    icon: ImageIcon,
    label: 'Message Formatting',
    description: 'Send messages in plain text, markdown, or rich content features for every channel.',
  },
  {
    icon: Clock,
    label: 'Message Timing',
    description: "Schedule messages for the perfect moment to reach your audience when they're most responsive.",
  },
  {
    icon: FlaskConical,
    label: 'Testing Sandbox',
    description: 'Test your integration in a safe environment before going live with real traffic.',
  },
];

const useCases = [
  {
    icon: Megaphone,
    title: 'Marketing campaigns',
    description:
      'Reach customers instantly with open rates up to 98%. SMS promotions drive action, build engagement, and boost ROI.',
  },
  {
    icon: CalendarCheck,
    title: 'Customer updates',
    description:
      "Keep customers informed with dependable delivery. Cut down on 'Where is my order?' calls and build trust with timely notifications.",
  },
  {
    icon: KeyRound,
    title: 'Identity and verification',
    description:
      'Instantly send one-time passcodes through low-latency routes, preventing drop-offs and blocking fraudulent verification attempts.',
  },
  {
    icon: Headset,
    title: 'Customer service',
    description:
      'Empower agents to follow up or broadcast service alerts with two-way SMS, reducing repetitive calls and improving satisfaction.',
  },
];

const SmsPageContent = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-[190px] pb-20 md:pb-25 lg:pb-28">
        <div className="main-container">
          <div className="grid grid-cols-1 items-start gap-y-10 lg:grid-cols-12 lg:gap-x-10">
            <div className="space-y-5 text-center lg:col-span-6 lg:text-left">
              <RevealAnimation delay={0.1}>
                <p className="text-tagline-2 text-primary-500 font-inter-tight font-semibold tracking-widest uppercase">
                  API for SMS Messaging
                </p>
              </RevealAnimation>
              <div className="space-y-3">
                <TextReveal delay={0.2}>
                  <h1 className="font-bold">
                    Simple, secure
                    <br />
                    SMS API for
                    <br />
                    global reach
                  </h1>
                </TextReveal>
                <TextReveal delay={0.3}>
                  <p className="text-secondary/60 mx-auto max-w-[520px] lg:mx-0">
                    Need a reliable SMS API? With Xepter&apos;s Conversation API, you can easily
                    send secure, reliable, and compliant SMS messages worldwide.
                  </p>
                </TextReveal>
              </div>
              <RevealAnimation delay={0.4} instant>
                <div className="flex flex-col items-center justify-center gap-y-3 md:flex-row md:justify-start md:gap-x-5">
                  <Link href="/contact" className="w-[70%] md:w-auto">
                    <ButtonPrimary
                      className="w-full md:w-auto"
                      textClassName="text-center text-nowrap max-sm:flex-1 max-sm:pr-8!"
                    >
                      Contact sales
                    </ButtonPrimary>
                  </Link>
                  <Link href="/signup" className="w-[70%] md:w-auto">
                    <ButtonSecondary
                      className="w-full outline-0! md:w-auto"
                      textClassName="text-center text-nowrap max-sm:flex-1 max-sm:pr-8!"
                    >
                      Try for free
                    </ButtonSecondary>
                  </Link>
                </div>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.3} direction="left" offset={60} className="lg:col-span-6">
              <div className="relative mx-auto max-w-[560px] overflow-hidden rounded-[20px]">
                <Image
                  src={smsHeroImg}
                  alt="Xepter SMS API request and delivered SMS message preview"
                  className="h-auto w-full"
                  priority
                />
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
      <section className="bg-white pt-20 pb-20 md:pt-25 md:pb-25 lg:pt-28 lg:pb-28">
        <div className="main-container space-y-10 md:space-y-14">
          <div className="space-y-2 md:space-y-3">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>What sets Xepter SMS apart</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2 className="max-w-[820px]">
                The trusted SMS messaging API for every essential workflow
              </h2>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="text-secondary/60 max-w-[650px]">
                Xepter SMS API combines a global carrier network with AI-driven threat prevention
                and managed compliance. You can count on fast, dependable delivery, reduce risk,
                and get worldwide coverage for alerts, codes, and commands.
              </p>
            </TextReveal>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {apartItems.map((item, index) => (
              <RevealAnimation key={item.title} delay={0.1 + index * 0.05}>
                <div className="space-y-4">
                  <item.icon className="text-secondary size-6" />
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
        <section key={section.title} className="pt-20 pb-20 md:pt-25 md:pb-25 lg:pt-28 lg:pb-28">
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
          <div className="space-y-2 md:space-y-3">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Innovative features</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2>
                Everything you need to launch,
                <br />
                manage, and scale SMS messaging
              </h2>
            </TextReveal>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {featureGrid.map((item, index) => (
              <RevealAnimation key={item.label} delay={0.05 + index * 0.03}>
                <div className="space-y-3">
                  <item.icon className="text-secondary size-6" />
                  <div className="space-y-2">
                    <h3 className="text-heading-6 text-secondary">{item.label}</h3>
                    <p className="text-tagline-2 text-secondary/60">{item.description}</p>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Proven use cases */}
      <section className="pb-20 md:pb-25 lg:pb-28">
        <div className="main-container space-y-10 md:space-y-14">
          <div className="mx-auto space-y-2 text-center md:space-y-3">
            <RevealAnimation delay={0.1} className="flex justify-center">
              <BadgePrimary>Proven use cases</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2>
                Engage, secure, and support at scale with a
                <br />
                trusted SMS gateway
              </h2>
            </TextReveal>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((item, index) => (
              <RevealAnimation key={item.title} delay={0.1 + index * 0.05}>
                <div className="shadow-1 h-full space-y-4 rounded-2xl bg-white p-6">
                  <item.icon className="text-secondary size-6" />
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

      <FAQ />
    </>
  );
};

export default SmsPageContent;
