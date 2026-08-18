import ProductPageTemplate from '@/src/components/products/product-page-template';
import { productsContent } from '@/src/data/products-content';
import { generateMetadata as buildMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

const content = productsContent.sms;

export const metadata: Metadata = buildMetadata(
  content.metaTitle,
  content.metaDescription,
  '/products/sms'
);

const SmsPage = () => <ProductPageTemplate content={content} />;

export default SmsPage;
