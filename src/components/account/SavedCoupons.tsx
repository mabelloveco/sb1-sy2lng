import React from 'react';
import { BookmarkPlus } from 'lucide-react';
import CouponCard from '../coupons/CouponCard';
import { useSavedCoupons } from '../../hooks/useSavedCoupons';

export default function SavedCoupons() {
  const { coupons, isLoading } = useSavedCoupons();

  return (
    <div id="saved" className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center mb-6">
        <BookmarkPlus className="w-6 h-6 text-indigo-600 mr-2" />
        <h2 className="text-xl font-bold text-gray-900">Saved Coupons</h2>
      </div>

      {isLoading ? (
        <div className="text-center py-8">Loading saved coupons...</div>
      ) : coupons?.length ? (
        <div className="space-y-4">
          {coupons.map((coupon) => (
            <CouponCard key={coupon.id} coupon={coupon} />
          ))}
        </div>
      ) : (
        <div className="text-center py-8 text-gray-500">
          No saved coupons yet. Browse our deals and save your favorites!
        </div>
      )}
    </div>
  );
}