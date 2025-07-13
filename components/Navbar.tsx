'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';
import '@/styles/navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();
  
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar"> 
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-brand">
            <Link href="/" className="navbar-title">
              PRODIGY: NEW AGE
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="navbar-desktop">
            <div className="navbar-nav">
              <Link href="/story" className="navbar-link">
                STORY
              </Link>
              <Link href="/characters" className="navbar-link">
                CHARACTERS
              </Link>
              <Link href="/store" className="navbar-link">
                STORE
              </Link>
              <Link href="/about" className="navbar-link">
                ABOUT
              </Link>
              <Link href="/news" className="navbar-link">
                NEWS
              </Link>
              <Link href="/contact" className="navbar-link">
                CONTACT
              </Link>
              {/* <Link href="/store/cart" className="navbar-link">
                <img src="/icons/shopping-cart-gs.svg" alt="Cart" className="navbar-cart-icon" />
                {cartItemCount > 0 && (
                  <span className="cart-badge">
                    {cartItemCount}
                  </span>
                )}
              </Link> */}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="navbar-mobile-toggle">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="navbar-toggle-button"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="navbar-toggle-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="navbar-toggle-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="navbar-mobile">
          <div className="navbar-mobile-content">
            <Link 
              href="/story" 
              className="navbar-mobile-link"
              onClick={() => setIsOpen(false)}
            >
              STORY
            </Link>
            <Link 
              href="/characters" 
              className="navbar-mobile-link"
              onClick={() => setIsOpen(false)}
            >
              CHARACTERS
            </Link>
            <Link 
              href="/store" 
              className="navbar-mobile-link"
              onClick={() => setIsOpen(false)}
            >
              STORE
            </Link>
            <Link 
              href="/about" 
              className="navbar-mobile-link"
              onClick={() => setIsOpen(false)}
            >
              ABOUT
            </Link>
            <Link 
              href="/news" 
              className="navbar-mobile-link"
              onClick={() => setIsOpen(false)}
            >
              NEWS
            </Link>
            <Link 
              href="/contact" 
              className="navbar-mobile-link"
              onClick={() => setIsOpen(false)}
            >
              CONTACT
            </Link>
            <Link 
              href="/store/cart" 
              className="navbar-mobile-link"
              onClick={() => setIsOpen(false)}
            >
              CART
              {cartItemCount > 0 && (
                <span className="cart-badge-mobile">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavbarCenter() {
  return (
    <div className="navbar-center">
      <Link href="/" className="navbar-center-title">
          PRODIGY: NEW AGE
          {/* <img 
          src="/images/logo.png" 
          alt="Prodigy: New Age Logo"
          className="h-16 w-auto"
        /> */}
      </Link>
      <div className="navbar-center-nav">
        <Link href="/story" className="navbar-center-link">
          STORY
        </Link>
        <Link href="/characters" className="navbar-center-link">
          CHARACTERS
        </Link>
        <Link href="/store" className="navbar-center-link">
          STORE
        </Link>
        <Link href="/news" className="navbar-center-link">
          NEWS
        </Link>
        <Link href="/about" className="navbar-center-link">
          ABOUT
        </Link>
        <Link href="/contact" className="navbar-center-link">
          CONTACT
        </Link>
      </div>
    </div>
  );
}

export { Navbar, NavbarCenter };