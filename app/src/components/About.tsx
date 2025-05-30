import React from 'react';
import { Award, Users, ThumbsUp, Clock } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Sobre Nós"
          subtitle="Conheça a SPL Informática e nossa história"
          light
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeIn">
            <h3 className="text-2xl font-bold mb-4">Samuel Pereira Lima</h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Com mais de 10 anos de experiência em desenvolvimento web, fundei a SPL Informática com a missão de 
              fornecer soluções digitais de alta qualidade para empresas de todos os tamanhos.
            </p>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Nossa equipe é formada por profissionais apaixonados por tecnologia e design, 
              sempre atualizados com as últimas tendências e melhores práticas do mercado.
            </p>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Acreditamos que cada projeto é único e merece uma abordagem personalizada. Por isso, trabalhamos em estreita 
              colaboração com nossos clientes para entender suas necessidades e entregar soluções que superem suas expectativas.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center">
                <Award className="h-8 w-8 text-blue-300 mr-3" />
                <div>
                  <h4 className="text-xl font-bold">Qualidade</h4>
                  <p className="text-blue-200">Excelência em cada detalhe</p>
                </div>
              </div>
              <div className="flex items-center">
                <Users className="h-8 w-8 text-blue-300 mr-3" />
                <div>
                  <h4 className="text-xl font-bold">Colaboração</h4>
                  <p className="text-blue-200">Parceria com o cliente</p>
                </div>
              </div>
              <div className="flex items-center">
                <ThumbsUp className="h-8 w-8 text-blue-300 mr-3" />
                <div>
                  <h4 className="text-xl font-bold">Confiança</h4>
                  <p className="text-blue-200">Relações duradouras</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="h-8 w-8 text-blue-300 mr-3" />
                <div>
                  <h4 className="text-xl font-bold">Pontualidade</h4>
                  <p className="text-blue-200">Prazos respeitados</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-fadeIn animation-delay-300">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg blur opacity-30"></div>
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Equipe SPL Informática trabalhando" 
                className="w-full h-auto rounded-lg transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;