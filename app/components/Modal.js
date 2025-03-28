"use client";

import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useModalBehavior } from "@/app/hooks/useModalBehavior";

const slideUpAnimation = {
  initial: { y: 50, opacity: 0, scale: 0.95 },
  animate: { y: 0, opacity: 1, scale: 1 },
  exit: { y: 30, opacity: 0, scale: 0.95 },
  transition: { type: "spring", duration: 0.3 },
};

export default function Modal({ isOpen, onClose, children }) {
  const backdropRef = useRef(null);
  const { handleBackdropClick } = useModalBehavior(
    isOpen,
    onClose,
    backdropRef
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={backdropRef}
          onClick={handleBackdropClick}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3"
          role="dialog"
          aria-modal="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-lg"
            {...slideUpAnimation}
          >
            <button
              className="absolute top-2 right-2 text-2xl font-extrabold px-3 py-1 text-primary hover:text-white"
              onClick={onClose}
              aria-label="Chiudi modale"
            >
              ×
            </button>
            <>{children}</>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
