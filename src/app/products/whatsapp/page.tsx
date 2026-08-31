import ComingSoonContent from '@/src/components/products/coming-soon-content';
import { generateMetadata as buildMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = buildMetadata(
  'WhatsApp Business API | Business Messaging | Xepter',
  'Connect with customers through WhatsApp Business messaging with Xepter. Build automated customer conversations, notifications and business messaging into your workflows.',
  '/products/whatsapp',
  undefined,
  undefined,
  undefined,
  [
    'WhatsApp Business API',
    'WhatsApp API',
    'WhatsApp messaging API',
    'WhatsApp for business',
    'business WhatsApp API',
    'WhatsApp messaging platform',
    'WhatsApp business messaging',
    'WhatsApp API provider',
    'WhatsApp automation',
    'WhatsApp customer communication',
  ]
);

const WhatsAppPage = () => <ComingSoonContent productName="WhatsApp" />;

export default WhatsAppPage;
