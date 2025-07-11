import Image from 'next/image';

interface PageHeaderProps {
  title: string;
  backgroundImage: string;
  subtitle?: string;
  tailwindStyles?: string;
}

export default function PageHeader({ 
  title, 
  backgroundImage, 
  subtitle, 
  tailwindStyles = "bg-gradient-to-b from-gray-900 to-black"
}: PageHeaderProps) {
  return (
    <section className={tailwindStyles +  ` relative h-[50vh] flex items-center justify-center overflow-hidden`}>
      {/* Scanline effect */}
      <div className="absolute inset-0 scanline z-11"></div>
      
      <div className="absolute inset-0 z-1">
        <div className="absolute inset-0 bg-black/80" />
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover hidden"
          priority
        />
      </div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 page-title">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-muted">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
} 