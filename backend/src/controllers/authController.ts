import { Request, Response } from 'express';
import { z } from 'zod';
import { prisma } from '../config/database';
import { 
  hashPassword, 
  verifyPassword, 
  generateAccessToken, 
  createRefreshToken,
  validateRefreshToken,
  revokeRefreshToken,
  revokeAllUserTokens
} from '../utils/auth';
import { authConfig } from '../config/auth';

// Validation schemas
const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(100),
  name: z.string().min(2).max(100),
  company: z.string().optional(),
  position: z.string().optional(),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

const refreshSchema = z.object({
  refreshToken: z.string(),
});

// Register new user
export async function register(req: Request, res: Response) {
  try {
    const data = registerSchema.parse(req.body);
    
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: data.email },
    });
    
    if (existingUser) {
      return res.status(409).json({ error: 'Email already registered' });
    }
    
    // Hash password
    const hashedPassword = await hashPassword(data.password);
    
    // Create user
    const user = await prisma.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
        name: data.name,
        company: data.company,
        position: data.position,
      },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        company: true,
        position: true,
        createdAt: true,
      },
    });
    
    // Generate tokens
    const accessToken = generateAccessToken({
      userId: user.id,
      email: user.email,
      role: user.role,
    });
    
    const refreshToken = await createRefreshToken(user.id);
    
    // Set refresh token as httpOnly cookie
    res.cookie('refreshToken', refreshToken, authConfig.cookie);
    
    res.status(201).json({
      user,
      accessToken,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: 'Invalid input', details: error.errors });
    }
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Failed to register user' });
  }
}

// Login user
export async function login(req: Request, res: Response) {
  try {
    const data = loginSchema.parse(req.body);
    
    // Find user
    const user = await prisma.user.findUnique({
      where: { email: data.email },
    });
    
    if (!user || !user.isActive) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Verify password
    const isValidPassword = await verifyPassword(data.password, user.password);
    
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Update last login
    await prisma.user.update({
      where: { id: user.id },
      data: { lastLoginAt: new Date() },
    });
    
    // Generate tokens
    const accessToken = generateAccessToken({
      userId: user.id,
      email: user.email,
      role: user.role,
    });
    
    const refreshToken = await createRefreshToken(user.id);
    
    // Set refresh token as httpOnly cookie
    res.cookie('refreshToken', refreshToken, authConfig.cookie);
    
    res.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        company: user.company,
        position: user.position,
      },
      accessToken,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: 'Invalid input', details: error.errors });
    }
    console.error('Login error:', error);
    res.status(500).json({ error: 'Failed to login' });
  }
}

// Refresh access token
export async function refresh(req: Request, res: Response) {
  try {
    const refreshToken = req.cookies.refreshToken || req.body.refreshToken;
    
    if (!refreshToken) {
      return res.status(401).json({ error: 'Refresh token required' });
    }
    
    // Validate refresh token
    const { userId, isValid } = await validateRefreshToken(refreshToken);
    
    if (!isValid) {
      return res.status(401).json({ error: 'Invalid refresh token' });
    }
    
    // Get user
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        role: true,
        isActive: true,
      },
    });
    
    if (!user || !user.isActive) {
      return res.status(401).json({ error: 'User not found or inactive' });
    }
    
    // Generate new tokens
    const newAccessToken = generateAccessToken({
      userId: user.id,
      email: user.email,
      role: user.role,
    });
    
    // Optionally rotate refresh token
    const newRefreshToken = await createRefreshToken(user.id);
    await revokeRefreshToken(refreshToken);
    
    res.cookie('refreshToken', newRefreshToken, authConfig.cookie);
    
    res.json({
      accessToken: newAccessToken,
    });
  } catch (error) {
    console.error('Refresh error:', error);
    res.status(500).json({ error: 'Failed to refresh token' });
  }
}

// Logout user
export async function logout(req: Request, res: Response) {
  try {
    const refreshToken = req.cookies.refreshToken;
    
    if (refreshToken) {
      await revokeRefreshToken(refreshToken);
    }
    
    res.clearCookie('refreshToken');
    res.json({ message: 'Logged out successfully' });
  } catch (error) {
    console.error('Logout error:', error);
    res.status(500).json({ error: 'Failed to logout' });
  }
}

// Logout from all devices
export async function logoutAll(req: Request, res: Response) {
  try {
    if (!req.user) {
      return res.status(401).json({ error: 'Authentication required' });
    }
    
    await revokeAllUserTokens(req.user.userId);
    
    res.clearCookie('refreshToken');
    res.json({ message: 'Logged out from all devices' });
  } catch (error) {
    console.error('Logout all error:', error);
    res.status(500).json({ error: 'Failed to logout from all devices' });
  }
}

// Get current user profile
export async function getProfile(req: Request, res: Response) {
  try {
    if (!req.user) {
      return res.status(401).json({ error: 'Authentication required' });
    }
    
    const user = await prisma.user.findUnique({
      where: { id: req.user.userId },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        company: true,
        position: true,
        phone: true,
        website: true,
        bio: true,
        avatar: true,
        emailVerified: true,
        createdAt: true,
        lastLoginAt: true,
      },
    });
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.json({ user });
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({ error: 'Failed to get profile' });
  }
}

// Update user profile
export async function updateProfile(req: Request, res: Response) {
  try {
    if (!req.user) {
      return res.status(401).json({ error: 'Authentication required' });
    }
    
    const updateSchema = z.object({
      name: z.string().min(2).max(100).optional(),
      company: z.string().optional(),
      position: z.string().optional(),
      phone: z.string().optional(),
      website: z.string().url().optional().or(z.literal('')),
      bio: z.string().max(500).optional(),
    });
    
    const data = updateSchema.parse(req.body);
    
    const updatedUser = await prisma.user.update({
      where: { id: req.user.userId },
      data,
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        company: true,
        position: true,
        phone: true,
        website: true,
        bio: true,
        avatar: true,
        emailVerified: true,
        createdAt: true,
        lastLoginAt: true,
      },
    });
    
    res.json({ user: updatedUser });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: 'Invalid input', details: error.errors });
    }
    console.error('Update profile error:', error);
    res.status(500).json({ error: 'Failed to update profile' });
  }
}

// Export all functions
export default {
  register,
  login,
  refresh,
  logout,
  logoutAll,
  getProfile,
  updateProfile,
};