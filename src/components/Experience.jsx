import React from "react";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Junior Developer",
      company: "Success Sahiwal Community",
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
    <section id="experience" className="py-15 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Experience
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-blue-600 ml-4">
          {experiences.map((exp, idx) => (
            <div key={idx} className="mb-10 ml-6 relative">
              {/* Dot / Icon */}
              <span className="absolute -left-5 top-1 bg-blue-600 w-4 h-4 rounded-full flex items-center justify-center shadow-lg">
                <Briefcase className="w-3 h-3 text-white" />
              </span>

              {/* Experience Card */}
              <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  {exp.role}
                </h3>
                <p className="text-blue-200 italic text-sm sm:text-base font-medium mb-4">
                  {exp.company} | {exp.duration}
                </p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 text-sm sm:text-base leading-relaxed">
                  {exp.responsibilities.map((item, id) => (
                    <li key={id}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
