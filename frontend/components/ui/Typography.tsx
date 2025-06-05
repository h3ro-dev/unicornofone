import React from 'react';

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const Heading: React.FC<HeadingProps> = ({
  children,
  className = '',
  as: Component = 'h2',
}) => {
  const styles = {
    h1: 'text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight',
    h2: 'text-3xl md:text-4xl font-bold',
    h3: 'text-2xl md:text-3xl font-semibold',
    h4: 'text-xl md:text-2xl font-semibold',
    h5: 'text-lg md:text-xl font-semibold',
    h6: 'text-base md:text-lg font-semibold',
  };
  
  return (
    <Component className={`${styles[Component]} ${className}`}>
      {children}
    </Component>
  );
};

interface TextProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'body' | 'lead' | 'small' | 'muted';
  as?: 'p' | 'span' | 'div';
}

export const Text: React.FC<TextProps> = ({
  children,
  className = '',
  variant = 'body',
  as: Component = 'p',
}) => {
  const variants = {
    body: 'text-base text-gray-900',
    lead: 'text-lg md:text-xl text-gray-900 leading-relaxed',
    small: 'text-sm text-gray-900',
    muted: 'text-base text-gray-600',
  };
  
  return (
    <Component className={`${variants[variant]} ${className}`}>
      {children}
    </Component>
  );
};