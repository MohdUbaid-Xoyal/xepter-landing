import SmsPageContent from '@/src/components/products/sms-page-content';
import { productsContent } from '@/src/data/products-content';
import { generateMetadata as buildMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

const content = productsContent.sms;

export const metadata: Metadata = buildMetadata(
  content.metaTitle,
  content.metaDescription,
  '/products/sms',
  undefined,
  undefined,
  undefined,
  content.metaKeywords
);

const SmsPage = () => <SmsPageContent />;

export default SmsPage;
