import Image from 'next/image';

export default function ModernStoreCTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative h-[500px] overflow-hidden shadow-xl">
            <Image
              src="/images/stuffed-box1.png"
              alt="Prodigy Collection"
              fill
              className="object-cover"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            {/* Badge */}
            <div className="absolute top-6 left-6">
              <span className="bg-white/90 backdrop-blur-sm text-black px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                Limited Time Offer
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">
              Join the Prodigy Universe
            </h2>
            <p className="text-lg text-gray-600">
              Be part of the revolution in comic storytelling. The Prodigy universe
              brings together action, cutting-edge storytelling and the catatrophic side effects associated with GODSTRAND integration.
            </p>
            
            {/* Features List */}
            <ul className="space-y-3">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Exclusive content and early access</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Limited edition collectibles</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Free shipping on orders over $50</span>
              </li>
              <li className="flex items-center hidden">
              <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700"></span>
              </li>
            </ul>

            {/* CTA Buttons */}
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-gray-900">Limited Time Offer</span>
              <a 
                href="https://www.indiegogo.com/projects/prodigy-new-age-hell-on-earth-book-0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-600 hover:text-gray-900"
              >
                Learn More
              </a>
            </div>
            <button 
              className="hidden w-full sm:w-auto bg-red-light hover:bg-red-dark text-white px-8 py-3 rounded-[999px] font-medium transition-colors shadow-lg hover:shadow-xl relative group cursor-pointer"
              disabled
            >
              Join Now
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Coming Soon
              </span>
            </button>

            {/* Trust Badges */}
            <div className="flex items-center gap-6 pt-6">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm text-gray-600">4.9/5 from 1000+ reviews</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-600">Secure checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 