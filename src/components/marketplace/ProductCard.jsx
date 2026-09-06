import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import ProductImage from "./ProductImage";
import { formatINR } from "../../utils/format";

// Horizontal list card — same shape as the existing "Top Brands" rows
// (thumbnail + title + subtitle) so the new Marketplace section reads
// like a natural extension of the Shop page, not a bolted-on screen.
export default function ProductCard({ product }) {
  const cheapestEmi = product.emiPlans[product.emiPlans.length - 1];
  return (
    <Link
      to={`/marketplace/product/${product.id}`}
      className="flex items-center gap-3 rounded-2xl bg-white border border-surface-line px-3 py-3 active:bg-surface-muted"
    >
      <ProductImage category={product.category} className="h-16 w-16 rounded-xl shrink-0" />

      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-medium text-ink-faint uppercase tracking-wide">
          {product.brand}
        </p>
        <p className="text-[14px] font-semibold text-ink leading-snug truncate">
          {product.name}
        </p>
        <p className="text-[13px] font-bold text-ink mt-0.5">{formatINR(product.price)}</p>
        <p className="text-[11.5px] text-success mt-0.5">
          No-cost EMI from {formatINR(cheapestEmi.monthlyAmount)}/mo
        </p>
      </div>

      <ChevronRight className="h-4 w-4 text-ink-faint shrink-0" strokeWidth={2} />
    </Link>
  );
}
