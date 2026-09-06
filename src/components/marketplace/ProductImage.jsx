import { Smartphone, Laptop, Watch, Wind, Bike, Package } from "lucide-react";

const ICONS = {
  mobiles: Smartphone,
  laptops: Laptop,
  wearables: Watch,
  appliances: Wind,
  "two-wheelers": Bike,
};

const GRADIENTS = {
  mobiles: "from-[#EFE7FB] to-[#DCC9F6]",
  laptops: "from-[#E7EEFB] to-[#C9DBF6]",
  wearables: "from-[#FBEDE7] to-[#F6D6C9]",
  appliances: "from-[#E7FBF1] to-[#C9F6DD]",
  "two-wheelers": "from-[#FBF7E7] to-[#F6ECC9]",
};

export default function ProductImage({ category, className = "" }) {
  const Icon = ICONS[category] || Package;
  const gradient = GRADIENTS[category] || "from-surface-line to-surface-line";
  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br ${gradient} ${className}`}
    >
      <Icon className="text-ink/25 h-10 w-10 md:h-14 md:w-14" strokeWidth={1.25} />
    </div>
  );
}
