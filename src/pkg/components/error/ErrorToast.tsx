import { debounceToast } from '@/utils/debounceToast';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

interface ErrorToastProps {
  type: 'type' | 'info' | 'warning' | 'error'; // Define types
  message: string;
}

const ErrorToast: React.FC<ErrorToastProps> = ({ type, message }) => {
  useEffect(() => {
    const showToast = () => {
      switch (type) {
        case 'info':
          toast.info(message);
          break;
        case 'warning':
          toast.warn(message);
          break;
        case 'error':
          toast.error(message);
          break;
        default:
          toast.info(message); // Default to info toast for unknown types
          break;
      }
    };

    // Debounce toast notifications for 100 milliseconds
    debounceToast(showToast, 100);

  }, [message, type]);

  // Return null because the component doesn't render any UI directly
  return null;
};

export default ErrorToast;
