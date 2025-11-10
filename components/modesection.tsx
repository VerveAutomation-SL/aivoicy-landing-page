"use client";
import React from "react";
import Link from "next/link";
import { Mic, Phone, Bot, Languages } from "lucide-react";

export default function ModesSection() {
  return (
    <section
      id="modes"
      className="py-24 px-6 bg-[#1a1530] text-white text-center"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Choose Your <span className="text-indigo-400">AI Mode</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-16">
          AIVOICY adapts to your workflow — whether you need conversational AI or smart telephony automation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* ASK ME MODE */}
          <div className="group relative p-8 bg-[#1a1a24] rounded-xl border border-gray-800 hover:border-indigo-500/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] transition-all duration-300">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-indigo-600/10 rounded-full">
                <Mic size={40} className="text-indigo-400" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-3">Ask Me Mode</h3>
            <p className="text-gray-400 mb-6">
              Talk naturally to your AI assistant — speak, listen, and get instant multilingual responses.
            </p>
            <ul className="text-gray-300 text-sm space-y-2 mb-6">
              <li className="flex items-center justify-center gap-2">
                <Bot size={16} className="text-indigo-400" /> Real-time AI integration
              </li>
              <li className="flex items-center justify-center gap-2">
                <Languages size={16} className="text-indigo-400" /> Multi-language translation
              </li>
              <li className="flex items-center justify-center gap-2">
                <Mic size={16} className="text-indigo-400" /> Offline and online modes
              </li>
            </ul>
            <Link
              href="/askme"
              className="inline-block px-6 py-2 border border-indigo-500 text-indigo-400 rounded-md hover:bg-indigo-500 hover:text-white transition"
            >
              Learn More
            </Link>
          </div>

          {/* TELEPHONY MODE */}
          <div className="group relative p-8 bg-[#1a1a24] rounded-xl border border-gray-800 hover:border-green-500/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] transition-all duration-300">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-green-500/10 rounded-full">
                <Phone size={40} className="text-green-400" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-3">Telephony Mode</h3>
            <p className="text-gray-400 mb-6">
              Integrate AI directly into phone calls — transcribe, translate, and respond intelligently.
            </p>
            <ul className="text-gray-300 text-sm space-y-2 mb-6">
              <li className="flex items-center justify-center gap-2">
                <Phone size={16} className="text-green-400" /> Smart call routing
              </li>
              <li className="flex items-center justify-center gap-2">
                <Languages size={16} className="text-green-400" /> Real-time translation
              </li>
              <li className="flex items-center justify-center gap-2">
                <Bot size={16} className="text-green-400" /> Automated AI transcripts
              </li>
            </ul>
            <Link
              href="/telephony"
              className="inline-block px-6 py-2 border border-green-500 text-green-400 rounded-md hover:bg-green-500 hover:text-white transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
