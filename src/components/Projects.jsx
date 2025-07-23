import { ExternalLink, Github, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projects, projectCategories } from '@/data';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { useState } from 'react';

function Projects() {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpanded = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section id="projects" className="py-16 px-4 bg-slate-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-slate-400 text-lg mb-6">Showcasing innovative solutions and technical expertise</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {projectCategories.map((category) => (
            <Button
              key={category}
              variant="outline"
              className="border-slate-600/50 bg-slate-800/50 text-slate-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300 backdrop-blur-sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index}
              className="relative p-0 bg-gradient-to-br from-slate-900/90 to-slate-800/90 
              backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-slate-500/50 
              transition-all duration-300 overflow-hidden hover:transform hover:scale-[1.02]"
            >
              <CardHeader className="relative h-28 bg-gradient-to-br from-blue-600/20
                 via-purple-600/20 to-pink-600/20 flex items-center justify-center overflow-hidden"
              >
                {/* <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div> */}
                <span className="relative text-5xl filter drop-shadow-lg">{project.image}</span>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-black/30 backdrop-blur-sm text-white text-xs 
                    rounded-full border border-white/20"
                  >
                    {project.category}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2"
                  >
                    {project.title}
                  </h3>

                  <div>
                    <p className={`text-slate-400 text-sm leading-relaxed ${expandedCards[index] ? '' : 'line-clamp-3'}`}>
                      {project.description}
                    </p>
                    {project.description.length > 150 && (
                      <button
                        onClick={() => toggleExpanded(index)}
                        className="text-blue-500 text-sm underline hover:text-blue-600 mt-1"
                      >
                        {expandedCards[index] ? 'Show less' : 'Read more'}
                      </button>
                    )}
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-slate-800 to-slate-700
                     text-slate-300 rounded-full text-xs border border-slate-600/50
                      hover:border-blue-400/50 transition-colors duration-200 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                  {/* {project.technologies.length > 4 && (
                    <span className="px-3 py-1 bg-slate-700/50 text-slate-400 rounded-full text-xs">
                      +{project.technologies.length - 4}
                    </span>
                  )} */}
                </div>
              </CardContent>

              <CardFooter className="flex space-x-3 pb-4">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 border-slate-600/50 bg-slate-800/50 text-slate-300
                       hover:bg-slate-700 hover:text-white hover:border-slate-500 
                       transition-all duration-200 cursor-pointer"
                  onClick={() => window.open(project.github, '_target')}
                >
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </Button>

                {project.demo && (
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600
                         hover:from-blue-700 hover:to-purple-700 text-white border-0 
                         shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
                    onClick={() => window.open(project.demo, '_target')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))
          }
        </div >
      </div >
    </section >
  )
}
export default Projects