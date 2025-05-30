import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 animate-fadeIn">
              Transformando ideias em experiências digitais
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-lg animate-fadeIn animation-delay-200">
              Desenvolvimento web profissional para empresas que buscam crescer no mundo digital.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fadeIn animation-delay-400">
              <a
                href="#contact"
                className="bg-white text-blue-800 font-medium py-3 px-6 rounded-md hover:bg-blue-50 transition-colors flex items-center justify-center"
              >
                Solicitar orçamento
                <ChevronRight size={20} className="ml-1" />
              </a>
              <a
                href="#portfolio"
                className="border border-white text-white font-medium py-3 px-6 rounded-md hover:bg-white/10 transition-colors flex items-center justify-center"
              >
                Ver projetos
              </a>
            </div>
          </div>
          <div className="md:w-1/2 animate-fadeIn animation-delay-600">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-30"></div>
              <div className="relative bg-white p-2 rounded-lg shadow-xl">
                <img
  src="https://images.pexels.com/photos/245032/pexels-photo-245032.jpeg"
                  alt="Web development workspace"
                  className="w-full h-auto rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;