import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

// Import database connection
import { testDatabaseConnection } from '../config/database';

// Import routers
import healthRouter from '../routes/health';
import apiRouter from '../routes/api';
import authRouter from '../routes/auth';
import usersRouter from '../routes/users';

// Load environment variables
dotenv.config();

// Create Express app
const app: Express = express();

// Port configuration
const PORT = process.env.PORT || 3001;
const isDevelopment = process.env.NODE_ENV !== 'production';

// Security middleware
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" }
}));

// CORS configuration
const corsOptions = {
  origin: isDevelopment 
    ? ['http://localhost:3000', 'http://localhost:3001'] 
    : ['https://unicornofone.ai', 'https://www.unicornofone.ai'],
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Cookie parser middleware
app.use(cookieParser());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
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
    message: 'Unicorn of One API',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      auth: '/auth',
      api: '/api',
      users: '/api/users'
    }
  });
});

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    error: 'Not Found',
    message: `Cannot ${req.method} ${req.path}`
  });
});

// Global error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Error:', err);
  
  const status = (err as any).status || 500;
  const message = isDevelopment ? err.message : 'Internal Server Error';
  
  res.status(status).json({
    error: true,
    message,
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
}

// Start the server
startServer();

// Export for Vercel
export default app;