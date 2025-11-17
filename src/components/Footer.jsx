import React from "react";
// Using lucide-react icons for social links
import { Github, Linkedin, Twitter, Dribbble } from "lucide-react";

export default function Footer() {
  // Define social links for easy mapping
  const socialLinks = [
    { icon: Github, href: "https://github.com/rashidhunjra" },
    { icon: Linkedin, href: "#" }, // Placeholder for LinkedIn
    { icon: Twitter, href: "#" }, // Placeholder for Twitter
    // Added a placeholder for another platform (like Dribbble or Dev.to) for completeness
    { icon: Dribbble, href: "#" },
  ];

  return (
    // Applied a dark background for contrast, using the purple accent border
    <footer className="py-12 bg-gray-900 border-t-4 border-fuchsia-700">
      <div className="max-w-6xl mx-auto px-6 text-white grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Column 1: Primary Info (Replaces the large text block in the reference design) */}
        <div>
          <h4 className="text-xl font-bold mb-3">M Rashid Dev</h4>
          <p className="text-sm text-gray-400">
            Backend focused MERN developer creating secure and efficient APIs.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-fuchsia-400">
            Quick Links
          </h4>
          <ul className="text-sm space-y-2 text-gray-400">
            <li>
              <a href="#about" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-white transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Follow Me / Social Icons */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-fuchsia-400">
            Connect
          </h4>
          <div className="flex justify-center md:justify-start gap-4">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-white transition duration-200"
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} M Rashid. All rights reserved. Built with
          React and Tailwind.
        </p>
      </div>
    </footer>
  );
}
