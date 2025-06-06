import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import path from 'path';

// Import database connection
import { testDatabaseConnection } from '../config/database';

// Import routers
import healthRouter from '../routes/health';
import apiRouter from '../routes/api';
import authRouter from '../routes/auth';
import usersRouter from '../routes/users';

// Load environment variables
dotenv.config();

// Load environment variables
dotenv.config({ path: path.join(__dirname, '../../.env') });

// Import routes
import healthRouter from '../routes/health';
import apiRouter from '../routes/api';
import contactRouter from '../routes/contact';
import strategySessionRouter from '../routes/strategy-session';

// Create Express app
const app: Express = express();

// Port configuration
const PORT = process.env.PORT || 3001;
const NODE_ENV = process.env.NODE_ENV || 'development';
const isDevelopment = NODE_ENV !== 'production';

// Security middleware
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" }
}));

// CORS configuration
const corsOptions = {
  origin: process.env.ALLOWED_ORIGINS?.split(',') || (isDevelopment 
    ? ['http://localhost:3000', 'http://localhost:3001'] 
    : ['https://unicornofone.ai', 'https://www.unicornofone.ai']),
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Cookie parser middleware
app.use(cookieParser());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});
app.use('/api/', limiter);

// Auth-specific rate limiting (stricter)
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: 'Too many authentication attempts, please try again later.',
  skipSuccessfulRequests: true,
});
app.use('/auth/login', authLimiter);
app.use('/auth/register', authLimiter);

// Logging
if (NODE_ENV !== 'test') {
  app.use(morgan('combined'));
}

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Request logging middleware (development only)
if (isDevelopment) {
  app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
  });
}

// Routes
app.use('/health', healthRouter);
app.use('/auth', authRouter);
app.use('/api', apiRouter);
app.use('/api/users', usersRouter);


// Root endpoint
app.get('/', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    service: 'Unicorn of One API',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    environment: NODE_ENV,
    endpoints: {
      health: '/health',
      auth: '/auth',
      api: '/api',
      users: '/api/users'
    }
  });
});

// Routes
app.use('/health', healthRouter);
app.use('/api', apiRouter);
app.use('/api/health', healthRouter);
app.use('/api/contact', contactRouter);
app.use('/api/strategy-session', strategySessionRouter);

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    error: 'Not Found',
    message: `Route ${req.originalUrl} not found`,
    timestamp: new Date().toISOString()
  });
});

// Global error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Error:', err);
  
  const status = (err as any).status || 500;
  const message = isDevelopment ? err.message : 'Internal Server Error';
  
  res.status(status).json({
    error: status === 500 ? 'Internal Server Error' : 'Error',
    message,
    timestamp: new Date().toISOString(),
    ...(isDevelopment && { stack: err.stack })
  });
});

// Initialize database connection and start server
async function startServer() {
  try {
    // Test database connection
    const dbConnected = await testDatabaseConnection();
    
    if (!dbConnected && process.env.NODE_ENV === 'production') {
      console.error('❌ Failed to connect to database. Exiting...');
      process.exit(1);
    }
    
    // Start server (only if not in Vercel environment)
    if (process.env.VERCEL !== '1') {
      app.listen(PORT, () => {
        console.log(`🚀 Unicorn of One API running on port ${PORT}`);
        console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
        console.log(`📊 Database: ${dbConnected ? 'Connected' : 'Not connected'}`);
      });
    }
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }

// Start server (only if not in test environment or Vercel)
if (NODE_ENV !== 'test' && process.env.VERCEL !== '1') {
  app.listen(PORT, () => {
    console.log(`🚀 Unicorn of One API running on port ${PORT}`);
    console.log(`📍 Environment: ${NODE_ENV}`);
    console.log(`🔗 Health check: http://localhost:${PORT}/`);
  });
}

// Start the server
startServer();

// Export for Vercel
export default app;
