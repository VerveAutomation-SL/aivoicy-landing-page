import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f] border-t border-gray-800 py-8 text-gray-400 text-center">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-4">
        
        {/* Social Icons */}
        <div className="flex gap-6 mb-2">
          <a
            href="https://github.com/VerveAutomation-SL"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/company/verveautomation"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:contact@verveautomation.com"
            className="hover:text-indigo-400 transition"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-600 mt-4">
          © {new Date().getFullYear()} Verve Automation · AIVOICY.com — All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
