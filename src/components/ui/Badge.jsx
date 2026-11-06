import React from 'react';

export function Badge({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  icon: Icon,
  ...props
}) {
  const baseStyles = 'inline-flex items-center font-medium rounded-full border transition-colors';

  const variants = {
    default: 'bg-muted text-text border-line',
    accent: 'bg-accent-soft text-accent border-accent/20',
    success: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    outline: 'bg-transparent text-sub border-line',
  };

  const sizes = {
    sm: 'text-xs px-2.5 py-0.5 gap-1',
    md: 'text-xs px-3 py-1 gap-1.5',
    lg: 'text-sm px-3.5 py-1.5 gap-2',
  };

  return (
    <span
      className={`${baseStyles} ${variants[variant] || variants.default} ${sizes[size] || sizes.md} ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />}
      {children}
    </span>
  );
}

export function Tag({ children, className = '' }) {
  return (
    <span className={`inline-flex items-center text-xs font-medium px-3 py-1 rounded-full bg-muted text-sub border border-line ${className}`}>
      {children}
    </span>
  );
}

export function Pill({ children, className = '' }) {
  return (
    <span className={`inline-flex items-center text-xs font-mono px-2.5 py-0.5 rounded-full bg-accent-soft text-accent border border-accent/20 ${className}`}>
      {children}
    </span>
  );
}
