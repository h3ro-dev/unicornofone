# Unicorn of One - Backend Infrastructure

## Overview

The backend infrastructure for Unicorn of One is built with a modern, scalable architecture using TypeScript, Express.js, PostgreSQL, and Prisma ORM. It provides secure authentication, user management, and API endpoints for the application.

## Tech Stack

- **Runtime**: Node.js (v18+)
- **Language**: TypeScript
- **Framework**: Express.js
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: JWT (Access + Refresh tokens)
- **Security**: Bcrypt, Helmet, CORS, Rate Limiting

## Architecture

### Directory Structure

```
backend/
├── src/
│   ├── api/
│   │   └── server.ts          # Express server setup
│   ├── config/
│   │   ├── auth.ts           # Authentication configuration
│   │   └── database.ts       # Database connection
│   ├── controllers/
│   │   ├── authController.ts # Authentication endpoints
│   │   ├── userController.ts # User management
│   │   ├── leadController.ts # Lead management
│   │   └── consultationController.ts
│   ├── middleware/
│   │   ├── auth.ts          # JWT validation middleware
│   │   └── validation.ts    # Request validation
│   ├── routes/
│   │   ├── auth.ts          # Auth routes
│   │   ├── users.ts         # User routes
│   │   ├── api.ts           # API routes
│   │   └── health.ts        # Health check
│   └── utils/
│       ├── auth.ts          # Auth utilities
│       └── schemas.ts       # Zod schemas
├── prisma/
│   └── schema.prisma        # Database schema
├── package.json
├── tsconfig.json
└── .env.example
```

## Database Schema

### User Model
- Authentication and profile management
- Role-based access control (USER, ADMIN, SUPER_ADMIN)
- Profile fields: company, position, phone, website, bio
- Tracking: createdAt, updatedAt, lastLoginAt

### RefreshToken Model
- Secure token storage for JWT refresh flow
- Automatic expiration handling
- Device/session management

### Lead Model
- Customer lead capture
- Status tracking (NEW, CONTACTED, QUALIFIED, etc.)
- Integration with consultation booking
- Conversion tracking

### Consultation Model
- Meeting/consultation scheduling
- Status management
- Integration with calendar systems
- Follow-up tracking

## Authentication System

### JWT Implementation
- **Access Token**: Short-lived (15 minutes)
- **Refresh Token**: Long-lived (7 days)
- Secure httpOnly cookie storage
- Token rotation on refresh

### Security Features
- Password hashing with bcrypt (10 rounds)
- Rate limiting on auth endpoints
- CORS configuration
- Helmet.js security headers
- Request validation with Zod

## API Endpoints

### Authentication (`/auth`)
- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- `POST /auth/refresh` - Refresh access token
- `POST /auth/logout` - Logout (single session)
- `POST /auth/logout-all` - Logout all sessions
- `GET /auth/profile` - Get current user profile
- `PUT /auth/profile` - Update profile

### User Management (`/api/users`) - Admin only
- `GET /api/users` - List all users (paginated)
- `GET /api/users/:id` - Get user details
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user
- `POST /api/users/:id/change-password` - Change user password

### Lead Management (`/api`)
- `POST /api/leads` - Create lead
- `GET /api/leads/:id` - Get lead details
- `POST /api/waitlist` - Join waitlist

### Consultation (`/api`)
- `POST /api/consultations` - Book consultation
- `GET /api/consultations/:id` - Get consultation details

## Environment Configuration

Create a `.env` file based on `.env.example`:

```env
# Application
NODE_ENV=development
PORT=3001

# Database
DATABASE_URL="postgresql://user:password@localhost:5432/unicornofone?schema=public"

# JWT Authentication
JWT_ACCESS_SECRET=your-super-secret-access-token-key
JWT_REFRESH_SECRET=your-super-secret-refresh-token-key
JWT_ACCESS_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:3000
```

## Setup Instructions

1. **Install Dependencies**
   ```bash
   cd backend
   npm install
   ```

2. **Setup Database**
   ```bash
   # Create PostgreSQL database
   createdb unicornofone
   
   # Run Prisma migrations
   npx prisma migrate dev --name init
   
   # Generate Prisma client
   npx prisma generate
   ```

3. **Configure Environment**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Run Development Server**
   ```bash
   npm run dev
   ```

## Database Management

### Prisma Commands
- `npx prisma migrate dev` - Create migration
- `npx prisma generate` - Generate Prisma client
- `npx prisma studio` - Open Prisma Studio (GUI)
- `npx prisma db push` - Push schema changes (dev only)
- `npx prisma migrate deploy` - Deploy migrations (production)

### Creating Admin User

After setting up the database, you can create an admin user:

```typescript
// scripts/create-admin.ts
import { prisma } from '../src/config/database';
import { hashPassword } from '../src/utils/auth';

async function createAdmin() {
  const password = await hashPassword('your-secure-password');
  
  const admin = await prisma.user.create({
    data: {
      email: 'admin@unicornofone.ai',
      password,
      name: 'Admin User',
      role: 'SUPER_ADMIN',
      emailVerified: true,
    },
  });
  
  console.log('Admin created:', admin);
}

createAdmin();
```

## Production Deployment

### Vercel Deployment
The backend is configured for Vercel deployment:

1. **vercel.json** configuration is included
2. Serverless function support
3. Environment variables in Vercel dashboard

### Database Hosting Options
- **Supabase**: PostgreSQL with built-in auth
- **Neon**: Serverless PostgreSQL
- **Railway**: Simple PostgreSQL hosting
- **AWS RDS**: Enterprise-grade PostgreSQL

### Security Checklist
- [ ] Strong JWT secrets in production
- [ ] Database SSL enabled
- [ ] Rate limiting configured
- [ ] CORS properly configured
- [ ] Environment variables secured
- [ ] Regular security updates
- [ ] Database backups enabled

## Monitoring & Maintenance

### Health Check
- Endpoint: `GET /health`
- Checks: Server status, database connection

### Logging
- Development: Console logging
- Production: Consider services like LogDNA, Datadog

### Error Handling
- Global error handler
- Proper status codes
- Sanitized error messages in production

## Future Enhancements

1. **Email Service Integration**
   - SendGrid/Postmark for transactional emails
   - Email verification flow
   - Password reset functionality

2. **Advanced Features**
   - Two-factor authentication (2FA)
   - OAuth providers (Google, GitHub)
   - API key authentication for services
   - Webhook system

3. **Performance Optimizations**
   - Redis caching
   - Database query optimization
   - Connection pooling

4. **Analytics & Monitoring**
   - Request tracking
   - Performance metrics
   - Error tracking (Sentry)

## Support

For questions or issues with the backend infrastructure, please refer to the main project documentation or contact the development team.