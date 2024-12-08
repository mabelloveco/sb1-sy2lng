import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal } from 'lucide-react';
import SearchFilters from '../components/search/SearchFilters';
import SearchResultsList from '../components/search/SearchResultsList';
import SearchSuggestions from '../components/search/SearchSuggestions';
import { useSearch } from '../hooks/useSearch';
import LoadingSpinner from '../components/ui/LoadingSpinner';

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [showFilters, setShowFilters] = useState(false);
  const { results, isLoading, error } = useSearch(query);

  if (!query) {
    return <SearchSuggestions />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Search Results for "{query}"
            </h1>
            <p className="mt-1 text-gray-600">
              {results.length} results found
            </p>
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            <SlidersHorizontal className="w-4 h-4 mr-2" />
            Filters
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {showFilters && (
            <div className="lg:col-span-1">
              <SearchFilters />
            </div>
          )}
          <div className={showFilters ? 'lg:col-span-3' : 'lg:col-span-4'}>
            {isLoading ? (
              <LoadingSpinner />
            ) : error ? (
              <div className="text-center text-red-600 py-8">{error}</div>
            ) : (
              <SearchResultsList results={results} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}