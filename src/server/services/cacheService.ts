import NodeCache from 'node-cache';

// Cache instance with 5 minutes standard TTL
const cache = new NodeCache({ stdTTL: 300 });

export const cacheService = {
  // Get data from cache
  get: <T>(key: string): T | undefined => {
    return cache.get(key);
  },

  // Set data in cache
  set: <T>(key: string, data: T, ttl?: number): boolean => {
    return cache.set(key, data, ttl);
  },

  // Remove data from cache
  del: (key: string): number => {
    return cache.del(key);
  },

  // Clear all cache
  flush: (): void => {
    cache.flushAll();
  },

  // Get multiple items
  mget: <T>(keys: string[]): { [key: string]: T } => {
    return cache.mget(keys);
  },

  // Cache keys for different entities
  keys: {
    popularCoupons: 'popular_coupons',
    featuredStores: 'featured_stores',
    categories: 'categories',
    storeStats: (storeId: string) => `store_stats_${storeId}`,
    couponStats: (couponId: string) => `coupon_stats_${couponId}`,
  }
};