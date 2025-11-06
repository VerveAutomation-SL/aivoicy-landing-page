import React from "react";
import Layout from "../components/layout";

export default function HomePage() {
  return (
    <Layout>
      <section className="flex flex-col items-center justify-center h-[80vh] text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to <span className="text-indigo-400">AIVOICY</span>
        </h1>
        <p className="text-gray-400 max-w-xl">
          The multilingual AI voice and telephony assistant built by Verve
          Automation.
        </p>
      </section>
    </Layout>
  );
}
