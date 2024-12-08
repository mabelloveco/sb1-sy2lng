import { useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

export function useGuestSession() {
  const [guestId] = useState(() => {
    const stored = localStorage.getItem('guestId');
    if (stored) return stored;
    const newId = uuidv4();
    localStorage.setItem('guestId', newId);
    return newId;
  });

  const getSavedCoupons = useCallback(() => {
    const saved = localStorage.getItem(`guest_coupons_${guestId}`);
    return saved ? JSON.parse(saved) : [];
  }, [guestId]);

  const saveCoupon = useCallback((couponId: string) => {
    const saved = getSavedCoupons();
    if (!saved.includes(couponId)) {
      const updated = [...saved, couponId];
      localStorage.setItem(`guest_coupons_${guestId}`, JSON.stringify(updated));
    }
  }, [guestId, getSavedCoupons]);

  const removeSavedCoupon = useCallback((couponId: string) => {
    const saved = getSavedCoupons();
    const updated = saved.filter((id: string) => id !== couponId);
    localStorage.setItem(`guest_coupons_${guestId}`, JSON.stringify(updated));
  }, [guestId, getSavedCoupons]);

  return {
    guestId,
    getSavedCoupons,
    saveCoupon,
    removeSavedCoupon
  };
}