export default function CategoryChips({ categories, activeId, onSelect }) {
  const all = [{ id: "all", label: "All" }, ...categories];
  return (
    <div className="flex gap-2 overflow-x-auto px-4 no-scrollbar">
      {all.map((c) => {
        const active = c.id === activeId;
        return (
          <button
            key={c.id}
            onClick={() => onSelect(c.id)}
            className={`shrink-0 text-[12.5px] font-medium rounded-full px-3.5 py-1.5 border transition-colors ${
              active
                ? "bg-brand text-white border-brand"
                : "bg-white text-ink-soft border-surface-line"
            }`}
          >
            {c.label}
          </button>
        );
      })}
    </div>
  );
}
