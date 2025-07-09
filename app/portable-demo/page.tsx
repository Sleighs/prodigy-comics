'use client';
import PortableFeaturedCharactersSection from '@/components/PortableFeaturedCharactersSection';
import Footer from '@/components/Footer';

export default function PortableDemoPage() {
  return (
    <main className="min-h-screen pt-16 roboto">
      <div className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center">Portable Featured Characters Demo</h1>
          <p className="text-lg text-center mb-8">
            This demonstrates the new portable featured characters section with unique classnames.
            You can use this component anywhere without conflicts with the original.
          </p>
        </div>
      </div>

      {/* Portable Featured Characters Section */}
      <PortableFeaturedCharactersSection />

      <Footer />
    </main>
  );
} 