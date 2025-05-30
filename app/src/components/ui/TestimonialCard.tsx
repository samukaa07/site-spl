import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  company: string;
  image: string;
  testimonial: string;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, company, image, testimonial, index }) => {
  const delay = index * 100;

  return (
    <div 
      className="bg-white p-8 rounded-lg shadow-md relative animate-fadeIn"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute top-6 right-6 text-blue-100">
        <Quote size={48} />
      </div>
      
      <div className="mb-6 relative z-10">
        <p className="text-gray-700 italic">{testimonial}</p>
      </div>
      
      <div className="flex items-center">
        <img 
          src={image} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-bold text-gray-900">{name}</h4>
          <p className="text-gray-600 text-sm">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;