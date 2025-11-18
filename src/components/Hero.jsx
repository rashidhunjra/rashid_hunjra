import React, { useState, useEffect } from "react";
import { Download, Github, Linkedin, Mail } from "lucide-react";

const roles = [
  "MERN Stack Developer",
  "Backend Specialist",
  "API Architect",
  "Full Stack Engineer",
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsVisible(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden pt-24 sm:pt-32">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-4 w-40 h-40 sm:w-72 sm:h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-4 w-56 h-56 sm:w-96 sm:h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left */}
          <div className="space-y-6">
            <span className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-xs sm:text-sm font-medium">
              Available for Opportunities
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              M Rashid
            </h1>

            <div className="h-10 sm:h-12 flex items-center">
              <h2
                className={`text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-400 transition-opacity duration-300 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                {roles[currentRole]}
              </h2>
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Specialized in scalable backend systems with Node.js and Express.
              Experienced with secure REST APIs, real-time apps using Socket.IO,
              and full-stack development with the MERN stack.
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3 pt-2">
              {[
                "Node.js",
                "Express",
                "React",
                "MongoDB",
                "Socket.IO",
                "REST APIs",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-xs sm:text-sm font-medium hover:bg-slate-700 transition"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="/M_Rashid_CV.pdf"
                download
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold shadow hover:scale-105 transition"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                Download Resume
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-slate-700/50 hover:bg-slate-700 border border-slate-600 rounded-lg backdrop-blur-sm text-white font-semibold hover:scale-105 transition"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                Get in Touch
              </a>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/rashidhunjra"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 bg-slate-700/50 hover:bg-slate-700 border border-slate-600 rounded-lg transition hover:scale-110"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/rashid-hunjra-95576a284/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 bg-slate-700/50 hover:bg-slate-700 border border-slate-600 rounded-lg transition hover:scale-110"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96">
              <div className="absolute -inset-3 sm:-inset-4 bg-linear-to-br from-blue-600 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-30 transition blur-2xl"></div>
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl rotate-2 group-hover:rotate-4 transition-transform"></div>
                <img
                  src="https://github.com/rashidhunjra.png"
                  alt="M Rashid"
                  className="relative w-full h-full object-cover rounded-2xl border-4 border-slate-700 shadow-2xl group-hover:scale-105 transition-transform"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/400x400?text=M+Rashid";
                  }}
                />
              </div>

              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-slate-800 border border-slate-700 rounded-xl p-3 sm:p-4 shadow-xl backdrop-blur-sm">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <p className="text-xs sm:text-sm text-slate-400">Status</p>
                    <p className="text-sm sm:text-base font-semibold">
                      Open to Work
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-slate-600 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-blue-400 rounded-full mt-1.5 sm:mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
