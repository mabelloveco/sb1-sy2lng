import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import cron from 'node-cron';
import { couponRoutes } from './routes/coupons';
import { storeRoutes } from './routes/stores';
import { categoryRoutes } from './routes/categories';
import { userRoutes } from './routes/users';
import { analyticsRoutes } from './routes/analytics';
import { authMiddleware } from './middleware/auth';
import { errorHandler } from './middleware/error';
import { setupCronJobs } from './cron';

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

// Public routes
app.use('/api/auth', authRoutes);
app.use('/api/coupons', couponRoutes);
app.use('/api/stores', storeRoutes);
app.use('/api/categories', categoryRoutes);

// Protected routes
app.use('/api/admin', authMiddleware, adminRoutes);
app.use('/api/analytics', authMiddleware, analyticsRoutes);
app.use('/api/users', authMiddleware, userRoutes);

app.use(errorHandler);

// Setup cron jobs for automated tasks
setupCronJobs();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});