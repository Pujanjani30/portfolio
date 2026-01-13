import { techSkills, softSkills } from '@/data';
import { Terminal, Code2 } from 'lucide-react';

function Skills() {
  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-slate-900/60 border-l-4 border-emerald-500 px-4 py-2 mb-4 backdrop-blur-sm">
            <h2 className="text-sm font-mono text-emerald-400">
              <Code2 className="inline h-4 w-4 mr-2" />
              ./skills.sh --list
            </h2>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            <span className="text-emerald-400">Tech</span>{' '}
            <span className="text-slate-200">Arsenal</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {techSkills.map((category, index) => (
            <div
              key={index}
              className="group bg-slate-950/80 border border-slate-800 hover:border-emerald-500/50 rounded-xl overflow-hidden backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]"
            >
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/80 border-b border-slate-800">
                <Terminal className="h-4 w-4 text-emerald-400" />
                <span className="text-xs text-slate-400 font-mono">
                  {category.title.toLowerCase()}.sh
                </span>
                <div className="ml-auto flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                  <div className="w-2 h-2 rounded-full bg-emerald-500/50 group-hover:bg-emerald-500 transition-colors"></div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-6 font-mono text-emerald-400">
                  <span className="text-slate-600">&gt;</span> {category.title}
                </h3>

                <div className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className={`group/skill flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-300 font-mono text-sm
                        ${skill.featured 
                          ? 'bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 hover:border-emerald-500/50' 
                          : 'bg-slate-900/50 border border-slate-800 hover:bg-slate-800/80 hover:border-slate-700'
                        }`}
                    >
                      <span className={`text-xs ${skill.featured ? 'text-emerald-400' : 'text-slate-600'}`}>
                        {skill.featured ? '●' : '○'}
                      </span>
                      <span className={`flex-1 ${skill.featured ? 'text-emerald-300 font-semibold' : 'text-slate-400'}`}>
                        {skill.name}
                      </span>
                      {skill.featured && (
                        <span className="text-[10px] text-emerald-500/70 uppercase tracking-wider">
                          core
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-xl overflow-hidden backdrop-blur-sm">
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/80 border-b border-slate-800">
            <Terminal className="h-4 w-4 text-orange-400" />
            <span className="text-xs text-slate-400 font-mono">soft-skills.sh</span>
            <div className="ml-auto">
              <span className="text-xs text-slate-600 font-mono">5 attributes loaded</span>
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold mb-6 font-mono text-orange-400">
              <span className="text-slate-600">&gt;</span> Professional Skills
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="group/skill relative"
                >
                  {/* Progress bar background */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-800 rounded-b-lg">
                    <div className="h-full bg-gradient-to-r from-orange-500 to-pink-500 rounded-b-lg group-hover/skill:animate-pulse"></div>
                  </div>
                  
                  <div className="bg-slate-900/50 border border-slate-800 hover:border-orange-500/50 rounded-lg p-4 text-center transition-all duration-300 hover:bg-slate-800/80 hover:shadow-[0_0_15px_rgba(249,115,22,0.1)]">
                    <span className="text-sm font-mono text-slate-300 group-hover/skill:text-orange-400 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Command output */}
            <div className="mt-6 bg-slate-900/50 border border-slate-800 rounded-lg p-4">
              <div className="font-mono text-xs text-slate-500 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>All skills verified and operational</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange-400">→</span>
                  <span>Ready for collaboration and teamwork</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;