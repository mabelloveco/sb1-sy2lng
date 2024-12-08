import React from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { useCategory } from '../hooks/useCategory';
import CouponGrid from '../components/coupons/CouponGrid';
import StoreGrid from '../components/stores/StoreGrid';
import CategoryStats from '../components/categories/CategoryStats';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import ErrorMessage from '../components/ui/ErrorMessage';

export default function CategoryDetail() {
  const { slug } = useParams();
  const { category, isLoading, error, refetch } = useCategory(slug);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} onRetry={refetch} />;
  if (!category) return <ErrorMessage message="Category not found" />;

  return (
    <motion.div
      className="min-h-screen bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{category.name}</h1>
          <p className="text-lg text-gray-600 max-w-3xl">{category.description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <CategoryStats category={category} />
        </motion.div>
        
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Top Stores</h2>
          <StoreGrid stores={category.stores} />
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Coupons</h2>
          <CouponGrid coupons={category.coupons} />
        </motion.div>
      </div>
    </motion.div>
  );
}