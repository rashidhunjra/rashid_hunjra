import React from "react";
import { Server, Monitor, Zap, Cloud, Wrench, Shield } from "lucide-react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

export default function Skills() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const skillsData = [
    { title: "Node.js", cat: "Backend", level: "Proficient", years: "10mo+" },
    { title: "Express.js", cat: "Backend", level: "Proficient", years: "10mo+" },
    { title: "MongoDB", cat: "Backend", level: "Proficient", years: "10mo+" },
    { title: "Mongoose", cat: "Backend", level: "Proficient", years: "10mo+" },
    { title: "JWT", cat: "Authentication", level: "Proficient", years: "10mo+" },
    { title: "Passport.js", cat: "Authentication", level: "Intermediate", years: "6mo+" },
    { title: "Socket.IO", cat: "Real-time", level: "Proficient", years: "8mo+" },
    { title: "React", cat: "Frontend", level: "Proficient", years: "10mo+" },
    { title: "Redux", cat: "Frontend", level: "Intermediate", years: "6mo+" },
    { title: "Tailwind CSS", cat: "Frontend", level: "Proficient", years: "10mo+" },
    { title: "AWS S3", cat: "Cloud", level: "Intermediate", years: "6mo+" },
    { title: "Cloudinary", cat: "Cloud", level: "Proficient", years: "8mo+" },
    { title: "Git & GitHub", cat: "Tools", level: "Proficient", years: "10mo+" },
    { title: "Postman", cat: "Tools", level: "Proficient", years: "10mo+" },
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

  const getCategoryBorderColor = (cat) => {
    const colors = {
      Backend: "border-blue-500",
      Authentication: "border-purple-500",
      "Real-time": "border-green-500",
      Frontend: "border-cyan-500",
      Cloud: "border-orange-500",
      Tools: "border-slate-500",
    };
    return colors[cat] || "border-blue-500";
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

  const getLevelColor = (level) => {
    const colors = {
      Advanced: "bg-green-100 text-green-700 border-green-300",
      Proficient: "bg-blue-100 text-blue-700 border-blue-300",
      Intermediate: "bg-yellow-100 text-yellow-700 border-yellow-300",
    };
    return colors[level] || colors.Intermediate;
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="scroll-mt-24 py-16 sm:py-20 bg-slate-50"
      aria-label="Technical skills section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-14 sm:mb-16 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Technical Skills
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Expertise across the full MERN stack with a focus on backend development
          </p>
        </div>

        {/* Skill categories */}
        <div className="space-y-8 sm:space-y-12">
          {Object.keys(categories).map((category, catIndex) => {
            const color = getCategoryColor(category);
            const borderColor = getCategoryBorderColor(category);
            const IconComponent = getCategoryIcon(category);

            return (
              <div
                key={category}
                className={`bg-white rounded-2xl p-6 sm:p-8 shadow-lg border-2 ${borderColor} hover:shadow-2xl transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${catIndex * 150}ms` }}
              >
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-6 pb-4 border-b-2 border-slate-200 flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform`}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <span>{category}</span>
                  <span className="ml-auto text-sm font-normal text-slate-500">
                    {categories[category].length} skills
                  </span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {categories[category].map((skill, skillIndex) => (
                    <div
                      key={skill.title}
                      className={`group p-4 rounded-xl border-2 border-slate-200 hover:border-blue-400 bg-slate-50 hover:bg-white transition-all duration-300 hover:shadow-md hover:scale-105 ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-5"
                      }`}
                      style={{
                        transitionDelay: `${
                          catIndex * 150 + skillIndex * 50
                        }ms`,
                      }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <span className="font-bold text-slate-900 text-base group-hover:text-blue-600 transition-colors">
                          {skill.title}
                        </span>
                        <span className="text-xs font-semibold text-slate-500 bg-slate-200 px-2 py-1 rounded">
                          {skill.years}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${getLevelColor(
                            skill.level
                          )}`}
                        >
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA box */}
        <div
          className={`mt-12 sm:mt-16 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 sm:p-10 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 animate-gradient ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            🚀 Always Learning & Growing
          </h3>
          <p className="text-blue-50 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Continuously improving my skills and exploring new technologies to
            build better, more efficient applications. Currently diving deeper into
            microservices architecture and cloud deployment strategies.
          </p>
        </div>
      </div>
    </section>
  );
}

