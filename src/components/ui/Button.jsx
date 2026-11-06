import React from 'react';

export const Button = React.forwardRef(function Button(
  {
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    as: Component = 'button',
    href,
    target,
    rel,
    disabled = false,
    ...props
  },
  ref
) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-btn transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none min-h-[44px] min-w-[44px]';

  const variants = {
    primary:
      'bg-[#6366f1] text-white hover:bg-[#4f46e5] shadow-sm hover:shadow active:scale-[0.98]',
    secondary:
      'bg-transparent text-text border border-line hover:border-accent hover:text-accent hover:bg-muted/50 active:scale-[0.98]',
    outline:
      'bg-transparent text-accent border border-accent/40 hover:border-accent hover:bg-accent-soft active:scale-[0.98]',
    ghost:
      'bg-transparent text-text hover:bg-muted hover:text-accent active:scale-[0.98]',
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5 font-semibold',
  };

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('//');
    return (
      <a
        ref={ref}
        href={href}
        className={combinedClasses}
        target={target || (isExternal ? '_blank' : undefined)}
        rel={rel || (isExternal ? 'noopener noreferrer' : undefined)}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Component
      ref={ref}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {children}
    </Component>
  );
});
