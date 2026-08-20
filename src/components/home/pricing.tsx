'use client';

import xepterLogo from '@/public/images/logo/xepter-logo-full.png';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { ArrowRightIcon, CheckIcon, GradientCircleIcon } from '@/src/components/shared/icon';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonPrimary } from '@/src/components/shared/ui/button';
import { cn } from '@/src/utils/cn';
import { useGSAP } from '@gsap/react';
import NumberFlow from '@number-flow/react';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';

gsap.registerPlugin(useGSAP);

type PlanId = 'low-volume' | 'mid-volume' | 'high-volume' | 'pay-as-you-go' | 'voice-high-volume';

interface PlanQuotaItem {
  label: string;
  value: number;
}

interface PlanData {
  monthly: number;
  yearly: number;
  setupFee: number;
  description: string;
  benefits: string[];
  quota: PlanQuotaItem[];
}

interface Plan {
  id: PlanId;
  name: string;
  subtitle: string;
}

const pricingPlans: Plan[] = [
  { id: 'pay-as-you-go', name: 'Pay As You Go', subtitle: 'No monthly commitment' },
  { id: 'low-volume', name: 'Low Volume', subtitle: 'For solo teams & small agencies' },
  { id: 'mid-volume', name: 'Mid Volume', subtitle: 'For growing teams' },
  { id: 'high-volume', name: 'High Volume', subtitle: 'For agencies & multi-location teams' },
  { id: 'voice-high-volume', name: 'Voice High Volume', subtitle: 'For voice-heavy teams' },
];

