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
          className="md:hidden text-gray-300 hover:text-indigo-400"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0f] border-t border-gray-800 flex flex-col items-center gap-4 py-4">
          <Link href="/" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-indigo-400">
            Home
          </Link>
          <Link href="#features" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-indigo-400">
            Features
          </Link>
          <Link href="#modes" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-indigo-400">
            Modes
          </Link>
          <Link href="#about" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-indigo-400">
            About
          </Link>
          <Link
            href="#download"
            onClick={() => setMenuOpen(false)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-500 transition"
          >
            Download
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
