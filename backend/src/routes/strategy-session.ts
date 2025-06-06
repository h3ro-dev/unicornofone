import { Router, Request, Response } from 'express';
import Joi from 'joi';

const router = Router();

// Validation schema for strategy session request
const strategySessionSchema = Joi.object({
  // Personal information
  name: Joi.string().min(2).max(100).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().pattern(/^[\d\s\-\+\(\)]+$/).optional().allow(''),
  timezone: Joi.string().max(50).optional(),
  
  // Business information
  companyName: Joi.string().max(100).required(),
  companyWebsite: Joi.string().uri().optional().allow(''),
  currentRevenue: Joi.string().valid('pre-revenue', '0-100k', '100k-500k', '500k-1m', '1m-5m', '5m+').required(),
  targetRevenue: Joi.string().required(),
  
  // Current situation
  biggestChallenge: Joi.string().min(20).max(500).required(),
  whyNow: Joi.string().min(20).max(500).required(),
  
  // Scheduling preferences
  preferredDays: Joi.array().items(Joi.string().valid('monday', 'tuesday', 'wednesday', 'thursday', 'friday')).min(1).required(),
  preferredTimes: Joi.array().items(Joi.string().valid('morning', 'afternoon', 'evening')).min(1).required(),
  
  // Additional info
  referralSource: Joi.string().max(100).optional().allow(''),
  additionalNotes: Joi.string().max(1000).optional().allow('')
});

// POST /api/strategy-session
router.post('/request', async (req: Request, res: Response) => {
  try {
    // Validate request body
    const { error, value } = strategySessionSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        error: 'Validation Error',
        message: error.details[0].message
      });
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send confirmation email to user
    // 3. Send notification to team
    // 4. Create calendar event
    // 5. Add to CRM
    // 6. Trigger automation workflow

    // Log the submission
    console.log('Strategy session request:', value);

    // Generate session ID
    const sessionId = generateSessionId();

    // Send success response
    res.status(200).json({
      success: true,
      message: 'Your strategy session request has been received. We\'ll contact you within 24 hours to confirm your session.',
      data: {
        sessionId,
        timestamp: new Date().toISOString(),
        nextSteps: [
          'Check your email for confirmation',
          'We\'ll send you a calendar invite',
          'Prepare your biggest business questions',
          'Get ready for breakthrough insights'
        ]
      }
    });
  } catch (error) {
    console.error('Strategy session request error:', error);
    res.status(500).json({
      error: 'Internal Server Error',
      message: 'Failed to process strategy session request'
    });
  }
});

// GET /api/strategy-session/availability
router.get('/availability', async (req: Request, res: Response) => {
  try {
    // In a real implementation, this would check calendar availability
    // For now, return mock availability
    
    const availability = {
      nextAvailable: getNextBusinessDay(),
      slotsThisWeek: 3,
      slotsNextWeek: 5,
      bookingPercentage: 70,
      message: 'Limited spots available - book now to secure your session'
    };

    res.json({
      success: true,
      data: availability
    });
  } catch (error) {
    console.error('Availability check error:', error);
    res.status(500).json({
      error: 'Internal Server Error',
      message: 'Failed to check availability'
    });
  }
});

// Helper functions
function generateSessionId(): string {
  return `SESSION-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
}

function getNextBusinessDay(): string {
  const date = new Date();
  // Add 2 days (to simulate next available slot)
  date.setDate(date.getDate() + 2);
  
  // If it's a weekend, move to Monday
  const day = date.getDay();
  if (day === 0) date.setDate(date.getDate() + 1); // Sunday -> Monday
  if (day === 6) date.setDate(date.getDate() + 2); // Saturday -> Monday
  
  return date.toISOString().split('T')[0];
}

export default router; 