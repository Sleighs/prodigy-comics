'use client'

import { useState } from 'react';

interface NotificationProps {
  message: string;
  link?: string;
  linkText?: string;
  type?: 'info' | 'success' | 'warning';
  showCloseButton?: boolean;
}

export default function NotificationBar({
  message,
  link,
  linkText = 'Learn More',
  type = 'info',
  showCloseButton = true,
}: NotificationProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const bgColors = {
    info: 'bg-blue-600',
    success: 'bg-green-600',
    warning: 'bg-amber-600',
  };

  const hoverColors = {
    info: 'hover:bg-blue-700',
    success: 'hover:bg-green-700',
    warning: 'hover:bg-amber-700',
  };

  return (
    <div className={`${bgColors[type]} text-white py-2 px-4 fixed top-0 left-0 right-0 z-50`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4 text-sm md:text-base">
          <span>{message}</span>
          {link && (
            <a
              href={link}
              className={`font-semibold underline ${hoverColors[type]} px-2 py-1 rounded transition-colors duration-200`}
            >
              {linkText}
            </a>
          )}
        </div>
        {showCloseButton && (
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 hover:bg-black/20 rounded transition-colors duration-200"
            aria-label="Close notification"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
} 