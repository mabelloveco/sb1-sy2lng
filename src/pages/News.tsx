import React, { useState } from 'react';
import { Search, Filter, Calendar, Tag, TrendingUp, BookmarkPlus, Share2 } from 'lucide-react';
import NewsCard from '../components/news/NewsCard';
import NewsCategories from '../components/news/NewsCategories';
import TrendingArticles from '../components/news/TrendingArticles';
import { useNews } from '../hooks/useNews';

export default function News() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { articles, isLoading } = useNews(selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Money-Saving Tips & Guides</h1>
            <p className="mt-2 text-gray-600">Expert advice to help you save more on your purchases</p>
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
            Subscribe to Newsletter
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>

            <NewsCategories
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />

            <TrendingArticles />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {isLoading ? (
              <div className="text-center py-8">Loading articles...</div>
            ) : (
              <div className="grid gap-6">
                {articles.map((article) => (
                  <NewsCard key={article.id} article={article} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}