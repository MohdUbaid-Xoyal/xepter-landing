'use client';

import { ButtonPrimary } from '@/src/components/shared/ui/button';
import { countryOptions, jobFunctionOptions, productInterestOptions } from '@/src/data/contact-content';
import { cn } from '@/src/utils/cn';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState, type SelectHTMLAttributes } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import './phone-input.css';

const inputClass =
  'text-secondary/90 placeholder:text-secondary/60 w-full rounded-md border border-secondary/20 px-4 py-2.5 focus-within:border-secondary/60 focus-within:outline-none';

const Field = ({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) => (
  <fieldset className="space-y-1.5">
    <label htmlFor={id} className="text-tagline-2 text-secondary/90 inline-block font-normal">
      {label}
    </label>
    {children}
  </fieldset>
);

const Select = ({
  className,
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement>) => (
  <div className="relative">
    <select className={cn(inputClass, 'appearance-none pr-10', className)} {...props}>
      {children}
    </select>
    <ChevronDown className="text-secondary/50 pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2" />
  </div>
);

const ContactForm = () => {
  const [phone, setPhone] = useState<string | undefined>();

  return (
    <form
      className="w-full space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field id="firstName" label="First name">
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter your first name"
            className={inputClass}
            required
          />
        </Field>
        <Field id="lastName" label="Last name">
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Enter your last name"
            className={inputClass}
            required
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field id="email" label="Business email">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your business email"
            className={inputClass}
            required
          />
        </Field>
        <Field id="company" label="Company name">
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Enter your company name"
            className={inputClass}
            required
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field id="jobFunction" label="Job function">
          <Select id="jobFunction" name="jobFunction" defaultValue="">
            <option value="" disabled>
              Select your job function
            </option>
            {jobFunctionOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </Field>
        <Field id="productInterest" label="Primary product interest">
          <Select id="productInterest" name="productInterest" defaultValue="">
            <option value="" disabled>
              What are you interested in?
            </option>
            {productInterestOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <Field id="country" label="Country">
        <Select id="country" name="country" defaultValue="">
          <option value="" disabled>
            Select your country
          </option>
          {countryOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
      </Field>

      <Field id="phone" label="Phone number">
        <PhoneInput
          international
          defaultCountry="US"
          id="phone"
          name="phone"
          placeholder="Enter your phone number"
          value={phone}
          onChange={setPhone}
          className="xepter-phone-input"
          numberInputProps={{ className: inputClass }}
        />
      </Field>

      <Field id="message" label="Your message">
        <textarea
          id="message"
          name="message"
          placeholder="Tell us about your needs and timeline"
          className={cn(inputClass, 'h-24')}
        />
      </Field>

      <fieldset className="space-y-2.5 pt-1">
        <label className="flex cursor-pointer items-start gap-2">
          <input type="checkbox" name="requestSpecialist" className="peer sr-only" />
          <span className="relative mt-0.5 size-5 shrink-0 cursor-pointer rounded-[2px] border border-secondary/40 after:absolute after:top-1/2 after:left-1/2 after:size-3 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-[2px] after:bg-secondary/70 after:opacity-0 after:content-[''] peer-checked:border-secondary peer-checked:after:opacity-100" />
          <span className="text-tagline-3 text-secondary/60 peer-checked:text-secondary/90 font-medium select-none">
            Connect me with an expert! I&apos;d like to get more information about Xepter products or see a
            custom demo.
          </span>
        </label>

        <label className="flex cursor-pointer items-start gap-2">
          <input type="checkbox" name="newsletter" className="peer sr-only" />
          <span className="relative mt-0.5 size-5 shrink-0 cursor-pointer rounded-[2px] border border-secondary/40 after:absolute after:top-1/2 after:left-1/2 after:size-3 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-[2px] after:bg-secondary/70 after:opacity-0 after:content-[''] peer-checked:border-secondary peer-checked:after:opacity-100" />
          <span className="text-tagline-3 text-secondary/60 peer-checked:text-secondary/90 font-medium select-none">
            Sign me up for news from Xepter (products, services, blog, and events). I can update my preferences
            or unsubscribe at any time.
          </span>
        </label>
      </fieldset>

      <div className="pt-2">
        <ButtonPrimary
          type="submit"
          className="w-full md:w-auto"
          textClassName="text-center text-nowrap max-sm:flex-1 max-sm:pr-8!"
        >
          Submit
        </ButtonPrimary>
      </div>

      <p className="text-tagline-3 text-secondary/50 pt-1">
        By submitting this form you agree to our{' '}
        <Link href="/privacy-policy" className="text-secondary/70 underline underline-offset-2">
          privacy policy
        </Link>
        . For more information on how your personal data will be processed, please read our{' '}
        <Link href="/privacy-policy" className="text-secondary/70 underline underline-offset-2">
          privacy statement
        </Link>
        . We will not share your information with third parties.
      </p>
    </form>
  );
};

export default ContactForm;
