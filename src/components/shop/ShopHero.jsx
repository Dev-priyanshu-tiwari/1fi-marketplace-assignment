import { Sparkles, ShoppingBag, Laptop, Bike } from "lucide-react";

// Recreates the layout/typography/tone of the existing Shop page hero
// (dark purple gradient, "NO-COST EMIs" badge, bold headline). The exact
// 3D product illustration isn't available here, so it's approximated
// with layered icons — swap in the real artwork asset when integrating.
export default function ShopHero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#2A0A5E] via-[#4A1594] to-[#6C28D9] px-5 pt-6 pb-8">
      <div className="absolute -right-6 -top-10 h-40 w-40 rounded-full bg-white/5" />
      <div className="absolute right-10 bottom-0 h-24 w-24 rounded-full bg-white/5" />

      <div className="relative flex items-start justify-between gap-4">
        <div className="max-w-[68%]">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-medium text-white">
            NO-COST EMIs
          </span>

          <h1 className="mt-3 text-[26px] leading-[1.15] font-extrabold text-white">
            Shop today,
            <br />
            <span className="italic font-semibold">Pay later using</span>
            <br />
            Mutual funds.
          </h1>

          <p className="mt-2 text-[12.5px] leading-snug text-white/70">
            No credit score required. No interest.
            <br />
            Backed by your investments.
          </p>
        </div>

        <div className="relative shrink-0 h-24 w-24 mt-2">
          <div className="absolute inset-0 rounded-3xl bg-white/10 rotate-6" />
          <div className="absolute inset-0 flex items-center justify-center">
            <ShoppingBag className="h-11 w-11 text-white" strokeWidth={1.5} />
          </div>
          <div className="absolute -left-3 -top-2 h-9 w-9 rounded-xl bg-white/15 flex items-center justify-center">
            <Laptop className="h-4.5 w-4.5 text-white" strokeWidth={1.75} />
          </div>
          <div className="absolute -right-2 -bottom-1 h-9 w-9 rounded-xl bg-white/15 flex items-center justify-center">
            <Bike className="h-4.5 w-4.5 text-white" strokeWidth={1.75} />
          </div>
        </div>
      </div>
    </div>
  );
}
