import { Briefcase, Calendar, MapPin, ChevronRight, Code, Zap, Terminal } from 'lucide-react';
import { experience } from '@/data';

function Experience() {
  const getTypeColor = (type) => {
    switch (type) {
      case 'Full-time':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'Internship':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      default:
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    }
  };

  return (
    <section id="experience" className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_rgba(16,185,129,0.05),transparent_60%)]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-slate-900/60 border-l-4 border-emerald-500 px-4 py-2 mb-4 backdrop-blur-sm">
            <h2 className="text-sm font-mono text-emerald-400">
              <Terminal className="inline h-4 w-4 mr-2" />
              ./experience.sh
            </h2>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            <span className="text-emerald-400">Work</span>{' '}
            <span className="text-slate-200">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
        </div>

        <div className="overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex justify-center gap-6 min-w-max px-4">
            {experience.map((exp, index) => (
              <div key={index} className="flex-shrink-0 w-[450px]">
                <div className="group bg-slate-950/80 border border-slate-800 hover:border-emerald-500/50 rounded-xl overflow-hidden backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:transform hover:scale-[1.02] h-full">
                  {/* Terminal header */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/80 border-b border-slate-800">
                    <Terminal className="h-3 w-3 text-emerald-400" />
                    <span className="text-xs text-slate-500 font-mono flex-1 truncate">
                      {exp.company.toLowerCase().replace(/\s+/g, '-')}.log
                    </span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full border font-mono ${getTypeColor(exp.type)}`}>
                      {exp.type}
                    </span>
                  </div>

                  <div className="p-6 space-y-4">
                    {/* Header */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Briefcase className="h-5 w-5 text-emerald-400" />
                        <h3 className="text-lg font-bold text-slate-200 font-mono leading-tight">
                          {exp.title}
                        </h3>
                      </div>
                      <div className="text-base text-emerald-400 font-semibold font-mono mb-3">
                        {exp.company}
                      </div>
                    </div>

                    {/* Meta info */}
                    <div className="flex flex-wrap gap-2">
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-900/50 border border-slate-800 rounded-lg text-xs font-mono text-slate-400">
                        <Calendar className="h-3 w-3" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-900/50 border border-slate-800 rounded-lg text-xs font-mono text-slate-400">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Code className="h-4 w-4 text-emerald-400" />
                        <span className="font-semibold text-sm font-mono text-slate-300">
                          Key Responsibilities
                        </span>
                      </div>
                      <div className="space-y-2">
                        {exp.description.slice(0, 3).map((item, idx) => (
                          <div 
                            key={idx} 
                            className="flex items-start gap-2 bg-slate-900/30 border border-slate-800/50 rounded-lg p-3 group/item hover:border-emerald-500/30 transition-colors"
                          >
                            <ChevronRight className="h-3 w-3 text-emerald-400 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-400 text-xs leading-relaxed font-mono">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Zap className="h-4 w-4 text-yellow-400" />
                        <span className="font-semibold text-sm font-mono text-slate-300">
                          Tech Stack
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-slate-900/50 border border-slate-800 hover:border-emerald-500/50 text-slate-400 hover:text-emerald-400 rounded-md text-xs font-mono transition-all duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;