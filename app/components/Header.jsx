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

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

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
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                SmartMeme
              </h1>
              <p className="text-xs text-gray-500">AI-Powered Content</p>
                        </div>
                    </motion.div>

                    {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
                            <motion.a
                key={item.name}
                                href={item.href}
                className="text-gray-600 hover:text-purple-600 font-medium transition-colors duration-300"
                                whileHover={{ y: -2 }}
                            >
                {item.name}
                            </motion.a>
                        ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Notifications */}
            <motion.button
              className="p-2 text-gray-400 hover:text-purple-600 transition-colors duration-300 relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </motion.button>

            {/* Profile Menu */}
            <div className="relative">
              <motion.button
                onClick={toggleProfile}
                className="flex items-center gap-2 p-2 text-gray-600 hover:text-purple-600 transition-colors duration-300 rounded-lg hover:bg-gray-100"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                    </div>
                <span className="hidden sm:block font-medium">John Doe</span>
              </motion.button>

              {/* Profile Dropdown */}
              {isProfileOpen && (
                <motion.div
                  className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href="#profile"
                    className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <User className="w-4 h-4" />
                    Profile
                  </a>
                  <a
                    href="#settings"
                    className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Settings className="w-4 h-4" />
                    Settings
                  </a>
                  <a
                    href="#help"
                    className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <HelpCircle className="w-4 h-4" />
                    Help & Support
                  </a>
                  <a
                    href="#docs"
                    className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <BookOpen className="w-4 h-4" />
                    Documentation
                  </a>
                  <hr className="my-2" />
                  <a
                    href="#logout"
                    className="flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 transition-colors duration-200"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </a>
                        </motion.div>
              )}
                    </div>

                    {/* Mobile Menu Button */}
            <motion.button
              onClick={toggleMenu}
              className="md:hidden p-2 text-gray-600 hover:text-purple-600 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
                </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
                <motion.div
            className="md:hidden border-t border-gray-200 py-4"
                    initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                                href={item.href}
                  className="text-gray-600 hover:text-purple-600 font-medium transition-colors duration-300 px-4 py-2 hover:bg-gray-50 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
                    </motion.div>
        )}
            </div>
    </header>
    );
}
