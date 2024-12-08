import { Coupon } from '../types';

export const coupons: Coupon[] = [
  {
    id: 'mabel-spring24',
    storeId: 'mabel-love',
    code: 'SPRING24',
    description: '25% off new jewelry collection',
    discount: '25% OFF',
    expiryDate: '2024-04-30',
    verified: true,
    usedCount: 128,
    lastVerified: '1 hour ago',
    type: 'code',
    success_rate: 98,
    url: 'https://mabelloveco.com/collections/new-jewelry'
  },
  // ... other coupons
];