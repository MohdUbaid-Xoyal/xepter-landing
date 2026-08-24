'use client';

import RevealAnimation from '@/src/components/animation/reveal-animation';
import { cn } from '@/src/utils/cn';
import {
  definedTerms,
  termsMeta,
  termsSections,
  type TermsBlock,
} from '@/src/data/terms-of-service-content';
import { BookOpenText, ChevronRight, FileText, Globe, Mail, MapPin, Phone } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Card = ({ className, children, ...props }: React.ComponentProps<'div'>) => (
  <div className={cn('shadow-1 rounded-[20px] bg-white p-6 md:p-8', className)} {...props}>
    {children}
  </div>
);

const EXHIBIT_ID = 'exhibit-a-definitions';
const CONTACT_ID = 'contact-information';

/** h3/h4 sub-headings per section, with a stable anchor id — feeds the TOC's expandable sub-items. */
const sectionSubheadings = new Map(
  termsSections.map((section) => [
    section.id,
    section.blocks
      .map((block, index) => ({ block, index }))
      .filter(({ block }) => block.type === 'h3' || block.type === 'h4')
      .map(({ block, index }) => ({
        id: `${section.id}-sub-${index}`,
        text: (block as { text: string }).text,
        type: block.type as 'h3' | 'h4',
      })),
  ])
);

