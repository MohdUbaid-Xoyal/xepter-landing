import integrationApi from '@/public/images/icons/integration-api.svg';
import integrationClickhouse from '@/public/images/icons/integration-clickhouse.svg';
import integrationCurl from '@/public/images/icons/integration-curl.svg';
import integrationGhl from '@/public/images/icons/integration-ghl.svg';
import integrationHubspot from '@/public/images/icons/integration-hubspot.svg';
import integrationJavascript from '@/public/images/icons/integration-javascript.svg';
import integrationKafka from '@/public/images/icons/integration-kafka.svg';
import integrationNextjs from '@/public/images/icons/integration-nextjs.svg';
import integrationPostgresql from '@/public/images/icons/integration-postgresql.svg';
import integrationPython from '@/public/images/icons/integration-python.svg';
import integrationSms from '@/public/images/icons/integration-sms.svg';
import integrationVoice from '@/public/images/icons/integration-voice.svg';
import integrationXepter from '@/public/images/icons/integration-xepter.svg';
import { StaticImageData } from 'next/image';

export interface IntegrationOrbitLogo {
  src: StaticImageData;
  alt: string;
}

const baseLogos: IntegrationOrbitLogo[] = [
  { src: integrationXepter, alt: 'xepter' },
  { src: integrationGhl, alt: 'gohighlevel' },
  { src: integrationHubspot, alt: 'hubspot' },
  { src: integrationNextjs, alt: 'next.js' },
  { src: integrationPython, alt: 'python' },
  { src: integrationJavascript, alt: 'javascript' },
  { src: integrationCurl, alt: 'curl' },
  { src: integrationKafka, alt: 'apache kafka' },
  { src: integrationClickhouse, alt: 'clickhouse' },
  { src: integrationPostgresql, alt: 'postgresql' },
  { src: integrationSms, alt: 'message' },
  { src: integrationVoice, alt: 'call' },
  { src: integrationApi, alt: 'code' },
];

export const integrationOrbitLogos: IntegrationOrbitLogo[] = [
  ...baseLogos,
  ...baseLogos,
];
