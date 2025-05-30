import React from 'react';
import { Globe, Code, Smartphone, Database, BarChart, Clock } from 'lucide-react';
import ServiceCard from './ui/ServiceCard';
import SectionTitle from './ui/SectionTitle';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Globe className="h-10 w-10 text-blue-600" />,
      title: 'Web Design',
      description: 'Criamos layouts modernos e responsivos que representam a identidade da sua marca e oferecem uma experiência incrível aos usuários.'
    },
    {
      icon: <Code className="h-10 w-10 text-blue-600" />,
      title: 'Desenvolvimento Frontend',
      description: 'Codificação de alta qualidade utilizando as mais recentes tecnologias como React, Vue.js e Angular para interfaces interativas.'
    },
    {
      icon: <Database className="h-10 w-10 text-blue-600" />,
      title: 'Desenvolvimento Backend',
      description: 'Construção de APIs robustas e sistemas de gerenciamento de conteúdo personalizados para atender às necessidades específicas do seu negócio.'
    },
    {
      icon: <Smartphone className="h-10 w-10 text-blue-600" />,
      title: 'Design Responsivo',
      description: 'Garantimos que seu site funcione perfeitamente em todos os dispositivos, desde smartphones até desktops.'
    },
    {
      icon: <BarChart className="h-10 w-10 text-blue-600" />,
      title: 'SEO & Performance',
      description: 'Otimização do seu site para mecanismos de busca e melhoria de performance para carregamentos rápidos e eficientes.'
    },
    {
      icon: <Clock className="h-10 w-10 text-blue-600" />,
      title: 'Manutenção & Suporte',
      description: 'Serviços contínuos para manter seu site seguro, atualizado e funcionando sem problemas.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Nossos Serviços"
          subtitle="Soluções completas em desenvolvimento web para impulsionar seu negócio"
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;