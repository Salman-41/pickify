# Pickify - AI Coding Agent Instructions

## Project Overview

Pickify is a **Next.js 16 (App Router)** marketing website for a Shopify design & development agency. Built with **React 19**, **TypeScript 5**, and **Tailwind CSS 4** using the **shadcn/ui "New York" style** component library.

## Architecture & Key Patterns

### Component Structure

- **Page Components**: `/app/{route}/page.tsx` - Server components by default
- **Reusable Components**: `/components/*.tsx` - Exported named functions (e.g., `export function HeroSection()`)
- **UI Primitives**: `/components/ui/*.tsx` - shadcn/ui components (DO NOT manually edit these)
- **Layout**: Fixed navbar + main content with `pt-16` + footer structure in `app/layout.tsx`

### Styling System

**Brand Colors** (defined in `app/globals.css`):

```css
/* Primary Gradient: Magenta-Pink */
--pink-primary: #E34D78
--pink-light: #FF6F91

/* Secondary Gradient: Deep Teal */
--teal-primary: #007C83
--teal-light: #00B7A1

/* Accent Colors */
--white-soft: #FFFFFF
--charcoal: #222222
--gray-cool: #555555
```

**Gradient Usage**:

- **Buttons**: Primary magenta-pink gradient (`#E34D78 → #FF6F91`)
- **Section Dividers**: Teal gradient accents (`#007C83 → #00B7A1`)
- **Highlight Text**: Magenta-pink gradient with text clipping
- **Background**: Clean white/light-gray with gradient accents and soft drop shadows

**Gradient Pattern** (use inline styles, NOT Tailwind classes):

```tsx
// Magenta-Pink Gradient (Primary)
style={{
  background: "linear-gradient(135deg, #E34D78 0%, #FF6F91 100%)",
  boxShadow: "0 8px 32px rgba(227, 77, 120, 0.25)",
}}

// Text Gradient
style={{
  backgroundImage: "linear-gradient(135deg, #E34D78, #FF6F91)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
}}

// Teal Gradient (Secondary)
style={{
  background: "linear-gradient(135deg, #007C83 0%, #00B7A1 100%)",
  boxShadow: "0 8px 32px rgba(0, 183, 161, 0.25)",
}}
```

**Custom Utilities** (in `globals.css`):

- `.glass-effect` - Glassmorphism backgrounds with backdrop blur
- `.gradient-pink` - Magenta-pink gradient (135deg)
- `.gradient-teal` - Deep teal gradient (135deg)
- `.smooth-transition` - Consistent transitions (all 0.3s ease)
- `.glow-pink` - Soft pink glow/drop shadow
- `.glow-teal` - Soft teal glow/drop shadow

**UI Style**: Glassmorphism & subtle reflections inspired by the logo design

### Import Aliases (tsconfig paths)

```tsx
import { cn } from "@/lib/utils"; // Utility functions
import { Button } from "@/components/ui/button"; // shadcn components
import { HeroSection } from "@/components/hero-section"; // Custom components
```

### Client Components

Add `"use client"` directive ONLY when using:

- React hooks (`useState`, `useEffect`, etc.)
- Event handlers (`onClick`, `onChange`, etc.)
- Browser APIs

Examples: `navbar.tsx`, `contact-form.tsx` use client-side state

### Typography & Content

- Use `text-balance-custom` for headlines (prevents orphans)
- Icon library: `lucide-react` (already installed)
- Fonts: Geist, Geist Mono, Source Serif 4 (configured in layout)

## Development Workflows

### Package Manager

**Always use `pnpm`** (not npm or yarn):

```bash
pnpm dev          # Start dev server
pnpm build        # Production build
pnpm lint         # Run ESLint
```

### Adding shadcn/ui Components

DO NOT manually create UI components. Use shadcn CLI:

```bash
# This project uses "new-york" style with custom config
npx shadcn@latest add [component-name]
```

Config is in `components.json` - respect the aliases and style settings.

### TypeScript Configuration

- `ignoreBuildErrors: true` in `next.config.mjs` - prioritize iteration speed
- Strict mode enabled in `tsconfig.json`
- Path alias `@/*` maps to project root

## Component Patterns

### Service Cards Pattern

See `components/service-card.tsx` for the standard service card layout:

- Icon in gradient background
- Hover effects with `group` class
- Feature list with custom bullet points

### Form Handling

See `components/contact-form.tsx`:

- Controlled inputs with `useState`
- Type-safe event handlers: `React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>`
- Inline validation styling with focus states

### Page Structure Template

```tsx
import { GradientAccent } from "@/components/gradient-accent";
import { CTASection } from "@/components/cta-section";

export default function PageName() {
  return (
    <>
      {/* Hero with gradient accents */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <GradientAccent />
        {/* Content */}
      </section>
      {/* Other sections */}
      <CTASection /> {/* Standard CTA at bottom */}
    </>
  );
}
```

## Critical Conventions

1. **No Tailwind for Gradients** - Brand gradients MUST use inline `style` prop (see examples above)
2. **Component Exports** - Always `export function ComponentName()` (named exports, not default)
3. **Icon Props** - When passing icons to components, type as `LucideIcon` and render as `<Icon />`
4. **Responsive Images** - Images are unoptimized (`next.config.mjs`) - use `<img>` not `next/image`
5. **Analytics** - Vercel Analytics already integrated in layout - no additional setup needed

## External Dependencies

- **Radix UI** - All interactive primitives (accordion, dialog, etc.)
- **class-variance-authority** - Used in `ui/button.tsx` for variant management
- **react-hook-form + zod** - Available but not yet used (add form validation here)
- **Vercel Analytics** - Pre-configured, auto-tracks pageviews

## Common Tasks

**Add a new page**: Create `app/{route}/page.tsx`, follow the page structure template above
**Add UI component**: Use `npx shadcn@latest add [component]`, never manually create
**Update styles**: Modify `app/globals.css` for global utilities, use `cn()` for conditional classes
**New icon**: Import from `lucide-react`, pass as prop when needed (type as `LucideIcon`)

## What NOT to Do

- ❌ Don't edit files in `/components/ui/*` manually (managed by shadcn)
- ❌ Don't use `npm` or `yarn` (project uses `pnpm`)
- ❌ Don't use Tailwind gradient utilities (use inline styles for brand consistency)
- ❌ Don't create `page.js` files (TypeScript required, use `.tsx`)
- ❌ Don't add client directives to server components unless necessary
