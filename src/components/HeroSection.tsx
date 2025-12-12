import React from "react";
import { PROFILE, SOCIAL_LINKS } from "../constants";
import { ArrowDown, Download } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-10 bg-gradient-to-br from-slate-50 to-slate-100"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Image Section - Left on Desktop, Top on Mobile */}
          <div className="relative group shrink-0">
            <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <img
              src={PROFILE.avatarUrl}
              alt={PROFILE.name}
              className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-white shadow-xl"
            />
          </div>

          {/* Content Section - Right on Desktop, Bottom on Mobile */}
          <div className="text-center md:text-left flex-1">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
              Available for work
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 tracking-tight">
              {PROFILE.name}
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-slate-600 mb-6">
              {PROFILE.role}
            </h2>
            <p className="text-slate-600 text-lg max-w-xl mx-auto md:mx-0 mb-8 leading-relaxed">
              {PROFILE.shortBio}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-all shadow-md flex items-center gap-2"
              >
                Liên hệ ngay
                <ArrowDown size={18} />
              </a>
              <a
                href="#"
                className="px-8 py-3 bg-white text-slate-900 border border-slate-200 font-medium rounded-lg hover:bg-slate-50 transition-all shadow-sm flex items-center gap-2"
              >
                Tải CV
                <Download size={18} />
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center md:justify-start gap-6">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-slate-900 transition-colors"
                  aria-label={link.platform}
                >
                  <link.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
