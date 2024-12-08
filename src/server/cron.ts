import cron from 'node-cron';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export function setupCronJobs() {
  // Deactivate expired coupons daily at midnight
  cron.schedule('0 0 * * *', async () => {
    await prisma.coupon.updateMany({
      where: {
        endDate: { lte: new Date() },
        isActive: true
      },
      data: { isActive: false }
    });
  });

  // Update coupon success rates hourly
  cron.schedule('0 * * * *', async () => {
    const coupons = await prisma.coupon.findMany({
      select: { id: true, uses: true, clicks: true }
    });

    for (const coupon of coupons) {
      const successRate = coupon.clicks > 0 
        ? (coupon.uses / coupon.clicks) * 100 
        : 0;

      await prisma.coupon.update({
        where: { id: coupon.id },
        data: { successRate }
      });
    }
  });

  // Generate daily analytics reports
  cron.schedule('5 0 * * *', async () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    
    const coupons = await prisma.coupon.findMany({
      select: { 
        id: true,
        uses: true,
        clicks: true,
        // Add other metrics
      }
    });

    for (const coupon of coupons) {
      await prisma.analytics.create({
        data: {
          couponId: coupon.id,
          date: yesterday,
          views: coupon.clicks,
          // Add other metrics
        }
      });
    }
  });
}