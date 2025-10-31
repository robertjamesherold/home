# Copilot Instructions for Homepage 2026

## Project Overview
Personal portfolio homepage built with **React 19 + TypeScript + Vite**. Multi-feature site combining seasonal content, product catalog (Shopify integration), and social posting capabilities. Uses Tailwind CSS v4 for styling and path aliases for clean imports.

## Architecture Patterns

### Layered Structure
```
src/
├── pages/          # Route components (seeded by React Router)
├── features/       # Domain-specific features (social, shopify)
├── components/     # Reusable UI components
├── layout/         # Layout primitives (Nav, Footer, Grid, etc.)
├── hooks/          # Custom hooks & context providers
├── ui/             # Low-level button/form components
├── assets/         # Images, icons, badges
└── types/          # Shared TypeScript types
```

### State Management: Context + Custom Hooks Pattern
- **Products**: `@/hooks/useProducts/` - manages cart, filtering, category selection
  - `ProductsContext` holds state from `useProductsState()` hook
  - Wrapped by `ProductsProvider` at app level
  - Usage: `const state = useProductsState()` within provider scope
  
- **Social Posts**: `@/features/social/postsprovider/` - comments, likes, posts
  - Context: `SocialContext` with type `Ctx`
  - Hook: `useSocial()` throws if used outside `PostsProvider`
  - Pattern: context = state + actions (createPost, toggleLike, etc.)

**Convention**: State contexts hold both data AND action functions; don't create separate dispatch contexts.

### Component Organization
- **Slider** (`src/components/Slider/`) exemplifies modular structure:
  - `useSlider()` + `useSliderReducer()` for carousel logic (useReducer for complex state)
  - `types/Slider.types.ts` for local types
  - `components/` subdirectory for sub-components (SliderCard, Navigation)
  - `data/sliderCards.ts` for card definitions
  
**Pattern**: Group related hooks, types, and data files with the component that uses them.

### Custom Hooks Patterns
- **Behavior hooks**: `useScrollDirection()`, `useWindowSize()` - DOM/window listeners
- **State hooks**: `useProductsState()`, `useSlider()` - return state objects or [state, handlers]
- **Reducer hooks**: `useSliderReducer()` - reducer logic extracted to separate file for testing/reuse

**Convention**: Keep hook logic in `src/hooks/` or co-locate with component if feature-specific.

## Project Setup & Commands

```bash
# Development
npm run dev              # Vite dev server (auto-opens http://localhost:5173)

# Production
npm run build            # TypeScript check + Vite build → dist/
npm run preview          # Preview built version

# Code Quality
npm run lint             # ESLint check (TS/TSX only)
```

**Build Pipeline**: `tsc -b` validates types before Vite bundling; failing types block builds.

## Import Path Aliases (from vite.config.ts)
Always use these aliases to avoid relative paths:
```typescript
import { Nav } from '@/layout'
import { useProducts } from '@/hooks'
import Button from '@/ui/Buttons/Button'
import type { Product } from '@/types/Product.types'
```

Common aliases: `@`, `@components`, `@hooks`, `@features`, `@ui`, `@layout`, `@pages`, `@types`, `@assets`, `@badges`, `@icons`, `@images`

## Styling Conventions
- **Tailwind v4** via `@tailwindcss/vite` plugin (not v3)
- No custom theme extensions needed yet (config uses default theme)
- Component styling: apply Tailwind classes directly in JSX (no separate CSS files except `App.css`, `index.css`)
- Example: `className={'sticky left-0 right-0 top-0 z-50 w-full transition-all duration-300'}`

## Key Dependencies & Integration Points
- **React Router v7**: Routes defined in `App.tsx` at `/`, `/products`, `/products/:productId`
- **Lucide React**: Icon library (imported via `@icons`)
- **Shopify Integration**: Product details/grid pages in `src/pages/shopify/`
- **Babel React Compiler**: Configured in Vite for optimization (production builds)
- **UUID**: For client-side ID generation (social posts, comments)

## TypeScript & Linting
- Target: ES2020, React 19 JSX transform
- ESLint enforces: React Hook Rules, React Refresh best practices, TypeScript strict checks
- No custom ESLint rules beyond recommended configs

## Common Developer Workflows
1. **Add Feature**: Create directory in `src/features/{featureName}` with `components/`, `types/`, `hooks/` subdirectories
2. **Add Page**: Create `.tsx` in `src/pages/{pageName}`, export from `src/pages/index.ts`, add route in `App.tsx`
3. **Add Hook**: Place in `src/hooks/` if shared, or co-locate if feature-specific; export via `index.ts`
4. **Add Type**: Place in local `types/` file or `src/types/{domain}.types.ts` if shared
5. **Test before commit**: Run `npm run lint` and `npm run build` (verifies TS + bundle)

## Critical Gotchas
- **Context hooks must be within provider scope**: `useSocial()` throws outside `PostsProvider`; `useProductsState()` needs `ProductsProvider`
- **Tailwind v4**: Different syntax/plugin than v3; check docs if styling doesn't apply
- **Path aliases required**: Don't use relative imports beyond 2 levels deep (use aliases instead)
- **Build validates types**: `npm run build` fails if TypeScript errors exist; `npm run dev` runs without type checking

## Accessibility & Performance Notes
- Slider uses `requestAnimationFrame` for smooth animations (see `useSlider.ts` ref pattern)
- Navigation hides on scroll-down via `useScrollDirection()` hook
- React Compiler enabled for automatic memoization in production builds
