"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="AIVOICY Logo"
            width={36}
            height={36}
            className="rounded-full"
          />
          <span className="font-bold text-lg text-white">AIVOICY</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-300 hover:text-indigo-400 transition">
            Home
          </Link>
          <Link href="#features" className="text-gray-300 hover:text-indigo-400 transition">
            Features
          </Link>
          <Link href="#modes" className="text-gray-300 hover:text-indigo-400 transition">
            Modes
          </Link>
          <Link href="#about" className="text-gray-300 hover:text-indigo-400 transition">
            About
          </Link>
          <Link
            href="#download"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-500 transition"
          >
            Download
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 group"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span
            className={`w-6 h-0.5 bg-gray-300 transition-all duration-300 ease-in-out ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-gray-300 transition-all duration-300 ease-in-out ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-gray-300 transition-all duration-300 ease-in-out ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>
      <div
        className={`md:hidden bg-[#0a0a0f]/95 backdrop-blur-lg border-t border-gray-800 overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-6 px-6">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 text-lg font-medium w-full text-center py-2 hover:bg-gray-800/50 rounded-md"
          >
            Home
          </Link>
          <Link
            href="#features"
            onClick={() => setMenuOpen(false)}
            className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 text-lg font-medium w-full text-center py-2 hover:bg-gray-800/50 rounded-md"
          >
            Features
          </Link>
          <Link
            href="#modes"
            onClick={() => setMenuOpen(false)}
            className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 text-lg font-medium w-full text-center py-2 hover:bg-gray-800/50 rounded-md"
          >
            Modes
          </Link>
          <Link
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 text-lg font-medium w-full text-center py-2 hover:bg-gray-800/50 rounded-md"
          >
            About
          </Link>
          <Link
            href="#download"
            onClick={() => setMenuOpen(false)}
            className="bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-500 transition-all duration-200 w-full text-center shadow-lg hover:shadow-indigo-500/50"
          >
            Download
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;