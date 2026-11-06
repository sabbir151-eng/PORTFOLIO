import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

export function Toast({ message, type = 'success', onClose, duration = 4000 }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  const isSuccess = type === 'success';

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 max-w-sm flex items-center gap-3 p-4 bg-bg-elevated border border-border shadow-xl rounded-card text-text animate-slide-up"
    >
      {isSuccess ? (
        <CheckCircle2 className="w-5 h-5 text-success shrink-0" aria-hidden="true" />
      ) : (
        <AlertCircle className="w-5 h-5 text-danger shrink-0" aria-hidden="true" />
      )}
      <p className="text-sm font-medium leading-snug">{message}</p>
      <button
        type="button"
        onClick={onClose}
        className="p-1 text-text-muted hover:text-text rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ml-auto"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}

