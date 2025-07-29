"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { StarIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    quote: "VibeCode has completely transformed how I build UIs. What used to take hours now takes minutes. The AI understands exactly what I want and generates clean, production-ready code every time.",
    author: "Sarah Chen",
    role: "Senior Frontend Developer",
    company: "Stripe",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    rating: 5,
    metrics: "300% faster development"
  },
  {
    quote: "The AI suggestions are incredibly accurate. It's like having a senior developer pair programming with you 24/7. The code quality is consistently excellent and follows all best practices.",
    author: "Marcus Rodriguez",
    role: "Full Stack Engineer",
    company: "Vercel",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    rating: 5,
    metrics: "95% code accuracy"
  },
  {
    quote: "Our team's productivity has increased by 300% since we started using VibeCode. The real-time preview and component generation features are game-changers for our workflow.",
    author: "Emily Johnson",
    role: "Tech Lead",
    company: "Linear",
    avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    rating: 5,
    metrics: "50% less debugging time"
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-4xl sm:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Loved by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
              Modern Developers
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join thousands of developers who are building faster than ever before. 
            See what they're saying about their VibeCode experience.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="h-full bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 group overflow-hidden relative">
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardContent className="p-8 relative z-10">
                    <div className="space-y-6">
                      {/* Rating */}
                      <div className="flex items-center space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2, delay: (index * 0.1) + (i * 0.05) }}
                            viewport={{ once: true }}
                          >
                            <StarIcon className="h-5 w-5 text-yellow-400" />
                          </motion.div>
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="text-muted-foreground italic leading-relaxed group-hover:text-foreground transition-colors duration-300">
                        "{testimonial.quote}"
                      </blockquote>

                      {/* Metrics */}
                      <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                        {testimonial.metrics}
                      </div>

                      {/* Author */}
                      <div className="flex items-center space-x-4 pt-4 border-t border-border/50">
                        <motion.img
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        />
                        <div>
                          <p className="font-semibold group-hover:text-primary transition-colors duration-300">
                            {testimonial.author}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                          <p className="text-xs text-primary font-medium">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { metric: '50K+', label: 'Developers' },
              { metric: '1M+', label: 'Components Generated' },
              { metric: '99.9%', label: 'Uptime' },
              { metric: '4.9/5', label: 'Rating' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-primary mb-1">
                  {stat.metric}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};