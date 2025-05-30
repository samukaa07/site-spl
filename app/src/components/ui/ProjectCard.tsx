import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const delay = index * 100;

  return (
    <div 
      className="group relative overflow-hidden rounded-lg shadow-md animate-fadeIn"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={image} 
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      
      <div className={`absolute inset-0 bg-gradient-to-t from-blue-900/90 to-blue-900/40 p-6 flex flex-col justify-end transform transition-all duration-300 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-blue-100 mb-4">{description}</p>
        
      </div>
    </div>
  );
};

export default ProjectCard;