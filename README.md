# Sanity and Next.js

This is a [Sanity.io](https://sanity.io) and [Next.js](https://nextjs.org) project created following a Course on [Sanity Learn](https://sanity.io/learn).

## Getting Started

First, run the development server:

```bash
npm run dev
```

- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
- Open [http://localhost:3000/studio](http://localhost:3000/studio) to edit content.

## Sanity Preview Tools Fix

### Issue Description
The Sanity preview tools were not working properly, preventing content editors from using the visual editing features in preview mode.

### Solution Implemented

#### 1. Added Visual Editing Dependencies
```bash
npm install @sanity/visual-editing
```

#### 2. Created Visual Editing Configuration
**File: `src/lib/visual-editing.ts`**
```typescript
import { enableVisualEditing } from '@sanity/visual-editing/next-pages-router'
import { client } from './config/sanity'

export const { href, navigate, query } = enableVisualEditing({
  client,
  studioUrl: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL || 'http://localhost:3333/studio',
})
```

**Reason:** This configuration enables the visual editing overlay and provides the necessary hooks for navigation and query handling in preview mode.

#### 3. Enhanced Sanity Client Configuration
**File: `src/lib/config/sanity.ts`**

Added optimized client configurations:

```typescript
// Main client with stega configuration
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "gf5x1qdt",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-05-01",
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_API_TOKEN,
  stega: {
    studioUrl: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL || "http://localhost:3333/studio",
  },
  requestTagPrefix: "sanity",
  timeout: 10000,
});

// Optimized preview client
export const previewClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "gf5x1qdt",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-05-01",
  useCdn: false, // Always use live data for preview
  token: process.env.SANITY_API_TOKEN,
  stega: {
    studioUrl: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL || "http://localhost:3333/studio",
  },
  timeout: 5000, // Shorter timeout for preview
});
```

**Reason:** 
- Separate preview client ensures live data fetching in preview mode
- Stega configuration enables visual editing overlays
- Optimized timeouts improve performance

#### 4. Updated Layout with Visual Editing Components
**File: `src/app/[locale]/(frontend)/layout.tsx`**

Added VisualEditing component and draft mode handling:

```typescript
import { VisualEditing } from "next-sanity";
import { DisableDraftMode } from "@/components/DisableDraftMode";

// In the layout component:
{(await draftMode()).isEnabled && (
  <>
    <VisualEditing 
      zIndex={1000}
      studioUrl={process.env.NEXT_PUBLIC_SANITY_STUDIO_URL || 'http://localhost:3333/studio'}
    />
    <DisableDraftMode />
  </>
)}
```

**Reason:** 
- VisualEditing component provides the overlay interface for content editing
- Conditional rendering only shows in draft mode
- DisableDraftMode component allows users to exit preview mode

#### 5. Created Optimized Queries for Preview Performance
**File: `src/lib/queries/hotels.optimized.queries.ts`**

Added lightweight queries specifically for preview mode:

```typescript
// Optimized query for visual editing performance
export const getHotelBySlugOptimizedQuery = `
  *[_type == "hotel" && slug.current == $slug && edition == $edition && language == $language][0] {
    _id, _type, language, edition, isPackageBooked, name,
    image {${globalImageFragment}},
    ctaButton {${globalButtonFragment}},
    seo { ${seoFragment} },
    // ... other essential fields only
  }
`;

// Lightweight query for basic hotel info
export const getHotelBasicInfoQuery = `
  *[_type == "hotel" && slug.current == $slug && edition == $edition && language == $language][0] {
    _id, _type, name, "slug": slug.current, hotelType,
    image {${globalImageFragment}},
    seo { ${seoFragment} },
    // ... minimal fields for fast loading
  }
`;
```

**Reason:** 
- Reduced query complexity improves preview loading speed
- Essential fields only for visual editing context
- Separate queries for different use cases (full vs basic info)

#### 6. Enhanced API Service with Preview Methods
**File: `src/lib/services/api/hotels.api.ts`**

Added preview-specific API methods:

```typescript
// Preview methods using optimized queries
getHotelBySlugPreview: async (slug: string, language = DEFAULT_LANGUAGE) => {
  const slugWithLocale = ensureSlugHasLocaleSuffix(slug, language);
  return previewClient.fetch(getHotelBySlugOptimizedQuery, 
    { slug: slugWithLocale, language, edition: DEFAULT_EDITION }, 
    {
      perspective: "drafts",
      useCdn: false,
      stega: true,
    } as any
  );
},

getHotelBasicInfoPreview: async (slug: string, language = DEFAULT_LANGUAGE) => {
  const slugWithLocale = ensureSlugHasLocaleSuffix(slug, language);
  return previewClient.fetch(getHotelBasicInfoQuery, 
    { slug: slugWithLocale, language, edition: DEFAULT_EDITION }, 
    {
      perspective: "drafts",
      useCdn: false,
      stega: true,
    } as any
  );
}
```

**Reason:**
- `perspective: "drafts"` ensures draft content is fetched
- `stega: true` enables visual editing overlays
- `useCdn: false` ensures live data in preview mode
- Separate methods for different performance needs

### Key Benefits of This Solution

1. **Performance Optimization**: Lightweight queries reduce loading times in preview mode
2. **Visual Editing Support**: Proper stega configuration enables content overlays
3. **Draft Mode Integration**: Seamless switching between published and draft content
4. **User Experience**: Clear preview mode indicators and exit options
5. **Scalability**: Separate client configurations for different use cases

### Environment Variables Required

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_STUDIO_URL=http://localhost:3333/studio
SANITY_API_TOKEN=your_api_token
```

This solution ensures that Sanity's visual editing tools work correctly in preview mode while maintaining optimal performance for both preview and production environments.