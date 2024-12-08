export interface Store {
  id: string;
  name: string;
  logo: string;
  category: string;
  totalCoupons: number;
  averageSavings: string;
  lastUpdated: string;
  website?: string;
  description?: string;
  featured?: boolean;
}

export interface Coupon {
  id: string;
  storeId: string;
  code: string;
  description: string;
  discount: string;
  expiryDate: string;
  verified: boolean;
  usedCount: number;
  lastVerified: string;
  type: 'code' | 'deal';
  success_rate: number;
  url?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}