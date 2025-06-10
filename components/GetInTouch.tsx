import React from 'react';
import { contactInfo } from '../config/contact';

interface GetInTouchProps {
  className?: string;
}

export default function GetInTouch({ className = '' }: GetInTouchProps) {
  return (
    <section className={`py-16 px-4 md:px-8 max-w-6xl mx-auto ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-8 font-roboto-condensed">Get in Touch</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info - Product Spotlight Style */}
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 shadow-2xl">
          <div className="absolute inset-0 bg-[url('/images/prodigy-banner.png')] bg-cover bg-center opacity-10"></div>
          <div className="relative space-y-6">
            <div className="space-y-2">
              <h3 className="text-sm font-mono tracking-widest text-blue-400">[ GENERAL INQUIRIES ]</h3>
              <a href={`mailto:${contactInfo.email}`} className="block text-white/80 hover:text-white transition-colors">
                {contactInfo.email}
              </a>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-sm font-mono tracking-widest text-blue-400">[ PRESS & MEDIA ]</h3>
              <a href={`mailto:${contactInfo.pressEmail}`} className="block text-white/80 hover:text-white transition-colors">
                {contactInfo.pressEmail}
              </a>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-sm font-mono tracking-widest text-blue-400">[ PARTNERSHIPS ]</h3>
              <a href={`mailto:${contactInfo.partnershipsEmail}`} className="block text-white/80 hover:text-white transition-colors">
                {contactInfo.partnershipsEmail}
              </a>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-sm font-mono tracking-widest text-blue-400">[ CAMPAIGN ]</h3>
              <a href={contactInfo.campaignLink} className="block text-white/80 hover:text-white transition-colors">
                JOIN OUR MISSION
              </a>
            </div>
          </div>
        </div>

        {/* Social Links - Etched Glass Effect */}
        <div className="relative overflow-hidden rounded-xl backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-gray-800/50"></div>
          <div className="relative p-8">
            <h3 className="text-2xl font-semibold mb-6 text-white">Follow Us</h3>
            <div className="space-y-4">
              <h3 className="text-sm font-mono tracking-widest text-blue-400">[ CONNECT ]</h3>
              <div className="grid grid-cols-2 gap-4">
                <a href={contactInfo.social.twitter} className="block p-4 bg-white/5 border border-blue-500/20 rounded-lg hover:bg-white/10 transition-all">
                  <span className="text-white/80">X / TWITTER</span>
                </a>
                <a href={contactInfo.social.instagram} className="block p-4 bg-white/5 border border-blue-500/20 rounded-lg hover:bg-white/10 transition-all">
                  <span className="text-white/80">INSTAGRAM</span>
                </a>
                <a href={contactInfo.social.youtube} className="block p-4 bg-white/5 border border-blue-500/20 rounded-lg hover:bg-white/10 transition-all">
                  <span className="text-white/80">YOUTUBE</span>
                </a>
                <a href={contactInfo.social.discord} className="block p-4 bg-white/5 border border-blue-500/20 rounded-lg hover:bg-white/10 transition-all">
                  <span className="text-white/80">DISCORD</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 