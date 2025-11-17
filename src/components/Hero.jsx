import React, { useState, useEffect } from "react";
import { Download, Github, Linkedin } from "lucide-react";

const texts = [
  "Hi, I'm M Rashid",
  "I'm a MERN Stack Developer",
  "I specialize in Backend Development",
  "Real-time App Developer",
  "Security-focused Developer",
];

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const delayBeforeDelete = 1500;
    const delayBeforeType = 500;

    let timer;

    const handleTyping = () => {
      const currentText = texts[textIndex];

      if (isDeleting) {
        setTypedText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setTypedText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex === currentText.length) {
          setIsDeleting(true);
        }
      }
    };

    if (!isDeleting && charIndex === texts[textIndex].length) {
      timer = setTimeout(handleTyping, delayBeforeDelete);
    } else if (isDeleting && charIndex === 0) {
      timer = setTimeout(handleTyping, delayBeforeType);
    } else {
      timer = setTimeout(
        handleTyping,
        isDeleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <section
      id="hero"
      className="min-h-[66vh] py-20 bg-fuchsia-700 text-white overflow-hidden flex items-center"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="text-center md:text-left md:w-1/2">
          <div className="w-full md:w-[380px]">
            <h2 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-4 min-h-[140px] md:min-h-[100px]">
              {typedText}
              <span className="animate-pulse-cursor inline-block w-1 bg-white h-10 ml-2"></span>
            </h2>
          </div>

          <p className="mt-5 text-xl text-fuchsia-100 leading-relaxed max-w-xl">
            As a Backend-focused MERN Developer, I build secure Node.js APIs and
            real-time features using Socket.IO, creating robust and efficient
            web applications.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a
              href="/M_Rashid_CV.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-fuchsia-700 font-semibold rounded-lg shadow-xl hover:bg-fuchsia-50 transition duration-300 transform hover:scale-[1.02]"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>

            <a
              href="https://github.com/rashidhunjra"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white rounded-lg hover:bg-fuchsia-600 transition duration-300 transform hover:scale-[1.02]"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center md:justify-start gap-4 text-fuchsia-200">
            <a
              href="https://github.com/rashidhunjra"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              <Github className="w-6 h-6" />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
          <div className="p-2 border-4 border-fuchsia-500 rounded-full">
            <img
              src="https://github.com/rashidhunjra.png"
              alt="M Rashid Profile"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
