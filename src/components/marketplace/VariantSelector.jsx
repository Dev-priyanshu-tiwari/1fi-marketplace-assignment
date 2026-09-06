export default function VariantSelector({ variants, selected, onChange }) {
  const entries = Object.entries(variants);
  if (entries.length === 0) return null;

  return (
    <div className="space-y-4">
      {entries.map(([key, options]) => (
        <div key={key}>
          <p className="text-[13px] font-medium text-ink-soft mb-2">{key}</p>
          <div className="flex flex-wrap gap-2">
            {options.map((option) => {
              const isActive = selected[key] === option;
              return (
                <button
                  key={option}
                  onClick={() => onChange(key, option)}
                  className={`text-sm font-medium rounded-lg px-3.5 py-2 border transition-colors ${
                    isActive
                      ? "border-brand bg-brand-light text-brand"
                      : "border-surface-line text-ink-soft"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
