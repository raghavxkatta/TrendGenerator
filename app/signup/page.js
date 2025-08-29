'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Eye, EyeOff, Mail, Lock, User, ArrowRight, CheckCircle, Twitter, Instagram, Github, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useMobile } from '../hooks/useMobile';

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const { isMobile, isTablet } = useMobile();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    if (!formData.agreeToTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate signup process
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to dashboard after successful signup
      window.location.href = '/dashboard';
    }, 2000);
  };

  const socialSignups = [
    { icon: Twitter, label: 'Twitter', color: 'from-blue-400 to-blue-600' },
    { icon: Instagram, label: 'Instagram', color: 'from-pink-400 to-purple-600' },
    { icon: Github, label: 'GitHub', color: 'from-gray-600 to-gray-800' }
  ];

  const benefits = [
    'AI-powered meme generation',
    'Real-time trend analysis',
    'Multi-platform scheduling',
    'Advanced analytics dashboard',
    '24/7 trend monitoring',
    'Custom meme templates'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-950 to-blue-950 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {/* Left Side - Benefits */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden lg:block"
        >
          <div className="h-full flex flex-col justify-center">
            {/* Logo */}
            <div className="text-center mb-6 md:mb-8">
              <Link href="/" className="inline-flex items-center space-x-2 md:space-x-3 group">
                <motion.div 
                  className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Zap className="w-7 h-7 md:w-9 md:h-9 text-white" />
                </motion.div>
                <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                  MemeGen
                </span>
              </Link>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
              Join the Future of{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Content Creation
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed">
              Start creating viral content today with our AI-powered platform. Join thousands of creators who are already dominating social media.
            </p>

            {/* Benefits List */}
            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-2 md:gap-3 text-gray-300"
                >
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </div>
                  <span className="text-base md:text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-6">
              {[
                { value: '10K+', label: 'Active Users' },
                { value: '500+', label: 'Templates' },
                { value: '98%', label: 'Satisfaction' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side - Signup Form */}
        <div className="flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-sm md:max-w-md"
          >
            {/* Mobile Logo */}
            <div className="text-center mb-6 md:mb-8 lg:hidden">
              <Link href="/" className="inline-flex items-center space-x-2 md:space-x-3 group">
                <motion.div 
                  className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg md:rounded-xl flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Zap className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </motion.div>
                <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                  MemeGen
                </span>
              </Link>
            </div>

            {/* Signup Card */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 border border-purple-500/20 shadow-2xl">
              <div className="text-center mb-6 md:mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Create Account</h2>
                <p className="text-gray-400 text-sm md:text-base">Start your journey to viral content</p>
              </div>

              {/* Social Signup Buttons */}
              <div className="space-y-3 mb-6 md:mb-8">
                {socialSignups.map((social, index) => (
                  <motion.button
                    key={social.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-2.5 md:py-3 px-4 rounded-lg md:rounded-xl bg-gradient-to-r ${social.color} text-white font-medium flex items-center justify-center gap-2 md:gap-3 hover:shadow-lg transition-all duration-300 group text-sm md:text-base`}
                  >
                    <social.icon className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="hidden sm:block">Continue with {social.label}</span>
                    <span className="sm:hidden">{social.label}</span>
                  </motion.button>
                ))}
              </div>

              {/* Divider */}
              <div className="relative mb-6 md:mb-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-800 text-gray-400 text-xs md:text-sm">Or sign up with email</span>
                </div>
              </div>

              {/* Signup Form */}
              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      First Name
                    </label>
                    <div className="relative group">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400 group-focus-within:text-purple-400 transition-colors duration-300" />
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-2.5 md:py-3 bg-gray-700/50 border border-gray-600 rounded-lg md:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-sm md:text-base"
                        placeholder="First name"
                      />
                      <div className="absolute inset-0 rounded-lg md:rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name
                    </label>
                    <div className="relative group">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400 group-focus-within:text-purple-400 transition-colors duration-300" />
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-2.5 md:py-3 bg-gray-700/50 border border-gray-600 rounded-lg md:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-sm md:text-base"
                        placeholder="Last name"
                      />
                      <div className="absolute inset-0 rounded-lg md:rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </motion.div>
                </div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative group">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400 group-focus-within:text-purple-400 transition-colors duration-300" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-2.5 md:py-3 bg-gray-700/50 border border-gray-600 rounded-lg md:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-sm md:text-base"
                      placeholder="Enter your email"
                    />
                    <div className="absolute inset-0 rounded-lg md:rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </motion.div>

                {/* Password */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Password
                  </label>
                  <div className="relative group">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400 group-focus-within:text-purple-400 transition-colors duration-300" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-12 py-2.5 md:py-3 bg-gray-700/50 border border-gray-600 rounded-lg md:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-sm md:text-base"
                      placeholder="Create a password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4 md:w-5 md:h-5" /> : <Eye className="w-4 h-4 md:w-5 md:h-5" />}
                    </button>
                    <div className="absolute inset-0 rounded-lg md:rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </motion.div>

                {/* Confirm Password */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative group">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400 group-focus-within:text-purple-400 transition-colors duration-300" />
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-12 py-2.5 md:py-3 bg-gray-700/50 border border-gray-600 rounded-lg md:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-sm md:text-base"
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {showConfirmPassword ? <EyeOff className="w-4 h-4 md:w-5 md:h-5" /> : <Eye className="w-4 h-4 md:w-5 md:h-5" />}
                    </button>
                    <div className="absolute inset-0 rounded-lg md:rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </motion.div>

                {/* Terms */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  className="flex items-start gap-3"
                >
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-purple-500 bg-gray-700 border-gray-600 rounded focus:ring-purple-500 focus:ring-2 mt-1"
                  />
                  <label className="text-xs md:text-sm text-gray-300">
                    I agree to the{' '}
                    <Link href="/terms" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link href="/privacy" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
                      Privacy Policy
                    </Link>
                  </label>
                </motion.div>

                {/* Signup Button */}
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-2.5 md:py-3 px-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-lg md:rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 md:gap-3 group mt-4 md:mt-6 text-sm md:text-base"
                >
                  {isLoading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 md:w-5 md:h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Creating account...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform duration-300" />
                      Create Account
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </motion.button>
              </form>

              {/* Sign In Link */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="text-center mt-6 md:mt-8"
              >
                <p className="text-gray-400 text-sm md:text-base">
                  Already have an account?{' '}
                  <Link href="/login" className="text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300 hover:underline">
                    Sign in here
                  </Link>
                </p>
              </motion.div>
            </div>

            {/* Back to Home */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="text-center mt-4 md:mt-6"
            >
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 group text-sm md:text-base"
              >
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4 rotate-180 group-hover:-translate-x-1 transition-transform duration-300" />
                Back to Home
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-60 h-60 md:w-80 md:h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-60 h-60 md:w-80 md:h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
    </div>
  );
}
