import { useMemo, useState } from "react";
import { useAsync } from "../../hooks/useAsync";
import { fetchCategories, fetchProducts } from "../../api/marketplaceApi";
import SearchBar from "../shop/SearchBar";
import CategoryChips from "./CategoryChips";
import ProductCard from "./ProductCard";
import { ProductListSkeleton, ErrorState, EmptyState } from "../common/States";

export default function MarketplaceHome() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [query, setQuery] = useState("");

  const categoriesState = useAsync(fetchCategories, []);
  const productsState = useAsync(() => fetchProducts({ categoryId: activeCategory }), [activeCategory]);

  const visibleProducts = useMemo(() => {
    if (productsState.status !== "success") return [];
    if (!query.trim()) return productsState.data;
    const q = query.trim().toLowerCase();
    return productsState.data.filter(
      (p) => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q)
    );
  }, [productsState, query]);

  return (
    <div className="pb-4">
      <SearchBar
        placeholder="Search products..."
        value={query}
        onChange={setQuery}
      />

      {categoriesState.status === "success" && (
        <div className="mt-4">
          <CategoryChips
            categories={categoriesState.data}
            activeId={activeCategory}
            onSelect={setActiveCategory}
          />
        </div>
      )}

      <div className="px-4 mt-4 mb-2">
        <h2 className="text-[15px] font-bold text-ink">1Fi Marketplace</h2>
      </div>

      {productsState.status === "loading" && <ProductListSkeleton />}

      {productsState.status === "error" && (
        <ErrorState message={productsState.error.message} onRetry={productsState.retry} />
      )}

      {productsState.status === "success" && visibleProducts.length === 0 && (
        <EmptyState
          title="No products found"
          subtitle="Try a different search or category."
        />
      )}

      {productsState.status === "success" && visibleProducts.length > 0 && (
        <div className="px-4 space-y-3">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
