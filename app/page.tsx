"use client";

import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Work from "@/components/work";

export default function Home() {
  return (
    <div className="bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Work />
      </main>
    </div>
  );
}
