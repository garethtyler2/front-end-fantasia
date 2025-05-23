
'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-blue">
            AI-Rehab
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          <Link to="/prehab" className="text-sm font-medium hover:text-white transition-colors">
            Prehab
          </Link>
          <Link to="/#features" className="text-sm font-medium hover:text-white transition-colors">
            Features
          </Link>
          <Link to="/#testimonials" className="text-sm font-medium hover:text-white transition-colors">
            Testimonials
          </Link>
          <Link to="/#metrics" className="text-sm font-medium hover:text-white transition-colors">
            Metrics
          </Link>
          <Link to="/dashboard">
            <button className="ml-2 bg-gradient-to-r from-brand-purple to-brand-blue text-white hover:opacity-90 px-4 py-2 rounded">
              Dashboard
            </button>
          </Link>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-white/10 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <Link
              to="/prehab"
              className="text-sm font-medium hover:text-white transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Prehab
            </Link>
            <Link
              to="/#features"
              className="text-sm font-medium hover:text-white transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              to="/#testimonials"
              className="text-sm font-medium hover:text-white transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              to="/#metrics"
              className="text-sm font-medium hover:text-white transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Metrics
            </Link>
            <Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>
              <button className="bg-gradient-to-r from-brand-purple to-brand-blue text-white hover:opacity-90 w-full px-4 py-2 rounded">
                Dashboard
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
