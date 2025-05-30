import React from 'react';
import SectionTitle from './ui/SectionTitle';
import TestimonialCard from './ui/TestimonialCard';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Ana Silva',
      company: 'Moda Express',
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      testimonial: 'A SPL Informática transformou nossa presença online. Nosso e-commerce não só ficou bonito, como também é fácil de usar e converteu mais vendas desde o primeiro mês.',
    },
    {
      name: 'Carlos Mendes',
      company: 'Advocacia Mendes',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      testimonial: 'Excelente trabalho no desenvolvimento do nosso site corporativo. Profissionalismo, pontualidade e um design que reflete perfeitamente nossa identidade.',
    },
    {
      name: 'Marina Costa',
      company: 'EduTech Cursos',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      testimonial: 'Nossa plataforma de cursos online superou todas as expectativas. O sistema é intuitivo para os alunos e fácil de gerenciar. Recomendo sem hesitar!',
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Depoimentos"
          subtitle="O que nossos clientes dizem sobre nosso trabalho"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              company={testimonial.company}
              image={testimonial.image}
              testimonial={testimonial.testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;