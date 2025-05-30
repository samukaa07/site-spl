import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Link: React.FC<LinkProps> = ({ href, children, className = '', onClick }) => {
  return (
    <a
      href={href}
      className={`font-medium hover:text-blue-800 transition-colors ${className}`}
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default Link;

export { Link }