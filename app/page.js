'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Sparkles, 
  Image, 
  Calendar, 
  Share2, 
  Zap,
  Clock,
  Users,
  BarChart3,
  Lightbulb,
  ExternalLink
} from 'lucide-react';
import Link from 'next/link';
import Header from './components/Header';
import TrendingTopics from './components/TrendingTopics';
import MemeGenerator from './components/MemeGenerator';
import ContentScheduler from './components/ContentScheduler';
import Analytics from './components/Analytics';

export default function Home() {
  const [activeTab, setActiveTab] = useState('trends');

  const tabs = [
    { id: 'trends', label: 'Trending Topics', icon: TrendingUp },
    { id: 'generator', label: 'Meme Generator', icon: Sparkles },
    { id: 'scheduler', label: 'Content Scheduler', icon: Calendar },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-gray-900 dark:via-purple-950 dark:to-blue-950 transition-colors duration-300">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Landing Page Link */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <Link 
            href="/landing" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <ExternalLink className="w-4 h-4" />
            View Landing Page
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Smart Meme & Trend Generator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Stay ahead of the curve with AI-powered meme generation, trending topic analysis, 
            and automated content scheduling for maximum social media engagement.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Zap className="w-5 h-5" />
              Start Creating
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400 px-8 py-3 rounded-full font-semibold hover:bg-purple-600 hover:text-white dark:hover:bg-purple-400 dark:hover:text-gray-900 transition-all duration-300"
            >
              <Users className="w-5 h-5" />
              View Demo
            </motion.button>
          </div>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { icon: TrendingUp, label: 'Trending Topics', value: '500+', color: 'from-green-500 to-emerald-500' },
            { icon: Sparkles, label: 'Meme Templates', value: '1000+', color: 'from-purple-500 to-pink-500' },
            { icon: Clock, label: 'Real-time Updates', value: '24/7', color: 'from-blue-500 to-cyan-500' },
            { icon: Share2, label: 'Social Platforms', value: '10+', color: 'from-orange-500 to-red-500' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center mb-4 mx-auto`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{stat.value}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Tab Navigation */}
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-2 mb-8 border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                      : 'text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'trends' && <TrendingTopics />}
          {activeTab === 'generator' && <MemeGenerator />}
          {activeTab === 'scheduler' && <ContentScheduler />}
          {activeTab === 'analytics' && <Analytics />}
        </motion.div>

        {/* Features Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Why Choose Our Platform?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Lightbulb,
                title: 'AI-Powered Insights',
                description: 'Advanced algorithms analyze trending topics across multiple platforms to identify viral content opportunities.'
              },
              {
                icon: Image,
                title: 'Smart Meme Generation',
                description: 'Create engaging memes with customizable templates and AI-suggested captions that resonate with your audience.'
              },
              {
                icon: Calendar,
                title: 'Automated Scheduling',
                description: 'Schedule your content at optimal times across multiple social media platforms for maximum reach and engagement.'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
