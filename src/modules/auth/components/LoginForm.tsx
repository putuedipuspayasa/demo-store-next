// src/modules/auth/components/LoginForm.tsx
"use client";
import ErrorToast from '@/pkg/components/error/ErrorToast';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { authService } from "../services/loginService";
import { validateLoginForm } from '../utils/validationUtils';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<any>('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setErrors({});
    setErrorMessage('');

    const validationErrors = validateLoginForm(email, password);
    if (Object.keys(validationErrors).length > 0) {
      console.log("errors: " + Object.keys(validationErrors).length);
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    try {
      console.log("login");
      await authService.login({
        username: email,
        password: password
      }); // Use the constant
      router.push('/dashboard');
    } catch (error: any) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      {/* {errorMessage && <ErrorComponent message={errorMessage} type="error" />} */}
      {errorMessage && <ErrorToast type="error" message={errorMessage} />}
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}

          disabled={loading}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.password ? 'border-red-500' : 'border-gray-300'
            }`}
        />
        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
      </div>
      <div className="flex items-center justify-between">
        <Link href="/forgot-password" className="text-sm text-blue-500 hover:text-blue-700">Forgot Password ?</Link>
        <button
          type="submit"
          disabled={loading}
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
        >
          {loading ? 'Loading...' : 'Login'}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
