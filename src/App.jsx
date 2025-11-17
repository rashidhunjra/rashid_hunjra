import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      <Header />
      {/* Removed max-w-6xl and mx-auto from <main>
        This allows full-width sections (Hero, Contact) to use the entire screen 
        and allows other sections to manage their own centering.
      */}
      <main className="px-4">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
