import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Tag, Percent, Users } from 'lucide-react';

interface CategoryStatsProps {
  category: {
    totalStores: number;
    totalCoupons: number;
    averageSavings: string;
    activeUsers: number;
  };
}

export default function CategoryStats({ category }: CategoryStatsProps) {
  const stats = [
    {
      icon: ShoppingBag,
      label: 'Active Stores',
      value: category.totalStores
    },
    {
      icon: Tag,
      label: 'Available Coupons',
      value: category.totalCoupons
    },
    {
      icon: Percent,
      label: 'Average Savings',
      value: category.averageSavings
    },
    {
      icon: Users,
      label: 'Active Users',
      value: category.activeUsers.toLocaleString()
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-sm p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <Icon className="h-6 w-6 text-indigo-600" />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">
              {stat.value}
            </div>
            <div className="text-sm text-gray-500">{stat.label}</div>
          </motion.div>
        );
      })}
    </div>
  );
}