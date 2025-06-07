# Unicorn of One - UI Component Library

## Overview

This component library provides a comprehensive set of reusable UI components built with React and Tailwind CSS. All components are fully typed with TypeScript and designed to be accessible and responsive.

## Component Structure

```
components/
├── ui/               # Core UI components
│   ├── Badge.tsx     # Status labels and tags
│   ├── Button.tsx    # Interactive buttons
│   ├── Card.tsx      # Content containers
│   ├── Container.tsx # Layout containers
│   ├── Input.tsx     # Form inputs
│   ├── Section.tsx   # Page sections
│   ├── Typography.tsx # Text components
│   └── index.ts      # Barrel exports
└── layout/           # Layout components
    ├── Header.tsx    # Site navigation
    ├── Footer.tsx    # Site footer
    └── index.ts      # Barrel exports
```

## UI Components

### Button
A flexible button component with multiple variants and states.

**Props:**
- `variant`: 'primary' | 'secondary' | 'ghost' | 'danger'
- `size`: 'sm' | 'md' | 'lg'
- `fullWidth`: boolean
- `loading`: boolean

**Example:**
```tsx
<Button variant="primary" size="lg" onClick={handleClick}>
  Click Me
</Button>
```

### Card
A versatile container component for grouping content.

**Props:**
- `hover`: boolean - Adds hover effect
- `padding`: 'none' | 'sm' | 'md' | 'lg'
- `onClick`: () => void - Makes card clickable

**Example:**
```tsx
<Card hover padding="md">
  <Heading as="h3">Card Title</Heading>
  <Text>Card content goes here</Text>
</Card>
```

### Typography
Consistent text styling components.

**Heading Props:**
- `as`: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

**Text Props:**
- `variant`: 'body' | 'lead' | 'small' | 'muted'
- `as`: 'p' | 'span' | 'div'

**Example:**
```tsx
<Heading as="h1">Page Title</Heading>
<Text variant="lead">Lead paragraph text</Text>
```

### Input
Form input component with validation support.

**Props:**
- `label`: string
- `error`: string
- `helperText`: string
- `fullWidth`: boolean

**Example:**
```tsx
<Input
  label="Email"
  type="email"
  error={errors.email}
  onChange={handleChange}
  fullWidth
/>
```

### Badge
Small labels for status and categorization.

**Props:**
- `variant`: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'gray'
- `size`: 'sm' | 'md'

**Example:**
```tsx
<Badge variant="success">Active</Badge>
```

### Container
Layout container for consistent spacing and max-width.

**Props:**
- `size`: 'sm' | 'md' | 'lg' | 'xl' | 'full'
- `padding`: boolean

**Example:**
```tsx
<Container size="lg">
  <Content />
</Container>
```

### Section
Page section wrapper with consistent spacing and backgrounds.

**Props:**
- `background`: 'white' | 'gray' | 'primary' | 'gradient'
- `size`: 'sm' | 'md' | 'lg'

**Example:**
```tsx
<Section background="gray" size="lg">
  <Container>
    <Content />
  </Container>
</Section>
```

## Layout Components

### Header
Responsive navigation header with mobile menu.

**Features:**
- Sticky positioning
- Mobile-responsive hamburger menu
- Integrated navigation links
- CTA button

### Footer
Comprehensive footer with multiple sections.

**Features:**
- Company information
- Multi-column link sections
- Social media links
- Copyright information

## Design System

### Colors
- **Primary**: Blue (#4169E1) - Main brand color
- **Accent**: Purple (#8E44AD) - Secondary accent
- **Gray scale**: Consistent gray shades for text and backgrounds

### Typography
- **Font**: Inter - Modern, readable sans-serif
- **Scale**: Responsive sizing from mobile to desktop
- **Weights**: Regular, Medium, Semibold, Bold

### Spacing
- Consistent padding/margin scale
- Responsive spacing adjustments
- Section-based vertical rhythm

### Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## Usage

Import components from the central exports:

```tsx
import { Button, Card, Container, Heading, Text } from '@/components/ui';
import { Header, Footer } from '@/components/layout';
```

## Pages Created

1. **Home** (`/`) - Landing page showcasing the service
2. **About** (`/about`) - Company information and team
3. **Contact** (`/contact`) - Contact form and information
4. **Showcase** (`/showcase`) - Component library demonstration

## Best Practices

1. **Accessibility**: All interactive components include proper ARIA labels and keyboard navigation
2. **Responsiveness**: All components adapt to different screen sizes
3. **Type Safety**: Full TypeScript support for all props
4. **Performance**: Components are optimized for minimal re-renders
5. **Consistency**: Use the provided components instead of creating one-off styles

## Future Enhancements

- [ ] Dark mode support
- [ ] Animation library integration
- [ ] Additional form components (Select, Checkbox, Radio)
- [ ] Modal/Dialog component
- [ ] Toast/Notification system
- [ ] Data table component
- [ ] Loading skeletons