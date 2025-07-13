import Image from 'next/image';
import { useState, useEffect } from 'react';
import '@/styles/military.css';

interface MilitaryHeaderProps {
  title: string;
  backgroundImage: string;
  subtitle?: string;
  classification?: string;
  documentId?: string;
  date?: string;
  tailwindStyles?: string;
  accessLevel?: string;
  systemStatus?: string;
}

export default function MilitaryHeader({
  title,
  backgroundImage,
  subtitle,
  classification = 'TOP SECRET',
  documentId = 'PRODIGY: NEW AGE',
  date,
  tailwindStyles = '',
  accessLevel,
  systemStatus = 'OPERATIONAL',
}: MilitaryHeaderProps) {
  const [currentDateTime, setCurrentDateTime] = useState<string>('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      });
      const formattedTime = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
      setCurrentDateTime(`${formattedDate} ${formattedTime}`);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative w-full h-[30vh] ${tailwindStyles}`}>
      {/* Background Image with Overlay */}
      <div className="hidden inset-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Main Header Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="w-full">
          <h1 className="military-title roboto-condensed-bold text-3xl md:text-3xl font-bold text-white text-center mb-1">
            {title}
          </h1>
          {subtitle && (
            <p className="terminal-text text-sm md:text-base text-center">
              {subtitle}
            </p>
          )}
        </div>
      </div>

    </div>
  );
} 