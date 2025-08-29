'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    BarChart3,
    TrendingUp,
    TrendingDown,
    Users,
    Eye,
    Heart,
    MessageCircle,
    Share2,
    Calendar,
    Target,
    Zap,
    Award,
    Clock,
    Filter
} from 'lucide-react';

export default function Analytics() {
    const [selectedPeriod, setSelectedPeriod] = useState('7d');
    const [selectedPlatform, setSelectedPlatform] = useState('all');
    const [isLoading, setIsLoading] = useState(false);

    const periods = [
        { id: '7d', label: 'Last 7 Days' },
        { id: '30d', label: 'Last 30 Days' },
        { id: '90d', label: 'Last 90 Days' },
        { id: '1y', label: 'Last Year' },
    ];

    const platforms = [
        { id: 'all', name: 'All Platforms', color: 'from-purple-500 to-blue-500' },
        { id: 'twitter', name: 'Twitter', color: 'from-blue-400 to-blue-600' },
        { id: 'instagram', name: 'Instagram', color: 'from-pink-400 to-purple-600' },
        { id: 'facebook', name: 'Facebook', color: 'from-blue-500 to-blue-700' },
        { id: 'youtube', name: 'YouTube', color: 'from-red-500 to-red-700' },
        { id: 'linkedin', name: 'LinkedIn', color: 'from-blue-600 to-blue-800' },
    ];

    // Mock analytics data
    const analyticsData = {
        overview: {
            totalPosts: 156,
            totalReach: '2.4M',
            totalEngagement: '89.2K',
            avgEngagementRate: '3.7%',
            followersGrowth: '+12.4%',
            topPerformingPost: 'AI Meme Generator Launch'
        },
        metrics: [
            { label: 'Reach', value: '2.4M', change: '+18.5%', trend: 'up', icon: Eye },
            { label: 'Engagement', value: '89.2K', change: '+24.3%', trend: 'up', icon: Heart },
            { label: 'Impressions', value: '4.1M', change: '+15.7%', trend: 'up', icon: Users },
            { label: 'Click-through Rate', value: '2.8%', change: '+8.9%', trend: 'up', icon: Target },
            { label: 'Shares', value: '12.4K', change: '+31.2%', trend: 'up', icon: Share2 },
            { label: 'Comments', value: '5.6K', change: '+12.1%', trend: 'up', icon: MessageCircle }
        ],
        topPosts: [
            {
                id: 1,
                title: 'AI Meme Generator Launch',
                platform: 'twitter',
                engagement: '15.2K',
                reach: '234K',
                engagementRate: '6.5%',
                date: '2 days ago'
            },
            {
                id: 2,
                title: 'Behind the Scenes: Trend Analyzer',
                platform: 'instagram',
                engagement: '12.8K',
                reach: '189K',
                engagementRate: '6.8%',
                date: '5 days ago'
            },
            {
                id: 3,
                title: 'Social Media Tips & Tricks',
                platform: 'linkedin',
                engagement: '9.4K',
                reach: '156K',
                engagementRate: '6.0%',
                date: '1 week ago'
            },
            {
                id: 4,
                title: 'New Feature Announcement',
                platform: 'facebook',
                engagement: '8.7K',
                reach: '142K',
                engagementRate: '6.1%',
                date: '1 week ago'
            },
            {
                id: 5,
                title: 'Tutorial: Creating Viral Memes',
                platform: 'youtube',
                engagement: '7.2K',
                reach: '98K',
                engagementRate: '7.3%',
                date: '2 weeks ago'
            }
        ],
        platformPerformance: [
            { platform: 'Twitter', posts: 45, reach: '890K', engagement: '32.1K', rate: '3.6%' },
            { platform: 'Instagram', posts: 38, reach: '756K', engagement: '28.4K', rate: '3.8%' },
            { platform: 'Facebook', posts: 32, reach: '423K', engagement: '15.2K', rate: '3.6%' },
            { platform: 'LinkedIn', posts: 25, reach: '234K', engagement: '8.9K', rate: '3.8%' },
            { platform: 'YouTube', posts: 16, reach: '98K', engagement: '4.6K', rate: '4.7%' }
        ],
        engagementTrends: [
            { day: 'Mon', engagement: 12500, reach: 180000 },
            { day: 'Tue', engagement: 14200, reach: 195000 },
            { day: 'Wed', engagement: 16800, reach: 220000 },
            { day: 'Thu', engagement: 18900, reach: 245000 },
            { day: 'Fri', engagement: 15600, reach: 210000 },
            { day: 'Sat', engagement: 13400, reach: 185000 },
            { day: 'Sun', engagement: 11800, reach: 165000 }
        ]
    };

    const getTrendIcon = (trend) => {
        if (trend === 'up') {
            return <TrendingUp className="w-4 h-4 text-green-500" />;
        }
        return <TrendingDown className="w-4 h-4 text-red-500" />;
    };

    const getPlatformIcon = (platformId) => {
        const platform = platforms.find(p => p.id === platformId);
        if (platform) {
            return (
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${platform.color} flex items-center justify-center`}>
                    <span className="text-white text-xs font-bold">{platform.name.charAt(0)}</span>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Performance Analytics</h2>
                <p className="text-gray-600">Track your social media performance and optimize your content strategy</p>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex flex-wrap items-center gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Time Period</label>
                        <select
                            value={selectedPeriod}
                            onChange={(e) => setSelectedPeriod(e.target.value)}
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        >
                            {periods.map((period) => (
                                <option key={period.id} value={period.id}>{period.label}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Platform</label>
                        <select
                            value={selectedPlatform}
                            onChange={(e) => setSelectedPlatform(e.target.value)}
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        >
                            {platforms.map((platform) => (
                                <option key={platform.id} value={platform.id}>{platform.name}</option>
                            ))}
                        </select>
                    </div>

                    <motion.button
                        className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center gap-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Filter className="w-4 h-4" />
                        Apply Filters
                    </motion.button>
                </div>
            </div>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {analyticsData.metrics.map((metric, index) => (
                    <motion.div
                        key={metric.label}
                        className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className={`w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center`}>
                                <metric.icon className="w-6 h-6 text-white" />
                            </div>
                            {getTrendIcon(metric.trend)}
                        </div>

                        <h3 className="text-2xl font-bold text-gray-800 mb-1">{metric.value}</h3>
                        <p className="text-gray-600 text-sm mb-2">{metric.label}</p>
                        <p className="text-green-600 text-sm font-medium">{metric.change}</p>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Top Performing Posts */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h3 className="text-lg font-semibold mb-6 text-gray-800 flex items-center gap-2">
                        <Award className="w-5 h-5" />
                        Top Performing Posts
                    </h3>

                    <div className="space-y-4">
                        {analyticsData.topPosts.map((post, index) => (
                            <motion.div
                                key={post.id}
                                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ x: 5 }}
                            >
                                <div className="text-2xl font-bold text-gray-300">#{index + 1}</div>

                                <div className="flex-1">
                                    <h4 className="font-medium text-gray-800 mb-1">{post.title}</h4>
                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                        <span>{post.platform}</span>
                                        <span>{post.date}</span>
                                    </div>
                                </div>

                                <div className="text-right">
                                    <div className="font-semibold text-gray-800">{post.engagement}</div>
                                    <div className="text-sm text-gray-500">{post.engagementRate}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Platform Performance */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h3 className="text-lg font-semibold mb-6 text-gray-800 flex items-center gap-2">
                        <BarChart3 className="w-5 h-5" />
                        Platform Performance
                    </h3>

                    <div className="space-y-4">
                        {analyticsData.platformPerformance.map((platform, index) => (
                            <motion.div
                                key={platform.platform}
                                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                                        <span className="text-white text-sm font-bold">{platform.platform.charAt(0)}</span>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-800">{platform.platform}</h4>
                                        <p className="text-sm text-gray-500">{platform.posts} posts</p>
                                    </div>
                                </div>

                                <div className="text-right">
                                    <div className="font-semibold text-gray-800">{platform.reach}</div>
                                    <div className="text-sm text-gray-500">{platform.rate} engagement</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Engagement Trends Chart */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold mb-6 text-gray-800 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Engagement Trends (Last 7 Days)
                </h3>

                <div className="h-64 flex items-end justify-between gap-2">
                    {analyticsData.engagementTrends.map((day, index) => (
                        <motion.div
                            key={day.day}
                            className="flex-1 bg-gradient-to-t from-purple-500 to-blue-500 rounded-t-lg relative group"
                            style={{ height: `${(day.engagement / 20000) * 100}%` }}
                            initial={{ height: 0 }}
                            animate={{ height: `${(day.engagement / 20000) * 100}%` }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {day.engagement.toLocaleString()}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="flex justify-between mt-4 text-sm text-gray-500">
                    {analyticsData.engagementTrends.map((day) => (
                        <span key={day.day}>{day.day}</span>
                    ))}
                </div>
            </div>

            {/* Insights & Recommendations */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    AI-Powered Insights
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white bg-opacity-20 rounded-lg p-4">
                        <h4 className="font-semibold mb-2">Best Posting Time</h4>
                        <p className="text-sm opacity-90">Your audience is most active on Tuesdays and Thursdays at 12:00 PM</p>
                    </div>
                    
                    <div className="bg-white bg-opacity-20 rounded-lg p-4">
                        <h4 className="font-semibold mb-2">Content Performance</h4>
                        <p className="text-sm opacity-90">AI-generated memes perform 23% better than manual content</p>
                    </div>
                    
                    <div className="bg-white bg-opacity-20 rounded-lg p-4">
                        <h4 className="font-semibold mb-2">Growth Opportunity</h4>
                        <p className="text-sm opacity-90">LinkedIn posts have the highest engagement rate at 4.7%</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
