import { Request, Response } from 'express';
import { z } from 'zod';
import { prisma } from '../config/database';
import { hashPassword } from '../utils/auth';

// Get all users (admin only)
export async function getAllUsers(req: Request, res: Response) {
  try {
    const { page = 1, limit = 10, search = '', role = '' } = req.query;
    const offset = (Number(page) - 1) * Number(limit);
    
    const where: any = {};
    
    if (search) {
      where.OR = [
        { email: { contains: String(search), mode: 'insensitive' } },
        { name: { contains: String(search), mode: 'insensitive' } },
        { company: { contains: String(search), mode: 'insensitive' } },
      ];
    }
    
    if (role) {
      where.role = role;
    }
    
    const [users, total] = await Promise.all([
      prisma.user.findMany({
        where,
        select: {
          id: true,
          email: true,
          name: true,
          role: true,
          company: true,
          position: true,
          isActive: true,
          emailVerified: true,
          createdAt: true,
          lastLoginAt: true,
        },
        skip: offset,
        take: Number(limit),
        orderBy: { createdAt: 'desc' },
      }),
      prisma.user.count({ where }),
    ]);
    
    res.json({
      users,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        pages: Math.ceil(total / Number(limit)),
      },
    });
  } catch (error) {
    console.error('Get all users error:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
}

// Get user by ID
export async function getUserById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    
    const user = await prisma.user.findUnique({
      where: { id },
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
        isActive: true,
        emailVerified: true,
        createdAt: true,
        updatedAt: true,
        lastLoginAt: true,
        _count: {
          select: {
            leads: true,
            consultations: true,
          },
        },
      },
    });
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.json({ user });
  } catch (error) {
    console.error('Get user by ID error:', error);
    res.status(500).json({ error: 'Failed to fetch user' });
  }
}

// Update user (admin only)
export async function updateUser(req: Request, res: Response) {
  try {
    const { id } = req.params;
    
    const updateSchema = z.object({
      name: z.string().min(2).max(100).optional(),
      email: z.string().email().optional(),
      role: z.enum(['USER', 'ADMIN', 'SUPER_ADMIN']).optional(),
      company: z.string().optional(),
      position: z.string().optional(),
      phone: z.string().optional(),
      website: z.string().url().optional().or(z.literal('')),
      bio: z.string().max(500).optional(),
      isActive: z.boolean().optional(),
      emailVerified: z.boolean().optional(),
    });
    
    const data = updateSchema.parse(req.body);
    
    // Check if email is being changed and if it's already taken
    if (data.email) {
      const existingUser = await prisma.user.findFirst({
        where: {
          email: data.email,
          NOT: { id },
        },
      });
      
      if (existingUser) {
        return res.status(409).json({ error: 'Email already in use' });
      }
    }
    
    const updatedUser = await prisma.user.update({
      where: { id },
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
        isActive: true,
        emailVerified: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    
    res.json({ user: updatedUser });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: 'Invalid input', details: error.errors });
    }
    console.error('Update user error:', error);
    res.status(500).json({ error: 'Failed to update user' });
  }
}

// Delete user (admin only)
export async function deleteUser(req: Request, res: Response) {
  try {
    const { id } = req.params;
    
    // Don't allow deleting yourself
    if (req.user?.userId === id) {
      return res.status(400).json({ error: 'Cannot delete your own account' });
    }
    
    await prisma.user.delete({
      where: { id },
    });
    
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Delete user error:', error);
    res.status(500).json({ error: 'Failed to delete user' });
  }
}

// Change user password (admin only)
export async function changeUserPassword(req: Request, res: Response) {
  try {
    const { id } = req.params;
    
    const passwordSchema = z.object({
      password: z.string().min(8).max(100),
    });
    
    const { password } = passwordSchema.parse(req.body);
    
    const hashedPassword = await hashPassword(password);
    
    await prisma.user.update({
      where: { id },
      data: { password: hashedPassword },
    });
    
    res.json({ message: 'Password changed successfully' });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: 'Invalid input', details: error.errors });
    }
    console.error('Change password error:', error);
    res.status(500).json({ error: 'Failed to change password' });
  }
}

// Export all functions
export default {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  changeUserPassword,
};