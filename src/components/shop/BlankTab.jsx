import { Sparkles } from "lucide-react";
import SearchBar from "./SearchBar";

// Per the assignment, Top Brands and Nearby Stores need no implementation
// and can remain blank — shared chrome (search bar) stays for visual
// consistency, the list content underneath is intentionally left out.
export default function BlankTab({ label }) {
  return (
    <div>
      <SearchBar placeholder="Search online stores..." value="" onChange={() => {}} />
      <div className="flex flex-col items-center justify-center text-center px-8 py-16">
        <p className="text-sm font-medium text-ink-soft">{label} is coming soon</p>
      </div>
    </div>
  );
}
