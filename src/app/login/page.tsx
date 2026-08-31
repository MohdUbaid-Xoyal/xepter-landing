import Login from '@/src/components/auth/login';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata(
    'Xepter Customer Portal | Login',
    'Log in to your Xepter account to manage messaging, phone numbers, campaigns, analytics, billing and communication services.',
    '/login',
    undefined,
    undefined,
    undefined,
    ['Xepter login', 'Xepter portal', 'Xepter customer portal', 'Xepter account login']
  ),
  // Little to no SEO value in indexing a login page.
  robots: { index: false, follow: false },
};

const LoginPage = () => {
  return <Login />;
};

export default LoginPage;
