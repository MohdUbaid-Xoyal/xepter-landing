import smartConditionsImg from '@/public/images/ns-img-10.svg';
import multiStepAutomationImg from '@/public/images/ns-img-11.svg';
import realTimeTriggersImg from '@/public/images/ns-img-8.svg';
import appIntegrationsImg from '@/public/images/ns-img-9.svg';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonWhite } from '@/src/components/shared/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const Features = () => {
  return (
    <section className="pt-20 md:pt-25 lg:pt-39">
      <div className="main-container">
        <div className="space-y-18">
          <div className="space-y-8 text-center">
            <div className="space-y-5">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Features</BadgePrimary>
              </RevealAnimation>

              <div className="space-y-3">
                <TextReveal delay={0.2}>
                  <h2>Built for every use case</h2>
                </TextReveal>
                <TextReveal delay={0.3}>
                  <p className="text-background-14/60 mx-auto max-w-[550px]">
                    From marketing campaigns to customer support, Xepter powers the conversations
                    that matter to your business.
                  </p>
                </TextReveal>
              </div>
            </div>

            <RevealAnimation delay={0.4}>
              <Link href="/features">
                <ButtonWhite
                  className="mx-auto w-[80%]! md:w-fit!"
                  textClassName="text-center text-nowrap max-sm:flex-1 max-sm:pr-8!"
                >
                  View all features
                </ButtonWhite>
              </Link>
            </RevealAnimation>
          </div>

          <div className="grid grid-cols-12 items-center justify-center gap-y-5 md:gap-4">
            <RevealAnimation delay={0.5} className="col-span-12 md:col-span-6">
              <div className="flex h-[400px] flex-col items-start justify-between rounded-[20px] bg-white p-6 lg:h-[510px]">
                <div className="space-y-1">
                  <h3 className="text-heading-5">Marketing campaigns</h3>
                  <p>Engage customers and increase conversions with SMS, MMS, and WhatsApp marketing campaigns.</p>
                </div>

                <figure className="mx-auto">
                  <Image src={appIntegrationsImg} alt="app integrations" />
                </figure>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.6} className="col-span-12 md:col-span-6">
              <div className="flex h-[350px] flex-col items-start justify-between rounded-[20px] bg-white p-6 lg:h-[510px]">
                <div className="space-y-1">
                  <h3 className="text-heading-5">Notifications and alerts</h3>
                  <p>Inform customers and improve satisfaction with real-time account, service, or event updates.</p>
                </div>

                <figure className="w-full">
                  <Image
                    src={smartConditionsImg}
                    alt="smart conditions"
                    className="h-auto w-full"
                  />
                </figure>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.7} className="col-span-12 md:col-span-6">
              <div className="flex h-[350px] flex-col items-start justify-between rounded-[20px] bg-white p-6 lg:h-[510px]">
                <div className="space-y-1">
                  <h3 className="text-heading-5">Identity and security</h3>
                  <p>Safeguard customer accounts and increase trust with SMS and voice verification.</p>
                </div>

                <figure className="w-full">
                  <Image
                    src={realTimeTriggersImg}
                    alt="real-time triggers"
                    className="h-auto w-full"
                  />
                </figure>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.8} className="col-span-12 md:col-span-6">
              <div className="flex h-[350px] flex-col items-start justify-between rounded-[20px] bg-white p-6 lg:h-[510px]">
                <div className="space-y-1">
                  <h3 className="text-heading-5">Customer care</h3>
                  <p>Support customers and increase satisfaction with timely service on any channel.</p>
                </div>

                <figure className="w-full">
                  <Image
                    src={multiStepAutomationImg}
                    alt="multi-step automation"
                    className="h-auto w-full"
                  />
                </figure>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
