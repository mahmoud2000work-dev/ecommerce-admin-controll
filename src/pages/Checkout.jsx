import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const total = cart.reduce((s, p) => s + p.price * p.qty, 0).toFixed(2);

  const handleCheckout = () => {
    alert("Order placed successfully!");
    clearCart();
  };

  if (cart.length === 0) return (
    <div className="p-6">
      Your cart is empty. <Link to="/">Shop Now</Link>
    </div>
  );

  return (
    <div className="p-6 space-y-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold">Checkout</h1>
      {cart.map(item => (
        <div key={item.id} className="flex justify-between border p-2 rounded">
          <span>{item.title} x {item.qty}</span>
          <span>${(item.price * item.qty).toFixed(2)}</span>
        </div>
      ))}
      <div className="text-right font-bold">Total: ${total}</div>
      <button
        onClick={handleCheckout}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Place Order
      </button>
    </div>
  );
}
