import { Router, Request, Response } from 'express';

const router = Router();

// Basic health check
router.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Detailed health check
router.get('/detailed', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
    memory: {
      used: process.memoryUsage(),
      free: process.memoryUsage().heapUsed / process.memoryUsage().heapTotal
    },
    version: {
      node: process.version,
      api: '1.0.0'
    }
  });
});

export default router;