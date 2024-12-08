import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { cacheService } from './cacheService';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export const userService = {
  // Register new user
  register: async (email: string, password: string, name: string) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    
    return prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name
      }
    });
  },

  // Login user
  login: async (email: string, password: string) => {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) throw new Error('User not found');

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) throw new Error('Invalid password');

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    return { user, token };
  },

  // Get user profile
  getProfile: async (userId: string) => {
    const cacheKey = `user_profile_${userId}`;
    const cached = cacheService.get(cacheKey);
    if (cached) return cached;

    const profile = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        savedCoupons: {
          include: {
            store: true,
            categories: true
          }
        }
      }
    });

    if (profile) {
      cacheService.set(cacheKey, profile, 300); // Cache for 5 minutes
    }

    return profile;
  },

  // Update user profile
  updateProfile: async (userId: string, data: any) => {
    const updated = await prisma.user.update({
      where: { id: userId },
      data
    });

    // Invalidate cache
    cacheService.del(`user_profile_${userId}`);

    return updated;
  },

  // Save coupon for user
  saveCoupon: async (userId: string, couponId: string) => {
    await prisma.user.update({
      where: { id: userId },
      data: {
        savedCoupons: {
          connect: { id: couponId }
        }
      }
    });

    // Invalidate cache
    cacheService.del(`user_profile_${userId}`);
  },

  // Remove saved coupon
  removeSavedCoupon: async (userId: string, couponId: string) => {
    await prisma.user.update({
      where: { id: userId },
      data: {
        savedCoupons: {
          disconnect: { id: couponId }
        }
      }
    });

    // Invalidate cache
    cacheService.del(`user_profile_${userId}`);
  },

  // Get user's saved coupons
  getSavedCoupons: async (userId: string) => {
    return prisma.coupon.findMany({
      where: {
        savedByUsers: {
          some: { id: userId }
        }
      },
      include: {
        store: true,
        categories: true
      }
    });
  }
};