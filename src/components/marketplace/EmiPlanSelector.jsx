import { Check } from "lucide-react";
import { formatINR } from "../../utils/format";

export default function EmiPlanSelector({ plans, selectedPlanId, onSelect }) {
  return (
    <div className="space-y-2">
      {plans.map((plan) => {
        const isActive = plan.id === selectedPlanId;
        return (
          <button
            key={plan.id}
            onClick={() => onSelect(plan.id)}
            className={`w-full flex items-center justify-between rounded-xl2 border px-4 py-3 text-left transition-colors ${
              isActive ? "border-brand bg-brand-light" : "border-surface-line bg-white"
            }`}
          >
            <div>
              <p className="text-sm font-semibold text-ink">{plan.label}</p>
              <p className="text-[12px] text-ink-faint mt-0.5">
                {formatINR(plan.monthlyAmount)}/month · 0% interest
              </p>
            </div>
            <div
              className={`h-5 w-5 rounded-full flex items-center justify-center border-2 shrink-0 ${
                isActive ? "border-brand bg-brand" : "border-surface-line bg-white"
              }`}
            >
              {isActive && <Check className="h-3 w-3 text-white" strokeWidth={3} />}
            </div>
          </button>
        );
      })}
    </div>
  );
}
