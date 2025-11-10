import React from "react";
import { Linkedin, Mail, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f] border-t border-gray-800 py-8 text-gray-400 text-center">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-4">
        {/* Social Icons */}
        <div className="flex gap-6 mb-2">
                    <a
            href="https://www.facebook.com/verveautomationglobal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition"
          >
            <Facebook size={20} />
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
            href="mailto:info@verveautomation.com"
            className="hover:text-indigo-400 transition"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-600">
          © {new Date().getFullYear()} AIVOICY — All Rights Reserved
        </p>

        {/* Powered by */}
        <p className="text-sm text-gray-500 mt-2">
          Powered by{" "}
          <a
            href="https://verveautomation.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:text-indigo-300 transition underline-offset-2 hover:underline"
          >
            Verve Automation
          </a>
        </p>
      </div>
    </footer>
  );
}
