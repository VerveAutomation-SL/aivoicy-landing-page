import React from "react";

export default function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center text-center min-h-[85vh] px-6 bg-gradient-to-b from-[#0a0a0f] via-[#141425] to-[#1a1530] text-white overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/20 to-purple-600/20 blur-3xl rounded-full" />
            <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight mb-4 z-10">
                Your Multilingual Voice & Telephony <br />
                <span className="text-indigo-400">AI Assistant</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mb-8 z-10">
                AIVOICY empowers seamless communication — speak, translate, and connect
                intelligently through advanced voice and telephony AI.
            </p>
            <div className="flex flex-wrap justify-center gap-4 z-10">
                <a
                    href="#askme"
                    className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition rounded-lg font-semibold shadow-md"
                >
                    Try Ask Me Mode
                </a>
                <a
                    href="#telephony"
                    className="px-6 py-3 border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white transition rounded-lg font-semibold"
                >
                    Explore Telephony AI
                </a>
            </div>
        </section>
    );
}
