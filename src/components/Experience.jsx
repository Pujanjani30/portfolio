import { Briefcase, Calendar, MapPin, ChevronRight, Code, Users, Zap } from 'lucide-react';
import { experience } from '@/data';

function Experience() {

  const getTypeColor = (type) => {
    switch (type) {
      case 'Full-time':
        return 'from-green-400 to-emerald-500';
      case 'Internship':
        return 'from-orange-400 to-yellow-500';
      default:
        return 'from-blue-400 to-purple-500';
    }
  };

  return (
    <section id="experience" className="py-12 px-4 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <p className="text-slate-400 text-base mb-4">Professional journey and career milestones</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="flex justify-center space-x-8 min-w-max">
            {experience.map((exp, index) => (
              <div key={index} className="flex-shrink-0 w-96 group">
                <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 group-hover:transform group-hover:scale-[1.02] shadow-xl h-full">
                  {/* Header */}
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-600 flex items-center justify-center shadow-lg">
                      <Briefcase className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  <div className="text-center mb-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <h3 className="text-lg font-bold text-white leading-tight">{exp.title}</h3>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-semibold bg-gradient-to-r ${getTypeColor(exp.type)} text-white`}>
                        {exp.type}
                      </span>
                    </div>
                    <div className="text-base text-cyan-400 font-semibold mb-3">{exp.company}</div>
                  </div>

                  <div className="flex justify-center space-x-2 mb-4">
                    <div className="flex items-center text-slate-400 bg-slate-800/50 px-3 py-1 rounded-full text-xs">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center text-slate-400 bg-slate-800/50 px-3 py-1 rounded-full text-xs">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-center text-white mb-3">
                      <Code className="h-4 w-4 mr-2" />
                      <span className="font-semibold text-sm">Key Responsibilities</span>
                    </div>
                    <div className="space-y-2">
                      {exp.description.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-start bg-slate-800/30 rounded-lg p-2 border border-slate-700/30">
                          <ChevronRight className="h-3 w-3 text-cyan-400 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-slate-300 text-xs leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-center text-white mb-3">
                      <Zap className="h-4 w-4 mr-2" />
                      <span className="font-semibold text-sm">Technologies</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gradient-to-r from-slate-700 to-slate-800
                           text-slate-300 rounded-full text-xs font-medium border
                            border-slate-600/50 hover:border-cyan-400/50 hover:text-white
                             transition-all duration-200 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
export default Experience