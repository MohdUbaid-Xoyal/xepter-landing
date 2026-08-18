import Login from '@/src/components/auth/login';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata('Login | Xepter', undefined, '/login');

const LoginPage = () => {
  return <Login />;
};

export default LoginPage;
