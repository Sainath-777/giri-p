import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'sainathreddy2126@gmail.com',
    href: 'mailto:sainathreddy2126@gmail.com',
    hint: null,
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/sainath-reddy-g-3263b324b',
    href: 'https://www.linkedin.com/in/sainath-reddy-g-3263b324b/',
    hint: null,
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/Sainath-777',
    href: 'https://github.com/Sainath-777',
    hint: null,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Hyderabad, India',
    href: null,
    hint: null,
  },
];

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...form }),
    })
      .then(() => {
        setSent(true);
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setSent(false), 4000);
      })
      .catch((error) => alert('Error sending message: ' + error));
  };

  return (
    <div className="w-full pb-12 pt-8 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <p className="text-xs font-mono text-primary tracking-[0.2em] uppercase mb-3">Contact</p>
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-textPrimary leading-tight">
          Get In Touch
        </h1>
        <p className="text-textMuted font-body mt-3 max-w-xl">
          Have a project in mind or want to collaborate? I'm always open to interesting conversations.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16">

        {/* Left — Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          {contactLinks.map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="flex items-center gap-5 group">
              <div className="w-12 h-12 flex items-center justify-center bg-cardBg border border-borderColor rounded-xl shrink-0 group-hover:border-primary/50 transition-colors shadow-sm">
                <Icon size={20} className="text-textMuted group-hover:text-primary transition-colors" />
              </div>
              <div>
                <p className="text-[11px] font-mono text-textMuted uppercase tracking-widest mb-0.5">{label}</p>
                {href ? (
                  <a href={href} target="_blank" rel="noopener noreferrer"
                    className="font-body text-sm text-textPrimary hover:text-primary transition-colors"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="font-body text-sm text-textPrimary">{value}</p>
                )}
              </div>
            </div>
          ))}

          {/* Availability */}
          <div className="mt-10 pt-8 border-t border-borderColor/30">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-mono text-green-400 tracking-widest">Available for hire</span>
            </div>
            <p className="text-sm text-textMuted font-body leading-relaxed">
              Currently open to full-time <span className="text-textPrimary">AI Engineer, ML Engineer, AIML Engineer,</span> and <span className="text-textPrimary">Python Developer</span> roles.
              Remote-friendly · Open to relocate.
            </p>
          </div>
        </motion.div>

        {/* Right — Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-cardBg border border-borderColor rounded-2xl p-6 sm:p-8 shadow-lg">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <CheckCircle size={48} className="text-green-400 mb-4" />
                <h3 className="text-xl font-heading font-semibold text-textPrimary mb-2">Message Sent!</h3>
                <p className="text-textMuted font-body text-sm">I'll get back to you shortly.</p>
              </motion.div>
            ) : (
              <form name="contact" data-netlify="true" onSubmit={handleSubmit} className="space-y-5">
                <input type="hidden" name="form-name" value="contact" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono text-textMuted tracking-widest uppercase">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full bg-darkBg border border-borderColor focus:border-primary rounded-xl px-4 py-3 text-textPrimary text-sm font-body outline-none transition-colors placeholder-textMuted/50"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono text-textMuted tracking-widest uppercase">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full bg-darkBg border border-borderColor focus:border-primary rounded-xl px-4 py-3 text-textPrimary text-sm font-body outline-none transition-colors placeholder-textMuted/50"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono text-textMuted tracking-widest uppercase">Message</label>
                  <textarea
                    rows="6"
                    required
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Hello Sainath, I'd love to discuss..."
                    className="w-full bg-darkBg border border-borderColor focus:border-primary rounded-xl px-4 py-3 text-textPrimary text-sm font-body outline-none transition-colors resize-none placeholder-textMuted/50"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-primary hover:bg-primary/90 text-textPrimary rounded-xl font-medium text-sm transition-all shadow-lg shadow-primary/20 active:scale-[0.98]"
                >
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;
