"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckIcon, SparklesIcon } from '@heroicons/react/24/solid';

const plans = [
  {
    name: 'Hobby',
    price: 'Free',
    yearlyPrice: 'Free',
    description: 'Perfect for personal projects and learning',
    features: [
      '10 AI generations per day',
      'Basic component library',
      'Community support',
      'Standard templates',
      'Basic code export'
    ],
    popular: false,
    cta: 'Get Started',
    highlight: 'Great for beginners',
  },
  {
    name: 'Pro',
    price: '$15',
    yearlyPrice: '$12',
    description: 'For professional developers building production apps',
    features: [
      'Unlimited AI generations',
      'Advanced component library',
      'Priority support',
      'Custom templates',
      'Team collaboration (up to 3)',
      'Advanced refactoring',
      'Code quality analysis',
      'Export to popular frameworks'
    ],
    popular: true,
    cta: 'Start Free Trial',
    highlight: 'Most popular choice',
  },
  {
    name: 'Team',
    price: '$50',
    yearlyPrice: '$40',
    description: 'For collaborative teams and organizations',
    features: [
      'Everything in Pro',
      'Unlimited team members',
      'Enterprise support',
      'Custom integrations',
      'Advanced analytics',
      'SSO integration',
      'Custom AI training',
      'Dedicated account manager'
    ],
    popular: false,
    cta: 'Contact Sales',
    highlight: 'Enterprise ready',
  },
];

export const PricingSection: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-muted/30 to-background">
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
            Pricing That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
              Scales With You
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Choose the perfect plan for your development needs. All plans include our core AI features.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-4 mb-12"
          >
            <span className={`text-sm font-medium transition-colors ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <motion.button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-14 h-7 rounded-full transition-colors ${isYearly ? 'bg-primary' : 'bg-muted'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute top-1 w-5 h-5 bg-white rounded-full shadow-sm"
                animate={{ x: isYearly ? 32 : 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            </motion.button>
            <span className={`text-sm font-medium transition-colors ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              Yearly
            </span>
            {isYearly && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium"
              >
                Save 20%
              </motion.span>
            )}
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative h-full"
            >
              {plan.popular && (
                <motion.div 
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  viewport={{ once: true }}
                >
                  <span className="bg-gradient-to-r from-primary to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1 shadow-lg">
                    <SparklesIcon className="w-4 h-4" />
                    <span>Most Popular</span>
                  </span>
                </motion.div>
              )}
              
              <motion.div
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="h-full"
              >
                <Card className={`h-full relative overflow-hidden flex flex-col ${
                  plan.popular 
                    ? 'ring-2 ring-primary shadow-2xl shadow-primary/10 bg-gradient-to-br from-card/90 to-card/60' 
                    : 'bg-gradient-to-br from-card/80 to-card/40 hover:shadow-xl'
                } backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 group`}>
                  
                  {/* Background Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${
                    plan.popular 
                      ? 'from-primary/10 to-purple-500/10' 
                      : 'from-primary/5 to-purple-500/5'
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <CardHeader className="relative z-10 pb-6 flex-shrink-0">
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                      <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                        {plan.highlight}
                      </span>
                    </div>
                    <div className="mt-4">
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold">
                          {isYearly ? plan.yearlyPrice : plan.price}
                        </span>
                        {plan.price !== 'Free' && (
                          <span className="text-muted-foreground ml-1">/mo</span>
                        )}
                      </div>
                      {isYearly && plan.price !== 'Free' && (
                        <div className="text-sm text-muted-foreground mt-1">
                          <span className="line-through">${plan.price}/mo</span>
                          <span className="text-primary ml-2 font-medium">Save 20%</span>
                        </div>
                      )}
                    </div>
                    <p className="text-muted-foreground mt-4 leading-relaxed">
                      {plan.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="relative z-10 flex-1 pb-6">
                    <ul className="space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex} 
                          className="flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: (index * 0.1) + (featureIndex * 0.05) }}
                          viewport={{ once: true }}
                        >
                          <CheckIcon className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-sm leading-relaxed group-hover:text-foreground transition-colors duration-300">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                  
                  <CardFooter className="relative z-10 flex-shrink-0 mt-auto">
                    <motion.div 
                      className="w-full"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        className={`w-full ${
                          plan.popular 
                            ? 'bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-lg hover:shadow-primary/25' 
                            : ''
                        }`}
                        variant={plan.popular ? 'default' : 'outline'}
                        size="lg"
                      >
                        {plan.cta}
                      </Button>
                    </motion.div>
                  </CardFooter>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">
            All plans include 14-day free trial • No credit card required • Cancel anytime
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <span>✓ 99.9% Uptime SLA</span>
            <span>✓ SOC 2 Compliant</span>
            <span>✓ GDPR Ready</span>
            <span>✓ 24/7 Support</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};