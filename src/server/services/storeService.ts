import { PrismaClient } from '@prisma/client';
import { cacheService } from './cacheService';
import { seoService } from './seoService';

const prisma = new PrismaClient();

export const storeService = {
  // Get featured stores
  getFeaturedStores: async () => {
    const cacheKey = cacheService.keys.featuredStores;
    const cached = cacheService.get(cacheKey);
    if (cached) return cached;

    const stores = await prisma.store.findMany({
      where: { featured: true },
      include: {
        categories: true,
        coupons: {
          where: { isActive: true },
          select: { discountValue: true }
        }
      }
    });

    const storesWithStats = stores.map(store => ({
      ...store,
      maxCashback: Math.max(...store.coupons.map(c => c.discountValue))
    }));

    cacheService.set(cacheKey, storesWithStats, 300);
    return storesWithStats;
  },

  // Get store details
  getStore: async (storeId: string) => {
    const store = await prisma.store.findUnique({
      where: { id: storeId },
      include: {
        categories: true,
        coupons: {
          where: { isActive: true },
          include: {
            categories: true
          }
        }
      }
    });

    if (store) {
      store.metadata = await seoService.generateStoreMetadata(storeId);
    }

    return store;
  },

  // Search stores
  searchStores: async (query: string) => {
    return prisma.store.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: 'insensitive' } },
          { categories: { some: { name: { contains: query, mode: 'insensitive' } } } }
        ]
      },
      include: {
        categories: true
      }
    });
  },

  // Get store statistics
  getStoreStats: async (storeId: string) => {
    const cacheKey = cacheService.keys.storeStats(storeId);
    const cached = cacheService.get(cacheKey);
    if (cached) return cached;

    const [coupons, analytics] = await Promise.all([
      prisma.coupon.findMany({
        where: { storeId },
        select: {
          id: true,
          uses: true,
          clicks: true,
          successRate: true
        }
      }),
      prisma.analytics.groupBy({
        by: ['storeId'],
        where: { storeId },
        _sum: {
          views: true,
          clicks: true,
          conversions: true,
          revenue: true
        }
      })
    ]);

    const stats = {
      totalCoupons: coupons.length,
      averageSuccessRate: coupons.reduce((acc, c) => acc + c.successRate, 0) / coupons.length,
      totalUses: coupons.reduce((acc, c) => acc + c.uses, 0),
      totalClicks: analytics[0]?._sum.clicks || 0,
      totalViews: analytics[0]?._sum.views || 0,
      totalRevenue: analytics[0]?._sum.revenue || 0
    };

    cacheService.set(cacheKey, stats, 300);
    return stats;
  }
};