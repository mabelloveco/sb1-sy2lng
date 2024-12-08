import React from 'react';
import { ExternalLink, Star } from 'lucide-react';
import { Store } from '../../types';
import AnimatedCard from '../ui/AnimatedCard';

interface StoreGridProps {
  stores: Store[];
}

export default function StoreGrid({ stores }: StoreGridProps) {
  if (!stores.length) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No stores available in this category yet.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {stores.map((store, index) => (
        <AnimatedCard key={store.id} delay={index * 0.1}>
          <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-6">
            <div className="aspect-w-1 aspect-h-1 mb-4">
              <img
                src={store.logo}
                alt={store.name}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {store.name}
            </h3>

            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-500">
                <Star className="w-4 h-4 mr-1 text-yellow-400" />
                Up to {store.averageSavings} savings
              </div>
              <div className="text-sm text-gray-500">
                {store.totalCoupons} active coupons
              </div>
            </div>

            <button className="w-full flex items-center justify-center bg-gray-100 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors duration-200">
              View Store
              <ExternalLink className="w-4 h-4 ml-2" />
            </button>

            <div className="mt-4 text-xs text-gray-500">
              Updated {store.lastUpdated}
            </div>
          </div>
        </AnimatedCard>
      ))}
    </div>
  );
}