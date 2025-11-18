import React from "react";
import { Github, Linkedin, Twitter, Dribbble } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/rashidhunjra" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/rashid-hunjra-95576a284/",
    },
    { icon: Twitter, href: "#" },
    { icon: Dribbble, href: "#" },
  ];

  return (
    <footer className="relative bg-slate-900 text-white pt-16 pb-10 overflow-hidden">
      {/* Background glow elements */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-pink-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Column 1: Brand */}
        <div>
          <h4 className="text-2xl font-bold mb-3">M Rashid Dev</h4>
          <p className="text-gray-400 text-sm sm:text-base">
            Backend-focused MERN developer creating secure and efficient APIs.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-blue-400">
            Quick Links
          </h4>
          <ul className="text-gray-400 space-y-2">
            {["about", "skills", "projects", "contact"].map((link) => (
              <li key={link}>
                <a
                  href={`#${link}`}
                  className="hover:text-white transition-colors duration-200"
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Social */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-blue-400">Connect</h4>
          <div className="flex justify-center md:justify-start gap-4">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800/50 hover:bg-slate-800 rounded-xl transition transform hover:scale-110 shadow-lg"
                >
                  <Icon className="w-5 h-5 text-white" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-slate-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} M Rashid. All rights reserved. Built with
        React & Tailwind.
      </div>
    </footer>
  );
}
