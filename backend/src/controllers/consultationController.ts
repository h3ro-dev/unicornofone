import { Request, Response, NextFunction } from 'express';
import { Consultation } from '../utils/schemas';

// In-memory storage for now (replace with database in production)
const consultations: Map<string, Consultation & { id: string; createdAt: Date; status: string }> = new Map();

const consultationController = {
  bookConsultation: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const consultationData: Consultation = req.body;
      const id = `consult_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      const consultation = {
        id,
        ...consultationData,
        status: 'pending',
        createdAt: new Date()
      };
      
      consultations.set(id, consultation);
      
      // In production, this would trigger calendar booking, email notifications, etc.
      res.status(201).json({
        message: 'Consultation request received successfully',
        data: {
          id,
          status: 'pending',
          nextSteps: 'You will receive a calendar invite within 24 hours',
          email: consultation.email
        }
      });
    } catch (error) {
      next(error);
    }
  },
  
  getConsultation: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const consultation = consultations.get(id);
      
      if (!consultation) {
        res.status(404).json({
          error: 'Consultation not found'
        });
        return;
      }
      
      res.json({
        data: consultation
      });
    } catch (error) {
      next(error);
    }
  }
};

export default consultationController;