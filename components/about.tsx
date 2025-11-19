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
              Im a passionate developer with expertise in building scalable web
              applications. With a strong foundation in both frontend and
              backend technologies, I create seamless user experiences combined
              with robust architecture.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in development has taken me through various industries,
              from startups to enterprises. Im driven by solving complex
              problems and continuously learning new technologies to stay at the
              forefront of web development.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              When Im not coding, you can find me exploring new technologies,
              contributing to open source, or sharing knowledge with the
              developer community.
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
