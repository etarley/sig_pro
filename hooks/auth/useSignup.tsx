import { useState, ChangeEvent } from 'react';
import { z } from 'zod';

const signupSchema = z.object({
  email: z.string().email(),
  name: z.string(),
  lastName: z.string(),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
});

export function useSignup() {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const handleSignup = () => {
    const result = signupSchema.safeParse({
      email,
      name,
      lastName,
      password,
      confirmPassword,
    });

    if (!result.success) {
      setError(result.error.message);
      return;
    }

    // Perform signup logic here

    // Clear form fields after successful signup
    setEmail('');
    setName('');
    setLastName('');
    setPassword('');
    setConfirmPassword('');
    setError('');
  };

  const handleGoogleSignup = () => {
    // Handle Google signup logic here
  };

  return {
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
  };
}
