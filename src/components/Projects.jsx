import { ExternalLink, Github, FolderGit2, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projects, projectCategories } from '@/data';
import { useState } from 'react';

function Projects() {
  const [expandedCards, setExpandedCards] = useState({});
  const [currentCategory, setCurrentCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const toggleExpanded = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const filterProjects = (category) => {
    setCurrentCategory(category);
    const filtered = projects.filter(project =>
      category === 'All' ? true : project.category === category
    );
    setFilteredProjects(filtered);
  };

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(16,185,129,0.05),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-slate-900/60 border-l-4 border-emerald-500 px-4 py-2 mb-4 backdrop-blur-sm">
            <h2 className="text-sm font-mono text-emerald-400">
              <FolderGit2 className="inline h-4 w-4 mr-2" />
              ./projects
            </h2>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            <span className="text-emerald-400">Featured</span>{' '}
            <span className="text-slate-200">Work</span>
          </h2>
          <p className="text-slate-400 text-lg mb-6 font-mono">Building solutions that matter</p>
          <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => filterProjects(category)}
              className={`px-6 py-2.5 rounded-lg font-mono text-sm transition-all duration-300 border
                ${currentCategory === category
                  ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:bg-slate-800 hover:border-slate-700'
                }`}
            >
              <span className="text-xs mr-2">{currentCategory === category ? '●' : '○'}</span>
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-950/80 border border-slate-800 hover:border-emerald-500/50 rounded-xl overflow-hidden backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:transform hover:scale-[1.02] flex flex-col"
            >
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/80 border-b border-slate-800">
                <Terminal className="h-3 w-3 text-emerald-400" />
                <span className="text-xs text-slate-500 font-mono truncate flex-1">
                  {project.title.toLowerCase().replace(/\s+/g, '-')}.js
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-500 font-mono">
                  {project.category}
                </span>
              </div>

              {/* Icon/Emoji section */}
              <div className="relative h-32 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/30 flex items-center justify-center overflow-hidden border-b border-slate-800">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.1),transparent_70%)]"></div>
                <span className="relative text-6xl filter drop-shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-200 mb-3 font-mono group-hover:text-emerald-400 transition-colors">
                  <span className="text-slate-600">&gt;</span> {project.title}
                </h3>

                <div className="mb-4">
                  <p className={`text-slate-400 text-sm leading-relaxed ${expandedCards[index] ? '' : 'line-clamp-3'}`}>
                    {project.description}
                  </p>
                  {project.description.length > 150 && (
                    <button
                      onClick={() => toggleExpanded(index)}
                      className="text-emerald-400 hover:text-emerald-300 text-xs font-mono mt-2 underline"
                    >
                      {expandedCards[index] ? '- Show less' : '+ Read more'}
                    </button>
                  )}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-900 border border-slate-800 hover:border-emerald-500/50 text-slate-400 hover:text-emerald-400 rounded-md text-xs font-mono transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3 pt-4 border-t border-slate-800">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-slate-700 bg-slate-900/50 text-slate-400 hover:bg-slate-800 hover:text-emerald-400 hover:border-emerald-500/50 transition-all duration-200 font-mono text-xs"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Source
                  </Button>

                  {project.demo && (
                    <Button
                      size="sm"
                      className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-slate-950 border-0 shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-200 font-mono text-xs font-bold"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom info */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-slate-900/60 border border-slate-800 rounded-lg px-6 py-3 backdrop-blur-sm">
            <p className="text-slate-400 text-sm font-mono">
              <span className="text-emerald-400">→</span> More projects available on{' '}
              <a 
                href={`https://github.com/pujanjani30`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 underline"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;