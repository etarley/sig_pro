import { useSignup } from '@/hooks/auth/useSignup';
import { Card } from './ui/card';
import { Input } from './ui/input-field';
import { Icons } from './icons';
import { Button } from './ui/button';
import Link from 'next/link';

const SignupForm: React.FC = () => {
  const {
    email,
    name,
    lastName,
    password,
    confirmPassword,
    error,
    handleEmailChange,
    handleNameChange,
    handleLastNameChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleSignup,
    handleGoogleSignup,
  } = useSignup();

  return (
    <>
      {error && <p className='text-red-500 dark:text-red-400 mb-4'>{error}</p>}
      <Input
        label='Email'
        id='email'
        type='email'
        placeholder='Email'
        value={email}
        onChange={handleEmailChange}
      />
      <Input
        label='First Name'
        id='firstName'
        type='text'
        placeholder='First Name'
        value={name}
        onChange={handleNameChange}
      />
      <Input
        label='Last Name'
        id='lastName'
        type='text'
        placeholder='Last Name'
        value={lastName}
        onChange={handleLastNameChange}
      />
      <Input
        label='Password'
        id='password'
        type='password'
        placeholder='Password'
        value={password}
        onChange={handlePasswordChange}
      />
      <Input
        label='Confirm Password'
        id='confirmPassword'
        type='password'
        placeholder='Confirm Password'
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
      />
      <div className='flex flex-col space-y-4'>
        <Button onClick={handleSignup}>Signup</Button>
        <Button
          variant='google'
          icon={<Icons.Google className='w-4 h-4 inline-block mr-2' />}
          onClick={handleGoogleSignup}
        >
          Signup with Google
        </Button>
      </div>
    </>
  );
};

export default SignupForm;
