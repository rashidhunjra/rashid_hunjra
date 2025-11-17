import React from "react";
// Using lucide-react icons for links
import { Github, Link } from "lucide-react";

const projects = [
  {
    title: "Sublet Marketplace",
    desc: "Real-time chat, S3 and Cloudinary uploads, authentication, and notifications.",
    tech: ["Node", "Express", "MongoDB", "Socket.IO"],
    github: "#",
    live: "#",
  },
  {
    title: "Inzaar LMS",
    desc: "Backend APIs and integrations for a learning platform.",
    tech: ["Node", "Express", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    title: "Patient Management System",
    desc: "Appointment scheduling, role-based APIs, and notifications.",
    tech: ["Node", "Express", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    title: "Coin Bounce Blog",
    desc: "Blog backend with posts, comments, and search.",
    tech: ["Node", "Express", "MongoDB"],
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    // Used a clean white background for distinction from the gray skills section
    <section id="projects" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Updated Title: Larger font and purple accent border */}
        <h3 className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tight border-b-4 border-fuchsia-200 inline-block pb-1">
          Projects
        </h3>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <div
              key={p.title}
              // Enhanced card styling: Shadow, rounded, and top border for visual impact
              className="p-6 bg-gray-50 rounded-xl shadow-xl transition duration-300 hover:shadow-2xl border-t-4 border-fuchsia-700"
            >
              <h4 className="text-2xl font-bold text-gray-900">{p.title}</h4>

              <p className="mt-3 text-gray-600 leading-relaxed">{p.desc}</p>

              {/* Technology Tags: Use light purple background and dark purple text */}
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-sm px-3 py-1 bg-fuchsia-100 rounded-full text-fuchsia-800 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links: Use purple color and icons */}
              <div className="mt-6 flex gap-6 text-sm">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-fuchsia-700 hover:text-fuchsia-900 font-medium transition duration-200 flex items-center gap-1"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-fuchsia-700 hover:text-fuchsia-900 font-medium transition duration-200 flex items-center gap-1"
                >
                  <Link className="w-4 h-4" />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
