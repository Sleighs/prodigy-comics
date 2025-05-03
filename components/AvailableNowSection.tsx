import Image from "next/image";
import Link from "next/link";
import '@/styles/AvailableNowSection.css';

interface AvailableNowSectionProps {
  imageSrc: string;
  title: string;
  subtitle?: string;
  description: string;
  primaryButton: {
    text: string;
    link: string;
    isExternal?: boolean;
  };
  secondaryButton?: {
    text: string;
    link: string;
  };
  badge?: string;
  slantDirection?: "left" | "right";
  className?: string;
  contentClassName?: string;
  imageClassName?: string;
  backgroundColor?: string;
}

export default function AvailableNowSection({
  imageSrc,
  title,
  subtitle,
  description,
  primaryButton,
  secondaryButton,
  badge,
  slantDirection,
  className = "",
  contentClassName = "",
  imageClassName = "",
  // reverseLayout = false
  backgroundColor = ""
}: AvailableNowSectionProps) {
  return (
    <section className={`py-20 home--available-now-section relative ${className}`}>
      {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-blue-800/20 to-blue-900/30"></div> */}
      <div className={`home--available-now-bg ` + backgroundColor}></div>
      
      {/* Full-height image with diagonal edge */}
      <div className={`home--available-now-image ${imageClassName}`}>
        <div className="absolute inset-0 bg-blood opacity-0 group-hover:opacity-15 transition-opacity duration-300"></div>
        <Image
          src={imageSrc}
          alt={title}
          fill
          className={`object-cover ` + 
          (slantDirection === 'left' ? 'slant-left' : 'slant-right')}
          priority
          sizes="(max-width: 768px) 100vw, 55vw"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50" />
      </div>

      {/* Content */}
      <div className={`max-w-xl px-6 ${contentClassName}`}>
        {badge && (
          <span className="inline-block px-4 py-1 bg-blood text-white text-sm font-bold rounded-full mb-4">
            {badge}
          </span>
        )}
        <h2 className="text-4xl md:text-5xl font-bold roboto-condensed-bold mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xl text-gold-highlight mb-4">
            {subtitle}
          </p>
        )}
        <p className="text-xl text-white mb-6">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          {primaryButton.isExternal ? (
            <a
              href={primaryButton.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-blood hover:bg-blood-dark text-white text-lg font-semibold transition-colors duration-300 text-center"
            >
              {primaryButton.text}
            </a>
          ) : (
            <Link
              href={primaryButton.link}
              className="px-8 py-3 bg-blood hover:bg-blood-dark text-white text-lg font-semibold transition-colors duration-300 text-center"
            >
              {primaryButton.text}
            </Link>
          )}
          {secondaryButton && (
            <Link
              href={secondaryButton.link}
              className="px-8 py-3 bg-steel-dark hover:bg-steel text-white text-lg font-semibold transition-colors duration-300 text-center"
            >
              {secondaryButton.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
} 