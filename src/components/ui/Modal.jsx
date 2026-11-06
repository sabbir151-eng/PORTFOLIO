import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

export function Modal({ isOpen, onClose, title, children, triggerRef }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
      if (triggerRef && triggerRef.current) {
        triggerRef.current.focus();
      }
    }
  }, [isOpen, triggerRef]);

  // Handle native cancel (Esc key)
  const handleCancel = (e) => {
    e.preventDefault();
    onClose();
  };

  // Handle click outside dialog backdrop
  const handleClick = (e) => {
    if (e.target === dialogRef.current) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <dialog
      ref={dialogRef}
      onCancel={handleCancel}
      onClick={handleClick}
      className="fixed inset-0 z-50 p-4 md:p-6 bg-transparent backdrop:bg-black/75 backdrop:backdrop-blur-sm max-w-4xl w-full mx-auto my-auto rounded-card border border-line shadow-2xl focus:outline-none overflow-hidden"
      aria-labelledby="modal-title"
    >
      <div className="bg-surface border border-line rounded-card overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-line">
          <h3 id="modal-title" className="text-lg font-bold text-text truncate pr-4">
            {title}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-sub hover:text-text hover:bg-muted rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          {children}
        </div>
      </div>
    </dialog>
  );
}

