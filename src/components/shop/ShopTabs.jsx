const TABS = [
  { id: "top-brands", label: "Top Brands" },
  { id: "nearby-stores", label: "Nearby Stores" },
  { id: "marketplace", label: "1Fi Marketplace" },
];

export default function ShopTabs({ activeTab, onChange }) {
  return (
    <div className="px-4 -mt-5 relative z-10">
      <div className="flex rounded-full bg-brand-tint p-1 shadow-card">
        {TABS.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={`flex-1 text-center rounded-full py-2 px-2 text-[12.5px] font-semibold transition-colors ${
                isActive ? "bg-white text-brand shadow-sm" : "text-ink-soft"
              }`}
            >
              <span className="block truncate">{tab.label}</span>
              {isActive && (
                <span className="mx-auto mt-0.5 block h-[2.5px] w-4 rounded-full bg-brand" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
