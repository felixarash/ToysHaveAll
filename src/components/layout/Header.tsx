'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`py-6 px-4 sm:px-8 sticky top-0 z-50 transition-colors duration-300
      ${isMenuOpen ? 'bg-purple-500/90' : 'bg-white/10'} backdrop-blur-sm`}>
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold text-gray-900 animate-bounce">
          🧸 ToysHaveAll
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-gray-900">
          <Link href="/shop" className="hover:scale-110 transition-transform hover:bg-white/20 px-4 py-2 rounded-lg">
            Shop
          </Link>
          <Link href="/cart" className="hover:scale-110 transition-transform hover:bg-white/20 px-4 py-2 rounded-lg">
            Cart
          </Link>
          <Link href="/auth/signin" className="hover:scale-110 transition-transform hover:bg-white/20 px-4 py-2 rounded-lg">
            Sign In
          </Link>
          <Link href="/auth/signup" className="hover:scale-110 transition-transform bg-white/20 px-4 py-2 rounded-lg">
            Sign Up
          </Link>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-purple-500/90 backdrop-blur-md md:hidden
            border-t border-white/20 shadow-lg animate-fadeIn">
            <div className="flex flex-col items-center space-y-4 py-6">
              <Link 
                href="/shop" 
                className="text-white hover:scale-105 transition-all w-full text-center
                  hover:bg-white/20 py-3"
              >
                Shop
              </Link>
              <Link 
                href="/cart" 
                className="text-white hover:scale-105 transition-all w-full text-center
                  hover:bg-white/20 py-3"
              >
                Cart
              </Link>
              <Link 
                href="/auth/signin" 
                className="text-white hover:scale-105 transition-all w-full text-center
                  hover:bg-white/20 py-3"
              >
                Sign In
              </Link>
              <Link 
                href="/auth/signup" 
                className="text-white hover:scale-105 transition-all w-full text-center
                  bg-white/20 py-3"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}