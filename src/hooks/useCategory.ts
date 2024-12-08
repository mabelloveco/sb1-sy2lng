import { useState, useEffect, useCallback } from 'react';
import { Category } from '../types';
import { toast } from 'react-hot-toast';

export function useCategory(slug: string | undefined) {
  const [category, setCategory] = useState<Category | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCategory = useCallback(async () => {
    if (!slug) {
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch(`/api/categories/${slug}`);
      
      if (!response.ok) {
        throw new Error('Failed to load category');
      }
      
      const data = await response.json();
      setCategory(data);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to load category';
      setError(message);
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    fetchCategory();
  }, [fetchCategory]);

  return { category, isLoading, error, refetch: fetchCategory };
}