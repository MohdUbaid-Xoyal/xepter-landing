import type { CarrierFeeGroupRow, RateRow, RateTable } from '@/src/data/pricing-content';
import { cn } from '@/src/utils/cn';
import AttLogo from '@icons-pack/react-simple-icons/icons/SiAtandt';
import TMobileLogo from '@icons-pack/react-simple-icons/icons/SiDeutschetelekom';
import VerizonLogo from '@icons-pack/react-simple-icons/icons/SiVerizon';
import {
  ArrowDown,
  FileText,
  Info,
  MessageSquareText,
  Radio,
  Send,
  User,
  Users,
  UsersRound,
} from 'lucide-react';
import Link from 'next/link';
import type { ComponentType, ReactNode } from 'react';

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
}: {
  icon: ComponentType<{ className?: string }>;
  title: string;
  subtitle?: string;
  action?: ReactNode;
  tint?: 'blue' | 'red';
  iconRounded?: string;
}) => (
  <div className="flex flex-wrap items-start justify-between gap-4">
    <div className="flex items-start gap-x-3">
      <span
        className={cn(
          'flex size-10 shrink-0 items-center justify-center',
          iconRounded,
          tint === 'blue' ? 'bg-primary-50 text-primary-500' : 'bg-brand-red/10 text-brand-red'
        )}
      >
        <Icon className="size-5" />
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

/** Bordered stack of tiers sharing one outline, with dividers between rows and the best tier highlighted. */
export const TierList = ({ rows, unitLabel }: { rows: RateRow[]; unitLabel?: string }) => (
  <div className="border-stroke-1 divide-stroke-1 divide-y overflow-hidden rounded-2xl border">
    {rows.map((row, index) => {
      const Icon = tierIcons[Math.min(index, tierIcons.length - 1)];
      const palette = tierPalette[Math.min(index, tierPalette.length - 1)];

      return (
        <div
          key={row.label}
          className={cn('flex items-center gap-x-4 p-4', row.best ? 'bg-emerald-50' : 'bg-white')}
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
            <span className="text-tagline-2 text-secondary block font-bold">{row.label}</span>
            {row.best ? (
              <span className="text-tagline-3 inline-block rounded-full bg-emerald-100 px-2 py-0.5 font-bold tracking-wider text-emerald-600 uppercase">
                Best rate
              </span>
            ) : (
              unitLabel && <span className="text-tagline-3 text-secondary/50 block">{unitLabel}</span>
            )}
          </span>
          <span className="shrink-0 text-right">
            <span
              className={cn(
                'text-tagline-1 block font-bold tabular-nums',
                row.best ? 'text-emerald-600' : 'text-secondary'
              )}
            >
              {row.value}
            </span>
            {row.best && unitLabel && (
              <span className="text-tagline-3 text-secondary/50">{unitLabel}</span>
            )}
          </span>
        </div>
      );
    })}
  </div>
);

const parseAmount = (value: string) => parseFloat(value.replace(/[^0-9.]/g, ''));

export type MessageChannel = 'sms' | 'mms';
export type MessageDirection = 'outbound' | 'inbound';

const DarkPillToggle = <T extends string>({
  value,
  options,
  onChange,
  variant = 'solid',
}: {
  value: T;
  options: readonly T[];
  onChange: (next: T) => void;
  variant?: 'solid' | 'subtle';
}) => (
  <div
    className={cn(
      'inline-flex shrink-0 rounded-full p-1',
      variant === 'solid' ? 'bg-white/10' : 'gap-1 bg-transparent'
    )}
  >
    {options.map((option) => {
      const isActive = value === option;
      return (
        <button
          key={option}
          type="button"
          aria-pressed={isActive}
          onClick={() => onChange(option)}
          className={cn(
            'cursor-pointer rounded-full font-semibold uppercase transition-all duration-300',
            variant === 'solid'
              ? cn(
                  'text-tagline-3 px-4 py-1.5',
                  isActive ? 'text-secondary bg-white' : 'text-white/60 hover:text-white'
                )
              : cn(
                  'text-[11px] px-3 py-1 tracking-wide',
                  isActive ? 'bg-white/15 text-white' : 'text-white/45 hover:text-white/70'
                )
          )}
        >
          {option}
        </button>
      );
    })}
  </div>
);

/**
 * Messaging rates on a dark accent card — bar length is derived from the actual rate
 * value (relative to the highest rate in the table), so it isn't decorative filler.
 */
export const MessagingRateCard = ({
  title,
  subtitle,
  table,
  channel,
  onChannelChange,
  direction,
  onDirectionChange,
}: {
  title: string;
  subtitle: string;
  table: RateTable;
  channel: MessageChannel;
  onChannelChange: (next: MessageChannel) => void;
  direction: MessageDirection;
  onDirectionChange: (next: MessageDirection) => void;
}) => {
  const amounts = table.rows.map((row) => parseAmount(row.value));
  const max = Math.max(...amounts, 0.0001);

  return (
    <div className="from-secondary col-span-12 flex h-full flex-col gap-y-6 rounded-[20px] bg-gradient-to-br to-[#123a63] p-6 md:p-8 lg:col-span-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex items-start gap-x-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
            <MessageSquareText className="size-5" />
          </span>
          <div>
            <h3 className="text-heading-6 font-bold text-white">{title}</h3>
            <p className="text-tagline-2 mt-1 text-white/70">{subtitle}</p>
          </div>
        </div>
        <DarkPillToggle value={channel} options={['sms', 'mms'] as const} onChange={onChannelChange} />
      </div>

      <div className="border-white/10 flex items-center justify-between border-b pb-4">
        <span className="text-tagline-3 font-semibold tracking-wide text-white/40 uppercase">
          Direction
        </span>
        <DarkPillToggle
          variant="subtle"
          value={direction}
          options={['outbound', 'inbound'] as const}
          onChange={onDirectionChange}
        />
      </div>

      <div className="space-y-4">
        {table.rows.map((row, index) => (
          <div key={row.label} className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
            <span className="text-tagline-2 w-20 shrink-0 font-medium text-white/85">
              {row.label}
            </span>
            <span className="relative h-2.5 min-w-16 flex-1 basis-full overflow-hidden rounded-[3px] bg-white/10 sm:basis-0">
              <span
                className={cn(
                  'absolute inset-y-0 left-0 rounded-[3px]',
                  row.best ? 'to-primary-400 bg-gradient-to-r from-emerald-400' : 'bg-white/30'
                )}
                style={{ width: `${(amounts[index] / max) * 100}%` }}
              />
            </span>
            <span
              className={cn(
                'text-tagline-1 ml-auto shrink-0 text-right font-bold tabular-nums sm:ml-0 sm:w-20',
                row.best ? 'text-emerald-400' : 'text-white'
              )}
            >
              {row.value}
            </span>
            {row.best && (
              <span className="text-tagline-3 shrink-0 rounded-full bg-emerald-400/20 px-2 py-0.5 font-bold tracking-wider text-emerald-300 uppercase">
                Best rate
              </span>
            )}
          </div>
        ))}
      </div>

      <Link
        href="#carrier-fees"
        className="text-tagline-3 group -mt-2 inline-flex w-fit items-center gap-x-1.5 font-semibold text-primary-300 underline decoration-primary-300/40 underline-offset-4 transition-colors hover:text-white"
      >
        + carrier fee
        <ArrowDown className="size-3.5 transition-transform duration-200 group-hover:translate-y-0.5" />
      </Link>

      {table.footnote && (
        <p className="text-tagline-3 mt-auto flex items-start gap-x-2 text-white/65">
          <Info className="mt-0.5 size-3.5 shrink-0" />
          <span>{table.footnote}</span>
        </p>
      )}
    </div>
  );
};

/** Real carrier wordmarks (simple-icons), each rendered in its own official brand color. */
const carrierLogos: Record<string, { Logo: typeof AttLogo; title: string; hex: string }> = {
  'AT&T': { Logo: AttLogo, title: 'AT&T', hex: '#009FDB' },
  Verizon: { Logo: VerizonLogo, title: 'Verizon', hex: '#CD040B' },
  'T-Mobile': { Logo: TMobileLogo, title: 'T-Mobile', hex: '#E20074' },
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

const feeCellClass = (isFree: boolean) =>
  cn(
    'text-tagline-2 text-right font-semibold tabular-nums',
    isFree ? 'text-emerald-600' : 'text-secondary'
  );

interface DirectionRow {
  carrier: string;
  sms: string;
  mms: string;
}

const CarrierFeeTable = ({
  label,
  icon: Icon,
  tint,
  rows,
}: {
  label: string;
  icon: ComponentType<{ className?: string }>;
  tint: string;
  rows: DirectionRow[];
}) => (
  <div className="border-stroke-1 overflow-x-auto rounded-2xl border p-5">
    <div className="mb-3 flex items-center gap-x-2.5">
      <span className={cn('flex size-7 shrink-0 items-center justify-center rounded-lg', tint)}>
        <Icon className="size-3.5" />
      </span>
      <p className="text-tagline-2 text-secondary font-bold">{label}</p>
    </div>
    <table className="w-full min-w-[280px] border-collapse">
      <thead>
        <tr>
          <th className="border-stroke-1 text-tagline-2 text-secondary/70 border-b pb-2.5 text-left font-semibold">
            Carrier
          </th>
          <th className="border-stroke-1 text-tagline-2 text-secondary/70 border-b pb-2.5 text-right font-semibold">
            SMS
          </th>
          <th className="border-stroke-1 text-tagline-2 text-secondary/70 border-b pb-2.5 text-right font-semibold">
            MMS
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.carrier} className="border-stroke-1 border-b last:border-b-0">
            <td className="py-3">
              <CarrierBadge carrier={row.carrier} />
            </td>
            <td className={cn(feeCellClass(row.sms === 'No carrier fee'), 'py-3')}>{row.sms}</td>
            <td className={cn(feeCellClass(row.mms === 'No carrier fee'), 'py-3')}>{row.mms}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

/** Two fixed side-by-side tables — outbound and inbound — no toggle to switch between them. */
export const CarrierFeesGrid = ({ rows }: { rows: CarrierFeeGroupRow[] }) => {
  const outbound = rows.map((row) => ({
    carrier: row.carrier,
    sms: row.sms.outbound,
    mms: row.mms.outbound,
  }));
  const inbound = rows.map((row) => ({
    carrier: row.carrier,
    sms: row.sms.inbound,
    mms: row.mms.inbound,
  }));

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6">
      <CarrierFeeTable
        label="Outbound"
        icon={Send}
        tint="bg-primary-50 text-primary-500"
        rows={outbound}
      />
      <CarrierFeeTable
        label="Inbound"
        icon={FileText}
        tint="bg-emerald-50 text-emerald-600"
        rows={inbound}
      />
    </div>
  );
};

