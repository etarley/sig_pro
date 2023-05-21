'use client';
import { useLogin } from '@/hooks/auth/useLogin';
import { Button } from './ui/button';
import { Input } from './ui/input-field';
import { Icons } from './icons';

const LoginForm: React.FC = () => {
  const {
    email,
    password,
    error,
    handleEmailChange,
    handlePasswordChange,
    handleLogin,
    handleGoogleLogin,
  } = useLogin();
  return (
    <>
      {error && <p className='text-red-500 mb-4'>{error}</p>}

      <Input
        label='Email'
        id='email'
        type='text'
        placeholder='Email'
        value={email}
        onChange={handleEmailChange}
      />
      <Input
        label='Password'
        id='password'
        type='password'
        placeholder='Password'
        value={password}
        onChange={handlePasswordChange}
      />
      <div className='flex flex-col space-y-4'>
        <Button variant='primary' type='button' onClick={handleLogin}>
          Login
        </Button>
        <Button
          variant='google'
          icon={<Icons.Google className='w-4 h-4 inline-block mr-2' />}
          onClick={handleGoogleLogin}
        >
          Login with Google
        </Button>
      </div>
    </>
  );
};

export default LoginForm;
