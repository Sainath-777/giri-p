import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-borderColor/20 bg-darkBg py-10 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div>
          <Link to="/" className="text-xl font-heading font-bold text-primary">SR</Link>
          <p className="text-xs font-mono text-textMuted mt-1">AI/ML Developer — Hyderabad, India</p>
        </div>

        {/* Nav links */}
        <div className="flex items-center gap-6 text-xs font-mono text-textMuted">
          {[
            { name: 'Home', path: '/' },
            { name: 'Projects', path: '/projects' },
            { name: 'Journey', path: '/journey' },
            { name: 'Contact', path: '/contact' },
          ].map(l => (
            <Link key={l.name} to={l.path} className="hover:text-primary transition-colors">{l.name}</Link>
          ))}
        </div>

        {/* Social */}
        <div className="flex items-center gap-4">
          <a href="https://github.com/Sainath-777" target="_blank" rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-cardBg border border-borderColor flex items-center justify-center text-textMuted hover:text-primary hover:border-primary/50 transition-colors"
          >
            <FaGithub size={18} />
          </a>
          <a href="https://www.linkedin.com/in/sainath-reddy-g-3263b324b/" target="_blank" rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-cardBg border border-borderColor flex items-center justify-center text-textMuted hover:text-primary hover:border-primary/50 transition-colors" aria-label="LinkedIn">
            <FaLinkedin size={18} />
          </a>
          <a href="mailto:sainathreddy2126@gmail.com"
            className="w-10 h-10 rounded-full bg-cardBg border border-borderColor flex items-center justify-center text-textMuted hover:text-primary hover:border-primary/50 transition-colors" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-borderColor/10 text-center">
        <p className="text-sm font-body text-textMuted">
          &copy; {new Date().getFullYear()} Sainath Reddy G. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
