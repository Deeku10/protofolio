export default function About() {
  return (
    <section id="about" className="py-20 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          <span className="text-accent">about</span>
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Software engineer who believes that code is more than logic; it’s
              a language of possibility. From crafting fluid interfaces in
              React, to building resilient backends with Spring Boot, from
              shaping experiences in Flutter and iOS, to exploring the frontiers
              of blockchain, my journey has been a tapestry of technologies
              woven together with curiosity.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I love creating systems that feel alive — apps that scale
              gracefully, interfaces that breathe, and architectures that stand
              firm like mountains. But beyond the screen, I travel, I chase
              horizons, collect stories, and choose to live unbounded — because
              every new place reminds me that creativity has no walls.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether I’m designing a database in SQL, debugging a complex flow,
              or learning the next tool that pushes the world forward, I carry
              the same fire: to build, to explore, to grow.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-accent mb-3 uppercase tracking-wider">
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Node.js",
                  "Tailwind CSS",
                  "PostgreSQL",
                  "Dapps",
                  "Solidity",
                  "Flutter",
                  "Swift",
                  "Java",
                  "Spring Boot",
                  "Docker",
                  "AWS",
                  "Figma",
                  "Adobe After Effects",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-card text-foreground text-sm border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
