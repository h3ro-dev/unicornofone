import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'primary' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  background = 'white',
  size = 'md',
}) => {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-primary text-white',
    gradient: 'bg-gradient-to-b from-gray-50 to-white',
  };
  
  const sizes = {
    sm: 'py-12 lg:py-16',
    md: 'py-16 lg:py-24',
    lg: 'py-20 lg:py-32',
  };
  
  return (
    <section className={`${backgrounds[background]} ${sizes[size]} ${className}`}>
      {children}
    </section>
  );
};

export default Section;