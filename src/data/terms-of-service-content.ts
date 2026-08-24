export const termsMeta = {
  effectiveDate: 'August 23, 2026',
  company: 'Xepter LLC',
  website: 'https://www.xepter.io',
  contactEmail: 'support@xepter.io',
  phone: '+1 949-393-3901',
  address: ['Xepter LLC', '30 N Gould St, Ste N', 'Sheridan, WY 82801', 'United States'],
};

export type TermsBlock =
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'h3'; text: string }
  | { type: 'h4'; text: string };

export interface TermsSection {
  id: string;
  number: number;
  title: string;
  blocks: TermsBlock[];
}

export const termsSections: TermsSection[] = [
  {
    id: 'definitions-reference',
    number: 1,
    title: 'Definitions',
    blocks: [
      {
        type: 'p',
        text: 'Capitalized terms not defined in this Agreement have the meanings given in Exhibit A — Definitions, attached hereto and incorporated by reference.',
      },
    ],
  },
  {
    id: 'ordering-and-term',
    number: 2,
    title: 'Ordering and Term',
    blocks: [
      { type: 'h4', text: 'A. Ordering Services' },
      {
        type: 'p',
        text: 'CUSTOMER may order Services through the Xepter website, administrative portal, dashboard, written proposal, Order Form, or other ordering mechanism designated by Xepter. Each Order will identify the Services requested, applicable pricing, scheduled Start Date, and any products, software, phone numbers, licenses, or other Services provided to CUSTOMER.',
      },
      {
        type: 'p',
        text: 'An Order becomes binding when accepted by CUSTOMER and Xepter. All Orders and amendments accepted by Xepter are subject to this Agreement.',
      },
      { type: 'h4', text: 'B. Service Descriptions' },
      {
        type: 'p',
        text: 'Xepter provides cloud-based business communications services that may include SMS, MMS, RCS, voice, calling, phone numbers, APIs, web applications, messaging tools, reporting, webhooks, integrations, and related communication capabilities.',
      },
      { type: 'h4', text: 'C. Equipment' },
      {
        type: 'p',
        text: 'If Xepter provides or arranges equipment or devices for use with the Services, such equipment may be subject to additional terms, charges, licenses, or Service Attachments.',
      },
      { type: 'h4', text: 'D. Term of this Agreement' },
      {
        type: 'p',
        text: 'The term begins on the Effective Date and continues until the last applicable Order is terminated or expires, unless terminated earlier under this Agreement.',
      },
      { type: 'h4', text: 'E. Services Term and Automatic Renewal' },
      {
        type: 'p',
        text: 'The Services Term begins on the Start Date identified in the applicable Order and continues for the initial term stated in that Order. Unless otherwise stated in the applicable Order, recurring Services may automatically renew for successive periods of the same length unless either Party provides written notice of non-renewal at least thirty (30) days before expiration.',
      },
    ],
  },
  {
    id: 'invoicing-and-payment',
    number: 3,
    title: 'Invoicing and Payment',
    blocks: [
      { type: 'h4', text: 'A. Prices and Charges' },
      {
        type: 'p',
        text: 'All prices are identified in U.S. dollars on the Xepter website, dashboard, Order Form, or written proposal. Additional charges may result from additional features, usage, phone numbers, overages, or other Services.',
      },
      {
        type: 'p',
        text: 'CUSTOMER is responsible for all charges resulting from use of the Services on its Account, including use by End Users, agents, employees, contractors, integrations, APIs, or other users.',
      },
      { type: 'h4', text: 'B. Billing and Payment' },
      {
        type: 'p',
        text: 'CUSTOMER authorizes Xepter and its designated payment processor to charge the payment method associated with the Account for recurring charges, usage charges, additional Services, overages, taxes, and other amounts due.',
      },
      {
        type: 'p',
        text: 'If a payment method fails, Xepter may notify CUSTOMER, retry payment, suspend or restrict Services, require another payment method, or exercise other rights available under this Agreement or law.',
      },
      { type: 'h4', text: 'C. Taxes' },
      {
        type: 'p',
        text: "All rates, fees, and charges are exclusive of applicable taxes unless expressly stated otherwise. CUSTOMER is responsible for applicable sales, use, telecommunications, regulatory, universal service, emergency-services, withholding, and other taxes or government-imposed charges associated with the Services, except taxes imposed on Xepter's net income.",
      },
      { type: 'h4', text: 'D. Billing Disputes' },
      {
        type: 'p',
        text: 'If CUSTOMER reasonably and in good faith disputes any charge, CUSTOMER must provide written notice within thirty (30) days of the charge date identifying the disputed amount and reason.',
      },
    ],
  },
  {
    id: 'provision-of-service',
    number: 4,
    title: 'Provision of the Service',
    blocks: [
      { type: 'h4', text: 'A. General Terms' },
      {
        type: 'p',
        text: "Xepter will provide the Services described in the applicable Order and/or Service Attachment. Xepter may enhance, replace, modify, or discontinue features from time to time, including where required by law, carriers, regulators, suppliers, security requirements, or circumstances outside Xepter's reasonable control.",
      },
      { type: 'h4', text: 'B. Customer Care' },
      {
        type: 'p',
        text: 'CUSTOMER is responsible for first-tier support to its End Users. Xepter will provide customer support through the support channels and hours communicated by Xepter. Support does not include legal, regulatory, compliance, consent-management, or professional advice.',
      },
    ],
  },
  {
    id: 'use-of-service',
    number: 5,
    title: 'Use of the Service',
    blocks: [
      { type: 'h4', text: 'A. Service Requirements' },
      {
        type: 'p',
        text: "The Services may depend upon CUSTOMER maintaining adequate Internet access, compatible devices, networks, software, security controls, and other technical requirements. Xepter is not responsible for deficiencies caused by CUSTOMER's failure to meet applicable technical requirements.",
      },
      { type: 'h4', text: 'B. Use Policies' },
      {
        type: 'p',
        text: "CUSTOMER and its End Users may use the Services only in compliance with this Agreement, applicable law, carrier and telecommunications requirements, and Xepter's Acceptable Use Policy and other Use Policies incorporated into this Agreement.",
      },
      {
        type: 'p',
        text: 'CUSTOMER must not use, or permit use of, the Services in a manner that interferes with the Services or network, harms other users, creates excessive or abusive traffic, violates law or regulation, or exposes Xepter or its suppliers to regulatory, legal, security, carrier, or reputational risk.',
      },
      { type: 'h4', text: 'i. Acceptable Use Policy' },
      {
        type: 'p',
        text: "The Services must be used in accordance with Xepter's Acceptable Use Policy, which is incorporated into this Agreement.",
      },
      {
        type: 'p',
        text: 'Xepter may immediately suspend, restrict, throttle, block, or terminate affected Services where reasonably necessary because of suspected fraud, illegal activity, spam, abuse, unauthorized communications, material policy violations, carrier requirements, regulatory requirements, or network risk.',
      },
      { type: 'h4', text: 'ii. Numbering Policy' },
      {
        type: 'p',
        text: 'Telephone numbers and other identifiers used with the Services are subject to applicable numbering rules, carrier requirements, regulatory requirements, and Xepter policies.',
      },
      { type: 'h4', text: 'C. Communications Consent, Opt-In and Compliance' },
      {
        type: 'p',
        text: 'CUSTOMER is solely responsible for ensuring that all communications sent, initiated, or facilitated through the Services comply with applicable laws, regulations, carrier requirements, industry standards, and consent requirements.',
      },
      {
        type: 'p',
        text: 'CUSTOMER must obtain and maintain all legally required consents, permissions, authorizations, and opt-ins before sending SMS, MMS, RCS messages, making voice calls, using automated calling or messaging, or otherwise contacting recipients through the Services.',
      },
      {
        type: 'p',
        text: 'CUSTOMER must maintain sufficient records demonstrating the source, date, time, method, scope, and status of required consent or opt-in where applicable, and must honor opt-out, STOP, unsubscribe, do-not-call, objection, and other legally required requests.',
      },
      {
        type: 'p',
        text: 'CUSTOMER must not use the Services to send messages or place calls to recipients who have not provided consent required by applicable law, or who have withdrawn such consent, except where a lawful basis or exemption permits the communication.',
      },
      {
        type: 'p',
        text: "CUSTOMER is responsible for the content of all messages, calls, recordings, campaigns, templates, media, and other communications transmitted through its Account.",
      },
      { type: 'h4', text: 'D. Customer Responsibility for Non-Compliant Communications' },
      {
        type: 'p',
        text: 'CUSTOMER acknowledges that Xepter is a communications service provider and does not determine whether a particular recipient has provided legally sufficient consent to CUSTOMER. CUSTOMER is solely responsible for its communications, recipient lists, campaigns, content, consent records, and compliance obligations.',
      },
      {
        type: 'p',
        text: "If any complaint, objection, investigation, enforcement action, penalty, fine, assessment, carrier charge, regulatory fee, governmental charge, settlement, cost, loss, damage, or other liability is incurred by Xepter or any Affiliate, supplier, carrier, messaging provider, or service provider as a result of or in connection with CUSTOMER's or its End Users' sending of messages, placing of calls, use of recordings, or other communications that were not properly authorized, consented to, opted into, or otherwise permitted under applicable law or applicable requirements, CUSTOMER shall be responsible for such amounts to the fullest extent permitted by law.",
      },
      {
        type: 'p',
        text: 'This includes communications sent without required opt-in or consent, communications sent after an opt-out or objection, unlawful or deceptive content, prohibited campaigns, violations of carrier or messaging-provider rules, and communications resulting in complaints, fines, penalties, regulatory assessments, carrier sanctions, or enforcement actions.',
      },
      {
        type: 'p',
        text: "CUSTOMER agrees to reimburse, indemnify, defend, and hold harmless Xepter and its Affiliates, officers, directors, employees, agents, suppliers, carriers, and service providers from and against such claims, fines, penalties, assessments, fees, damages, losses, costs, and reasonable attorneys' fees, subject to Section 11.",
      },
      {
        type: 'p',
        text: 'Xepter may suspend or terminate affected traffic, campaigns, numbers, accounts, or Services immediately where reasonably necessary to mitigate regulatory, carrier, legal, fraud, or abuse risk.',
      },
    ],
  },
  {
    id: 'termination',
    number: 6,
    title: 'Termination',
    blocks: [
      { type: 'h4', text: 'A. Termination for Cause' },
      {
        type: 'p',
        text: 'Either Party may terminate this Agreement or applicable Services by written notice if the other Party materially breaches this Agreement and fails to cure within thirty (30) days after written notice, except where immediate action is reasonably necessary due to fraud, illegal activity, security risk, regulatory requirements, carrier requirements, or circumstances where cure is not reasonably possible.',
      },
      { type: 'h4', text: 'B. Effect of Termination' },
      {
        type: 'p',
        text: "Upon termination, CUSTOMER remains responsible for all amounts accrued through the effective termination date and all obligations that survive termination. Where CUSTOMER terminates due to Xepter's uncured material breach, Xepter will not charge recurring fees for terminated Services after termination and may provide any applicable pro-rata refund of prepaid unused fees.",
      },
    ],
  },
  {
    id: 'intellectual-property',
    number: 7,
    title: 'Intellectual Property',
    blocks: [
      { type: 'h4', text: 'A. Limited License' },
      {
        type: 'p',
        text: "Subject to CUSTOMER's compliance with this Agreement, Xepter grants CUSTOMER and authorized End Users a limited, revocable, non-exclusive, non-transferable, non-sublicensable license to use Xepter software solely for authorized use of the Services during the applicable Term.",
      },
      {
        type: 'ul',
        items: [
          'Sublicense, resell, distribute, or assign rights except as authorized',
          'Modify, adapt, or create derivative works',
          'Reverse engineer, decompile, decrypt, or disassemble',
          'Use the software for infringement analysis or unauthorized benchmarking',
          'Create competing software or services',
          'Remove proprietary notices',
        ],
      },
      { type: 'h4', text: 'B. Intellectual Property Rights' },
      {
        type: 'p',
        text: "This Agreement does not transfer ownership of Xepter's Services, software, technology, documentation, trademarks, or other intellectual property. CUSTOMER retains ownership of CUSTOMER Content and intellectual property owned by CUSTOMER.",
      },
      {
        type: 'p',
        text: 'CUSTOMER grants Xepter a limited, non-exclusive, royalty-free license to process, transmit, store, reproduce, and otherwise use CUSTOMER Content as reasonably necessary to provide, secure, support, improve, and administer the Services and comply with law.',
      },
      {
        type: 'p',
        text: 'CUSTOMER is solely responsible for obtaining all notices, licenses, consents, authorizations, and approvals required for CUSTOMER Content, including personal information, communications content, recordings, third-party intellectual property, and recipient data.',
      },
      { type: 'h4', text: 'C. Use of Marks' },
      {
        type: 'p',
        text: "Neither Party may use the other Party's trademarks, service marks, or logos without prior written consent, except as expressly permitted by this Agreement.",
      },
    ],
  },
  {
    id: 'confidentiality',
    number: 8,
    title: 'Confidentiality',
    blocks: [
      {
        type: 'p',
        text: "During the Term and for at least one (1) year thereafter, each Party will protect the other Party's Confidential Information using at least reasonable care and use it only as necessary to fulfill obligations or exercise rights under this Agreement.",
      },
      {
        type: 'p',
        text: 'Each Party may disclose Confidential Information to employees, agents, contractors, and service providers who have a need to know and are bound by confidentiality obligations, or as required by law.',
      },
      {
        type: 'p',
        text: 'These restrictions do not apply to information independently developed, lawfully received without restriction, publicly available without breach, previously known without restriction, or released from restriction in writing.',
      },
      {
        type: 'p',
        text: "Upon termination, each Party will reasonably return, delete, destroy, or render unusable the other Party's Confidential Information, subject to legal, backup, security, and record-retention requirements.",
      },
    ],
  },
  {
    id: 'data-protection',
    number: 9,
    title: 'Data Protection',
    blocks: [
      { type: 'h4', text: 'A. Data Security' },
      {
        type: 'p',
        text: "Xepter will maintain commercially reasonable technical, administrative, and organizational safeguards designed to protect CUSTOMER's Account, Account Data, and CUSTOMER Content against unauthorized access, use, disclosure, alteration, or destruction.",
      },
      {
        type: 'p',
        text: 'CUSTOMER is solely responsible for protecting usernames, passwords, API keys, authentication credentials, endpoints, integrations, and authorized users. CUSTOMER must monitor its Account for unlawful, fraudulent, abusive, or unauthorized activity and promptly notify Xepter if it becomes aware of such activity.',
      },
      { type: 'h4', text: 'B. Software Changes' },
      {
        type: 'p',
        text: 'Xepter may provide updates, patches, fixes, upgrades, replacements, and other software changes. CUSTOMER must promptly implement or permit required updates where applicable.',
      },
    ],
  },
  {
    id: 'limitation-of-liability',
    number: 10,
    title: 'Limitation of Liability',
    blocks: [
      { type: 'h4', text: 'A. Excluded Damages' },
      {
        type: 'p',
        text: 'To the fullest extent permitted by law, in no event will either Party or its Affiliates be liable for indirect, incidental, consequential, exemplary, special, punitive, or reputational damages; loss of use or corruption of data; loss of business opportunities, profits, goodwill, or savings; or costs of substitute services, whether arising under contract, warranty, tort, negligence, strict liability, or any other theory.',
      },
      { type: 'h4', text: 'B. Direct Damages' },
      {
        type: 'p',
        text: 'Except as expressly provided, total cumulative liability arising out of or relating to this Agreement will not exceed the amounts paid or payable by CUSTOMER to Xepter during the previous six (6) months.',
      },
      {
        type: 'p',
        text: "This limitation will not apply to CUSTOMER's payment obligations, intellectual property infringement, gross negligence, fraud, willful or criminal misconduct, or CUSTOMER's indemnification and liability obligations arising from misuse, Acceptable Use Policy breaches, communications consent obligations, or Sections 5(C) and 5(D), to the extent permitted by applicable law.",
      },
      { type: 'h4', text: 'C. Survival' },
      { type: 'p', text: 'The limitations of liability survive termination or expiration.' },
    ],
  },
  {
    id: 'indemnification',
    number: 11,
    title: 'Indemnification',
    blocks: [
      { type: 'h4', text: 'A. Indemnification Obligations' },
      {
        type: 'p',
        text: 'CUSTOMER agrees to indemnify, defend, and hold harmless Xepter, its Affiliates, officers, directors, employees, agents, carriers, suppliers, and service providers from and against third-party claims, governmental actions, regulatory proceedings, fines, penalties, assessments, damages, losses, costs, and reasonable attorneys’ fees arising out of or in connection with:',
      },
      {
        type: 'ul',
        items: [
          "CUSTOMER's or its End Users' material violation of applicable law",
          'Use of Services not authorized by this Agreement',
          'CUSTOMER Content or communications transmitted through the Services',
          'Failure to obtain required consent, opt-in, authorization, or permission',
          'Messages or calls made after opt-out, objection, or revocation of required consent',
          'Violations of telecommunications, messaging, calling, carrier, privacy, marketing, or consumer-protection requirements',
          'Fraudulent, abusive, deceptive, unlawful, or prohibited use',
          'Failure to implement required software or security updates',
          "Claims relating to CUSTOMER's products, services, advertisements, campaigns, recipient lists, or End Users",
        ],
      },
      { type: 'h4', text: 'B. Defense and Indemnification Procedures' },
      {
        type: 'p',
        text: 'A Party seeking indemnification must provide prompt written notice, permit the indemnifying Party to control the defense and settlement, and provide reasonable cooperation. The indemnified Party may participate at its own expense.',
      },
      {
        type: 'p',
        text: 'No settlement may impose an admission of wrongdoing, monetary obligation, or continuing obligation on the indemnified Party without its prior written consent, not unreasonably withheld, conditioned, or delayed.',
      },
    ],
  },
  {
    id: 'warranties',
    number: 12,
    title: 'Warranties',
    blocks: [
      { type: 'h4', text: 'A. Xepter Warranty' },
      {
        type: 'p',
        text: 'Xepter will provide the Services using a commercially reasonable level of skill and care, subject to this Agreement and applicable service limitations.',
      },
      { type: 'h4', text: 'B. Customer Warranty' },
      {
        type: 'p',
        text: 'CUSTOMER represents and warrants that CUSTOMER and its End Users will use the Services in compliance with applicable laws, this Agreement, the Acceptable Use Policy, carrier requirements, and consent and opt-out requirements.',
      },
      { type: 'h4', text: 'C. Disclaimer of Warranties' },
      {
        type: 'p',
        text: 'Except as expressly provided and to the fullest extent permitted by law, the Services are provided "as is" and "as available." Xepter disclaims other express or implied warranties, including merchantability, fitness for a particular purpose, non-infringement, and warranties arising from course of dealing or usage in trade. Xepter does not warrant that Services will be uninterrupted, error-free, or that messages or calls will be delivered to every recipient.',
      },
    ],
  },
  {
    id: 'dispute-resolution',
    number: 13,
    title: 'Dispute Resolution',
    blocks: [
      { type: 'h4', text: 'A. Good Faith Attempt to Settle Disputes' },
      {
        type: 'p',
        text: 'For any dispute arising out of or relating to this Agreement, each Party will appoint an authorized representative to confer in good faith before commencing legal action.',
      },
      { type: 'h4', text: 'B. Venue' },
      {
        type: 'p',
        text: 'Unless otherwise required by applicable law or agreed in writing, actions arising from this Agreement will be brought in state or federal courts located in Sheridan County, Wyoming, and each Party consents to that jurisdiction and venue.',
      },
      { type: 'h4', text: 'C. Equitable Relief' },
      {
        type: 'p',
        text: 'A breach of intellectual property, confidentiality, security, or other obligations may cause irreparable harm for which monetary damages may be inadequate. A Party may seek injunctive or equitable relief in addition to other remedies.',
      },
      { type: 'h4', text: 'D. Limitations' },
      {
        type: 'p',
        text: 'Except for non-payment, indemnification, intellectual property, confidentiality, fraud, or obligations that cannot legally be limited, no claim may be brought more than two (2) years after accrual, to the extent permitted by law.',
      },
    ],
  },
  {
    id: 'text-voice-compliance',
    number: 14,
    title: 'Text and Voice Communications Compliance',
    blocks: [
      {
        type: 'p',
        text: 'CUSTOMER acknowledges that messaging and voice communications are subject to federal, state, local, international, carrier, and industry requirements, including consent, identification, opt-out, do-not-call, content, registration, and recordkeeping requirements.',
      },
      {
        type: 'p',
        text: 'CUSTOMER is solely responsible for ensuring that its use of SMS, MMS, RCS, voice, automated calling, prerecorded messages, and related Services complies with all applicable requirements.',
      },
      {
        type: 'p',
        text: 'Xepter may require campaign registration, sender verification, consent evidence, opt-out mechanisms, content review, or other compliance measures before enabling certain Services.',
      },
      {
        type: 'p',
        text: 'Xepter may block, filter, delay, reject, suspend, or terminate communications where reasonably necessary to comply with law, carrier requirements, security controls, fraud prevention, or Xepter policies.',
      },
      { type: 'h4', text: 'A. Customer Opt-In and Consent' },
      {
        type: 'p',
        text: 'CUSTOMER must obtain legally sufficient consent before initiating any communication where consent is required. CUSTOMER must retain consent records for the required period.',
      },
      { type: 'h4', text: 'B. Opt-Out and Objection Requests' },
      {
        type: 'p',
        text: 'CUSTOMER must promptly honor STOP, unsubscribe, do-not-call, objection, revocation, and other legally required opt-out requests and must not resume communications unless legally permitted and any required new consent has been obtained.',
      },
      { type: 'h4', text: 'C. Complaints, Fines, Penalties and Regulatory Assessments' },
      {
        type: 'p',
        text: "If a recipient, carrier, regulator, governmental authority, court, or other authorized entity raises an objection, complaint, investigation, enforcement action, fine, penalty, assessment, or other charge because of communications sent through CUSTOMER's Xepter Account, CUSTOMER is responsible for the resulting liability to the fullest extent permitted by law.",
      },
      {
        type: 'p',
        text: 'This includes communications sent without required opt-in or consent, communications sent after opt-out or objection, unlawful or deceptive communications, prohibited content, or other communications that violate law, regulation, carrier rules, or Xepter policies.',
      },
      {
        type: 'p',
        text: "Xepter may charge CUSTOMER for amounts Xepter is required to pay or incurs as a result of CUSTOMER's non-compliant communications, including carrier penalties, regulatory fees, fines, investigation costs, reasonable legal fees, and related administrative costs, to the extent permitted by law and subject to Section 11.",
      },
    ],
  },
  {
    id: 'miscellaneous',
    number: 15,
    title: 'Miscellaneous',
    blocks: [
      { type: 'h4', text: 'A. Relationship of the Parties' },
      {
        type: 'p',
        text: 'Xepter and CUSTOMER are independent contractors. This Agreement does not create a partnership, joint venture, employment, franchise, or agency relationship.',
      },
      { type: 'h4', text: 'B. Assignment' },
      {
        type: 'p',
        text: 'Neither Party may assign this Agreement without consent, except to an Affiliate or successor in connection with a merger, acquisition, consolidation, or sale of substantially all relevant assets, provided the assignee assumes applicable obligations.',
      },
      { type: 'h4', text: 'C. Notices' },
      {
        type: 'p',
        text: 'Notices may be delivered by email, personal delivery, or reputable courier. Notices to Xepter should be sent to support@xepter.io and, where appropriate, to 30 N Gould St, Ste N, Sheridan, WY 82801, United States. Electronic notices have the force and effect of paper notices where permitted by law.',
      },
      { type: 'h4', text: 'D. Force Majeure' },
      {
        type: 'p',
        text: 'Except for payment obligations, neither Party is responsible for failure or delay caused by events beyond reasonable control, including telecommunications failures, Internet outages, power failures, war, terrorism, governmental action, changes in law, labor disturbances, natural disasters, or supplier failures.',
      },
      { type: 'h4', text: 'E. Third-Party Beneficiaries' },
      {
        type: 'p',
        text: 'Except for parties expressly protected by indemnification provisions, there are no third-party beneficiaries.',
      },
      { type: 'h4', text: 'F. Internal Customer Activities' },
      {
        type: 'p',
        text: 'Xepter has no obligation to mediate disputes among CUSTOMER representatives or between CUSTOMER and third parties concerning ownership or control of an Account, Account Data, phone numbers, Services, or CUSTOMER Content. Xepter may take reasonable administrative action based on available information.',
      },
      { type: 'h4', text: 'G. Headings and Interpretation' },
      { type: 'p', text: 'Headings are for convenience only and have no legal effect. Defined terms include related grammatical forms.' },
      { type: 'h4', text: 'H. Governing Law' },
      {
        type: 'p',
        text: 'This Agreement is governed by the laws of the State of Wyoming, without regard to conflict-of-law rules, except to the extent federal or mandatory law applies.',
      },
      { type: 'h4', text: 'I. Anti-Bribery' },
      {
        type: 'p',
        text: 'Each Party will comply with applicable anti-bribery and anti-corruption laws, including the U.S. Foreign Corrupt Practices Act.',
      },
      { type: 'h4', text: 'J. Export Control' },
      {
        type: 'p',
        text: 'The Services, software, technology, and technical information may be subject to U.S. export-control laws. CUSTOMER will not use, export, re-export, transfer, or provide the Services in violation of applicable export laws or sanctions.',
      },
      { type: 'h4', text: 'K. Regulatory and Legal Changes' },
      {
        type: 'p',
        text: "If changes in law, regulation, carrier requirements, telecommunications requirements, or industry practices materially interfere with Xepter's ability to provide Services, Xepter may modify, suspend, restrict, or terminate affected Services or amend applicable terms as reasonably necessary.",
      },
      { type: 'h4', text: 'L. Entire Agreement' },
      {
        type: 'p',
        text: 'This Agreement, applicable Orders, Service Attachments, Use Policies, Privacy Policy, and incorporated documents constitute the entire agreement concerning the Services and supersede prior agreements concerning the same subject matter.',
      },
      { type: 'h4', text: 'M. Order of Precedence' },
      {
        type: 'p',
        text: 'In the event of conflict: (i) applicable Order Form; (ii) applicable Service Attachment; (iii) this Agreement; (iv) Acceptable Use Policy and Privacy Policy; and (v) other incorporated documents, unless expressly stated otherwise.',
      },
      { type: 'h4', text: 'N. Amendments' },
      {
        type: 'p',
        text: 'Xepter may update this Agreement, Use Policies, or Privacy Policy from time to time. Where required, Xepter will provide notice using Account contact information. Continued use after the effective date constitutes acceptance, except where law requires another process.',
      },
      { type: 'h4', text: 'O. Severability and Waiver' },
      {
        type: 'p',
        text: 'If a provision is invalid or unenforceable, the remainder remains effective. Failure to enforce a provision is not a waiver of future enforcement.',
      },
      { type: 'h4', text: 'P. Publicity' },
      {
        type: 'p',
        text: 'Xepter may identify CUSTOMER as a customer only where CUSTOMER has provided permission or where otherwise permitted under the applicable Order or written agreement. Xepter will not publicly display CUSTOMER trademarks without authorization.',
      },
      { type: 'h4', text: 'Q. Execution' },
      { type: 'p', text: 'Each Party represents that it has authority to enter into this Agreement.' },
      { type: 'h4', text: 'R. Electronic Signature and Counterparts' },
      {
        type: 'p',
        text: 'This Agreement may be accepted electronically and in counterparts. Electronic acceptance and digital signatures have the same effect as manual signatures to the extent permitted by law.',
      },
      { type: 'h4', text: 'S. Survival' },
      {
        type: 'p',
        text: 'Provisions that by their nature should survive termination will survive, including payment obligations, confidentiality, intellectual property, indemnification, liability limitations, disclaimers, dispute resolution, and compliance obligations.',
      },
    ],
  },
];

