"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUpIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/button';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls down 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Button
            onClick={scrollToTop}
            size="lg"
            className="w-12 h-12 rounded-full bg-primary/90 hover:bg-primary backdrop-blur-sm border border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 group"
            aria-label="Scroll to top"
          >
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronUpIcon className="w-5 h-5 text-primary-foreground group-hover:text-white transition-colors" />
            </motion.div>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
