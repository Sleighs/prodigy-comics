'use client'

import React from 'react';
import SciFiContactForm from '../../components/SciFiContactForm';
import PageHeader from '../../components/PageHeader';
import { contactInfo } from '../../config/contact';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Brutal Abstract Background */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom right, #111827 0%, #000000 60%, #000000 80%, rgba(220, 38, 38, 0.2) 100%)' }}>
        {/* Geometric Brutal Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-0 w-96 h-96 bg-red-500/5 transform rotate-45 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/2 right-0 w-64 h-64 bg-red-600/5 transform -rotate-12 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-red-700/5 transform rotate-90 translate-y-1/2"></div>
        </div>
        
        {/* Brutal Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Brutal Scanlines */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/2 to-transparent animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Page Header */}
        <PageHeader 
          title="Contact Us"
          backgroundImage="/images/prodigy-banner.png"
          subtitle= "Get in touch with the Prodigy Team for questions, comments and support"
          tailwindStyles="bg-gradient-to-b from-gray-900 to-black"
        />

        {/* Contact Form Section */}
        <SciFiContactForm sectionTitle={false} title={''}/>

        {/* Additional Information Section */}
        <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* About Getting In Touch */}
            <div className="relative overflow-hidden rounded-lg bg-black/20 backdrop-blur-sm p-8">
              {/* Brutal Grid Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
              
              <div className="relative">
                <h2 className="text-3xl roboto-condensed mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-red-500 tracking-wider">
                  GET IN TOUCH
                </h2>
                
                <div className="space-y-6 text-white/80 font-mono tracking-wide leading-relaxed">
                  <p>
                    We maintain multiple communication channels for efficient contact. 
                    Each channel is optimized for specific inquiry types and response timeframes.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-red-500 pl-4">
                      <h3 className="text-red-400 font-bold mb-2">GENERAL INQUIRIES</h3>
                      <p className="text-sm">Primary communication channel for all general questions, feedback, and support requests.</p>
                    </div>
                    
                    <div className="border-l-4 border-red-500 pl-4">
                      <h3 className="text-red-400 font-bold mb-2">PRESS & MEDIA</h3>
                      <p className="text-sm">Dedicated channel for journalists, content creators, and media representatives.</p>
                    </div>
                    
                    <div className="border-l-4 border-red-500 pl-4">
                      <h3 className="text-red-400 font-bold mb-2">PARTNERSHIPS</h3>
                      <p className="text-sm">Strategic alliance requests, collaboration opportunities, and business proposals.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Information */}
            <div className="relative overflow-hidden rounded-lg bg-black/20 backdrop-blur-sm p-8">
              {/* Brutal Grid Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
              
              <div className="relative">
                <h2 className="text-3xl roboto-condensed mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-red-500  tracking-wider">
                   WHAT TO EXPECT 
                </h2>
                
                <div className="space-y-6 text-white/80 font-mono tracking-wide">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="text-red-400 font-bold">AUTO-RESPONSE</h3>
                        <p className="text-sm">Immediate confirmation of transmission receipt with tracking ID.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="text-red-400 font-bold">PRIORITY QUEUE</h3>
                        <p className="text-sm">Press and partnership inquiries receive expedited processing.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="text-red-400 font-bold">RESPONSE TIMEFRAME</h3>
                        <p className="text-sm">Standard inquiries: 24-48 hours. Priority inquiries: 12-24 hours.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="text-red-400 font-bold">FOLLOW-UP</h3>
                        <p className="text-sm">Complex inquiries may require additional transmission cycles for resolution.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Campaign Section */}
        <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-lg bg-black/95 border-t border-red-900/50 backdrop-blur-sm p-8">
            {/* Background grid effect */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            
            {/* Animated scanline effect */}
            <div className="absolute inset-0 scanline"></div>
            
            {/* Modern gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
            <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-red-500/30 to-transparent"></div>
            <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-red-500/30 to-transparent"></div>
            
            <div className="relative text-center">
              <h2 className="text-3xl md:text-4xl text-white roboto-condensed mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-500 tracking-wider">
                SUPPORT THE PROJECT
              </h2>
              
              <p className="text-lg text-filesystemYellow font-mono tracking-wide mb-8 max-w-2xl mx-auto leading-relaxed">
                Join our campaign to bring this brutal new age to life. 
                Your support powers the creation of Hell on Earth.
              </p>
              
              <a 
                href={contactInfo.campaignLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-red-900/50 hover:bg-red-800/50 rounded border border-red-700/50 hover:text-red-300 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25"
              >
                <span className="relative z-10">ACCESS CAMPAIGN CHANNEL</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-red-800/20 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 