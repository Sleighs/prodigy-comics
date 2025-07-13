'use client';

import React, { useState } from 'react';

interface IconData {
  name: string;
  path: string;
  category: string;
  description: string;
  color: string;
}

const iconData: IconData[] = [
  // User Account Icons
  {
    name: 'User Account Primary',
    path: '/icons/user-account-primary.svg',
    category: 'User Account',
    description: 'Main user icon with purple gradient and glow effects',
    color: 'from-indigo-500 to-purple-600'
  },
  {
    name: 'User Account Secondary',
    path: '/icons/user-account-secondary.svg',
    category: 'User Account',
    description: 'Alternative with orange-red gradient',
    color: 'from-orange-500 to-red-500'
  },
  {
    name: 'User Account Outline',
    path: '/icons/user-account-outline.svg',
    category: 'User Account',
    description: 'Ethereal outline version with ghostly elements',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    name: 'User Account Memorial',
    path: '/icons/user-account-memorial.svg',
    category: 'User Account',
    description: 'Memorial-style reflecting loss theme',
    color: 'from-red-600 to-red-800'
  },
  {
    name: 'User Account Cyber',
    path: '/icons/user-account-cyber.svg',
    category: 'User Account',
    description: 'Cyberpunk version with digital elements',
    color: 'from-cyan-400 to-blue-500'
  },
  {
    name: 'User Account Badge',
    path: '/icons/user-account-badge.svg',
    category: 'User Account',
    description: 'Badge-style with official appearance',
    color: 'from-orange-500 to-orange-600'
  },
  {
    name: 'User Account Minimal',
    path: '/icons/user-account-minimal.svg',
    category: 'User Account',
    description: 'Minimalist version with clean lines',
    color: 'from-gray-500 to-gray-600'
  },

  // Cart Icons
  {
    name: 'Cart Primary',
    path: '/icons/cart-primary.svg',
    category: 'Cart',
    description: 'Main cart with green gradient and items',
    color: 'from-emerald-500 to-green-600'
  },
  {
    name: 'Cart Secondary',
    path: '/icons/cart-secondary.svg',
    category: 'Cart',
    description: 'Alternative with orange gradient',
    color: 'from-orange-500 to-orange-600'
  },
  {
    name: 'Cart Outline',
    path: '/icons/cart-outline.svg',
    category: 'Cart',
    description: 'Ethereal outline version',
    color: 'from-emerald-500 to-emerald-600'
  },
  {
    name: 'Cart Cyber',
    path: '/icons/cart-cyber.svg',
    category: 'Cart',
    description: 'Cyberpunk version with digital elements',
    color: 'from-cyan-400 to-blue-500'
  },
  {
    name: 'Cart Empty',
    path: '/icons/cart-empty.svg',
    category: 'Cart',
    description: 'Empty cart reflecting absence theme',
    color: 'from-gray-500 to-gray-600'
  },
  {
    name: 'Cart Badge',
    path: '/icons/cart-badge.svg',
    category: 'Cart',
    description: 'Badge-style cart',
    color: 'from-emerald-600 to-green-700'
  },
  {
    name: 'Cart Minimal',
    path: '/icons/cart-minimal.svg',
    category: 'Cart',
    description: 'Minimalist cart design',
    color: 'from-gray-500 to-gray-600'
  },

  // Shop Icons
  {
    name: 'Shop Primary',
    path: '/icons/shop-primary.svg',
    category: 'Shop',
    description: 'Main shop building with purple gradient',
    color: 'from-purple-500 to-indigo-600'
  },
  {
    name: 'Shop Secondary',
    path: '/icons/shop-secondary.svg',
    category: 'Shop',
    description: 'Alternative with orange gradient',
    color: 'from-orange-500 to-orange-600'
  },
  {
    name: 'Shop Outline',
    path: '/icons/shop-outline.svg',
    category: 'Shop',
    description: 'Ethereal outline version',
    color: 'from-purple-500 to-purple-600'
  },
  {
    name: 'Shop Cyber',
    path: '/icons/shop-cyber.svg',
    category: 'Shop',
    description: 'Cyberpunk version with digital elements',
    color: 'from-cyan-400 to-blue-500'
  },
  {
    name: 'Shop Memorial',
    path: '/icons/shop-memorial.svg',
    category: 'Shop',
    description: 'Memorial-style reflecting loss theme',
    color: 'from-red-600 to-red-800'
  },
  {
    name: 'Shop Badge',
    path: '/icons/shop-badge.svg',
    category: 'Shop',
    description: 'Badge-style shop',
    color: 'from-purple-600 to-purple-700'
  },
  {
    name: 'Shop Minimal',
    path: '/icons/shop-minimal.svg',
    category: 'Shop',
    description: 'Minimalist shop design',
    color: 'from-gray-500 to-gray-600'
  },
  {
    name: 'Store Collection',
    path: '/icons/store-collection.svg',
    category: 'Shop',
    description: 'Collection/marketplace style',
    color: 'from-pink-500 to-pink-600'
  }
];

