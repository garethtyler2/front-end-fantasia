
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        <div className="flex items-center">
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-blue">
            Quantum
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-sm font-medium hover:text-white transition-colors">
            Features
          </a>
          <a href="#testimonials" className="text-sm font-medium hover:text-white transition-colors">
            Testimonials
          </a>
          <a href="#metrics" className="text-sm font-medium hover:text-white transition-colors">
            Metrics
          </a>
          <Button className="ml-4 bg-gradient-to-r from-brand-purple to-brand-blue text-white hover:opacity-90">
            Get Started
          </Button>
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
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#features"
              className="text-sm font-medium hover:text-white transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium hover:text-white transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#metrics"
              className="text-sm font-medium hover:text-white transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Metrics
            </a>
            <Button 
              className="bg-gradient-to-r from-brand-purple to-brand-blue text-white hover:opacity-90 w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
