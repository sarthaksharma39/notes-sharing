"use client"
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        {/* Logo */}
        <div className="text-2xl font-extrabold">
          <Link href="/">Notes Sharing</Link>
        </div>

        {/* Hamburger Menu for Mobile */}
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

        {/* Nav Links */}
        <div
          className="flex flex-row space-x-20 ">
          <div>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </div>
          <div>
            <Link href="/feature" className="hover:text-gray-300">
              Feature
            </Link>
          </div>
          <div>
            <Link href="/about" className="hover:text-gray-300">
              About
            </Link>
          </div>
        </div>
        <div className='bg-white rounded-3xl text-black pl-4 pr-4 pt-1 pb-1 '>
          <Link href="/login" className="hover:text-gray-500">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
