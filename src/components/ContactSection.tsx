import React from 'react';
import { SOCIAL_LINKS, PROFILE } from '../constants';
import { MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="bg-slate-900 text-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-3xl font-bold mb-6">Let's Connect!</h2>
            <p className="text-slate-400 mb-8 max-w-md">
              Tôi đang tích cực tìm kiếm cơ hội việc làm Full-Stack Developer. 
              Nếu bạn có bất kỳ câu hỏi nào hoặc muốn thảo luận về công việc, đừng ngần ngại liên hệ.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin size={20} className="text-blue-500" />
                <span>{PROFILE.location}</span>
              </div>
              
              {SOCIAL_LINKS.map((link) => (
                <a 
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-300 hover:text-white hover:translate-x-1 transition-all"
                >
                  <link.icon size={20} className="text-blue-500" />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Họ tên</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white transition-all"
                  placeholder="Nhập tên của bạn"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white transition-all"
                  placeholder="example@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Tin nhắn</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white transition-all resize-none"
                  placeholder="Nội dung tin nhắn..."
                ></textarea>
              </div>
              <button className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-blue-500/25">
                Gửi Tin Nhắn
              </button>
            </form>
          </div>

        </div>
        
        <div className="mt-20 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} {PROFILE.name}. Built with React & Tailwind CSS.</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;