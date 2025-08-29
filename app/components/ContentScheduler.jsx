'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  Plus, 
  Edit, 
  Trash2, 
  Share2, 
  Twitter, 
  Instagram, 
  Facebook, 
  Youtube,
  Linkedin,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  BarChart3
} from 'lucide-react';

export default function ContentScheduler() {
  const [scheduledPosts, setScheduledPosts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [postContent, setPostContent] = useState('');
  const [postImage, setPostImage] = useState(null);

  const platforms = [
    { id: 'twitter', name: 'Twitter', icon: Twitter, color: 'from-blue-400 to-blue-600' },
    { id: 'instagram', name: 'Instagram', icon: Instagram, color: 'from-pink-400 to-purple-600' },
    { id: 'facebook', name: 'Facebook', icon: Facebook, color: 'from-blue-500 to-blue-700' },
    { id: 'youtube', name: 'YouTube', icon: Youtube, color: 'from-red-500 to-red-700' },
    { id: 'linkedin', name: 'LinkedIn', icon: Linkedin, color: 'from-blue-600 to-blue-800' },
  ];

  const optimalTimes = [
    { time: '09:00', description: 'Morning commute', engagement: 'High' },
    { time: '12:00', description: 'Lunch break', engagement: 'Very High' },
    { time: '15:00', description: 'Afternoon break', engagement: 'Medium' },
    { time: '18:00', description: 'Evening commute', engagement: 'High' },
    { time: '20:00', description: 'Prime time', engagement: 'Very High' },
    { time: '22:00', description: 'Night browsing', engagement: 'Medium' },
  ];

  // Mock data for scheduled posts
  useEffect(() => {
    const mockPosts = [
      {
        id: 1,
        content: 'Just launched our new AI-powered meme generator! 🚀 Check it out and create viral content in seconds! #AI #Memes #Innovation',
        platforms: ['twitter', 'linkedin'],
        scheduledFor: '2024-01-15T12:00:00',
        status: 'scheduled',
        image: 'https://via.placeholder.com/400x200/6366F1/FFFFFF?text=AI+Meme+Generator',
        engagement: '2.3K'
      },
      {
        id: 2,
        content: 'Behind the scenes: How we built the smart trend analyzer using machine learning algorithms 📊 #Tech #MachineLearning #Development',
        platforms: ['twitter', 'instagram'],
        scheduledFor: '2024-01-16T15:00:00',
        status: 'scheduled',
        image: 'https://via.placeholder.com/400x200/10B981/FFFFFF?text=Trend+Analyzer',
        engagement: '1.8K'
      },
      {
        id: 3,
        content: 'Pro tip: The best time to post on social media is when your audience is most active! Use our scheduler to find optimal timing ⏰',
        platforms: ['facebook', 'linkedin'],
        scheduledFor: '2024-01-17T09:00:00',
        status: 'scheduled',
        image: 'https://via.placeholder.com/400x200/F59E0B/FFFFFF?text=Social+Media+Tips',
        engagement: '3.1K'
      }
    ];
    setScheduledPosts(mockPosts);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newPost = {
      id: editingPost ? editingPost.id : Date.now(),
      content: postContent,
      platforms: selectedPlatforms,
      scheduledFor: `${selectedDate}T${selectedTime}:00`,
      status: 'scheduled',
      image: postImage || 'https://via.placeholder.com/400x200/8B5CF6/FFFFFF?text=New+Post',
      engagement: '0'
    };

    if (editingPost) {
      setScheduledPosts(posts => posts.map(post => post.id === editingPost.id ? newPost : post));
      setEditingPost(null);
    } else {
      setScheduledPosts(posts => [...posts, newPost]);
    }

    // Reset form
    setPostContent('');
    setSelectedDate('');
    setSelectedTime('');
    setSelectedPlatforms([]);
    setPostImage(null);
    setShowForm(false);
  };

  const deletePost = (id) => {
    setScheduledPosts(posts => posts.filter(post => post.id !== id));
  };

  const editPost = (post) => {
    setEditingPost(post);
    setPostContent(post.content);
    setSelectedDate(post.scheduledFor.split('T')[0]);
    setSelectedTime(post.scheduledFor.split('T')[1].substring(0, 5));
    setSelectedPlatforms(post.platforms);
    setPostImage(post.image);
    setShowForm(true);
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'scheduled':
        return <Clock className="w-4 h-4 text-blue-500" />;
      case 'published':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'failed':
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      default:
        return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'scheduled':
        return 'Scheduled';
      case 'published':
        return 'Published';
      case 'failed':
        return 'Failed';
      default:
        return 'Unknown';
    }
  };

  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    return date.toLocaleString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Content Scheduler</h2>
        <p className="text-gray-600">Schedule your content across multiple platforms at optimal times for maximum engagement</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Panel - Schedule Form */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-800">Schedule New Post</h3>
              <motion.button
                onClick={() => setShowForm(!showForm)}
                className="p-2 text-gray-400 hover:text-purple-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Plus className="w-5 h-5" />
              </motion.button>
            </div>

            {showForm && (
              <motion.form
                onSubmit={handleSubmit}
                className="space-y-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Post Content</label>
                  <textarea
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                    placeholder="What's on your mind?"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                    <input
                      type="time"
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Platforms</label>
                  <div className="flex flex-wrap gap-2">
                    {platforms.map((platform) => (
                      <button
                        key={platform.id}
                        type="button"
                        onClick={() => {
                          if (selectedPlatforms.includes(platform.id)) {
                            setSelectedPlatforms(selectedPlatforms.filter(p => p !== platform.id));
                          } else {
                            setSelectedPlatforms([...selectedPlatforms, platform.id]);
                          }
                        }}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                          selectedPlatforms.includes(platform.id)
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

                <div className="flex gap-3">
                  <motion.button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {editingPost ? 'Update Post' : 'Schedule Post'}
                  </motion.button>
                  
                  {editingPost && (
                    <motion.button
                      type="button"
                      onClick={() => {
                        setEditingPost(null);
                        setPostContent('');
                        setSelectedDate('');
                        setSelectedTime('');
                        setSelectedPlatforms([]);
                        setPostImage(null);
                      }}
                      className="px-4 py-2 border-2 border-gray-300 text-gray-600 rounded-lg font-medium hover:border-gray-400 hover:text-gray-700 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Cancel
                    </motion.button>
                  )}
                </div>
              </motion.form>
            )}
          </div>

          {/* Optimal Timing Suggestions */}
          <div className="bg-white rounded-xl p-6 shadow-lg mt-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Optimal Posting Times
            </h3>
            <div className="space-y-3">
              {optimalTimes.map((timeSlot) => (
                <div key={timeSlot.time} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-purple-500" />
                    <span className="font-medium">{timeSlot.time}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">{timeSlot.description}</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      timeSlot.engagement === 'Very High' ? 'bg-green-100 text-green-700' :
                      timeSlot.engagement === 'High' ? 'bg-blue-100 text-blue-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {timeSlot.engagement}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel - Scheduled Posts */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-6 text-gray-800 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Scheduled Posts
            </h3>

            {scheduledPosts.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <Calendar className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>No posts scheduled yet</p>
                <p className="text-sm">Create your first scheduled post to get started</p>
              </div>
            ) : (
              <div className="space-y-4">
                {scheduledPosts.map((post) => (
                  <motion.div
                    key={post.id}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -2 }}
                  >
                    <div className="flex items-start gap-4">
                      <img 
                        src={post.image} 
                        alt="Post preview"
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            {getStatusIcon(post.status)}
                            <span className="text-sm font-medium text-gray-600">
                              {getStatusText(post.status)}
                            </span>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-500">
                              {formatDateTime(post.scheduledFor)}
                            </span>
                            <div className="flex gap-1">
                              <motion.button
                                onClick={() => editPost(post)}
                                className="p-1 text-gray-400 hover:text-blue-500 transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <Edit className="w-4 h-4" />
                              </motion.button>
                              <motion.button
                                onClick={() => deletePost(post.id)}
                                className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <Trash2 className="w-4 h-4" />
                              </motion.button>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-gray-800 mb-3">{post.content}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex gap-2">
                            {post.platforms.map((platformId) => {
                              const platform = platforms.find(p => p.id === platformId);
                              if (platform) {
                                const Icon = platform.icon;
                                return (
                                  <div
                                    key={platformId}
                                    className={`p-2 rounded-lg bg-gradient-to-r ${platform.color} text-white`}
                                  >
                                    <Icon className="w-4 h-4" />
                                  </div>
                                );
                              }
                              return null;
                            })}
                          </div>
                          
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <BarChart3 className="w-4 h-4" />
                            {post.engagement} engagement
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
