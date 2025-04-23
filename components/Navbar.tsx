'use client';

import { useState } from 'react';
import Link from 'next/link';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/75 backdrop-blur-sm roboto-condensed-bold"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="nav-title text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              PRODIGY: NEW AGE
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 ">
              <Link href="/story" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                STORY
              </Link>
              <Link href="/characters" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                CHARACTERS
              </Link>
              <Link href="/store" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                STORE
              </Link>
              <Link href="/news" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                NEWS
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                ABOUT
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/story" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              The Story
            </Link>
            <Link href="/characters" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Characters
            </Link>
            <Link href="/store" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Store
            </Link>
            <Link href="/news" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              News
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavbarCenter() {
  return (
    <div className="fixed w-full z-50 bg-black/75 backdrop-blur-sm roboto-condensed-bold">
      <Link href="/" className="nav-title flex items-center justify-center text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              PRODIGY: NEW AGE{/* <img 
          src="/images/logo.png" 
          alt="Prodigy: New Age Logo"
          className="h-16 w-auto"
        /> */}
      </Link>
      <div className="flex items-center justify-center space-x-4">
        <Link href="/story" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
          STORY
        </Link>
        <Link href="/characters" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
          CHARACTERS
        </Link>
        <Link href="/store" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
          STORE
        </Link>
        <Link href="/news" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
          NEWS
        </Link>
        <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
          ABOUT
        </Link>
      </div>
    </div>
  );
}

export { Navbar, NavbarCenter };