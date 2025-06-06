import { Router } from 'express';
import leadController from '../controllers/leadController';
import consultationController from '../controllers/consultationController';
import { validateRequest } from '../middleware/validation';
import { leadSchema, consultationSchema } from '../utils/schemas';

const router = Router();

// Lead capture endpoints
router.post('/leads', validateRequest(leadSchema), leadController.createLead);
router.get('/leads/:id', leadController.getLead);
router.post('/leads/:id/send-conversion-email', leadController.sendConversionEmail);

// Consultation booking endpoints
router.post('/consultations', validateRequest(consultationSchema), consultationController.bookConsultation);
router.get('/consultations/:id', consultationController.getConsultation);

// Waitlist endpoint
router.post('/waitlist', validateRequest(leadSchema), leadController.joinWaitlist);

export default router;