import { useState } from "react";
import BottomNav from "../components/layout/BottomNav";
import ShopHero from "../components/shop/ShopHero";
import ShopTabs from "../components/shop/ShopTabs";
import BlankTab from "../components/shop/BlankTab";
import MarketplaceHome from "../components/marketplace/MarketplaceHome";

export default function ShopPage() {
  const [activeTab, setActiveTab] = useState("marketplace");

  return (
    <div className="flex flex-col min-h-screen bg-surface-muted">
      <ShopHero />
      <ShopTabs activeTab={activeTab} onChange={setActiveTab} />

      <div className="flex-1 pt-4">
        {activeTab === "top-brands" && <BlankTab label="Top Brands" />}
        {activeTab === "nearby-stores" && <BlankTab label="Nearby Stores" />}
        {activeTab === "marketplace" && <MarketplaceHome />}
      </div>

      <BottomNav active="shop" />
    </div>
  );
}
