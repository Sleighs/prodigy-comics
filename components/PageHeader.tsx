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
    <section className={tailwindStyles +  ` character-page-header relative h-[50vh] flex items-center justify-center overflow-hidden`}>
      {/* Scanline effect */}
      {/* <div className="absolute inset-0 scanline z-11"></div> */}
      
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
        <h1 className="text-4xl md:text-4xl font-bold mb-6 page-title roboto-condensed-bold">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-1xl max-w-1xl mx-auto text-muted">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
} 