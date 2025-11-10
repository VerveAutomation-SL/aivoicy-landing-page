import React from "react";
import { Globe, Mic, Bot, Shield, Smartphone } from "lucide-react";

const features = [
  {
    icon: <Globe className="w-8 h-8 text-indigo-400" />,
    title: "Multilingual Understanding",
    desc: "Speak naturally — AIVOICY understands and responds in multiple languages in real time.",
  },
  {
    icon: <Mic className="w-8 h-8 text-indigo-400" />,
    title: "Real-time Call Transcription",
    desc: "Automatically transcribes voice calls with high accuracy using advanced ASR models.",
  },
  {
    icon: <Bot className="w-8 h-8 text-indigo-400" />,
    title: "AI Responses",
    desc: "Empowered by AI for contextual and human-like conversation flow.",
  },
  {
    icon: <Shield className="w-8 h-8 text-indigo-400" />,
    title: "Secure Authentication",
    desc: "Powered by secure authentication for safe and reliable access management.",
  },
  {
    icon: <Smartphone className="w-8 h-8 text-indigo-400" />,
    title: "Cross-Device Support",
    desc: "Available on web, Android, iOS, App Gallery and telephony devices for seamless access.",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-24 px-6 bg-[#1a1530] text-white text-center"
    >
      {/* Header */}
      <h2 className="text-4xl font-bold mb-6">
        Explore AIVOICY <span className="text-indigo-400">Features</span>
      </h2>
      <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
        Advanced AI capabilities that make communication faster, smarter, and multilingual.
      </p>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-10">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="w-full sm:w-[45%] lg:w-[30%] p-8 bg-[#12121a]/80 border border-gray-800 rounded-2xl shadow-md hover:shadow-indigo-500/10 transition-transform transform hover:-translate-y-2"
          >
            <div className="flex flex-col items-center text-center gap-4">
              {feature.icon}
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
