// components/ErrorComponent.tsx

import React from 'react';

interface ErrorComponentProps {
  type: 'type' | 'info' | 'warning' | 'error'; // Define types
  message: string;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ type, message }) => {
  // Define CSS classes based on type
  let bgColorClass = '';
  let borderColorClass = '';
  let textColorClass = '';
  let icon = '';

  switch (type) {
    case 'type':
      bgColorClass = 'bg-blue-100';
      borderColorClass = 'border-blue-400';
      textColorClass = 'text-blue-700';
      icon = 'ℹ️'; // Example icon for information
      break;
    case 'info':
      bgColorClass = 'bg-blue-100';
      borderColorClass = 'border-blue-400';
      textColorClass = 'text-blue-700';
      icon = 'ℹ️'; // Example icon for information
      break;
    case 'warning':
      bgColorClass = 'bg-yellow-100';
      borderColorClass = 'border-yellow-400';
      textColorClass = 'text-yellow-700';
      icon = '⚠️'; // Example icon for warning
      break;
    case 'error':
      bgColorClass = 'bg-red-100';
      borderColorClass = 'border-red-400';
      textColorClass = 'text-red-700';
      icon = '🛑'; // Example icon for error
      break;
    default:
      bgColorClass = 'bg-gray-100';
      borderColorClass = 'border-gray-400';
      textColorClass = 'text-gray-700';
      icon = 'ℹ️'; // Default icon for unknown type
      break;
  }

  return (
    <div className={`border ${borderColorClass} ${bgColorClass} text-center border-dashed border-r-2 border-l-2 mb-3 py-2`} role="alert">
      <p className={`${textColorClass} font-semibold text-center`}>{icon} {message}</p>
    </div>
  );
};

export default ErrorComponent;
