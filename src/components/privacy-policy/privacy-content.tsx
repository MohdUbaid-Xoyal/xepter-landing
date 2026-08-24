'use client';

import RevealAnimation from '@/src/components/animation/reveal-animation';
import { cn } from '@/src/utils/cn';
import {
  policySections,
  privacyPolicyMeta,
  summaryPoints,
  type PolicyBlock,
} from '@/src/data/privacy-policy-content';
import { ChevronRight, ListChecks, ShieldCheck } from 'lucide-react';
import { useEffect, useState } from 'react';

const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={cn('shadow-1 rounded-[20px] bg-white p-6 md:p-8', className)}>{children}</div>
);

/** h3/h4 sub-headings per section, with a stable anchor id — feeds the TOC's expandable sub-items. */
const sectionSubheadings = new Map(
  policySections.map((section) => [
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

const Block = ({ block }: { block: PolicyBlock }) => {
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
      return <p className="text-tagline-1 text-secondary/80 mt-3 first:mt-0">{block.text}</p>;
  }
};

/** Sticky "on this page" nav — sections with sub-headings expand to show lettered jump links. */
const TableOfContents = ({ activeId }: { activeId: string }) => {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(() => new Set());

  const toggle = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <nav
      aria-label="Table of contents"
      data-lenis-prevent
      className="scroll-bar max-h-[calc(100vh-11rem)] overflow-y-auto"
    >
      <p className="text-tagline-2 text-secondary mb-3 font-bold tracking-wider uppercase">Table of Contents</p>
      <a
        href="#summary"
        className={cn(
          'lenis-scroll-to text-tagline-2 mb-2 flex items-center gap-x-2 rounded-lg px-2.5 py-1.5 transition-colors duration-200',
          activeId === 'summary'
            ? 'bg-primary-50 text-secondary font-semibold'
            : 'text-secondary/60 hover:bg-background-4 hover:text-secondary'
        )}
      >
        <ListChecks className="size-3.5 shrink-0" />
        <span>Summary of Key Points</span>
      </a>
      <div className="border-stroke-1 mb-3 border-t" />
      <ul className="space-y-1">
        {policySections.map((section) => {
          const subs = sectionSubheadings.get(section.id) ?? [];
          const hasSubs = subs.length > 0;
          const isExpanded = expandedIds.has(section.id);
          const isActive = activeId === section.id;

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
                  className={cn(
                    'lenis-scroll-to text-tagline-2 flex flex-1 items-start gap-x-2 rounded-lg px-2.5 py-1.5 transition-colors duration-200',
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
                  {subs.map((sub, subIndex) => (
                    <li key={sub.id}>
                      <a
                        href={`#${sub.id}`}
                        className="lenis-scroll-to text-tagline-2 text-secondary/50 hover:bg-background-4 hover:text-secondary block rounded-lg px-2.5 py-1.5 transition-colors duration-200"
                      >
                        {sub.type === 'h3' ? `${String.fromCharCode(65 + subIndex)}. ` : ''}
                        {sub.text}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

const PrivacyContent = () => {
  const [activeId, setActiveId] = useState(policySections[0].id);

  useEffect(() => {
    const headings = [document.getElementById('summary'), ...policySections.map((section) => document.getElementById(section.id))].filter(
      (el): el is HTMLElement => el !== null
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-140px 0px -70% 0px' }
    );

    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="pb-10 md:pb-14 lg:pb-16">
      <div className="main-container space-y-8 md:space-y-10">
        <RevealAnimation asChild={false} delay={0.1}>
          <Card className="p-6 pr-8 md:p-8 md:pr-14">
            <div className="flex flex-col items-start gap-x-4 gap-y-4 sm:flex-row">
              <span className="bg-primary-50 text-secondary flex size-12 shrink-0 items-center justify-center rounded-2xl">
                <ShieldCheck className="size-6" />
              </span>
              <div>
                <p className="text-tagline-1 text-secondary font-bold tracking-wider uppercase">Introduction</p>
                <p className="text-tagline-1 text-secondary/80 mt-2 text-justify">
                  {privacyPolicyMeta.company} ("<span className="text-secondary font-bold">Xepter</span>," "
                  <span className="text-secondary font-bold">we</span>," "
                  <span className="text-secondary font-bold">us</span>," or "
                  <span className="text-secondary font-bold">our</span>") respects your privacy and is committed
                  to protecting the personal information you provide to us.
                </p>
                <p className="text-tagline-1 text-secondary/80 mt-3 text-justify">
                  This Privacy Policy explains how we collect, use, disclose, retain, and protect personal
                  information when you access or use our websites, applications, platforms, APIs, communications
                  services, and related products and services (collectively, the "
                  <span className="text-secondary font-bold">Services</span>").
                </p>
                <p className="text-tagline-1 text-secondary/80 mt-3 text-justify">
                  If you do not agree with this Privacy Policy, please do not access or use our Services. If you
                  have questions about this Privacy Policy, please contact us at{' '}
                  <a href={`mailto:${privacyPolicyMeta.contactEmail}`} className="text-primary-500 font-medium">
                    {privacyPolicyMeta.contactEmail}
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
              <div id="summary" className="scroll-mt-32 pb-8">
                <div className="flex items-start gap-x-4">
                  <span className="bg-background-4 text-secondary flex size-12 shrink-0 items-center justify-center rounded-2xl">
                    <ListChecks className="size-6" />
                  </span>
                  <div>
                    <h2 className="text-heading-6 text-secondary font-bold uppercase">Summary of Key Points</h2>
                    <p className="text-tagline-1 text-secondary/70 mt-2">
                      This summary provides an overview of our Privacy Policy. Please read the complete policy
                      below for additional details.
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {summaryPoints.map((point) => (
                    <div key={point.question} className="bg-background-4 rounded-2xl p-5">
                      <p className="text-tagline-new text-secondary font-bold whitespace-nowrap">{point.question}</p>
                      <p className="text-tagline-2 text-secondary/70 mt-2">{point.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {policySections.map((section) => {
                const subs = sectionSubheadings.get(section.id) ?? [];

                return (
                <div
                  key={section.id}
                  id={section.id}
                  className="border-stroke-1 scroll-mt-32 border-t pt-8 not-first:mt-8"
                >
                  <div className="flex items-baseline gap-x-3">
                    <span className="text-secondary text-heading-6 font-bold">{section.number}.</span>
                    <h2 className="text-heading-6 text-secondary font-bold">{section.title}</h2>
                  </div>
                  {section.blocks.map((block, index) => {
                    if (block.type === 'h3' || block.type === 'h4') {
                      const isH3 = block.type === 'h3';
                      const letter = isH3
                        ? String.fromCharCode(65 + subs.findIndex((sub) => sub.id === `${section.id}-sub-${index}`))
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
            </Card>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default PrivacyContent;
