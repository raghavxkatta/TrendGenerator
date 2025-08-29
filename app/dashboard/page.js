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
import { useMobile } from '../hooks/useMobile';
import { useToastContext } from '../components/ThemeProvider';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('trends');
  const { isMobile, isTablet } = useMobile();
  const toast = useToastContext();

  const tabs = [
    { id: 'trends', label: 'Trending Topics', icon: TrendingUp },
    { id: 'generator', label: 'Meme Generator', icon: Sparkles },
    { id: 'scheduler', label: 'Content Scheduler', icon: Calendar },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  ];

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    toast.info('Tab Changed', `Switched to ${tabs.find(t => t.id === tabId)?.label}`, 2000);
  };

  const handleQuickAction = (action) => {
    toast.success('Action Initiated', `${action} process started successfully!`, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 dark:from-slate-900 dark:via-blue-950 dark:to-emerald-950 transition-colors duration-300">
      <Header />
      
      <main className="container mx-auto px-4 py-6 md:py-8">
        {/* Dashboard Header */}
        <motion.div 
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-emerald-600 to-blue-600 bg-clip-text text-transparent mb-3 md:mb-4 px-4">
            Welcome Back, Creator! 🚀
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto px-4">
            Ready to create some viral content? Choose your tool below and let's make magic happen.
          </p>
        </motion.div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
          {[
            { icon: TrendingUp, label: 'Trending Topics', value: '15', color: 'from-emerald-500 to-green-500' },
            { icon: Sparkles, label: 'Meme Templates', value: '1000+', color: 'from-blue-500 to-emerald-500' },
            { icon: Calendar, label: 'Scheduled Posts', value: '8', color: 'from-blue-500 to-cyan-500' },
            { icon: BarChart3, label: 'Avg. Engagement', value: '4.2%', color: 'from-orange-500 to-red-500' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white/80 dark:bg-slate-800/80 rounded-lg md:rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center mb-3 md:mb-4 mx-auto`}>
                <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-1 md:mb-2">{stat.value}</h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs md:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Tab Navigation */}
        <motion.div 
          className="bg-white/80 dark:bg-slate-800/80 rounded-lg md:rounded-xl shadow-lg p-2 mb-6 md:mb-8 border border-slate-200 dark:border-slate-700 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-wrap gap-1 md:gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`flex items-center gap-2 md:gap-3 px-3 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-all duration-300 text-sm md:text-base ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white shadow-lg transform scale-105'
                      : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                  }`}
                >
                  <Icon className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="hidden sm:block">{tab.label}</span>
                  {isMobile && <span className="sm:hidden">{tab.label.split(' ')[0]}</span>}
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
          className="bg-white/80 dark:bg-slate-800/80 rounded-lg md:rounded-xl shadow-lg p-4 md:p-8 min-h-[400px] md:min-h-[500px] border border-slate-200 dark:border-slate-700 backdrop-blur-sm"
        >
          {activeTab === 'trends' && <TrendingTopics />}
          {activeTab === 'generator' && <MemeGenerator />}
          {activeTab === 'scheduler' && <ContentScheduler />}
          {activeTab === 'analytics' && <Analytics />}
        </motion.div>

        {/* Quick Actions */}
        <section className="mt-16 md:mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-slate-800 dark:text-white px-4">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Zap,
                title: 'Generate AI Caption',
                description: 'Get instant AI-powered captions for your memes',
                action: 'Generate Now',
                color: 'from-blue-500 to-emerald-500'
              },
              {
                icon: Users,
                title: 'Invite Team Members',
                description: 'Collaborate with your team on content creation',
                action: 'Invite',
                color: 'from-emerald-500 to-cyan-500'
              },
              {
                icon: ExternalLink,
                title: 'Export to Social',
                description: 'Share your content across all platforms',
                action: 'Export',
                color: 'from-cyan-500 to-blue-500'
              }
            ].map((action, index) => (
              <motion.div
                key={action.title}
                className="bg-white/80 dark:bg-slate-800/80 rounded-lg md:rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-r ${action.color} flex items-center justify-center mb-3 md:mb-4`}>
                  <action.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-slate-800 dark:text-white">{action.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-3 md:mb-4 text-sm md:text-base">{action.description}</p>
                <button 
                  onClick={() => handleQuickAction(action.action)}
                  className={`px-3 md:px-4 py-2 bg-gradient-to-r ${action.color} text-white rounded-lg font-medium hover:opacity-90 transition-all duration-300 transform hover:scale-105 text-sm md:text-base`}
                >
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
