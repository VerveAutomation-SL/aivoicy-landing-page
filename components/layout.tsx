import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0f] to-[#1a1530] text-white flex flex-col">
      {/* 🌐 Header */}
      <header className="py-6 border-b border-gray-800 text-center text-lg font-semibold tracking-wide">
        AIVOICY
      </header>

      {/* 🧩 Page Content */}
      <main className="flex-grow">{children}</main>

      {/* ⚙️ Footer */}
      <footer className="py-4 border-t border-gray-800 text-center text-sm text-gray-400">
        © 2025 Verve Automation · AIVOICY.com
      </footer>
    </div>
  );
}
