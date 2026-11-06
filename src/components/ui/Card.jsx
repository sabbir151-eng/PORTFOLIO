import React from 'react';

export function Card({
  children,
  className = '',
  hoverEffect = true,
  as: Component = 'div',
  ...props
}) {
  return (
    <Component
      className={`bg-surface border border-line rounded-card transition-all duration-300 ${
        hoverEffect
          ? 'hover:-translate-y-1 hover:border-accent hover:shadow-md'
          : ''
      } ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
