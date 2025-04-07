"use client";

import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useModalBehavior } from "@/app/hooks/useModalBehavior";

const softFadeUpAnimation = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
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
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-lg"
            {...softFadeUpAnimation}
          >
            <button
              className="fixed md:absolute top-3 right-3 md:top-2 md:right-2 text-3xl font-extrabold px-3 py-1 text-textColor hover:text-primary"
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
