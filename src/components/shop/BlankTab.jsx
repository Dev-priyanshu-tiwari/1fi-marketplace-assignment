import { Sparkles } from "lucide-react";
import SearchBar from "./SearchBar";

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
