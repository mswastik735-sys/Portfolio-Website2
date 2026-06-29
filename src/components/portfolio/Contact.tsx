import { useState } from 'react';
import { MapPin, Mail, Phone, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  // Mock GitHub contribution grid data (53 weeks * 7 days)
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  // Generate mock contribution levels (0 to 4)
  const contributionGrid = Array.from({ length: 53 }, () => 
    Array.from({ length: 7 }, () => Math.floor(Math.random() * 5))
  );

  return (
    <section 
      id="contact" 
      className="py-24 px-6 md:px-12 border-t border-white/[0.05] bg-neutral-bg1"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2">
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-text-muted">
            09 LET'S CONNECT
          </span>
          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-br from-[#ECA47A] via-[#D78B55] to-[#A85025] bg-clip-text text-transparent font-sans pb-1">
            Get In Touch
          </h2>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start w-full">
          
          {/* Contact Details & Address Info */}
          <div className="lg:col-span-5 flex flex-col gap-8 w-full">
            <div className="flex flex-col gap-6">
              <div className="p-5 bg-white/[0.01] border border-white/[0.04] rounded-xl flex gap-4">
                <div className="text-cream bg-white/[0.04] p-3 rounded-lg h-fit">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-text-muted mb-1">Office Address</h4>
                  <p className="text-xs text-text-secondary leading-relaxed font-sans">
                    Loknath Lane, 3 No. Street, Srinagar, Madhyamgram, Kolkata - 700129.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-white/[0.01] border border-white/[0.04] rounded-xl flex gap-4">
                <div className="text-cream bg-white/[0.04] p-3 rounded-lg h-fit">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-text-muted mb-1">Email</h4>
                  <a href="mailto:mswastik735@gmail.com" className="text-xs text-text-secondary hover:text-cream font-sans">
                    mswastik735@gmail.com
                  </a>
                </div>
              </div>

              <div className="p-5 bg-white/[0.01] border border-white/[0.04] rounded-xl flex gap-4">
                <div className="text-cream bg-white/[0.04] p-3 rounded-lg h-fit">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-text-muted mb-1">Phone</h4>
                  <a href="tel:+919330141833" className="text-xs text-text-secondary hover:text-cream font-sans">
                    +91 9330141833
                  </a>
                </div>
              </div>
            </div>

            {/* GitHub Activity Board */}
            <div className="p-6 bg-white/[0.01] border border-white/[0.04] rounded-xl flex flex-col gap-4">
              <h4 className="text-xs uppercase font-bold tracking-widest text-cream flex items-center gap-2">
                Github Activity
              </h4>
              
              <div className="flex flex-col gap-2 overflow-x-auto pb-2 select-none">
                {/* Months headers */}
                <div className="flex justify-between text-[9px] text-text-muted font-semibold px-2">
                  {months.map((m, idx) => <span key={idx}>{m}</span>)}
                </div>
                
                {/* Heatmap Grid */}
                <div className="flex gap-[3px]">
                  {contributionGrid.map((week, wIdx) => (
                    <div key={wIdx} className="flex flex-col gap-[3px]">
                      {week.map((level, dIdx) => (
                        <div 
                          key={dIdx} 
                          className={`w-[8px] h-[8px] rounded-[1px] transition-colors duration-200 ${
                            level === 0 ? 'bg-zinc-900 border border-white/[0.02]' :
                            level === 1 ? 'bg-emerald-950' :
                            level === 2 ? 'bg-emerald-800' :
                            level === 3 ? 'bg-emerald-600' : 'bg-emerald-400 shadow-glow'
                          }`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between text-[9px] text-text-muted font-bold">
                <span>Less</span>
                <div className="flex gap-[3px]">
                  <div className="w-[8px] h-[8px] rounded-[1px] bg-zinc-900 border border-white/[0.02]" />
                  <div className="w-[8px] h-[8px] rounded-[1px] bg-emerald-950" />
                  <div className="w-[8px] h-[8px] rounded-[1px] bg-emerald-800" />
                  <div className="w-[8px] h-[8px] rounded-[1px] bg-emerald-600" />
                  <div className="w-[8px] h-[8px] rounded-[1px] bg-emerald-400" />
                </div>
                <span>More</span>
              </div>
            </div>

          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7 w-full double-bezel-outer bg-white/[0.01]">
            <div className="double-bezel-inner">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-[10px] font-bold text-text-secondary uppercase">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe" 
                      className="glass-input px-4 py-3 text-xs w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-[10px] font-bold text-text-secondary uppercase">Your Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com" 
                      className="glass-input px-4 py-3 text-xs w-full"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-[10px] font-bold text-text-secondary uppercase">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Inquiry regarding..." 
                    className="glass-input px-4 py-3 text-xs w-full"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-[10px] font-bold text-text-secondary uppercase">Your Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Type your message here..." 
                    className="glass-input px-4 py-3 text-xs w-full resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={submitted}
                  className="group flex items-center justify-center gap-3 bg-gradient-to-r from-[#D78B55] to-[#A85025] text-white hover:brightness-110 shadow-glow disabled:bg-zinc-700 disabled:text-text-muted text-xs font-bold py-3.5 rounded-lg active:scale-[0.98] spring-transition mt-2 w-full"
                >
                  {submitted ? 'Message Sent Successfully!' : (
                    <>
                      Send Message 
                      <Send size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 spring-transition" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
export default Contact;
