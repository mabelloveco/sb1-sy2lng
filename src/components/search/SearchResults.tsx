import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Store, Tag, Percent, TrendingUp } from 'lucide-react';
import { SearchResult } from '../../types/search';
import LoadingSpinner from '../ui/LoadingSpinner';

interface SearchResultsProps {
  query: string;
  results: SearchResult[];
  isLoading: boolean;
  error: string | null;
  onClose: () => void;
}

export default function SearchResults({
  query,
  results,
  isLoading,
  error,
  onClose
}: SearchResultsProps) {
  const navigate = useNavigate();

  const handleSelect = (result: SearchResult) => {
    onClose();
    navigate(result.url);
  };

  if (isLoading) {
    return (
      <div className="p-4">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-center text-red-600">
        {error}
      </div>
    );
  }

  if (query.length < 3) {
    return (
      <div className="p-4 text-center text-gray-500">
        Type at least 3 characters to search
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">
        No results found for "{query}"
      </div>
    );
  }

  return (
    <div className="max-h-[70vh] overflow-y-auto">
      {results.map((result) => (
        <button
          key={result.id}
          onClick={() => handleSelect(result)}
          className="w-full px-4 py-3 flex items-start hover:bg-gray-50 transition-colors duration-150"
        >
          <div className="flex-shrink-0 p-2 bg-indigo-100 rounded-lg">
            {result.type === 'store' && <Store className="h-5 w-5 text-indigo-600" />}
            {result.type === 'category' && <Tag className="h-5 w-5 text-indigo-600" />}
            {result.type === 'coupon' && <Percent className="h-5 w-5 text-indigo-600" />}
          </div>
          <div className="ml-4 text-left">
            <h4 className="text-sm font-medium text-gray-900">{result.title}</h4>
            <p className="mt-1 text-sm text-gray-500">{result.description}</p>
            {result.trending && (
              <div className="mt-1 flex items-center text-xs text-green-600">
                <TrendingUp className="h-4 w-4 mr-1" />
                Trending
              </div>
            )}
          </div>
        </button>
      ))}
    </div>
  );
}