import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tight border-b-4 border-fuchsia-200 inline-block pb-1">
          About Me
        </h3>

        <div className="max-w-3xl mx-auto">
          <p className="mt-8 text-xl text-gray-700 leading-relaxed font-light">
            I work on backend development with Node.js, Express, and MongoDB. I
            build secure APIs, real-time systems with Socket.IO, and features
            like authentication, notifications, and role-based access. I keep
            the frontend clean and simple while the backend handles the heavy
            work with speed and reliability.
          </p>
        </div>
      </div>
    </section>
  );
}
