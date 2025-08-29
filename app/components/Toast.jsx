'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle, AlertTriangle, Info } from 'lucide-react';
import { useToast } from '../hooks/useToast';

const toastTypes = {
  success: {
    icon: CheckCircle,
    bgColor: 'bg-green-500',
    textColor: 'text-green-800',
    borderColor: 'border-green-200',
    iconColor: 'text-green-600'
  },
  error: {
    icon: AlertCircle,
    bgColor: 'bg-red-500',
    textColor: 'text-red-800',
    borderColor: 'border-red-200',
    iconColor: 'text-red-600'
  },
  warning: {
    icon: AlertTriangle,
    bgColor: 'bg-yellow-500',
    textColor: 'text-yellow-800',
    borderColor: 'border-yellow-200',
    iconColor: 'text-yellow-600'
  },
  info: {
    icon: Info,
    bgColor: 'bg-blue-500',
    textColor: 'text-blue-800',
    borderColor: 'border-blue-200',
    iconColor: 'text-blue-600'
  }
};

export default function ToastContainer() {
  const { toasts, removeToast } = useToast();

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      <AnimatePresence>
        {toasts.map((toast) => {
          const type = toastTypes[toast.type];
          const Icon = type.icon;

          return (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 300, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 300, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`min-w-[320px] max-w-[400px] p-4 rounded-lg shadow-lg border ${type.bgColor} ${type.textColor} ${type.borderColor} backdrop-blur-sm`}
            >
              <div className="flex items-start gap-3">
                <Icon className={`w-5 h-5 ${type.iconColor} flex-shrink-0 mt-0.5`} />
                <div className="flex-1 min-w-0">
                  {toast.title && (
                    <h4 className="font-semibold text-sm mb-1">{toast.title}</h4>
                  )}
                  {toast.message && (
                    <p className="text-sm opacity-90">{toast.message}</p>
                  )}
                </div>
                <button
                  onClick={() => removeToast(toast.id)}
                  className="flex-shrink-0 w-5 h-5 rounded-full hover:bg-black/10 transition-colors duration-200 flex items-center justify-center"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
