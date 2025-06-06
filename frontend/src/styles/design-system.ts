/**
<<<<<<< Updated upstream
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
=======
 * Unicorn of One Design System
 * 
 * A clean, professional, and trustworthy design system for ambitious founders
 * aiming for massive scale without massive teams.
 */

export const colors = {
  // Primary Colors
  primary: {
    50: '#E6ECFA',
    100: '#C2D0F2',
    200: '#9BB2EA',
    300: '#7494E1',
    400: '#577DD9',
    500: '#4169E1', // Utlyze Blue - Primary brand color
    600: '#3A5FCD',
    700: '#3254B9',
    800: '#2A47A5',
    900: '#1E3691',
  },
  
  // Accent Colors
  accent: {
    50: '#F5EBF9',
    100: '#E6CCF0',
    200: '#D5AAE6',
    300: '#C488DC',
    400: '#B76FD3',
    500: '#8E44AD', // Purple accent
    600: '#803DA0',
    700: '#723693',
    800: '#642F86',
    900: '#562779',
  },
  
  // Neutral Colors
  neutral: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#E5E5E5',
    300: '#D4D4D4',
    400: '#A3A3A3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },
  
  // Semantic Colors
  success: {
    50: '#F0FDF4',
    500: '#22C55E',
    700: '#15803D',
  },
  
  warning: {
    50: '#FFFBEB',
    500: '#F59E0B',
    700: '#B45309',
  },
  
  error: {
    50: '#FEF2F2',
    500: '#EF4444',
    700: '#B91C1C',
  },
  
  info: {
    50: '#F0F9FF',
    500: '#3B82F6',
    700: '#1D4ED8',
  },
  
  // Background & Surface
  background: {
    primary: '#FFFFFF',
    secondary: '#FAFAFA',
    tertiary: '#F5F5F5',
  },
};

export const typography = {
  // Font Families
  fontFamily: {
    sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
    mono: ['Fira Code', 'Monaco', 'Consolas', 'monospace'],
  },
  
  // Font Sizes
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
>>>>>>> Stashed changes
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
    '7xl': '4.5rem',   // 72px
  },
<<<<<<< Updated upstream
=======
  
  // Font Weights
>>>>>>> Stashed changes
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
<<<<<<< Updated upstream
  lineHeight: {
=======
  
  // Line Heights
  lineHeight: {
    none: 1,
>>>>>>> Stashed changes
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
<<<<<<< Updated upstream
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
=======
  
  // Letter Spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
};

export const spacing = {
  0: '0',
  px: '1px',
  0.5: '0.125rem',  // 2px
  1: '0.25rem',     // 4px
  1.5: '0.375rem',  // 6px
  2: '0.5rem',      // 8px
  2.5: '0.625rem',  // 10px
  3: '0.75rem',     // 12px
  3.5: '0.875rem',  // 14px
  4: '1rem',        // 16px
  5: '1.25rem',     // 20px
  6: '1.5rem',      // 24px
  7: '1.75rem',     // 28px
  8: '2rem',        // 32px
  9: '2.25rem',     // 36px
  10: '2.5rem',     // 40px
  11: '2.75rem',    // 44px
  12: '3rem',       // 48px
  14: '3.5rem',     // 56px
  16: '4rem',       // 64px
  20: '5rem',       // 80px
  24: '6rem',       // 96px
  28: '7rem',       // 112px
  32: '8rem',       // 128px
  36: '9rem',       // 144px
  40: '10rem',      // 160px
  44: '11rem',      // 176px
  48: '12rem',      // 192px
  52: '13rem',      // 208px
  56: '14rem',      // 224px
  60: '15rem',      // 240px
  64: '16rem',      // 256px
  72: '18rem',      // 288px
  80: '20rem',      // 320px
  96: '24rem',      // 384px
};

export const borderRadius = {
  none: '0',
  sm: '0.125rem',   // 2px
  DEFAULT: '0.25rem', // 4px
  md: '0.375rem',   // 6px
  lg: '0.5rem',     // 8px
  xl: '0.75rem',    // 12px
  '2xl': '1rem',    // 16px
  '3xl': '1.5rem',  // 24px
  full: '9999px',
};

export const shadows = {
  none: 'none',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  primary: `0 10px 40px -10px ${colors.primary[500]}40`,
  accent: `0 10px 40px -10px ${colors.accent[500]}40`,
};

export const transitions = {
  all: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
  colors: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1), border-color 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1), fill 150ms cubic-bezier(0.4, 0, 0.2, 1), stroke 150ms cubic-bezier(0.4, 0, 0.2, 1)',
  opacity: 'opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)',
  shadow: 'box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1)',
  transform: 'transform 150ms cubic-bezier(0.4, 0, 0.2, 1)',
};
>>>>>>> Stashed changes

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
<<<<<<< Updated upstream
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
=======
};

// Semantic token exports for easier use
export const theme = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  transitions,
  breakpoints,
};

// CSS-in-JS helper utilities
export const utils = {
  // Convert pixel values to rem
  pxToRem: (px: number) => `${px / 16}rem`,
  
  // Generate responsive styles
  responsive: (styles: Record<string, any>) => {
    const result: Record<string, any> = {};
    Object.entries(styles).forEach(([breakpoint, style]) => {
      if (breakpoint === 'DEFAULT') {
        Object.assign(result, style);
      } else {
        result[`@media (min-width: ${breakpoints[breakpoint as keyof typeof breakpoints]})`] = style;
      }
    });
    return result;
  },
  
  // Truncate text with ellipsis
  truncate: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  
  // Center content
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  // Absolute center
  absoluteCenter: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  
  // Focus ring styles
  focusRing: {
    outline: 'none',
    boxShadow: `0 0 0 3px ${colors.primary[500]}33`,
  },
};

// Component-specific design tokens
export const components = {
  button: {
    padding: {
      sm: `${spacing[2]} ${spacing[3]}`,
      md: `${spacing[3]} ${spacing[4]}`,
      lg: `${spacing[4]} ${spacing[6]}`,
    },
    fontSize: {
      sm: typography.fontSize.sm,
      md: typography.fontSize.base,
      lg: typography.fontSize.lg,
    },
  },
  
  input: {
    padding: {
      sm: `${spacing[2]} ${spacing[3]}`,
      md: `${spacing[3]} ${spacing[4]}`,
      lg: `${spacing[4]} ${spacing[5]}`,
    },
    borderColor: {
      default: colors.neutral[300],
      focus: colors.primary[500],
      error: colors.error[500],
    },
  },
  
  card: {
    padding: {
      sm: spacing[4],
      md: spacing[6],
      lg: spacing[8],
    },
    borderRadius: borderRadius.xl,
    shadow: shadows.md,
  },
};

export default theme; 
>>>>>>> Stashed changes
