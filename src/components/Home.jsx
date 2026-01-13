import { Download, Mail, Github, Linkedin, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { socialLinks } from '@/data';
import { useEffect, useState } from 'react';

function Home() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Backend Developer';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden'
    >
      {/* Matrix-style background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-950/20 via-slate-950 to-slate-950"></div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"></div>

      {/* Animated code blocks */}
      <div className="absolute top-20 left-10 opacity-10 font-mono text-emerald-500/50 text-sm animate-pulse">
        <code>{'{'}<br />
          &nbsp;&nbsp;"status": "active",<br />
          &nbsp;&nbsp;"ready": true<br />
          {'}'}</code>
      </div>

      <div className="absolute bottom-20 right-10 opacity-10 font-mono text-emerald-500/50 text-sm animate-pulse delay-700">
        <code>
          {`const dev = () => {
            return 'code';
          }`}
        </code>
      </div>

      <div className='max-w-5xl mx-auto text-center relative z-10'>
        <div className='space-y-8'>
          {/* Terminal-style header */}
          <div className="inline-block bg-slate-900/80 border border-emerald-500/30 rounded-lg px-4 py-2 mb-4 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm">
              <Terminal className="h-4 w-4" />
              <span>~/portfolio</span>
              <span className="text-slate-600">$</span>
              <span className="text-slate-400">whoami</span>
            </div>
          </div>

          {/* Main heading with glitch effect */}
          <div className='space-y-6'>
            <h1 className='text-6xl md:text-8xl font-bold tracking-tight font-mono relative'>
              <span className='relative inline-block text-emerald-400'>
                {'<'}Pujan Jani{' />'}
                <span className="absolute inset-0 text-emerald-500 opacity-50 blur-sm">
                  {'<'}Pujan Jani{' />'}
                </span>
              </span>
            </h1>

            <div className="relative">
              <div className="inline-block bg-slate-900/60 border-l-4 border-emerald-500 px-6 py-3 backdrop-blur-sm">
                <h2 className="text-2xl md:text-3xl text-slate-200 font-mono">
                  <span className="text-emerald-500">&gt;_</span> {displayText}
                  <span className="inline-block w-2 h-6 bg-emerald-500 ml-1 animate-pulse"></span>
                </h2>
              </div>
            </div>
          </div>

          {/* Tech stack with code syntax */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 backdrop-blur-sm font-mono text-sm md:text-base">
              <div className="flex items-start gap-2 text-left">
                <div className="flex-1">
                <span className="text-slate-600 select-none">1</span>
                  <span className="text-purple-400 ml-4">const</span>{' '}
                  <span className="text-emerald-400">techStack</span>{' '}
                  <span className="text-slate-400">=</span>{' '}
                  <span className="text-yellow-400">{'{'}</span>
                  <br />
                  <span className="text-slate-600 select-none">2</span>
                  <span className="text-sky-400 ml-10">backend</span>
                  <span className="text-slate-400">:</span>{' '}
                  <span className="text-orange-400">[</span>
                  <span className="text-emerald-300">'Node.js'</span>
                  <span className="text-slate-400">,</span>{' '}
                  <span className="text-emerald-300">'Express.js'</span>
                  <span className="text-slate-400">,</span>{' '}
                  <span className="text-emerald-300">'MongoDB'</span>
                  <span className="text-slate-400">,</span>{' '}
                  <span className="text-emerald-300">'Python'</span>
                  <span className="text-orange-400">]</span>
                  <span className="text-slate-400">,</span>
                  <br />
                  <span className="text-slate-600 select-none">3</span>
                  <span className="text-sky-400 ml-10">frontend</span>
                  <span className="text-slate-400">:</span>{' '}
                  <span className="text-orange-400">[</span>
                  <span className="text-emerald-300">'React'</span>
                  <span className="text-slate-400">,</span>{' '}
                  <span className="text-emerald-300">'Tailwind CSS'</span>
                  <span className="text-orange-400">]</span>
                  <br />
                  <span className="text-slate-600 select-none">4</span>
                  <span className="text-yellow-400 ml-4">{'}'}</span>
                  <span className="text-slate-400">;</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-slate-950 px-8 py-6 text-lg font-mono font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:scale-105 border-0 group relative overflow-hidden"
              onClick={() => window.open('/Pujan_Jani_Backend_Dev_Resume.pdf', '_blank')}
            >
              <span className="absolute inset-0 bg-emerald-400 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></span>
              <Download className="mr-2 h-5 w-5 relative z-10" />
              <span className="relative z-10">Download Resume</span>
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="border-2 border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-300 hover:border-emerald-400 px-8 py-6 text-lg font-mono font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:scale-105 bg-transparent"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </div>

          {/* Social Links with terminal style */}
          <div className="flex justify-center gap-6 mt-16">
            {[
              { icon: Github, url: socialLinks.github, label: 'github' },
              { icon: Linkedin, url: socialLinks.linkedin, label: 'linkedin' }
            ].map(({ icon: Icon, url, label }) => (
              <button
                key={label}
                onClick={() => window.open(url, '_blank')}
                className="group relative"
              >
                <div className="absolute inset-0 bg-emerald-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative px-6 py-3 bg-slate-900/80 border border-slate-700 hover:border-emerald-500/50 rounded-lg transition-all duration-300 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                    <span className="text-slate-400 group-hover:text-emerald-400 font-mono text-sm transition-colors">
                      /{label}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Status indicator */}
          <div className="mt-12 inline-flex items-center gap-2 px-4 py-2 bg-slate-900/60 border border-slate-800 rounded-full backdrop-blur-sm">
            <div className="relative">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
            </div>
            <span className="text-slate-400 text-sm font-mono">Available for opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;