import React from 'react';
import { TrendingUp, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const trendingArticles = [
  {
    id: '1',
    title: '10 Secret Ways to Stack Coupons',
    views: '2.5k',
    date: '2 days ago'
  },
  {
    id: '2',
    title: 'Best Time to Shop Online for Maximum Savings',
    views: '1.8k',
    date: '3 days ago'
  },
  {
    id: '3',
    title: 'How to Earn Cash Back on Every Purchase',
    views: '1.2k',
    date: '4 days ago'
  }
];

export default function TrendingArticles() {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <TrendingUp className="w-5 h-5 mr-2 text-indigo-600" />
        Trending Articles
      </h2>
      <div className="space-y-4">
        {trendingArticles.map((article) => (
          <button
            key={article.id}
            onClick={() => navigate(`/news/${article.id}`)}
            className="w-full text-left group"
          >
            <h3 className="text-sm font-medium text-gray-900 group-hover:text-indigo-600">
              {article.title}
            </h3>
            <div className="mt-1 flex items-center text-xs text-gray-500">
              <span>{article.views} views</span>
              <span className="mx-2">•</span>
              <span>{article.date}</span>
            </div>
          </button>
        ))}
      </div>
      <button
        onClick={() => navigate('/news')}
        className="mt-4 w-full flex items-center justify-center text-sm text-indigo-600 hover:text-indigo-700 font-medium"
      >
        View All Articles
        <ArrowRight className="w-4 h-4 ml-1" />
      </button>
    </div>
  );
}