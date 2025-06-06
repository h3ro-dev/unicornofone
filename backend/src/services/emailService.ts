/**
 * Email Service for Stream 3 - Cart Abandonment Sequence
 * 
 * This service handles email automation for the Unicorn of One platform.
 * In production, integrate with SendGrid, Mailgun, or AWS SES.
 */

export interface EmailData {
  to: string;
  subject: string;
  body: string;
  html?: string;
  from?: string;
  replyTo?: string;
  tags?: string[];
  metadata?: Record<string, any>;
}

export interface EmailServiceConfig {
  provider: 'sendgrid' | 'mailgun' | 'aws-ses' | 'mock';
  apiKey?: string;
  domain?: string;
  fromEmail: string;
  fromName: string;
}

class EmailService {
  private config: EmailServiceConfig;

  constructor(config?: Partial<EmailServiceConfig>) {
    this.config = {
      provider: 'mock',
      fromEmail: 'alex@unicornofone.ai',
      fromName: 'Alex Mitchell',
      ...config
    };
  }

  /**
   * Send an email through the configured provider
   */
  async send(emailData: EmailData): Promise<{ success: boolean; messageId?: string; error?: string }> {
    try {
      // Add default from if not provided
      const enrichedData = {
        from: `${this.config.fromName} <${this.config.fromEmail}>`,
        ...emailData
      };

      switch (this.config.provider) {
        case 'sendgrid':
          return await this.sendViaSendGrid(enrichedData);
        case 'mailgun':
          return await this.sendViaMailgun(enrichedData);
        case 'aws-ses':
          return await this.sendViaAWSSES(enrichedData);
        default:
          return await this.sendViaMock(enrichedData);
      }
    } catch (error) {
      console.error('Email send error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Mock email send for development
   */
  private async sendViaMock(emailData: EmailData): Promise<{ success: boolean; messageId: string }> {
    console.log('📧 Mock Email Send:', {
      to: emailData.to,
      subject: emailData.subject,
      from: emailData.from,
      timestamp: new Date().toISOString()
    });
    
    // Log email body in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Email Body:', emailData.body);
    }

    return {
      success: true,
      messageId: `mock_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }

  /**
   * SendGrid integration (implement when ready)
   */
  private async sendViaSendGrid(emailData: EmailData): Promise<{ success: boolean; messageId?: string }> {
    // TODO: Implement SendGrid integration
    // const sgMail = require('@sendgrid/mail');
    // sgMail.setApiKey(this.config.apiKey);
    // const msg = {
    //   to: emailData.to,
    //   from: emailData.from,
    //   subject: emailData.subject,
    //   text: emailData.body,
    //   html: emailData.html || emailData.body
    // };
    // const response = await sgMail.send(msg);
    throw new Error('SendGrid integration not implemented');
  }

  /**
   * Mailgun integration (implement when ready)
   */
  private async sendViaMailgun(emailData: EmailData): Promise<{ success: boolean; messageId?: string }> {
    // TODO: Implement Mailgun integration
    throw new Error('Mailgun integration not implemented');
  }

  /**
   * AWS SES integration (implement when ready)
   */
  private async sendViaAWSSES(emailData: EmailData): Promise<{ success: boolean; messageId?: string }> {
    // TODO: Implement AWS SES integration
    throw new Error('AWS SES integration not implemented');
  }

  /**
   * Validate email address
   */
  static isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Format email with name
   */
  static formatEmail(email: string, name?: string): string {
    if (name) {
      return `${name} <${email}>`;
    }
    return email;
  }
}

// Export singleton instance
export const emailService = new EmailService();

// Export class for custom configurations
export default EmailService;