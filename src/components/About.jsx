import React from "react";
import { Code2, Server, Database, Zap, Shield, Users } from "lucide-react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

export default function About() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      id="about"
      ref={ref}
      className="scroll-mt-24 py-16 md:py-20 bg-slate-50"
      aria-label="About me section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-14 md:mb-16 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            About Me
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-blue-600 mx-auto mb-5 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl sm:max-w-2xl mx-auto">
            Backend-focused developer passionate about building robust, scalable
            systems
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-12 items-center mb-14 md:mb-16">
          {/* Left: Description */}
          <div
            className={`space-y-5 sm:space-y-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              I'm a passionate{" "}
              <span className="font-semibold text-slate-900">
                MERN stack developer
              </span>{" "}
              with <strong>10 months of hands-on experience</strong> building real-world
              applications. I focus on backend development, creating secure APIs
              and implementing real-time features.
            </p>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              Working with{" "}
              <span className="font-semibold text-slate-900">
                Node.js, Express, and MongoDB
              </span>
              , I've developed <strong>RESTful APIs</strong>, <strong>authentication systems</strong>, and
              real-time communication using
              <span className="font-semibold text-slate-900"> Socket.IO</span>.
              I care about clean code and continuous learning.
            </p>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              I've completed <strong>5+ projects</strong> including e-commerce platforms and chat
              applications, each one sharpening my backend problem-solving
              skills and delivering measurable results.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-4 sm:pt-6">
              <div
                className={`text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">
                  10+
                </div>
                <div className="text-xs sm:text-sm text-slate-600 font-medium">
                  Months Experience
                </div>
              </div>

              <div
                className={`text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">
                  5+
                </div>
                <div className="text-xs sm:text-sm text-slate-600 font-medium">
                  Projects Built
                </div>
              </div>

              <div
                className={`text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">
                  10+
                </div>
                <div className="text-xs sm:text-sm text-slate-600 font-medium">
                  Technologies
                </div>
              </div>
            </div>
          </div>

          {/* Right: Code Visual */}
          <div
            className={`relative max-w-md mx-auto md:max-w-full transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-5 sm:p-6 md:p-8 shadow-2xl hover:shadow-3xl transition-shadow duration-500 animate-float">
              <div className="bg-slate-900 rounded-xl p-4 sm:p-6 font-mono text-xs sm:text-sm overflow-x-auto">
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                  <span className="ml-2 text-slate-400 text-xs">developer.js</span>
                </div>

                <pre className="text-green-400 whitespace-pre-wrap wrap-break-words">
                  {`const developer = {
  name: "M Rashid",
  role: "MERN Stack Developer",
  focus: "Backend Development",

  skills: {
    backend: ["Node.js", "Express"],
    database: ["MongoDB", "Mongoose"],
    realtime: ["Socket.IO"],
    security: ["JWT", "bcrypt"],
    frontend: ["React", "Tailwind"]
  },

  approach: "Clean, scalable code"
};`}
                </pre>
              </div>
            </div>

            <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-20 h-20 sm:w-28 sm:h-28 bg-blue-200 rounded-full blur-3xl opacity-50 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

