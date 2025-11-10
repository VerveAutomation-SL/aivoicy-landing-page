import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AIVOICY | AI-Powered Voice & Telephony Assistant",
  description:
    "AIVOICY, an AI-powered multilingual voice and telephony assistant that transcribes, translates, and connects calls in real time — designed for seamless, intelligent communication across devices.",
  openGraph: {
    title: "AIVOICY | AI-Powered Voice & Telephony Assistant",
    description:
      "Experience AIVOICY — the intelligent voice and telephony AI that understands, translates, and connects seamlessly across languages and platforms.",
    url: "https://aivoicy.com",
    siteName: "AIVOICY",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
