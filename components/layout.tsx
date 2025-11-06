import React from "react";
import Navbar from "./navbar"; 

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0f] to-[#1a1530] text-white flex flex-col">
      <Navbar /> 

      {/* 🧩 Page Content */}
      <main className="flex-grow pt-20">{children}</main> 

      {/* ⚙️ Footer */}
      <footer className="py-4 border-t border-gray-800 text-center text-sm text-gray-400">
        © 2025 Verve Automation · AIVOICY.com
      </footer>
    </div>
  );
}
