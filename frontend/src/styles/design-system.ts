/**
 * Unicorn of One - Design System
 * 
 * This file contains all design tokens for the Unicorn of One project.
 * Target audience: Ambitious founders aiming for massive scale without massive teams
 * Design principles: Clarity, Trust, Focused Simplicity, Ambitious Yet Approachable
 */

// =================================================================
// COLOR PALETTE
// =================================================================

export const colors = {
  primary: {
    DEFAULT: '#4169E1', // Utlyze Blue - Trust, Technology, Growth
    light: '#5A7FE8',
    dark: '#2952D4',
    50: '#E6EBFB',
    100: '#E6EBFB',
    200: '#BCC9F5',
    300: '#92A7EE',
    400: '#6985E8',
    500: '#4169E1',
    600: '#3254C4',
    700: '#253F97',
    800: '#192A6A',
    900: '#0C153D',
  },
  accent: {
    DEFAULT: '#8E44AD', // Purple - Innovation, Creativity, Unicorn Magic
    light: '#A159BE',
    dark: '#7B3A96',
    50: '#F4E9F8',
    100: '#F4E9F8',
    200: '#E2C8EC',
    300: '#D0A7E0',
    400: '#BE86D4',
    500: '#8E44AD',
    600: '#7A3A96',
    700: '#5D2C73',
    800: '#401F50',
    900: '#23112D',
  },
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
  semantic: {
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
  },
  background: {
    primary: '#FFFFFF',
    secondary: '#F9FAFB',
    tertiary: '#F3F4F6',
  },
  text: {
    primary: '#111827',
    secondary: '#374151',
    tertiary: '#6B7280',
    inverse: '#FFFFFF',
  },
} as const;

// =================================================================
// TYPOGRAPHY
// =================================================================

