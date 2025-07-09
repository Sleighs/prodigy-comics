import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Prodigy Comics',
  description: 'Get in touch with the Prodigy Network. Establish direct communication for inquiries, partnerships, and feedback.',
  keywords: 'contact, prodigy comics, communication, support, partnerships, press',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black">
      {children}
    </div>
  );
} 