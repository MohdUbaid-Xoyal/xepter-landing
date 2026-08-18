import NotFound from '@/src/components/shared/not-found';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata('404 | Xepter');

export default function NotFoundPage() {
  return <NotFound />;
}
