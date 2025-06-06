import { Router, Request, Response } from 'express';
import Joi from 'joi';

const router = Router();

// Validation schema for contact form
const contactSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  email: Joi.string().email().required(),
  company: Joi.string().max(100).optional().allow(''),
  message: Joi.string().min(10).max(1000).required(),
  source: Joi.string().optional().allow('')
});

// POST /api/contact
router.post('/', async (req: Request, res: Response) => {
  try {
    // Validate request body
    const { error, value } = contactSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        error: 'Validation Error',
        message: error.details[0].message
      });
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Add to CRM
    // 4. Trigger any automation

    // For now, we'll simulate success
    console.log('Contact form submission:', value);

    // Send success response
    res.status(200).json({
      success: true,
      message: 'Thank you for your message. We\'ll get back to you within 24 hours.',
      data: {
        id: generateId(),
        timestamp: new Date().toISOString()
      }
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      error: 'Internal Server Error',
      message: 'Failed to process contact form submission'
    });
  }
});

// Helper function to generate a simple ID
function generateId(): string {
  return `CONTACT-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

export default router; 