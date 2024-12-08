import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CategoryGrid from '../components/categories/CategoryGrid';
import CategoryFeatured from '../components/categories/CategoryFeatured';
import CategoryTrending from '../components/categories/CategoryTrending';

export default function Categories() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="text-center mb-12"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Browse Categories
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find the best deals and coupons in your favorite shopping categories
          </p>
        </motion.div>

        <CategoryFeatured />
        
        <div ref={ref}>
          {inView && (
            <>
              <CategoryGrid />
              <CategoryTrending />
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}