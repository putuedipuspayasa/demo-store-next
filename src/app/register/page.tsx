import { CONFIG } from '@/domain/constants/config';
import RegisterForm from '@/modules/auth/components/RegisterForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Register - ${CONFIG.APP_NAME}`,
  description: 'Register',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-gray-700">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <RegisterForm />
      </div>
    </div>
  );
};


export default Register;
