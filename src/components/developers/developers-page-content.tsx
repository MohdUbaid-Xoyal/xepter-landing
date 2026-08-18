import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import {
  DeveloperIcon,
  DocsIcon,
  FeatureIcon,
  IntegrationIcon,
  SecurityIcon,
  SmsIcon,
  TeamIcon,
  VoiceIcon,
  WhatsAppIcon,
} from '@/src/components/shared/icon/menu-icon';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonPrimary, ButtonSecondary } from '@/src/components/shared/ui/button';
import { DOCS_URL } from '@/src/utils/constants';
import Link from 'next/link';

const apiModules = [
  {
    icon: SmsIcon,
    title: 'Messaging (SMS & MMS)',
    description: 'Send and receive text and media messages, manage templates, and track delivery.',
  },
  {
    icon: VoiceIcon,
    title: 'Voice',
    description: 'Place and control calls, manage conferences, and pull call activity.',
  },
  {
    icon: WhatsAppIcon,
    title: 'WhatsApp',
    description: 'Send template messages and hold two-way WhatsApp conversations.',
  },
  {
    icon: FeatureIcon,
    title: 'Phone numbers',
    description: 'Search, purchase, and port local and toll-free numbers programmatically.',
  },
  {
    icon: IntegrationIcon,
    title: 'Webhooks',
    description: 'Subscribe to delivery, reply, and call events as they happen.',
  },
  {
    icon: SecurityIcon,
    title: 'Entities',
    description: 'Manage the brands and campaigns behind your compliant messaging traffic.',
  },
  {
    icon: DocsIcon,
    title: 'Link shortener',
    description: 'Generate and track trackable short links for use inside your messages.',
  },
  {
    icon: TeamIcon,
    title: 'Team & roles',
    description: 'Manage organizations, teams, and permissions across your account.',
  },
];

const DevelopersPageContent = () => {
  return (
    <>
      <section className="relative overflow-hidden pt-[190px] pb-20 md:pb-25 lg:pb-28">
        <div className="main-container">
          <div className="mx-auto max-w-[720px] space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Developers</BadgePrimary>
            </RevealAnimation>
            <div className="space-y-3">
              <TextReveal delay={0.2}>
                <h1 className="mx-auto max-w-[650px]">
                  Build on Xepter&apos;s messaging and voice API
                </h1>
              </TextReveal>
              <TextReveal delay={0.3}>
                <p className="text-background-14/60 mx-auto max-w-[560px]">
                  REST APIs and webhooks for SMS, MMS, voice, and WhatsApp — the same building
                  blocks that power the Xepter app, available for you to build on directly.
                </p>
              </TextReveal>
            </div>
            <RevealAnimation delay={0.4} instant>
              <div className="flex flex-col items-center justify-center gap-y-3 md:flex-row md:gap-x-5">
                <a href={DOCS_URL} target="_blank" rel="noopener noreferrer" className="w-[70%] md:w-auto">
                  <ButtonPrimary
                    className="w-full md:w-auto"
                    textClassName="text-center text-nowrap max-sm:flex-1 max-sm:pr-8!"
                  >
                    View API documentation
                  </ButtonPrimary>
                </a>
                <Link href="/contact" className="w-[70%] md:w-auto">
                  <ButtonSecondary
                    className="w-full outline-0! md:w-auto"
                    textClassName="text-center text-nowrap max-sm:flex-1 max-sm:pr-8!"
                  >
                    Talk to sales
                  </ButtonSecondary>
                </Link>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-25 lg:pb-28">
        <div className="main-container space-y-10 md:space-y-14">
          <div className="mx-auto max-w-[650px] space-y-2 text-center md:space-y-3">
            <TextReveal delay={0.1}>
              <h2>One API, every channel</h2>
            </TextReveal>
            <TextReveal delay={0.2}>
              <p className="text-secondary/60">
                Everything in the Xepter app is available through the API — build your own
                integration, or extend what&apos;s already there.
              </p>
            </TextReveal>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {apiModules.map((item, index) => (
              <RevealAnimation key={item.title} delay={0.1 + index * 0.05}>
                <div className="border-stroke-1 h-full space-y-4 rounded-2xl border bg-white p-8">
                  <div className="border-stroke-1 flex size-11 items-center justify-center rounded-xl border">
                    <item.icon />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-heading-6 text-secondary">{item.title}</h3>
                    <p className="text-tagline-2 text-secondary/60">{item.description}</p>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>

          <RevealAnimation delay={0.2}>
            <div className="border-stroke-1 flex flex-col items-center justify-between gap-6 rounded-2xl border bg-white p-8 text-center md:flex-row md:text-left">
              <div className="flex items-center gap-4">
                <div className="border-stroke-1 flex size-11 shrink-0 items-center justify-center rounded-xl border">
                  <DeveloperIcon />
                </div>
                <div>
                  <h3 className="text-heading-6 text-secondary">Full API reference</h3>
                  <p className="text-tagline-2 text-secondary/60">
                    Endpoints, request/response examples, and authentication details for every
                    module.
                  </p>
                </div>
              </div>
              <a href={DOCS_URL} target="_blank" rel="noopener noreferrer" className="shrink-0">
                <ButtonPrimary textClassName="text-center text-nowrap max-sm:flex-1 max-sm:pr-8!">
                  Open documentation
                </ButtonPrimary>
              </a>
            </div>
          </RevealAnimation>
        </div>
      </section>
    </>
  );
};

export default DevelopersPageContent;
