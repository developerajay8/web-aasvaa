"use client";
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/logo.png';
import Mlogo from '../../../public/mlogo.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProducts = () => setIsProductsOpen(!isProductsOpen);

  const productsRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (productsRef.current && !productsRef.current.contains(event.target)) {
        setIsProductsOpen(false);
      }
    }

    if (isProductsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isProductsOpen]);

  const handleSubmenuClick = () => {
    setIsProductsOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#1B1B1B] text-white">
      <div className="max-w-[1440px] mx-auto py-[16px] px-[16px]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link href="/">
              <Image src={Mlogo} alt="logo" className="md:hidden block" />
              <Image src={Logo} alt="logo" className="md:block hidden" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="lg:block hidden relative">
            <nav className="hidden md:flex items-center gap-[24px] text-[16px] font-[400] text-[#FFFF00] bg-gradient-to-r from-[#272700] to-[#505000] origin-left px-[16px] rounded-[10px] border-[1px] border-[#8E8E00]">
              <Link
                href="/"
                className="p-[10px] hover:text-yellow-300 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/aboutus"
                className="p-[10px] hover:text-yellow-300 transition-colors"
              >
                About us
              </Link>

              {/* Products with dropdown */}
              <div ref={productsRef} className="relative">
                <button
                  onClick={toggleProducts}
                  className="p-[10px] hover:text-yellow-300 transition-colors cursor-pointer flex items-center focus:outline-none"
                  aria-expanded={isProductsOpen}
                  aria-haspopup="true"
                >
                  Products
                  <svg
                    className={`ml-1 w-6 h-6 fill-current text-yellow-400 transition-transform duration-300 ${
                      isProductsOpen ? 'rotate-180' : ''
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5.516 7.548l4.484 4.485 4.484-4.485z" />
                  </svg>
                </button>

                {isProductsOpen && (
                  <div className="absolute left-0 top-full mt-1 w-40 bg-[#272700] rounded-md shadow-lg z-50">
                    <Link
                      href="/aasvaaera"
                      className="block px-4 py-2  transition-colors"
                      onClick={handleSubmenuClick}
                    >
                      AasvaaEra
                    </Link>
                    <Link
                      href="/lumex"
                      className="block px-4 py-2  transition-colors"
                      onClick={handleSubmenuClick}
                    >
                      Lumex
                    </Link>
                    <Link
                      href="/gojuris"
                      className="block px-4 py-2  transition-colors"
                      onClick={handleSubmenuClick}
                    >
                      Gojuris
                    </Link>
                  </div>
                )}
              </div>

              
              <Link
                href="/team"
                className="p-[10px] hover:text-yellow-300 transition-colors"
              >
                Team
              </Link>
            </nav>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <img src="/Frame 3384981.png" alt="phone icon" />
            <div>
              <button onClick={() => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}  className="rounded-[10px] cursor-pointer text-[16px] font-semibold text-[#FFFF00] bg-gray-500 py-[15px] px-[22px] transition-all duration-300 hover:bg-[#FFFF00] hover:text-black hover:shadow-yellow-glow custom-glow">
                Contact us
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-700">
              <Link
                href="/"
                className="block px-3 py-2 text-yellow-400 hover:text-yellow-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/aboutus"
                className="block px-3 py-2 text-yellow-400 hover:text-yellow-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About us
              </Link>

              {/* Mobile Products dropdown */}
              <div ref={productsRef}>
                <button
                  onClick={toggleProducts}
                  className="flex items-center justify-between w-full px-3 py-2 hover:text-yellow-400 text-left focus:outline-none"
                  aria-expanded={isProductsOpen}
                >
                  Products
                  <svg
                    className={`w-5 h-5 ml-2 transition-transform duration-300 ${
                      isProductsOpen ? 'rotate-180' : ''
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isProductsOpen && (
                  <div className="pl-6">
                    <Link
                      href="/aasvaaera"
                      className="block px-3 py-2 hover:text-yellow-400"
                      onClick={() => {
                        setIsProductsOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      AasvaaEra
                    </Link>
                    <Link
                      href="/lumex"
                      className="block px-3 py-2 hover:text-yellow-400"
                      onClick={() => {
                        setIsProductsOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      Lumex
                    </Link>
                    <Link
                      href="/gojuris"
                      className="block px-3 py-2 hover:text-yellow-400"
                      onClick={() => {
                        setIsProductsOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      Gojuris
                    </Link>
                  </div>
                )}
              </div>

              
              <Link
                href="/team"
                className="block px-3 py-2 hover:text-yellow-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </Link>

              <div className="flex space-x-2 px-3 pt-4">
                <button className="border border-yellow-400 text-yellow-400 px-4 py-2 rounded text-sm  transition-colors">
                  Login
                </button>
                <button onClick={() => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}  className="bg-yellow-400 text-black px-4 py-2 rounded text-sm hover:bg-yellow-500 transition-colors">
                  Contact us
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
