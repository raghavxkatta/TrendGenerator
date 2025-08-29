'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
        <Sun className="w-5 h-5 text-white" />
      </div>
    );
  }

  const themes = [
    { name: 'light', icon: Sun, label: 'Light' },
    { name: 'dark', icon: Moon, label: 'Dark' },
    { name: 'system', icon: Monitor, label: 'System' }
  ];

  const currentTheme = themes.find(t => t.name === theme) || themes[2];

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center text-white hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <currentTheme.icon className="w-5 h-5" />
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-xl dark:shadow-slate-900/50 border border-slate-200 dark:border-slate-700 py-2 z-50"
        >
          {themes.map((themeOption) => {
            const Icon = themeOption.icon;
            return (
              <button
                key={themeOption.name}
                onClick={() => {
                  setTheme(themeOption.name);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-200 ${
                  theme === themeOption.name
                    ? 'text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-900/20'
                    : 'text-slate-700 dark:text-slate-300'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{themeOption.label}</span>
                {theme === themeOption.name && (
                  <motion.div
                    layoutId="activeTheme"
                    className="w-2 h-2 bg-pink-500 rounded-full ml-auto"
                  />
                )}
              </button>
            );
          })}
        </motion.div>
      )}

      {/* Backdrop to close dropdown */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
