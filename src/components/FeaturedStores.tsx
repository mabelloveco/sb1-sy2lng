import React, { useState } from 'react';
import { ExternalLink, Percent, Search, TrendingUp } from 'lucide-react';

const featuredStores = [
  {
    id: '1',
    name: 'Nike',
    logo: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop',
    cashback: '8%',
    description: 'Plus up to 2x Member Rewards',
    categories: ['Fashion', 'Sports', 'Shoes'],
    popular: true,
    trending: true
  },
  {
    id: '2',
    name: 'Amazon',
    logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&h=100&fit=crop',
    cashback: '5%',
    description: 'Limited time offer',
    categories: ['Electronics', 'Fashion', 'Home'],
    popular: true,
    trending: false
  },
  {
    id: '3',
    name: 'Best Buy',
    logo: 'https://images.unsplash.com/photo-1601524909162-ae8725290836?w=100&h=100&fit=crop',
    cashback: '2%',
    description: 'Plus exclusive deals',
    categories: ['Electronics', 'Tech'],
    popular: false,
    trending: true
  }
];

export default function FeaturedStores() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const allCategories = Array.from(
    new Set(featuredStores.flatMap(store => store.categories))
  ).sort();

  const filteredStores = featuredStores.filter(store => {
    const matchesSearch = store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      store.categories.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = !selectedCategory || store.categories.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Featured Stores</h2>
            <p className="mt-1 text-gray-600">Earn cash back at your favorite retailers</p>
          </div>
          
          <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1 sm:flex-none">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search stores..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
              !selectedCategory
                ? 'bg-indigo-100 text-indigo-800'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            All
          </button>
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-indigo-100 text-indigo-800'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredStores.map((store) => (
            <div
              key={store.id}
              className="relative group bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-all duration-200"
            >
              <div className="flex gap-2 absolute top-4 right-4">
                {store.popular && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                    Popular
                  </span>
                )}
                {store.trending && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    Trending
                  </span>
                )}
              </div>
              
              <div className="flex items-center space-x-4">
                <img
                  src={store.logo}
                  alt={store.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{store.name}</h3>
                  <div className="flex items-center mt-1">
                    <Percent className="h-4 w-4 text-green-600 mr-1" />
                    <span className="text-green-600 font-medium">{store.cashback} Cash Back</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{store.description}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {store.categories.map((category) => (
                  <span
                    key={category}
                    className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800"
                  >
                    {category}
                  </span>
                ))}
              </div>
              
              <button className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200">
                Shop Now
                <ExternalLink className="ml-2 h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}