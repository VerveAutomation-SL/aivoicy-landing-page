import React from "react";
import Image from "next/image";
import { PhoneCall, Mic, Languages, Network } from "lucide-react";

export default function TelephonySection() {
  return (
    <section
      id="telephony"
      className="relative py-24 px-6 bg-gradient-to-b from-[#0a0a15] via-[#1a1530] to-[#0a0a15] text-white text-center overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-indigo-600 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10">
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-300 bg-clip-text text-transparent">
          Deep Dive into <span className="text-indigo-400">Telephony Mode</span>
        </h2>
        <p className="text-gray-400 mb-16 max-w-2xl mx-auto text-lg">
          AIVOICY Telephony seamlessly connects your AI assistant with live call
          systems — transcribing, translating, and routing calls intelligently in
          real time across multiple languages.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-5xl mx-auto mb-20">
          {[
            { icon: <PhoneCall />, label: "Detect Incoming Call" },
            { icon: <Mic />, label: "Transcribe Speech in Real-Time" },
            { icon: <Languages />, label: "Translate on the Fly" },
            { icon: <Network />, label: "AI-Driven Response Routing" },
          ].map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-4 w-56 text-center group"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/40 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-110 group-hover:shadow-indigo-500/40 transition-all duration-300">
                {React.cloneElement(step.icon, {
                  className: "w-9 h-9 text-indigo-400",
                })}
              </div>
              <h4 className="font-semibold text-sm md:text-base group-hover:text-indigo-300 transition-colors">
                {step.label}
              </h4>
              <div className="w-20 h-0.5 bg-gradient-to-r from-indigo-500/40 to-purple-500/40 mt-2" />
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
          <div className="flex-1 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <Image
              src="/telephony-UI.png"
              alt="Telephony Mock UI"
              width={500}
              height={300}
              className="relative rounded-3xl shadow-2xl border border-indigo-500/30 group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>

          <div className="flex-1 text-left max-w-md">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Intelligent Call Management
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm leading-relaxed mb-6">
              <li className="flex items-start gap-2 hover:text-white transition-colors">
                <span className="text-indigo-400 mt-1">✓</span> Latency optimized to under 400ms per speech-turn
              </li>
              <li className="flex items-start gap-2 hover:text-white transition-colors">
                <span className="text-indigo-400 mt-1">✓</span> Supports SIP, WebRTC, and softphone integration
              </li>
              <li className="flex items-start gap-2 hover:text-white transition-colors">
                <span className="text-indigo-400 mt-1">✓</span> Real-time multilingual transcription and routing
              </li>
              <li className="flex items-start gap-2 hover:text-white transition-colors">
                <span className="text-indigo-400 mt-1">✓</span> Speech recognition tuned for telecom codecs
              </li>
              <li className="flex items-start gap-2 hover:text-white transition-colors">
                <span className="text-indigo-400 mt-1">✓</span> Easy plug-in API for enterprise call systems
              </li>
            </ul>

            <a
              href="/#modes"
              className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 rounded-xl font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105"
            >
              Back to Modes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}