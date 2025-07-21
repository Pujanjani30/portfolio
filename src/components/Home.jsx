import { Download, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { socialLinks } from '@/data';

function Home() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id='home'
      className='min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden'
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className='max-w-5xl mx-auto text-center relative z-10'>
        <div className='space-y-8 animate-fade-in'>

          {/* Main heading */}
          <div className='space-y-8'>
            <h1 className='text-6xl md:text-8xl font-bold tracking-tight'>
              <span className='bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent animate-gradient'>
                Pujan Jani
              </span>
            </h1>

            <div className="relative">
              <h2 className="text-3xl md:text-4xl text-slate-200 font-light mb-2">
                MERN Stack Developer
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
            Building full-stack experiences with
            <span className="text-emerald-500 font-medium"> MongoDB</span>,
            <span className="text-yellow-400 font-medium"> Express</span>,
            <span className="text-blue-400 font-medium"> React</span>, and
            <span className="text-lime-400 font-medium"> Node.js</span>
          </p>

          {/* Tech stack visual indicators */}
          {/* <div className="flex justify-center items-center gap-6 py-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700/50">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-slate-300 text-sm font-medium">MongoDB</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700/50">
              <div className="w-3 h-3 bg-gray-400 rounded-full animate-pulse delay-200"></div>
              <span className="text-slate-300 text-sm font-medium">Express</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700/50">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-400"></div>
              <span className="text-slate-300 text-sm font-medium">React</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700/50">
              <div className="w-3 h-3 bg-green-600 rounded-full animate-pulse delay-600"></div>
              <span className="text-slate-300 text-sm font-medium">Node.js</span>
            </div>
          </div> */}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12 animate-fade-in">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/25 hover:scale-105 border-0 cursor-pointer"
              onClick={() => window.open('/Pujan_Jani_Resume.pdf', '_blank')}
            >
              <Download className="mr-3 h-5 w-5" />
              Download Resume
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="border-2 border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-500 px-10 py-4 text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 bg-transparent cursor-pointer"
            >
              <Mail className="mr-3 h-5 w-5" />
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-8 mt-16 animate-fade-in">
            <a
              href={socialLinks[0].href}
              className="group p-3 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-blue-400 hover:border-blue-400/50 hover:bg-blue-400/10 transition-all duration-300 hover:scale-110"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href={socialLinks[1].href}
              className="group p-3 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-blue-500 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>

          {/* Scroll indicator */}
          {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
export default Home