'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { Sun, Moon, Monitor } from 'lucide-react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse" />
    );
  }

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else if (theme === 'light') {
      setTheme('system');
    } else {
      setTheme('dark');
    }
  };

  const getIcon = () => {
    switch (theme) {
      case 'dark':
        return <Moon className="w-4 h-4" />;
      case 'light':
        return <Sun className="w-4 h-4" />;
      default:
        return <Monitor className="w-4 h-4" />;
    }
  };

  const getTooltip = () => {
    switch (theme) {
      case 'dark':
        return 'Switch to Light Mode';
      case 'light':
        return 'Switch to System Mode';
      default:
        return 'Switch to Dark Mode';
    }
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={getTooltip()}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-center"
      >
        {getIcon()}
      </motion.div>
      
      {/* Hover effect ring */}
      <motion.div
        className="absolute inset-0 rounded-lg border-2 border-transparent"
        initial={{ scale: 0.8, opacity: 0 }}
        whileHover={{ 
          scale: 1.1, 
          opacity: 1,
          borderColor: theme === 'dark' ? '#8b5cf6' : '#3b82f6'
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  );
}
