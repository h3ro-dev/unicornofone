import { Router, Request, Response } from 'express';

const router = Router();

<<<<<<< Updated upstream
// Basic health check
router.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
=======
// GET /api/health
router.get('/', (req: Request, res: Response) => {
  res.json({
    status: 'healthy',
    service: 'Unicorn of One API',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
>>>>>>> Stashed changes
    environment: process.env.NODE_ENV || 'development'
  });
});

<<<<<<< Updated upstream
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
=======
// GET /api/health/detailed
router.get('/detailed', (req: Request, res: Response) => {
  res.json({
    status: 'healthy',
    service: 'Unicorn of One API',
    version: process.env.npm_package_version || '1.0.0',
    timestamp: new Date().toISOString(),
    uptime: {
      seconds: process.uptime(),
      readable: formatUptime(process.uptime())
    },
    memory: {
      ...process.memoryUsage(),
      percentUsed: (process.memoryUsage().heapUsed / process.memoryUsage().heapTotal * 100).toFixed(2) + '%'
    },
    environment: {
      nodeVersion: process.version,
      platform: process.platform,
      env: process.env.NODE_ENV || 'development'
>>>>>>> Stashed changes
    }
  });
});

<<<<<<< Updated upstream
export default router;
=======
function formatUptime(seconds: number): string {
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  
  const parts = [];
  if (days > 0) parts.push(`${days}d`);
  if (hours > 0) parts.push(`${hours}h`);
  if (minutes > 0) parts.push(`${minutes}m`);
  if (secs > 0) parts.push(`${secs}s`);
  
  return parts.join(' ') || '0s';
}

export default router; 
>>>>>>> Stashed changes
