import { z } from 'zod';

// Lead schema for capturing potential customers
export const leadSchema = z.object({
  email: z.string().email('Invalid email address'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().optional(),
  source: z.string().optional(),
  utmParams: z.object({
    utm_source: z.string().optional(),
    utm_medium: z.string().optional(),
    utm_campaign: z.string().optional(),
    utm_content: z.string().optional(),
    utm_term: z.string().optional()
  }).optional()
});

// Consultation booking schema
export const consultationSchema = z.object({
  email: z.string().email('Invalid email address'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  company: z.string().min(1, 'Company name is required'),
  phone: z.string().min(10, 'Valid phone number required'),
  preferredTime: z.string(),
  timezone: z.string(),
  currentRevenue: z.string().optional(),
  targetRevenue: z.string().optional(),
  biggestChallenge: z.string().min(10, 'Please describe your challenge'),
  message: z.string().optional()
});

export const cartAbandonmentSchema = z.object({
  email: z.string().email('Invalid email address'),
  firstName: z.string().min(1, 'First name is required'),
  productId: z.string().min(1, 'Product ID is required'),
  cartValue: z.number().positive('Cart value must be positive'),
  abandonedAt: z.string().datetime().optional(),
  metadata: z.object({
    source: z.string().optional(),
    referrer: z.string().optional(),
    sessionId: z.string().optional()
  }).optional()
});

export type Lead = z.infer<typeof leadSchema>;
export type Consultation = z.infer<typeof consultationSchema>;
export type CartAbandonment = z.infer<typeof cartAbandonmentSchema>;