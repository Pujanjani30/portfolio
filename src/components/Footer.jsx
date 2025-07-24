import { Github, Linkedin, Twitter, Heart, Code2 } from 'lucide-react';
import { socialLinks } from '@/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">Pujan Jani</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Passionate MERN stack developer building innovative web solutions
              that make a difference. Let's create something amazing together!
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Connect With Me</h3>
            <div className="flex space-x-4">
              <div
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center
                 text-slate-400 hover:text-blue-400 hover:bg-slate-700 transition-all 
                 duration-200 cursor-pointer"
                onClick={() => window.open(socialLinks.github, '_blank')}
              >
                <Github className="h-5 w-5" />
              </div>
              <div
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center
                 text-slate-400 hover:text-blue-400 hover:bg-slate-700 transition-all 
                 duration-200 cursor-pointer"
                onClick={() => window.open(socialLinks.linkedin, '_blank')}
              >
                <Linkedin className="h-5 w-5" />
              </div>
            </div>
            <p className="text-slate-500 text-xs">
              Always open to interesting conversations and collaboration opportunities.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center text-slate-400 text-sm">
            <span>© {currentYear} Pujan Jani. All rights reserved.</span>
          </div>

          <div className="flex items-center text-slate-400 text-sm mt-4 md:mt-0">
            <span>Built with</span>
            <Heart className="h-4 w-4 mx-1 text-red-400" />
            <span>using React & Shadcn/ui</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;