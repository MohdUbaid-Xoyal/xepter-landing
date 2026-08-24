export const privacyPolicyMeta = {
  effectiveDate: 'August 23, 2026',
  company: 'Xepter LLC',
  website: 'https://www.xepter.io',
  contactEmail: 'support@xepter.io',
  phone: '+1 949-393-3901',
  address: ['Xepter LLC', '30 N Gould St, Ste N', 'Sheridan, WY 82801', 'United States'],
};

export interface SummaryPoint {
  question: string;
  answer: string;
}

export const summaryPoints: SummaryPoint[] = [
  {
    question: 'What personal information do we collect?',
    answer:
      'We may collect information that you provide directly to us, information generated when you use our Services, technical and device information, billing information, communications and message-related information, and information obtained from service providers or other lawful sources.',
  },
  {
    question: 'Do we process sensitive personal information?',
    answer:
      'We do not intentionally request sensitive personal information unless it is necessary for a particular service or required by law. You should not use Xepter to transmit sensitive personal information unless such use is expressly permitted under your agreement with Xepter and applicable law.',
  },
  {
    question: 'How do we use personal information?',
    answer:
      'We use personal information to provide and operate our Services, process transactions, provide customer support, maintain security, prevent fraud and abuse, improve our Services, communicate with customers, comply with legal obligations, and enforce our agreements.',
  },
  {
    question: 'Do we share personal information?',
    answer:
      'We may share information with service providers, telecommunications carriers, messaging providers, payment processors, cloud infrastructure providers, analytics providers, professional advisers, government authorities when legally required, and other parties when necessary to provide or protect our Services.',
  },
  {
    question: 'Does Xepter sell personal information?',
    answer: 'We do not sell personal information for monetary consideration in the ordinary course of operating our Services.',
  },
  {
    question: 'How long do we keep information?',
    answer:
      'We retain personal information for as long as reasonably necessary to provide our Services, maintain business and financial records, comply with legal obligations, resolve disputes, prevent fraud, enforce agreements, and protect our legitimate business interests.',
  },
  {
    question: 'What privacy rights do you have?',
    answer:
      'Depending on your location and applicable law, you may have rights to access, correct, delete, restrict, or obtain a copy of your personal information, as well as certain rights concerning targeted advertising, sale or sharing of personal information, and profiling.',
  },
  {
    question: 'How can you exercise your rights?',
    answer: 'You may contact us at support@xepter.io to request access, correction, deletion, or other privacy-related assistance.',
  },
];

export type PolicyBlock =
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'h3'; text: string }
  | { type: 'h4'; text: string };

export interface PolicySection {
  id: string;
  number: number;
  title: string;
  blocks: PolicyBlock[];
}

