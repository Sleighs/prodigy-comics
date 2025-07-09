'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '@/styles/news.css';
import { FaTwitter, FaInstagram, FaYoutube, FaDiscord } from 'react-icons/fa';

export default function NewsPage() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  // Mock data - in a real app this would come from an API or CMS
  const latestNews = [
    {
      id: 1,
      title: "PRODIGY: Hell on Earth Book #0 Pre-orders Now Live!",
      date: "2024-03-20",
      excerpt: "Join the fight for survival as mortals ascend to godhood. Pre-order your copy now and get exclusive rewards!",
      image: "/news/hell-on-earth-preorder.jpg"
    },
    {
      id: 2,
      title: "Meet the Creative Team Behind PRODIGY",
      date: "2024-03-15",
      excerpt: "Get to know [writer] and [artist], the visionaries bringing this brutal superhero universe to life.",
      image: "/news/creative-team.jpg"
    }
  ];

  const featuredCharacter = {
    name: "Genesis",
    description: "A mysterious figure whose arrival sends shockwaves through the PRODIGY universe. Her true nature and motivations remain unknown, but her impact will be felt by all who cross her path.",
    image: "/characters/genesis-spotlight.jpg"
  };

  const featuredProduct = {
    name: "PRODIGY New Age STUFFED box",
    price: "$250",
    description: "The ultimate PRODIGY collection! Get EVERYTHING from the campaign in one epic package.",
    image: "/products/stuffed-box.jpg",
    link: "https://www.indiegogo.com/projects/prodigy-new-age-hell-on-earth-book-0#/"
  };

  const videos = [
    {
      id: 1,
      title: "PRODIGY: Hell on Earth Official Trailer",
      thumbnail: "/videos/trailer-thumb.jpg",
      url: "https://www.youtube.com/watch?v=E7jsNUBGatQ&list=PLel1QxCurC7nMeMISatZQoNRzjZFlpkUI&index=19&ab_channel=PopCultureRocks",
      embed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/E7jsNUBGatQ?si=Yy-PniMJTfHs_D2k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    }
  ];

  return (
    <main className="min-h-screen bg-zinc-900 text-white pt-16"> {/* Add pt-16 here */}
       {/* Social Strip */}
       <div className="bg-zinc-800 py-3">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <button 
            className="bg-red-light hover:bg-red-700 text-white px-6 py-2 text-sm font-medium transition-colors roboto-condensed-bold"
            // onClick={() => window.open('https://prodigycomics.com/newsletter', '_blank')}
          >
            NEWSLETTER SIGN-UP
          </button>

          <div className="flex items-center space-x-6 mb-3 sm:mb-0">
            <span className="text-sm font-medium">Follow us:</span>
            <div className="flex space-x-4">
              <a href="https://twitter.com/ProdigyComics" className="text-gray-400 hover:text-red-500 transition-colors">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/ProdigyComics" className="text-gray-400 hover:text-red-500 transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/@ProdigyComics" className="text-gray-400 hover:text-red-500 transition-colors">
                <FaYoutube className="w-5 h-5" />
              </a>
              <a href="https://discord.gg/prodigycomics" className="text-gray-400 hover:text-red-500 transition-colors">
                <FaDiscord className="w-5 h-5" />
              </a>
            </div>
          </div>
         
        </div>
      </div>


      <div className="container mx-auto px-4 py-12">
        {/* Latest News Grid */}
        <section className="mb-20">
          <h2 className="section-header text-3xl roboto-condensed-bold mb-8 border-l-4 border-red-600 pl-4">
            LATEST NEWS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {latestNews.map((news) => (
              <article 
                key={news.id}
                className="news-card bg-zinc-800 overflow-hidden"
              >
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-red-600/20 z-10" />
                </div>
                <div className="p-6">
                  <span className="text-red-500 text-sm">{news.date}</span>
                  <h3 className="text-xl font-bold mb-2">{news.title}</h3>
                  <p className="text-gray-300">{news.excerpt}</p>
                  <Link href={`/news/${news.id}`} className="inline-block mt-4 text-red-500 hover:text-red-400">
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Character Spotlight */}
        <section className="mb-20">
          <h2 className="section-header text-3xl roboto-condensed-bold mb-8 border-l-4 border-red-600 pl-4">
            SPOTLIGHT
          </h2>
          <div className="character-spotlight bg-gradient-to-r from-zinc-800 to-zinc-900 p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[400px] bg-black/50">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">{featuredCharacter.name}</h3>
                <p className="text-gray-300 mb-6">{featuredCharacter.description}</p>
                <Link 
                  href="/characters/genesis" 
                  className="inline-block bg-red-light hover:bg-red-dark text-white px-6 py-3 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Videos Section */}
        <section className="mb-20">
          <h2 className="section-header text-3xl roboto-condensed-bold font-bold mb-8 border-l-4 border-red-600 pl-4">
            LATEST VIDEOS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div key={video.id} className="video-card bg-zinc-800 overflow-hidden">
                {activeVideo === video.id ? (
                  <div className="relative aspect-video"
                       dangerouslySetInnerHTML={{ __html: video.embed }} 
                  />
                ) : (
                  <div 
                    className="relative h-48 bg-black cursor-pointer"
                    onClick={() => setActiveVideo(video.id)}
                  >
                    <Image 
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center hover:bg-black/30 transition-colors">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
                <div className="p-4">
                  <h3 className="font-bold">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Product Spotlight */}
        <section>
          <h2 className="section-header text-3xl roboto-condensed-bold mb-8 border-l-4 border-red-600 pl-4">
            FEATURED PROMO
          </h2>
          <div className="product-spotlight bg-gradient-to-br from-zinc-800 via-zinc-900 to-black p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[300px] bg-black/50 rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-transparent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{featuredProduct.name}</h3>
                <p className="text-red-500 text-xl mb-4">{featuredProduct.price}</p>
                <p className="text-gray-300 mb-6">{featuredProduct.description}</p>
                <a 
                  href={featuredProduct.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 transition-colors"
                >
                  Pre-order Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}