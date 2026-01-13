import { GraduationCap, Calendar, MapPin, Star, Terminal } from 'lucide-react';
import { education } from '@/data';

function Education() {
  return (
    <section id="education" className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-slate-900/60 border-l-4 border-emerald-500 px-4 py-2 mb-4 backdrop-blur-sm">
            <h2 className="text-sm font-mono text-emerald-400">
              <Terminal className="inline h-4 w-4 mr-2" />
              ./education.sh
            </h2>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            <span className="text-emerald-400">Academic</span>{' '}
            <span className="text-slate-200">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
        </div>

        <div className="overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex justify-center gap-6 min-w-max px-4">
            {education.map((edu, index) => (
              <div key={index} className="flex-shrink-0 w-96">
                <div className="group bg-slate-950/80 border border-slate-800 hover:border-emerald-500/50 rounded-xl overflow-hidden backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:transform hover:scale-[1.02] h-full">
                  {/* Terminal header */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/80 border-b border-slate-800">
                    <Terminal className="h-3 w-3 text-emerald-400" />
                    <span className="text-xs text-slate-500 font-mono">
                      education-{index + 1}.log
                    </span>
                    <div className="ml-auto">
                      <GraduationCap className="h-4 w-4 text-emerald-400" />
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-base font-bold text-slate-200 mb-2 leading-tight font-mono">
                        <span className="text-slate-600">&gt;</span> {edu.degree}
                      </h3>
                      <div className="text-sm text-emerald-400 font-semibold font-mono mb-3">
                        {edu.institution}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2 px-3 py-2 bg-slate-900/50 border border-slate-800 rounded-lg">
                        <Star className="h-3 w-3 text-yellow-400" />
                        <span className="text-xs font-mono text-slate-300">{edu.grade}</span>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex items-center gap-2 px-3 py-2 bg-slate-900/50 border border-slate-800 rounded-lg">
                          <Calendar className="h-3 w-3 text-blue-400" />
                          <span className="text-xs font-mono text-slate-400">{edu.year}</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-2 bg-slate-900/50 border border-slate-800 rounded-lg">
                          <MapPin className="h-3 w-3 text-purple-400" />
                          <span className="text-xs font-mono text-slate-400">{edu.location}</span>
                        </div>
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

export default Education;