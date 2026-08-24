import RevealAnimation from '@/src/components/animation/reveal-animation';
import { contactMeta, contactQuickLinks } from '@/src/data/contact-content';
import { ArrowUpRight, Handshake, LifeBuoy, TrendingUp } from 'lucide-react';

const icons = [TrendingUp, LifeBuoy, Handshake];

const ContactQuickLinks = () => {
  return (
    <section className="pb-10 md:pb-14 lg:pb-16">
      <div className="main-container">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {contactQuickLinks.map((link, index) => {
            const Icon = icons[index];
            return (
              <RevealAnimation key={link.title} asChild={false} delay={0.1 + index * 0.05}>
                <a
                  href={`mailto:${contactMeta.contactEmail}?subject=${encodeURIComponent(link.mailtoSubject)}`}
                  className="group shadow-1 hover:border-primary-500/40 border-stroke-1 flex h-full flex-col rounded-[20px] border bg-white p-6 transition-colors duration-200 md:p-7"
                >
                  <span className="bg-primary-50 text-secondary flex size-12 shrink-0 items-center justify-center rounded-2xl">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="text-heading-6 text-secondary mt-5 font-bold">{link.title}</h3>
                  <p className="text-tagline-1 text-secondary/70 mt-2 flex-1">{link.description}</p>
                  <span className="text-tagline-1 text-primary-500 mt-5 inline-flex items-center gap-x-1.5 font-medium">
                    {link.cta}
                    <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </a>
              </RevealAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactQuickLinks;
