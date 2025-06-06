import { welcomeSequenceTemplates, postSessionTemplates, EmailTemplate } from '../utils/emailTemplates';

export interface EmailRecipient {
  email: string;
  name: string;
  leadId: string;
  signupDate: Date;
  customFields?: Record<string, string>;
}

export interface EmailSequenceStatus {
  recipientId: string;
  sequenceId: string;
  currentEmailIndex: number;
  startedAt: Date;
  lastSentAt?: Date;
  completedAt?: Date;
  emails: {
    templateId: string;
    sentAt?: Date;
    opened?: boolean;
    clicked?: boolean;
  }[];
}

// In-memory storage for email sequences (replace with database in production)
const emailSequences = new Map<string, EmailSequenceStatus>();

class EmailService {
  private sendEmail(to: string, subject: string, htmlBody: string): Promise<void> {
    // In production, integrate with email service provider (SendGrid, Postmark, etc.)
    console.log(`[EMAIL] Sending to ${to}: ${subject}`);
    console.log(`[EMAIL] Body preview: ${htmlBody.substring(0, 100)}...`);
    
    // Simulate email sending
    return Promise.resolve();
  }

  private interpolateTemplate(template: string, variables: Record<string, string>): string {
    let result = template;
    
    Object.entries(variables).forEach(([key, value]) => {
      const regex = new RegExp(`{{${key}}}`, 'g');
      result = result.replace(regex, value);
    });
    
    return result;
  }

  async startWelcomeSequence(recipient: EmailRecipient): Promise<void> {
    const sequenceId = `welcome_${recipient.leadId}`;
    
    // Check if sequence already exists
    if (emailSequences.has(sequenceId)) {
      console.log(`[EMAIL] Welcome sequence already started for ${recipient.email}`);
      return;
    }

    // Initialize sequence status
    const sequenceStatus: EmailSequenceStatus = {
      recipientId: recipient.leadId,
      sequenceId: sequenceId,
      currentEmailIndex: 0,
      startedAt: new Date(),
      emails: welcomeSequenceTemplates.map(template => ({
        templateId: template.id,
      }))
    };

    emailSequences.set(sequenceId, sequenceStatus);

    // Send first email immediately
    await this.sendSequenceEmail(recipient, welcomeSequenceTemplates[0]);
    
    sequenceStatus.emails[0].sentAt = new Date();
    sequenceStatus.lastSentAt = new Date();

    // Schedule remaining emails
    this.scheduleRemainingEmails(recipient, sequenceId);
  }

  private async sendSequenceEmail(
    recipient: EmailRecipient, 
    template: EmailTemplate
  ): Promise<void> {
    const variables = {
      name: recipient.name.split(' ')[0], // First name only
      email: recipient.email,
      strategySessionUrl: `https://unicornofone.ai/book-session?ref=email&id=${recipient.leadId}`,
      successStoriesUrl: 'https://unicornofone.ai/success-stories',
      ...recipient.customFields
    };

    const htmlBody = this.interpolateTemplate(template.body, variables);
    
    await this.sendEmail(recipient.email, template.subject, htmlBody);
  }

  private scheduleRemainingEmails(recipient: EmailRecipient, sequenceId: string): void {
    // In production, use a proper job queue (Bull, BullMQ, etc.)
    welcomeSequenceTemplates.forEach((template, index) => {
      if (index === 0) return; // First email already sent

      const delayMs = template.dayDelay * 24 * 60 * 60 * 1000;
      
      setTimeout(async () => {
        const sequence = emailSequences.get(sequenceId);
        
        if (!sequence || sequence.completedAt) {
          console.log(`[EMAIL] Sequence ${sequenceId} completed or not found`);
          return;
        }

        await this.sendSequenceEmail(recipient, template);
        
        sequence.emails[index].sentAt = new Date();
        sequence.lastSentAt = new Date();
        sequence.currentEmailIndex = index;

        // Mark as completed if this was the last email
        if (index === welcomeSequenceTemplates.length - 1) {
          sequence.completedAt = new Date();
          console.log(`[EMAIL] Welcome sequence completed for ${recipient.email}`);
        }
      }, delayMs);
    });
  }

  async sendEmail5Immediately(recipient: EmailRecipient): Promise<void> {
    // Special method to send Email 5 (conversion email) immediately
    const email5 = welcomeSequenceTemplates[4]; // Index 4 = Email 5
    
    console.log(`[EMAIL] Sending Email 5 (Unicorn Moment) immediately to ${recipient.email}`);
    await this.sendSequenceEmail(recipient, email5);
  }

  async sendPostSessionEmail(
    recipient: EmailRecipient, 
    sessionData: {
      businessName: string;
      quickWins: string;
      priorities: string;
      aiTools: string;
      offerUrl: string;
    }
  ): Promise<void> {
    const template = postSessionTemplates[0];
    
    const variables = {
      name: recipient.name.split(' ')[0],
      email: recipient.email,
      ...sessionData
    };

    const htmlBody = this.interpolateTemplate(template.body, variables);
    
    await this.sendEmail(recipient.email, template.subject, htmlBody);
  }

  getSequenceStatus(leadId: string): EmailSequenceStatus | undefined {
    const sequenceId = `welcome_${leadId}`;
    return emailSequences.get(sequenceId);
  }

  async pauseSequence(leadId: string): Promise<void> {
    const sequenceId = `welcome_${leadId}`;
    const sequence = emailSequences.get(sequenceId);
    
    if (sequence && !sequence.completedAt) {
      sequence.completedAt = new Date();
      console.log(`[EMAIL] Paused sequence for lead ${leadId}`);
    }
  }

  async resumeSequence(leadId: string): Promise<void> {
    const sequenceId = `welcome_${leadId}`;
    const sequence = emailSequences.get(sequenceId);
    
    if (sequence && sequence.completedAt) {
      sequence.completedAt = undefined;
      console.log(`[EMAIL] Resumed sequence for lead ${leadId}`);
      
      // Find recipient and restart scheduling
      const recipient = this.findRecipientByLeadId(leadId); // Hypothetical method to fetch recipient
      if (!recipient) {
        console.error(`[EMAIL] Recipient not found for lead ${leadId}`);
        return;
      }
      
      const now = new Date();
      sequence.emails.forEach((email, index) => {
        if (!email.sentAt) {
          const delay = this.calculateEmailDelay(sequence.startedAt, index, now); // Calculate delay for scheduling
          this.scheduleEmail(recipient, email.templateId, delay); // Hypothetical scheduling method
        }
      });
    }
  }
}

export const emailService = new EmailService();