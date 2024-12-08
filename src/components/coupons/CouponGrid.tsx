import React from 'react';
import { motion } from 'framer-motion';
import { Tag, Clock, ThumbsUp } from 'lucide-react';
import { Coupon } from '../../types';
import CouponCard from './CouponCard';

interface CouponGridProps {
  coupons: Coupon[];
}

export default function CouponGrid({ coupons }: CouponGridProps) {
  if (!coupons.length) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No coupons available in this category yet.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {coupons.map((coupon, index) => (
        <motion.div
          key={coupon.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <CouponCard coupon={coupon} />
        </motion.div>
      ))}
    </div>
  );
}