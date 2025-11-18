import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
} from "../api";
import { Mail, Send, AlertTriangle } from "lucide-react";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");

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
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-slate-900 text-white relative overflow-hidden"
    >
      {/* Background glow circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>

      <div className="relative max-w-3xl mx-auto px-6 sm:px-8">
        {/* Section header */}
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8">
          Let's Work Together
        </h3>
        <div className="w-20 sm:w-24 h-1 bg-blue-600 mx-auto mb-10"></div>

        {/* Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="grid gap-4 sm:gap-6 p-6 sm:p-8 bg-slate-800/60 backdrop-blur-md rounded-2xl shadow-lg"
        >
          <input
            name="from_name"
            required
            placeholder="Your Name *"
            className="w-full p-4 border border-slate-600 rounded-lg bg-slate-900/50 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
          />
          <input
            name="from_email"
            type="email"
            required
            placeholder="Your Email Address *"
            className="w-full p-4 border border-slate-600 rounded-lg bg-slate-900/50 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
          />
          <textarea
            name="message"
            required
            placeholder="Your Project Idea / Message *"
            rows="5"
            className="w-full p-4 border border-slate-600 rounded-lg bg-slate-900/50 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 resize-none"
          ></textarea>

          <button
            type="submit"
            disabled={status === "sending"}
            className={`px-6 py-4 text-lg font-semibold rounded-lg transition duration-300 ease-in-out mt-2 flex items-center justify-center gap-2 ${
              status === "sending"
                ? "bg-gray-200 text-slate-700 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl transform hover:scale-105"
            }`}
          >
            {status === "sending" ? (
              <>
                <Send className="w-5 h-5" /> Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" /> Send Message
              </>
            )}
          </button>

          {status === "success" && (
            <p className="text-center text-green-400 font-medium mt-2 flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              Message sent successfully. I will respond soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-red-400 font-medium mt-2 flex items-center justify-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Send failed. Check the console for errors.
            </p>
          )}
        </form>

        {/* Direct contact info */}
        <div className="text-center mt-8 sm:mt-10">
          <p className="text-slate-400">Or reach out directly:</p>
          <p className="text-white font-semibold mt-1 text-lg sm:text-xl">
            mrashidcodes@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
}
