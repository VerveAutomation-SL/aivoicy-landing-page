import React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import ModesSection from "../components/modesection";

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <ModesSection />
    </Layout>
  );
}
