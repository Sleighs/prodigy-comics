import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Component Testing Lab - Prodigy Comics',
  description: 'Test and compare components in a dangerous world of development',
};

export default function TestComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800">
      {children}
    </div>
  );
} 