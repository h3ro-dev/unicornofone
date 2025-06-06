import { Request, Response, NextFunction } from 'express';
import { Lead } from '../utils/schemas';
import { emailService } from '../services/emailService';

// In-memory storage for now (replace with database in production)
const leads: Map<string, Lead & { id: string; createdAt: Date }> = new Map();

const leadController = {
  createLead: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const leadData: Lead = req.body;
      const id = `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      const lead = {
        id,
        ...leadData,
        createdAt: new Date()
      };
      
      leads.set(id, lead);
      
      // Start email welcome sequence for new leads
      await emailService.startWelcomeSequence({
        email: lead.email,
        name: lead.name,
        leadId: id,
        signupDate: lead.createdAt,
        customFields: {
          source: lead.source || 'website',
          businessName: lead.company || ''
        }
      });
      
      res.status(201).json({
        message: 'Lead created successfully',
        data: { id, email: lead.email }
      });
    } catch (error) {
      next(error);
    }
  },
  
  getLead: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const lead = leads.get(id);
      
      if (!lead) {
        res.status(404).json({
          error: 'Lead not found'
        });
        return;
      }
      
      // Include email sequence status
      const sequenceStatus = emailService.getSequenceStatus(id);
      
      res.json({
        data: {
          ...lead,
          emailSequence: sequenceStatus
        }
      });
    } catch (error) {
      next(error);
    }
  },
  
  joinWaitlist: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const leadData: Lead = req.body;
      const id = `waitlist_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      const lead = {
        id,
        ...leadData,
        source: 'waitlist',
        createdAt: new Date()
      };
      
      leads.set(id, lead);
      
      res.status(201).json({
        message: 'Successfully joined the waitlist!',
        data: { 
          id, 
          position: leads.size,
          estimatedLaunch: 'Q1 2024'
        }
      });
    } catch (error) {
      next(error);
    }
  },
  
  // New endpoint to trigger Email 5 immediately (for testing or special campaigns)
  sendConversionEmail: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const lead = leads.get(id);
      
      if (!lead) {
        res.status(404).json({
          error: 'Lead not found'
        });
        return;
      }
      
      await emailService.sendEmail5Immediately({
        email: lead.email,
        name: lead.name,
        leadId: id,
        signupDate: lead.createdAt
      });
      
      res.json({
        message: 'Conversion email (Email 5) sent successfully',
        data: { leadId: id }
      });
    } catch (error) {
      next(error);
    }
  }
};

export default leadController;