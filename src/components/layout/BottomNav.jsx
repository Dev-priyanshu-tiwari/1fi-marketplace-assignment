import { Home, ShoppingBag, ReceiptText, TrendingUp, User } from "lucide-react";

const ITEMS = [
  { id: "home", label: "Home", icon: Home },
  { id: "shop", label: "Shop", icon: ShoppingBag },
  { id: "emi-dues", label: "EMI Dues", icon: ReceiptText },
  { id: "limit", label: "Limit", icon: TrendingUp },
  { id: "profile", label: "Profile", icon: User },
];

export default function BottomNav({ active = "shop" }) {
  return (
    <div className="sticky bottom-0 px-3 pb-3 pt-2 bg-gradient-to-t from-white via-white/95 to-transparent">
      <nav className="flex rounded-full bg-white shadow-card border border-surface-line px-1 py-1.5">
        {ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = item.id === active;
          return (
            <button
              key={item.id}
              className="flex-1 flex flex-col items-center gap-0.5 py-1"
              aria-current={isActive ? "page" : undefined}
            >
              <span
                className={`h-6 w-6 rounded-full flex items-center justify-center ${
                  isActive ? "bg-brand-light" : ""
                }`}
              >
                <Icon
                  className={`h-4 w-4 ${isActive ? "text-brand" : "text-ink-faint"}`}
                  strokeWidth={isActive ? 2.25 : 1.75}
                />
              </span>
              <span className={`text-[10px] ${isActive ? "text-brand font-semibold" : "text-ink-faint"}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
