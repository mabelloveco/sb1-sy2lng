import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { validateCoupon } from '../validators/coupon';
import { authMiddleware, adminMiddleware } from '../middleware/auth';

const router = Router();
const prisma = new PrismaClient();

// Public routes
router.get('/', async (req, res) => {
  const { 
    search, 
    storeId, 
    categoryId, 
    sort = 'popular',
    page = 1,
    limit = 20
  } = req.query;

  const where = {
    isActive: true,
    ...(search && {
      OR: [
        { code: { contains: search } },
        { description: { contains: search } },
        { store: { name: { contains: search } } }
      ]
    }),
    ...(storeId && { storeId }),
    ...(categoryId && { categories: { some: { id: categoryId } } })
  };

  const coupons = await prisma.coupon.findMany({
    where,
    include: {
      store: true,
      categories: true,
      _count: { select: { reviews: true } }
    },
    orderBy: {
      ...(sort === 'popular' && { uses: 'desc' }),
      ...(sort === 'newest' && { createdAt: 'desc' }),
      ...(sort === 'ending' && { endDate: 'asc' })
    },
    skip: (page - 1) * limit,
    take: limit
  });

  res.json(coupons);
});

// Protected routes
router.post('/', authMiddleware, adminMiddleware, async (req, res) => {
  const data = validateCoupon(req.body);
  const coupon = await prisma.coupon.create({ data });
  res.json(coupon);
});

router.put('/:id', authMiddleware, adminMiddleware, async (req, res) => {
  const { id } = req.params;
  const data = validateCoupon(req.body);
  const coupon = await prisma.coupon.update({ where: { id }, data });
  res.json(coupon);
});

router.delete('/:id', authMiddleware, adminMiddleware, async (req, res) => {
  const { id } = req.params;
  await prisma.coupon.delete({ where: { id } });
  res.json({ success: true });
});

export default router;