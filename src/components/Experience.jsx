import React from "react";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 bg-gray-50 border-t border-gray-100"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h3 className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tight border-b-4 border-fuchsia-200 inline-block pb-1">
            Experience
          </h3>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 transition duration-300 hover:shadow-2xl">
            <h4 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-fuchsia-700" />
              Junior Developer
            </h4>

            <p className="text-gray-500 mt-2 italic font-medium">
              Success Sahiwal Community | March 2024 to Present
            </p>

            <ul className="mt-6 space-y-3 text-gray-700 list-disc pl-5 leading-relaxed">
              <li>
                Built backend services using Node.js and Express with a focus on
                accuracy and security.
              </li>
              <li>
                Developed authentication systems using JWT and session based
                flows.
              </li>
              <li>
                Added real time features with Socket.IO and integrated
                notification systems.
              </li>
              <li>
                Managed file upload workflows using AWS S3 and Cloudinary.
              </li>
              <li>
                Deployed and maintained applications on AWS, Azure and Railway.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
