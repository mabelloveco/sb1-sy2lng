import { PrismaClient, NotificationType } from '@prisma/client';
import { sendEmail } from '../utils/email';

const prisma = new PrismaClient();

export const notificationService = {
  // Create notification
  create: async (userId: string, type: NotificationType, title: string, message: string) => {
    return prisma.notification.create({
      data: {
        userId,
        type,
        title,
        message
      }
    });
  },

  // Get user notifications
  getUserNotifications: async (userId: string, read?: boolean) => {
    return prisma.notification.findMany({
      where: {
        userId,
        ...(typeof read === 'boolean' && { read })
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
  },

  // Mark notification as read
  markAsRead: async (notificationId: string) => {
    return prisma.notification.update({
      where: { id: notificationId },
      data: { read: true }
    });
  },

  // Send expiring coupon notifications
  sendExpiringCouponNotifications: async () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const expiringCoupons = await prisma.coupon.findMany({
      where: {
        endDate: {
          gte: new Date(),
          lte: tomorrow
        },
        isActive: true
      },
      include: {
        store: true,
        savedByUsers: true
      }
    });

    for (const coupon of expiringCoupons) {
      // Notify users who saved this coupon
      for (const user of coupon.savedByUsers) {
        await Promise.all([
          // Create in-app notification
          notificationService.create(
            user.id,
            'COUPON_EXPIRING',
            'Coupon Expiring Soon',
            `The coupon "${coupon.title}" for ${coupon.store.name} expires tomorrow!`
          ),
          // Send email notification
          sendEmail({
            to: user.email,
            subject: 'Coupon Expiring Soon',
            template: 'coupon-expiring',
            data: {
              userName: user.name,
              couponTitle: coupon.title,
              storeName: coupon.store.name,
              expiryDate: coupon.endDate
            }
          })
        ]);
      }
    }
  }
};