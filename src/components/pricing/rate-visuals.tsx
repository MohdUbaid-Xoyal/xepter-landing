'use client';

import type { CarrierFeeGroupRow, RateRow, RateTable } from '@/src/data/pricing-content';
import { cn } from '@/src/utils/cn';
import AttLogo from '@icons-pack/react-simple-icons/icons/SiAtandt';
import TMobileLogo from '@icons-pack/react-simple-icons/icons/SiDeutschetelekom';
import VerizonLogo from '@icons-pack/react-simple-icons/icons/SiVerizon';
import {
  ArrowDown,
  ChevronDown,
  FileText,
  Info,
  MessageSquareText,
  Radio,
  RadioTower,
  Send,
  User,
  Users,
  UsersRound,
  X,
} from 'lucide-react';
import { useLenis } from 'lenis/react';
import { useEffect, useState, type ComponentType, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

export const SectionCard = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => (
  <div className={cn('shadow-1 rounded-[20px] bg-white p-6 md:p-8', className)}>{children}</div>
);

export const CardHeader = ({
  icon: Icon,
  title,
  subtitle,
  action,
  tint = 'blue',
  iconRounded = 'rounded-full',
  iconBoxSize = 'size-10',
  iconSize = 'size-5',
}: {
  icon: ComponentType<{ className?: string }>;
  title: string;
  subtitle?: string;
  action?: ReactNode;
  tint?: 'blue' | 'red';
  iconRounded?: string;
  iconBoxSize?: string;
  iconSize?: string;
}) => (
  <div className="flex flex-wrap items-start justify-between gap-4">
    <div className="flex items-start gap-x-3">
      <span
        className={cn(
          'flex shrink-0 items-center justify-center',
          iconBoxSize,
          iconRounded,
          tint === 'blue' ? 'bg-primary-50 text-primary-500' : 'bg-brand-red/10 text-brand-red'
        )}
      >
        <Icon className={iconSize} />
      </span>
      <div>
        <h3 className="text-heading-6 text-secondary font-bold">{title}</h3>
        {subtitle && <p className="text-tagline-2 text-secondary/70 mt-1">{subtitle}</p>}
      </div>
    </div>
    {action}
  </div>
);

export const Footnote = ({ children }: { children: ReactNode }) => (
  <p className="text-tagline-3 text-secondary/50 flex items-start gap-x-2">
    <Info className="mt-0.5 size-3.5 shrink-0" />
    <span>{children}</span>
  </p>
);

const tierIcons = [User, Users, UsersRound];

const tierPalette = [
  { icon: 'bg-brand-orange/15 text-brand-orange' },
  { icon: 'bg-primary-100 text-primary-600' },
  { icon: 'bg-emerald-100 text-emerald-600' },
];

/** Stack of tiers, each its own rounded box — the best tier called out with a green tint and inline badge. */
export const TierList = ({ rows, unitLabel }: { rows: RateRow[]; unitLabel?: string }) => (
  <div className="space-y-3">
    {rows.map((row, index) => {
      const Icon = tierIcons[Math.min(index, tierIcons.length - 1)];
      const palette = tierPalette[Math.min(index, tierPalette.length - 1)];

      return (
        <div
          key={row.label}
          className={cn(
            'flex items-center gap-x-4 rounded-2xl p-4',
            row.best ? 'bg-emerald-50' : 'bg-background-4'
          )}
        >
          <span
            className={cn(
              'flex size-10 shrink-0 items-center justify-center rounded-xl',
              palette.icon
            )}
          >
            <Icon className="size-4" />
          </span>
          <span className="flex-1 space-y-0.5">
            <span className="flex flex-wrap items-center gap-x-2">
              <span className="text-tagline-2 text-secondary font-bold">{row.label}</span>
              {row.best && (
                <span className="inline-block rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold tracking-wider text-emerald-600 uppercase">
                  Best rate
                </span>
              )}
            </span>
            {unitLabel && <span className="text-tagline-3 text-secondary/70 block">{unitLabel}</span>}
          </span>
          <span
            className={cn(
              'text-heading-6 shrink-0 text-right font-bold tabular-nums',
              row.best ? 'text-emerald-600' : 'text-secondary'
            )}
          >
            {row.value}
          </span>
        </div>
      );
    })}
  </div>
);

const parseAmount = (value: string) => parseFloat(value.replace(/[^0-9.]/g, ''));

export type MessageChannel = 'sms' | 'mms';

const DarkPillToggle = <T extends string>({
  value,
  options,
  onChange,
}: {
  value: T;
  options: readonly T[];
  onChange: (next: T) => void;
}) => (
  <div className="inline-flex shrink-0 rounded-full bg-white/10 p-1">
    {options.map((option) => {
      const isActive = value === option;
      return (
        <button
          key={option}
          type="button"
          aria-pressed={isActive}
          onClick={() => onChange(option)}
          className={cn(
            'text-tagline-3 cursor-pointer rounded-full px-4 py-1.5 font-semibold uppercase transition-all duration-300',
            isActive ? 'text-secondary bg-white' : 'text-white/60 hover:text-white'
          )}
        >
          {option}
        </button>
      );
    })}
  </div>
);

/** Same idea as DarkPillToggle, restyled for a white background — used inside the carrier fee modal. */
const LightPillToggle = <T extends string>({
  value,
  options,
  onChange,
}: {
  value: T;
  options: readonly T[];
  onChange: (next: T) => void;
}) => (
  <div className="inline-flex shrink-0 gap-2">
    {options.map((option) => {
      const isActive = value === option;
      return (
        <button
          key={option}
          type="button"
          aria-pressed={isActive}
          onClick={() => onChange(option)}
          className={cn(
            'text-tagline-3 cursor-pointer rounded-full px-5 py-2 font-semibold uppercase transition-all duration-300',
            isActive
              ? 'bg-secondary text-white'
              : 'border-stroke-1 text-secondary/70 hover:bg-background-4 border bg-white'
          )}
        >
          {option}
        </button>
      );
    })}
  </div>
);

/** One direction's tiers inside the messaging rate card — label, thin bar, value, all in one compact column. */
const RateColumn = ({
  icon: Icon,
  label,
  table,
}: {
  icon: ComponentType<{ className?: string }>;
  label: string;
  table: RateTable;
}) => {
  const amounts = table.rows.map((row) => parseAmount(row.value));
  const max = Math.max(...amounts, 0.0001);

  return (
    <div>
      <div className="flex items-center gap-x-2.5 pb-9">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
          <Icon className="size-3.5" />
        </span>
        <div>
          <p className="text-tagline-2 font-bold text-white">{label}</p>
          <p className="text-tagline-3 text-white/50">Per segment</p>
        </div>
      </div>

      <div className="space-y-3">
        {table.rows.map((row, index) => (
          <div key={row.label} className="space-y-1.5">
            <div className="flex items-center justify-between gap-x-2">
              <span className="text-tagline-2 font-medium text-white/70">{row.label}</span>
              <span className="flex shrink-0 items-center gap-x-1.5">
                <span
                  className={cn(
                    'text-tagline-1 font-bold tabular-nums',
                    row.best ? 'text-emerald-400' : 'text-white'
                  )}
                >
                  {row.value}
                </span>
                {row.best && (
                  <span className="shrink-0 rounded-full bg-emerald-400/20 px-1.5 py-0.5 text-[10px] font-bold tracking-wider text-emerald-300 uppercase">
                    Best
                  </span>
                )}
              </span>
            </div>
            <span className="relative block h-1.5 overflow-hidden rounded-full bg-white/10">
              <span
                className={cn(
                  'absolute inset-y-0 left-0 rounded-full',
                  row.best ? 'to-primary-400 bg-gradient-to-r from-emerald-400' : 'bg-white/30'
                )}
                style={{ width: `${(amounts[index] / max) * 100}%` }}
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * Messaging rates on a dark accent card — Outbound and Inbound shown side by side,
 * with bar length derived from the actual rate value so it isn't decorative filler.
 */
export const MessagingRateCard = ({
  title,
  subtitle,
  outboundTable,
  inboundTable,
  channel,
  onChannelChange,
  onShowCarrierFees,
}: {
  title: string;
  subtitle: string;
  outboundTable: RateTable;
  inboundTable: RateTable;
  channel: MessageChannel;
  onChannelChange: (next: MessageChannel) => void;
  onShowCarrierFees: () => void;
}) => (
  <div className="from-secondary col-span-12 flex h-full flex-col gap-y-6 rounded-[20px] bg-gradient-to-br to-[#123a63] p-6 md:p-8 lg:col-span-7">
    <div className="flex flex-wrap items-start justify-between gap-4">
      <div className="flex items-start gap-x-3">
        <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
          <MessageSquareText className="size-7" />
        </span>
        <div>
          <h3 className="text-heading-6 font-bold text-white">{title}</h3>
          <p className="text-tagline-2 mt-1 text-white/70">{subtitle}</p>
        </div>
      </div>
      <DarkPillToggle value={channel} options={['sms', 'mms'] as const} onChange={onChannelChange} />
    </div>

    <div className="grid flex-1 grid-cols-1 items-stretch gap-y-6 sm:grid-cols-2 sm:divide-x sm:divide-white/10">
      <div className="h-full sm:pr-6">
        <RateColumn icon={Send} label="Outbound" table={outboundTable} />
      </div>
      <div className="h-full sm:pl-6">
        <RateColumn icon={ArrowDown} label="Inbound" table={inboundTable} />
      </div>
    </div>

    <button
      type="button"
      onClick={onShowCarrierFees}
      className="text-tagline-3 mt-auto flex w-fit shrink-0 cursor-pointer items-center gap-x-1.5 self-start rounded-full bg-white/10 px-5 py-3 font-semibold text-white transition-colors hover:bg-white/15"
    >
      View carrier pricing
      <ChevronDown className="size-3.5" />
    </button>

    {outboundTable.footnote && (
      <p className="text-tagline-3 flex items-start gap-x-2 text-white/65">
        <Info className="mt-0.5 size-3.5 shrink-0" />
        <span>{outboundTable.footnote}</span>
      </p>
    )}
  </div>
);

/** Real carrier wordmarks (simple-icons), each rendered in its own official brand color. */
const carrierLogos: Record<string, { Logo: typeof AttLogo; title: string; hex: string }> = {
  'AT&T': { Logo: AttLogo, title: 'AT&T', hex: '#009FDB' },
  'Verizon Wireless': { Logo: VerizonLogo, title: 'Verizon', hex: '#CD040B' },
  'T-Mobile USA': { Logo: TMobileLogo, title: 'T-Mobile', hex: '#E20074' },
};

const CarrierBadge = ({ carrier }: { carrier: string }) => {
  const match = carrierLogos[carrier];

  return (
    <span className="flex items-center gap-x-2.5">
      {match ? (
        <match.Logo title={match.title} color={match.hex} size={20} />
      ) : (
        <Radio className="text-secondary/50 size-5" />
      )}
      <span className="text-tagline-2 text-secondary font-medium">{carrier}</span>
    </span>
  );
};

const feeCellClass = (value: string) =>
  cn(
    'text-tagline-2 text-right font-semibold tabular-nums whitespace-nowrap',
    value === 'No carrier fee'
      ? 'text-emerald-600'
      : value === 'N/A'
        ? 'text-secondary/40 font-medium'
        : 'text-secondary'
  );

interface DirectionRow {
  carrier: string;
  sms: string;
  mms: string;
}

/** Shared column widths so the fixed header row and the independently-scrolling body line up exactly. */
const feeGridCols = 'grid-cols-[minmax(0,1fr)_112px_112px]';

/** Icon + label + description, plus the table's own column-header row — stays fixed above the scrolling rows. */
const CarrierFeeTableHeader = ({
  label,
  description,
  icon: Icon,
  tint,
  accent,
}: {
  label: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  tint: string;
  accent: string;
}) => (
  <div>
    <div className="mb-4 flex items-start gap-x-2.5">
      <span className={cn('flex size-9 shrink-0 items-center justify-center rounded-lg', tint)}>
        <Icon className="size-4" />
      </span>
      <div>
        <p className="text-tagline-2 text-secondary font-bold">{label}</p>
        <p className="text-tagline-3 text-secondary/60 mt-0.5">{description}</p>
      </div>
    </div>
    <div className="border-stroke-1 rounded-t-2xl border border-b-0 px-5 pt-5">
      <div className={cn('grid items-center gap-x-4 border-b-2 pb-2.5', feeGridCols, accent)}>
        <span className="text-tagline-2 text-secondary font-semibold">Carrier</span>
        <span className="text-tagline-2 text-secondary text-right font-semibold">SMS</span>
        <span className="text-tagline-2 text-secondary text-right font-semibold">MMS</span>
      </div>
    </div>
  </div>
);

/**
 * Just the data rows — no border of its own. The bordered frame lives on the scroll
 * container in the modal so it stays visible as a fixed edge, not something you scroll past.
 */
const CarrierFeeTableBody = ({ rows }: { rows: DirectionRow[] }) => (
  <div className="px-5 pb-5">
    {rows.map((row) => (
      <div
        key={row.carrier}
        className={cn('border-stroke-1 grid items-center gap-x-4 border-b py-3 last:border-b-0', feeGridCols)}
      >
        <CarrierBadge carrier={row.carrier} />
        <span className={feeCellClass(row.sms)}>{row.sms}</span>
        <span className={feeCellClass(row.mms)}>{row.mms}</span>
      </div>
    ))}
  </div>
);

type FeeDirection = 'outbound' | 'inbound';

const feeDirectionMeta: Record<
  FeeDirection,
  { label: string; description: string; icon: ComponentType<{ className?: string }>; tint: string; accent: string }
> = {
  outbound: {
    label: 'Outbound',
    description: 'Charges apply to messages sent from your number to recipients.',
    icon: Send,
    tint: 'bg-primary-50 text-primary-500',
    accent: 'border-primary-500',
  },
  inbound: {
    label: 'Inbound',
    description: 'Charges apply to messages received by your number from recipients.',
    icon: FileText,
    tint: 'bg-emerald-50 text-emerald-600',
    accent: 'border-emerald-500',
  },
};

/** Quick-view popup for the carrier fee breakdown, reachable from the "+ carrier fee" link. */
export const CarrierFeeModal = ({
  open,
  onClose,
  subtitle,
  rows,
}: {
  open: boolean;
  onClose: () => void;
  subtitle: string;
  rows: CarrierFeeGroupRow[];
}) => {
  const [direction, setDirection] = useState<FeeDirection>('outbound');
  const lenis = useLenis();

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    lenis?.stop();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      lenis?.start();
    };
  }, [open, onClose, lenis]);

  if (!open || typeof document === 'undefined') return null;

  return createPortal(
    <div className="fixed inset-0 z-9999 flex items-center justify-center p-4">
      <div
        aria-hidden="true"
        className="bg-secondary/35 absolute inset-0 z-0 backdrop-blur-[14px]"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Carrier fees"
        className="shadow-3 relative z-10 flex max-h-[85vh] w-full max-w-[720px] flex-col rounded-[20px] bg-white"
      >
        <div className="flex items-start justify-between gap-4 p-6 pb-0 md:p-8 md:pb-0">
          <CardHeader
            icon={RadioTower}
            title="Carrier fees"
            subtitle={subtitle}
            iconRounded="rounded-2xl"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="bg-secondary/10 hover:bg-secondary/20 flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full transition-colors duration-200"
          >
            <X className="text-secondary size-4.5" />
          </button>
        </div>

        <div className="px-6 pt-6 md:px-8">
          <LightPillToggle
            value={direction}
            options={['outbound', 'inbound'] as const}
            onChange={setDirection}
          />
        </div>

        <div className="px-6 pt-6 md:px-8">
          <CarrierFeeTableHeader
            label={feeDirectionMeta[direction].label}
            description={feeDirectionMeta[direction].description}
            icon={feeDirectionMeta[direction].icon}
            tint={feeDirectionMeta[direction].tint}
            accent={feeDirectionMeta[direction].accent}
          />
        </div>

        <div
          data-lenis-prevent
          className="scroll-bar border-stroke-1 mx-6 min-h-0 flex-1 overflow-y-auto rounded-b-2xl border border-t-0 md:mx-8"
        >
          <CarrierFeeTableBody
            rows={rows.map((row) => ({
              carrier: row.carrier,
              sms: row.sms[direction],
              mms: row.mms[direction],
            }))}
          />
        </div>

        <p className="text-tagline-3 bg-primary-50 text-secondary/70 mx-6 mt-4 mb-6 flex items-start gap-x-2 rounded-2xl p-4 md:mx-8 md:mb-8">
          <Info className="text-primary-500 mt-0.5 size-3.5 shrink-0" />
          <span>Carrier fees may vary based on regulatory changes and carrier agreements.</span>
        </p>
      </div>
    </div>,
    document.body
  );
};

