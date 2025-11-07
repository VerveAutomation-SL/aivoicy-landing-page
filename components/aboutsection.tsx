import React from "react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-b from-[#1a1530] to-[#0a0a0f] text-white text-center border-t border-gray-800"

    >
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
        {/* Verve Logo */}
        <Image
          src="/vervelogo.png"
          alt="Verve Automation Logo"
          width={180}
          height={180}
          className="opacity-90"
        />

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mt-6">
          Built by{" "}
          <span className="text-indigo-400">Verve Automation</span>
        </h2>

        {/* Short Description */}
        <p className="text-gray-400 text-base leading-relaxed max-w-2xl">
          AIVOICY is an innovation by Verve Automation, combining AI-driven
          voice interaction and telephony technologies to create seamless,
          multilingual communication experiences across devices and platforms.
        </p>

        {/* Footer Note */}
        <p className="text-gray-600 text-sm mt-6">
          © {new Date().getFullYear()} Verve Automation · All rights reserved.
        </p>
      </div>
    </section>
  );
}
