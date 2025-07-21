import { Code, Coffee, Lightbulb } from 'lucide-react';

function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a passionate MERN stack developer with a love for creating seamless digital experiences.
              My journey in web development started with curiosity and has evolved into a deep passion for
              building scalable, user-friendly applications that solve real-world problems.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies. I believe in writing clean,
              maintainable code and staying up-to-date with the latest industry trends.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-blue-600/20 flex items-center justify-center">
                  <Code className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="font-semibold text-white">Clean Code</h3>
                <p className="text-sm text-slate-400">Maintainable & Scalable</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-purple-600/20 flex items-center justify-center">
                  <Lightbulb className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="font-semibold text-white">Innovation</h3>
                <p className="text-sm text-slate-400">Creative Solutions</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-green-600/20 flex items-center justify-center">
                  <Coffee className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="font-semibold text-white">Dedication</h3>
                <p className="text-sm text-slate-400">Always Learning</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-96 rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-slate-700/50 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-white mb-2">Ready to Build</h3>
                <p className="text-slate-300">Let's create something amazing together!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About