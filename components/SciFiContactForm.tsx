'use client'

import React, { useState } from 'react';
import { contactInfo } from '../config/contact';
import '../styles/SciFiContactForm.css';
import { title } from 'process';

interface SciFiContactFormProps {
  className?: string;
  sectionTitle?: boolean;
  title?: string;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  category: string;
}

export default function SciFiContactForm({ className = '', sectionTitle, title }: SciFiContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // For demo purposes, always show success
    setSubmitStatus('success');
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        category: 'general'
      });
      setSubmitStatus('idle');
    }, 3000);
  };

  return (
    <section className={`py-16 px-4 md:px-8 max-w-6xl mx-auto ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-8 font-roboto-condensed tracking-wider text-white">
        {title || (sectionTitle && 'Contact Us')}
      </h2>
      
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Contact Form - Professional */}
        <div className="relative overflow-hidden rounded-lg bg-black/20 backdrop-blur-sm p-8">
          {/* Tron Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
          {/* Tron Scanline Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent animate-scan"></div>
          <div className="relative">
            <h3 className="text-2xl roboto-condensed mb-6 text-white tracking-wider">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Category Selection */}
                              <div className="space-y-2">
                  <label className="text-sm font-roboto tracking-widest text-red-400">
                    Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full bg-black/50 border border-red-500/30 text-white px-4 py-3 font-roboto tracking-wide focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                  >
                  <option value="general">General Inquiry</option>
                  <option value="press">Press & Media</option>
                  <option value="partnerships">Partnerships</option>
                  <option value="support">Technical Support</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>
                              {/* Name Field */}
                <div className="space-y-2">
                  <label className="text-sm font-roboto tracking-widest text-red-400">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black/50 border border-red-500/30 text-white px-4 py-3 font-roboto tracking-wide focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                              {/* Email Field */}
                <div className="space-y-2">
                  <label className="text-sm font-roboto tracking-widest text-red-400">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black/50 border border-red-500/30 text-white px-4 py-3 font-roboto tracking-wide focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                              {/* Subject Field */}
                <div className="space-y-2">
                  <label className="text-sm font-roboto tracking-widest text-red-400">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black/50 border border-red-500/30 text-white px-4 py-3 font-roboto tracking-wide focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                    placeholder="Enter subject"
                  />
                </div>
                              {/* Message Field */}
                <div className="space-y-2">
                  <label className="text-sm font-roboto tracking-widest text-red-400">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full bg-black/50 border border-red-500/30 text-white px-4 py-3 font-roboto tracking-wide focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all resize-none"
                    placeholder="Type your message..."
                  />
                </div>
              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 disabled:from-gray-600 disabled:to-gray-700 text-white font-roboto-condensed tracking-wider py-4 px-6 transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-900/20 border border-green-500/50 text-green-400 font-roboto tracking-wide">
                  ✓ Your message has been sent successfully.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-900/20 border border-red-500/50 text-red-400 font-roboto tracking-wide">
                  ✗ There was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Contact Information - Holographic Display */}
        <div className="relative overflow-hidden rounded-lg bg-black/20 backdrop-blur-sm p-8">
          {/* Tron Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
          
          {/* Tron Scanline Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent animate-scan"></div>
          
          <div className="relative space-y-6">
            <h3 className="text-2xl roboto-condensed mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-white-500 tracking-wider">
              Email Us
            </h3>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="text-sm font-roboto tracking-widest text-red-400">Primary Contact</h4>
                <a href={`mailto:${contactInfo.email}`} className="block text-white/70 hover:text-red-400 transition-colors font-roboto tracking-wide">
                  {contactInfo.email}
                </a>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-roboto tracking-widest text-red-400">Press & Media</h4>
                <a href={`mailto:${contactInfo.pressEmail}`} className="block text-white/70 hover:text-red-400 transition-colors font-roboto tracking-wide">
                  {contactInfo.pressEmail}
                </a>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-roboto tracking-widest text-red-400">Partnerships</h4>
                <a href={`mailto:${contactInfo.partnershipsEmail}`} className="block text-white/70 hover:text-red-400 transition-colors font-roboto tracking-wide">
                  {contactInfo.partnershipsEmail}
                </a>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-roboto tracking-widest text-red-400">Campaign</h4>
                <a href={contactInfo.campaignLink} target="_blank" rel="noopener noreferrer" className="block text-white/70 hover:text-red-400 transition-colors font-roboto tracking-wide">
                  View Campaign
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-red-500/20">
              <h4 className="text-sm roboto-condensed tracking-widest text-red-400 mb-4">Social Media</h4>
              <div className="grid grid-cols-2 gap-3">
                <a href={contactInfo.social.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-red-500/20 to-red-600/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </div>
                  <span className="text-white/70 group-hover:text-red-400 font-roboto text-xs tracking-wide">X/Twitter</span>
                </a>
                <a href={contactInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-red-500/20 to-red-600/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </div>
                  <span className="text-white/70 group-hover:text-red-400 font-roboto text-xs tracking-wide">Instagram</span>
                </a>
                <a href={contactInfo.social.youtube} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-red-500/20 to-red-600/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                  <span className="text-white/70 group-hover:text-red-400 font-roboto text-xs tracking-wide">YouTube</span>
                </a>
                <a href={contactInfo.social.discord} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-red-500/20 to-red-600/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                    </svg>
                  </div>
                  <span className="text-white/70 group-hover:text-red-400 font-roboto text-xs tracking-wide">Discord</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 