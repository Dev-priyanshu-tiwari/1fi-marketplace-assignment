import { RefreshCw, PackageSearch, WifiOff } from "lucide-react";

export function ProductGridSkeleton({ count = 6 }) {
  return (
    <div className="grid grid-cols-2 gap-3 px-4 pt-4" aria-busy="true" aria-label="Loading products">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="rounded-xl2 border border-surface-line overflow-hidden animate-pulse">
          <div className="aspect-square bg-surface-line" />
          <div className="p-3 space-y-2">
            <div className="h-3 bg-surface-line rounded w-3/4" />
            <div className="h-3 bg-surface-line rounded w-1/2" />
            <div className="h-4 bg-surface-line rounded w-2/3 mt-2" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function ProductListSkeleton({ count = 5 }) {
  return (
    <div className="px-4 pt-4 space-y-3" aria-busy="true" aria-label="Loading products">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex items-center gap-3 rounded-2xl border border-surface-line px-3 py-3 animate-pulse">
          <div className="h-16 w-16 rounded-xl bg-surface-line shrink-0" />
          <div className="flex-1 space-y-2">
            <div className="h-2.5 bg-surface-line rounded w-1/3" />
            <div className="h-3 bg-surface-line rounded w-3/4" />
            <div className="h-3 bg-surface-line rounded w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function DetailSkeleton() {
  return (
    <div className="animate-pulse" aria-busy="true" aria-label="Loading product">
      <div className="aspect-square bg-surface-line" />
      <div className="p-4 space-y-3">
        <div className="h-4 bg-surface-line rounded w-2/3" />
        <div className="h-3 bg-surface-line rounded w-1/2" />
        <div className="h-6 bg-surface-line rounded w-1/3 mt-2" />
        <div className="h-24 bg-surface-line rounded w-full mt-4" />
      </div>
    </div>
  );
}

export function ErrorState({ message, onRetry }) {
  return (
    <div className="flex flex-col items-center justify-center text-center px-8 py-16">
      <div className="h-12 w-12 rounded-full bg-surface-line flex items-center justify-center mb-4">
        <WifiOff className="h-6 w-6 text-ink-faint" strokeWidth={1.75} />
      </div>
      <p className="text-sm font-medium text-ink">Couldn't load this</p>
      <p className="text-sm text-ink-faint mt-1 max-w-[240px]">
        {message || "Something went wrong. Please try again."}
      </p>
      <button
        onClick={onRetry}
        className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-brand text-white text-sm font-medium px-4 py-2 active:bg-brand-dark"
      >
        <RefreshCw className="h-3.5 w-3.5" strokeWidth={2} />
        Retry
      </button>
    </div>
  );
}

export function EmptyState({ title, subtitle }) {
  return (
    <div className="flex flex-col items-center justify-center text-center px-8 py-16">
      <div className="h-12 w-12 rounded-full bg-brand-light flex items-center justify-center mb-4">
        <PackageSearch className="h-6 w-6 text-brand" strokeWidth={1.75} />
      </div>
      <p className="text-sm font-medium text-ink">{title}</p>
      {subtitle && <p className="text-sm text-ink-faint mt-1 max-w-[240px]">{subtitle}</p>}
    </div>
  );
}
