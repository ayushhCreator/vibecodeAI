"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { PlayIcon, SparklesIcon, CodeBracketIcon } from '@heroicons/react/24/solid';

const codeExamples = [
  {
    prompt: "Create a modern button component",
    code: `const Button = ({ children, variant = "primary" }) => {
  return (
    <button className={cn(
      "px-6 py-3 rounded-lg font-semibold transition-all",
      "hover:scale-105 active:scale-95 shadow-lg",
      variant === "primary" && "bg-purple-600 text-white hover:bg-purple-700",
      variant === "secondary" && "bg-gray-800 text-gray-100 hover:bg-gray-700"
    )}>
      {children}
    </button>
  );
};`
  },
  {
    prompt: "Build a responsive card layout",
    code: `const Card = ({ title, description, image }) => {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
    >
      <img src={image} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};`
  },
  {
    prompt: "Generate a navigation menu",
    code: `const Navigation = ({ items }) => {
  return (
    <nav className="flex items-center space-x-8">
      {items.map((item, index) => (
        <motion.a
          key={item.name}
          href={item.href}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="text-gray-300 hover:text-white transition-colors"
        >
          {item.name}
        </motion.a>
      ))}
    </nav>
  );
};`
  }
];

export const HeroSection: React.FC = () => {
  const [currentExample, setCurrentExample] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(true);
      setTimeout(() => {
        setCurrentExample((prev) => (prev + 1) % codeExamples.length);
        setIsTyping(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
        <section className="relative min-h-[85vh] sm:min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-14 sm:pt-16">
      {/* Aurora Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary Aurora */}
        <motion.div 
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary/30 via-purple-500/20 to-pink-500/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        
        {/* Secondary Aurora */}
        <motion.div 
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-500/20 via-primary/20 to-purple-500/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />

        {/* Accent Aurora */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-cyan-500/10 via-primary/15 to-pink-500/10 rounded-full blur-2xl"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
        <motion.div 
          className="space-y-6 sm:space-y-8 lg:space-y-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Floating Icons */}
          <div className="relative">
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute -top-8 -left-8 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center backdrop-blur-sm"
            >
              <SparklesIcon className="w-6 h-6 text-primary" />
            </motion.div>
            <motion.div
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -top-4 -right-12 w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm"
            >
              <CodeBracketIcon className="w-5 h-5 text-purple-400" />
            </motion.div>
          </div>

          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Build Stunning UIs,{' '}
            <br className="sm:hidden" />
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-pink-400"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              style={{ backgroundSize: '200% 200%' }}
            >
              Faster than Thought
            </motion.span>
          </motion.h1>

                    <motion.p 
            className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Your AI partner for crafting beautiful, production-ready components with intelligent automation, real-time previews, and seamless integration.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <Button size="lg" className="text-base px-8 py-3 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 w-full sm:w-auto">
                <SparklesIcon className="w-4 h-4 mr-2" />
                Start Building for Free
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <Button 
                variant="outline" 
                size="lg" 
                className="text-base px-8 py-3 border-primary/50 hover:bg-primary/10 w-full sm:w-auto"
                icon={<PlayIcon className="h-4 w-4" />}
              >
                View Demo
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Interactive Code Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 sm:mt-12 lg:mt-16 max-w-5xl mx-auto px-3 sm:px-4 lg:px-0"
        >
          <div className="relative">
            {/* Prompt Bar */}
            <motion.div 
              className="mb-3 sm:mb-4 p-3 sm:p-4 bg-card/30 backdrop-blur-md border border-border/50 rounded-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-primary rounded-full animate-pulse" />
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentExample}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="text-xs sm:text-sm text-muted-foreground leading-relaxed"
                  >
                    Prompt: &ldquo;{codeExamples[currentExample].prompt}&rdquo;
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Code Block */}
            <motion.div 
              className="bg-card/50 backdrop-blur-md border border-border/50 rounded-lg overflow-hidden"
              whileHover={{ 
                boxShadow: "0 20px 25px -5px rgba(139, 92, 246, 0.1), 0 10px 10px -5px rgba(139, 92, 246, 0.04)" 
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-border/50">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-red-500 rounded-full" />
                  <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-yellow-500 rounded-full" />
                  <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-green-500 rounded-full" />
                </div>
                <div className="text-xs text-muted-foreground font-mono hidden sm:block">
                  component.tsx
                </div>
                <motion.div 
                  className="text-xs text-primary font-medium px-2 py-1 bg-primary/10 rounded"
                  animate={{ opacity: isTyping ? 0.5 : 1 }}
                >
                  {isTyping ? 'Generating...' : 'Generated ✨'}
                </motion.div>
              </div>

              {/* Code Content */}
              <div className="p-3 sm:p-4 lg:p-6">
                <AnimatePresence mode="wait">
                  <motion.pre
                    key={currentExample}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-xs sm:text-sm text-muted-foreground overflow-x-auto scrollbar-thin scrollbar-thumb-primary/20"
                  >
                    <code className="language-tsx whitespace-pre-wrap break-words sm:whitespace-pre sm:break-normal">
                      {codeExamples[currentExample].code}
                    </code>
                  </motion.pre>
                </AnimatePresence>
              </div>

              {/* Progress Indicators */}
              <div className="px-4 sm:px-6 pb-3 sm:pb-4">
                <div className="flex gap-2">
                  {codeExamples.map((_, index) => (
                    <motion.div
                      key={index}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        index === currentExample ? 'bg-primary w-8' : 'bg-muted w-2'
                      }`}
                      whileHover={{ scale: 1.2 }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};