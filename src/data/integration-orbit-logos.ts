import integrationApi from '@/public/images/icons/integration-api.svg';
import integrationGhl from '@/public/images/icons/integration-ghl.svg';
import integrationHubspot from '@/public/images/icons/integration-hubspot-crm.svg';
import integrationMms from '@/public/images/icons/integration-mms.svg';
import integrationSms from '@/public/images/icons/integration-sms.svg';
import integrationVoice from '@/public/images/icons/integration-voice.svg';
import integrationWhatsapp from '@/public/images/icons/integration-whatsapp-channel.svg';
import { StaticImageData } from 'next/image';

export interface IntegrationOrbitLogo {
  src: StaticImageData;
  alt: string;
}

const baseLogos: IntegrationOrbitLogo[] = [
  { src: integrationSms, alt: 'sms' },
  { src: integrationMms, alt: 'mms' },
  { src: integrationVoice, alt: 'voice' },
  { src: integrationWhatsapp, alt: 'whatsapp' },
  { src: integrationGhl, alt: 'gohighlevel' },
  { src: integrationHubspot, alt: 'hubspot' },
  { src: integrationApi, alt: 'api-and-webhooks' },
];

export const integrationOrbitLogos: IntegrationOrbitLogo[] = [
  ...baseLogos,
  ...baseLogos,
  ...baseLogos,
];
