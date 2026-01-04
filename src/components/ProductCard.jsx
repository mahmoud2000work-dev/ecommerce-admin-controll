import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
    return (
        <div className="border rounded p-3 shadow-sm">
            <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-cover rounded"
            />
            
            <h3 className="mt-2 font-semibold">{product.title}</h3>
            <p className="text-sm text-gray-600">${product.price}</p>

            <div className="mt-3 flex justify-between items-center">
                <Link to={`/product/${product.id}`} className="text-sm text-blue-600">
                    View
                </Link>
                <span className="text-sm text-gray-500">Stock: {product.stock}</span>
            </div>
        </div>
    );
}

