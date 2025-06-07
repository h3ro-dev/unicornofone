import { Request, Response } from 'express';
import { z } from 'zod';
import { cartAbandonmentSchema } from '../utils/schemas';
import { emailService } from '../services/emailService';

// Email templates for Stream 3 - Cart Abandonment Sequence
const emailTemplates = {
  technicalIssue: {
    subject: 'Everything okay, {{firstName}}?',
    sendDelay: 2 * 60 * 60 * 1000, // 2 hours in milliseconds
    template: `
Hey {{firstName}},

I noticed you started enrolling in Unicorn of One but didn't complete it.

Just wanted to check - did you run into any technical issues? Sometimes our payment processor gets quirky.

If so, just reply and I'll sort it out immediately.

If you changed your mind, no worries at all. But I'm curious - what held you back? Your feedback helps me improve the program.

Either way, you're always welcome here.

Best,
Alex`
  },
  finalSpots: {
    subject: '{{firstName}}, 3 spots left in your cohort',
    sendDelay: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
    template: `
{{firstName}},

Yesterday you were minutes away from transforming how you build your business.

I get it. It's a big decision.

But here's what's happening: We're down to our final 3 spots for {{currentMonth}}.

After that, you're looking at a 6-week wait. That's 6 weeks of:
- Continuing to burn out on low-leverage work
- Watching competitors with teams move faster
- Wondering "what if" while others execute

You were ready yesterday. You're still ready today.

Complete your enrollment here: {{enrollmentLink}}

Tomorrow might be too late.

To decisive action,
Alex

P.S. Still have questions? Reply right now. I'll answer within an hour.`
  }
};

// In-memory storage for demo (in production, use a database)
const abandonedCarts = new Map<string, any>();
const emailQueue = new Map<string, any>();

class CartAbandonmentController {
  // Track cart abandonment
  async trackAbandonment(req: Request, res: Response) {
    try {
      const validatedData = cartAbandonmentSchema.parse(req.body);
      const abandonmentId = `abandon_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      const abandonmentRecord = {
        id: abandonmentId,
        ...validatedData,
        abandonedAt: validatedData.abandonedAt || new Date().toISOString(),
        status: 'active',
        emailsSent: []
      };

      // Store abandonment record
      abandonedCarts.set(abandonmentId, abandonmentRecord);

      // Schedule Stream 3 emails
      this.scheduleAbandonmentEmails(abandonmentRecord);

      res.status(201).json({
        success: true,
        message: 'Cart abandonment tracked',
        data: { 
          id: abandonmentId,
          status: 'tracking_started'
        }
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          errors: error.errors
        });
      }
      res.status(500).json({
        success: false,
        message: 'Failed to track cart abandonment'
      });
    }
  }

  // Schedule the Stream 3 email sequence
  private scheduleAbandonmentEmails(abandonmentRecord: any) {
    const currentMonth = new Date().toLocaleString('default', { month: 'long' });
    const enrollmentLink = `https://unicornofone.ai/enroll?cart=${abandonmentRecord.id}`;

    // Schedule Email 1: Technical Issue (2 hours after abandonment)
    const email1Id = `email1_${abandonmentRecord.id}`;
    setTimeout(() => {
      this.sendEmail({
        to: abandonmentRecord.email,
        subject: emailTemplates.technicalIssue.subject.replace('{{firstName}}', abandonmentRecord.firstName),
        body: emailTemplates.technicalIssue.template.replace('{{firstName}}', abandonmentRecord.firstName),
        abandonmentId: abandonmentRecord.id,
        emailType: 'technical_issue'
      });
    }, emailTemplates.technicalIssue.sendDelay);

    emailQueue.set(email1Id, {
      scheduledFor: new Date(Date.now() + emailTemplates.technicalIssue.sendDelay),
      type: 'technical_issue',
      abandonmentId: abandonmentRecord.id
    });

    // Schedule Email 2: Final Spots (24 hours after abandonment)
    const email2Id = `email2_${abandonmentRecord.id}`;
    setTimeout(() => {
      // Only send if cart is still abandoned
      const cart = abandonedCarts.get(abandonmentRecord.id);
      if (cart && cart.status === 'active') {
        this.sendEmail({
          to: abandonmentRecord.email,
          subject: emailTemplates.finalSpots.subject.replace('{{firstName}}', abandonmentRecord.firstName),
          body: emailTemplates.finalSpots.template
            .replace(/{{firstName}}/g, abandonmentRecord.firstName)
            .replace('{{currentMonth}}', currentMonth)
            .replace('{{enrollmentLink}}', enrollmentLink),
          abandonmentId: abandonmentRecord.id,
          emailType: 'final_spots'
        });
      }
    }, emailTemplates.finalSpots.sendDelay);

    emailQueue.set(email2Id, {
      scheduledFor: new Date(Date.now() + emailTemplates.finalSpots.sendDelay),
      type: 'final_spots',
      abandonmentId: abandonmentRecord.id
    });
  }

  // Simulate sending email (in production, integrate with email service)
  private async sendEmail(emailData: any) {
    // Send via email service
    const result = await emailService.send({
      to: emailData.to,
      subject: emailData.subject,
      body: emailData.body
    });

    if (result.success) {
      // Update abandonment record
      const cart = abandonedCarts.get(emailData.abandonmentId);
      if (cart) {
        cart.emailsSent.push({
          type: emailData.emailType,
          sentAt: new Date().toISOString(),
          messageId: result.messageId
        });
        abandonedCarts.set(emailData.abandonmentId, cart);
      }
    }
  }

  // Mark cart as recovered (stop email sequence)
  async recoverCart(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const cart = abandonedCarts.get(id);

      if (!cart) {
        return res.status(404).json({
          success: false,
          message: 'Abandoned cart not found'
        });
      }

      // Update status to stop further emails
      cart.status = 'recovered';
      cart.recoveredAt = new Date().toISOString();
      abandonedCarts.set(id, cart);

      res.json({
        success: true,
        message: 'Cart marked as recovered',
        data: {
          id,
          status: 'recovered',
          emailsSent: cart.emailsSent.length
        }
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Failed to recover cart'
      });
    }
  }

  // Get abandonment status
  async getAbandonmentStatus(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const cart = abandonedCarts.get(id);

      if (!cart) {
        return res.status(404).json({
          success: false,
          message: 'Abandoned cart not found'
        });
      }

      res.json({
        success: true,
        data: {
          id: cart.id,
          status: cart.status,
          abandonedAt: cart.abandonedAt,
          emailsSent: cart.emailsSent,
          recoveredAt: cart.recoveredAt
        }
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Failed to get abandonment status'
      });
    }
  }

  // Get email queue status (for monitoring)
  async getEmailQueueStatus(req: Request, res: Response) {
    try {
      const queueStatus = Array.from(emailQueue.entries()).map(([id, data]) => ({
        id,
        ...data
      }));

      res.json({
        success: true,
        data: {
          queuedEmails: queueStatus.length,
          emails: queueStatus
        }
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Failed to get email queue status'
      });
    }
  }
}

export default new CartAbandonmentController();