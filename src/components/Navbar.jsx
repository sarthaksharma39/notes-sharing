"use client"
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary-0 text-white">
      <div className="container mx-auto px-4 py-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-extrabold">
            <Link href="/">Notes Sharing</Link>
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-20">
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link href="/feature" className="hover:text-gray-300">
              Feature
            </Link>
            <Link href="/about" className="hover:text-gray-300">
              About
            </Link>
          </div>

          {/* Login Button - Desktop */}
          <div className="hidden md:block">
            <Link 
              href="/login" 
              className="bg-white rounded-3xl text-black px-4 py-1 hover:bg-gray-100 transition duration-300"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden mt-4`}>
          <div className="flex flex-col space-y-4">
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link href="/feature" className="hover:text-gray-300">
              Feature
            </Link>
            <Link href="/about" className="hover:text-gray-300">
              About
            </Link>
            <Link 
              href="/login" 
              className="bg-white text-black rounded-3xl px-4 py-1 hover:bg-gray-100 inline-block w-fit transition duration-300"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;