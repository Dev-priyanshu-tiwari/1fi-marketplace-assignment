import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function TopBar({ title, showBack = false, right = null }) {
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-surface-line">
      <div className="h-14 flex items-center px-3 gap-2">
        {showBack && (
          <button
            onClick={() => navigate(-1)}
            aria-label="Go back"
            className="h-9 w-9 -ml-1 flex items-center justify-center rounded-full active:bg-surface-muted"
          >
            <ChevronLeft className="h-5 w-5 text-ink" strokeWidth={2} />
          </button>
        )}
        <h1 className="text-[15px] font-semibold text-ink flex-1 truncate">{title}</h1>
        {right}
      </div>
    </header>
  );
}
