import React from "react";
import { SKILL_CATEGORIES, FUNDAMENTALS } from "../constants";
import { BookOpen, CheckCircle2 } from "lucide-react";

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Technical Skills */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Technical Skills
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-slate-600">
              Bộ công cụ và công nghệ tôi sử dụng để xây dựng sản phẩm
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILL_CATEGORIES.map((category, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className={`mb-4 ${category.color}`}>
                  <category.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((skill, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-slate-600 text-sm"
                    >
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Fundamental Knowledge */}
        <div>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-semibold mb-4">
              <BookOpen size={16} />
              Kiến thức nền tảng
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Computer Science Fundamentals
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {FUNDAMENTALS.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 bg-white rounded-lg border border-slate-200"
              >
                <div className="shrink-0 text-blue-600 mt-1">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
