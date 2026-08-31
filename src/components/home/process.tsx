import processCardOneImg from '@/public/images/xepter-process-account-setup.webp';
import processCardTwoOverlay from '@/public/images/xepter-process-10dlc-avatars-overlay.webp';
import processCardThreeOverlay from '@/public/images/xepter-process-connect-chart-overlay.svg';
import processCardFourOverlay from '@/public/images/xepter-process-launch-stats-overlay.svg';
import processCardFourImg from '@/public/images/xepter-process-launch-scale.webp';
import processCardThreeImg from '@/public/images/xepter-process-connect-number.webp';
import processCardTwoImg from '@/public/images/xepter-process-10dlc-registration.webp';
import {
  CardRevealWithProcess,
  CardsWrapper,
  ProcessCard,
  ProcessContent,
  ProcessImg,
  ProcessImgWrapper,
  ProcessStep,
  ProcessTimeline,
} from '@/src/components/animation/card-reveal-with-process';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonPrimary, ButtonWhite } from '@/src/components/shared/ui/button';
import { StaticImageData } from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

type ProcessCardData = {
  id: string;
  image: StaticImageData | string;
  imageAlt: string;
  overlay?: StaticImageData | string;
  overlayAlt?: string;
  eyebrow?: string;
  title: ReactNode;
  description: ReactNode;
  details: { title: string; description: string }[];
  actions?: ReactNode;
};

const processOneActions = (
  <>
    <Link href="/demo" className="inline-block" aria-label="Get started">
      <ButtonPrimary>Get started</ButtonPrimary>
    </Link>
    <Link
      href="/developers"
      className="border-secondary text-secondary hover:bg-secondary/5 text-tagline-1 rounded-full border px-6 py-3 font-medium transition-colors"
    >
      View APIs
    </Link>
  </>
);

const processCards: ProcessCardData[] = [
  {
    id: 'get-started',
    image: processCardOneImg,
    imageAlt: 'Create your Xepter account and add funds',
    eyebrow: 'Get started',
    title: 'Create Your Account & Add Funds',
    description:
      'Get started with Xepter in minutes. Create your account, add funds to your messaging wallet, and configure your business profile.',
    details: [
      {
        title: 'Quick account setup',
        description: 'Create your Xepter account and configure your business information.',
      },
      {
        title: 'Pay as you go',
        description: 'No long-term commitment. Add funds and pay based on your messaging usage.',
      },
    ],
    actions: processOneActions,
  },
  {
    id: '10dlc-compliance',
    image: processCardTwoImg,
    imageAlt: 'Register your brand and 10DLC campaign',
    overlay: processCardTwoOverlay,
    overlayAlt: 'Cluster of customer avatars using Xepter',
    eyebrow: '10DLC compliance',
    title: 'Register Your Brand & 10DLC Campaign',
    description:
      'Tell us about your business and messaging use case. Xepter helps guide you through the required 10DLC registration and campaign submission process.',
    details: [
      {
        title: 'Brand registration',
        description: 'Submit your business information for 10DLC brand registration.',
      },
      {
        title: 'Campaign setup',
        description: 'Provide your messaging use case, sample messages, opt-in process, and campaign details.',
      },
    ],
  },
  {
    id: 'connect',
    image: processCardThreeImg,
    imageAlt: 'Get your number and connect your messaging',
    overlay: processCardThreeOverlay,
    overlayAlt: 'Xepter phone number search interface',
    eyebrow: 'Connect',
    title: 'Get Your Number & Connect Your Messaging',
    description:
      'Choose your messaging number and connect Xepter to the tools your business already uses. Developers can integrate through our APIs and webhooks.',
    details: [
      {
        title: 'US Phone Numbers',
        description: 'Search, purchase, and manage messaging-enabled numbers.',
      },
      {
        title: 'Powerful APIs & Webhooks',
        description: 'Connect Xepter to your application, CRM, website, or existing workflow.',
      },
    ],
  },
  {
    id: 'launch',
    image: processCardFourImg,
    imageAlt: 'Start sending, tracking, and scaling',
    overlay: processCardFourOverlay,
    overlayAlt: 'Xepter delivery and engagement analytics cards',
    eyebrow: 'Launch',
    title: 'Start Sending, Track & Scale',
    description:
      'Launch your messaging campaigns and monitor performance from your Xepter dashboard. Track delivery, failures, clicks, and usage as you grow.',
    details: [
      {
        title: 'Real-time analytics',
        description: 'See how your messages are performing with detailed delivery and engagement insights.',
      },
      {
        title: 'Scale with confidence',
        description: 'Increase your messaging volume and take advantage of volume-based pricing as your business grows.',
      },
    ],
  },
];

const Process = () => {
  return (
    <section className="pt-12 md:pt-16 lg:pt-20">
      <div className="main-container">
        <div className="space-y-10 lg:space-y-18">
          <div className="flex w-auto flex-col items-center justify-center gap-x-18 md:mx-auto md:w-[500px] lg:w-auto lg:flex-row">
            <div className="space-y-5 text-center lg:w-1/2 lg:text-left">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Process</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2>From setup to scale — in 4 simple steps</h2>
              </TextReveal>
            </div>
            <div className="space-y-8 text-center lg:w-1/2 lg:text-left">
              <TextReveal delay={0.3}>
                <p>
                  Follow a guided, step-by-step flow that keeps everything clear and organized from
                  the beginning.
                </p>
              </TextReveal>
              <RevealAnimation delay={0.4} className="inline-block w-full md:w-auto">
                <Link href="/features">
                  <ButtonWhite className="mx-auto w-[80%]! md:w-fit!">View all features</ButtonWhite>
                </Link>
              </RevealAnimation>
            </div>
          </div>

          <RevealAnimation delay={0.5}>
            <CardRevealWithProcess cardCount={processCards.length}>
              <ProcessTimeline className="flex w-full flex-row items-center justify-center md:hidden">
                {processCards.map((card, index) => (
                  <ProcessStep
                    key={card.id}
                    index={index}
                    label={String(index + 1).padStart(2, '0')}
                  />
                ))}
              </ProcessTimeline>

              <CardsWrapper>
                {processCards.map((card, index) => (
                  <ProcessCard key={card.id} index={index}>
                    <ProcessImgWrapper>
                      <ProcessImg
                        index={index}
                        image={card.image}
                        imageAlt={card.imageAlt}
                        overlay={card.overlay}
                        overlayAlt={card.overlayAlt}
                      />
                    </ProcessImgWrapper>
                    <ProcessContent
                      index={index}
                      eyebrow={card.eyebrow}
                      title={card.title}
                      description={card.description}
                      details={card.details}
                      actions={card.actions}
                    />
                  </ProcessCard>
                ))}
              </CardsWrapper>

              <ProcessTimeline className="hidden w-[5%] flex-col items-center justify-center md:flex">
                {processCards.map((card, index) => (
                  <ProcessStep
                    key={card.id}
                    index={index}
                    label={String(index + 1).padStart(2, '0')}
                  />
                ))}
              </ProcessTimeline>
            </CardRevealWithProcess>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Process;
