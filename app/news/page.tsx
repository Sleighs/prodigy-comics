import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '@/styles/news.css';

export default function NewsPage() {
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
      excerpt: "Get to know Ryan Benjamin and William Hamby, the visionaries bringing this dark superhero universe to life.",
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
      url: "https://www.youtube.com/watch?v=E7jsNUBGatQ"
    }
  ];

  return (
    <main className="min-h-screen bg-zinc-900 text-white">
      {/* Hero Section */}
      <section className="news-hero relative h-[40vh]">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/70 to-black/70 z-10" />
        <div className="container mx-auto px-4 h-full flex items-center relative z-20">
          <h1 className="text-6xl font-bold font-poppins-bold text-white">
            Latest News
          </h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Latest News Grid */}
        <section className="mb-20">
          <h2 className="section-header text-3xl font-roboto-condensed font-bold mb-8 border-l-4 border-red-600 pl-4">
            Breaking News
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {latestNews.map((news) => (
              <article 
                key={news.id}
                className="news-card bg-zinc-800 rounded-lg overflow-hidden"
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
          <h2 className="section-header text-3xl font-roboto-condensed font-bold mb-8 border-l-4 border-red-600 pl-4">
            Character Spotlight
          </h2>
          <div className="character-spotlight bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[400px] bg-black/50 rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">{featuredCharacter.name}</h3>
                <p className="text-gray-300 mb-6">{featuredCharacter.description}</p>
                <Link 
                  href="/characters/genesis" 
                  className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Videos Section */}
        <section className="mb-20">
          <h2 className="section-header text-3xl font-roboto-condensed font-bold mb-8 border-l-4 border-red-600 pl-4">
            Latest Videos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div key={video.id} className="video-card bg-zinc-800 rounded-lg overflow-hidden">
                <div className="relative h-48 bg-black">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="video-play-button w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Product Spotlight */}
        <section>
          <h2 className="section-header text-3xl font-roboto-condensed font-bold mb-8 border-l-4 border-red-600 pl-4">
            Featured Product
          </h2>
          <div className="product-spotlight bg-gradient-to-br from-zinc-800 via-zinc-900 to-black rounded-lg p-8">
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
                  className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors"
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