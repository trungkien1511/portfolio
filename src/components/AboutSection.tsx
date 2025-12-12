import React from "react";
import { ABOUT_TEXT } from "../constants";
import { User, Target } from "lucide-react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* About Me */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                  <User size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">About Me</h3>
              </div>
              <p className="text-slate-600 leading-relaxed text-justify">
                {ABOUT_TEXT.intro}
              </p>
            </div>

            {/* Career Objective */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-green-100 text-green-600 rounded-lg">
                  <Target size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Career Objective
                </h3>
              </div>
              <p className="text-slate-600 leading-relaxed text-justify">
                {ABOUT_TEXT.objective}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
