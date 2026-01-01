import React, { useState, useEffect } from "react";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

export default function Hero() {
  const [ref, isInView] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      id="hero"
      ref={ref}
      className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden pt-28 sm:pt-32 md:pt-36"
      aria-label="Hero section"
    >
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true">
        <div className="absolute top-10 left-4 w-40 h-40 sm:w-72 sm:h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-4 w-56 h-56 sm:w-96 sm:h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500 rounded-full blur-3xl animate-pulse opacity-50" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div
            className={`space-y-6 sm:space-y-8 transition-all duration-1000 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >


            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gradient">
              M Rashid
            </h1>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-blue-400">
              Backend-Focused MERN Developer
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Specialized in building <strong className="text-white">scalable backend systems</strong> with Node.js and Express.
              Experienced with secure REST APIs, real-time applications using Socket.IO,
              and full-stack development with the MERN stack.
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3 pt-2" role="list" aria-label="Technical skills">
              {[
                "Node.js",
                "Express",
                "MongoDB",
                "Socket.IO",
              ].map((skill, index) => (
                <span
                  key={skill}
                  role="listitem"
                  className="px-3 py-2 sm:px-4 sm:py-2.5 bg-slate-700/50 border border-slate-600 rounded-lg text-xs sm:text-sm font-medium hover:bg-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 cursor-default"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              <a
                href="/M_Rashid_CV.pdf"
                download
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 focus:ring-4 focus:ring-blue-500/50 group"
                aria-label="Download resume"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download Resume
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-slate-700/50 hover:bg-slate-700 border border-slate-600 hover:border-blue-500/50 rounded-lg backdrop-blur-sm text-white font-semibold hover:scale-105 transition-all duration-300 focus:ring-4 focus:ring-slate-500/50"
                aria-label="Navigate to contact section"
              >
                <Mail className="w-5 h-5" />
                Get in Touch
              </a>
            </div>

            <div className="flex items-center gap-4 pt-4" role="list" aria-label="Social media links">
              <a
                href="https://github.com/rashidhunjra"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-3.5 bg-slate-700/50 hover:bg-slate-700 border border-slate-600 hover:border-blue-500/50 rounded-lg transition-all duration-300 hover:scale-110 focus:ring-4 focus:ring-slate-500/50 group"
                aria-label="Visit GitHub profile"
              >
                <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/in/rashid-hunjra-95576a284/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-3.5 bg-slate-700/50 hover:bg-slate-700 border border-slate-600 hover:border-blue-500/50 rounded-lg transition-all duration-300 hover:scale-110 focus:ring-4 focus:ring-slate-500/50 group"
                aria-label="Visit LinkedIn profile"
              >
                <Linkedin className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative group w-52 h-52 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
              {/* Glow Effect */}
              <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-2xl animate-pulse"></div>
              
              {/* Image Container */}
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                <img
                  src="/profile.png"
                  alt="M Rashid - MERN Stack Developer"
                  className="relative w-full h-full object-cover rounded-2xl border-4 border-slate-700 shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                  onError={(e) => {
                    // Fallback to GitHub avatar if local image not found
                    e.target.src = "https://github.com/rashidhunjra.png";
                  }}
                />
              </div>

              {/* Status Badge */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-slate-800/90 backdrop-blur-md border border-slate-700 rounded-xl p-4 sm:p-5 shadow-2xl animate-slide-in-up">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
                  <div>
                    <p className="text-xs sm:text-sm text-slate-400 font-medium">Status</p>
                    <p className="text-sm sm:text-base font-bold text-white">
                      Open to Work
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden sm:block absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
          <div className="w-6 h-10 sm:w-7 sm:h-12 border-2 border-slate-600 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-3 bg-blue-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
