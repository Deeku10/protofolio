import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-[60vh] flex items-start justify-center px-4 sm:px-6 py-12">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-muted-foreground">Hello, I'm Deepak,</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              <span className="text-accent">Full stack</span>
              <br />
              Developer
            </h1>
          </div>

          <p className="text-lg text-muted-foreground max-w-md">
            I build web applications with modern technologies and best
            practices.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition font-medium group"
          >
            Contact Me
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </a>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-80 h-96 rounded-3xl overflow-hidden">
            <Image
              src="/images/profile_image1.png"
              alt="Deepak profile"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-6 right-6 w-6 h-6 rounded-full bg-accent shadow-lg shadow-accent/50" />
          </div>
        </div>
      </div>
    </section>
  );
}
