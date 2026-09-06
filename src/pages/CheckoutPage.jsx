import { CheckCircle2 } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import TopBar from "../components/layout/TopBar";
import { formatINR } from "../utils/format";

export default function CheckoutPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="min-h-screen flex flex-col">
        <TopBar title="Checkout" showBack />
        <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
          <p className="text-sm text-ink-faint">Nothing to check out yet.</p>
          <button
            onClick={() => navigate("/")}
            className="mt-4 text-sm font-medium text-brand"
          >
            Back to Marketplace
          </button>
        </div>
      </div>
    );
  }

  const { productName, brand, price, variants, plan } = state;

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar title="Confirm your plan" showBack />

      <div className="flex-1 px-4 pt-6 pb-4">
        <div className="flex flex-col items-center text-center mb-6">
          <div className="h-14 w-14 rounded-full bg-successTint flex items-center justify-center mb-3">
            <CheckCircle2 className="h-7 w-7 text-success" strokeWidth={1.75} />
          </div>
          <p className="text-base font-semibold text-ink">EMI plan selected</p>
          <p className="text-[13px] text-ink-faint mt-1">
            Review the details below before pledging your funds.
          </p>
        </div>

        <div className="rounded-xl2 border border-surface-line divide-y divide-surface-line">
          <Row label="Product" value={`${brand} ${productName}`} />
          {Object.entries(variants || {}).map(([key, value]) => (
            <Row key={key} label={key} value={value} />
          ))}
          <Row label="Price" value={formatINR(price)} />
          <Row label="Tenure" value={`${plan.months} months`} />
          <Row label="Monthly EMI" value={`${formatINR(plan.monthlyAmount)}/mo`} />
          <Row label="Interest" value="0%" highlight />
        </div>

        <p className="text-[12px] text-ink-faint mt-4 text-center">
          You'll be asked to pledge eligible mutual fund units in the next step to complete this purchase.
        </p>
      </div>

      <div className="sticky bottom-0 bg-white border-t border-surface-line px-4 py-3">
        <button className="w-full rounded-full bg-brand text-white text-sm font-semibold py-3.5 active:bg-brand-dark">
          Continue to pledge funds
        </button>
      </div>
    </div>
  );
}

function Row({ label, value, highlight }) {
  return (
    <div className="flex items-center justify-between px-4 py-3">
      <span className="text-[13px] text-ink-faint">{label}</span>
      <span className={`text-[13px] font-medium ${highlight ? "text-success" : "text-ink"}`}>
        {value}
      </span>
    </div>
  );
}
