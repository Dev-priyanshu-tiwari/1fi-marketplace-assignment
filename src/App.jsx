import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CheckoutPage from "./pages/CheckoutPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-frame">
        <Routes>
          <Route path="/" element={<ShopPage />} />
          <Route path="/marketplace/product/:productId" element={<ProductDetailPage />} />
          <Route path="/marketplace/checkout" element={<CheckoutPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
