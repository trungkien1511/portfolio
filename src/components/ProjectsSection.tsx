import React from "react";
import { PROJECTS } from "../constants";
import { Github, ExternalLink, Code2, GraduationCap } from "lucide-react";

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600">
            Các dự án cá nhân tiêu biểu trong quá trình học tập và thực hành
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-blue-200"
            >
              {/* Card Header (Optional Image could go here) */}
              <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-500"></div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <a
                      href={project.githubUrl}
                      className="text-slate-400 hover:text-slate-900 transition-colors"
                      title="View Code"
                    >
                      <Github size={20} />
                    </a>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        className="text-slate-400 hover:text-slate-900 transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-6 border-t border-slate-100 space-y-3">
                  <div className="flex gap-3">
                    <Code2 size={18} className="text-blue-500 shrink-0" />
                    <p className="text-xs text-slate-500">
                      <span className="font-semibold text-slate-700">
                        Vai trò:
                      </span>{" "}
                      {project.role}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <GraduationCap
                      size={18}
                      className="text-amber-500 shrink-0"
                    />
                    <p className="text-xs text-slate-500">
                      <span className="font-semibold text-slate-700">
                        Học được:
                      </span>{" "}
                      {project.learnings}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
