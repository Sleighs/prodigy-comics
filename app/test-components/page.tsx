import React from 'react';
import IconGrid from '@/components/IconGrid';
import TestNavigation from '@/components/TestNavigation';

export default function TestComponentsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800">
      {/* Navigation */}
      <TestNavigation />
      
      {/* Header */}
      <div className="border-b border-red-500/20 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-white mb-2">
            Component Testing Lab
          </h1>
          <p className="text-red-300/80 text-lg">
            Test and compare all components in one place
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-12">
          
          {/* Icon Grid Section */}
          <section className="bg-black/20 rounded-lg border border-red-500/20 p-6 backdrop-blur-sm">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">
                Icon Collection
              </h2>
              <p className="text-gray-300">
                All 20 icons in a comprehensive grid for testing and comparison
              </p>
            </div>
            
            <IconGrid />
          </section>

          {/* Future Component Sections */}
          <section className="bg-black/20 rounded-lg border border-blue-500/20 p-6 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-4">
              Future Components
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-600/30">
                <h3 className="text-lg font-semibold text-white mb-2">Navigation</h3>
                <p className="text-gray-400 text-sm">Navigation components and menus</p>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-600/30">
                <h3 className="text-lg font-semibold text-white mb-2">Forms</h3>
                <p className="text-gray-400 text-sm">Form components and inputs</p>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-600/30">
                <h3 className="text-lg font-semibold text-white mb-2">Cards</h3>
                <p className="text-gray-400 text-sm">Product and content cards</p>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-600/30">
                <h3 className="text-lg font-semibold text-white mb-2">Modals</h3>
                <p className="text-gray-400 text-sm">Dialog and modal components</p>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-600/30">
                <h3 className="text-lg font-semibold text-white mb-2">Buttons</h3>
                <p className="text-gray-400 text-sm">Button variations and states</p>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-600/30">
                <h3 className="text-lg font-semibold text-white mb-2">Animations</h3>
                <p className="text-gray-400 text-sm">Animation and transition effects</p>
              </div>
            </div>
          </section>

          {/* Testing Controls */}
          <section className="bg-black/20 rounded-lg border border-green-500/20 p-6 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-4">
              Testing Controls
            </h2>
            <div className="flex flex-wrap gap-4">
              <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors">
                Test Theme
              </button>
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                Test Animation
              </button>
              <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
                Test Responsive
              </button>
              <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
                Export Icons
              </button>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
} 