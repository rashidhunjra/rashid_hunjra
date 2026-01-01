import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Skip to Content Link for Accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <Header />
      
      {/* Removed max-w-6xl and mx-auto from <main>
        This allows full-width sections (Hero, Contact) to use the entire screen 
        and allows other sections to manage their own centering.
      */}
      <main id="main-content" className="px-4">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
}

