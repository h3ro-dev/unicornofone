# Unicorn of One Backend API

Express.js API with TypeScript for the Unicorn of One landing page.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Run in development
npm run dev

# Build for production
npm run build

# Run production build
npm start
```

## 📝 API Endpoints

### Health Check
- `GET /health` - Basic health check
- `GET /health/detailed` - Detailed health check with system info

### Lead Capture
- `POST /api/leads` - Capture a new lead
- `GET /api/leads/:id` - Get lead by ID
- `POST /api/waitlist` - Join the waitlist

### Consultation Booking
- `POST /api/consultations` - Book a consultation
- `GET /api/consultations/:id` - Get consultation by ID

## 📦 Request/Response Examples

### Create Lead
```bash
POST /api/leads
Content-Type: application/json

{
  "email": "founder@startup.com",
  "name": "John Doe",
  "company": "Awesome Startup",
  "message": "I want to scale to $1B"
}
```

### Book Consultation
```bash
POST /api/consultations
Content-Type: application/json

{
  "email": "founder@startup.com",
  "name": "John Doe",
  "company": "Awesome Startup",
  "phone": "+1234567890",
  "preferredTime": "2024-01-15T14:00:00Z",
  "timezone": "America/New_York",
  "currentRevenue": "$100k",
  "targetRevenue": "$1B",
  "biggestChallenge": "Scaling without burning out or losing focus"
}
```

## 🏗️ Architecture

- **Express.js** - Web framework
- **TypeScript** - Type safety
- **Zod** - Runtime validation
- **Helmet** - Security headers
- **CORS** - Cross-origin support
- **Rate Limiting** - API protection

## 🚀 Deployment

### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

The API is configured for Vercel serverless deployment out of the box.

## 🔒 Security

- Helmet.js for security headers
- Rate limiting (100 requests per 15 minutes)
- Input validation with Zod
- CORS configured for production domains

## 🛠️ Development

- Hot reload with tsx
- TypeScript strict mode
- ESLint configuration
- Jest for testing

## 📊 Environment Variables

See `.env.example` for all available configuration options.