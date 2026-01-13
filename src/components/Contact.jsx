import { useState } from 'react';
import { Mail, MapPin, Send, Terminal, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from "sonner";
import { contactDetails } from '@/data';
import contactHandler from '@/utils/contactHandler';

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = {
      name: e.target.name.value.trim(),
      email: e.target.email.value.trim(),
      message: e.target.message.value.trim()
    };

    try {
      const res = await contactHandler(data);
      toast.success(res.message);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error(error.message || 'Something went wrong!');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(16,185,129,0.05),transparent_60%)]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-slate-900/60 border-l-4 border-emerald-500 px-4 py-2 mb-4 backdrop-blur-sm">
            <h2 className="text-sm font-mono text-emerald-400">
              <Terminal className="inline h-4 w-4 mr-2" />
              ./contact.sh
            </h2>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            <span className="text-emerald-400">Get</span>{' '}
            <span className="text-slate-200">In Touch</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-slate-400 font-mono max-w-2xl mx-auto">
            <span className="text-slate-600">&gt;</span> Let's collaborate on something amazing
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Contact details card */}
            <div className="bg-slate-950/80 border border-slate-800 rounded-xl overflow-hidden backdrop-blur-sm">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/80 border-b border-slate-800">
                <Terminal className="h-4 w-4 text-emerald-400" />
                <span className="text-xs text-slate-400 font-mono">contact-info.json</span>
              </div>

              <div className="p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                    <Mail className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-200 mb-1 font-mono text-sm">Email</h4>
                    <a 
                      href={`mailto:${contactDetails.email}`}
                      className="text-emerald-400 hover:text-emerald-300 transition-colors font-mono text-sm"
                    >
                      {contactDetails.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                    <MapPin className="h-5 w-5 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-200 mb-1 font-mono text-sm">Location</h4>
                    <p className="text-slate-400 font-mono text-sm">{contactDetails.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response time card */}
            <div className="bg-emerald-950/30 border border-emerald-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5" />
                <div>
                  <h4 className="text-emerald-400 font-mono text-sm font-semibold mb-2">
                    Response Time
                  </h4>
                  <p className="text-slate-400 text-sm font-mono leading-relaxed">
                    I typically respond within 24 hours. For urgent projects, please mention it in your message.
                  </p>
                </div>
              </div>
            </div>

            {/* Status indicator */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-emerald-500 rounded-full animate-ping"></div>
                </div>
                <span className="text-slate-400 text-sm font-mono">
                  Currently available for new projects
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-950/80 border border-slate-800 rounded-xl overflow-hidden backdrop-blur-sm">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/80 border-b border-slate-800">
              <Terminal className="h-4 w-4 text-emerald-400" />
              <span className="text-xs text-slate-400 font-mono">send-message.sh</span>
              <div className="ml-auto flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                <div className="w-2 h-2 rounded-full bg-emerald-500/50"></div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs font-mono text-slate-500 mb-2 uppercase tracking-wider">
                  <span className="text-emerald-400">$</span> Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-slate-900/50 border-slate-700 text-slate-200 placeholder-slate-600 focus:border-emerald-500/50 focus:ring-emerald-500/20 font-mono"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-mono text-slate-500 mb-2 uppercase tracking-wider">
                  <span className="text-emerald-400">$</span> Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-slate-900/50 border-slate-700 text-slate-200 placeholder-slate-600 focus:border-emerald-500/50 focus:ring-emerald-500/20 font-mono"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-slate-500 mb-2 uppercase tracking-wider">
                  <span className="text-emerald-400">$</span> Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-slate-900/50 border-slate-700 text-slate-200 placeholder-slate-600 focus:border-emerald-500/50 focus:ring-emerald-500/20 resize-none font-mono"
                  placeholder="Tell me about your project or say hello..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-slate-950 font-mono font-bold py-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-pulse">Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Execute Send
                  </>
                )}
              </Button>

              {/* Command hint */}
              <div className="pt-2">
                <p className="text-xs text-slate-600 font-mono">
                  <span className="text-slate-700">// </span>
                  Press Enter or click button to send
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;