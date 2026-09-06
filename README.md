# 1Fi Marketplace — SDE Intern Assignment

A new **1Fi Marketplace** section built for the Shop page of the 1Fi app, as per the
assignment brief. `Top Brands` and `Nearby Stores` are intentionally left blank
(as specified); `1Fi Marketplace` is fully designed and implemented.

## A note on scope

I didn't have access to the real 1Fi app codebase or a way to inspect its live
Shop page UI in this environment, so this is built as a **standalone,
mobile-first React web app** that mirrors 1Fi's actual product (mutual-fund
backed, 0%-interest EMI shopping — pulled from the public 1Fi site/app login
screen) in visual language: the brand purple (`#6C28D9`), typography, card
density, and bottom-nav shell you'd expect in the real app. If real
screenshots of the Shop page are available, spacing/typography/components can
be tightened to match pixel-for-pixel quickly.

## What's implemented

- **Shop page** with the three tabs from the brief (`Top Brands`, `Nearby
  Stores` blank; `1Fi Marketplace` fully built).
- **Marketplace home**: category filter chips + a responsive product grid.
- **Product detail**: variants (storage/colour/size/etc.), price recalculated
  per variant, product highlights, and an EMI plan selector (3–24 month
  tenures, 0% interest, computed monthly amount).
- **Checkout confirmation**: review screen summarising product, variant,
  tenure, and EMI before a final CTA.
- **Loading, error, and empty states** everywhere data is fetched — including
  a small simulated random failure rate so the error/retry path is actually
  reachable, not just theoretical.

## Architecture

```
src/
  api/            mock "backend" — async functions with artificial delay
                  and failures, so components never touch raw data directly
  data/           product + EMI mock data and EMI-plan calculation
  hooks/          useAsync — generic loading/error/retry data-fetching hook
  components/
    layout/       TopBar, BottomNav — shared app chrome
    shop/         Shop page tabs, blank-tab placeholder
    marketplace/  ProductCard, ProductImage, VariantSelector,
                  EmiPlanSelector, StickyCta, CategoryChips
    common/       Skeletons, ErrorState, EmptyState
  pages/          ShopPage, ProductDetailPage, CheckoutPage
```

- **No hardcoded data in UI components** — everything routes through
  `src/api/marketplaceApi.js`, which is the only file you'd need to point at
  a real backend later.
- **State** is local (`useState`/`useMemo`) per screen — there's no shared
  cart/global state need for this flow, so a Context/Redux layer would be
  over-engineering for the current scope.
- **Product images** are generated as category-themed icons/gradients rather
  than external image URLs, so the app renders correctly offline and in any
  reviewer's environment without depending on a third-party image CDN.

## Running locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build -> dist/
```

## Possible next steps

- Wire `api/marketplaceApi.js` to 1Fi's real product/EMI endpoints.
- Match exact spacing/typography once real Shop-page screenshots are available.
- Add a cart/wishlist if the real Marketplace needs multi-item checkout.
