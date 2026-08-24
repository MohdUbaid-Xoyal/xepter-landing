import RevealAnimation from '@/src/components/animation/reveal-animation';
import { contactMeta } from '@/src/data/contact-content';
import { Globe, Mail, MapPin, Phone } from 'lucide-react';

const infoRows = [
  {
    icon: MapPin,
    label: 'Address',
    value: [contactMeta.company, ...contactMeta.address].join(', '),
  },
  {
    icon: Mail,
    label: 'Email',
    value: contactMeta.contactEmail,
    href: `mailto:${contactMeta.contactEmail}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: contactMeta.phone,
    href: `tel:${contactMeta.phone.replace(/[^+\d]/g, '')}`,
  },
  {
    icon: Globe,
    label: 'Website',
    value: contactMeta.website,
    href: contactMeta.website,
  },
];

const ContactInfoPanel = () => {
  return (
    <RevealAnimation asChild={false} delay={0.1} className="col-span-12 lg:col-span-5">
      <div className="shadow-1 h-full space-y-4 rounded-[20px] bg-white p-6 md:p-8">
        <h2 className="text-heading-4 text-secondary font-bold">Our headquarters</h2>
        <p className="text-tagline-1 text-secondary/70">
          Prefer to reach us directly? Here&apos;s where to find us.
        </p>

        <div className="space-y-3 pt-2">
          {infoRows.map((row) => (
            <div key={row.label} className="bg-background-4 flex items-start gap-x-3 rounded-2xl p-3">
              <row.icon className="text-primary-500 mt-0.5 size-5 shrink-0" />
              <div>
                <p className="text-tagline-2 text-secondary/60 font-medium">{row.label}</p>
                {row.href ? (
                  <a href={row.href} className="text-tagline-1 text-secondary font-medium break-words">
                    {row.value}
                  </a>
                ) : (
                  <p className="text-tagline-1 text-secondary font-medium">{row.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </RevealAnimation>
  );
};

export default ContactInfoPanel;
