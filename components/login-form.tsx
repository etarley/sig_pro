"use client"

import { useLogin } from "@/hooks/auth/useLogin"

import { Icons } from "./icons"
import { Button } from "./ui/button"
import { Input } from "./ui/input-field"

const LoginForm: React.FC = () => {
  const {
    email,
    password,
    error,
    handleEmailChange,
    handlePasswordChange,
    handleLogin,
    handleGoogleLogin,
  } = useLogin()
  return (
    <>
      {error && <p className="mb-4 text-red-500">{error}</p>}

      <Input
        label="Email"
        id="email"
        type="text"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />
      <Input
        label="Password"
        id="password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
      <div className="flex flex-col space-y-4">
        <Button variant="primary" type="button" onClick={handleLogin}>
          Login
        </Button>
        <Button
          variant="google"
          icon={<Icons.Google className="mr-2 inline-block h-4 w-4" />}
          onClick={handleGoogleLogin}
        >
          Login with Google
        </Button>
      </div>
    </>
  )
}

export default LoginForm
