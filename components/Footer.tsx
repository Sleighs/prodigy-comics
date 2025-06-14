'use client'

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { contactInfo } from '../config/contact';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2025);
  
  useEffect(() => {
    const year = new Date().getFullYear();
    setCurrentYear(year);
  }, []);

  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">PRODIGY</h3>
            <p className="text-sm">
              A world where humans are evolving into something more. The GODSTRAND has been discovered.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <a href={contactInfo.campaignLink} className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                  IndieGoGo Campaign
                </a>
              </li>
              <li>
                <Link href="/story" className="hover:text-white transition-colors">
                  Story
                </Link>
              </li>
              <li>
                <Link href="/characters" className="hover:text-white transition-colors">
                  Characters
                </Link>
              </li>
              <li>
                <Link href="/store" className="hover:text-white transition-colors">
                  Store
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-white transition-colors">
                  News
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href={contactInfo.social.twitter} className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                  X / Twitter
                </a>
              </li>
              <li>
                <a href={contactInfo.social.instagram} className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href={contactInfo.social.youtube} className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                  YouTube
                </a>
              </li>
              <li style={{display: 'none'}}>
                <a href={contactInfo.social.discord} className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                  Discord
                </a>
              </li>
              <li>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; {currentYear} PRODIGY Comics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 