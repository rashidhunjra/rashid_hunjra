import React from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

export default function Experience() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const experiences = [
    {
      role: "Junior Developer",
      company: "Success Sahiwal Community",
      location: "Remote",
      duration: "March 2024 to Present",
      responsibilities: [
        "Built backend services using Node.js and Express with a focus on accuracy and security.",
        "Developed authentication systems using JWT and session based flows.",
        "Added real-time features with Socket.IO and integrated notification systems.",
        "Managed file upload workflows using AWS S3 and Cloudinary.",
        "Deployed and maintained applications on AWS, Azure and Railway.",
      ],
    },
    // Add more experiences here if needed
  ];

  return (
    <section
      id="experience"
      ref={ref}
      className="py-16 sm:py-20 bg-slate-50"
      aria-label="Work experience section"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Professional journey building scalable backend solutions
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-4 border-blue-600 ml-4 sm:ml-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`mb-12 ml-8 sm:ml-10 relative transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              {/* Dot / Icon */}
              <span className="absolute -left-12 sm:-left-14 top-2 bg-blue-600 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-lg ring-4 ring-slate-50 hover:scale-110 transition-transform">
                <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </span>

              {/* Experience Card */}
              <div className="bg-white border-2 border-slate-200 hover:border-blue-400 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                      {exp.role}
                    </h3>
                    <p className="text-blue-600 font-semibold text-base sm:text-lg mb-2">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-slate-600 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t-2 border-slate-100 pt-4">
                  <h4 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <div className="w-1 h-4 bg-blue-600 rounded"></div>
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                    {exp.responsibilities.map((item, id) => (
                      <li key={id} className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mt-12 text-center transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <p className="text-slate-600 mb-4">
            Looking for more details about my work experience?
          </p>
          <a
            href="/M_Rashid_CV.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:ring-4 focus:ring-blue-500/50"
          >
            <Briefcase className="w-5 h-5" />
            Download Full Resume
          </a>
        </div>
      </div>
    </section>
  );
}

