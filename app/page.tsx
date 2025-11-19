"use client";

import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Work from "@/components/work";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Work />
      </main>
      <Footer />
    </div>
  );
}
