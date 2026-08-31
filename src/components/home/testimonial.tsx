import slideImg8 from '@/public/images/xepter-testimonial-whatsapp-channel.webp';
import avatar3 from '@/public/images/xepter-customer-avatar-2.webp';
import slideImg2 from '@/public/images/xepter-testimonial-agency-numbers.webp';
import slideImg3 from '@/public/images/xepter-testimonial-hubspot-integration.webp';
import slideImg4 from '@/public/images/xepter-testimonial-support-team.webp';
import slideImg5 from '@/public/images/xepter-testimonial-appointment-reminders.webp';
import { default as avatar1, default as slideImg6 } from '@/public/images/xepter-testimonial-10dlc-compliance.webp';
import { default as avatar2, default as slideImg7 } from '@/public/images/xepter-testimonial-voice-dialer.webp';
import slideImg1 from '@/public/images/xepter-testimonial-unified-inbox.webp';
import CounterNumberOnScroll from '@/src/components/animation/counter-number-on-scroll';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import {
  SlideContent,
  SlideImg,
  SlideItem,
  SlideNavigation,
  SlideNext,
  SlidePrev,
  SplitSlide,
} from '@/src/components/animation/split-slide';
import { ArrowDotLeftIcon, ArrowDotRightIcon, StarIcon } from '@/src/components/shared/icon';
import AvatarItem from '@/src/components/shared/ui/avatar-reveal/avatar-item';
import AvatarReveal from '@/src/components/shared/ui/avatar-reveal/avatar-reveal';
import Image from 'next/image';

