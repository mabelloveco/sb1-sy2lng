import { PrismaClient } from '@prisma/client';
import { cacheService } from './cacheService';
import { analyticsService } from './analyticsService';
import { seoService } from './seoService';

const prisma = new PrismaClient();

export const couponService = {
  // Get popular coupons
  getPopularCoupons: async () => {
    const cacheKey = cacheService.keys.popularCoupons;
    const cached = cacheService.get(cacheKey);
    if (cached) return cached;

    const coupons = await prisma.coupon.findMany({
      where: { isActive: true },
      orderBy: [
        { uses: 'desc' },
        { successRate: 'desc' }
      ],
      take: 10,
      include: {
        store: true,
        categories: true
      }
    });

    cacheService.set(cacheKey, coupons, 300);
    return coupons;
  },

  // Get coupon details
  getCoupon: async (couponId: string) => {
    const coupon = await prisma.coupon.findUnique({
      where: { id: couponId },
      include: {
        store: true,
        categories: true,
        reviews: {
          include: {
            user: {
              select: {
                id: true,
                name: true
              }
            }
          }
        }
      }
    });

    if (coupon) {
      coupon.metadata = await seoService.generateCouponMetadata(couponId);
      await analyticsService.trackView(couponId);
    }

    return coupon;
  },

  // Search coupons
  searchCoupons: async (query: string) => {
    return prisma.coupon.findMany({
      where: {
        isActive: true,
        OR: [
          { code: { contains: query, mode: 'insensitive' } },
          { description: { contains: query, mode: 'insensitive' } },
          { store: { name: { contains: query, mode: 'insensitive' } } },
          { categories: { some: { name: { contains: query, mode: 'insensitive' } } } }
        ]
      },
      include: {
        store: true,
        categories: true
      }
    });
  },

  // Track coupon usage
  trackCouponUse: async (couponId: string, userId: string) => {
    await analyticsService.trackClick(couponId);
    
    // Record user interaction
    if (userId) {
      await prisma.user.update({
        where: { id: userId },
        data: {
          savedCoupons: {
            connect: { id: couponId }
          }
        }
      });
    }
  },

  // Verify coupon validity
  verifyCoupon: async (couponId: string) => {
    const coupon = await prisma.coupon.findUnique({
      where: { id: couponId }
    });

    if (!coupon) return false;

    const isValid = 
      coupon.isActive &&
      (!coupon.endDate || new Date(coupon.endDate) > new Date());

    return isValid;
  },

  // Add coupon review
  addReview: async (couponId: string, userId: string, data: any) => {
    const review = await prisma.review.create({
      data: {
        ...data,
        couponId,
        userId
      }
    });

    // Invalidate cache
    cacheService.del(cacheService.keys.couponStats(couponId));

    return review;
  }
};