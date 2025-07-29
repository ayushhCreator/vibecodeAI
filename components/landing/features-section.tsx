"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import {
  CodeBracketIcon,
  EyeIcon,
  PuzzlePieceIcon,
  PaintBrushIcon,
  WrenchScrewdriverIcon,
  DocumentTextIcon,
  SparklesIcon,
  BoltIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    icon: CodeBracketIcon,
    title: 'AI-Powered Code Generation',
    description: 'Transform natural language into production-ready components with intelligent context awareness and best practices.',
    badge: 'Core Feature',
    color: 'purple',
    stats: '10x Faster',
  },
  {
    icon: EyeIcon,
    title: 'Real-time Preview',
    description: 'See your components come to life instantly with hot reload and interactive testing capabilities.',
    badge: 'Popular',
    color: 'blue',
    stats: 'Instant',
  },
  {
    icon: PaintBrushIcon,
    title: 'Design System Integration',
    description: 'Seamlessly works with Tailwind CSS, Material-UI, Chakra UI, and your custom design tokens.',
    badge: 'New',
    color: 'green',
    stats: '50+ Libraries',
  },
  {
    icon: BoltIcon,
    title: 'Smart Optimization',
    description: 'Automatic code optimization, performance analysis, and accessibility improvements built-in.',
    badge: 'Pro',
    color: 'orange',
    stats: '99% Score',
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Intelligent Refactoring',
    description: 'AI-powered code improvements with automated refactoring and best practice suggestions.',
    badge: 'Advanced',
    color: 'pink',
    stats: 'Auto-fix',
  },
  {
    icon: DocumentTextIcon,
    title: 'Auto Documentation',
    description: 'Generate comprehensive docs, examples, and usage guidelines automatically for your components.',
    badge: 'Time-saver',
    color: 'indigo',
    stats: 'Zero Config',
  },
];

export const FeaturesSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const getColorClasses = (color: string) => {
    const colors = {
      purple: {
        badge: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
        icon: 'bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400',
        gradient: 'from-purple-500/10 via-purple-500/5 to-transparent',
        border: 'hover:border-purple-500/30',
      },
      blue: {
        badge: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
        icon: 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400',
        gradient: 'from-blue-500/10 via-blue-500/5 to-transparent',
        border: 'hover:border-blue-500/30',
      },
      green: {
        badge: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
        icon: 'bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400',
        gradient: 'from-green-500/10 via-green-500/5 to-transparent',
        border: 'hover:border-green-500/30',
      },
      orange: {
        badge: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
        icon: 'bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400',
        gradient: 'from-orange-500/10 via-orange-500/5 to-transparent',
        border: 'hover:border-orange-500/30',
      },
      pink: {
        badge: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300',
        icon: 'bg-pink-50 text-pink-600 dark:bg-pink-900/20 dark:text-pink-400',
        gradient: 'from-pink-500/10 via-pink-500/5 to-transparent',
        border: 'hover:border-pink-500/30',
      },
      indigo: {
        badge: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300',
        icon: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400',
        gradient: 'from-indigo-500/10 via-indigo-500/5 to-transparent',
        border: 'hover:border-indigo-500/30',
      },
    };
    return colors[color as keyof typeof colors] || colors.purple;
  };

  return (
    <section id="features" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6"
          >
            <SparklesIcon className="w-4 h-4" />
            Features
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Everything you need to build{' '}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              stunning UIs
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Powerful AI-driven tools and intelligent automation to transform your frontend development workflow.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colors = getColorClasses(feature.color);
            
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                className="group"
              >
                <Card className={`relative h-full p-4 sm:p-6 lg:p-8 bg-card/50 backdrop-blur-sm border-border/50 ${colors.border} transition-all duration-500 overflow-hidden`}>
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-lg blur-xl" />
                  </div>
                  
                  <CardContent className="relative z-10 p-0 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4 sm:mb-6">
                      <motion.div
                        whileHover={{ rotate: 5, scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className={`w-12 h-12 rounded-xl ${colors.icon} flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}
                      >
                        <Icon className="w-6 h-6" />
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${colors.badge}`}
                      >
                        {feature.badge}
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">{feature.description}</p>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        Performance
                      </div>
                      <div className="text-sm font-semibold text-primary">
                        {feature.stats}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12 lg:mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <button className="group relative px-8 py-4 bg-gradient-to-r from-primary to-purple-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/25">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 flex items-center gap-2">
                <SparklesIcon className="w-5 h-5" />
                Explore All Features
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};