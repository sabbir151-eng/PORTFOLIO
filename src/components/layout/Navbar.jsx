import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useScrollSpy } from '../../hooks/useScrollSpy';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'academics', label: 'Academics' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(navLinks.map((l) => l.id), 120);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-bg/85 backdrop-blur-md border-b border-line shadow-sm py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-container mx-auto px-5 flex items-center justify-between">
        {/* Logo: SK ABDUL SABBIR (second word in accent color) */}
        <a
          href="#hero"
          className="font-bold text-base sm:text-lg tracking-tight text-text hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md px-1"
          aria-label="SK ABDUL SABBIR Home"
        >
          SK <span className="text-accent font-extrabold">ABDUL</span> SABBIR
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? 'text-accent bg-accent-soft font-semibold'
                    : 'text-sub hover:text-text hover:bg-muted'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-text hover:text-accent rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[66px] bg-bg/95 backdrop-blur-lg z-30 md:hidden flex flex-col px-6 py-8 justify-between border-t border-line"
          role="dialog"
          aria-modal="true"
        >
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={closeMenu}
                  className={`text-lg font-medium py-3 px-4 rounded-card transition-colors ${
                    isActive
                      ? 'text-accent bg-accent-soft font-semibold'
                      : 'text-sub hover:text-text hover:bg-muted'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-line text-xs text-sub text-center">
            SK ABDUL SABBIR · Hyderabad, India
          </div>
        </div>
      )}
    </header>
  );
}
