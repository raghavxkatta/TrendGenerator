'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Twitter, 
  Instagram, 
  Facebook, 
  Youtube, 
  Clock,
  Flame,
  TrendingDown,
  Eye,
  Share2
} from 'lucide-react';

export default function TrendingTopics() {
  const [trendingTopics, setTrendingTopics] = useState([]);
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  const platforms = [
    { id: 'all', name: 'All Platforms', icon: TrendingUp, color: 'from-purple-500 to-blue-500' },
    { id: 'twitter', name: 'Twitter', icon: Twitter, color: 'from-blue-400 to-blue-600' },
    { id: 'instagram', name: 'Instagram', icon: Instagram, color: 'from-pink-400 to-purple-600' },
    { id: 'facebook', name: 'Facebook', icon: Facebook, color: 'from-blue-500 to-blue-700' },
    { id: 'youtube', name: 'YouTube', icon: Youtube, color: 'from-red-500 to-red-700' },
    { id: 'reddit', name: 'Reddit', icon: TrendingUp, color: 'from-orange-500 to-red-500' },
  ];

  // Mock data for trending topics
  useEffect(() => {
    const mockTopics = [
      {
        id: 1,
        title: 'AI Art Revolution',
        description: 'New AI tools are transforming digital art creation',
        platform: 'twitter',
        engagement: '2.5M',
        trend: 'up',
        hashtags: ['#AIArt', '#DigitalArt', '#Innovation'],
        timestamp: '2 hours ago'
      },
      {
        id: 2,
        title: 'Sustainable Fashion',
        description: 'Eco-friendly clothing brands gaining popularity',
        platform: 'instagram',
        engagement: '1.8M',
        trend: 'up',
        hashtags: ['#SustainableFashion', '#EcoFriendly', '#Fashion'],
        timestamp: '4 hours ago'
      },
      {
        id: 3,
        title: 'Remote Work Tips',
        description: 'Best practices for productive home office setup',
        platform: 'linkedin',
        engagement: '890K',
        trend: 'stable',
        hashtags: ['#RemoteWork', '#Productivity', '#WorkFromHome'],
        timestamp: '6 hours ago'
      },
      {
        id: 4,
        title: 'Plant-Based Recipes',
        description: 'Viral vegan cooking videos and recipes',
        platform: 'youtube',
        engagement: '3.2M',
        trend: 'up',
        hashtags: ['#Vegan', '#PlantBased', '#Cooking'],
        timestamp: '8 hours ago'
      },
      {
        id: 5,
        title: 'Gaming Industry News',
        description: 'Latest updates on upcoming game releases',
        platform: 'reddit',
        engagement: '1.1M',
        trend: 'down',
        hashtags: ['#Gaming', '#GamingNews', '#VideoGames'],
        timestamp: '10 hours ago'
      },
      {
        id: 6,
        title: 'Mental Health Awareness',
        description: 'Important conversations about mental wellness',
        platform: 'twitter',
        engagement: '4.7M',
        trend: 'up',
        hashtags: ['#MentalHealth', '#Wellness', '#SelfCare'],
        timestamp: '12 hours ago'
      }
    ];

    setTimeout(() => {
      setTrendingTopics(mockTopics);
      setIsLoading(false);
    }, 1000);
  }, []);

  const filteredTopics = selectedPlatform === 'all' 
    ? trendingTopics 
    : trendingTopics.filter(topic => topic.platform === selectedPlatform);

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up':
        return <Flame className="w-4 h-4 text-red-500" />;
      case 'down':
        return <TrendingDown className="w-4 h-4 text-blue-500" />;
      default:
        return <TrendingUp className="w-4 h-4 text-green-500" />;
    }
  };

  const getPlatformIcon = (platform) => {
    const platformData = platforms.find(p => p.id === platform);
    if (platformData) {
      const Icon = platformData.icon;
      return <Icon className="w-4 h-4" />;
    }
    return null;
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Platform Filter */}
      <div className="bg-white rounded-xl p-4 shadow-lg">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Filter by Platform</h3>
        <div className="flex flex-wrap gap-3">
          {platforms.map((platform) => (
            <button
              key={platform.id}
              onClick={() => setSelectedPlatform(platform.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedPlatform === platform.id
                  ? `bg-gradient-to-r ${platform.color} text-white shadow-lg`
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <platform.icon className="w-4 h-4" />
              {platform.name}
            </button>
          ))}
        </div>
      </div>

      {/* Trending Topics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTopics.map((topic, index) => (
          <motion.div
            key={topic.id}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                {getPlatformIcon(topic.platform)}
                <span className="text-sm text-gray-500 capitalize">{topic.platform}</span>
              </div>
              <div className="flex items-center gap-2">
                {getTrendIcon(topic.trend)}
                <span className="text-sm font-medium text-gray-600">{topic.engagement}</span>
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-2 text-gray-800">{topic.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{topic.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {topic.hashtags.map((hashtag) => (
                <span
                  key={hashtag}
                  className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-medium"
                >
                  {hashtag}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                {topic.timestamp}
              </div>
              <div className="flex gap-2">
                <button className="p-2 text-gray-400 hover:text-blue-500 transition-colors">
                  <Eye className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-green-500 transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Real-time Updates Banner */}
      <motion.div
        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-xl shadow-lg"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="font-semibold">Live Updates</span>
            <span className="text-sm opacity-90">Refreshing every 5 minutes</span>
          </div>
          <button className="px-4 py-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all duration-300">
            Refresh Now
          </button>
        </div>
      </motion.div>
    </div>
  );
}
