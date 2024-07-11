import { CONFIG } from '@/domain/constants/config';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `Register - ${CONFIG.APP_NAME}`,
  description: 'Register',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};


const RegisterSuccess = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-semibold mb-2">Registration Successful!</h2>
        <p className="text-gray-600 mb-4">
          Your account has been successfully created.
        </p>
        <Link href="/login">
          <button className="text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded">
            Login Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RegisterSuccess;
