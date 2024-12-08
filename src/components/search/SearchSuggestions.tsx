import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, TrendingUp, Clock } from 'lucide-react';

const popularSearches = [
  'Electronics deals',
  'Fashion coupons',
  'Travel discounts',
  'Food delivery',
  'Home & garden',
  'Beauty deals'
];

const recentSearches = [
  'Nike shoes',
  'Amazon deals',
  'Best Buy coupons',
  'Flight tickets'
];

export default function SearchSuggestions() {
  const navigate = useNavigate();

  const handleSearch = (term: string) => {
    navigate(`/search?q=${encodeURIComponent(term)}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="mb-8">
            <div className="flex items-center text-lg font-medium text-gray-900 mb-4">
              <TrendingUp className="w-5 h-5 mr-2 text-indigo-600" />
              Popular Searches
            </div>
            <div className="grid grid-cols-2 gap-2">
              {popularSearches.map((term) => (
                <button
                  key={term}
                  onClick={() => handleSearch(term)}
                  className="flex items-center px-4 py-2 text-sm text-gray-700 bg-gray-50 rounded-md hover:bg-gray-100"
                >
                  <Search className="w-4 h-4 mr-2 text-gray-400" />
                  {term}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center text-lg font-medium text-gray-900 mb-4">
              <Clock className="w-5 h-5 mr-2 text-indigo-600" />
              Recent Searches
            </div>
            <div className="grid grid-cols-2 gap-2">
              {recentSearches.map((term) => (
                <button
                  key={term}
                  onClick={() => handleSearch(term)}
                  className="flex items-center px-4 py-2 text-sm text-gray-700 bg-gray-50 rounded-md hover:bg-gray-100"
                >
                  <Search className="w-4 h-4 mr-2 text-gray-400" />
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}