export interface DefinedTerm {
  term: string;
  definition: string;
}

export const definedTerms: DefinedTerm[] = [
  { term: 'Account', definition: 'The Xepter account established for CUSTOMER and associated with the Services.' },
  {
    term: 'Account Administrator',
    definition:
      'A person authorized by CUSTOMER to establish, modify, administer, purchase, or control Account settings and Services.',
  },
  {
    term: 'Account Data',
    definition:
      'Business contact information, account information, Xepter-generated logs, communications metadata, configuration information, Services purchased, and numbers assigned.',
  },
  { term: 'Affiliate(s)', definition: 'An entity that controls, is controlled by, or is under common control with a Party.' },
  {
    term: 'Confidential Information',
    definition: 'Information disclosed by or on behalf of a Party that should reasonably be considered confidential.',
  },
  {
    term: 'CUSTOMER Content',
    definition:
      'Content of calls, SMS, MMS, RCS messages, voicemails, recordings, files, conferences, API requests, or other communications transmitted or stored through the Services.',
  },
  { term: 'DID', definition: 'A telephone number assigned for inbound and/or outbound communications through the Services.' },
  {
    term: 'Electronic Signature',
    definition: 'An electronic sound, symbol, process, click, digital signature, or record adopted with intent to authenticate an agreement.',
  },
  {
    term: 'End Point',
    definition: 'An application, device, browser, API, integration, or other interface through which an End User accesses or uses the Services.',
  },
  {
    term: 'End User',
    definition:
      'An individual or entity to whom CUSTOMER makes the Services available, including employees, contractors, agents, customers, users, invitees, and other authorized persons.',
  },
  {
    term: 'Force Majeure Event',
    definition:
      'An event beyond reasonable control, including acts of God, emergencies, telecommunications failures, Internet or power outages, war, terrorism, governmental action, changes in law, labor disturbances, natural disasters, or supplier failures.',
  },
  { term: 'Initial Term', definition: 'The initial service period identified in the applicable Order.' },
  {
    term: 'Intellectual Property Rights',
    definition:
      'Patents, copyrights, trademarks, trade secrets, confidential information rights, database rights, moral rights, privacy and publicity rights, and other proprietary rights recognized by law.',
  },
  {
    term: 'Law',
    definition: 'Any applicable federal, state, local, foreign, or international law, regulation, rule, ordinance, administrative guidance, treaty, court order, or governmental ruling.',
  },
  { term: 'Order / Order Form', definition: 'A request for Services submitted by CUSTOMER and accepted by Xepter.' },
  { term: 'Renewal Term', definition: 'A renewal period following the Initial Term or prior Renewal Term.' },
  {
    term: 'Service(s)',
    definition: 'Products, communications capabilities, software, APIs, messaging, voice, phone-number, routing, reporting, and related services provided by Xepter.',
  },
  { term: 'Service Attachment', definition: 'A document containing additional terms applicable to particular Services or products.' },
  { term: 'Start Date', definition: 'The date specified in an Order or the date Xepter begins providing applicable Services.' },
  {
    term: 'Taxes',
    definition:
      'Applicable federal, state, local, foreign, telecommunications, regulatory, universal service, emergency-service, sales, use, or other taxes and government-imposed fees.',
  },
  { term: 'Term', definition: 'The Initial Term plus any Renewal Terms.' },
  {
    term: 'Use Policy',
    definition: "Any policy incorporated into this Agreement, including Xepter's Acceptable Use Policy, Numbering Policy, and communications or compliance policies.",
  },
];
