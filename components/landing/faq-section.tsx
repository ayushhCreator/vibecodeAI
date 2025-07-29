"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Accordion } from '@/components/ui/accordion';

const faqItems = [
  {
    title: 'How does VibeCode AI work?',
    content: 'VibeCode uses advanced AI models trained on millions of UI patterns and best practices. Simply describe what you want to build, and our AI generates production-ready code with proper styling and responsive design.',
  },
  {
    title: 'What frameworks and libraries does it support?',
    content: 'VibeCode currently supports React, Vue, and Angular with TypeScript. We work seamlessly with popular styling solutions like Tailwind CSS, styled-components, and CSS modules.',
  },
  {
    title: 'Can I use VibeCode with my existing codebase?',
    content: 'Absolutely! VibeCode is designed to integrate with your existing projects. You can generate components that follow your design system and coding conventions.',
  },
  {
    title: 'Is there a free trial available?',
    content: 'Yes! We offer a free Hobby plan with 10 AI generations per day. Pro and Team plans come with a 14-day free trial with full access to all features.',
  },
  {
    title: 'How accurate are the AI-generated components?',
    content: 'Our AI generates highly accurate, production-ready code with over 95% accuracy. The generated components follow best practices, are accessible, and include proper TypeScript types.',
  },
];

export const FAQSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about VibeCode AI.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion items={faqItems} />
        </motion.div>
      </div>
    </section>
  );
};