const Testimonial = () => {
  return (
    <section className="pt-12 md:pt-16 lg:pt-20">
      <div className="main-container">
        <div className="grid grid-cols-12 items-start justify-center gap-x-5 gap-y-5 lg:gap-y-0 xl:gap-x-14">
          <div className="col-span-12 lg:col-span-4">
            <div className="flex h-[300px] flex-col items-center justify-between lg:h-[355px]">
              <div className="flex flex-row items-center gap-x-4 gap-y-4 md:flex-col lg:flex-row lg:gap-y-0">
                <div className="flex items-center -space-x-4">
                  <AvatarReveal
                    className="flex items-center justify-center -space-x-3.5"
                    direction="left"
                    offset={50}
                    stagger={0.1}
                  >
                    {[avatar1, avatar2, avatar3].map((avatar, index) => (
                      <AvatarItem
                        key={avatar.src}
                        className="outline-background-2 size-11 overflow-hidden rounded-full outline-2"
                      >
                        <Image
                          src={avatar}
                          alt="Xepter customer avatar"
                          className="size-full rounded-full object-cover"
                        />
                      </AvatarItem>
                    ))}
                    <AvatarItem className="font-inter-tight text-tagline-3 text-secondary flex size-11 items-center justify-center rounded-full bg-white font-normal">
                      +243
                    </AvatarItem>
                  </AvatarReveal>
                </div>

                <RevealAnimation delay={0.5} direction="right" offset={50}>
                  <div>
                    <span className="flex items-center justify-start gap-x-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <StarIcon key={i} className="fill-primary-500 size-4" />
                      ))}
                    </span>
                    <p className="text-background-14/60 text-tagline-2">
                      Trusted by teams on <CounterNumberOnScroll value={4} /> channels
                    </p>
                  </div>
                </RevealAnimation>
              </div>

              <div className="w-full space-y-4">
                <RevealAnimation
                  asChild={false}
                  delay={0.4}
                  className="w-full rounded-xl bg-white p-4 text-center"
                >
                  <p className="text-tagline-3">Message Delivery Rate</p>
                  <div className="text-secondary font-medium">
                    <CounterNumberOnScroll value={99} duration={1.2} />%
                  </div>
                </RevealAnimation>

                <div className="flex items-center gap-x-4">
                  <RevealAnimation
                    asChild={false}
                    delay={0.5}
                    className="w-1/2 rounded-xl bg-white p-4 text-center"
                  >
                    <p className="text-tagline-3">Platform Uptime</p>
                    <div className="text-secondary font-medium">
                      <CounterNumberOnScroll value={99} duration={1.2} />%
                    </div>
                  </RevealAnimation>

                  <RevealAnimation
                    asChild={false}
                    delay={0.6}
                    className="w-1/2 rounded-xl bg-white p-4 text-center"
                  >
                    <p className="text-tagline-3">CRM Setup Time</p>
                    <div className="text-secondary font-medium">
                      &lt;<CounterNumberOnScroll value={10} duration={1.2} />m
                    </div>
                  </RevealAnimation>
                </div>
              </div>
            </div>
          </div>

          <RevealAnimation delay={0.6}>
            <div className="col-span-12 lg:col-span-8">
              <SplitSlide>
                <SlideItem>
                  <SlideImg src={slideImg1} alt="Xepter customer testimonial — unified SMS, calls, and WhatsApp inbox" />
                  <SlideContent>
                    <p className="text-secondary">
                      &ldquo;Before Xepter, our SMS, calls, and WhatsApp all lived in different
                      apps.
                      <span className="mt-5 inline-block">
                        Now every reply lands in the same conversation inside GoHighLevel, and
                        nothing gets missed between channels.&rdquo;
                      </span>
                    </p>
                  </SlideContent>
                </SlideItem>

                <SlideItem>
                  <SlideImg src={slideImg2} alt="Xepter customer testimonial — per-client agency numbers" />
                  <SlideContent>
                    <p className="text-secondary">
                      &ldquo;We run every client account on its own number now, without
                      juggling separate messaging tools per client.
                      <span className="mt-5 inline-block">
                        Campaigns, templates, and delivery tracking all live inside the CRM we
                        already run for them.&rdquo;
                      </span>
                    </p>
                  </SlideContent>
                </SlideItem>

                <SlideItem>
                  <SlideImg src={slideImg3} alt="Xepter customer testimonial — HubSpot integration" />
                  <SlideContent>
                    <p className="text-secondary">
                      &ldquo;Connecting Xepter to HubSpot took an afternoon, not a sprint.
                      <span className="mt-5 inline-block">
                        Webhooks keep delivery status and replies in sync, so support and sales
                        always see the same conversation history.&rdquo;
                      </span>
                    </p>
                  </SlideContent>
                </SlideItem>

                <SlideItem>
                  <SlideImg src={slideImg4} alt="Xepter customer testimonial — unified support team tools" />
                  <SlideContent>
                    <p className="text-secondary">
                      &ldquo;Our support team stopped switching tabs between a dialer, a texting
                      app, and our CRM.
                      <span className="mt-5 inline-block">
                        Calls, SMS, and WhatsApp all show up in the same place now, with full
                        context on every contact.&rdquo;
                      </span>
                    </p>
                  </SlideContent>
                </SlideItem>

                <SlideItem>
                  <SlideImg src={slideImg5} alt="Xepter customer testimonial — automated SMS appointment reminders" />
                  <SlideContent>
                    <p className="text-secondary">
                      &ldquo;Appointment reminders used to slip through the cracks in spreadsheets.
                      <span className="mt-5 inline-block">
                        Now they go out by SMS automatically, and we can see delivery status for
                        every message we send.&rdquo;
                      </span>
                    </p>
                  </SlideContent>
                </SlideItem>

                <SlideItem>
                  <SlideImg src={slideImg6} alt="Xepter customer testimonial — 10DLC compliance handled automatically" />
                  <SlideContent>
                    <p className="text-secondary">
                      &ldquo;10DLC compliance was the part we dreaded most about scaling our SMS
                      program.
                      <span className="mt-5 inline-block">
                        Xepter handled brand and campaign registration for us, so our traffic
                        stayed deliverable from day one.&rdquo;
                      </span>
                    </p>
                  </SlideContent>
                </SlideItem>

                <SlideItem>
                  <SlideImg src={slideImg7} alt="Xepter customer testimonial — browser-based voice dialer" />
                  <SlideContent>
                    <p className="text-secondary">
                      &ldquo;Our sales team dials straight from the browser now, with hold,
                      transfer, and conferencing built in.
                      <span className="mt-5 inline-block">
                        Every call logs back to the contact automatically, so nothing depends on
                        someone remembering to write it down.&rdquo;
                      </span>
                    </p>
                  </SlideContent>
                </SlideItem>

                <SlideItem>
                  <SlideImg src={slideImg8} alt="Xepter customer testimonial — WhatsApp added as a messaging channel" />
                  <SlideContent>
                    <p className="text-secondary">
                      &ldquo;Adding WhatsApp used to mean a whole new tool and a whole new login.
                      <span className="mt-5 inline-block">
                        With Xepter it just showed up as another channel in the same inbox our
                        team already used every day.&rdquo;
                      </span>
                    </p>
                  </SlideContent>
                </SlideItem>

                {/* upper md  */}
                <SlideNavigation className="absolute right-5 bottom-10 z-20 mx-auto mt-6 hidden w-full max-w-[180px] max-[376px]:max-w-[140px] md:flex md:max-w-[220px] lg:max-w-[300px] xl:max-w-[446px]">
                  <SlidePrev>
                    <button type="button" aria-label="Previous testimonial">
                      <ArrowDotLeftIcon className="fill-secondary group-hover:fill-accent size-6 transition-colors duration-500" />
                    </button>
                  </SlidePrev>
                  <SlideNext>
                    <button type="button" aria-label="Next testimonial">
                      <ArrowDotRightIcon className="fill-secondary group-hover:fill-accent size-6 transition-colors duration-500" />
                    </button>
                  </SlideNext>
                </SlideNavigation>

                {/* lower md and below */}
                <SlideNavigation className="mx-auto mt-6 flex w-[220px] md:hidden">
                  <SlidePrev>
                    <button type="button" aria-label="Previous testimonial">
                      <ArrowDotLeftIcon className="fill-secondary group-hover:fill-accent size-6 transition-colors duration-500" />
                    </button>
                  </SlidePrev>
                  <SlideNext>
                    <button type="button" aria-label="Next testimonial">
                      <ArrowDotRightIcon className="fill-secondary group-hover:fill-accent size-6 transition-colors duration-500" />
                    </button>
                  </SlideNext>
                </SlideNavigation>
              </SplitSlide>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
