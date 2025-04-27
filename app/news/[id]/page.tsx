import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type ContentBlock = 
  | { type: 'text'; content: string }
  | { type: 'quote'; content: string }
  | { type: 'callout'; title: string; content: string[] };

type NewsArticle = {
  id: number;
  title: string;
  date: string;
  author: string;
  heroImage: string;
  content: ContentBlock[];
  relatedArticles: number[];
  cta: {
    text: string;
    link: string;
  };
};

// In a real app, this would come from an API or CMS
const newsArticles: Record<number, NewsArticle> = {
  1: {
    id: 1,
    title: "PRODIGY: Hell On Earth Book #0 Pre-orders Now LIVE!",
    date: "2024-03-20",
    author: "PRODIGY Team",
    heroImage: "/images/book0-preview1.png",
    content: [
      {
        type: "text",
        content: "The wait is finally over! PRODIGY: Hell on Earth Book #0 is now available for pre-order, marking the beginning of an epic journey into a world where humanity stands on the brink of evolutionary transformation."
      },
      {
        type: "quote",
        content: "The human race is at a pivotal point. The fight to acquire 'The GODSTRAND' is consuming the planet. Mortal men and women now see they can become... Gods."
      },
      {
        type: "text",
        content: "Pre-order your copy today and receive exclusive rewards including limited edition character cards, exclusive artwork, and behind-the-scenes content. The PRODIGY New Age STUFFED box edition includes EVERYTHING from the campaign in one epic package."
      },
      {
        type: "callout",
        title: "Pre-order Highlights",
        content: [
          "Signed copies by Ryan Benjamin and William Hamby",
          "Exclusive character cards with GOLDSTONE profiles",
          "Limited edition artwork",
          "Behind-the-scenes content"
        ]
      },
      {
        type: "text",
        content: "Don't miss out on this groundbreaking series that's set to redefine the superhero genre. Pre-order now and be part of the evolution."
      }
    ],
    relatedArticles: [2],
    cta: {
      text: "Pre-order Now",
      link: "https://www.indiegogo.com/projects/prodigy-new-age-hell-on-earth-book-0#/"
    }
  },
  2: {
    id: 2,
    title: "Meet the Creative Team Behind PRODIGY",
    date: "2024-03-15",
    author: "PRODIGY Team",
    heroImage: "/images/cybertech-logo.png",
    content: [
      {
        type: "text",
        content: "Get to know the visionaries bringing the dark and thrilling world of PRODIGY to life. Ryan Benjamin and William Hamby combine their talents to create a unique and compelling universe where humanity's evolution leads to both wonder and horror."
      },
      {
        type: "quote",
        content: "We wanted to create something that pushes the boundaries of traditional superhero storytelling, exploring the darker implications of human evolution and power."
      },
      {
        type: "text",
        content: "With decades of combined experience in the comics industry, the creative team brings a fresh perspective to the genre, blending intense action with deep character development and complex moral questions."
      }
    ],
    relatedArticles: [1],
    cta: {
      text: "Learn More About the Team",
      link: "/about"
    }
  }
};

export default function NewsArticle({ params }: { params: { id: string } }) {
  const articleId = parseInt(params.id);
  const article = newsArticles[articleId];

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-900 text-white">
      {/* Hero Section */}
      <section className="article-hero relative h-[50vh] bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${article.heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/50 to-black/50" />
        <div className="container mx-auto px-4 h-full flex items-end pb-12 relative z-10">
          <div className="max-w-3xl">
            <div className="mb-4">
              <Link 
                href="/news" 
                className="text-red-500 hover:text-red-400 flex items-center gap-2 mb-4 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to News
              </Link>
              <span className="text-red-500 text-sm">{article.date} • By {article.author}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins-bold leading-tight">
              {article.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {article.content.map((block, index) => {
            switch (block.type) {
              case 'text':
                return (
                  <div 
                    key={index} 
                    className="article-content" 
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                      {block.content}
                    </p>
                  </div>
                );
              case 'quote':
                return (
                  <div 
                    key={index} 
                    className="article-content" 
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <blockquote className="quote-block border-l-4 border-red-600 pl-6 my-8">
                      <p className="text-xl font-medium italic text-white">
                        {block.content}
                      </p>
                    </blockquote>
                  </div>
                );
              case 'callout':
                return (
                  <div 
                    key={index} 
                    className="article-content" 
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="callout-block bg-zinc-800 rounded-lg p-6 my-8">
                      <h3 className="text-xl font-bold mb-4">{block.title}</h3>
                      <ul className="list-disc list-inside space-y-2">
                        {block.content.map((item, i) => (
                          <li key={i} className="text-gray-300">{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              default:
                return null;
            }
          })}

          {/* CTA Section */}
          {article.cta && (
            <div className="article-content mt-12 text-center" style={{ animationDelay: '0.5s' }}>
              <a
                href={article.cta.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg transition-colors text-lg font-bold"
              >
                {article.cta.text}
              </a>
            </div>
          )}

          {/* Related Articles */}
          {article.relatedArticles && article.relatedArticles.length > 0 && (
            <section className="article-content mt-16 pt-12 border-t border-zinc-800" style={{ animationDelay: '0.6s' }}>
              <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
              <div className="grid gap-6">
                {article.relatedArticles.map(id => {
                  const related = newsArticles[id];
                  return (
                    <Link 
                      key={id}
                      href={`/news/${id}`}
                      className="related-article block bg-zinc-800 rounded-lg overflow-hidden"
                    >
                      <div className="p-6">
                        <span className="text-red-500 text-sm">{related.date}</span>
                        <h3 className="text-xl font-bold mt-2">{related.title}</h3>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}
        </div>
      </div>
    </main>
  );
} 