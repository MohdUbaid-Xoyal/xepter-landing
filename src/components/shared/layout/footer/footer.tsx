import mainLogo from '@/public/images/logo/Xepter-Full-Logo.png';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { FooterBottom } from '@/src/components/shared/layout/footer/footer-bottom';
import { FooterLinkGroups } from '@/src/components/shared/layout/footer/footer-link-groups';
import { FooterSocialLinks } from '@/src/components/shared/layout/footer/footer-social-links';
import { MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer bg-background-13 relative z-0 overflow-hidden">
      <div className="main-container px-5">
        <div className="grid grid-cols-12 justify-between gap-x-0 gap-y-16 pt-16 pb-12">
          <div className="col-span-12 xl:col-span-4">
            <RevealAnimation delay={0.1}>
              <div className="max-w-85">
                <Link href="/">
                  <span className="sr-only">Xepter</span>
                  <figure>
                    <Image src={mainLogo} alt="Xepter Logo" width={132} height={40} />
                  </figure>
                </Link>
                <p className="text-background-14/60 text-tagline-2 mt-4 mb-4 flex items-start gap-x-2">
                  <MapPin className="mt-0.5 size-4 shrink-0" />
                  <span>
                    30 N Gould St, Ste N Sheridan,
                    <br />
                     WY 82801, US
                  </span>
                </p>
                <p className="text-background-14/60 text-tagline-2 mb-7 flex items-start gap-x-2">
                  <Phone className="mt-0.5 size-4 shrink-0" />
                  <Link href="tel:+18554983737" className="hover:text-primary-500 transition-colors">
                    +1 (855) 498-3737
                  </Link>
                </p>
                <FooterSocialLinks />
              </div>
            </RevealAnimation>
          </div>
          <FooterLinkGroups />
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
