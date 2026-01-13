import { Code, Zap, Box, Terminal } from 'lucide-react';

function About() {
  const stats = [
    { icon: Code, label: 'Clean Code', value: 'Scalable' },
    { icon: Zap, label: 'Performance', value: 'Optimized' },
    { icon: Box, label: 'Architecture', value: 'Modular' }
  ];

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(16,185,129,0.05),transparent_50%)]"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-slate-900/60 border-l-4 border-emerald-500 px-4 py-2 mb-4 backdrop-blur-sm">
            <h2 className="text-sm font-mono text-emerald-400">
              <Terminal className="inline h-4 w-4 mr-2" />
              ./about.sh
            </h2>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            <span className="text-emerald-400">const</span>{' '}
            <span className="text-slate-200">developer</span>{' '}
            <span className="text-slate-500">=</span>{' '}
            <span className="text-yellow-400">{'{'}</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text content */}
          <div className="space-y-6">
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 backdrop-blur-sm">
              <div className="font-mono text-sm space-y-4">
                <div className="flex gap-2">
                  <span className="text-slate-600 select-none">01</span>
                  <p className="text-slate-300 leading-relaxed">
                    <span className="text-purple-400">Passionate</span> about crafting{' '}
                    <span className="text-emerald-400">full-stack solutions</span> that solve real-world problems.
                    My journey started with curiosity and evolved into building{' '}
                    <span className="text-sky-400">scalable applications</span> that make a difference.
                  </p>
                </div>
                
                <div className="flex gap-2">
                  <span className="text-slate-600 select-none">02</span>
                  <p className="text-slate-300 leading-relaxed">
                    Specializing in the <span className="text-yellow-400">MERN stack</span>, I focus on writing{' '}
                    <span className="text-emerald-400">clean, maintainable code</span> with proper{' '}
                    <span className="text-orange-400">architecture patterns</span>. I believe in{' '}
                    <span className="text-pink-400">continuous learning</span> and staying updated with industry best practices.
                  </p>
                </div>

                <div className="flex gap-2">
                  <span className="text-slate-600 select-none">03</span>
                  <p className="text-slate-300 leading-relaxed">
                    When not coding, I'm exploring new technologies, contributing to open source,
                    or sharing knowledge with the developer community.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map(({ icon: Icon, label, value }) => (
                <div 
                  key={label}
                  className="group bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 rounded-xl p-4 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)]"
                >
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className="p-3 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                      <Icon className="h-6 w-6 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-mono">{label}</div>
                      <div className="text-sm text-emerald-400 font-mono font-semibold">{value}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Code block showcase */}
          <div className="space-y-4">
            <div className="bg-slate-950/80 border border-slate-800 rounded-xl overflow-hidden backdrop-blur-sm">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/80 border-b border-slate-800">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <span className="text-xs text-slate-500 font-mono ml-2">developer-profile.js</span>
              </div>

              {/* Code content */}
              <div className="p-6 font-mono text-sm overflow-x-auto">
                <div className="space-y-1">
                  <div className="flex gap-3">
                    <span className="text-slate-600 select-none w-6 text-right">1</span>
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-emerald-400">developer</span>{' '}
                    <span className="text-slate-400">=</span>{' '}
                    <span className="text-yellow-400">{'{'}</span>
                  </div>
                  
                  <div className="flex gap-3">
                    <span className="text-slate-600 select-none w-6 text-right">2</span>
                    <span className="ml-4 text-sky-400">name</span>
                    <span className="text-slate-400">:</span>{' '}
                    <span className="text-emerald-300">'Pujan Jani'</span>
                    <span className="text-slate-400">,</span>
                  </div>
                  
                  <div className="flex gap-3">
                    <span className="text-slate-600 select-none w-6 text-right">3</span>
                    <span className="ml-4 text-sky-400">role</span>
                    <span className="text-slate-400">:</span>{' '}
                    <span className="text-emerald-300">'Backend Developer'</span>
                    <span className="text-slate-400">,</span>
                  </div>
                  
                  <div className="flex gap-3">
                    <span className="text-slate-600 select-none w-6 text-right">4</span>
                    <span className="ml-4 text-sky-400">skills</span>
                    <span className="text-slate-400">:</span>{' '}
                    <span className="text-orange-400">[</span>
                  </div>
                  
                  <div className="flex gap-3">
                    <span className="text-slate-600 select-none w-6 text-right">5</span>
                    <span className="ml-8 text-emerald-300">'Node.js'</span>
                    <span className="text-slate-400">,</span>
                  </div>
                  
                  <div className="flex gap-3">
                    <span className="text-slate-600 select-none w-6 text-right">6</span>
                    <span className="ml-8 text-emerald-300">'Express.js'</span>
                    <span className="text-slate-400">,</span>
                  </div>
                  
                  <div className="flex gap-3">
                    <span className="text-slate-600 select-none w-6 text-right">7</span>
                    <span className="ml-8 text-emerald-300">'MongoDB'</span>
                    <span className="text-slate-400">,</span>
                  </div>
                  
                  <div className="flex gap-3">
                    <span className="text-slate-600 select-none w-6 text-right">8</span>
                    <span className="ml-8 text-emerald-300">'Python'</span>
                  </div>
                  
                  <div className="flex gap-3">
                    <span className="text-slate-600 select-none w-6 text-right">9</span>
                    <span className="ml-4 text-orange-400">]</span>
                    <span className="text-slate-400">,</span>
                  </div>
                  
                  <div className="flex gap-3">
                    <span className="text-slate-600 select-none w-6 text-right">10</span>
                    <span className="ml-4 text-sky-400">passion</span>
                    <span className="text-slate-400">:</span>{' '}
                    <span className="text-emerald-300">'Building amazing things'</span>
                    <span className="text-slate-400">,</span>
                  </div>
                  
                  <div className="flex gap-3">
                    <span className="text-slate-600 select-none w-6 text-right">11</span>
                    <span className="ml-4 text-sky-400">status</span>
                    <span className="text-slate-400">:</span>{' '}
                    <span className="text-emerald-300">'Available'</span>
                  </div>
                  
                  <div className="flex gap-3">
                    <span className="text-slate-600 select-none w-6 text-right">12</span>
                    <span className="text-yellow-400">{'}'}</span>
                    <span className="text-slate-400">;</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Success message */}
            <div className="bg-emerald-950/50 border border-emerald-500/30 rounded-xl p-4 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-emerald-400">✓</div>
                <div>
                  <div className="text-emerald-400 font-mono text-sm font-semibold mb-1">
                    Ready to collaborate
                  </div>
                  <p className="text-slate-400 text-sm font-mono">
                    Let's build something incredible together
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Closing brace */}
        <div className="text-center mt-12">
          <span className="text-4xl font-mono text-yellow-400">{'}'}</span>
          <span className="text-slate-500 font-mono">;</span>
        </div>
      </div>
    </section>
  );
}

export default About;