'use client'

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import '../styles/carousel.css';

type Slide = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
  price: string | null;
  accentColor: string;
  objectTop?: boolean;
  overlay?: boolean;
  yOffset?: string;
  xOffset?: string;
  imageContain?: string;
};

const slides = [
  {
    id: 1,
    title: "PRODIGY: Hell on Earth Book #0",
    subtitle: "The Beginning of the End",
    description: "The GODSTRAND has been discovered. Humanity will never be the same.",
    image: "/images/book0-preview1.png",
    link: "https://www.indiegogo.com/projects/prodigy-new-age-hell-on-earth-book-0#/",
    price: "$28.00",
    accentColor: "from-red-600 to-orange-500",
    overlay: true
  },
  {
    id: 2,
    title: "Ember & Impulse / Sisters of Fire",
    subtitle: "The Fire Sisters",
    description: "Two sisters. One destiny. Unlimited power.",
    image: "/images/ember-campaign.png",
    link: "https://www.indiegogo.com/projects/prodigy-new-age-hell-on-earth-book-0#/",
    price: null,
    accentColor: "from-orange-500 to-red-600",
    objectTop: false,
    xOffset: "15%",
    imageContain: false,
  },
  {
    id: 3,
    title: "PRODIGY New Age STUFFED box",
    subtitle: "The Ultimate Collection",
    description: "Everything you need to enter the world of PRODIGY. Limited time offer.",
    image: "/images/stuffed-box-cutout.png",
    link: "https://www.indiegogo.com/projects/prodigy-new-age-hell-on-earth-book-0#/",
    price: "$250.00",
    accentColor: "from-blue-600 to-purple-600"
  },
  {
    id: 4,
    title: "WOLFPAK",
    subtitle: "We Are No Longer Men",
    description: "The world's deadliest counter-measures team. Enhanced. Unleashed. Uncontrollable.",
    image: "/images/unknown4.png",
    link: "https://www.indiegogo.com/projects/prodigy-new-age-hell-on-earth-book-0#/",
    price: null,
    accentColor: "from-gray-900 to-red-900"
  },
  {
    id: 5,
    title: "Welcome to PRODIGY Comics",
    subtitle: "A New Age of Power",
    description: "The world is changing. Humans are evolving. The GODSTRAND has been discovered.",
    image: '/images/chaos-promo-cut2.png',
    link: "/story",
    price: null,
    accentColor: "from-blue-600 to-black-600"
  }
  // {
  //   id: 4,
  //   title: "CLAN BUSHIDO",
  //   subtitle: "Ancient Warriors",
  //   description: "Centuries of tradition. A new era of power.",
  //   image: "/images/clan-bushido-logo.png",
  //   link: "/story",
  //   price: null, //"$45.00",
  //   accentColor: "from-gray-800 to-gray-600"
  // },
];


export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);

  const SLIDE_DURATION = 5200; // Duration for each slide in milliseconds

  const startTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    if (isPaused) return;

    startTimeRef.current = Date.now();
    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const newProgress = (elapsed / SLIDE_DURATION) * 100;

      if (newProgress >= 100) {
        setCurrentSlide(prev => (prev + 1) % slides.length);
        setProgress(0);
        startTimeRef.current = Date.now();
      } else {
        setProgress(newProgress);
      }
    }, 16); // ~60fps

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  };

  useEffect(() => {
    const cleanup = startTimer();
    return cleanup;
  }, [currentSlide, isPaused]);

  const handleSlideChange = (index: number) => {
    if (index === currentSlide) {
      setIsPaused(!isPaused);
    }
    
    // Clear existing timer immediately
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    // Set slide position
    setCurrentSlide(index); 
    setProgress(0);

    if (!(index === currentSlide)) { 
      startTimeRef.current = Date.now();
      startTimer();
    }
  };

  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          {/* Background Image with Dynamic Overlay */}
          <div className="absolute inset-0">
            <div className={`absolute inset-0 bg-gradient-to-b ${slide.accentColor} opacity-80 mix-blend-multiply`} />
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              style={{ 
                left: slide.xOffset || '',
              }}
              className={`
                ${slide.objectTop ? 'object-top' : 'object-center'}
                ${slide.imageContain ? 'object-contain' : 'object-cover'}
              `}
              priority={index === 0}
            />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
          </div>

          {/* Content Container */}
          <div className="absolute inset-0 z-20 flex items-center roboto-condensed">
            <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12 w-full">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* Text Content */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-bold text-red-600 tracking-wider uppercase">
                      {slide.subtitle}
                    </h3>
                    <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                      {slide.title}
                    </h2>
                  </div>
                  <p className="text-lg md:text-xl text-gray-200 max-w-lg roboto">
                    {slide.description}
                  </p>
                    {/* {slide.price && (
                    <p className="text-3xl font-bold text-red-500">
                      {slide.price}
                    </p>
                  )} */}
                  <a
                    href={slide.link}
                    target={slide.link.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-3 bg-red-600 hover:bg-red-700 text-lg font-bold tracking-wider uppercase transition-all duration-300 transform hover:scale-105"
                  >
                    {slide.price ? 'Get It Now' : 'Enter the Universe'}
                  </a>
                </div>

                {/* Optional Image Overlay */}
                {(slide.overlay) && (
                  <div className={`hidden md:block relative h-[500px] ${
                    slide.objectTop ? 'md:-mt-20' : ''
                  }`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50" />
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className={`object-contain ${
                        slide.objectTop ? 'object-top' : 'object-center'
                      }`}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation Buttons */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-4 z-30">
        {slides.map((_, index) => (
          <div key={index} className="relative">
            <button
              onClick={() => handleSlideChange(index)}
              className={`h-1.5 w-[150px] transition-all duration-300 carousel-button ` 
              + (index === currentSlide && isPaused
                ? ` bg-red-light hover:bg-red-dark`
                : `bg-gray-600 hover:bg-gray-500`)
              }
              aria-label={`Go to slide ${index + 1}`}
              style={{
                cursor: 'pointer',
              }}
            />
            {(index === currentSlide && !isPaused) && (
              <div 
                className="absolute bottom-[30%] left-0 h-1.5 bg-red-light transition-all duration-100 ease-linear"
                style={{ width: `${progress}%`}} 
                onClick={() => handleSlideChange(index)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}