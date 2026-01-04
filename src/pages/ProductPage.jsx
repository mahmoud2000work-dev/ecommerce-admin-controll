import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { getProduct } from "../api/api";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null); 
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        const response = await getProduct(id);
        setProduct(response.data);
      } catch {
        setError("Failed to fetch product");
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) return <div className="p-6">Loading....</div>;
  if (error) return <div className="p-6 text-red-600">{error}</div>;
  if (!product) return null; // حماية إضافية

  return (
    <div className="p-6 max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-80 object-cover rounded"
      />
      <div>
        <h2 className="text-2xl font-bold">{product.title}</h2>
        <p className="mt-2 text-gray-700">{product.description}</p>
        <p className="mt-4 text-xl">${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
