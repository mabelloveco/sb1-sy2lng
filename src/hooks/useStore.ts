import { useState, useEffect } from 'react';
import type { Store } from '../types';

export function useStore(slug: string | undefined) {
  const [store, setStore] = useState<Store | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStore = async () => {
      if (!slug) {
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        setError(null);

        // Mock data for demonstration
        const mockStore: Store = {
          id: '1',
          name: 'Example Store',
          logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&h=100&fit=crop',
          category: 'Electronics',
          totalCoupons: 25,
          averageSavings: '25%',
          lastUpdated: '1 hour ago',
          rating: 4.5,
          reviewCount: 128,
          activeUsers: 1500,
          website: 'https://example.com',
          description: 'Leading electronics retailer with great deals',
          founded: '2010',
          headquarters: 'New York, USA',
          freeShipping: 'Orders over $35',
          returnPeriod: '30 days',
          returnPolicy: 'Free returns',
          priceMatch: 'Available',
          studentDiscount: '10% with valid ID',
          militaryDiscount: '15% with valid ID'
        };

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        setStore(mockStore);
      } catch (err) {
        setError('Failed to load store information');
      } finally {
        setIsLoading(false);
      }
    };

    fetchStore();
  }, [slug]);

  return { store, isLoading, error };
}