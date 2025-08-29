'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { createContext, useContext } from 'react';
import { useToast } from '../hooks/useToast';

const ToastContext = createContext();

export const useToastContext = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToastContext must be used within a ToastProvider');
  }
  return context;
};

export function ThemeProvider({ children }) {
  const toast = useToast();

  return (
    <ToastContext.Provider value={toast}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </NextThemesProvider>
    </ToastContext.Provider>
  );
}
