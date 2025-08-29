'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Crown, Rocket, Star, ArrowRight, Sparkles, TrendingUp, Users, Calendar, Shield, Globe } from 'lucide-react';
import Link from 'next/link';
import { useMobile } from '../hooks/useMobile';
import { useToastContext } from '../components/ThemeProvider';

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);
  const { isMobile, isTablet } = useMobile();
  const toast = useToastContext();

  const plans = [
    {
      name: 'Starter',
      icon: Zap,
      price: { monthly: 9, annual: 7 },
      description: 'Perfect for individual creators getting started',
      features: [
        '100 AI-generated memes per month',
        'Basic trend analysis',
        '5 social media platforms',
        'Email support',
        'Basic templates library',
        'Mobile app access'
      ],
      gradient: 'from-pink-500 to-purple-600',
      popular: false
    },
    {
      name: 'Creator',
      icon: Crown,
      price: { monthly: 29, annual: 24 },
      description: 'For serious content creators and influencers',
      features: [
        '500 AI-generated memes per month',
        'Advanced trend analysis',
        'All social media platforms',
        'Priority support',
        'Premium templates library',
        'Advanced scheduling',
        'Analytics dashboard',
        'Team collaboration (2 members)',
        'Custom branding',
        'API access'
      ],
      gradient: 'from-purple-500 to-pink-600',
      popular: true
    },
    {
      name: 'Agency',
      icon: Rocket,
      price: { monthly: 99, annual: 79 },
      description: 'For agencies and large teams',
      features: [
        'Unlimited AI-generated memes',
        'Real-time trend monitoring',
        'All social media platforms',
        '24/7 priority support',
        'Exclusive templates library',
        'Advanced automation',
        'Comprehensive analytics',
        'Team collaboration (10 members)',
        'White-label solution',
        'Custom integrations',
        'Dedicated account manager',
        'Training sessions'
      ],
      gradient: 'from-cyan-500 to-blue-600',
      popular: false
    }
  ];

  const handlePlanSelect = (planName) => {
    toast.success('Plan Selected!', `You've chosen the ${planName} plan. Redirecting to checkout...`, 3000);
    // Here you would typically redirect to checkout
  };

  const handleContactSales = () => {
    toast.info('Contact Sales', 'Our team will get back to you within 24 hours!', 4000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900 dark:from-black dark:via-purple-950 dark:to-pink-950 text-white">
      {/* Header */}
      <header className="relative z-10 p-4 md:p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 md:space-x-3">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Zap className="w-4 h-4 md:w-6 md:h-6 text-white" />
            </div>
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              MemeGen
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {['Features', 'Templates', 'Pricing', 'About'].map((item) => (
              <motion.a
                key={item}
                href={`/${item.toLowerCase() === 'pricing' ? 'pricing' : '#' + item.toLowerCase()}`}
                className="text-white/80 hover:text-white font-medium transition-colors duration-300 relative group"
                whileHover={{ y: -2 }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/login"
              className="px-4 py-2 text-white/80 hover:text-white transition-colors duration-300 font-medium"
            >
              Sign In
            </Link>
            <Link 
              href="/signup"
              className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-0 flex flex-col items-center justify-center text-center py-12 md:py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl w-full"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 md:mb-8 px-2">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Choose Your
            </span>
            <span className="text-white"> Plan</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            Start creating viral content today. Choose the plan that fits your creative needs and scale as you grow.
          </p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-4 mb-8 md:mb-12"
          >
            <span className={`text-sm md:text-base transition-colors duration-300 ${!isAnnual ? 'text-white' : 'text-white/60'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-16 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full p-1 transition-all duration-300"
            >
              <motion.div
                className="w-6 h-6 bg-white rounded-full shadow-lg"
                animate={{ x: isAnnual ? 32 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </button>
            <span className={`text-sm md:text-base transition-colors duration-300 ${isAnnual ? 'text-white' : 'text-white/60'}`}>
              Annual
              <span className="ml-2 px-2 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs rounded-full">
                Save 20%
              </span>
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* Pricing Cards */}
      <section className="relative z-10 py-8 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              const price = isAnnual ? plan.price.annual : plan.price.monthly;
              
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className={`relative group ${plan.popular ? 'lg:scale-105' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                        <Star className="w-4 h-4" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className={`bg-black/20 backdrop-blur-sm p-6 md:p-8 rounded-2xl border-2 transition-all duration-300 h-full ${
                    plan.popular 
                      ? 'border-pink-500/50 shadow-2xl shadow-pink-500/20' 
                      : 'border-white/10 hover:border-pink-500/30 shadow-lg hover:shadow-xl'
                  }`}>
                    <div className="text-center mb-6 md:mb-8">
                      <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-r ${plan.gradient} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-white/70 text-sm md:text-base">{plan.description}</p>
                    </div>

                    <div className="text-center mb-6 md:mb-8">
                      <div className="flex items-baseline justify-center gap-1 mb-2">
                        <span className="text-3xl md:text-4xl font-bold text-white">${price}</span>
                        <span className="text-white/60 text-sm md:text-base">/month</span>
                      </div>
                      {isAnnual && (
                        <p className="text-green-400 text-sm">Billed annually (${price * 12})</p>
                      )}
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-white/80 text-sm md:text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => handlePlanSelect(plan.name)}
                      className={`w-full py-3 md:py-4 px-6 rounded-xl font-bold text-white transition-all duration-300 transform hover:scale-105 group ${
                        plan.popular
                          ? 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 shadow-lg hover:shadow-xl'
                          : 'bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-500 hover:to-slate-600'
                      }`}
                    >
                      <span className="flex items-center justify-center gap-2">
                        {plan.popular ? 'Get Started' : 'Choose Plan'}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="relative z-10 py-16 md:py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-black/20 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/10">
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Globe className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Enterprise Solutions
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Need a custom solution for your organization? We offer tailored enterprise packages with dedicated support and custom integrations.
            </p>
            <button
              onClick={handleContactSales}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
            >
              Contact Sales Team
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-16 md:py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                question: "Can I change my plan anytime?",
                answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately."
              },
              {
                question: "Is there a free trial?",
                answer: "Yes! All plans come with a 14-day free trial. No credit card required to start."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and bank transfers for enterprise plans."
              },
              {
                question: "Can I cancel anytime?",
                answer: "Absolutely! You can cancel your subscription at any time with no cancellation fees."
              },
              {
                question: "Do you offer refunds?",
                answer: "Yes, we offer a 30-day money-back guarantee if you're not satisfied with our service."
              },
              {
                question: "Is my data secure?",
                answer: "Your data is encrypted and stored securely. We never share your information with third parties."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black/20 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-pink-500/30 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-white/70 text-sm md:text-base">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16 md:py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Ready to Start Creating?
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of creators who are already using MemeGen to dominate social media
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <Link 
              href="/signup"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
            >
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link 
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-pink-500 text-pink-400 font-bold rounded-xl hover:bg-pink-500 hover:text-white transition-all duration-300 transform hover:scale-105 group"
            >
              <TrendingUp className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              View Demo
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-sm py-8 md:py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60 text-sm md:text-base">
            © 2024 MemeGen. All rights reserved. | 
            <a href="#privacy" className="hover:text-pink-400 transition-colors duration-300 ml-2">Privacy</a> | 
            <a href="#terms" className="hover:text-pink-400 transition-colors duration-300 ml-2">Terms</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
