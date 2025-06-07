# Stream 3 - Cart Abandonment Email Automation

## Overview

Stream 3 is the Cart Abandonment email sequence for Unicorn of One. This automated email stream targets potential customers who started the enrollment process but didn't complete it.

## Email Sequence

### Email 1: Technical Issue Check
- **Timing**: 2 hours after cart abandonment
- **Subject**: "Everything okay, {{firstName}}?"
- **Purpose**: Check if technical issues prevented completion, show concern, gather feedback
- **Tone**: Helpful, understanding, non-pushy

### Email 2: Final Spots Urgency
- **Timing**: 24 hours after cart abandonment (only if still abandoned)
- **Subject**: "{{firstName}}, 3 spots left in your cohort"
- **Purpose**: Create urgency, remind of value, provide easy path to complete
- **Tone**: Urgent but supportive, focusing on lost opportunity cost

## API Endpoints

### Track Cart Abandonment
```bash
POST /api/cart-abandonment
Content-Type: application/json

{
  "email": "founder@startup.com",
  "firstName": "Sarah",
  "productId": "unicorn-strategy-session",
  "cartValue": 997,
  "metadata": {
    "source": "landing-page",
    "referrer": "google",
    "sessionId": "session_123"
  }
}
```

### Mark Cart as Recovered
```bash
PUT /api/cart-abandonment/{abandonmentId}/recover
```

### Check Abandonment Status
```bash
GET /api/cart-abandonment/{abandonmentId}
```

### Monitor Email Queue
```bash
GET /api/cart-abandonment/queue/status
```

## Implementation Details

### Controller: `cartAbandonmentController.ts`
- Tracks abandoned carts
- Schedules email sequence automatically
- Handles cart recovery (stops further emails)
- Provides monitoring endpoints

### Email Service: `emailService.ts`
- Abstracted email sending interface
- Currently uses mock provider for development
- Ready for SendGrid/Mailgun/AWS SES integration

### Data Schema
```typescript
{
  email: string;
  firstName: string;
  productId: string;
  cartValue: number;
  abandonedAt?: string; // ISO datetime
  metadata?: {
    source?: string;
    referrer?: string;
    sessionId?: string;
  }
}
```

## Testing Stream 3

1. **Track an abandonment**:
```bash
curl -X POST http://localhost:3001/api/cart-abandonment \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "firstName": "Test",
    "productId": "unicorn-strategy-session",
    "cartValue": 997
  }'
```

2. **Check email queue**:
```bash
curl http://localhost:3001/api/cart-abandonment/queue/status
```

3. **Simulate cart recovery**:
```bash
curl -X PUT http://localhost:3001/api/cart-abandonment/{abandonmentId}/recover
```

## Production Considerations

1. **Email Provider Integration**:
   - Update `emailService.ts` with actual provider credentials
   - Implement provider-specific send methods
   - Add email tracking and analytics

2. **Database Storage**:
   - Replace in-memory Maps with database tables
   - Add indexes on email and status fields
   - Implement data retention policies

3. **Scheduling**:
   - Consider using a job queue (Bull, Bee-Queue) instead of setTimeout
   - Add retry logic for failed emails
   - Implement batch sending for scalability

4. **Personalization**:
   - Add dynamic cohort dates
   - Personalize based on cart contents
   - A/B test subject lines and content

5. **Compliance**:
   - Add unsubscribe links
   - Respect email preferences
   - Log all communications for audit

## Metrics to Track

- Cart abandonment rate
- Email open rates (Email 1 vs Email 2)
- Recovery rate by email
- Time to recovery
- Revenue recovered

## Next Steps

1. Integrate with email provider (SendGrid recommended)
2. Set up analytics tracking
3. Create dashboard for monitoring Stream 3 performance
4. A/B test email timing and content
5. Implement Streams 1 & 2 (Welcome & Lead Nurture)