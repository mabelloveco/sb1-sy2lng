import { useState, useEffect } from 'react';
import { SearchResult } from '../types/search';

export function useSearch(query: string) {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResults = async () => {
      if (query.length < 2) {
        setResults([]);
        return;
      }

      try {
        setIsLoading(true);
        setError(null);
        
        // This would be an API call in production
        // For now, using mock data
        const mockResults: SearchResult[] = [
          {
            id: '1',
            type: 'store',
            title: 'Nike',
            description: 'Athletic wear and shoes',
            url: '/stores/nike',
            trending: true,
            successRate: '95%',
            lastVerified: '2 hours ago'
          },
          {
            id: '2',
            type: 'category',
            title: 'Electronics',
            description: '2,500+ deals available',
            url: '/categories/electronics',
            trending: false
          },
          {
            id: '3',
            type: 'coupon',
            title: '20% off at Amazon',
            description: 'Valid on electronics and home items',
            url: '/coupons/amazon-20-off',
            successRate: '88%',
            lastVerified: '1 hour ago'
          }
        ].filter(result => 
          result.title.toLowerCase().includes(query.toLowerCase()) ||
          result.description.toLowerCase().includes(query.toLowerCase())
        );

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        setResults(mockResults);
      } catch (err) {
        setError('Failed to fetch search results');
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    };

    const timeoutId = setTimeout(fetchResults, 300);
    return () => clearTimeout(timeoutId);
  }, [query]);

  return { results, isLoading, error };
}

export default useSearch;