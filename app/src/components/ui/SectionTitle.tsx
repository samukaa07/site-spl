import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, light = false }) => {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      <p className={`text-lg ${light ? 'text-blue-100' : 'text-gray-600'}`}>
        {subtitle}
      </p>
      <div className={`w-24 h-1 mx-auto mt-6 ${light ? 'bg-blue-400' : 'bg-blue-800'}`}></div>
    </div>
  );
};

export default SectionTitle;