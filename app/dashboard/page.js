'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Sparkles, 
  Calendar, 
  BarChart3,
  Zap,
  Users,
  ExternalLink
} from 'lucide-react';
import Link from 'next/link';
import Header from '../components/Header';
import TrendingTopics from '../components/TrendingTopics';
import MemeGenerator from '../components/MemeGenerator';
import ContentScheduler from '../components/ContentScheduler';
import Analytics from '../components/Analytics';

export default function Dashboard() {
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
        {/* Dashboard Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Welcome Back, Creator! 🚀
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to create some viral content? Choose your tool below and let's make magic happen.
          </p>
        </motion.div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { icon: TrendingUp, label: 'Trending Topics', value: '15', color: 'from-green-500 to-emerald-500' },
            { icon: Sparkles, label: 'Meme Templates', value: '1000+', color: 'from-purple-500 to-pink-500' },
            { icon: Calendar, label: 'Scheduled Posts', value: '8', color: 'from-blue-500 to-cyan-500' },
            { icon: BarChart3, label: 'Avg. Engagement', value: '4.2%', color: 'from-orange-500 to-red-500' },
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
                  className={`flex items-center gap-3 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
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

        {/* Quick Actions */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Generate AI Caption',
                description: 'Get instant AI-powered captions for your memes',
                action: 'Generate Now',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: Users,
                title: 'Invite Team Members',
                description: 'Collaborate with your team on content creation',
                action: 'Invite',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: ExternalLink,
                title: 'Export to Social',
                description: 'Share your content across all platforms',
                action: 'Export',
                color: 'from-green-500 to-emerald-500'
              }
            ].map((action, index) => (
              <motion.div
                key={action.title}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${action.color} flex items-center justify-center mb-4`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{action.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{action.description}</p>
                <button className={`px-4 py-2 bg-gradient-to-r ${action.color} text-white rounded-lg font-medium hover:opacity-90 transition-all duration-300 transform hover:scale-105`}>
                  {action.action}
                </button>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
