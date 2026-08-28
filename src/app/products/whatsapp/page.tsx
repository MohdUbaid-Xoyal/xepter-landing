import ComingSoonContent from '@/src/components/products/coming-soon-content';
import { generateMetadata as buildMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = buildMetadata(
  'WhatsApp | Coming Soon | Xepter',
  'Xepter WhatsApp is coming soon. Subscribe to be the first to know when it goes live.',
  '/products/whatsapp'
);

const WhatsAppPage = () => <ComingSoonContent productName="WhatsApp" />;

export default WhatsAppPage;
