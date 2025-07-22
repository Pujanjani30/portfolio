import { GraduationCap, Calendar, MapPin, Star } from 'lucide-react';
import { education } from '@/data';

function Education() {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-slate-400 text-base mb-4">Academic background and continuous learning journey</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="flex justify-center space-x-8 min-w-max">
            {education.map((edu, index) => (
              <div key={index} className="flex-shrink-0 w-96 group">
                <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 group-hover:transform group-hover:scale-[1.02] shadow-xl h-full">
                  {/* Header */}
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 via-blue-400 to-purple-600 flex items-center justify-center shadow-lg">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-white mb-2 leading-tight">{edu.degree}</h3>
                    <div className="text-base text-emerald-400 font-semibold mb-2">{edu.institution}</div>
                    <div className="flex items-center justify-center text-blue-400 font-medium mb-2">
                      <Star className="h-3 w-3 mr-1" />
                      <span className="text-sm">{edu.grade}</span>
                    </div>
                  </div>

                  <div className="flex justify-center space-x-2 mb-4">
                    <div className="flex items-center text-slate-400 bg-slate-800/50 px-3 py-1 rounded-full text-xs">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{edu.year}</span>
                    </div>
                    <div className="flex items-center text-slate-400 bg-slate-800/50 px-3 py-1 rounded-full text-xs">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section >
  )
}

export default Education;