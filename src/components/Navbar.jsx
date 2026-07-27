import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Journey', path: '/journey' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'dark:bg-darkBg/80 bg-lightBg/80 backdrop-blur-md border-b border-borderColor/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="text-2xl font-heading font-bold text-primary tracking-tight">
            MS
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `relative font-body text-sm tracking-wide transition-colors duration-300 py-1 ${
                    isActive ? 'text-primary' : 'text-textMuted hover:text-textPrimary'
                  } group`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-primary transition-transform duration-300 origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`} />
                  </>
                )}
              </NavLink>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-textMuted hover:text-primary transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-3">
            <button onClick={toggleTheme} className="p-2 text-textMuted">
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 text-textMuted">
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden dark:bg-cardBg bg-lightCard border-b border-borderColor absolute w-full left-0 shadow-xl">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map(link => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `block font-body text-base px-4 py-2.5 rounded-lg transition-colors ${
                    isActive ? 'text-primary bg-primary/10' : 'text-textMuted hover:text-textPrimary hover:bg-cardHover'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
