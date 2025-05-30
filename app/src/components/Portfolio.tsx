import React, { useState } from 'react';
import SectionTitle from './ui/SectionTitle';
import ProjectCard from './ui/ProjectCard';

type Category = 'all' | 'ecommerce' | 'corporate' | 'landing';

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const projects = [
    {
      id: 1,
      title: 'E-commerce de Moda',
      category: 'ecommerce',
      image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Loja virtual completa com catálogo de produtos, carrinho de compras e sistema de pagamento integrado.'
    },
    {
      id: 2,
      title: 'Site Corporativo para Escritório de Advocacia',
      category: 'corporate',
      image: 'https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Presença digital profissional com áreas de atuação, perfil dos advogados e sistema de agendamento.'
    },
    {
      id: 3,
      title: 'Landing Page para Aplicativo',
      category: 'landing',
      image: 'https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Página de conversão com design moderno destacando os recursos e benefícios do aplicativo.'
    },
    {
      id: 4,
      title: 'Portal de Notícias',
      category: 'corporate',
      image: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Sistema completo de gerenciamento de conteúdo com categorias, busca e área de membros.'
    },
    {
      id: 5,
      title: 'Plataforma de Cursos Online',
      category: 'ecommerce',
      image: 'https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Sistema educacional com área de alunos, vídeo-aulas e certificados automáticos.'
    },
    {
      id: 6,
      title: 'Landing Page para Evento',
      category: 'landing',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Página promocional com contagem regressiva, informações do evento e formulário de inscrição.'
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Nosso Portfólio"
          subtitle="Conheça alguns dos projetos que desenvolvemos para nossos clientes"
        />

        <div className="flex justify-center mt-8 mb-12">
          <div className="inline-flex flex-wrap justify-center gap-2 p-1 bg-gray-100 rounded-lg">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeCategory === 'all' ? 'bg-blue-800 text-white' : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setActiveCategory('ecommerce')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeCategory === 'ecommerce' ? 'bg-blue-800 text-white' : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              E-commerce
            </button>
            <button
              onClick={() => setActiveCategory('corporate')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeCategory === 'corporate' ? 'bg-blue-800 text-white' : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              Corporativos
            </button>
            <button
              onClick={() => setActiveCategory('landing')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeCategory === 'landing' ? 'bg-blue-800 text-white' : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              Landing Pages
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;