export const policySections: PolicySection[] = [
  {
    id: 'information-we-collect',
    number: 1,
    title: 'What Information Do We Collect?',
    blocks: [
      { type: 'h3', text: 'Personal Information You Provide to Us' },
      {
        type: 'p',
        text: 'We collect personal information that you voluntarily provide when you register for an account, purchase or use our Services, request information, communicate with us, or otherwise interact with Xepter.',
      },
      { type: 'p', text: 'Depending on how you use our Services, this information may include:' },
      {
        type: 'ul',
        items: [
          'Name',
          'Business or company name',
          'Job title or role',
          'Email address',
          'Telephone or mobile phone number',
          'Business and mailing address',
          'Username',
          'Account credentials',
          'Contact preferences',
          'Authentication information',
          'Billing and payment information',
          'Tax and business information',
          'Customer support communications',
          'Information relating to your Xepter account and Services',
          'API credentials, authentication tokens, and related technical information',
          'Other information you choose to provide to us',
        ],
      },
      { type: 'h3', text: 'Communications and Messaging Information' },
      {
        type: 'p',
        text: 'Because Xepter provides communications and messaging Services, we may process information associated with communications sent or received through our platform. Depending on the Services you use, this may include:',
      },
      {
        type: 'ul',
        items: [
          'Sender and recipient telephone numbers',
          'Phone numbers associated with your account',
          'Message content, MMS media or attachments, and RCS message information',
          'Voice call information, call detail records, and call duration',
          'Date and time of communications',
          'Delivery and failure information',
          'Carrier and routing information',
          'Messaging campaign information',
          'Sender IDs, phone numbers, short codes, toll-free numbers, or other messaging identifiers',
          'IP addresses and technical information associated with API requests',
          'Webhook information',
          'Error and diagnostic information',
          'Other information necessary to route, deliver, monitor, secure, and troubleshoot communications',
        ],
      },
      {
        type: 'p',
        text: 'We process communications information primarily to provide, maintain, secure, troubleshoot, and improve the Services and to comply with applicable laws, regulations, carrier requirements, and contractual obligations.',
      },
      { type: 'p', text: 'Xepter does not use the content of customer communications for advertising purposes.' },
      {
        type: 'p',
        text: 'Customers are responsible for ensuring that their use of Xepter and the communications they send comply with applicable laws, regulations, carrier requirements, consent requirements, and our applicable agreements and acceptable-use requirements.',
      },
      { type: 'h3', text: 'Payment Information' },
      {
        type: 'p',
        text: 'If you purchase Services from us, we or our payment processing providers may collect information necessary to process payments, such as billing name, billing address, payment card information, bank or payment account information, transaction information, invoice information, payment history, and other information necessary to process or verify a transaction.',
      },
      {
        type: 'p',
        text: 'Payment card information may be processed directly by third-party payment processors. Xepter may receive limited payment information, such as card type, last four digits, payment status, transaction identifiers, and billing details.',
      },
      { type: 'h3', text: 'Information Automatically Collected' },
      {
        type: 'p',
        text: 'When you access or use our website, dashboard, APIs, or Services, certain information may be automatically collected, including:',
      },
      {
        type: 'ul',
        items: [
          'IP address, browser type and version, and operating system',
          'Device type, device identifiers, and Internet service provider',
          'Approximate location derived from IP address',
          'Referring and exit pages, and pages or features accessed',
          'Date and time of access, and session information',
          'API request information, usage and performance information, and error logs',
          'Authentication and security logs',
          'Other technical information necessary to operate and secure our Services',
        ],
      },
      { type: 'h3', text: 'Cookies and Similar Technologies' },
      {
        type: 'p',
        text: 'We may use cookies and similar technologies to keep you signed in, maintain account sessions, remember preferences, maintain security, analyze website traffic and usage, understand how our Services are used, improve website functionality, and support marketing activities where permitted by law.',
      },
      {
        type: 'p',
        text: 'You may configure your browser to refuse or delete cookies. Some features of our Services may not function properly if cookies are disabled.',
      },
    ],
  },
  {
    id: 'how-we-process',
    number: 2,
    title: 'How Do We Process Your Information?',
    blocks: [
      {
        type: 'p',
        text: 'We process personal information for legitimate business purposes and, where applicable, based on your consent or another lawful basis. We may process your information to:',
      },
      {
        type: 'ul',
        items: [
          'Provide and operate the Services — create and manage accounts, authenticate users, process API requests, route communications, deliver messages and calls, provide dashboards and reporting, process transactions, and otherwise provide the Services you request.',
          'Facilitate communications — process sender, recipient, message, call, routing, delivery, and related technical information to facilitate communications through our platform.',
          'Provide customer support — respond to inquiries, troubleshoot technical problems, investigate service issues, and provide customer support.',
          'Process payments — process purchases, subscriptions, invoices, refunds, credits, and other financial transactions.',
          'Maintain security — detect, investigate, prevent, and respond to fraud, abuse, unauthorized access, security incidents, spam, malicious activity, and other threats.',
          'Prevent misuse of our Services — analyze account activity, messaging activity, API activity, traffic patterns, and other information to identify prohibited, fraudulent, abusive, or unlawful use.',
          'Improve our Services — analyze aggregated or appropriately de-identified information to understand usage patterns, troubleshoot problems, develop features, improve performance, and enhance our Services.',
          'Communicate with you — send administrative communications regarding your account, transactions, security, billing, service updates, policy changes, and other information relating to the Services. Where permitted by law, we may also send marketing communications.',
          'Comply with legal obligations — comply with applicable laws, regulations, legal processes, court orders, government requests, telecommunications requirements, carrier rules, and regulatory obligations.',
          'Enforce our rights — establish, exercise, or defend legal claims, enforce our agreements, collect amounts owed, investigate violations, and protect Xepter, our customers, users, and other parties.',
        ],
      },
    ],
  },
  {
    id: 'sharing-information',
    number: 3,
    title: 'When and With Whom Do We Share Your Personal Information?',
    blocks: [
      { type: 'p', text: 'We may disclose personal information in the following circumstances.' },
      {
        type: 'ul',
        items: [
          'Service Providers — cloud hosting and infrastructure, database and storage, telecommunications and carrier connectivity, SMS/MMS/RCS and voice delivery, payment processing, fraud prevention, authentication, customer support, analytics, monitoring and logging, email delivery, security, data backup, and professional services.',
          'Telecommunications Carriers and Communication Providers — telephone numbers, message content, media, call information, routing information, delivery information, and other information necessary to complete or support communications.',
          'Payment Providers — information necessary to process payments, prevent fraud, verify transactions, and manage billing.',
          'Business Transfers — information may be transferred in connection with a merger, acquisition, financing, reorganization, bankruptcy, sale of assets, or other business transaction.',
          'Legal Requirements — information may be disclosed to comply with applicable law, legal process, governmental or regulatory requests, protect rights or safety, investigate fraud or security incidents, enforce agreements, or prevent harmful activity.',
          'With Your Consent — information may be disclosed with your consent or at your direction.',
        ],
      },
      {
        type: 'p',
        text: 'Our service providers are generally permitted to process personal information only as necessary to provide services to us or as otherwise permitted by applicable law. Such providers may process information under their own privacy policies and applicable legal and regulatory requirements.',
      },
    ],
  },
  {
    id: 'customer-content',
    number: 4,
    title: 'Customer Content and Customer Responsibilities',
    blocks: [
      { type: 'p', text: 'Xepter is primarily a business-to-business communications platform.' },
      {
        type: 'p',
        text: 'When a business customer uses Xepter to send or receive communications, the customer may provide information relating to its own customers, employees, users, contacts, or other individuals.',
      },
      {
        type: 'p',
        text: "Depending on the circumstances, the Xepter customer may act as the data controller/business and Xepter may act as a service provider, processor, or other regulated role under applicable privacy law.",
      },
      { type: 'p', text: 'Customers are responsible for:' },
      {
        type: 'ul',
        items: [
          'Providing appropriate privacy notices to their users and contacts',
          'Obtaining required consents',
          'Complying with applicable telecommunications and privacy laws',
          'Complying with applicable SMS/MMS/RCS/voice requirements',
          'Maintaining appropriate records of consent where required',
          'Using Xepter only for lawful purposes',
          'Responding to privacy requests from their own customers when required',
        ],
      },
      {
        type: 'p',
        text: "Where applicable, Xepter's processing of customer data may also be governed by a separate agreement, Data Processing Addendum (\"DPA\"), or other contractual terms.",
      },
    ],
  },
  {
    id: 'third-party-services',
    number: 5,
    title: 'How Do We Handle Third-Party Services and Logins?',
    blocks: [
      { type: 'p', text: 'Our Services may contain links to third-party websites, services, integrations, or applications.' },
      {
        type: 'p',
        text: 'If you choose to connect Xepter with a third-party service, such as a CRM, payment provider, authentication provider, or other integration, that third party may receive or process information in accordance with its own privacy policy.',
      },
      { type: 'p', text: 'Xepter does not control the privacy practices of third-party services.' },
      { type: 'p', text: 'We encourage you to review the privacy policies of third-party services before providing information to them.' },
    ],
  },
  {
    id: 'retention',
    number: 6,
    title: 'How Long Do We Keep Your Information?',
    blocks: [
      {
        type: 'p',
        text: 'We retain personal information only for as long as reasonably necessary for the purposes described in this Privacy Policy, unless a longer retention period is required or permitted by applicable law.',
      },
      { type: 'p', text: 'The length of time we retain information depends on factors such as:' },
      {
        type: 'ul',
        items: [
          'The type of information',
          'The nature of the Services',
          'Whether your account remains active',
          'Legal and regulatory requirements',
          'Accounting and tax requirements',
          'Security and fraud-prevention needs',
          'Dispute resolution',
          'Enforcement of agreements',
          'Legitimate business requirements',
        ],
      },
      { type: 'p', text: 'When information is no longer required, we may delete, anonymize, aggregate, or securely archive it.' },
      { type: 'p', text: 'Some information may remain in backup systems for a limited period after deletion from active systems.' },
      {
        type: 'p',
        text: 'We may retain certain information after account termination where necessary to comply with legal obligations, prevent fraud or abuse, resolve disputes, enforce agreements, or protect our legal rights.',
      },
    ],
  },
  {
    id: 'security',
    number: 7,
    title: 'How Do We Keep Your Information Safe?',
    blocks: [
      {
        type: 'p',
        text: 'We maintain reasonable technical, administrative, and organizational safeguards designed to protect personal information against unauthorized access, disclosure, alteration, or destruction.',
      },
      { type: 'p', text: 'Security measures may include:' },
      {
        type: 'ul',
        items: [
          'Access controls',
          'Authentication mechanisms',
          'Encryption in transit where appropriate',
          'Encryption or other protections for stored information where appropriate',
          'Monitoring and logging',
          'Security testing',
          'Infrastructure controls',
          'Backup and recovery procedures',
          'Employee and contractor access restrictions',
          'Incident response procedures',
        ],
      },
      {
        type: 'p',
        text: 'However, no electronic transmission over the Internet or information storage system can be guaranteed to be completely secure. Accordingly, while we take reasonable measures to protect personal information, we cannot guarantee that information will always be completely secure.',
      },
      {
        type: 'p',
        text: 'You are responsible for protecting your account credentials, API keys, passwords, and other authentication information.',
      },
    ],
  },
  {
    id: 'minors',
    number: 8,
    title: 'Do We Collect Information From Minors?',
    blocks: [
      { type: 'p', text: 'Our Services are intended for businesses and individuals who are at least 18 years old.' },
      {
        type: 'p',
        text: 'We do not knowingly collect personal information directly from children under 18 for the purpose of creating accounts or providing our Services.',
      },
      {
        type: 'p',
        text: 'If we learn that we have collected personal information from a child under 18 without appropriate authorization, we will take reasonable steps to delete the information as required by applicable law.',
      },
      { type: 'p', text: 'If you believe that a child has provided personal information to us, please contact us at support@xepter.io.' },
    ],
  },
  {
    id: 'privacy-rights',
    number: 9,
    title: 'What Are Your Privacy Rights?',
    blocks: [
      {
        type: 'p',
        text: 'Depending on where you live and the applicable law, you may have certain rights concerning your personal information. These may include the right to:',
      },
      {
        type: 'ul',
        items: [
          'Know whether we process your personal information',
          'Access personal information we maintain about you',
          'Correct inaccurate personal information',
          'Request deletion of personal information',
          'Request a copy of personal information',
          'Restrict or object to certain processing',
          'Withdraw consent where processing is based on consent',
          'Opt out of certain forms of targeted advertising',
          'Opt out of the sale or sharing of personal information where applicable',
          'Request information regarding categories of personal information collected or disclosed',
          'Appeal a decision regarding a privacy request where required by law',
        ],
      },
      { type: 'p', text: 'These rights are not absolute and may be subject to exceptions and limitations under applicable law.' },
    ],
  },
  {
    id: 'withdrawing-consent',
    number: 10,
    title: 'Withdrawing Consent',
    blocks: [
      {
        type: 'p',
        text: 'Where we process personal information based on your consent, you may withdraw that consent at any time by contacting us.',
      },
      { type: 'p', text: 'Withdrawal of consent does not affect the lawfulness of processing that occurred before consent was withdrawn.' },
      {
        type: 'p',
        text: 'We may continue processing information when permitted or required under another lawful basis, such as to provide contracted Services, comply with legal obligations, prevent fraud, or protect our legitimate interests.',
      },
    ],
  },
  {
    id: 'account-information',
    number: 11,
    title: 'Account Information',
    blocks: [
      { type: 'p', text: 'You may review or update certain information associated with your Xepter account through your account settings.' },
      { type: 'p', text: 'You may also contact us to request assistance with your account information.' },
      {
        type: 'p',
        text: 'If you request termination of your account, we may deactivate or delete your account and associated information from active systems, subject to applicable legal, contractual, security, financial, and operational requirements.',
      },
    ],
  },
  {
    id: 'do-not-track',
    number: 12,
    title: 'Do-Not-Track Signals',
    blocks: [
      { type: 'p', text: 'Some browsers and devices provide a "Do Not Track" ("DNT") signal.' },
      {
        type: 'p',
        text: 'Because there is currently no universally accepted standard for responding to DNT signals, Xepter may not respond to DNT signals unless required by applicable law.',
      },
      {
        type: 'p',
        text: 'Where required by applicable law, we will honor recognized privacy preference signals in accordance with applicable requirements.',
      },
    ],
  },
  {
    id: 'us-privacy-rights',
    number: 13,
    title: 'United States Privacy Rights',
    blocks: [
      {
        type: 'p',
        text: 'Certain U.S. states have enacted comprehensive consumer privacy laws that may provide residents with additional rights.',
      },
      {
        type: 'p',
        text: 'Depending on the applicable law and whether Xepter is subject to that law, residents may have rights concerning access, correction, deletion, portability, and opting out of certain processing activities.',
      },
      { type: 'p', text: 'These rights may apply differently depending on:' },
      {
        type: 'ul',
        items: [
          'Your state of residence',
          'Whether you are acting in an individual or business capacity',
          'The nature and volume of personal information processed',
          'Whether statutory thresholds are met',
          'Applicable exemptions',
        ],
      },
      { type: 'p', text: 'We may collect categories of personal information that include:' },
      { type: 'h4', text: 'A. Identifiers' },
      { type: 'p', text: 'Name; email address; telephone number; postal address; online identifier; IP address; account identifier.' },
      { type: 'h4', text: 'B. Customer Records Information' },
      { type: 'p', text: 'Name; contact information; business information; billing information; account information.' },
      { type: 'h4', text: 'C. Commercial Information' },
      { type: 'p', text: 'Purchase history; subscription information; service usage; billing history; transaction information.' },
      { type: 'h4', text: 'D. Internet or Network Activity' },
      { type: 'p', text: 'IP address; browser information; device information; website interactions; API activity; service usage information.' },
      { type: 'h4', text: 'E. Geolocation Information' },
      { type: 'p', text: 'We may collect approximate location information derived from IP addresses or similar technical information.' },
      { type: 'h4', text: 'F. Professional or Employment Information' },
      { type: 'p', text: 'Company; job title; business contact information.' },
      { type: 'h4', text: 'G. Communications Information' },
      {
        type: 'p',
        text: 'Telephone numbers; message metadata; call information; communications content; delivery information; routing information.',
      },
      { type: 'h4', text: 'H. Inferences' },
      {
        type: 'p',
        text: 'We may generate limited inferences from information collected for purposes such as security, fraud prevention, service optimization, or understanding usage patterns. We do not intentionally create profiles for purposes that produce legal or similarly significant effects unless permitted by applicable law.',
      },
    ],
  },
  {
    id: 'california',
    number: 14,
    title: 'California Residents',
    blocks: [
      {
        type: 'p',
        text: 'This section applies to California residents to the extent required by the California Consumer Privacy Act ("CCPA"), as amended, and other applicable California privacy laws.',
      },
      { type: 'p', text: 'Subject to applicable limitations and exemptions, California residents may have rights including:' },
      {
        type: 'ul',
        items: [
          'Right to know/access personal information',
          'Right to correct inaccurate personal information',
          'Right to delete personal information',
          'Right to data portability',
          'Right to opt out of the sale or sharing of personal information',
          'Right to limit certain uses and disclosures of sensitive personal information where applicable',
          'Right to non-discrimination for exercising privacy rights',
          'Right to appeal certain decisions concerning privacy requests',
        ],
      },
      { type: 'h4', text: 'Sale and Sharing' },
      {
        type: 'p',
        text: 'Xepter does not sell personal information for monetary consideration in the ordinary course of its business. We also do not intentionally share personal information for cross-context behavioral advertising unless permitted by applicable law and subject to applicable consumer rights.',
      },
      { type: 'h4', text: 'California Shine the Light' },
      {
        type: 'p',
        text: 'California residents may have rights under California Civil Code Section 1798.83 concerning certain disclosures of personal information for direct marketing purposes.',
      },
      { type: 'p', text: 'To submit a privacy request, contact: support@xepter.io' },
    ],
  },
  {
    id: 'colorado',
    number: 15,
    title: 'Colorado Residents',
    blocks: [
      { type: 'p', text: 'Colorado residents may have rights under the Colorado Privacy Act, where applicable. These rights may include:' },
      {
        type: 'ul',
        items: [
          'Right to access personal data',
          'Right to correct inaccuracies',
          'Right to delete personal data',
          'Right to obtain a portable copy of personal data',
          'Right to opt out of targeted advertising',
          'Right to opt out of the sale of personal data',
          'Right to opt out of certain profiling activities',
        ],
      },
      { type: 'p', text: 'If we deny a privacy request where an appeal is required, you may contact us to appeal the decision.' },
    ],
  },
  {
    id: 'connecticut',
    number: 16,
    title: 'Connecticut Residents',
    blocks: [
      {
        type: 'p',
        text: 'Connecticut residents may have rights under the Connecticut Data Privacy Act, where applicable. These rights may include:',
      },
      {
        type: 'ul',
        items: [
          'Right to access personal data',
          'Right to correct inaccurate personal data',
          'Right to delete personal data',
          'Right to obtain a copy of personal data',
          'Right to opt out of targeted advertising',
          'Right to opt out of the sale of personal data',
          'Right to opt out of certain profiling activities',
        ],
      },
      { type: 'p', text: 'If we deny a privacy request where an appeal is required, you may contact us to appeal the decision.' },
    ],
  },
  {
    id: 'virginia',
    number: 17,
    title: 'Virginia Residents',
    blocks: [
      {
        type: 'p',
        text: 'Virginia residents may have rights under the Virginia Consumer Data Protection Act ("VCDPA"), where applicable. These rights may include:',
      },
      {
        type: 'ul',
        items: [
          'Right to confirm whether personal data is being processed',
          'Right to access personal data',
          'Right to correct inaccuracies',
          'Right to delete personal data',
          'Right to obtain a copy of personal data',
          'Right to opt out of targeted advertising',
          'Right to opt out of the sale of personal data',
          'Right to opt out of certain profiling activities',
        ],
      },
      { type: 'p', text: 'If we deny a privacy request where an appeal is required, you may contact us to appeal the decision.' },
    ],
  },
  {
    id: 'verification',
    number: 18,
    title: 'Verification of Privacy Requests',
    blocks: [
      { type: 'p', text: 'To protect personal information, we may need to verify your identity before processing certain requests.' },
      {
        type: 'p',
        text: 'Depending on the request and the information available to us, we may ask you to provide information that allows us to reasonably verify that you are the individual associated with the information.',
      },
      { type: 'p', text: 'We will use information provided for verification only as reasonably necessary to process and protect your privacy request.' },
      { type: 'p', text: 'If you submit a request through an authorized agent, we may require proof that the agent is authorized to act on your behalf.' },
    ],
  },
  {
    id: 'response-to-requests',
    number: 19,
    title: 'Response to Privacy Requests',
    blocks: [
      { type: 'p', text: 'We will process privacy requests in accordance with applicable law.' },
      { type: 'p', text: 'Where applicable law establishes a specific response period, we will respond within the period required by that law.' },
      {
        type: 'p',
        text: 'If additional time is permitted and reasonably necessary, we may extend the response period as permitted by applicable law and will provide notice where required.',
      },
      { type: 'p', text: 'If we decline your request, we will explain the reason where required by law and provide appeal rights where applicable.' },
    ],
  },
  {
    id: 'international-users',
    number: 20,
    title: 'International Users',
    blocks: [
      {
        type: 'p',
        text: 'Xepter is a U.S.-based company and our Services may be provided using infrastructure and service providers located in the United States and other countries.',
      },
      {
        type: 'p',
        text: 'If you access or use our Services from outside the United States, your information may be transferred to, stored in, or processed in the United States or other jurisdictions.',
      },
      { type: 'p', text: 'Privacy laws in those jurisdictions may differ from the laws of your country or region.' },
      {
        type: 'p',
        text: 'By using our Services, you acknowledge that your information may be processed in jurisdictions outside your country of residence, subject to applicable legal requirements.',
      },
      {
        type: 'p',
        text: 'Where required by applicable law, we will implement appropriate safeguards for international transfers of personal information.',
      },
    ],
  },
  {
    id: 'third-party-websites',
    number: 21,
    title: 'Third-Party Websites and Services',
    blocks: [
      { type: 'p', text: 'Our Services may contain links to websites, applications, integrations, or services operated by third parties.' },
      { type: 'p', text: 'We are not responsible for the privacy practices, content, or security of third-party services.' },
      { type: 'p', text: 'We encourage you to review the privacy policies of third parties before providing them with personal information.' },
    ],
  },
  {
    id: 'changes-to-policy',
    number: 22,
    title: 'Changes to This Privacy Policy',
    blocks: [
      { type: 'p', text: 'We may update this Privacy Policy from time to time to reflect:' },
      {
        type: 'ul',
        items: [
          'Changes to our Services',
          'Changes to our business practices',
          'Changes to applicable laws',
          'Changes to regulatory requirements',
          'Changes to technology',
          'Other operational or legal considerations',
        ],
      },
      {
        type: 'p',
        text: 'When we update this Privacy Policy, we will update the "Last Updated and Effective Date" shown at the beginning of this document.',
      },
      {
        type: 'p',
        text: 'If we make material changes, we may provide additional notice where required by applicable law, including by posting a notice on our website, notifying you through your account, or sending an email.',
      },
      { type: 'p', text: 'We encourage you to periodically review this Privacy Policy.' },
    ],
  },
  {
    id: 'contact-about-policy',
    number: 23,
    title: 'How Can You Contact Us About This Privacy Policy?',
    blocks: [
      {
        type: 'p',
        text: 'If you have questions, concerns, comments, or requests regarding this Privacy Policy or our privacy practices, you may contact us using the information below.',
      },
      {
        type: 'ul',
        items: [
          'Xepter LLC',
          '30 N Gould St, Ste N, Sheridan, WY 82801, United States',
          'Email: support@xepter.io',
          'Phone: +1 949-393-3901',
          'Website: https://www.xepter.io',
        ],
      },
    ],
  },
  {
    id: 'review-update-delete',
    number: 24,
    title: 'How Can You Review, Update, or Delete Your Personal Information?',
    blocks: [
      {
        type: 'p',
        text: 'Depending on applicable law, you may request to access, correct, update, or delete personal information that Xepter maintains about you.',
      },
      { type: 'p', text: 'To submit a privacy request, please contact us. Please include sufficient information to allow us to understand and process your request.' },
      { type: 'p', text: 'For security purposes, we may need to verify your identity before completing certain requests.' },
      { type: 'p', text: 'We will process your request in accordance with applicable privacy laws and our legal and contractual obligations.' },
      { type: 'ul', items: ['Email: support@xepter.io', 'Phone: +1 949-393-3901'] },
    ],
  },
];
