import { useAuth } from './useAuth';
import { useGuestSession } from './useGuestSession';
import { toast } from 'react-hot-toast';

export function useSession() {
  const auth = useAuth();
  const guest = useGuestSession();

  const isAuthenticated = auth.isAuthenticated;
  const userId = auth.user?.id || guest.guestId;

  const saveCoupon = async (couponId: string) => {
    if (isAuthenticated) {
      return auth.saveCoupon(couponId);
    } else {
      guest.saveCoupon(couponId);
      toast.success('Coupon saved! Create an account to sync across devices.');
      return true;
    }
  };

  const getSavedCoupons = async () => {
    if (isAuthenticated) {
      return auth.getSavedCoupons();
    } else {
      return guest.getSavedCoupons();
    }
  };

  const continueAsGuest = () => {
    toast.success('Continuing as guest. You can sign up later to save your progress.');
    return true;
  };

  return {
    isAuthenticated,
    userId,
    user: auth.user,
    saveCoupon,
    getSavedCoupons,
    login: auth.login,
    logout: auth.logout,
    signup: auth.signup,
    continueAsGuest
  };
}