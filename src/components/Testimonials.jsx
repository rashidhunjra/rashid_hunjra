import React from "react";
import { Quote, Award, Star } from "lucide-react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const testimonials = [
  {
    name: "Professional Certification",
    role: "MERN Stack Development",
    content: "Completed comprehensive MERN stack development course with hands-on projects covering Node.js, Express, MongoDB, and React.",
    type: "certification",
    rating: 5,
  },
  {
    name: "Project Achievement",
    role: "Sublet Marketplace",
    content: "Successfully built and deployed a full-featured marketplace with real-time chat, serving 100+ active users with 99.9% uptime.",
    type: "achievement",
    rating: 5,
  },
  {
    name: "Technical Skills",
    role: "Backend Development",
    content: "Specialized in building scalable REST APIs, implementing secure authentication systems, and optimizing database performance.",
    type: "skill",
    rating: 5,
  },
];

export default function Testimonials() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-16 md:py-20 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-14 md:mb-16 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Achievements & Certifications
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Continuous learning and proven track record of delivering quality work
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 sm:p-8 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center">
                  {item.type === "certification" && (
                    <Award className="w-6 h-6 text-blue-400" />
                  )}
                  {item.type === "achievement" && (
                    <Star className="w-6 h-6 text-yellow-400" />
                  )}
                  {item.type === "skill" && (
                    <Quote className="w-6 h-6 text-purple-400" />
                  )}
                </div>
                <div className="flex gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>

              {/* Content */}
              <p className="text-slate-300 leading-relaxed mb-4 italic">
                "{item.content}"
              </p>

              {/* Author */}
              <div className="border-t border-slate-700 pt-4">
                <p className="font-semibold text-white">{item.name}</p>
                <p className="text-sm text-slate-400">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
