import { useState, useEffect } from 'react';
import { Coupon } from '../types';
import { useSession } from './useSession';

export function useSavedCoupons() {
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { userId } = useSession();

  useEffect(() => {
    const fetchSavedCoupons = async () => {
      try {
        setIsLoading(true);
        // This would be an API call in production
        // For now, using mock data
        const mockCoupons: Coupon[] = [
          {
            id: '1',
            storeId: '1',
            code: 'SAVE20',
            description: '20% off your entire purchase',
            discount: '20% OFF',
            expiryDate: '2024-04-01',
            verified: true,
            usedCount: 1250,
            lastVerified: '1 hour ago',
            type: 'code',
            success_rate: 95
          },
          {
            id: '2',
            storeId: '2',
            code: 'FREESHIP',
            description: 'Free shipping on orders over $50',
            discount: 'FREE SHIPPING',
            expiryDate: '2024-03-31',
            verified: true,
            usedCount: 850,
            lastVerified: '2 hours ago',
            type: 'code',
            success_rate: 92
          }
        ];

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        setCoupons(mockCoupons);
      } catch (err) {
        console.error('Error fetching saved coupons:', err);
      } finally {
        setIsLoading(false);
      }
    };

    if (userId) {
      fetchSavedCoupons();
    } else {
      setIsLoading(false);
      setCoupons([]);
    }
  }, [userId]);

  return { coupons, isLoading };
}