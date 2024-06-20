import { CONFIG } from '@/domain/constants/config';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Login - ${CONFIG.APP_NAME}`,
  description: 'Dashboard',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function ForgotPassword() {
  return (
    <div>Forgot password</div>
  )
}
