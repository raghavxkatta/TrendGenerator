'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Menu, 
  X, 
  Sparkles, 
  Bell, 
  User, 
  Settings,
  LogOut,
  HelpCircle,
  BookOpen
} from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useMobile } from '../hooks/useMobile';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { isMobile, isTablet } = useMobile();

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-lg dark:shadow-gray-900/50 sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 md:gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg md:rounded-xl flex items-center justify-center">
              <Sparkles className="w-4 h-4 md:w-6 md:h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                SmartMeme
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400 hidden sm:block">AI-Powered Content</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navigation.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* Notifications - Hidden on very small screens */}
            {!isMobile && (
              <motion.button
                className="p-2 text-gray-400 dark:text-gray-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Bell className="w-4 h-4 md:w-5 md:h-5" />
                <span className="absolute -top-1 -right-1 w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full"></span>
              </motion.button>
            )}

            {/* Profile Menu */}
            <div className="relative">
              <motion.button
                onClick={toggleProfile}
                className="flex items-center gap-1 md:gap-2 p-1 md:p-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <User className="w-3 h-3 md:w-4 md:h-4 text-white" />
                </div>
                <span className="hidden sm:block font-medium text-sm md:text-base">John Doe</span>
              </motion.button>

              {/* Profile Dropdown */}
              {isProfileOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl dark:shadow-gray-900/50 border border-gray-200 dark:border-gray-700 py-2 z-50"
                >
                  <a
                    href="#profile"
                    className="flex items-center gap-3 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 text-sm"
                  >
                    <User className="w-4 h-4" />
                    Profile
                  </a>
                  <a
                    href="#settings"
                    className="flex items-center gap-3 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 text-sm"
                  >
                    <Settings className="w-4 h-4" />
                    Settings
                  </a>
                  <a
                    href="#help"
                    className="flex items-center gap-3 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 text-sm"
                  >
                    <HelpCircle className="w-4 h-4" />
                    Help
                  </a>
                  <a
                    href="#docs"
                    className="flex items-center gap-3 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 text-sm"
                  >
                    <BookOpen className="w-4 h-4" />
                    Documentation
                  </a>
                  <hr className="my-2 border-gray-200 dark:border-gray-700" />
                  <a
                    href="#logout"
                    className="flex items-center gap-3 px-4 py-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200 text-sm"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </a>
                </motion.div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
          >
            <nav className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              {/* Mobile Profile Actions */}
              <div className="pt-3 border-t border-gray-200 dark:border-gray-700 space-y-3">
                <a
                  href="#profile"
                  className="flex items-center gap-3 px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="w-4 h-4" />
                  Profile
                </a>
                <a
                  href="#settings"
                  className="flex items-center gap-3 px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Settings className="w-4 h-4" />
                  Settings
                </a>
                <a
                  href="#logout"
                  className="flex items-center gap-3 px-4 py-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}