const categories = ['All', 'User Account', 'Cart', 'Shop'];

export default function IconGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedIcon, setSelectedIcon] = useState<IconData | null>(null);
  const [copySuccess, setCopySuccess] = useState(false);

  const filteredIcons = selectedCategory === 'All' 
    ? iconData 
    : iconData.filter(icon => icon.category === selectedCategory);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const downloadIcon = async (icon: IconData) => {
    try {
      const response = await fetch(icon.path);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${icon.name.toLowerCase().replace(/\s+/g, '-')}.svg`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (err) {
      console.error('Failed to download: ', err);
    }
  };

  return (
    <div className="space-y-6">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg transition-all duration-200 ${
              selectedCategory === category
                ? 'bg-red-600 text-white shadow-lg'
                : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Icon Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {filteredIcons.map((icon, index) => (
          <div
            key={index}
            onClick={() => setSelectedIcon(icon)}
            className="group relative bg-gray-800/50 rounded-lg p-4 border border-gray-600/30 hover:border-red-500/50 transition-all duration-200 cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-red-500/20"
          >
            {/* Icon Display */}
            <div className="flex justify-center mb-3">
              <div className={`w-12 h-12 bg-gradient-to-br ${icon.color} rounded-lg flex items-center justify-center p-2`}>
                <img
                  src={icon.path}
                  alt={icon.name}
                  className="w-8 h-8"
                />
              </div>
            </div>

            {/* Icon Info */}
            <div className="text-center">
              <h3 className="text-sm font-semibold text-white mb-1 truncate">
                {icon.name.split(' ').slice(-1)[0]}
              </h3>
              <p className="text-xs text-gray-400 truncate">
                {icon.category}
              </p>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/80 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
              <div className="text-center p-2">
                <p className="text-xs text-white font-medium mb-1">
                  {icon.name}
                </p>
                <p className="text-xs text-gray-300">
                  Click to view details
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Icon Details Modal */}
      {selectedIcon && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gray-900 rounded-lg p-6 max-w-md w-full mx-4 border border-red-500/20">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white">
                {selectedIcon.name}
              </h3>
              <button
                onClick={() => setSelectedIcon(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="flex justify-center mb-4">
              <div className={`w-20 h-20 bg-gradient-to-br ${selectedIcon.color} rounded-lg flex items-center justify-center p-4`}>
                <img
                  src={selectedIcon.path}
                  alt={selectedIcon.name}
                  className="w-16 h-16"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div>
                <span className="text-sm font-semibold text-gray-300">Category:</span>
                <span className="text-sm text-white ml-2">{selectedIcon.category}</span>
              </div>
              <div>
                <span className="text-sm font-semibold text-gray-300">Description:</span>
                <p className="text-sm text-white mt-1">{selectedIcon.description}</p>
              </div>
              <div>
                <span className="text-sm font-semibold text-gray-300">Path:</span>
                <p className="text-sm text-gray-400 font-mono mt-1 break-all">
                  {selectedIcon.path}
                </p>
              </div>
            </div>

            <div className="flex gap-2 mt-6">
              <button 
                onClick={() => copyToClipboard(selectedIcon.path)}
                className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
              >
                {copySuccess ? 'Copied!' : 'Copy Path'}
              </button>
              <button 
                onClick={() => downloadIcon(selectedIcon)}
                className="flex-1 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
              >
                Download
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Stats */}
      <div className="mt-8 p-4 bg-gray-800/30 rounded-lg border border-gray-600/30">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-white">{iconData.length}</div>
            <div className="text-sm text-gray-400">Total Icons</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">{filteredIcons.length}</div>
            <div className="text-sm text-gray-400">Filtered Icons</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">{categories.length - 1}</div>
            <div className="text-sm text-gray-400">Categories</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">SVG</div>
            <div className="text-sm text-gray-400">Format</div>
          </div>
        </div>
      </div>
    </div>
  );
} 