import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../api/api";
import { Link } from "react-router-dom";

export default function AdminPanel() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetchProducts معرفة خارج useEffect
  const fetchProducts = async () => {
    const res = await getProducts();
    setProducts(res);
    console.log(res.data);

  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await deleteProduct(id);
      fetchProducts(); // يمكن استخدامها هنا
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);     // ✅ داخل async function داخل useEffect
      await fetchProducts(); 
      setLoading(false);    // ✅ داخل async function
    };

    fetchData();
  }, []);

  if (loading) return <div className="p-6">Loading...</div>;



  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
        <Link
          to="/admin/add"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Add Product
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((p) => (
          <div key={p.id} className="border p-4 rounded shadow">
            <img src={p.image} alt={p.title} className="w-full h-40 object-cover rounded" />
            <h2 className="mt-2 font-semibold">{p.title}</h2>
            <p className="text-gray-600">${p.price}</p>
            <div className="mt-2 flex justify-between">
              <Link
                to={`/admin/edit/${p.id}`}
                className="text-blue-600 text-sm"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(p.id)}
                className="text-red-600 text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
