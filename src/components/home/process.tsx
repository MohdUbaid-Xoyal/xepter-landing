import processCardOneImg from '@/public/images/SI-App-Messaging-Build-Layer-homepage.webp';
import processCardTwoOverlay from '@/public/images/ns-img-13.png';
import processCardThreeOverlay from '@/public/images/ns-img-14.svg';
import processCardFourOverlay from '@/public/images/ns-img-15.svg';
import processCardFourImg from '@/public/images/ns-img-16.jpg';
import processCardThreeImg from '@/public/images/ns-img-17.jpg';
import processCardTwoImg from '@/public/images/ns-img-18.jpg';
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
import { ButtonWhite } from '@/src/components/shared/ui/button';
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
    <Link
      href="/contact"
      className="bg-secondary hover:bg-primary-600 text-tagline-1 rounded-full px-6 py-3 font-medium text-white transition-colors"
    >
      Talk to an expert
    </Link>
    <Link
      href="/documentation"
      className="border-secondary text-secondary hover:bg-secondary/5 text-tagline-1 rounded-full border px-6 py-3 font-medium transition-colors"
    >
      View APIs
    </Link>
  </>
);

const processCards: ProcessCardData[] = [
  {
    id: 'apis',
    image: processCardOneImg,
    imageAlt: 'Messaging, email, and voice APIs',
    eyebrow: 'APIs',
    title: (
      <>
        Messaging, email, and voice
        <br />
        APIs to help developers build
        <br />
        better products
      </>
    ),
    description: (
      <>
        Start small or scale globally—our messaging, email, and
        <br />
        voice APIs provide the secure, reliable foundation you
        <br />
        need to connect with every handset worldwide.
      </>
    ),
    details: [],
    actions: processOneActions,
  },
  {
    id: 'build-flows',
    image: processCardTwoImg,
    imageAlt: 'process-card-2',
    overlay: processCardTwoOverlay,
    overlayAlt: 'process-card-2-img',
    title: 'Build flows',
    description:
      'Combine your connected apps into clear, repeatable automation in a few simple steps.',
    details: [
      {
        title: 'Drag And Drop Builder',
        description: 'Arrange triggers and actions visually with zero coding effort.',
      },
      {
        title: 'Reusable Templates',
        description: 'Start from prebuilt flows and customize them in minutes.',
      },
    ],
  },
  {
    id: 'test-optimize',
    image: processCardThreeImg,
    imageAlt: 'process-card-3',
    overlay: processCardThreeOverlay,
    overlayAlt: 'process-card-3-img',
    title: 'Test and optimize',
    description:
      'Validate every step, monitor results, and improve your workflow performance over time.',
    details: [
      {
        title: 'Live Status Tracking',
        description: 'See exactly how each run performs and catch issues instantly.',
      },
      {
        title: 'Smart Insights',
        description: 'Use actionable analytics to refine every stage of your flow.',
      },
    ],
  },
  {
    id: 'scale',
    image: processCardFourImg,
    imageAlt: 'process-card-4',
    overlay: processCardFourOverlay,
    overlayAlt: 'process-card-4-img',
    title: 'Scale with confidence',
    description:
      'Launch automation across your team while keeping speed, reliability, and security under control.',
    details: [
      {
        title: 'Team Collaboration',
        description: 'Share workflows and permissions with clear ownership.',
      },
      {
        title: 'Enterprise Ready',
        description: 'Keep every process compliant and secure as you grow.',
      },
    ],
  },
];

const Process = () => {
  return (
    <section className="pt-20 md:pt-25 lg:pt-39">
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
                <Link href="/process">
                  <ButtonWhite className="mx-auto w-[80%]! md:w-fit!">View all process</ButtonWhite>
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
