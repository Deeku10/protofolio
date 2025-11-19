import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with payment integration, inventory management, and real-time notifications.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates, team collaboration features, and analytics dashboard.",
    tags: ["Next.js", "TypeScript", "Supabase", "React Query"],
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "AI Content Generator",
    description:
      "An intelligent content generation tool powered by AI, helping users create high-quality content in minutes.",
    tags: ["Next.js", "OpenAI API", "Tailwind CSS"],
    link: "#",
    github: "#",
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    description:
      "Real-time analytics dashboard with interactive charts, data visualization, and customizable widgets.",
    tags: ["React", "D3.js", "WebSockets", "TypeScript"],
    link: "#",
    github: "#",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-20 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          <span className="text-accent">work</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group p-6 rounded-xl border border-border bg-card hover:bg-card/50 hover:border-accent/50 transition duration-300 cursor-pointer"
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold group-hover:text-accent transition">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded bg-accent/10 text-accent border border-accent/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  {project.link && (
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition"
                    >
                      Visit
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition"
                    >
                      Code
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
