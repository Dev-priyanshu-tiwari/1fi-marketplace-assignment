import { Search } from "lucide-react";

export default function SearchBar({ placeholder = "Search...", value, onChange }) {
  return (
    <div className="px-4 mt-4">
      <div className="flex items-center gap-2 rounded-full bg-white border border-surface-line px-4 py-2.5 shadow-sm">
        <Search className="h-4 w-4 text-ink-faint shrink-0" strokeWidth={2} />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent text-sm text-ink placeholder:text-ink-faint outline-none"
        />
      </div>
    </div>
  );
}
