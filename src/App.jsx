import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";

import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import AdminPanel from "./pages/AdminPanel";
import AdminProductForm from "./pages/AdminProductForm"

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 text-gray-800">
          <Navbar />

          <Routes>
            {/* Customer Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<Checkout />} />

            {/* Admin Pages */}
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/admin/add" element={<AdminProductForm />} />
            <Route path="/admin/edit/:id" element={<AdminProductForm />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}
