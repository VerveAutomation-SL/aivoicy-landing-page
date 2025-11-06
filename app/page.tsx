import React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import FeaturesSection from "../components/featuressection";
import ModesSection from "../components/modesection";

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <FeaturesSection />
      <ModesSection />
    </Layout>
  );
}
