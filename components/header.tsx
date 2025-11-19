import Link from "next/link";
import { Github } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold md:-ml-6">
          Deepak<span className="text-muted-foreground">Kumar</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#"
            className="text-foreground hover:text-accent transition"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-foreground hover:text-accent transition"
          >
            About
          </Link>
          <Link
            href="#work"
            className="text-foreground hover:text-accent transition"
          >
            Work
          </Link>
        </nav>

        <a
          href="https://github.com/Deeku10"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 hover:bg-card rounded-lg transition"
        >
          <Github className="w-5 h-5" />
        </a>
      </div>
    </header>
  );
}
