import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Star } from "lucide-react";
import { useAsync } from "../hooks/useAsync";
import { fetchProductDetail } from "../api/marketplaceApi";
import { getEmiPlansForPrice } from "../data/products";
import TopBar from "../components/layout/TopBar";
import ProductImage from "../components/marketplace/ProductImage";
import VariantSelector from "../components/marketplace/VariantSelector";
import EmiPlanSelector from "../components/marketplace/EmiPlanSelector";
import StickyCta from "../components/marketplace/StickyCta";
import { DetailSkeleton, ErrorState } from "../components/common/States";
import { formatINR } from "../utils/format";

export default function ProductDetailPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { status, data: product, error, retry } = useAsync(
    () => fetchProductDetail(productId),
    [productId]
  );

  const [selectedVariants, setSelectedVariants] = useState({});
  const [selectedPlanId, setSelectedPlanId] = useState(null);

  // Initialize default variant selection once the product loads.
  useEffect(() => {
    if (!product) return;
    const defaults = {};
    Object.entries(product.variants).forEach(([key, options]) => {
      defaults[key] = options[0];
    });
    setSelectedVariants(defaults);
  }, [product]);

  const pricingKey = product ? Object.keys(product.variants)[0] : null;
  const currentPrice = useMemo(() => {
    if (!product || !pricingKey) return product?.price ?? 0;
    const value = selectedVariants[pricingKey];
    return product.priceByVariant[value] ?? product.price;
  }, [product, pricingKey, selectedVariants]);

  const emiPlans = useMemo(() => getEmiPlansForPrice(currentPrice), [currentPrice]);

  useEffect(() => {
    if (emiPlans.length && !emiPlans.find((p) => p.id === selectedPlanId)) {
      setSelectedPlanId(emiPlans[emiPlans.length - 1].id);
    }
  }, [emiPlans, selectedPlanId]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex flex-col">
        <TopBar title="Product" showBack />
        <DetailSkeleton />
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="min-h-screen flex flex-col">
        <TopBar title="Product" showBack />
        <ErrorState message={error.message} onRetry={retry} />
      </div>
    );
  }

  const selectedPlan = emiPlans.find((p) => p.id === selectedPlanId);

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar title={product.brand} showBack />

      <div className="flex-1 pb-4">
        <ProductImage category={product.category} className="aspect-square" />

        <div className="px-4 pt-4">
          <p className="text-[13px] font-medium text-brand">{product.tagline}</p>
          <h2 className="text-lg font-bold text-ink mt-0.5">{product.name}</h2>

          <div className="flex items-center gap-1.5 mt-1.5">
            <div className="flex items-center gap-1 bg-successTint rounded px-1.5 py-0.5">
              <Star className="h-3 w-3 fill-success text-success" />
              <span className="text-[11px] font-medium text-success">{product.rating}</span>
            </div>
            <span className="text-[12px] text-ink-faint">{product.reviews} reviews</span>
          </div>

          <p className="text-2xl font-extrabold text-ink mt-3">{formatINR(currentPrice)}</p>

          <div className="mt-5">
            <VariantSelector
              variants={product.variants}
              selected={selectedVariants}
              onChange={(key, value) => setSelectedVariants((prev) => ({ ...prev, [key]: value }))}
            />
          </div>

          <div className="mt-6">
            <p className="text-[13px] font-medium text-ink-soft mb-2">Highlights</p>
            <ul className="space-y-1.5">
              {product.highlights.map((h) => (
                <li key={h} className="text-[13px] text-ink-soft flex gap-2">
                  <span className="text-brand mt-1.5 h-1 w-1 rounded-full bg-brand shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <p className="text-[13px] font-medium text-ink-soft mb-2">Choose your EMI plan</p>
            <EmiPlanSelector plans={emiPlans} selectedPlanId={selectedPlanId} onSelect={setSelectedPlanId} />
          </div>
        </div>
      </div>

      {selectedPlan && (
        <StickyCta
          monthlyAmount={selectedPlan.monthlyAmount}
          months={selectedPlan.months}
          onProceed={() =>
            navigate(`/marketplace/checkout`, {
              state: {
                productName: product.name,
                brand: product.brand,
                price: currentPrice,
                variants: selectedVariants,
                plan: selectedPlan,
              },
            })
          }
        />
      )}
    </div>
  );
}
