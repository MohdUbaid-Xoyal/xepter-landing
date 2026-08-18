import autoRemindersImg from '@/public/images/ns-img-19.svg';
import scaleWithoutComplexityImg from '@/public/images/ns-img-20.svg';
import multiStepAutomationImg from '@/public/images/ns-img-21.webp';
import timezoneImg from '@/public/images/ns-img-22.webp';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { GradientCircleIcon } from '@/src/components/shared/icon';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonWhite } from '@/src/components/shared/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const CoreFeatures = () => {
  return (
    <section className="pt-20 md:pt-25 lg:pt-39">
      <div className="main-container">
        <div className="space-y-10 lg:space-y-18">
          <div className="space-y-8">
            <div className="space-y-5 text-center">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Core features</BadgePrimary>
              </RevealAnimation>

              <div className="space-y-3">
                <TextReveal delay={0.2}>
                  <h2>Built for real conversations, not just blasts</h2>
                </TextReveal>
                <TextReveal delay={0.3}>
                  <p className="text-background-14/60 mx-auto max-w-[400px]">
                    SMS, MMS, voice, and WhatsApp — connected to your CRM and easy to manage from
                    day one.
                  </p>
                </TextReveal>
              </div>

              <RevealAnimation delay={0.4}>
                <ul className="flex items-center justify-center gap-x-6">
                  <li className="flex items-center justify-center gap-x-1">
                    <GradientCircleIcon />
                    <span className="text-tagline-2 text-secondary font-inter-tight font-normal italic">
                      One number.
                    </span>
                  </li>
                  <li className="flex items-center justify-center gap-x-1">
                    <GradientCircleIcon />
                    <span className="text-tagline-2 text-secondary font-inter-tight font-normal italic">
                      Every channel.
                    </span>
                  </li>
                  <li className="flex items-center justify-center gap-x-1">
                    <GradientCircleIcon />
                    <span className="text-tagline-2 text-secondary font-inter-tight font-normal italic">
                      Real conversations.
                    </span>
                  </li>
                </ul>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.5} className="flex items-center justify-center">
              <Link href="/pricing">
                <ButtonWhite
                  className="mx-auto w-[80%]! md:w-fit!"
                  textClassName="text-center text-nowrap max-sm:flex-1 max-sm:pr-8!"
                >
                  Get started
                </ButtonWhite>
              </Link>
            </RevealAnimation>
          </div>

          <div className="grid grid-cols-12 items-center justify-center gap-y-5 md:gap-4">
            <RevealAnimation delay={0.1} className="col-span-12 md:col-span-6 lg:col-span-5">
              <div className="h-[425px] space-y-5 rounded-[20px] bg-white p-5 md:space-y-8 lg:p-8 xl:h-[510px]">
                <figure className="h-[303px] w-full max-[376px]:h-[274px] md:h-[257px] lg:h-[272px] xl:h-[352px]">
                  <Image
                    src={autoRemindersImg}
                    alt="reminders-and-alerts"
                    className="size-full object-cover"
                  />
                </figure>

                <div className="space-y-1">
                  <h3 className="text-heading-5">Reminders & alerts</h3>
                  <p className="text-background-14/60 line-clamp-1">
                    Send appointment reminders and time-sensitive alerts by SMS the moment they&apos;re
                    due.
                  </p>
                </div>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.2} className="col-span-12 md:col-span-6 lg:col-span-7">
              <div className="h-[425px] rounded-[20px] bg-white p-5 max-xl:space-y-8 lg:p-8 xl:h-[510px]">
                <figure className="h-[265px] w-full max-[376px]:h-[240px] lg:h-[275px] xl:h-[382px]">
                  <Image
                    src={multiStepAutomationImg}
                    alt="two-way-conversations-one-thread"
                    className="size-full object-cover"
                  />
                </figure>

                <div className="space-y-1">
                  <h3 className="text-heading-5">Two-way conversations, one thread</h3>
                  <p className="text-background-14/60">
                    Every reply — SMS, MMS, voice, or WhatsApp — lands in the same conversation,
                    in order.
                  </p>
                </div>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.3} className="col-span-12 md:col-span-6 lg:col-span-7">
              <div className="lp:space-y-4 h-[425px] rounded-[20px] bg-white p-5 lg:p-8 xl:h-[510px]">
                <figure className="h-[325px] w-full lg:h-[288px] xl:h-[372px]">
                  <Image
                    src={scaleWithoutComplexityImg}
                    alt="scale-without-complexity"
                    className="size-full object-cover"
                  />
                </figure>

                <div className="space-y-1">
                  <h3 className="text-heading-5">Scale without complexity</h3>
                  <p className="text-background-14/60 line-clamp-1">
                    Add numbers, channels, and team members as you grow — without extra tools or
                    extra overhead.
                  </p>
                </div>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.4} className="col-span-12 md:col-span-6 lg:col-span-5">
              <div className="space-y-5 lp:space-y-8 h-[425px] rounded-[20px] bg-white p-5 lg:p-8 xl:h-[510px]">
                <figure className="h-[270px] w-full lg:h-[253px] xl:h-[352px]">
                  <Image
                    src={timezoneImg}
                    alt="delivers-at-the-right-local-time"
                    className="size-full object-cover"
                  />
                </figure>

                <div className="space-y-1">
                  <h3 className="text-heading-5">Delivers at the right local time</h3>
                  <p className="text-background-14/60 line-clamp-1">
                    Messages and reminders send at the right local time for every contact,
                    automatically.
                  </p>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
