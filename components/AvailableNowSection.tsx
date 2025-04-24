import Image from "next/image";
import Link from "next/link";
import '@/styles/AvailableNowSection.css';

export default function AvailableNowSection() {
  return (
    <section className="py-20 home--available-now-section relative">
      <div className="home--available-now-bg"></div>
      
      {/* Full-height image with diagonal edge */}
      <div className="home--available-now-image">
        <div className="absolute inset-0 bg-blood opacity-0 group-hover:opacity-15 transition-opacity duration-300"></div>
        <Image
          src="/images/book0-preview1.png"
          alt="PRODIGY: Hell on Earth Book 0"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 55vw"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50" />
      </div>

      {/* Content */}
      <div className="home--available-now-content">
        <div className="max-w-xl">
          <span className="inline-block px-4 py-1 bg-blood text-white text-sm font-bold rounded-full mb-4">
            NEW RELEASE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold roboto-condensed-bold mb-4">
            PRODIGY: Hell on Earth Book #0
          </h2>
          <p className="text-xl text-white mb-6">
            The beginning of an epic saga where human evolution meets cosmic mystery. 
            Witness the rise of T.B.E.'s and the discovery of the GODSTRAND phenomenon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.indiegogo.com/projects/prodigy-new-age-hell-on-earth-book-0#/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-blood hover:bg-blood-dark text-white text-lg font-semibold transition-colors duration-300 text-center"
            >
              Get Your Copy
            </a>
            <Link
              href="/about"
              className="px-8 py-3 bg-steel-dark hover:bg-steel text-white text-lg font-semibold transition-colors duration-300 text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 