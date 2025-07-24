import { techSkills, softSkills } from '@/data'
import { Badge } from './ui/badge'

function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {techSkills.map((category, index) => (
            <div
              key={index}
              className={`${category.bgColor} backdrop-blur-sm rounded-2xl p-6 border transition-all 
            duration-300 hover:scale-105 hover:shadow-2xl`}
            >
              <h3
                className={`text-2xl font-bold mb-6 bg-gradient-to-r 
              ${category.color} bg-clip-text text-transparent text-center`}
              >
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant={skill.featured ? "default" : "secondary"}
                    className={`px-3 py-1 text-sm transition-all duration-200 hover:scale-110 cursor-default
                      ${skill.featured
                        ? `bg-gradient-to-r ${category.color} text-white hover:shadow-lg border-0`
                        : "bg-slate-700 text-slate-300 hover:bg-slate-600 border-slate-600"
                      }`}
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Other Technologies Section */}
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-3">
              <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Soft Skills
              </span>
            </h3>
            {/* <p className="text-slate-400 text-sm">Additional tools and technologies I work with</p> */}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="group relative"
              >
                <Badge
                  variant="outline"
                  className="w-full justify-center bg-gradient-to-br from-slate-800/80 to-slate-900/80
                   text-slate-300 hover:text-white border-slate-600/50 hover:border-orange-400/50
                    px-4 py-3 text-sm font-medium transition-all duration-300 hover:scale-105 
                    hover:shadow-lg hover:shadow-orange-400/10 group-hover:bg-gradient-to-br
                     group-hover:from-orange-500/10 group-hover:to-pink-500/10 cursor-default"
                >
                  {skill.name}
                </Badge>
                <div className="absolute inset-0 rounded-md bg-gradient-to-r from-orange-400/0 via-pink-400/0 to-purple-400/0 group-hover:from-orange-400/5 group-hover:via-pink-400/5 group-hover:to-purple-400/5 transition-all duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
export default Skills