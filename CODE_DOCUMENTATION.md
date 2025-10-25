# Pickify - Code Documentation

## Overview

Pickify is a premium Shopify design & development agency marketing website built with Next.js 16 (App Router), React 19, TypeScript 5, and Tailwind CSS 4.

## Project Structure

```
pickify/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with fonts and analytics
│   ├── page.tsx           # Homepage
│   ├── about/page.tsx     # About page
│   ├── contact/page.tsx   # Contact page
│   ├── portfolio/page.tsx # Portfolio page
│   └── services/page.tsx  # Services page
├── components/            # React components
│   ├── ui/               # shadcn/ui components (DO NOT edit manually)
│   ├── contact-form.tsx  # Contact form with validation
│   ├── cta-section.tsx   # Call-to-action section
│   ├── featured-work.tsx # Portfolio showcase
│   ├── footer.tsx        # Site footer
│   ├── gradient-accent.tsx # Decorative gradients
│   ├── hero-section.tsx  # Homepage hero
│   ├── navbar.tsx        # Fixed navigation
│   ├── portfolio-grid.tsx # Filterable portfolio grid
│   ├── service-card.tsx  # Service display card
│   ├── services-preview.tsx # Services overview
│   └── testimonials.tsx  # Client testimonials
├── lib/                   # Utilities
│   └── utils.ts          # Class name merger (cn)
└── public/               # Static assets
```

## Component Documentation

All components and pages are now fully documented with TSDoc comments including:

### Components

#### `<ContactForm />`

**Location:** `components/contact-form.tsx`  
**Type:** Client Component  
**Features:**

- Animated contact information cards
- Form validation with focus states
- Success message display
- Responsive layout

**Usage:**

```tsx
<ContactForm />
```

---

#### `<HeroSection />`

**Location:** `components/hero-section.tsx`  
**Type:** Client Component  
**Features:**

- Floating gradient orbs animation
- Premium badge with icon
- CTA buttons with hover effects
- Statistics cards

**Usage:**

```tsx
<HeroSection />
```

---

#### `<Navbar />`

**Location:** `components/navbar.tsx`  
**Type:** Client Component  
**Features:**

- Fixed position with transparent gradient
- Mobile hamburger menu
- Animated transitions
- Logo and navigation links

**Usage:**

```tsx
<Navbar />
```

---

#### `<Footer />`

**Location:** `components/footer.tsx`  
**Type:** Server Component  
**Features:**

- Site navigation links
- Social media icons
- Copyright information
- Responsive grid layout

**Usage:**

```tsx
<Footer />
```

---

#### `<FeaturedWork />`

**Location:** `components/featured-work.tsx`  
**Type:** Client Component  
**Features:**

- Grid of portfolio projects
- Hover overlays with metrics
- Staggered animations
- View all CTA button

**Usage:**

```tsx
<FeaturedWork />
```

---

#### `<ServiceCard />`

**Location:** `components/service-card.tsx`  
**Type:** Server Component  
**Props:**

- `icon: LucideIcon` - Icon component
- `title: string` - Service title
- `description: string` - Service description
- `features: string[]` - List of features
- `price?: string` - Optional pricing

**Usage:**

```tsx
<ServiceCard
  icon={Palette}
  title="Store Design"
  description="Custom Shopify designs"
  features={["Feature 1", "Feature 2"]}
  price="$5,000"
/>
```

---

#### `<ServicesPreview />`

**Location:** `components/services-preview.tsx`  
**Type:** Client Component  
**Features:**

- Grid of service cards
- Alternating icon colors
- Hover effects with rotation
- Responsive layout

**Usage:**

```tsx
<ServicesPreview />
```

---

#### `<CTASection />`

**Location:** `components/cta-section.tsx`  
**Type:** Client Component  
**Features:**

- Centered content layout
- Animated entrance
- Primary CTA button
- Gradient background

**Usage:**

```tsx
<CTASection />
```

---

#### `<GradientAccent />`

**Location:** `components/gradient-accent.tsx`  
**Type:** Server Component  
**Features:**

- Decorative floating orbs
- Absolute positioning
- Pointer-events-none
- Brand gradient colors

**Usage:**

```tsx
<section className="relative">
  <GradientAccent />
  {/* Your content */}
</section>
```

---

#### `<Testimonials />`

**Location:** `components/testimonials.tsx`  
**Type:** Client Component  
**Features:**

- Grid of testimonial cards
- Star ratings
- Hover animations
- Responsive layout

**Usage:**

```tsx
<Testimonials />
```

---

#### `<PortfolioGrid />`

**Location:** `components/portfolio-grid.tsx`  
**Type:** Client Component  
**Features:**

- Category filtering
- Animated grid transitions
- Hover overlays with metrics
- AnimatePresence for smooth filtering

