import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const seoService = {
  // Generate store metadata
  generateStoreMetadata: async (storeId: string) => {
    const store = await prisma.store.findUnique({
      where: { id: storeId },
      include: {
        coupons: {
          where: { isActive: true },
          select: { discountValue: true }
        },
        categories: true
      }
    });

    if (!store) return null;

    const maxDiscount = Math.max(...store.coupons.map(c => c.discountValue));
    const categories = store.categories.map(c => c.name).join(', ');

    return {
      title: `${store.name} Coupons & Cash Back (Up to ${maxDiscount}% Off)`,
      description: `Save money at ${store.name} with verified coupons and earn cash back. Top deals in ${categories}.`,
      keywords: `${store.name}, coupons, promo codes, cash back, ${categories}`,
      schema: {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: store.name,
        description: store.description,
        url: store.website,
        image: store.logo
      }
    };
  },

  // Generate coupon metadata
  generateCouponMetadata: async (couponId: string) => {
    const coupon = await prisma.coupon.findUnique({
      where: { id: couponId },
      include: {
        store: true,
        categories: true
      }
    });

    if (!coupon) return null;

    return {
      title: `${coupon.store.name}: ${coupon.title} (${coupon.discountValue}% Off)`,
      description: `Save ${coupon.discountValue}% at ${coupon.store.name} with this verified coupon code. ${coupon.description}`,
      keywords: `${coupon.store.name}, coupon code, promo code, discount, ${coupon.categories.map(c => c.name).join(', ')}`,
      schema: {
        '@context': 'https://schema.org',
        '@type': 'Offer',
        name: coupon.title,
        description: coupon.description,
        price: coupon.discountValue,
        priceCurrency: 'USD',
        validFrom: coupon.startDate,
        validThrough: coupon.endDate,
        seller: {
          '@type': 'Organization',
          name: coupon.store.name
        }
      }
    };
  }
};