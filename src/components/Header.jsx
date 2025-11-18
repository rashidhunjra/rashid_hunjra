import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Download } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);
  const firstLinkRef = useRef(null);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  // Track scroll position for glass effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : original;
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  // Close on Escape and focus first link when opened
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open && firstLinkRef.current) firstLinkRef.current.focus();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Set CSS variable for header height for anchor scroll
  useEffect(() => {
    function setHeaderHeight() {
      const h = headerRef.current?.offsetHeight || 64;
      document.documentElement.style.setProperty("--header-height", `${h}px`);
    }
    setHeaderHeight();
    const timeout = setTimeout(setHeaderHeight, 350);
    window.addEventListener("resize", setHeaderHeight);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", setHeaderHeight);
    };
  }, [open, scrolled]);

  return (
    <header
      ref={headerRef}
      className={`w-full fixed top-0 z-50 transition-all duration-300 backdrop-blur-sm ${
        scrolled
          ? "bg-slate-900/95 shadow-lg border-b border-slate-700/50"
          : "bg-slate-900/80"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
        <a href="#hero" className="flex flex-col group cursor-pointer">
          <h1 className="text-lg sm:text-2xl font-bold text-white tracking-tight group-hover:text-blue-400 transition">
            M Rashid
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm font-medium group-hover:text-blue-300 transition">
            MERN Stack Developer
          </p>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-300 hover:text-white font-medium transition-all duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}

          <a
            href="/M_Rashid_CV.pdf"
            download
            className="ml-4 inline-flex items-center gap-2 px-4 sm:px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Download className="w-4 h-4" />
            Resume
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 rounded-lg bg-slate-800 border border-slate-700 text-white hover:bg-slate-700 transition-all"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile overlay menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 z-40 transition-transform duration-300 ${
          open
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-full opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />

        <div className="relative mx-auto max-w-3xl p-6 pt-8">
          <div className="bg-slate-900/95 border border-slate-700/40 rounded-xl shadow-xl overflow-hidden">
            <div className="px-6 py-6 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-white">M Rashid</h2>
                <p className="text-slate-400 text-sm">MERN Stack Developer</p>
              </div>

              <button
                className="p-2 rounded-md bg-slate-800 border border-slate-700 text-white"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="px-6 pb-6 flex flex-col gap-3">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  ref={i === 0 ? firstLinkRef : null}
                  onClick={() => setOpen(false)}
                  className="text-slate-200 hover:text-white font-medium py-3 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="/M_Rashid_CV.pdf"
                download
                onClick={() => setOpen(false)}
                className="mt-3 w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