const pricingPlanData: Record<PlanId, PlanData> = {
  'low-volume': {
    monthly: 100,
    yearly: 1200,
    setupFee: 0,
    description: 'This is the low volume plan.',
    benefits: ['Email Support', 'Chat Support'],
    quota: [
      { label: 'SMS Inbound', value: 2000 },
      { label: 'SMS Outbound', value: 15000 },
    ],
  },
  'mid-volume': {
    monthly: 500,
    yearly: 6000,
    setupFee: 0,
    description: 'This is the mid volume plan.',
    benefits: ['Campaign Pages', 'Email Support', 'Chat Support'],
    quota: [
      { label: 'SMS Inbound', value: 4000 },
      { label: 'SMS Outbound', value: 75000 },
    ],
  },
  'high-volume': {
    monthly: 2000,
    yearly: 24000,
    setupFee: 0,
    description: 'This is the high volume plan.',
    benefits: ['Campaign Pages', 'Email Support', 'Chat Support', 'Monthly Analytics Detail Report'],
    quota: [
      { label: 'SMS Inbound', value: 50000 },
      { label: 'SMS Outbound', value: 300000 },
    ],
  },
  'pay-as-you-go': {
    monthly: 0,
    yearly: 0,
    setupFee: 0,
    description: 'Pay as you go plan.',
    benefits: ['Email Support', 'Campaign Pages'],
    quota: [],
  },
  'voice-high-volume': {
    monthly: 3000,
    yearly: 24000,
    setupFee: 0,
    description: 'This is the high volume plan for voice.',
    benefits: ['Campaign Pages', 'Email Support', 'Chat Support', 'Monthly Analytics Detail Report'],
    quota: [
      { label: 'Voice Phone Inbound', value: 300 },
      { label: 'Voice Phone Outbound', value: 1000 },
      { label: 'Voice WebRTC Inbound', value: 300 },
      { label: 'Voice WebRTC Outbound', value: 300 },
    ],
  },
};

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState<PlanId>('pay-as-you-go');
  const [isYearly, setIsYearly] = useState(false);
  const pricingCardRef = useRef<HTMLDivElement>(null);
  const badgeWrapperRef = useRef<HTMLSpanElement>(null);
  const prevPlanRef = useRef<PlanId>('pay-as-you-go');
  const badgeRefs = useRef<Partial<Record<PlanId, HTMLSpanElement>>>({});
  const descriptionsRefs = useRef<Partial<Record<PlanId, HTMLParagraphElement>>>({});
  const currentPlan = pricingPlanData[selectedPlan];
  const price = isYearly ? currentPlan.yearly : currentPlan.monthly;

  useGSAP(
    () => {
      const wrapper = badgeWrapperRef.current;
      const defaultBadge = badgeRefs.current[pricingPlans[0].id];
      if (!wrapper) return;

      pricingPlans.forEach((plan, index) => {
        const badge = badgeRefs.current[plan.id];
        if (!badge) return;
        gsap.set(badge, { opacity: index === 0 ? 1 : 0, y: 0 });
      });

      if (defaultBadge) {
        wrapper.style.width = `${defaultBadge.offsetWidth}px`;
        wrapper.style.height = `${defaultBadge.offsetHeight}px`;
      }
    },
    { scope: pricingCardRef }
  );

  useGSAP(
    () => {
      const prev = prevPlanRef.current;
      const next = selectedPlan;
      if (prev === next) return;

      const fromBadge = badgeRefs.current[prev];
      const toBadge = badgeRefs.current[next];
      const fromDescription = descriptionsRefs.current[prev];
      const toDescription = descriptionsRefs.current[next];

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      if (fromBadge && toBadge) {
        const wrapper = badgeWrapperRef.current;
        const fromWidth = wrapper?.offsetWidth ?? fromBadge.offsetWidth;
        const toWidth = toBadge.offsetWidth;

        tl.set(toBadge, { y: 12, opacity: 0 }, 0);
        tl.to(fromBadge, { y: -12, opacity: 0, duration: 0.22 }, 0);
        tl.to(toBadge, { y: 0, opacity: 1, duration: 0.28 }, 0.12);
        tl.set(fromBadge, { y: 0 }, 0.3);

        if (wrapper) {
          tl.to(
            wrapper,
            { width: toWidth, duration: 0.28, ease: 'power3.out' },
            toWidth > fromWidth ? 0 : 0.12
          );
        }
      }

      if (fromDescription && toDescription) {
        tl.set(toDescription, { y: 12, opacity: 0 }, 0);
        tl.to(fromDescription, { y: -12, opacity: 0, duration: 0.22 }, 0);
        tl.to(toDescription, { y: 0, opacity: 1, duration: 0.28 }, 0.12);
        tl.set(fromDescription, { y: 0 }, 0.3);
      }

      prevPlanRef.current = next;
    },
    { scope: pricingCardRef, dependencies: [selectedPlan] }
  );

  return (
    <section className="pt-20 md:pt-25 lg:pt-39">
      <div className="main-container overflow-hidden">
        <div className="space-y-10 lg:space-y-18">
          <div className="space-y-8">
            <div className="space-y-5 text-center">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Pricing</BadgePrimary>
              </RevealAnimation>

              <div className="space-y-3">
                <TextReveal delay={0.2}>
                  <h2>Simple pricing that scales with you</h2>
                </TextReveal>
                <TextReveal delay={0.3}>
                  <p className="text-background-14/60 mx-auto max-w-[600px]">
                    Upgrade anytime as you grow — from a single SMS number to every channel your
                    team needs.
                  </p>
                </TextReveal>
              </div>
            </div>

            <RevealAnimation delay={0.4}>
              <div className="flex items-center justify-center">
                <label className="inline-flex cursor-pointer items-center">
                  <span className="text-tagline-2 text-secondary me-2.5 font-normal select-none">
                    Monthly
                  </span>
                  <input
                    type="checkbox"
                    checked={isYearly}
                    onChange={(e) => setIsYearly(e.target.checked)}
                    className="peer sr-only"
                    aria-label="Toggle yearly billing"
                  />
                  <div className="bg-secondary peer peer-checked:after:border-buffer after:shadow-16 relative h-6 w-11.5 rounded-full peer-focus:outline-0 after:absolute after:inset-s-[2px] after:top-1/2 after:size-5 after:-translate-y-1/2 after:rounded-full after:bg-brand-red after:transition-all after:content-[''] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full" />
                  <span className="text-tagline-2 text-secondary ms-2.5 font-normal select-none">
                    Yearly
                  </span>
                </label>
              </div>
            </RevealAnimation>
          </div>

          <div className="mx-auto grid max-w-[980px] grid-cols-12 items-start justify-center gap-y-6 md:gap-x-8 lg:gap-x-14">
            <RevealAnimation
              asChild={false}
              delay={0.5}
              direction="left"
              offset={50}
              className="col-span-12 space-y-8 md:col-span-5 md:space-y-14"
            >
              <div className="space-y-5">
                <div className="bg-background-4 space-y-2 rounded-[20px] p-2">
                  {pricingPlans.map((plan) => {
                    const isActive = selectedPlan === plan.id;

                    return (
                      <button
                        key={plan.id}
                        type="button"
                        onClick={() => setSelectedPlan(plan.id)}
                        data-active={isActive ? 'true' : 'false'}
                        className="group flex w-full cursor-pointer items-center justify-between gap-x-6 rounded-xl px-5 py-3 transition-colors hover:bg-white data-[active=true]:bg-white"
                      >
                        <div className="space-y-1">
                          <h3 className="text-tagline-1 text-left">{plan.name}</h3>
                          <p className="text-tagline-3 text-background-14/60">{plan.subtitle}</p>
                        </div>

                        <span
                          className={cn(
                            'bg-secondary flex size-8 shrink-0 items-center justify-center rounded-full transition-all duration-500 ease-in-out',
                            isActive ? 'scale-100' : 'scale-0'
                          )}
                        >
                          <ArrowRightIcon className="size-4 stroke-white" />
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center justify-center gap-x-6">
                  <span className="flex items-center gap-x-1">
                    <GradientCircleIcon />
                    <span className="text-tagline-2 text-secondary font-inter-tight font-normal italic">
                      Free trial
                    </span>
                  </span>
                  <span className="flex items-center gap-x-1">
                    <GradientCircleIcon />
                    <span className="text-tagline-2 text-secondary font-inter-tight font-normal italic">
                      Cancel anytime
                    </span>
                  </span>
                </div>
              </div>

              <figure className="mx-auto flex h-11 w-full max-w-[168px] items-center justify-center">
                <Image
                  src={xepterLogo}
                  alt="Xepter"
                  width={132}
                  height={40}
                  unoptimized
                  className="h-full w-auto object-contain"
                />
              </figure>
            </RevealAnimation>

            <RevealAnimation
              asChild={false}
              delay={0.6}
              direction="right"
              offset={50}
              className="col-span-12 md:col-span-7"
            >
              <div ref={pricingCardRef} className="space-y-14 rounded-xl bg-white px-6 py-8">
                <div className="space-y-8">
                  <span ref={badgeWrapperRef} className="relative block h-8 w-full overflow-hidden">
                    {pricingPlans.map((plan) => (
                      <span
                        key={plan.id}
                        ref={(el) => {
                          badgeRefs.current[plan.id] = el ?? undefined;
                        }}
                        className={cn(
                          'border-stroke-3 text-tagline-2 text-secondary font-inter-tight rounded-full border px-3 py-1 font-normal whitespace-nowrap',
                          'absolute top-0 left-0 h-8 w-fit'
                        )}
                      >
                        {plan.name}
                      </span>
                    ))}
                  </span>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-heading-6">Subscription</h3>
                      <h3 className="text-heading-4 font-medium">
                        $
                        <NumberFlow
                          value={price}
                          format={{
                            useGrouping: true,
                            minimumIntegerDigits: 2,
                            maximumFractionDigits: 0,
                            minimumFractionDigits: 0,
                          }}
                          transformTiming={{ duration: 700, easing: 'ease-out' }}
                          spinTiming={{ duration: 700, easing: 'ease-out' }}
                          opacityTiming={{ duration: 315, easing: 'ease-out' }}
                        />
                        <span className="text-tagline-2 text-secondary/60 font-inter-tight font-normal">
                          {isYearly ? '/year' : '/month'}
                        </span>
                      </h3>
                    </div>
                    <span className="relative grid overflow-hidden">
                      {pricingPlans.map((plan) => (
                        <p
                          key={plan.id}
                          ref={(el) => {
                            descriptionsRefs.current[plan.id] = el ?? undefined;
                          }}
                          className={cn(
                            'col-start-1 row-start-1',
                            plan.id !== pricingPlans[0].id && 'opacity-0'
                          )}
                        >
                          {pricingPlanData[plan.id]?.description}
                        </p>
                      ))}
                    </span>
                    {currentPlan.setupFee > 0 && (
                      <p className="text-tagline-3 text-secondary/60">
                        Setup fee: ${currentPlan.setupFee.toLocaleString()}
                      </p>
                    )}
                  </div>

                  <Link href="/contact">
                    <ButtonPrimary
                      className="w-full"
                      textClassName="text-center flex-1 px-0! pr-8!"
                    >
                      Get started
                    </ButtonPrimary>
                  </Link>
                </div>

                <div className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="text-heading-6">Plan Benefits</h4>
                    <ul className="space-y-5">
                      {currentPlan.benefits.map((item) => (
                        <li key={item} className="flex items-center gap-x-2">
                          <span className="border-stroke-3 flex size-6 shrink-0 items-center justify-center rounded-full border p-1">
                            <CheckIcon className="stroke-secondary size-4" />
                          </span>
                          <span className="text-tagline-1 font-inter-tight text-secondary font-normal">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {currentPlan.quota.length > 0 && (
                    <div className="space-y-4">
                      <h4 className="text-heading-6">Plan Quota</h4>
                      <ul className="space-y-5">
                        {currentPlan.quota.map((item) => (
                          <li key={item.label} className="flex items-center gap-x-2">
                            <span className="border-stroke-3 flex size-6 shrink-0 items-center justify-center rounded-full border p-1">
                              <CheckIcon className="stroke-secondary size-4" />
                            </span>
                            <span className="text-tagline-1 font-inter-tight text-secondary font-normal">
                              {item.label}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
