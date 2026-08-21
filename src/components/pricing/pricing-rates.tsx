'use client';

import RevealAnimation from '@/src/components/animation/reveal-animation';
import {
  CardHeader,
  CarrierFeesGrid,
  Footnote,
  LiveSupportCard,
  LookupFeeCard,
  MessagingRateCard,
  SectionCard,
  TierList,
} from '@/src/components/pricing/rate-visuals';
import { ButtonPrimary, ButtonSecondary } from '@/src/components/shared/ui/button';
import {
  comingSoonPanels,
  liveSupport,
  lookupFee,
  senderPanels,
  senderTypes,
  volumeCta,
  type ComingSoonPanel,
  type LiveSenderTypeId,
  type SenderPanel,
  type SenderTypeId,
} from '@/src/data/pricing-content';
import { cn } from '@/src/utils/cn';
import { Phone, RadioTower } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

type MessageChannel = 'sms' | 'mms';

/** Compact horizontal sender picker. */
const SenderPicker = ({
  active,
  onSelect,
}: {
  active: SenderTypeId;
  onSelect: (id: SenderTypeId) => void;
}) => (
  <div
    role="tablist"
    aria-label="Sender type"
    className="bg-white shadow-1 mx-auto flex w-fit max-w-full flex-wrap justify-center gap-1 rounded-full p-1.5"
  >
    {senderTypes.map((sender) => {
      const isActive = active === sender.id;

      return (
        <button
          key={sender.id}
          type="button"
          role="tab"
          id={`sender-tab-${sender.id}`}
          aria-selected={isActive}
          aria-controls="sender-panel"
          onClick={() => onSelect(sender.id)}
          className={cn(
            'text-tagline-2 flex cursor-pointer items-center gap-x-2 rounded-full px-4 py-2 font-medium transition-all duration-300',
            isActive ? 'bg-secondary text-white' : 'text-secondary hover:bg-background-4'
          )}
        >
          {sender.name}
          {sender.status === 'soon' && (
            <span
              className={cn(
                'rounded-full px-1.5 py-0.5 text-[9px] font-bold tracking-wider uppercase',
                isActive ? 'bg-white/20 text-white' : 'bg-background-4 text-secondary/50'
              )}
            >
              Soon
            </span>
          )}
        </button>
      );
    })}
  </div>
);

/** Every rate for the active sender — nothing hidden behind a disclosure. */
const RateSheet = ({ panel }: { panel: SenderPanel }) => {
  const [channel, setChannel] = useState<MessageChannel>('sms');

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-12 items-stretch gap-5">
        <SectionCard className="col-span-12 flex flex-col gap-y-6 lg:col-span-6">
          <CardHeader
            icon={Phone}
            title={panel.numberPricing.title}
            subtitle={panel.numberPricing.subtitle}
            iconRounded="rounded-2xl"
          />
          {panel.numberPricing.table && (
            <TierList
              rows={panel.numberPricing.table.rows}
              unitLabel={panel.numberPricing.unitLabel}
            />
          )}
        </SectionCard>

        <MessagingRateCard
          title={panel.messagingRates.title}
          subtitle={panel.messagingRates.subtitle}
          table={panel.messagingRates[channel]}
          channel={channel}
          onChannelChange={setChannel}
        />
      </div>

      <SectionCard className="space-y-6">
        <CardHeader
          icon={RadioTower}
          title={panel.carrierFees.title}
          subtitle={panel.carrierFees.subtitle}
          iconRounded="rounded-2xl"
        />
        <CarrierFeesGrid rows={panel.carrierFees.rows} />
      </SectionCard>

      <div className="grid grid-cols-12 items-stretch gap-5">
        <div className="col-span-12 lg:col-span-5">
          <LookupFeeCard
            title={lookupFee.title}
            subtitle={lookupFee.subtitle}
            value={lookupFee.value}
            unit={lookupFee.unit}
          />
        </div>
        <div className="col-span-12 lg:col-span-7">
          <LiveSupportCard
            title={liveSupport.title}
            subtitle={liveSupport.subtitle}
            rows={liveSupport.rows}
          />
        </div>
      </div>

      {panel.panelFootnote && <Footnote>{panel.panelFootnote}</Footnote>}
    </div>
  );
};

const ComingSoonPanelContent = ({ panel }: { panel: ComingSoonPanel }) => (
  <div className="rounded-[20px] bg-white px-6 py-16 text-center md:py-20">
    <span className="text-secondary/50 bg-background-4 inline-block rounded-full px-3 py-1 text-[10px] font-bold tracking-wider uppercase">
      {panel.badge}
    </span>
    <h3 className="text-heading-5 text-secondary mt-4">{panel.title}</h3>
    <p className="mx-auto mt-3 max-w-[460px]">{panel.description}</p>
    <Link href={panel.ctaHref} className="mt-8 inline-block">
      <ButtonPrimary textClassName="text-center text-nowrap">{panel.ctaLabel}</ButtonPrimary>
    </Link>
  </div>
);

const PricingRates = () => {
  const [activeSender, setActiveSender] = useState<SenderTypeId>('local');
  const comingSoon = comingSoonPanels[activeSender as keyof typeof comingSoonPanels];
  const livePanel = comingSoon ? null : senderPanels[activeSender as LiveSenderTypeId];

  return (
    <section id="rates" className="scroll-mt-32 pb-20 md:pb-25 lg:pb-28">
      <div className="main-container space-y-8 md:space-y-10">
        <RevealAnimation delay={0.1}>
          <SenderPicker active={activeSender} onSelect={setActiveSender} />
        </RevealAnimation>

        <div
          role="tabpanel"
          id="sender-panel"
          aria-labelledby={`sender-tab-${activeSender}`}
          className="space-y-4 md:space-y-5"
        >
          {livePanel ? (
            <RevealAnimation delay={0.2}>
              <RateSheet key={activeSender} panel={livePanel} />
            </RevealAnimation>
          ) : (
            comingSoon && (
              <RevealAnimation delay={0.2}>
                <ComingSoonPanelContent key={activeSender} panel={comingSoon} />
              </RevealAnimation>
            )
          )}
        </div>

        <RevealAnimation delay={0.2}>
          <div className="bg-secondary flex flex-col items-start justify-between gap-8 rounded-[20px] px-8 py-14 md:px-12 md:py-16 lg:flex-row lg:items-center">
            <div className="space-y-2">
              <h3 className="text-heading-5 text-white">{volumeCta.title}</h3>
              <p className="max-w-[480px] text-white/60">{volumeCta.description}</p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto lg:shrink-0">
              <Link href={volumeCta.primary.href} className="w-full sm:w-auto">
                <ButtonSecondary
                  className="w-full outline-0! sm:w-auto"
                  textClassName="text-center text-nowrap max-sm:flex-1 max-sm:pr-8!"
                >
                  {volumeCta.primary.label}
                </ButtonSecondary>
              </Link>
              <Link href={volumeCta.secondary.href} className="w-full sm:w-auto">
                <ButtonPrimary
                  className="w-full border border-white/30 bg-transparent sm:w-auto"
                  textClassName="text-center text-nowrap max-sm:flex-1 max-sm:pr-8!"
                >
                  {volumeCta.secondary.label}
                </ButtonPrimary>
              </Link>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default PricingRates;
