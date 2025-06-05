import { Request, Response, NextFunction } from 'express';
import { Lead } from '../utils/schemas';

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
      
      res.status(201).json({
        message: 'Lead captured successfully',
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
      
      res.json({
        data: lead
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
  }
};

export default leadController;