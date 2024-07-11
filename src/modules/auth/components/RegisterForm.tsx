// src/modules/auth/components/LoginForm.tsx
"use client";
import ErrorComponent from '@/pkg/components/error/ErrorMessage';
import ErrorToast from '@/pkg/components/error/ErrorToast';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { registerService } from '../services/registerService';
import { validateRegisterForm } from '../validation/validationRegister';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: any }>({});
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<any>('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setErrors({});
    setErrorMessage('');

    const validationErrors = validateRegisterForm({ name: name, email: email, phone: phone, password: password, password_confirm: passwordConfirm });
    if (Object.keys(validationErrors).length > 0) {
      console.log("errors: " + Object.keys(validationErrors).length);
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    try {
      console.log("register");
      await registerService.register({
        name: name,
        phone: phone,
        email: email,
        password: password,
        create_company: true,
      }); // Use the constant
      router.push('/register/success');
    } catch (error: any) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      {errorMessage && <ErrorToast type="error" message={errorMessage} />}
      {errorMessage && <ErrorComponent message={errorMessage} type="error" />}
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
          Name
        </label>
        <input
          id="name"
          type="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={loading}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
          Phone
        </label>
        <input
          id="phone"
          type="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          disabled={loading}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
      </div>

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

      <div className="mb-6">
        <label htmlFor="passwordConfirm" className="block text-gray-700 text-sm font-bold mb-2">
          Confirm Password
        </label>
        <input
          id="passwordConfirm"
          type="password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}

          disabled={loading}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.passwordConfirm ? 'border-red-500' : 'border-gray-300'
            }`}
        />
        {errors.passwordConfirm && <p className="text-red-500 text-xs mt-1">{errors.passwordConfirm}</p>}
      </div>
      <div className="flex items-center justify-between">
        <Link href="/login" className="text-blue-500 hover:text-blue-700">Login</Link>
        <button
          type="submit"
          disabled={loading}
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
        >
          {loading ? 'Loading...' : 'Register'}
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
