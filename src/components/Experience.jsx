import React from "react";
// Using lucide-react icon for the job title
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    // Used light gray background and border, consistent with Skills section
    <section
      id="experience"
      className="py-20 bg-gray-50 border-t border-gray-100"
    >
      {/* Max width set higher for consistency with other sections */}
      <div className="max-w-6xl mx-auto px-6">
        {/* Updated Title: Centered, larger font, and purple accent border */}
        <div className="text-center">
          <h3 className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tight border-b-4 border-fuchsia-200 inline-block pb-1">
            Experience
          </h3>
        </div>

        {/* Experience Card Container (Centered and styled) */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 transition duration-300 hover:shadow-2xl">
            {/* Job Title with Icon and color accent */}
            <h4 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-fuchsia-700" />
              Junior Developer
            </h4>

            {/* Date and Company Info */}
            <p className="text-gray-500 mt-2 italic font-medium">
              Success Sahiwal Community | March 2025 to Present
            </p>

            {/* Achievements List */}
            <ul className="mt-6 space-y-3 text-gray-700 list-disc pl-5">
              <li>
                Designed and built **scalable backend services** using Node.js
                and Express.
              </li>
              <li>
                Developed robust authentication layers using **JWT** and session
                systems.
              </li>
              <li>
                Implemented real-time features with Socket.IO and integrated
                notifications with Firebase and WhatsApp API.
              </li>
              <li>
                Managed secure and efficient file uploads using **AWS S3** and
                Cloudinary.
              </li>
              <li>
                Successfully deployed applications on platforms including AWS,
                Azure, and Railway.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
