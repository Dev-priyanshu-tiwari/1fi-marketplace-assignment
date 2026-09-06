import { formatINR } from "../../utils/format";

export default function StickyCta({ monthlyAmount, months, onProceed, disabled }) {
  return (
    <div className="sticky bottom-0 bg-white border-t border-surface-line px-4 py-3 flex items-center gap-3">
      <div className="flex-1">
        <p className="text-[11px] text-ink-faint">Selected plan</p>
        <p className="text-sm font-bold text-ink">
          {formatINR(monthlyAmount)}
          <span className="text-ink-faint font-medium">/mo</span> · {months} months
        </p>
      </div>
      <button
        onClick={onProceed}
        disabled={disabled}
        className="rounded-full bg-brand text-white text-sm font-semibold px-6 py-3 active:bg-brand-dark disabled:opacity-50"
      >
        Proceed
      </button>
    </div>
  );
}
