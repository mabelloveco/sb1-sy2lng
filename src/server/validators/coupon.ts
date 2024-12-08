import { z } from 'zod';

export const couponSchema = z.object({
  code: z.string().min(1),
  description: z.string().min(1),
  terms: z.string().optional(),
  discountType: z.enum(['PERCENTAGE', 'FIXED', 'BOGO', 'FREE_SHIPPING', 'OTHER']),
  discountValue: z.number().min(0),
  startDate: z.date(),
  endDate: z.date().optional(),
  storeId: z.string().uuid(),
  categoryIds: z.array(z.string().uuid()),
  isActive: z.boolean().default(true),
  isVerified: z.boolean().default(false),
  metadata: z.record(z.any()).optional()
});

export function validateCoupon(data: unknown) {
  return couponSchema.parse(data);
}