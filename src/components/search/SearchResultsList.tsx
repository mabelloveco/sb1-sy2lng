import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowUpDown } from 'lucide-react';
import { SearchResult } from '../../types/search';
import SearchResultCard from './SearchResultCard';

interface SearchResultsListProps {
  results: SearchResult[];
}

export default function SearchResultsList({ results }: SearchResultsListProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSortChange = (value: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('sort', value);
    setSearchParams(newParams);
  };

  return (
    <div>
      <div className="flex justify-end mb-4">
        <div className="flex items-center">
          <ArrowUpDown className="w-4 h-4 text-gray-400 mr-2" />
          <select
            value={searchParams.get('sort') || 'relevance'}
            onChange={(e) => handleSortChange(e.target.value)}
            className="text-sm border-gray-300 rounded-md"
          >
            <option value="relevance">Most Relevant</option>
            <option value="newest">Newest First</option>
            <option value="popular">Most Popular</option>
            <option value="savings">Highest Savings</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {results.length > 0 ? (
          results.map((result) => (
            <SearchResultCard key={result.id} result={result} />
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            No results found. Try adjusting your filters or search terms.
          </div>
        )}
      </div>
    </div>
  );
}