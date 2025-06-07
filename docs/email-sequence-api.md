# Email Sequence API Documentation

## Overview

The Unicorn of One email sequence system automatically nurtures leads through a 5-email welcome sequence, culminating in **Email 5** - the key conversion email that invites prospects to book a strategy session.

## Email Sequence Flow

### Welcome Sequence (5 Emails)

1. **Email 1: Welcome - The Path Less Traveled** (Day 0)
   - Sent immediately upon signup
   - Sets the tone and vision
   - Introduces the radical approach

2. **Email 2: The AI Team** (Day 2)
   - Showcases AI leverage possibilities
   - Sarah Chen case study ($180K while sleeping)
   - Introduces the system concept

3. **Email 3: The Power of No** (Day 4)
   - Strategic No formula
   - $2M rejection story
   - Focus on 10x opportunities only

4. **Email 4: One Thing Daily** (Day 6)
   - 6-minute morning ritual
   - Compound effect of focused action
   - Marcus Rodriguez case study (0 to 50K users)

5. **Email 5: Your Unicorn Moment** (Day 8) ⭐️ **THE CONVERSION EMAIL**
   - Recap of all learnings
   - Strong call to action
   - Limited spots for strategy sessions
   - Creates urgency and FOMO

## API Endpoints

### Lead Capture with Email Sequence

```http
POST /api/leads
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "businessStage": "idea",
  "source": "homepage"
}
```

**Response:**
```json
{
  "message": "Lead created successfully",
  "data": {
    "id": "lead_1234567890_abc123",
    "email": "john@example.com"
  }
}
```

**Note:** This automatically starts the 5-email welcome sequence.

### Get Lead with Email Sequence Status

```http
GET /api/leads/{leadId}
```

**Response:**
```json
{
  "data": {
    "id": "lead_1234567890_abc123",
    "name": "John Doe",
    "email": "john@example.com",
    "createdAt": "2024-01-15T10:00:00Z",
    "emailSequence": {
      "sequenceId": "welcome_lead_1234567890_abc123",
      "currentEmailIndex": 2,
      "startedAt": "2024-01-15T10:00:00Z",
      "lastSentAt": "2024-01-19T10:00:00Z",
      "emails": [
        {
          "templateId": "welcome-1",
          "sentAt": "2024-01-15T10:00:00Z"
        },
        {
          "templateId": "welcome-2",
          "sentAt": "2024-01-17T10:00:00Z"
        },
        {
          "templateId": "welcome-3",
          "sentAt": "2024-01-19T10:00:00Z"
        }
      ]
    }
  }
}
```

### Send Email 5 Immediately (Stream 5)

```http
POST /api/leads/{leadId}/send-conversion-email
```

**Use Cases:**
- Testing the conversion email
- Special campaigns where you want to accelerate the sequence
- Re-engagement campaigns for leads who didn't convert
- Hot leads who need immediate attention

**Response:**
```json
{
  "message": "Conversion email (Email 5) sent successfully",
  "data": {
    "leadId": "lead_1234567890_abc123"
  }
}
```

## Email 5 (Stream 5) - The Conversion Engine

### Why Email 5 is Critical

Email 5 is the culmination of the nurture sequence and serves as the primary conversion mechanism:

1. **Timing**: Sent on Day 8 when the lead has absorbed all key concepts
2. **Psychology**: Uses commitment and consistency (they've read 4 emails)
3. **Urgency**: Limited spots create FOMO
4. **Value Stack**: Recaps all learnings to show value already delivered
5. **Clear CTA**: Single, focused call to action to book a strategy session

### Email 5 Template Variables

The conversion email uses these personalization variables:
- `{{name}}` - Lead's first name
- `{{strategySessionUrl}}` - Unique URL with tracking parameters
- `{{successStoriesUrl}}` - Link to success stories for social proof

### Conversion Optimization Tips

1. **A/B Test Subject Lines**: The current subject "Ready to build your billion-dollar vision?" can be tested
2. **Timing**: Consider sending Email 5 at optimal times (Tuesday-Thursday, 10am local time)
3. **Follow-up**: If no action after Email 5, consider a "last chance" email
4. **Segmentation**: Hot leads (high engagement) could receive Email 5 earlier

## Implementation Notes

### Current Status
- ✅ Email templates created
- ✅ Email service implemented
- ✅ Lead capture integration
- ✅ API endpoints active
- ⏳ Email provider integration pending (currently logs to console)

### Next Steps
1. Integrate with email service provider (SendGrid/Postmark)
2. Add email tracking (opens, clicks)
3. Implement A/B testing framework
4. Add email preference management
5. Create follow-up sequences for non-converters

## Testing

To test the email sequence:

1. Create a test lead:
```bash
curl -X POST http://localhost:3001/api/leads \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","businessStage":"scaling"}'
```

2. Check sequence status:
```bash
curl http://localhost:3001/api/leads/{leadId}
```

3. Trigger Email 5 immediately:
```bash
curl -X POST http://localhost:3001/api/leads/{leadId}/send-conversion-email
```

## Metrics to Track

- **Open Rate**: Target 40%+ for Email 5
- **Click Rate**: Target 15%+ on strategy session CTA
- **Conversion Rate**: Target 5%+ booking rate from Email 5
- **Sequence Completion**: Track % who receive all 5 emails