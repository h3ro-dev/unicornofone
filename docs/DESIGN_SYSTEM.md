# Unicorn of One - Design System

## 🎨 Brand Identity

### Mission
Empower solo founders to build billion-dollar businesses through radical focus and AI leverage.

### Design Principles
1. **Clarity Above All** - Every element serves a clear purpose
2. **Trust Through Competence** - Professional design that instills confidence
3. **Focused Simplicity** - Minimize distractions, maximize impact
4. **Ambitious Yet Approachable** - Big dreams, human touch

## 🎨 Color Palette

### Primary Colors
```css
--color-primary: #4169E1; /* Utlyze Blue - Trust, Technology, Growth */
--color-primary-light: #5A7FE8;
--color-primary-dark: #2952D4;
--color-primary-100: #E6EBFB;
--color-primary-200: #BCC9F5;
--color-primary-300: #92A7EE;
--color-primary-400: #6985E8;
--color-primary-500: #4169E1;
--color-primary-600: #3254C4;
--color-primary-700: #253F97;
--color-primary-800: #192A6A;
--color-primary-900: #0C153D;
```

### Accent Colors
```css
--color-accent: #8E44AD; /* Purple - Innovation, Creativity, Unicorn Magic */
--color-accent-light: #A159BE;
--color-accent-dark: #7B3A96;
--color-accent-100: #F4E9F8;
--color-accent-200: #E2C8EC;
--color-accent-300: #D0A7E0;
--color-accent-400: #BE86D4;
--color-accent-500: #8E44AD;
--color-accent-600: #7A3A96;
--color-accent-700: #5D2C73;
--color-accent-800: #401F50;
--color-accent-900: #23112D;
```

### Neutral Colors
```css
--color-gray-50: #F9FAFB;
--color-gray-100: #F3F4F6;
--color-gray-200: #E5E7EB;
--color-gray-300: #D1D5DB;
--color-gray-400: #9CA3AF;
--color-gray-500: #6B7280;
--color-gray-600: #4B5563;
--color-gray-700: #374151;
--color-gray-800: #1F2937;
--color-gray-900: #111827;
```

### Semantic Colors
```css
--color-success: #10B981;
--color-warning: #F59E0B;
--color-error: #EF4444;
--color-info: #3B82F6;
```

## 📐 Typography

### Font Families
```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-heading: 'Lexend', var(--font-primary);
--font-mono: 'JetBrains Mono', 'Courier New', monospace;
```

### Font Sizes
```css
--text-xs: 0.75rem;     /* 12px */
--text-sm: 0.875rem;    /* 14px */
--text-base: 1rem;      /* 16px */
--text-lg: 1.125rem;    /* 18px */
--text-xl: 1.25rem;     /* 20px */
--text-2xl: 1.5rem;     /* 24px */
--text-3xl: 1.875rem;   /* 30px */
--text-4xl: 2.25rem;    /* 36px */
--text-5xl: 3rem;       /* 48px */
--text-6xl: 3.75rem;    /* 60px */
--text-7xl: 4.5rem;     /* 72px */
```

### Font Weights
```css
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
```

### Line Heights
```css
--leading-tight: 1.25;
--leading-snug: 1.375;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
--leading-loose: 2;
```

## 📏 Spacing System

Based on 8px grid system:
```css
--space-0: 0;
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-5: 1.25rem;  /* 20px */
--space-6: 1.5rem;   /* 24px */
--space-8: 2rem;     /* 32px */
--space-10: 2.5rem;  /* 40px */
--space-12: 3rem;    /* 48px */
--space-16: 4rem;    /* 64px */
--space-20: 5rem;    /* 80px */
--space-24: 6rem;    /* 96px */
--space-32: 8rem;    /* 128px */
--space-40: 10rem;   /* 160px */
--space-48: 12rem;   /* 192px */
--space-56: 14rem;   /* 224px */
--space-64: 16rem;   /* 256px */
```

## 🔲 Layout

### Container Widths
```css
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1536px;
```

### Border Radius
```css
--radius-none: 0;
--radius-sm: 0.125rem;   /* 2px */
--radius-default: 0.25rem; /* 4px */
--radius-md: 0.375rem;   /* 6px */
--radius-lg: 0.5rem;     /* 8px */
--radius-xl: 0.75rem;    /* 12px */
--radius-2xl: 1rem;      /* 16px */
--radius-3xl: 1.5rem;    /* 24px */
--radius-full: 9999px;
```

## 🌗 Shadows

```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-default: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
--shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
--shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
```

## 🎯 Components

### Buttons

