import { CONFIG } from '@/domain/constants/config';
import LoginForm from '@/modules/auth/components/LoginForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Login - ${CONFIG.APP_NAME}`,
  description: 'Login',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-gray-700">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <LoginForm />
      </div>
    </div>
  );
};


export default Login;
