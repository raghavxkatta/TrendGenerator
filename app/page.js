'use client';

import { motion } from 'framer-motion';
import { Zap, TrendingUp, Sparkles, Brain, Palette, Target, Calendar, Share2, Twitter, Instagram, Youtube, Play, Star, ArrowRight, CheckCircle, Users, Award, Globe, Shield, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useMobile } from './hooks/useMobile';
import { useToastContext } from './components/ThemeProvider';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isMobile, isTablet } = useMobile();
  const toast = useToastContext();

  const features = [
    {
      icon: TrendingUp,
      title: "Real-Time Trend Scanning",
      description: "AI monitors trending topics across all major social platforms",
      gradient: "from-pink-500 to-purple-600"
    },
    {
      icon: Brain,
      title: "AI Meme Generation",
      description: "Smart algorithms create viral-ready content tailored to your style",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      icon: Palette,
      title: "Custom Templates",
      description: "Hundreds of meme templates updated with trending formats",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Target,
      title: "Niche Targeting",
      description: "Content personalized for your specific audience and industry",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Auto-post at optimal times for maximum engagement",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Share2,
      title: "Multi-Platform Export",
      description: "One-click sharing to all your social media accounts",
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Content Creator",
      avatar: "👩‍🎨",
      content: "This platform revolutionized my content strategy. My engagement increased by 300% in just 2 months!",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Social Media Manager",
      avatar: "👨‍💼",
      content: "The AI-powered trend analysis is incredible. I'm always ahead of the curve now.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Digital Marketer",
      avatar: "👩‍💻",
      content: "Best investment for our agency. The scheduling features save us hours every week.",
      rating: 5
    }
  ];

  const stats = [
    { value: "10K+", label: "Memes Generated", icon: Sparkles },
    { value: "500+", label: "Viral Templates", icon: TrendingUp },
    { value: "24/7", label: "Trend Monitoring", icon: Globe },
    { value: "98%", label: "User Satisfaction", icon: Award }
  ];

  const handleGetStarted = () => {
    toast.success('Welcome!', 'Redirecting you to sign up page...', 3000);
  };

  const handleViewDemo = () => {
    toast.info('Demo Coming Soon', 'We\'re working on an amazing demo for you!', 4000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900 dark:from-black dark:via-purple-950 dark:to-pink-950 text-white overflow-hidden">
      {/* Header */}
      <header className="relative z-10 p-4 md:p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2 md:space-x-3">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Zap className="w-4 h-4 md:w-6 md:h-6 text-white" />
            </div>
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              MemeGen
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {['Features', 'Templates', 'Pricing', 'About'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/80 hover:text-white font-medium transition-colors duration-300 relative group"
                whileHover={{ y: -2 }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white/80 hover:text-white transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 bg-black/20 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden"
          >
            <nav className="p-4 space-y-3">
              {['Features', 'Templates', 'Pricing', 'About'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-white/80 hover:text-white transition-colors duration-300 font-medium py-2 px-3 rounded-lg hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="pt-3 border-t border-white/20 space-y-3">
                <Link 
                  href="/login"
                  className="block text-white/80 hover:text-white transition-colors duration-300 font-medium py-2 px-3 rounded-lg hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link 
                  href="/signup"
                  className="block bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium py-2 px-3 rounded-lg text-center hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </header>

      {/* AI-Powered Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center py-3 md:py-4 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm border-b border-pink-500/30"
      >
        <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-pink-200">
          <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-pink-400 animate-pulse" />
          AI-Powered Meme Generation
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="relative z-0 flex flex-col items-center justify-center text-center py-12 md:py-20 px-4 min-h-[calc(100vh-120px)]">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl w-full"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold leading-tight mb-6 md:mb-8 px-2">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Smart Meme
            </span>
            <span className="text-white"> & </span>
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Trend Generator
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            Stay ahead of viral trends and create engaging content that resonates. AI-powered meme templates, trending topics, and instant content generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center px-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <button 
                onClick={handleGetStarted}
                className="inline-flex items-center justify-center gap-2 md:gap-3 px-6 md:px-10 py-3 md:py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-base md:text-lg rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg w-full sm:w-auto group"
              >
                <Zap className="w-4 h-4 md:w-6 md:h-6 group-hover:rotate-12 transition-transform duration-300" />
                Start Creating
                <ArrowRight className="w-4 h-4 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <button 
                onClick={handleViewDemo}
                className="inline-flex items-center justify-center gap-2 md:gap-3 px-6 md:px-10 py-3 md:py-4 border-2 border-pink-500 text-pink-400 font-bold text-base md:text-lg rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300 transform hover:scale-105 group w-full sm:w-auto"
              >
                <TrendingUp className="w-4 h-4 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-300" />
                View Demo
              </button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 bg-black/20 backdrop-blur-sm py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="relative">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-1 md:mb-2 group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </h3>
              <p className="text-white/70 text-sm md:text-lg font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4 md:mb-6 px-4">
            Powerful Features
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto px-4">
            Everything you need to create viral content and stay ahead of trends
          </p>
        </motion.div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              <div className="bg-black/20 backdrop-blur-sm p-6 md:p-8 rounded-xl md:rounded-2xl border border-white/10 hover:border-pink-500/30 transition-all duration-300 h-full shadow-lg hover:shadow-xl">
                <div className="relative">
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4 md:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <div className={`absolute -inset-4 bg-gradient-to-r ${feature.gradient} rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}></div>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-white group-hover:text-pink-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300 text-base md:text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What Our Users Say Section */}
      <section className="py-16 md:py-20 px-4 bg-black/20 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4 md:mb-6 px-4">
            What Our Users Say
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto px-4">
            Join thousands of satisfied creators who've transformed their content strategy
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-black/20 backdrop-blur-sm p-6 md:p-8 rounded-xl md:rounded-2xl border border-white/10 hover:border-pink-500/30 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center gap-2 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-white/80 mb-4 md:mb-6 text-base md:text-lg leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3 md:gap-4">
                <div className="text-2xl md:text-3xl">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-semibold text-white text-sm md:text-base">{testimonial.name}</h4>
                  <p className="text-pink-300 text-xs md:text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-16 md:py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4 md:mb-6 px-4">
            Ready to Go Viral?
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-8 md:mb-10 max-w-2xl mx-auto px-4">
            Join thousands of creators who are already using AI to dominate social media
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-8 md:mb-10 px-4">
            <Link 
              href="/signup"
              className="inline-flex items-center justify-center gap-2 md:gap-3 px-6 md:px-10 py-3 md:py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-base md:text-lg rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg group w-full sm:w-auto"
            >
              <Zap className="w-4 h-4 md:w-6 md:h-6 group-hover:rotate-12 transition-transform duration-300" />
              Start Free Trial
              <ArrowRight className="w-4 h-4 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <button 
              onClick={handleViewDemo}
              className="inline-flex items-center justify-center gap-2 md:gap-3 px-6 md:px-10 py-3 md:py-4 border-2 border-pink-500 text-pink-400 font-bold text-base md:text-lg rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300 transform hover:scale-105 group w-full sm:w-auto"
            >
              <Play className="w-4 h-4 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-300" />
              Watch Demo
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-white/60 text-sm md:text-base px-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Compact Footer */}
      <footer className="bg-black/40 backdrop-blur-sm py-8 md:py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
            {/* Brand */}
            <div className="sm:col-span-2">
              <div className="flex items-center space-x-2 md:space-x-3 mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </div>
                <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  MemeGen
                </span>
              </div>
              <p className="text-white/70 mb-4 max-w-md text-sm md:text-base">
                The smartest way to create viral content and stay ahead of social media trends.
              </p>
              <div className="flex space-x-3 md:space-x-4">
                {[
                  { icon: Twitter, href: "#", label: "Twitter" },
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Youtube, href: "#", label: "YouTube" },
                  { icon: Play, href: "#", label: "TikTok" }
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-8 h-8 md:w-10 md:h-10 bg-white/10 rounded-full flex items-center justify-center text-white/60 hover:text-pink-400 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <social.icon className="w-4 h-4 md:w-5 md:h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Product</h4>
              <ul className="space-y-2">
                {['Features', 'Templates', 'Pricing', 'API'].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-white/60 hover:text-pink-400 transition-colors duration-300 hover:translate-x-1 transform inline-block text-sm md:text-base"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Company</h4>
              <ul className="space-y-2">
                {['About', 'Blog', 'Careers', 'Contact'].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-white/60 hover:text-pink-400 transition-colors duration-300 hover:translate-x-1 transform inline-block text-sm md:text-base"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-4 md:pt-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
            <p className="text-white/60 text-xs md:text-sm text-center md:text-left">
              © 2024 MemeGen. All rights reserved.
            </p>
            <div className="flex items-center gap-4 md:gap-6">
              <a href="#privacy" className="text-white/60 hover:text-pink-400 text-xs md:text-sm transition-colors duration-300">Privacy</a>
              <a href="#terms" className="text-white/60 hover:text-pink-400 text-xs md:text-sm transition-colors duration-300">Terms</a>
              <a href="#cookies" className="text-white/60 hover:text-pink-400 text-xs md:text-sm transition-colors duration-300">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
