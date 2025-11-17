import React, { useState } from "react";
// Using lucide-react icons for smooth menu functionality
import { Menu, X } from "lucide-react";

export default function Header() {
  // Removed avatar fetch logic as per previous instructions
  const [open, setOpen] = useState(false);

  // Define navigation links
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    // Applied clean white background, clear shadow, and sticky positioning
    <header className="w-full bg-white shadow-md border-b border-gray-100 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Name / Title block (Logo replacement) */}
        <div className="flex flex-col">
          <h1 className="text-xl font-bold text-gray-900 tracking-tight">
            M Rashid
          </h1>
          {/* Applied primary purple accent color to the title descriptor */}
          <p className="text-fuchsia-700 text-sm font-medium">
            Backend / MERN Developer
          </p>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              // Uses purple accent color on hover, with a subtle underline effect
              className="hover:text-fuchsia-700 transition duration-150 relative after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-0.5 after:bg-fuchsia-700 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden p-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-fuchsia-50 transition"
          onClick={() => setOpen((v) => !v)}
          aria-label="menu"
        >
          {/* Using Lucide icons for clean aesthetics */}
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="px-6 py-4 flex flex-col gap-4 text-gray-700 font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                // Applied purple accent color on hover
                className="hover:text-fuchsia-700"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
