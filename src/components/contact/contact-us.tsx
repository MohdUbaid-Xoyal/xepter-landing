import contactMapImg from '@/public/images/opai-img-21.webp';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import ContactForm from '@/src/components/contact/contact-form';
import Image from 'next/image';

const ContactUs = () => {
  return (
    <section className="pt-20 md:pt-25 lg:pt-39">
      <div className="main-container">
        <div className="space-y-9 lg:space-y-16 xl:space-y-18">
          <div className="space-y-3 text-center">
            <TextReveal delay={0.1}>
              <h2>We&apos;d love to hear from you</h2>
            </TextReveal>
            <TextReveal delay={0.2}>
              <p className="text-tagline-1 text-secondary/60 mx-auto max-w-[460px]">
                Let&apos;s talk about how Xepter can bring SMS, MMS, voice, and WhatsApp into the
                CRM you already run.
              </p>
            </TextReveal>
          </div>

          <RevealAnimation
            delay={0.1}
            asChild={false}
            className="group relative w-full rounded-2xl bg-[url('/images/opai-img-138.jpg')] bg-cover bg-center bg-no-repeat p-5 md:p-8"
          >
            <div className="relative z-20 space-y-10 rounded-xl bg-white/50 p-5 backdrop-blur-[30px] md:space-y-14 md:p-8 lg:space-y-19">
              <div className="flex flex-col items-center justify-center gap-x-14 gap-y-10 md:flex-row md:gap-y-0">
                <ContactForm />

                <RevealAnimation
                  asChild={false}
                  delay={0.2}
                  className="h-[563px] w-full rounded-[10px] ring-8 ring-white/70"
                >
                  <figure className="relative size-full overflow-hidden rounded-lg">
                    <Image
                      src={contactMapImg}
                      alt="Contact"
                      className="size-full object-cover"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </figure>
                </RevealAnimation>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
