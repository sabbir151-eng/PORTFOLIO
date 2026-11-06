import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line mt-20 py-10 bg-surface">
      <div className="max-w-container mx-auto px-5 text-center text-sm text-sub">
        <p>© {currentYear} SK ABDUL SABBIR · Hyderabad, India</p>
      </div>
    </footer>
  );
}
