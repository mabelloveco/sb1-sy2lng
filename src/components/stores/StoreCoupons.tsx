import React, { useState } from 'react';
import { Tag, Filter } from 'lucide-react';
import CouponCard from '../coupons/CouponCard';
import { useCoupons } from '../../hooks/useCoupons';

interface StoreCouponsProps {
  storeId: string;
}

export default function StoreCoupons({ storeId }: StoreCouponsProps) {
  const [filter, setFilter] = useState('all');
  const { coupons, isLoading } = useCoupons(storeId);

  const filteredCoupons = coupons?.filter(coupon => {
    if (filter === 'all') return true;
    return coupon.type === filter;
  });

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Active Coupons & Deals</h2>
          <p className="text-sm text-gray-500 mt-1">
            {coupons?.length} offers available
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-gray-400" />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="text-sm border-gray-300 rounded-md"
          >
            <option value="all">All Deals</option>
            <option value="code">Coupon Codes</option>
            <option value="deal">Special Offers</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {isLoading ? (
          <div className="text-center py-8">Loading coupons...</div>
        ) : filteredCoupons?.length ? (
          filteredCoupons.map(coupon => (
            <CouponCard key={coupon.id} coupon={coupon} />
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            No coupons available at the moment
          </div>
        )}
      </div>
    </div>
  );
}