export const typography = {
  fontFamily: {
    sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'].join(', '),
    heading: ['Lexend', 'Inter', 'sans-serif'].join(', '),
    mono: ['JetBrains Mono', 'Courier New', 'monospace'].join(', '),
  },
  fontSize: {
    xs: '0.75rem',     // 12px
    sm: '0.875rem',    // 14px
    base: '1rem',      // 16px
    lg: '1.125rem',    // 18px
    xl: '1.25rem',     // 20px
    '2xl': '1.5rem',   // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
    '7xl': '4.5rem',   // 72px
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  lineHeight: {
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  letterSpacing: {
    tight: '-0.05em',
    normal: '0',
    wide: '0.05em',
  },
} as const;

// =================================================================
// SPACING
// =================================================================

export const spacing = {
  0: '0',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px
  10: '2.5rem',   // 40px
  12: '3rem',     // 48px
  16: '4rem',     // 64px
  20: '5rem',     // 80px
  24: '6rem',     // 96px
  32: '8rem',     // 128px
  40: '10rem',    // 160px
  48: '12rem',    // 192px
  56: '14rem',    // 224px
  64: '16rem',    // 256px
} as const;

// =================================================================
// LAYOUT
// =================================================================

export const layout = {
  container: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem',    // 2px
    DEFAULT: '0.25rem', // 4px
    md: '0.375rem',    // 6px
    lg: '0.5rem',      // 8px
    xl: '0.75rem',     // 12px
    '2xl': '1rem',     // 16px
    '3xl': '1.5rem',   // 24px
    full: '9999px',
  },
} as const;

// =================================================================
// SHADOWS
// =================================================================

export const shadows = {
  xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  none: '0 0 #0000',
  primary: '0 4px 15px rgb(65 105 225 / 0.3)',
  'primary-lg': '0 6px 20px rgb(65 105 225 / 0.4)',
  accent: '0 4px 15px rgb(142 68 173 / 0.3)',
} as const;

// =================================================================
// ANIMATIONS
// =================================================================

export const animation = {
  duration: {
    instant: '100ms',
    fast: '150ms',
    normal: '250ms',
    slow: '350ms',
    slower: '500ms',
  },
  easing: {
    linear: 'linear',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
  transition: {
    colors: 'color 150ms cubic-bezier(0.4, 0, 0.2, 1), background-color 150ms cubic-bezier(0.4, 0, 0.2, 1), border-color 150ms cubic-bezier(0.4, 0, 0.2, 1)',
    transform: 'transform 250ms cubic-bezier(0, 0, 0.2, 1)',
    shadow: 'box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    all: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const;

// =================================================================
// GRADIENTS
// =================================================================

export const gradients = {
  primary: 'linear-gradient(135deg, #4169E1 0%, #8E44AD 100%)',
  primaryReverse: 'linear-gradient(135deg, #8E44AD 0%, #4169E1 100%)',
  light: 'linear-gradient(135deg, #E6EBFB 0%, #F4E9F8 100%)',
  dark: 'linear-gradient(135deg, #192A6A 0%, #23112D 100%)',
} as const;

// =================================================================
// BREAKPOINTS
// =================================================================

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// =================================================================
// Z-INDEX
// =================================================================

export const zIndex = {
  0: 0,
  10: 10,
  20: 20,
  30: 30,
  40: 40,
  50: 50,
  dropdown: 100,
  sticky: 200,
  modal: 300,
  popover: 400,
  tooltip: 500,
} as const;

// =================================================================
// COMPONENT STYLES
// =================================================================

export const componentStyles = {
  button: {
    base: {
      padding: `${spacing[3]} ${spacing[6]}`,
      fontSize: typography.fontSize.base,
      fontWeight: typography.fontWeight.semibold,
      borderRadius: layout.borderRadius.lg,
      transition: animation.transition.all,
      cursor: 'pointer',
      border: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      userSelect: 'none',
      whiteSpace: 'nowrap',
    },
    variants: {
      primary: {
        backgroundColor: colors.primary.DEFAULT,
        color: colors.text.inverse,
        boxShadow: shadows.sm,
        '&:hover': {
          backgroundColor: colors.primary.dark,
          boxShadow: shadows.md,
          transform: 'translateY(-1px)',
        },
      },
      secondary: {
        backgroundColor: 'transparent',
        color: colors.primary.DEFAULT,
        border: `2px solid ${colors.primary.DEFAULT}`,
        '&:hover': {
          backgroundColor: colors.primary[100],
          borderColor: colors.primary.dark,
          color: colors.primary.dark,
        },
      },
      cta: {
        background: gradients.primary,
        color: colors.text.inverse,
        padding: `${spacing[4]} ${spacing[8]}`,
        fontSize: typography.fontSize.lg,
        fontWeight: typography.fontWeight.bold,
        borderRadius: layout.borderRadius.xl,
        boxShadow: shadows.primary,
        position: 'relative',
        overflow: 'hidden',
        '&:hover': {
          boxShadow: shadows['primary-lg'],
          transform: 'translateY(-2px)',
        },
      },
    },
    sizes: {
      sm: {
        padding: `${spacing[2]} ${spacing[4]}`,
        fontSize: typography.fontSize.sm,
      },
      md: {
        padding: `${spacing[3]} ${spacing[6]}`,
        fontSize: typography.fontSize.base,
      },
      lg: {
        padding: `${spacing[4]} ${spacing[8]}`,
        fontSize: typography.fontSize.lg,
      },
    },
  },
  card: {
    base: {
      backgroundColor: colors.background.primary,
      border: `1px solid ${colors.gray[200]}`,
      borderRadius: layout.borderRadius.xl,
      padding: spacing[6],
      boxShadow: shadows.sm,
      transition: animation.transition.all,
    },
    variants: {
      elevated: {
        border: 'none',
        boxShadow: shadows.lg,
      },
      interactive: {
        cursor: 'pointer',
        '&:hover': {
          boxShadow: shadows.xl,
          transform: 'translateY(-4px)',
          borderColor: colors.primary[200],
        },
      },
    },
  },
  input: {
    base: {
      width: '100%',
      padding: `${spacing[3]} ${spacing[4]}`,
      fontSize: typography.fontSize.base,
      color: colors.text.primary,
      backgroundColor: colors.background.primary,
      border: `1px solid ${colors.gray[300]}`,
      borderRadius: layout.borderRadius.lg,
      transition: animation.transition.all,
      '&:hover': {
        borderColor: colors.gray[400],
      },
      '&:focus': {
        outline: 'none',
        borderColor: colors.primary.DEFAULT,
        boxShadow: `0 0 0 3px ${colors.primary[100]}`,
      },
    },
  },
} as const;

// =================================================================
// UTILITY FUNCTIONS
// =================================================================

/**
 * Get a CSS variable value from the design system
 */
export function getCSSVariable(path: string): string {
  return `var(--${path.replace(/\./g, '-')})`;
}

/**
 * Generate CSS custom properties from design tokens
 */
export function generateCSSVariables(): string {
  const cssVars: string[] = [];
  
  const processObject = (obj: any, prefix = '') => {
    Object.entries(obj).forEach(([key, value]) => {
      const varName = prefix ? `${prefix}-${key}` : key;
      
      if (typeof value === 'object' && !Array.isArray(value)) {
        processObject(value, varName);
      } else {
        cssVars.push(`--${varName}: ${value};`);
      }
    });
  };
  
  processObject({ colors, spacing, typography, shadows });
  
  return `:root {\n  ${cssVars.join('\n  ')}\n}`;
}

// Export all design system tokens
export const designSystem = {
  colors,
  typography,
  spacing,
  layout,
  shadows,
  animation,
  gradients,
  breakpoints,
  zIndex,
  componentStyles,
} as const;

export default designSystem;