const Block = ({ block }: { block: TermsBlock }) => {
  switch (block.type) {
    case 'ul':
      return (
        <ul className="mt-3 space-y-2.5">
          {block.items.map((item) => (
            <li
              key={item}
              className="text-tagline-1 text-secondary/80 before:bg-primary-500 flex items-start gap-x-2.5 before:mt-2.5 before:size-1.5 before:shrink-0 before:rounded-full before:content-['']"
            >
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case 'p':
    default:
      return <p className="text-tagline-1 text-secondary/80 mt-3 text-justify first:mt-0">{block.text}</p>;
  }
};

/** Sticky "on this page" nav — sections with sub-headings expand to show lettered jump links. */
const TableOfContents = ({ activeId }: { activeId: string }) => {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(() => new Set());
  const navRef = useRef<HTMLElement>(null);

  const toggle = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  useEffect(() => {
    navRef.current?.querySelector('[data-active="true"]')?.scrollIntoView({ block: 'nearest' });
  }, [activeId]);

  useEffect(() => {
    for (const [sectionId, subs] of sectionSubheadings) {
      if (subs.some((sub) => sub.id === activeId)) {
        setExpandedIds((prev) => (prev.has(sectionId) ? prev : new Set(prev).add(sectionId)));
        break;
      }
    }
  }, [activeId]);

  return (
    <nav
      ref={navRef}
      aria-label="Table of contents"
      data-lenis-prevent
      className="scroll-bar max-h-[calc(100vh-11rem)] overflow-y-auto"
    >
      <p className="text-tagline-2 text-secondary mb-3 font-bold tracking-wider uppercase">Table of Contents</p>
      <ul className="space-y-1">
        {termsSections.map((section) => {
          const subs = sectionSubheadings.get(section.id) ?? [];
          const hasSubs = subs.length > 0;
          const isExpanded = expandedIds.has(section.id);
          const isActive = activeId === section.id || subs.some((sub) => sub.id === activeId);

          return (
            <li key={section.id}>
              <div className="flex items-center gap-x-1">
                {hasSubs ? (
                  <button
                    type="button"
                    onClick={() => toggle(section.id)}
                    aria-expanded={isExpanded}
                    aria-label={isExpanded ? 'Collapse section' : 'Expand section'}
                    className="text-secondary/40 hover:text-secondary flex size-6 shrink-0 cursor-pointer items-center justify-center"
                  >
                    <ChevronRight
                      className={cn('size-4.5 transition-transform duration-200', isExpanded && 'rotate-90')}
                    />
                  </button>
                ) : (
                  <span className="size-6 shrink-0" />
                )}
                <a
                  href={`#${section.id}`}
                  data-active={isActive || undefined}
                  className={cn(
                    'lenis-scroll-to text-tagline-1 flex flex-1 items-start gap-x-2 rounded-lg px-2.5 py-1.5 transition-colors duration-200',
                    isActive
                      ? 'bg-primary-50 text-secondary font-semibold'
                      : 'text-secondary/60 hover:bg-background-4 hover:text-secondary'
                  )}
                >
                  <span className="shrink-0 tabular-nums">{section.number}.</span>
                  <span>{section.title}</span>
                </a>
              </div>

              {hasSubs && isExpanded && (
                <ul className="mt-1 ml-6 space-y-1">
                  {subs.map((sub) => {
                    const isSubActive = activeId === sub.id;
                    return (
                      <li key={sub.id}>
                        <a
                          href={`#${sub.id}`}
                          data-active={isSubActive || undefined}
                          className={cn(
                            'lenis-scroll-to text-tagline-1 block rounded-lg px-2.5 py-1.5 transition-colors duration-200',
                            isSubActive
                              ? 'bg-background-4 text-secondary font-semibold'
                              : 'text-secondary/50 hover:bg-background-4 hover:text-secondary'
                          )}
                        >
                          {sub.text}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
      <div className="border-stroke-1 my-3 border-t" />
      <a
        href={`#${EXHIBIT_ID}`}
        data-active={activeId === EXHIBIT_ID || undefined}
        className={cn(
          'lenis-scroll-to text-tagline-1 flex items-center gap-x-2 rounded-lg px-2.5 py-1.5 transition-colors duration-200',
          activeId === EXHIBIT_ID
            ? 'bg-primary-50 text-secondary font-semibold'
            : 'text-secondary/60 hover:bg-background-4 hover:text-secondary'
        )}
      >
        <BookOpenText className="size-3.5 shrink-0" />
        <span>Exhibit A — Definitions</span>
      </a>
      <a
        href={`#${CONTACT_ID}`}
        data-active={activeId === CONTACT_ID || undefined}
        className={cn(
          'lenis-scroll-to text-tagline-1 mt-1 flex items-center gap-x-2 rounded-lg px-2.5 py-1.5 transition-colors duration-200',
          activeId === CONTACT_ID
            ? 'bg-primary-50 text-secondary font-semibold'
            : 'text-secondary/60 hover:bg-background-4 hover:text-secondary'
        )}
      >
        <Mail className="size-3.5 shrink-0" />
        <span>Contact Information</span>
      </a>
    </nav>
  );
};

const TermsContent = () => {
  const [activeId, setActiveId] = useState(termsSections[0].id);

  useEffect(() => {
    // Document-order id list (section, then its own sub-headings, before the next section) —
    // the active heading is the last one whose top has crossed the reference line below.
    const orderedIds = [
      ...termsSections.flatMap((section) => [
        section.id,
        ...(sectionSubheadings.get(section.id) ?? []).map((sub) => sub.id),
      ]),
      EXHIBIT_ID,
      CONTACT_ID,
    ];
    const headingEls = orderedIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const REFERENCE_LINE = 150;
    let ticking = false;

    const updateActive = () => {
      ticking = false;
      let current = headingEls[0]?.id;
      for (const heading of headingEls) {
        if (heading.getBoundingClientRect().top <= REFERENCE_LINE) current = heading.id;
        else break;
      }
      if (current) setActiveId(current);
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateActive);
      }
    };

    updateActive();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section className="pb-10 md:pb-14 lg:pb-16">
      <div className="main-container space-y-8 md:space-y-10">
        <RevealAnimation asChild={false} delay={0.1}>
          <Card className="p-6 pr-8 md:p-8 md:pr-14">
            <div className="flex flex-col items-start gap-x-4 gap-y-4 sm:flex-row">
              <span className="bg-primary-50 text-secondary flex size-12 shrink-0 items-center justify-center rounded-2xl">
                <FileText className="size-6" />
              </span>
              <div>
                <p className="text-tagline-1 text-secondary font-bold tracking-wider uppercase">Introduction</p>
                <p className="text-tagline-1 text-secondary/80 mt-2 text-justify">
                  This Master Services Agreement (this "<span className="text-secondary font-bold">Agreement</span>
                  ") is entered into by and between {termsMeta.company} ("
                  <span className="text-secondary font-bold">Xepter</span>," "
                  <span className="text-secondary font-bold">we</span>," "
                  <span className="text-secondary font-bold">us</span>," or "
                  <span className="text-secondary font-bold">our</span>") and the customer identified in the
                  applicable Order ("<span className="text-secondary font-bold">CUSTOMER</span>," "
                  <span className="text-secondary font-bold">you</span>," or "
                  <span className="text-secondary font-bold">your</span>").
                </p>
                <p className="text-tagline-1 text-secondary/80 mt-3 text-justify">
                  This Agreement governs CUSTOMER's access to and use of the Services. By accessing or using the
                  Services, executing an Order, or clicking to accept, CUSTOMER agrees to be bound by this
                  Agreement. Capitalized terms not otherwise defined are set out in{' '}
                  <span className="text-secondary font-bold">Exhibit A — Definitions</span>.
                </p>
                <p className="text-tagline-1 text-secondary/80 mt-3 text-justify">
                  If you do not agree with this Agreement, please do not access or use our Services. If you have
                  questions about this Agreement, please contact us at{' '}
                  <a href={`mailto:${termsMeta.contactEmail}`} className="text-primary-500 font-medium">
                    {termsMeta.contactEmail}
                  </a>
                  .
                </p>
              </div>
            </div>
          </Card>
        </RevealAnimation>

        <div className="grid grid-cols-12 items-start gap-5">
          <RevealAnimation
            asChild={false}
            delay={0.2}
            className="col-span-12 hidden lg:sticky lg:top-32 lg:col-span-3 lg:block"
          >
            <Card className="p-6 pl-4 md:p-8 md:pl-5">
              <TableOfContents activeId={activeId} />
            </Card>
          </RevealAnimation>

          <RevealAnimation asChild={false} delay={0.25} className="col-span-12 lg:col-span-9">
            <Card>
              {termsSections.map((section, sectionIndex) => {
                const subs = sectionSubheadings.get(section.id) ?? [];

                return (
                  <div
                    key={section.id}
                    id={section.id}
                    className={cn(
                      'scroll-mt-32 pt-8 not-first:mt-8',
                      sectionIndex > 0 && 'border-stroke-1 border-t'
                    )}
                  >
                    <div className="flex items-baseline gap-x-3">
                      <span className="text-secondary text-heading-6 font-bold">{section.number}.</span>
                      <h2 className="text-heading-6 text-secondary font-bold">{section.title}</h2>
                    </div>
                    {section.blocks.map((block, index) => {
                      if (block.type === 'h3' || block.type === 'h4') {
                        const isH3 = block.type === 'h3';
                        const letter = isH3
                          ? String.fromCharCode(
                              65 + subs.findIndex((sub) => sub.id === `${section.id}-sub-${index}`)
                            )
                          : null;
                        const Tag = block.type;
                        return (
                          <Tag
                            key={index}
                            id={`${section.id}-sub-${index}`}
                            className={cn(
                              'text-secondary scroll-mt-32 font-bold first:mt-0',
                              isH3 ? 'text-heading-6 mt-8 mb-3' : 'text-tagline-1 mt-6 mb-2'
                            )}
                          >
                            {letter && `${letter}. `}
                            {block.text}
                          </Tag>
                        );
                      }
                      return <Block key={index} block={block} />;
                    })}
                  </div>
                );
              })}

              <div id={EXHIBIT_ID} className="border-stroke-1 scroll-mt-32 border-t pt-8 not-first:mt-8">
                <div className="flex items-start gap-x-4">
                  <span className="bg-background-4 text-secondary flex size-12 shrink-0 items-center justify-center rounded-2xl">
                    <BookOpenText className="size-6" />
                  </span>
                  <div>
                    <h2 className="text-heading-6 text-secondary font-bold">Exhibit A — Definitions</h2>
                    <p className="text-tagline-1 text-secondary/70 mt-2">
                      The following capitalized terms have the meanings given below wherever used in this
                      Agreement.
                    </p>
                  </div>
                </div>

                <dl className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {definedTerms.map((entry) => (
                    <div key={entry.term} className="bg-background-4 rounded-2xl p-5">
                      <dt className="text-tagline-new text-secondary font-bold">{entry.term}</dt>
                      <dd className="text-tagline-2 text-secondary/70 mt-2">{entry.definition}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Card>
          </RevealAnimation>
        </div>

        <RevealAnimation asChild={false} delay={0.3}>
          <Card id={CONTACT_ID} className="scroll-mt-32 p-6 md:p-8">
            <div className="flex items-start gap-x-4">
              <span className="bg-background-4 text-secondary flex size-12 shrink-0 items-center justify-center rounded-2xl">
                <Mail className="size-6" />
              </span>
              <div>
                <h2 className="text-heading-6 text-secondary font-bold">Contact Information</h2>
                <p className="text-tagline-1 text-secondary/70 mt-2">
                  Questions about this Agreement can be directed to us using the details below.
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="bg-background-4 rounded-2xl p-5">
                <div className="flex items-center gap-x-2">
                  <MapPin className="text-primary-500 size-4.5" />
                  <p className="text-tagline-new text-secondary font-bold">{termsMeta.address[0]}</p>
                </div>
                <p className="text-tagline-2 text-secondary/70 mt-2">{termsMeta.address.slice(1).join(', ')}</p>
              </div>

              <div className="bg-background-4 rounded-2xl p-5">
                <div className="flex items-center gap-x-2">
                  <Mail className="text-primary-500 size-4.5" />
                  <p className="text-tagline-new text-secondary font-bold">Email</p>
                </div>
                <a
                  href={`mailto:${termsMeta.contactEmail}`}
                  className="text-tagline-2 text-primary-500 mt-2 block font-medium"
                >
                  {termsMeta.contactEmail}
                </a>
              </div>

              <div className="bg-background-4 rounded-2xl p-5">
                <div className="flex items-center gap-x-2">
                  <Phone className="text-primary-500 size-4.5" />
                  <p className="text-tagline-new text-secondary font-bold">Phone</p>
                </div>
                <p className="text-tagline-2 text-secondary/70 mt-2">{termsMeta.phone}</p>
              </div>

              <div className="bg-background-4 rounded-2xl p-5">
                <div className="flex items-center gap-x-2">
                  <Globe className="text-primary-500 size-4.5" />
                  <p className="text-tagline-new text-secondary font-bold">Website</p>
                </div>
                <a
                  href={termsMeta.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tagline-2 text-primary-500 mt-2 block font-medium"
                >
                  {termsMeta.website.replace(/^https?:\/\//, '')}
                </a>
              </div>
            </div>
          </Card>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default TermsContent;