**Usage:**

```tsx
<PortfolioGrid />
```

---

### Pages

#### Homepage (`/`)

**Location:** `app/page.tsx`  
**Type:** Server Component  
**Sections:**

1. Hero with CTA
2. Featured work showcase
3. Services preview
4. Client testimonials
5. Call-to-action

---

#### About Page (`/about`)

**Location:** `app/about/page.tsx`  
**Type:** Client Component  
**Sections:**

1. Hero section
2. Company story with metrics
3. Core values
4. Team members
5. Statistics
6. CTA section

---

#### Contact Page (`/contact`)

**Location:** `app/contact/page.tsx`  
**Type:** Client Component  
**Sections:**

1. Hero section
2. Contact form
3. FAQ section

---

#### Portfolio Page (`/portfolio`)

**Location:** `app/portfolio/page.tsx`  
**Type:** Server Component  
**Sections:**

1. Hero section
2. Filterable portfolio grid
3. CTA section

---

#### Services Page (`/services`)

**Location:** `app/services/page.tsx`  
**Type:** Client Component  
**Sections:**

1. Hero section
2. Services grid
3. Process timeline
4. CTA section

---

### Utilities

#### `cn()`

**Location:** `lib/utils.ts`  
**Purpose:** Merge Tailwind CSS classes with proper precedence

**Usage:**

```tsx
import { cn } from "@/lib/utils";

<div
  className={cn(
    "base-classes",
    condition && "conditional-classes",
    "override-classes"
  )}
/>;
```

---

## Code Cleanup Summary

### Removed

- ✅ Removed `console.log` from `contact-form.tsx`
- ✅ No other console logs or debug code found
- ✅ All components are production-ready

### Added Documentation

- ✅ TSDoc comments on all components
- ✅ TSDoc comments on all pages
- ✅ TSDoc comments on utility functions
- ✅ Interface documentation with property descriptions
- ✅ Usage examples for all public APIs

## Design System

### Brand Colors

```css
--pink-primary: #ab2645    /* Magenta-Pink */
--teal-primary: #0b464f    /* Deep Teal */
```

### Typography

- **Body:** Inter (300-800 weights)
- **Headings:** Playfair Display (400-900 weights)
- **Code:** JetBrains Mono (400-700 weights)

### Animations

- **Library:** Framer Motion v12.23.24
- **Pattern:** `whileInView` with viewport triggers
- **Easing:** Custom bezier `[0.22, 1, 0.36, 1]`
- **Stagger:** 0.08-0.1s delays between elements

### Gradients

All gradients use inline `style` prop (not Tailwind classes):

```tsx
// Magenta-Pink (Primary)
style={{
  background: "linear-gradient(135deg, #ab2645 0%, #ff6f91 100%)",
}}

// Teal (Secondary)
style={{
  background: "linear-gradient(135deg, #0b464f 0%, #00b7a1 100%)",
}}
```

## Development

### Commands

```bash
pnpm dev      # Start development server
pnpm build    # Production build
pnpm lint     # Run ESLint
```

### Adding shadcn/ui Components

```bash
npx shadcn@latest add [component-name]
```

### TypeScript

- Strict mode enabled
- Path alias: `@/*` maps to project root
- `ignoreBuildErrors: true` for faster iteration

## Best Practices

### Component Patterns

1. **Named exports:** `export function ComponentName()`
2. **Client directive:** Only add `"use client"` when needed
3. **Icons:** Type as `LucideIcon`, render as `<Icon />`
4. **Responsive:** Mobile-first with sm/md/lg breakpoints

### Styling

1. **Gradients:** Always use inline `style` prop
2. **Classes:** Use `cn()` for conditional classes
3. **Animations:** Consistent easing and timing
4. **Typography:** Use semantic classes from `globals.css`

### Performance

- Images are unoptimized in `next.config.mjs`
- Vercel Analytics pre-configured
- React 19 with automatic optimizations

## File Naming Conventions

- **Pages:** `page.tsx` (lowercase)
- **Components:** `component-name.tsx` (kebab-case)
- **Types:** Inline interfaces or `*.types.ts`
- **Utilities:** `*.ts` (lowercase)

## Contributing Guidelines

1. ✅ Add TSDoc comments to all new components
2. ✅ Use TypeScript for all files
3. ✅ Follow existing animation patterns
4. ✅ Test on mobile and desktop
5. ✅ Run `pnpm lint` before committing
6. ❌ Don't edit files in `components/ui/` manually
7. ❌ Don't use Tailwind gradient utilities
8. ❌ Don't add console.log statements

---

**Last Updated:** October 25, 2025  
**Version:** 1.0.0  
**Maintainer:** Pickify Development Team
