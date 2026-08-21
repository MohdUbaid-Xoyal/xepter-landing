'use client';

import RevealAnimation from '@/src/components/animation/reveal-animation';
import {
  CardHeader,
  CarrierFeesGrid,
  Footnote,
  MessagingRateCard,
  SectionCard,
  TierList,
} from '@/src/components/pricing/rate-visuals';
import { ButtonPrimary } from '@/src/components/shared/ui/button';
import {
  comingSoonPanels,
  lookupFee,
  senderPanels,
  senderTypes,
  type ComingSoonPanel,
  type LiveSenderTypeId,
  type SenderPanel,
  type SenderTypeId,
} from '@/src/data/pricing-content';
import { cn } from '@/src/utils/cn';
import { Phone, RadioTower, Search } from 'lucide-react';
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
  <div className="scroll-bar -mx-4 overflow-x-auto px-4 sm:mx-0 sm:overflow-visible sm:px-0">
    <div
      role="tablist"
      aria-label="Sender type"
      className="bg-white shadow-1 mx-auto flex w-fit max-w-full flex-nowrap justify-center gap-1 rounded-full p-1.5"
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
              'text-tagline-2 flex shrink-0 cursor-pointer items-center gap-x-2 rounded-full px-4 py-2 font-medium whitespace-nowrap transition-all duration-300',
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

          <div className="border-stroke-1 flex items-center justify-between gap-x-4 rounded-2xl border p-4">
            <span className="flex items-center gap-x-3">
              <span className="bg-primary-50 text-primary-500 flex size-10 shrink-0 items-center justify-center rounded-xl">
                <Search className="size-4" />
              </span>
              <span className="text-tagline-2 text-secondary font-bold">{lookupFee.title}</span>
            </span>
            <span className="text-right">
              <span className="text-tagline-1 text-secondary block font-bold tabular-nums">
                {lookupFee.value}
              </span>
              <span className="text-tagline-3 text-secondary/50">{lookupFee.unit}</span>
            </span>
          </div>
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
      </div>
    </section>
  );
};

export default PricingRates;
