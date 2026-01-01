import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

export default function Footer() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/rashidhunjra",
      label: "GitHub",
      color: "hover:bg-slate-700",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/rashid-hunjra-95576a284/",
      label: "LinkedIn",
      color: "hover:bg-blue-600",
    },
    {
      icon: Mail,
      href: "mailto:mrashidcodes@gmail.com",
      label: "Email",
      color: "hover:bg-red-600",
    },
  ];

  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer
      ref={ref}
      className="relative bg-slate-900 text-white pt-16 pb-10 overflow-hidden"
      role="contentinfo"
    >
      {/* Background glow elements */}
      <div
        className="absolute -top-20 -left-20 w-72 h-72 bg-purple-600 rounded-full opacity-20 blur-3xl animate-pulse"
        aria-hidden="true"
      ></div>
      <div
        className="absolute -bottom-20 -right-20 w-96 h-96 bg-pink-500 rounded-full opacity-20 blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
        aria-hidden="true"
      ></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left mb-12">
          {/* Column 1: Brand */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-gradient">
              M Rashid
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Backend-focused MERN developer creating secure, scalable, and
              efficient APIs. Passionate about clean code and continuous
              learning.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Available for opportunities
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <h4 className="text-lg font-semibold mb-4 text-blue-400">
              Quick Links
            </h4>
            <ul className="text-slate-400 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    → {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <h4 className="text-lg font-semibold mb-4 text-blue-400">
              Let's Connect
            </h4>
            <p className="text-slate-400 text-sm mb-4">
              Feel free to reach out for collaborations or just a friendly chat
            </p>
            <div className="flex justify-center md:justify-start gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-slate-800/50 ${link.color} rounded-xl transition-all duration-300 transform hover:scale-110 shadow-lg group`}
                    aria-label={link.label}
                  >
                    <Icon className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className={`border-t border-slate-700 pt-8 text-center transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <p className="text-sm text-slate-500 flex items-center justify-center gap-2 flex-wrap">
            <span>© {new Date().getFullYear()} M Rashid. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> using React & Tailwind CSS
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

