import React from 'react';
import { motion } from 'framer-motion';

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center p-8">
      <motion.div
        className="w-12 h-12 border-4 border-indigo-200 rounded-full"
        style={{ borderTopColor: '#6366f1' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
}