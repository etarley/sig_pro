'use client';
import { Metadata } from 'next';
import Link from 'next/link';
import SignupForm from '@/components/signup-form';
import { Card } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to your account',
};

const SignupComponent: React.FC = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-gray-300 via-teal-200 to-gray-300 px-4 dark:from-gray-700 dark:via-teal-800 dark:to-gray-700 sm:px-0'>
      <div className='w-full max-w-md'>
        <Card title='Login'>
          <div className='mb-4'>
            <SignupForm />
          </div>
          <p className='mt-4 text-center'>
            Already have an account?{' '}
            <Link className='text-blue-500' href='/login'>
              Login
            </Link>
          </p>
        </Card>
      </div>
    </div>
  );
};

export default SignupComponent;
