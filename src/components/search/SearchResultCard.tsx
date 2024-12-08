import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Tag, Store, Percent, TrendingUp, ThumbsUp } from 'lucide-react';
import { SearchResult } from '../../types/search';

interface SearchResultCardProps {
  result: SearchResult;
}

export default function SearchResultCard({ result }: SearchResultCardProps) {
  const navigate = useNavigate();

  const getIcon = () => {
    switch (result.type) {
      case 'store':
        return <Store className="w-5 h-5 text-indigo-600" />;
      case 'category':
        return <Tag className="w-5 h-5 text-indigo-600" />;
      case 'coupon':
        return <Percent className="w-5 h-5 text-indigo-600" />;
      default:
        return null;
    }
  };

  return (
    <div 
      onClick={() => navigate(result.url)}
      className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-200 cursor-pointer"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 p-2 bg-indigo-50 rounded-lg">
          {getIcon()}
        </div>
        
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {result.title}
              </h3>
              <p className="mt-1 text-gray-600">{result.description}</p>
            </div>
            {result.trending && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                <TrendingUp className="w-3 h-3 mr-1" />
                Trending
              </span>
            )}
          </div>

          <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
            {result.successRate && (
              <div className="flex items-center">
                <ThumbsUp className="w-4 h-4 mr-1" />
                {result.successRate}% success rate
              </div>
            )}
            {result.lastVerified && (
              <div>
                Verified {result.lastVerified}
              </div>
            )}
          </div>
        </div>

        <div className="flex-shrink-0">
          <ExternalLink className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </div>
  );
}