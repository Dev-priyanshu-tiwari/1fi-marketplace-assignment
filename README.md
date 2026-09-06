# 1Fi Marketplace

This is my submission for the 1Fi SDE Intern assignment — adding a **1Fi Marketplace** section to the Shop page of the 1Fi app.

## About this submission

I couldn't get into the actual Shop page UI while building this (it's behind login on the live app), so I based the look and feel on the reference screen shared in the assignment doc — the purple gradient hero, the segmented "Top Brands / Nearby Stores" tabs, the search bar, and the rounded list-style cards. I extended that same visual language to build out the new **1Fi Marketplace** tab from scratch.

Top Brands and Nearby Stores are left blank as instructed — only the shared page chrome (hero, tabs, search bar, bottom nav) is shown there, no content.

## What's in the Marketplace tab

- Product listing with images, brand/name, pricing, and no-cost EMI info
- Product detail page — variants (storage, colour, etc.), price updates based on the variant picked, and an EMI plan selector (3 to 24 months, 0% interest)
- A quick checkout/confirmation screen after picking a plan
- Search + category filters on the marketplace home
- Loading skeletons, an error state with retry, and an empty state for no results

## Why it's structured this way

- All product/EMI data comes from `src/api/marketplaceApi.js` instead of being hardcoded in components — it's a mock layer with a simulated network delay (and occasional random failure, so the error/retry UI is actually reachable, not just there for show). Swapping in real endpoints later should just mean rewriting this one file.
- Kept state local to each screen with `useState`/`useMemo` — didn't see a need for Redux/Context here since nothing is shared across screens beyond what's passed via route state.
- Product images are drawn as category-coloured icons instead of pulling from an image CDN, so the app doesn't depend on external image URLs being reachable when someone reviews it.

```
src/
  api/            mock API layer (delay + error simulation)
  data/           product + EMI mock data
  hooks/          useAsync — shared loading/error/retry hook
  components/
    layout/       TopBar, BottomNav
    shop/         hero, segmented tabs, search bar, blank-tab placeholder
    marketplace/  product card, image, variant selector, EMI selector, sticky CTA
    common/       skeletons, error/empty states
  pages/          ShopPage, ProductDetailPage, CheckoutPage
```

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
```

## If I had more time

- Match spacing/fonts exactly once I can get real screenshots of the Shop page from a logged-in account
- Wire the mock API to a real backend
- Add a wishlist/cart if Marketplace ever needs multi-item checkout
