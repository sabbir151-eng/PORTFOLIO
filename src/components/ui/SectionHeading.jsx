import React from 'react';

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}) {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end',
  };

  return (
    <div className={`flex flex-col mb-12 md:mb-16 max-w-2xl ${alignClasses[align] || alignClasses.left} ${className}`}>
      {eyebrow && (
        <span className="text-xs md:text-sm font-mono uppercase tracking-[0.08em] text-accent font-semibold mb-2 inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      {title && (
        <h2 className="text-2xl md:text-4xl font-bold font-display text-text tracking-tight">
          {title}
        </h2>
      )}
      {description && (
        <p className="mt-3 text-text-muted text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
      <div className="w-12 h-1 bg-accent/40 rounded-full mt-4" aria-hidden="true" />
    </div>
  );
}

