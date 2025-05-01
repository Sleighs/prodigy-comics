import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '@/styles/military-navbar.css';

interface MilitaryNavbarProps {
  links: {
    name: string;
    path: string;
    code?: string;
  }[];
  systemStatus?: string;
  tailwindStyles?: string;
}

export default function MilitaryNavbar({
  links,
  systemStatus = 'OPERATIONAL',
  tailwindStyles = '',
}: MilitaryNavbarProps) {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [activeLink, setActiveLink] = useState<string>('');
  const pathname = usePathname();

  useEffect(() => {
    // Update current time every second
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    // Set active link based on current path
    const currentPath = pathname || '/';
    setActiveLink(currentPath);

    return () => clearInterval(interval);
  }, [pathname]);

  return (
    <nav className={`military-navbar ${tailwindStyles}`}>
      <div className="military-navbar-top">
        <div className="military-navbar-container">
          <div className="military-navbar-status">
            <span className="military-navbar-status-item">
              SYSTEM: <span className="military-navbar-status-value">{systemStatus}</span>
            </span>
            <span className="military-navbar-status-item">
              TIME: <span className="military-navbar-status-value">{currentTime}</span>
            </span>
          </div>
          <div className="military-navbar-logo">
            <span className="military-navbar-logo-text">PRODIGY</span>
          </div>
          <div className="military-navbar-clearance">
            <span className="military-navbar-clearance-text">CLEARANCE LEVEL: 7</span>
          </div>
        </div>
      </div>
      
      <div className="military-navbar-bottom">
        <div className="military-navbar-container">
          <ul className="military-navbar-links">
            {links.map((link) => (
              <li key={link.path} className="military-navbar-item">
                <Link 
                  href={link.path}
                  className={`military-navbar-link ${activeLink === link.path ? 'military-navbar-link-active' : ''}`}
                >
                  <span className="military-navbar-link-text">{link.name}</span>
                  {link.code && (
                    <span className="military-navbar-link-code">{link.code}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
} 