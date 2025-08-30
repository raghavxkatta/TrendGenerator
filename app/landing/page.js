'use client';

import { motion } from 'framer-motion';
import { Zap, TrendingUp, Sparkles, Brain, Palette, Target, Calendar, Share2, Twitter, Instagram, Youtube, Play } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-950 to-blue-950 text-white overflow-hidden">
      {/* Header */}
      <header className="relative z-10 p-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Zap className="w-6 h-6 text-blue-400" />
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Dankify
          </span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link href="#features" className="hover:text-purple-400 transition-colors duration-300">Features</Link>
          <Link href="#templates" className="hover:text-purple-400 transition-colors duration-300">Templates</Link>
          <Link href="#trending" className="hover:text-purple-400 transition-colors duration-300">Trending</Link>
          <Link href="#pricing" className="hover:text-purple-400 transition-colors duration-300">Pricing</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="#signin" className="px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-300">
            Sign In
          </Link>
          <Link href="#getstarted" className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
            Get Started
          </Link>
        </div>
      </header>

      {/* AI-Powered Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center py-4 bg-purple-800 bg-opacity-30 backdrop-blur-sm"
      >
        <div className="flex items-center justify-center gap-2 text-sm text-purple-200">
          <Sparkles className="w-4 h-4 text-purple-300" />
          AI-Powered Meme Generation
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="relative z-0 flex flex-col items-center justify-center text-center py-20 px-4 min-h-[calc(100vh-120px)]">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Smart Meme
            </span>
            <span className="text-white"> & </span>
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Trend Generator
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Stay ahead of viral trends and create engaging content that resonates. AI-powered meme templates, trending topics, and instant content generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link href="#startcreating" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg">
                <Zap className="w-5 h-5" /> Start Creating
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link href="#viewtrending" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-full hover:bg-purple-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                <TrendingUp className="w-5 h-5" /> View Trending
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 bg-gray-900 bg-opacity-50 backdrop-blur-sm py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-xl bg-gray-800 bg-opacity-40 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <h3 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">10K+</h3>
            <p className="text-gray-300 text-lg">Memes Generated</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 rounded-xl bg-gray-800 bg-opacity-40 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <h3 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">500+</h3>
            <p className="text-gray-300 text-lg">Viral Templates</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-6 rounded-xl bg-gray-800 bg-opacity-40 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <h3 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">24/7</h3>
            <p className="text-gray-300 text-lg">Trend Monitoring</p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to create viral content and stay ahead of trends
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: TrendingUp,
              title: "Real-Time Trend Scanning",
              description: "AI monitors trending topics across all major social platforms",
              gradient: "from-blue-500 to-purple-500"
            },
            {
              icon: Brain,
              title: "AI Meme Generation",
              description: "Smart algorithms create viral-ready content tailored to your style",
              gradient: "from-pink-500 to-purple-500"
            },
            {
              icon: Palette,
              title: "Custom Templates",
              description: "Hundreds of meme templates updated with trending formats",
              gradient: "from-blue-500 to-pink-500"
            },
            {
              icon: Target,
              title: "Niche Targeting",
              description: "Content personalized for your specific audience and industry",
              gradient: "from-pink-500 to-purple-500"
            },
            {
              icon: Calendar,
              title: "Smart Scheduling",
              description: "Auto-post at optimal times for maximum engagement",
              gradient: "from-blue-500 to-purple-500"
            },
            {
              icon: Share2,
              title: "Multi-Platform Export",
              description: "One-click sharing to all your social media accounts",
              gradient: "from-blue-500 to-pink-500"
            }
          ].map((feature, index) => (
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
              className="bg-gray-800 bg-opacity-40 p-8 rounded-xl shadow-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-purple-300 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 bg-opacity-80 backdrop-blur-sm py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="w-6 h-6 text-purple-400" />
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Dankify
                </span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                The smartest way to create viral content and stay ahead of social media trends with AI-powered meme generation.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Twitter, href: "#", label: "Twitter" },
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Youtube, href: "#", label: "YouTube" },
                  { icon: Play, href: "#", label: "TikTok" }
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-purple-400 hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            {[
              {
                title: "Product",
                links: ["Features", "Templates", "Pricing", "API"]
              },
              {
                title: "Company",
                links: ["About", "Blog", "Careers", "Contact"]
              },
              {
                title: "Resources",
                links: ["Help Center", "Community", "Tutorials", "Status"]
              },
              {
                title: "Legal",
                links: ["Privacy", "Terms", "Cookies", "Licenses"]
              }
            ].map((section) => (
              <div key={section.title}>
                <h4 className="text-white font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase().replace(' ', '-')}`}
                        className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Get the latest trending templates and features delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Dankify. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2 mt-4 md:mt-0">
              Made with <span className="text-red-400">❤️</span> for content creators
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
