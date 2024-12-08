import React from 'react';
import { Star, Users, Clock, ExternalLink } from 'lucide-react';
import { Store } from '../../types';

interface StoreHeaderProps {
  store: Store;
}

export default function StoreHeader({ store }: StoreHeaderProps) {
  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-6">
          <img
            src={store.logo}
            alt={store.name}
            className="w-24 h-24 object-contain rounded-lg"
          />
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900">{store.name}</h1>
            <div className="mt-2 flex items-center gap-4">
              <div className="flex items-center text-sm text-gray-500">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                {store.rating} ({store.reviewCount} reviews)
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Users className="w-4 h-4 mr-1" />
                {store.activeUsers} active users
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-1" />
                Updated {store.lastUpdated}
              </div>
            </div>
          </div>
          <a
            href={store.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Visit Store
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}