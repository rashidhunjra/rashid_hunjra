import React from "react";
// Import icons for visual enhancement (using Lucide)
import { Code, Server, Cloud, Package, Box } from "lucide-react";

// Original Data Array
const data = [
  { title: "Node.js", cat: "Backend", icon: Server },
  { title: "Express.js", cat: "Backend", icon: Server },
  { title: "MongoDB", cat: "Backend", icon: Server },
  { title: "JWT", cat: "Backend", icon: Code },
  { title: "Passport", cat: "Backend", icon: Code },
  { title: "Socket.IO", cat: "Realtime", icon: Cloud },
  { title: "AWS S3", cat: "Storage", icon: Cloud },
  { title: "Cloudinary", cat: "Storage", icon: Cloud },
  { title: "React", cat: "Frontend", icon: Code },
  { title: "Tailwind CSS", cat: "Frontend", icon: Code },
  { title: "Docker (basic)", cat: "Tools", icon: Box },
  { title: "CI/CD", cat: "Tools", icon: Box },
];

// Helper function to get the corresponding Lucide icon component
const getCategoryIcon = (category) => {
  switch (category) {
    case "Backend":
      return Server;
    case "Realtime":
      return Cloud;
    case "Storage":
      return Cloud;
    case "Frontend":
      return Code;
    case "Tools":
      return Box;
    default:
      return Package;
  }
};

export default function Skills() {
  // Grouping the skills data by category for structured display
  const categories = data.reduce((acc, skill) => {
    if (!acc[skill.cat]) {
      acc[skill.cat] = [];
    }
    acc[skill.cat].push(skill);
    return acc;
  }, {});

  return (
    // Used a light gray background and border
    <section id="skills" className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Updated Title: Larger font and purple accent border */}
        <h3 className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tight border-b-4 border-fuchsia-200 inline-block pb-1">
          Core Skills
        </h3>

        <div className="mt-12 grid gap-10">
          {Object.keys(categories).map((category) => {
            const CatIcon = getCategoryIcon(category);
            return (
              <div key={category}>
                {/* Category Heading with icon and purple accent */}
                <h4 className="text-2xl font-bold text-fuchsia-700 mb-6 flex items-center gap-3">
                  <CatIcon className="w-6 h-6" />
                  {category}
                </h4>

                {/* Skill Cards Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                  {categories[category].map((s) => (
                    <div
                      key={s.title}
                      // Enhanced card styling: rounded, stronger shadow, and purple hover effect
                      className="p-5 bg-white rounded-xl shadow-lg border border-gray-100 transition duration-300 hover:shadow-xl hover:border-fuchsia-500"
                    >
                      <h5 className="text-lg font-semibold text-gray-900">
                        {s.title}
                      </h5>
                      <p className="text-sm text-fuchsia-600 mt-1 font-medium uppercase tracking-wider">
                        {s.cat}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
