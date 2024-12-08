import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Tag, Store, Calendar, Star } from 'lucide-react';

export default function SearchFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFilterChange = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Filter Results</h3>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <div className="flex items-center">
                <Tag className="w-4 h-4 mr-2" />
                Deal Type
              </div>
            </label>
            <select
              value={searchParams.get('type') || ''}
              onChange={(e) => handleFilterChange('type', e.target.value)}
              className="w-full border-gray-300 rounded-md shadow-sm"
            >
              <option value="">All Types</option>
              <option value="code">Coupon Codes</option>
              <option value="deal">Special Deals</option>
              <option value="cashback">Cash Back</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <div className="flex items-center">
                <Store className="w-4 h-4 mr-2" />
                Store Category
              </div>
            </label>
            <select
              value={searchParams.get('category') || ''}
              onChange={(e) => handleFilterChange('category', e.target.value)}
              className="w-full border-gray-300 rounded-md shadow-sm"
            >
              <option value="">All Categories</option>
              <option value="fashion">Fashion</option>
              <option value="electronics">Electronics</option>
              <option value="travel">Travel</option>
              <option value="food">Food & Dining</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Expiry
              </div>
            </label>
            <select
              value={searchParams.get('expiry') || ''}
              onChange={(e) => handleFilterChange('expiry', e.target.value)}
              className="w-full border-gray-300 rounded-md shadow-sm"
            >
              <option value="">Any Time</option>
              <option value="today">Ending Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-2" />
                Minimum Rating
              </div>
            </label>
            <select
              value={searchParams.get('rating') || ''}
              onChange={(e) => handleFilterChange('rating', e.target.value)}
              className="w-full border-gray-300 rounded-md shadow-sm"
            >
              <option value="">Any Rating</option>
              <option value="4">4+ Stars</option>
              <option value="3">3+ Stars</option>
              <option value="2">2+ Stars</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}