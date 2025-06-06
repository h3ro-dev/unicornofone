import jwt, { SignOptions } from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { authConfig } from '../config/auth';
import { prisma } from '../config/database';
import crypto from 'crypto';

// Token payload interfaces
export interface AccessTokenPayload {
  userId: string;
  email: string;
  role: string;
}

export interface RefreshTokenPayload {
  userId: string;
  tokenId: string;
}

// Password utilities
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, authConfig.bcrypt.saltRounds);
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}

// JWT token utilities
export function generateAccessToken(payload: AccessTokenPayload): string {
  return jwt.sign(payload, authConfig.jwt.accessSecret, {
    expiresIn: authConfig.jwt.accessExpiresIn as string | number,
  });
}

export function generateRefreshToken(payload: RefreshTokenPayload): string {
  return jwt.sign(payload, authConfig.jwt.refreshSecret, {
    expiresIn: authConfig.jwt.refreshExpiresIn as string | number,
  });
}

export function verifyAccessToken(token: string): AccessTokenPayload {
  return jwt.verify(token, authConfig.jwt.accessSecret) as AccessTokenPayload;
}

export function verifyRefreshToken(token: string): RefreshTokenPayload {
  return jwt.verify(token, authConfig.jwt.refreshSecret) as RefreshTokenPayload;
}

// Database token management
export async function createRefreshToken(userId: string): Promise<string> {
  const tokenId = crypto.randomUUID();
  const token = generateRefreshToken({ userId, tokenId });
  
  // Calculate expiration date
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + 7); // 7 days
  
  // Store in database
  await prisma.refreshToken.create({
    data: {
      id: tokenId,
      token,
      userId,
      expiresAt,
    },
  });
  
  return token;
}

export async function validateRefreshToken(token: string): Promise<{ userId: string; isValid: boolean }> {
  try {
    const payload = verifyRefreshToken(token);
    
    // Check if token exists in database and is not expired
    const dbToken = await prisma.refreshToken.findUnique({
      where: { id: payload.tokenId },
    });
    
    if (!dbToken || dbToken.token !== token || dbToken.expiresAt < new Date()) {
      return { userId: '', isValid: false };
    }
    
    return { userId: payload.userId, isValid: true };
  } catch (error) {
    return { userId: '', isValid: false };
  }
}

export async function revokeRefreshToken(token: string): Promise<void> {
  try {
    const payload = verifyRefreshToken(token);
    await prisma.refreshToken.delete({
      where: { id: payload.tokenId },
    });
  } catch (error) {
    // Token might be invalid, but we don't need to throw
  }
}

export async function revokeAllUserTokens(userId: string): Promise<void> {
  await prisma.refreshToken.deleteMany({
    where: { userId },
  });
}

// Clean up expired tokens (can be run as a cron job)
export async function cleanupExpiredTokens(): Promise<void> {
  await prisma.refreshToken.deleteMany({
    where: {
      expiresAt: {
        lt: new Date(),
      },
    },
  });
}