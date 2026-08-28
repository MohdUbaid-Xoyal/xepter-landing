import RevealAnimation from '@/src/components/animation/reveal-animation';
import ContactForm from '@/src/components/contact/contact-form';
import ContactInfoPanel from '@/src/components/contact/contact-info-panel';

const ContactUs = () => {
  return (
    <section className="pb-10 md:pb-14 lg:pb-16">
      <div className="main-container">
        <div className="grid grid-cols-12 items-start gap-5 lg:gap-6">
          <ContactInfoPanel />

          <RevealAnimation asChild={false} delay={0.2} className="col-span-12 lg:col-span-7 lg:col-start-6">
            <div className="shadow-1 h-[948px] overflow-hidden rounded-[20px] bg-white">
              <ContactForm />
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
