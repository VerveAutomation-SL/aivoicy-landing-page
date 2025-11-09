import React from "react";
import { PhoneCall, Mic, Languages, Network } from "lucide-react";

export default function TelephonySection() {
  return (
    <section
      id="telephony"
      className="relative py-24 px-6 bg-gradient-to-b from-[#0a0a15] via-[#1a1530] to-[#0a0a15] text-white text-center overflow-hidden"
    >
      {/* Background Orbs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-indigo-600 rounded-full blur-[150px] animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600 rounded-full blur-[150px] animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-300 bg-clip-text text-transparent">
          Deep Dive into <span className="text-indigo-400">Telephony Mode</span>
        </h2>
        <p className="text-gray-400 mb-16 max-w-2xl mx-auto text-lg">
          AIVOICY Telephony seamlessly integrates your AI assistant with live
          call systems — transcribing, translating, and routing calls
          intelligently in real time.
        </p>

        {/* Flow Steps */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-5xl mx-auto mb-20">
          {[
            { icon: <PhoneCall />, label: "Detect Incoming Call" },
            { icon: <Mic />, label: "Transcribe Speech in Real-Time" },
            { icon: <Languages />, label: "Translate on the Fly" },
            { icon: <Network />, label: "Route with AI Intelligence" },
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
              {idx !== 3 && (
                <div className="hidden md:block w-20 border-t-2 border-indigo-500/40 mt-4" />
              )}
            </div>
          ))}
        </div>

        {/* Key Highlights instead of UI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
          {[
            {
              title: "Low-Latency Performance",
              desc: "Optimized to maintain sub-400ms response times for natural two-way interaction.",
            },
            {
              title: "Global Call Integration",
              desc: "Seamlessly connects with SIP, VoIP, and softphone platforms used worldwide.",
            },
            {
              title: "Enterprise-Ready API",
              desc: "Easy integration for organizations looking to automate multilingual communication.",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-[#12121a]/80 border border-indigo-500/20 rounded-2xl p-6 shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-indigo-300 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Back to Modes */}
        <a
          href="/#modes"
          className="inline-block mt-16 px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 rounded-xl font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105"
        >
          Back to Modes
        </a>
      </div>
    </section>
  );
}
