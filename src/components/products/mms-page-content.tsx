import processCardFourImg from '@/public/images/ns-img-16.webp';
import processCardThreeImg from '@/public/images/ns-img-17.webp';
import processCardTwoImg from '@/public/images/ns-img-18.webp';
import CounterNumberOnScroll from '@/src/components/animation/counter-number-on-scroll';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import FAQ from '@/src/components/home/faq';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonPrimary, ButtonSecondary } from '@/src/components/shared/ui/button';
import {
  Car,
  Code2,
  Gamepad2,
  Globe,
  GraduationCap,
  HeartPulse,
  Home as HomeIcon,
  CircleCheck as IconCheck,
  Image as ImageIcon,
  Landmark,
  Layers,
  Plane,
  Repeat,
  Send,
  Shirt,
  ShoppingBag,
  Target,
  Ticket,
  TrendingUp,
  UtensilsCrossed,
  Wifi,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';

const jsonLines = [
  'POST https://api.xepter.com/v1/messages',
  'Content-Type: application/json',
  '',
  '{',
  '  "from": "+1XXXXXXXXXX",',
  '  "to": "+1XXXXXXXXXX",',
  '  "text": "Here\'s your receipt!",',
  '  "media_url": "https://cdn.xepter.com/receipt.jpg"',
  '}',
];

// Splits a code line on quoted strings so they can be highlighted separately from the rest of the line.
const renderCodeLine = (line: string) =>
  line.split(/("(?:[^"\\]|\\.)*")/g).map((part, i) =>
    part.startsWith('"') ? (
      <span key={i} className="text-[#f78f1e]">
        {part}
      </span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );

const trustStats = [
  { value: 15, suffix: '%', label: 'Higher Engagement' },
  { value: 20, suffix: '%', label: 'More Opt-Ins' },
  { value: 99, suffix: '%', label: 'Delivery Rate' },
];

const whySendItems = [
  {
    icon: TrendingUp,
    title: 'Higher engagement',
    description:
      'Rich media messages can get up to 15% higher engagement and are 43% more effective than plain text messages.',
  },
  {
    icon: Target,
    title: 'More conversions',
    description:
      'Visual and audio content can lift click-through rates by up to 15% and boost campaign opt-ins by up to 20%.',
  },
  {
    icon: Zap,
    title: 'Fast integration',
    description:
      'Set up MMS quickly using JSON, MM7, or Conversation API, with built-in transcoding and SMS fallback.',
  },
];

const alternatingSections = [
  {
    eyebrow: 'More engagement',
    title: 'Grab attention with rich, personalized messages',
    description:
      'Stand out by combining images, GIFs, audio, video, and up to 5,000 characters of text all in one message. MMS consistently outperforms SMS for engagement.',
    bullets: [
      'Up to 15% higher engagement than SMS',
      '43% more successful than plain text messages',
      'Branded visuals strengthen recognition and response',
    ],
    image: processCardTwoImg,
    imageAlt: 'Sending a rich media MMS message',
    imageSide: 'left' as const,
  },
  {
    eyebrow: 'Boost sales & ROI',
    title: 'Turn engagement into real results',
    description:
      'More engaging messages drive more clicks, opt-ins, and sales. MMS campaigns powered by a programmable MMS API see up to 15% higher click-through rates and up to 20% more opt-ins, boosting brand loyalty and reducing churn.',
    bullets: [
      'Visual content lifts conversions',
      'Loyal customers increase lifetime value',
      'Demonstrated ROI for messaging investments',
    ],
    image: processCardThreeImg,
    imageAlt: 'Reviewing MMS campaign results',
    imageSide: 'right' as const,
  },
  {
    eyebrow: 'Easy, reliable integration',
    title: 'Add rich media messaging without the hassle',
    description:
      'Xepter MMS API integrates with your existing systems using JSON, MM7, or Conversation API. With transcoding, SMS fallback, and 24/7 support, every message gets delivered reliably.',
    bullets: [
      'Developer-friendly APIs and fast delivery',
      'Automatic media adaptation for all devices',
      'Direct carrier connections and compliance',
    ],
    image: processCardFourImg,
    imageAlt: 'Reviewing MMS API integration',
    imageSide: 'left' as const,
  },
];

const useCaseCategories = [
  {
    icon: ShoppingBag,
    label: 'Retail & E-commerce',
    description:
      'Share rich promotional campaigns with product images, videos, and discount codes to boost customer engagement and conversions.',
  },
  {
    icon: Plane,
    label: 'Travel & Hospitality',
    description:
      'Send multimedia boarding passes, itineraries, and travel alerts to keep travelers informed and organized.',
  },
  {
    icon: Landmark,
    label: 'Banking & Finance',
    description:
      'Deliver fraud alerts with branded visuals, transaction confirmations, and service updates so customers get secure and timely financial information.',
  },
  {
    icon: HeartPulse,
    label: 'Healthcare',
    description:
      'Send appointment reminders, health tips, and visual instructions to improve patient communication and care.',
  },
  {
    icon: Ticket,
    label: 'Events & Entertainment',
    description:
      'Create buzz with invitations, digital tickets, and preview trailers that excite your audience and make access easy.',
  },
  {
    icon: UtensilsCrossed,
    label: 'Food & Beverage',
    description:
      'Deliver mouthwatering visuals with menu promotions, coupons, and seasonal offers that inspire purchases and repeat visits.',
  },
  {
    icon: HomeIcon,
    label: 'Real Estate',
    description:
      'Showcase listings, virtual tours, and agent contact details to help customers find their next home and connect with realtors.',
  },
  {
    icon: Car,
    label: 'Automotive',
    description:
      'Promote new models, send service reminders, and deliver dealership promotions to keep customers updated and drive showroom visits.',
  },
  {
    icon: GraduationCap,
    label: 'Education & EdTech',
    description:
      'Simplify communication with enrollment confirmations, event invites, and course materials for students and educational communities.',
  },
  {
    icon: Wifi,
    label: 'Utilities & Telecom',
    description:
      'Send bill reminders, outage alerts, and upgrade notifications to help customers manage their services and stay informed.',
  },
  {
    icon: Shirt,
    label: 'Fashion & Beauty',
    description:
      'Show off new collections, tutorials, and influencer campaigns that will inspire customers and highlight trends and styles.',
  },
  {
    icon: Gamepad2,
    label: 'Gaming & Apps',
    description:
      'Promote new features, in-game events, and campaigns that encourage active participation and enhance the gaming experience.',
  },
];

const mmsFeatures = [
  {
    icon: ImageIcon,
    title: 'Two-Way Messaging',
    description:
      'Have real conversations with customers through rich-media messaging that supports feedback, questions, and interactive engagement.',
  },
  {
    icon: Layers,
    title: 'Expanded Media & Long-Form Content',
    description:
      'Send images, GIFs, audio, video, PDFs, calendar invites, and vCards — and break free from SMS limits with detailed messages up to 5,000 characters, all in one seamless MMS.',
  },
  {
    icon: Repeat,
    title: 'Intelligent Delivery & SMS Fallback',
    description:
      "Guarantee reliable message delivery with automatic SMS fallback and smart media links when MMS isn't supported.",
  },
  {
    icon: Send,
    title: 'Bulk Campaign Efficiency',
    description: 'Preload media and use optimized JSON APIs to send large-scale campaigns quickly and easily.',
  },
  {
    icon: Code2,
    title: 'Developer-Friendly APIs',
    description:
      'Integrate seamlessly with JSON API, MM7, and Conversation API for flexible, scalable omnichannel messaging.',
  },
  {
    icon: Globe,
    title: 'Global Carrier Reach & Compliance',
    description:
      'Connect directly with carriers in the US, Canada, and Australia with built-in content moderation and managed delivery for reliable, compliant global outreach.',
  },
];

const MmsPageContent = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-[190px] pb-20 md:pb-25 lg:pb-28">
        <div className="main-container">
          <div className="grid grid-cols-1 items-start gap-y-10 lg:grid-cols-12 lg:gap-x-10">
            <div className="space-y-5 text-center lg:col-span-7 lg:text-left">
              <RevealAnimation delay={0.1}>
                <p className="text-tagline-2 text-primary-500 font-inter-tight font-semibold tracking-widest uppercase">
                  API for MMS Messaging
                </p>
              </RevealAnimation>
              <div className="space-y-3">
                <TextReveal delay={0.2}>
                  <h1 className="font-bold">
                    Bring conversations
                    <br />
                    to life with an
                    <br />
                    API for MMS
                  </h1>
                </TextReveal>
                <TextReveal delay={0.3}>
                  <p className="text-secondary/60 mx-auto max-w-[520px] lg:mx-0">
                    Send engaging messages that go beyond plain text. With Xepter&apos;s API for
                    MMS, you can easily share images, videos, audio, and long-form messages.
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

            <RevealAnimation delay={0.3} direction="left" offset={60} className="lg:col-span-5">
              <div className="relative mx-auto max-w-[440px] pb-20 sm:pb-24">
                <div
                  aria-hidden="true"
                  className="bg-primary-100 absolute -inset-x-12 -top-6 -bottom-2 -z-10 rounded-2xl"
                />
                <div className="shadow-1 bg-secondary rounded-2xl p-5 md:p-6">
                  <div className="mb-4 flex gap-1.5">
                    <span className="size-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="size-2.5 rounded-full bg-[#febc2e]" />
                    <span className="size-2.5 rounded-full bg-[#28c840]" />
                  </div>
                  <pre className="text-tagline-3 overflow-x-auto font-mono leading-relaxed whitespace-pre text-white/80">
                    {jsonLines.map((line, i) => (
                      <div key={i} className="flex gap-3">
                        <span className="text-white/30 select-none">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span>{renderCodeLine(line)}</span>
                      </div>
                    ))}
                  </pre>
                </div>

                <div className="shadow-1 border-primary-500 absolute -right-4 -bottom-10 w-[240px] rounded-[24px] border-4 bg-white p-4 sm:-right-8 sm:w-[260px]">
                  <div className="bg-background-13 flex aspect-video items-center justify-center rounded-xl">
                    <ImageIcon className="text-secondary/40 size-8" />
                  </div>
                  <p className="text-secondary/80 text-tagline-3 mt-3">
                    Here&apos;s your receipt! 🧾
                  </p>
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

      {/* Why send MMS via API */}
      <section className="bg-white pt-20 pb-20 md:pt-25 md:pb-25 lg:pt-28 lg:pb-28">
        <div className="main-container space-y-10 md:space-y-14">
          <div className="space-y-2 md:space-y-3">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Why send MMS via API</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2 className="max-w-[700px]">Turn simple texts into rich customer experiences</h2>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="text-secondary/60 max-w-[650px]">
                Xepter MMS API helps you move past basic SMS by delivering multimedia content like
                images, video, audio, and long text securely and reliably. Businesses using a
                programmable MMS API see higher click rates, more opt-ins, and stronger loyalty.
              </p>
            </TextReveal>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {whySendItems.map((item, index) => (
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
                className={`lg:col-span-6 ${section.imageSide === 'right' ? 'lg:order-2' : ''}`}
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

      {/* Where MMS API makes a difference */}
      <section className="pt-20 pb-20 md:pt-25 md:pb-25 lg:pt-28 lg:pb-28">
        <div className="main-container space-y-10 md:space-y-14">
          <div className="mx-auto space-y-2 text-center md:space-y-3">
            <RevealAnimation delay={0.1} className="flex justify-center">
              <BadgePrimary>MMS API in action</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2>Where MMS API makes a difference</h2>
            </TextReveal>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {useCaseCategories.map((item, index) => (
              <RevealAnimation key={item.label} delay={0.05 + index * 0.03}>
                <div className="shadow-1 flex h-full min-h-[260px] flex-col space-y-4 rounded-2xl bg-white p-8">
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

      {/* What you get with MMS API */}
      <section className="bg-white pt-20 pb-20 md:pt-25 md:pb-25 lg:pt-28 lg:pb-28">
        <div className="main-container space-y-10 md:space-y-14">
          <div className="space-y-2 md:space-y-3">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>MMS API features</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2>What you get with MMS API</h2>
            </TextReveal>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {mmsFeatures.map((item, index) => (
              <RevealAnimation key={item.title} delay={0.1 + index * 0.05}>
                <div className="space-y-3">
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

export default MmsPageContent;
