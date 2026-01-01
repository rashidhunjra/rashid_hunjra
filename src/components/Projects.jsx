import React from "react";
import { Github, ExternalLink, TrendingUp, Users, Zap } from "lucide-react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const projects = [
  {
    title: "Sublet Marketplace",
    desc: "Built a property rental marketplace using the MERN stack with real-time chat functionality. Implemented Socket.IO for instant messaging between landlords and tenants, handling concurrent connections with room-based architecture. Used AWS S3 for image uploads with Multer middleware for file handling. Implemented JWT authentication with refresh tokens and role-based access control (RBAC). Optimized MongoDB queries using compound indexes on location and price fields, reducing search query time from 800ms to 150ms.",
    tech: [
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "AWS S3",
      "JWT",
    ],
    github: "https://github.com/rashidhunjra",
    live: "#",
    image: "/sublet-marketplace.png",
    metrics: { feature1: "Real-time Chat", feature2: "Image Upload", feature3: "Search Optimized" },
    featured: true,
  },
  {
    title: "Inzaar LMS",
    desc: "Developed a comprehensive learning management system with RESTful APIs for course enrollment, progress tracking, and certificate generation. Implemented role-based access control with three user types (admin, instructor, student). Built automated email notifications using Nodemailer for course updates and deadlines. Used MongoDB aggregation pipelines to generate student progress reports and analytics. Implemented pagination and filtering for course listings to handle large datasets efficiently.",
    tech: ["Node.js", "Express", "MongoDB", "Nodemailer", "JWT"],
    github: "https://github.com/rashidhunjra",
    live: "#",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=450&fit=crop",
    metrics: { feature1: "RBAC System", feature2: "Email Automation", feature3: "Analytics" },
  },
  {
    title: "Patient Management System",
    desc: "Created a healthcare application with appointment scheduling and patient data management. Implemented secure authentication using JWT with bcrypt password hashing (12 salt rounds). Built appointment booking system with conflict detection to prevent double-bookings. Used Mongoose schema validation and custom middleware for data sanitization. Implemented automated SMS reminders using Twilio API for upcoming appointments. Designed RESTful API endpoints following REST best practices with proper HTTP status codes.",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "Twilio"],
    github: "https://github.com/rashidhunjra",
    live: "#",
    image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=800&h=450&fit=crop",
    metrics: { feature1: "Secure Auth", feature2: "SMS Reminders", feature3: "Conflict Detection" },
  },
  {
    title: "Coin Bounce Blog",
    desc: "Built a modern blogging platform with post management, commenting system, and advanced search. Implemented full-text search using MongoDB text indexes for searching across post titles and content. Created nested commenting system with reply functionality using recursive data structures. Built image upload feature with Cloudinary integration for optimized image delivery. Implemented pagination with cursor-based approach for better performance on large datasets. Added user authentication with session management using express-session.",
    tech: ["Node.js", "Express", "MongoDB", "React", "Cloudinary"],
    github: "https://github.com/rashidhunjra",
    live: "#",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=450&fit=crop",
    metrics: { feature1: "Full-text Search", feature2: "Nested Comments", feature3: "Image CDN" },
  },
];

export default function Projects() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      id="projects"
      ref={ref}
      className="py-16 sm:py-20 bg-white"
      aria-label="Featured projects section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Real-world applications showcasing backend development expertise with measurable impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group bg-white rounded-2xl border-2 border-slate-200 overflow-hidden hover:shadow-2xl hover:border-blue-400 transition-all duration-500 hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Project Image */}
              <div className="relative aspect-video bg-gradient-to-br from-blue-600 to-purple-600 overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/800x450/3b82f6/ffffff?text=${encodeURIComponent(
                      project.title
                    )}`;
                  }}
                />
                {project.featured && (
                  <div className="absolute top-4 right-4 px-4 py-2 bg-yellow-400 text-slate-900 font-bold text-sm rounded-full shadow-lg flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Featured
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Project Header */}
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* Metrics */}
                <div className="flex flex-wrap gap-3 mb-4">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-lg"
                    >
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-semibold text-green-700">
                        {value} {key}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Description */}
                <p className="text-slate-700 leading-relaxed mb-6">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <div className="w-1 h-4 bg-blue-600 rounded"></div>
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg font-medium border border-blue-200 hover:bg-blue-100 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex gap-4 pt-4 border-t-2 border-slate-100">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-700 hover:text-blue-600 font-semibold transition-colors group/link"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <Github className="w-5 h-5 group-hover/link:scale-110 group-hover/link:rotate-12 transition-transform" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-700 hover:text-blue-600 font-semibold transition-colors group/link"
                    aria-label={`View ${project.title} live demo`}
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
        <div
          className={`mt-16 text-center transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <p className="text-slate-600 mb-6 text-lg">
            Want to see more of my work and contributions?
          </p>
          <a
            href="https://github.com/rashidhunjra"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:ring-4 focus:ring-slate-500/50 group"
            aria-label="View all projects on GitHub"
          >
            <Github className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

