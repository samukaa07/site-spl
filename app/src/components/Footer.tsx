import React from 'react';
import { Code, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Code className="h-8 w-8 text-blue-400 mr-2" />
              <span className="font-bold text-xl text-white">SPL Informática</span>
            </div>
            <p className="text-gray-400 mb-6">
              Transformando ideias em experiências digitais impactantes desde 2015.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/samuel.lima.695836" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors" 
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                  href="https://www.instagram.com/spl_informatica?igsh=MWhtdDE0aThmbGF5eQ%3D%3D&utm_source=qr" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors" 
                  aria-label="Instagram"
                >
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/samuel-pereira-lima-a84bb871/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors" 
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
                <a 
    href="https://wa.me/+5511961568904" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-gray-400 hover:text-white transition-colors" 
    aria-label="WhatsApp"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 448 512">
      <path d="M380.9 97.1C339-17.8 202.6-31.6 109.1 61.9 49.5 121.5 34.5 209 63.1 283.3L0 480l198.7-62.7c70.7 25.9 151.8 6.3 204.5-46.3 88.2-88.1 66.3-235.3-22.3-273.9zm-46.3 227c-6.6 18.6-38.9 36.1-53.3 38.5-13.6 2.2-30.6 3.2-49.1-3.1-11.3-3.9-25.2-8.2-43.5-16.3-76.2-33.2-126.1-114.4-130-119.6-3.8-5.3-31-41.2-31-78 0-36.7 18.5-54.5 25.2-61.9 6.6-7.3 14.5-9.1 19.3-9.1s9.6 0 13.7.2c4.4.2 10.3-.2 15.5 11.9 5.8 13.8 19.8 47.7 21.5 51.2 1.7 3.5 2.9 7.7.6 12.1-2.2 4.3-3.3 6.9-6.5 10.8-3.2 3.8-6.9 8.5-9.9 11.4-3.2 3.2-6.5 6.6-2.8 13 3.8 6.6 17.1 28.3 36.7 45.8 25.3 22.5 45.8 29.5 53.3 32.7 5.5 2.3 8.7 1.9 11.9-1.1 3.1-2.9 13.8-16.1 17.5-21.6 3.8-5.5 7.5-4.6 12.7-2.7 5.2 2 33 15.6 38.6 18.5 5.5 2.9 9.1 4.3 10.4 6.7 1.3 2.5 1.3 13.9-5.2 32.4z" />
    </svg>
  </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Serviços</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Web Design</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Desenvolvimento Frontend</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Desenvolvimento Backend</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Design Responsivo</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">SEO & Performance</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Portfólio</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Inscreva-se para receber novidades e dicas sobre desenvolvimento web.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Seu email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-700 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              <p className="text-gray-500 text-sm">CNPJ: 51.656.679/0001-02</p>
              <p className="text-gray-500 text-sm"></p>
              &copy; {currentYear} Samuel Pereira Lima - SPL Informática. Este site é protegido por direitos autorais. Cópia total ou parcial é proibida sem autorização.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Termos de Uso</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Política de Privacidade</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;