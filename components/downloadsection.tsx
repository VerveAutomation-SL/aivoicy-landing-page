"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const cards = [
  {
    title: "App Store",
    subtitle: "iOS / iPadOS",
    description:
      "Download AIVOICY on iPhone and iPad to experience real-time AI translation, telephony, and intelligent voice chat.",
    badge: "/appstore-badge.png",
    link: "#",
  },
  {
    title: "Google Play",
    subtitle: "Android",
    description:
      "Get AIVOICY on Android for seamless multilingual communication and integrated AI-powered calling.",
    badge: "/googleplay-badge.png",
    link: "#",
  },
  {
    title: "AppGallery",
    subtitle: "Huawei Devices",
    description:
      "Explore AIVOICY through Huawei’s AppGallery — fully optimized for EMUI and HarmonyOS devices.",
    badge: "/appgaller-badge.png",
    link: "#",
  },
];

export default function DownloadSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % cards.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const card = cards[index];

  return (
    <section
      id="download"
      className="py-24 px-8 bg-[#0a0a0f] text-white border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden"
    >
      {/* Left Side — Static Heading */}
      <div className="flex-1 max-w-md text-left">
        <h2 className="text-4xl font-bold mb-4">
          Get the <span className="text-indigo-400">AIVOICY</span> App
        </h2>
        <p className="text-gray-400 leading-relaxed">
          Experience AIVOICY on any device — connect, translate, and communicate
          with intelligent voice AI wherever you are.
        </p>

        {/* Arrows */}
        <div className="flex gap-4 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-indigo-500 hover:text-indigo-400 transition"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-indigo-500 hover:text-indigo-400 transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Right Side — Animated Sliding Card */}
      <div className="flex-1 relative h-[320px] max-w-lg overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute w-full h-full bg-[#141425] border border-gray-800 rounded-2xl p-8 shadow-md shadow-indigo-500/10 flex flex-col justify-between"
          >
            <div>
              <p className="text-sm text-gray-400 mb-1">{card.subtitle}</p>
              <h3 className="text-3xl font-bold mb-4">{card.title}</h3>
              <p className="text-gray-300 leading-relaxed">{card.description}</p>
            </div>

            <div>
              {card.badge ? (
                <a
                  href={card.link}
                  className="inline-block hover:scale-105 transition-transform"
                >
                  <Image
                    src={card.badge}
                    alt={`${card.title} Badge`}
                    width={180}
                    height={60}
                  />
                </a>
              ) : (
                <a
                  href={card.link}
                  className="inline-flex items-center gap-2 text-indigo-400 font-semibold hover:text-indigo-300 transition"
                >
                  Download <ArrowRight size={16} />
                </a>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
