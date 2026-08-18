import SolutionPageTemplate from '@/src/components/solutions/solution-page-template';
import { solutionsContent } from '@/src/data/solutions-content';
import { generateMetadata as buildMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

const content = solutionsContent['use-cases'];

export const metadata: Metadata = buildMetadata(
  content.metaTitle,
  content.metaDescription,
  '/solutions/use-cases'
);

const UseCasesPage = () => <SolutionPageTemplate content={content} />;

export default UseCasesPage;
