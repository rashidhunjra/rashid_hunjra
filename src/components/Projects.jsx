import React from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Sublet Marketplace",
    desc: "Full-featured marketplace with real-time chat functionality, cloud storage integration for media uploads, secure authentication system, and instant notifications for user interactions.",
    tech: [
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "AWS S3",
      "Cloudinary",
    ],
    github: "#",
    live: "#",
  },
  {
    title: "Inzaar LMS",
    desc: "Comprehensive learning management system with robust backend APIs, third-party integrations, course management, and user progress tracking.",
    tech: ["Node.js", "Express", "MongoDB", "REST API"],
    github: "#",
    live: "#",
  },
  {
    title: "Patient Management System",
    desc: "Healthcare application with appointment scheduling, role-based access control, automated notifications, and secure patient data management.",
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
    github: "#",
    live: "#",
  },
  {
    title: "Coin Bounce Blog",
    desc: "Modern blogging platform featuring post management, commenting system, advanced search functionality, and user authentication.",
    tech: ["Node.js", "Express", "MongoDB", "React"],
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Real-world applications showcasing backend development expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Project Header */}
              <div className="bg-linear-to-br from-blue-600 to-purple-600 p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <div className="w-16 h-1 bg-white rounded-full"></div>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-white bg-opacity-20 flex items-center justify-center text-white font-bold text-lg">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
              </div>

              {/* Project Body */}
              <div className="p-6">
                <p className="text-slate-700 leading-relaxed mb-6">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-900 mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg font-medium border border-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex gap-4 pt-4 border-t border-slate-200">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-700 hover:text-blue-600 font-medium transition-colors group/link"
                  >
                    <Github className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-700 hover:text-blue-600 font-medium transition-colors group/link"
                  >
                    <ExternalLink className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-6">Want to see more of my work?</p>
          <a
            href="https://github.com/rashidhunjra"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
