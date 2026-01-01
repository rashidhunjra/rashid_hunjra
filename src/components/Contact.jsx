import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
} from "../api";
import { Mail, Send, AlertTriangle, Clock } from "lucide-react";
import Toast from "./Toast";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("info");
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setToastMessage("Message sent successfully! I'll respond within 24 hours.");
      setToastType("success");
      setShowToast(true);
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
      setToastMessage("Failed to send message. Please try again or email directly.");
      setToastType("error");
      setShowToast(true);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden"
      aria-label="Contact section"
    >
      {/* Background glow circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600 rounded-full opacity-20 blur-3xl animate-pulse" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} aria-hidden="true"></div>

      <div className="relative max-w-3xl mx-auto px-6 sm:px-8">
        {/* Section header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your ideas to life
          </p>
        </div>

        {/* Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className={`grid gap-5 sm:gap-6 p-6 sm:p-8 bg-slate-800/60 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-700/50 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <div>
            <label htmlFor="from_name" className="block text-sm font-medium text-slate-300 mb-2">
              Your Name *
            </label>
            <input
              id="from_name"
              name="from_name"
              required
              placeholder="John Doe"
              className="w-full p-4 border-2 border-slate-600 rounded-lg bg-slate-900/50 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              aria-required="true"
            />
          </div>

          <div>
            <label htmlFor="from_email" className="block text-sm font-medium text-slate-300 mb-2">
              Email Address *
            </label>
            <input
              id="from_email"
              name="from_email"
              type="email"
              required
              placeholder="john@example.com"
              className="w-full p-4 border-2 border-slate-600 rounded-lg bg-slate-900/50 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              aria-required="true"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
              Your Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Tell me about your project..."
              rows="5"
              className="w-full p-4 border-2 border-slate-600 rounded-lg bg-slate-900/50 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 resize-none"
              aria-required="true"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className={`px-6 py-4 text-lg font-semibold rounded-lg transition-all duration-300 ease-in-out mt-2 flex items-center justify-center gap-3 focus:ring-4 focus:ring-blue-500/50 ${
              status === "sending"
                ? "bg-slate-600 text-slate-300 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl transform hover:scale-105"
            }`}
            aria-label={status === "sending" ? "Sending message" : "Send message"}
          >
            {status === "sending" ? (
              <>
                <div className="spinner"></div>
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send Message
              </>
            )}
          </button>
        </form>

        {/* Direct contact info */}
        <div
          className={`text-center mt-10 sm:mt-12 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <p className="text-slate-400 mb-3 flex items-center justify-center gap-2">
            <Mail className="w-4 h-4" />
            Or reach out directly:
          </p>
          <a
            href="mailto:mrashidcodes@gmail.com"
            className="text-white font-semibold text-lg sm:text-xl hover:text-blue-400 transition-colors"
          >
            mrashidcodes@gmail.com
          </a>
          <p className="text-slate-400 mt-4 flex items-center justify-center gap-2 text-sm">
            <Clock className="w-4 h-4" />
            Typical response time: 24 hours
          </p>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <Toast
          message={toastMessage}
          type={toastType}
          onClose={() => setShowToast(false)}
          duration={5000}
        />
      )}
    </section>
  );
}

