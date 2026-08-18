import SignUp from '@/src/components/auth/sign-up';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata('Sign Up | Xepter', undefined, '/signup');

const SignUpPage = () => {
  return <SignUp />;
};

export default SignUpPage;
