import { Github, Linkedin, Heart, Terminal, Code2 } from 'lucide-react';
import { socialLinks } from '@/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(16,185,129,0.03),transparent_50%)]"></div>
      
      <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                <Terminal className="h-5 w-5 text-emerald-400" />
              </div>
              <div>
                <span className="text-lg font-bold text-slate-200 font-mono">
                  {'<PJ />'}
                </span>
                <p className="text-xs text-slate-600 font-mono">Pujan Jani</p>
              </div>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
              <p className="text-slate-400 text-sm leading-relaxed font-mono">
                <span className="text-emerald-500">//</span> Building innovative web solutions with the MERN stack
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-mono text-emerald-400 uppercase tracking-wider">
              <Code2 className="inline h-4 w-4 mr-2" />
              Navigation
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-slate-500 hover:text-emerald-400 transition-colors duration-200 text-sm font-mono group flex items-center gap-1"
                >
                  <span className="text-slate-700 group-hover:text-emerald-500">&gt;</span>
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-mono text-emerald-400 uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex gap-3">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-slate-900/50 border border-slate-800 hover:border-emerald-500/50 rounded-lg transition-all duration-300 hover:bg-slate-800"
              >
                <Github className="h-5 w-5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-slate-900/50 border border-slate-800 hover:border-emerald-500/50 rounded-lg transition-all duration-300 hover:bg-slate-800"
              >
                <Linkedin className="h-5 w-5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
              </a>
            </div>
            <div className="bg-emerald-950/30 border border-emerald-500/20 rounded-lg p-3">
              <p className="text-slate-500 text-xs font-mono">
                Open to collaboration and new opportunities
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center text-slate-500 text-sm font-mono">
              <span className="text-slate-700">// </span>
              <span>© {currentYear} Pujan Jani</span>
            </div>

            <div className="flex items-center gap-2 text-slate-500 text-sm font-mono">
              <span>Built with</span>
              <Heart className="h-4 w-4 text-red-500/70 animate-pulse" />
              <span>using</span>
              <span className="text-emerald-400">React</span>
            </div>
          </div>

          {/* Version info */}
          <div className="mt-4 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900/50 border border-slate-800 rounded-full">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-slate-600 font-mono">v1.0.0 • Production Ready</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;