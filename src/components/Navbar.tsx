
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-blue">
              AI-Rehab
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          <Link to="/prehab_search" className="text-sm font-medium hover:text-white transition-colors">
            Prehab
          </Link>
          <Link to="/injury-diagnosis" className="text-sm font-medium hover:text-white transition-colors">
            Injury Diagnosis
          </Link>
          <Link to="/direct_rehab" className="text-sm font-medium hover:text-white transition-colors">
            Injury Rehab
          </Link>
          <Link to="/personal_training" className="text-sm font-medium hover:text-white transition-colors">
            Personal Training
          </Link>
          <Link to="/dashboard" className="text-sm font-medium hover:text-white transition-colors">
            Dashboard
          </Link>
          <Link to="/insights" className="text-sm font-medium hover:text-white transition-colors">
            Insights
          </Link>
          
          {/* Auth buttons - these would typically use a context or state to determine if user is logged in */}
          <Button 
            asChild
            variant="ghost" 
            className="text-sm font-medium hover:text-white transition-colors"
          >
            <Link to="/login">Login</Link>
          </Button>
          <Button className="ml-2 bg-gradient-to-r from-brand-purple to-brand-blue text-white hover:opacity-90">
            <Link to="/signup" className="text-white">Sign Up</Link>
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
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <Link
              to="/prehab_search"
              className="text-sm font-medium hover:text-white transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Prehab
            </Link>
            <Link
              to="/injury-diagnosis"
              className="text-sm font-medium hover:text-white transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Injury Diagnosis
            </Link>
            <Link
              to="/direct_rehab"
              className="text-sm font-medium hover:text-white transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Injury Rehab
            </Link>
            <Link
              to="/personal_training"
              className="text-sm font-medium hover:text-white transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Personal Training
            </Link>
            <Link
              to="/dashboard"
              className="text-sm font-medium hover:text-white transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              to="/insights"
              className="text-sm font-medium hover:text-white transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Insights
            </Link>
            
            {/* Auth links for mobile */}
            <div className="flex flex-col pt-2 border-t border-white/10 space-y-2">
              <Button 
                asChild
                variant="ghost" 
                className="justify-start px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Link to="/login">Login</Link>
              </Button>
              <Button 
                className="bg-gradient-to-r from-brand-purple to-brand-blue text-white hover:opacity-90 w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                <Link to="/signup" className="text-white">Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
