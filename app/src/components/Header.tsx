import React, { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';
import { Link } from './ui/Link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Code className="h-8 w-8 text-blue-800 mr-2" />
          <span className="font-bold text-xl md:text-2xl text-blue-900">SPL Informática</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#home">Home</Link>
          <Link href="#services">Serviços</Link>
          <Link href="#portfolio">Portfólio</Link>
          <Link href="#about">Sobre</Link>
          <Link href="#contact" className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Contato
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full py-4 animate-fadeIn">
          <nav className="flex flex-col space-y-4 px-4">
            <Link href="#home" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="#services" onClick={() => setIsMenuOpen(false)}>Serviços</Link>
            <Link href="#portfolio" onClick={() => setIsMenuOpen(false)}>Portfólio</Link>
            <Link href="#about" onClick={() => setIsMenuOpen(false)}>Sobre</Link>
            <Link 
              href="#contact" 
              className="bg-blue-800 text-white px-4 py-2 rounded-md inline-block text-center hover:bg-blue-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;