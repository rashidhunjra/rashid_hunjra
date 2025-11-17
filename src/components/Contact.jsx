import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
} from "../api";
// Using lucide-react icons for status and links
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
    // Full-width vibrant purple background section
    <section id="contact" className="py-20 bg-fuchsia-700 text-white">
      {/* Increased max-width for better form prominence */}
      <div className="max-w-xl mx-auto px-4">
        {/* Title: Centered and white */}
        <h3 className="text-4xl font-extrabold text-center mb-10 tracking-tight">
          Let's Work Together
        </h3>

        {/* Form Container: Uses a slightly darker, transparent purple background for contrast */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-6 grid gap-5 p-8 bg-fuchsia-800/70 rounded-xl shadow-2xl"
        >
          {/* Input Fields: Styled for dark background (white text/border, light placeholder) */}
          <input
            name="from_name"
            required
            placeholder="Your Name *"
            className="w-full p-4 border border-fuchsia-300 rounded-lg bg-fuchsia-900/50 text-white placeholder-fuchsia-200 focus:outline-none focus:ring-2 focus:ring-white transition duration-150"
          />
          <input
            name="from_email"
            type="email"
            required
            placeholder="Your Email Address *"
            className="w-full p-4 border border-fuchsia-300 rounded-lg bg-fuchsia-900/50 text-white placeholder-fuchsia-200 focus:outline-none focus:ring-2 focus:ring-white transition duration-150"
          />
          <textarea
            name="message"
            required
            placeholder="Your Project Idea / Message *"
            rows="6"
            className="w-full p-4 border border-fuchsia-300 rounded-lg bg-fuchsia-900/50 text-white placeholder-fuchsia-200 focus:outline-none focus:ring-2 focus:ring-white transition duration-150 resize-none"
          ></textarea>

          {/* Button: White background with purple text (Primary action on a dark background) */}
          <button
            type="submit"
            disabled={status === "sending"}
            className={`
              px-6 py-4 text-lg font-semibold rounded-lg transition duration-300 ease-in-out mt-2 flex items-center justify-center gap-2
              ${
                status === "sending"
                  ? "bg-gray-200 text-fuchsia-500 cursor-not-allowed"
                  : "bg-white text-fuchsia-700 hover:bg-fuchsia-50 shadow-xl hover:shadow-2xl"
              }
            `}
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
            <p className="text-center text-green-300 font-medium mt-2 flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              Message sent successfully. I will respond soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-red-300 font-medium mt-2 flex items-center justify-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Send failed. Check the console for errors.
            </p>
          )}
        </form>

        {/* Optional direct email line, matching the design style */}
        <p className="text-center text-fuchsia-100 mt-6">
          Or reach out directly:
        </p>
        <p className="text-center text-lg font-semibold mt-2">
          mrashidcodes@gmail.com{" "}
        </p>
      </div>
    </section>
  );
}
