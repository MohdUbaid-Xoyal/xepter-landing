import MmsPageContent from '@/src/components/products/mms-page-content';
import { productsContent } from '@/src/data/products-content';
import { generateMetadata as buildMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

const content = productsContent.mms;

export const metadata: Metadata = buildMetadata(
  content.metaTitle,
  content.metaDescription,
  '/products/mms',
  undefined,
  undefined,
  undefined,
  content.metaKeywords
);

const MmsPage = () => <MmsPageContent />;

export default MmsPage;
