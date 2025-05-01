'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLink {
  path: string;
  label: string;
  code: string;
}

interface MetalGearNavbarProps {
  links: NavLink[];
}

export default function MetalGearNavbar({ links }: MetalGearNavbarProps) {
  const pathname = usePathname();
  const [currentTime, setCurrentTime] = useState<string>('');
  const [systemStatus, setSystemStatus] = useState<string>('OPERATIONAL');
  const [clearanceLevel, setClearanceLevel] = useState<string>('TOP SECRET');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="bg-gray-900 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center py-4">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="text-green-500 code-text">
              <span className="status-indicator status-operational"></span>
              SYSTEM: {systemStatus}
            </div>
            <div className="text-yellow-500 code-text">
              CLEARANCE: {clearanceLevel}
            </div>
          </div>
          
          <div className="text-blue-500 code-text">
            {currentTime}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 py-4">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`mgs-button ${
                pathname === link.path ? 'glow-effect' : ''
              }`}
            >
              <span className="text-xs opacity-75">{link.code}</span>
              <span className="ml-2">{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
} 