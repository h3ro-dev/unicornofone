import { Router } from 'express';
import leadController from '../controllers/leadController';
import consultationController from '../controllers/consultationController';
import cartAbandonmentController from '../controllers/cartAbandonmentController';
import { validateRequest } from '../middleware/validation';
import { leadSchema, consultationSchema, cartAbandonmentSchema } from '../utils/schemas';

const router = Router();

// Lead capture endpoints
router.post('/leads', validateRequest(leadSchema), leadController.createLead);
router.get('/leads/:id', leadController.getLead);

// Consultation booking endpoints
router.post('/consultations', validateRequest(consultationSchema), consultationController.bookConsultation);
router.get('/consultations/:id', consultationController.getConsultation);

// Waitlist endpoint
router.post('/waitlist', validateRequest(leadSchema), leadController.joinWaitlist);

// Stream 3: Cart Abandonment endpoints
router.post('/cart-abandonment', validateRequest(cartAbandonmentSchema), cartAbandonmentController.trackAbandonment);
router.put('/cart-abandonment/:id/recover', cartAbandonmentController.recoverCart);
router.get('/cart-abandonment/:id', cartAbandonmentController.getAbandonmentStatus);
router.get('/cart-abandonment/queue/status', cartAbandonmentController.getEmailQueueStatus);

export default router;