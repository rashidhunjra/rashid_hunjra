import React from "react";
import { Server, Monitor, Zap, Cloud, Wrench, Shield } from "lucide-react";

export default function Skills() {
  const skillsData = [
    { title: "Node.js", cat: "Backend", level: 85 },
    { title: "Express.js", cat: "Backend", level: 85 },
    { title: "MongoDB", cat: "Backend", level: 80 },
    { title: "Mongoose", cat: "Backend", level: 80 },
    { title: "JWT", cat: "Authentication", level: 85 },
    { title: "Passport.js", cat: "Authentication", level: 75 },
    { title: "Socket.IO", cat: "Real-time", level: 80 },
    { title: "React", cat: "Frontend", level: 75 },
    { title: "Redux", cat: "Frontend", level: 70 },
    { title: "Tailwind CSS", cat: "Frontend", level: 85 },
    { title: "AWS S3", cat: "Cloud", level: 70 },
    { title: "Cloudinary", cat: "Cloud", level: 75 },
    { title: "Git & GitHub", cat: "Tools", level: 80 },
    { title: "Postman", cat: "Tools", level: 85 },
  ];

  const categories = skillsData.reduce((acc, skill) => {
    if (!acc[skill.cat]) acc[skill.cat] = [];
    acc[skill.cat].push(skill);
    return acc;
  }, {});

  const getCategoryColor = (cat) => {
    const colors = {
      Backend: "bg-blue-600",
      Authentication: "bg-purple-600",
      "Real-time": "bg-green-600",
      Frontend: "bg-cyan-600",
      Cloud: "bg-orange-600",
      Tools: "bg-slate-600",
    };
    return colors[cat] || "bg-blue-600";
  };

  const getCategoryIcon = (cat) => {
    const icons = {
      Backend: Server,
      Authentication: Shield,
      "Real-time": Zap,
      Frontend: Monitor,
      Cloud: Cloud,
      Tools: Wrench,
    };
    return icons[cat] || Server;
  };

  return (
    <section id="skills" className="py-20 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Technical Skills
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Skill categories */}
        <div className="space-y-10">
          {Object.keys(categories).map((category) => {
            const color = getCategoryColor(category);
            const IconComponent = getCategoryIcon(category);

            return (
              <div
                key={category}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-slate-200"
              >
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 sm:mb-6 pb-3 border-b border-slate-200 flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-lg ${color} flex items-center justify-center`}
                  >
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  {category}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categories[category].map((skill) => (
                    <div key={skill.title} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-slate-900">
                          {skill.title}
                        </span>
                        <span className="text-sm font-bold text-slate-600">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${color} rounded-full transition-all duration-1000`}
                          style={{ width: skill.level + "%" }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA box */}
        <div className="mt-10 sm:mt-12 text-center bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white">
          <h3 className="text-xl sm:text-2xl font-bold mb-3">
            Always Learning
          </h3>
          <p className="text-blue-50 max-w-2xl mx-auto text-sm sm:text-base">
            Continuously improving my skills and exploring new technologies to
            build better applications
          </p>
        </div>
      </div>
    </section>
  );
}