#### Primary Button
```css
.btn-primary {
  background: var(--color-primary);
  color: white;
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-lg);
  font-weight: var(--font-semibold);
  transition: all 0.2s;
  box-shadow: var(--shadow-default);
}

.btn-primary:hover {
  background: var(--color-primary-dark);
  box-shadow: var(--shadow-md);
  transform: translateY(-1px);
}
```

#### Secondary Button
```css
.btn-secondary {
  background: white;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  padding: calc(var(--space-3) - 2px) calc(var(--space-6) - 2px);
  border-radius: var(--radius-lg);
  font-weight: var(--font-semibold);
  transition: all 0.2s;
}

.btn-secondary:hover {
  background: var(--color-primary-100);
}
```

#### CTA Button (Hero)
```css
.btn-cta {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%);
  color: white;
  padding: var(--space-4) var(--space-8);
  border-radius: var(--radius-xl);
  font-weight: var(--font-bold);
  font-size: var(--text-lg);
  box-shadow: 0 4px 15px rgb(65 105 225 / 0.3);
  transition: all 0.3s;
}

.btn-cta:hover {
  box-shadow: 0 6px 20px rgb(65 105 225 / 0.4);
  transform: translateY(-2px);
}
```

### Cards

```css
.card {
  background: white;
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  box-shadow: var(--shadow-default);
  border: 1px solid var(--color-gray-100);
}

.card-elevated {
  box-shadow: var(--shadow-lg);
  border: none;
}

.card-interactive:hover {
  box-shadow: var(--shadow-xl);
  transform: translateY(-4px);
  transition: all 0.3s;
}
```

### Forms

```css
.input {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  border: 1px solid var(--color-gray-300);
  border-radius: var(--radius-lg);
  font-size: var(--text-base);
  transition: all 0.2s;
}

.input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px var(--color-primary-100);
}
```

## 🎭 Animation & Transitions

```css
/* Transition Durations */
--duration-fast: 150ms;
--duration-normal: 250ms;
--duration-slow: 350ms;

/* Easing Functions */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);

/* Standard Transitions */
--transition-colors: color, background-color, border-color var(--duration-fast) var(--ease-in-out);
--transition-transform: transform var(--duration-normal) var(--ease-out);
--transition-all: all var(--duration-normal) var(--ease-in-out);
```

## 📱 Responsive Design

### Breakpoints
```css
--screen-sm: 640px;
--screen-md: 768px;
--screen-lg: 1024px;
--screen-xl: 1280px;
--screen-2xl: 1536px;
```

### Mobile-First Approach
```css
/* Default: Mobile */
.container {
  padding: var(--space-4);
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    padding: var(--space-6);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    padding: var(--space-8);
  }
}
```

## 🎨 Component Library

### Hero Section
- Full viewport height on desktop, responsive on mobile
- Gradient overlay with primary to accent colors
- Large, bold headline with subtle animation
- Clear CTA button with hover effects
- Trust indicators below fold

### Feature Cards
- Icon + Heading + Description format
- Hover effects for interactivity
- Grid layout: 1 column mobile, 2 tablet, 3 desktop
- Consistent spacing and alignment

### Testimonials
- Clean card design with subtle shadow
- Profile image, name, title, and quote
- Star ratings when applicable
- Carousel on mobile, grid on desktop

### Navigation
- Sticky header with blur backdrop
- Logo left, menu items center, CTA right
- Mobile hamburger menu with slide-out drawer
- Smooth scroll to sections

### Footer
- Dark background (gray-900)
- Multi-column layout on desktop
- Social links with hover effects
- Newsletter signup form

## 🌟 Special Effects

### Gradient Text
```css
.gradient-text {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Glow Effect
```css
.glow {
  box-shadow: 
    0 0 20px var(--color-primary-300),
    0 0 40px var(--color-primary-200),
    0 0 60px var(--color-primary-100);
}
```

### Blur Backdrop
```css
.backdrop-blur {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.8);
}
```

## 📋 Implementation Notes

1. Use CSS custom properties for all values to ensure consistency
2. Implement dark mode using CSS custom properties override
3. Ensure all interactive elements have focus states for accessibility
4. Use semantic HTML elements for better SEO and accessibility
5. Test all components across different screen sizes
6. Optimize animations for performance (use transform and opacity)
7. Implement loading states for all async operations

## 🎯 Design Goals

- **Trust**: Professional design that instills confidence
- **Clarity**: Clear hierarchy and purposeful use of space
- **Performance**: Fast loading, smooth animations
- **Accessibility**: WCAG 2.1 AA compliant
- **Conversion**: Every element guides toward the CTA