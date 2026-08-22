'use client';

import RevealAnimation from '@/src/components/animation/reveal-animation';
import {
  CardHeader,
  CarrierFeeModal,
  Footnote,
  MessagingRateCard,
  SectionCard,
  TierList,
  type MessageChannel,
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
import { Phone, Search } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

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
  const [showCarrierFees, setShowCarrierFees] = useState(false);

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-12 items-stretch gap-5">
        <RevealAnimation
          delay={0.3}
          direction="left"
          offset={50}
          className="col-span-12 lg:col-span-5"
        >
          <div>
            <SectionCard className="flex h-full flex-col">
              <div className="border-stroke-1 border-b pb-6">
                <CardHeader
                  icon={Phone}
                  title={panel.numberPricing.title}
                  subtitle={panel.numberPricing.subtitle}
                  iconRounded="rounded-2xl"
                  iconBoxSize="size-14"
                  iconSize="size-7"
                />
              </div>
              {panel.numberPricing.table && (
                <div className="pt-6">
                  <TierList
                    rows={panel.numberPricing.table.rows}
                    unitLabel={panel.numberPricing.unitLabel}
                  />
                </div>
              )}

              <div className="border-stroke-1 mt-6 flex items-center gap-x-4 border-t pt-6">
                <span className="bg-primary-50 text-primary-500 flex size-14 shrink-0 items-center justify-center rounded-xl">
                  <Search className="size-7" />
                </span>
                <span className="flex-1 space-y-0.5">
                  <span className="text-tagline-1 text-secondary block font-bold">
                    {lookupFee.title}
                  </span>
                  <span className="text-tagline-3 text-secondary/70 block">
                    {lookupFee.subtitle}
                  </span>
                </span>
                <span className="shrink-0 text-right">
                  <span className="text-heading-6 text-secondary block font-bold tabular-nums">
                    {lookupFee.value}
                  </span>
                  <span className="text-tagline-3 text-secondary/70">{lookupFee.unit}</span>
                </span>
              </div>
            </SectionCard>
          </div>
        </RevealAnimation>

        <RevealAnimation delay={0.4} direction="right" offset={50} className="col-span-12 lg:col-span-7">
          <div>
            <MessagingRateCard
              title={panel.messagingRates.title}
              subtitle={panel.messagingRates.subtitle}
              outboundTable={panel.messagingRates[channel].outbound}
              inboundTable={panel.messagingRates[channel].inbound}
              channel={channel}
              onChannelChange={setChannel}
              onShowCarrierFees={() => setShowCarrierFees(true)}
            />
          </div>
        </RevealAnimation>
      </div>

      {panel.panelFootnote && <Footnote>{panel.panelFootnote}</Footnote>}

      <CarrierFeeModal
        open={showCarrierFees}
        onClose={() => setShowCarrierFees(false)}
        subtitle={panel.carrierFees.subtitle}
        rows={panel.carrierFees.rows}
      />
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
        <RevealAnimation delay={0.1} direction="up" offset={40}>
          <div>
            <SenderPicker active={activeSender} onSelect={setActiveSender} />
          </div>
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
