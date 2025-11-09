import React from "react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-b from-[#1a1530] to-[#0a0a0f] text-white text-center border-t border-gray-800"
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mt-6">
          Built by{" "}
          <a
            href="https://verveautomation.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 no-underline transition-all duration-300 hover:text-indigo-300 hover:drop-shadow-[0_0_10px_rgba(99,102,241,0.6)]"
          >
            Verve Automation
          </a>
        </h2>

        {/* Short Description */}
        <p className="text-gray-400 text-base leading-relaxed max-w-2xl">
          AIVOICY is an innovation by Verve Automation, combining AI-driven
          voice interaction and telephony technologies to create seamless,
          multilingual communication experiences across devices and platforms.
        </p>
      </div>
    </section>
  );
}
