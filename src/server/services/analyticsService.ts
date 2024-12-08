import { PrismaClient } from '@prisma/client';
import { cacheService } from './cacheService';

const prisma = new PrismaClient();

export const analyticsService = {
  // Track coupon view
  trackView: async (couponId: string) => {
    const date = new Date();
    await prisma.analytics.upsert({
      where: {
        id: `${couponId}_${date.toISOString().split('T')[0]}`
      },
      update: {
        views: { increment: 1 }
      },
      create: {
        couponId,
        date,
        views: 1
      }
    });
    
    // Invalidate cache
    cacheService.del(cacheService.keys.couponStats(couponId));
  },

  // Track coupon click
  trackClick: async (couponId: string) => {
    const date = new Date();
    await Promise.all([
      prisma.analytics.upsert({
        where: {
          id: `${couponId}_${date.toISOString().split('T')[0]}`
        },
        update: {
          clicks: { increment: 1 }
        },
        create: {
          couponId,
          date,
          clicks: 1
        }
      }),
      prisma.coupon.update({
        where: { id: couponId },
        data: { clicks: { increment: 1 } }
      })
    ]);
    
    // Invalidate cache
    cacheService.del(cacheService.keys.couponStats(couponId));
  },

  // Track conversion
  trackConversion: async (couponId: string, revenue: number) => {
    const date = new Date();
    await Promise.all([
      prisma.analytics.upsert({
        where: {
          id: `${couponId}_${date.toISOString().split('T')[0]}`
        },
        update: {
          conversions: { increment: 1 },
          revenue: { increment: revenue }
        },
        create: {
          couponId,
          date,
          conversions: 1,
          revenue
        }
      }),
      prisma.coupon.update({
        where: { id: couponId },
        data: { 
          uses: { increment: 1 },
          successRate: {
            // Recalculate success rate
            set: await calculateSuccessRate(couponId)
          }
        }
      })
    ]);
    
    // Invalidate cache
    cacheService.del(cacheService.keys.couponStats(couponId));
  },

  // Get coupon statistics
  getCouponStats: async (couponId: string) => {
    const cacheKey = cacheService.keys.couponStats(couponId);
    const cached = cacheService.get<any>(cacheKey);
    
    if (cached) return cached;

    const stats = await prisma.analytics.groupBy({
      by: ['couponId'],
      where: { couponId },
      _sum: {
        views: true,
        clicks: true,
        conversions: true,
        revenue: true
      }
    });

    cacheService.set(cacheKey, stats[0], 300); // Cache for 5 minutes
    return stats[0];
  }
};

async function calculateSuccessRate(couponId: string): Promise<number> {
  const coupon = await prisma.coupon.findUnique({
    where: { id: couponId },
    select: { uses: true, clicks: true }
  });

  if (!coupon || coupon.clicks === 0) return 0;
  return (coupon.uses / coupon.clicks) * 100;
}