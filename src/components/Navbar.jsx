import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";



export default function Navbar(){

    const {cart} = useContext(CartContext)
    const count = cart.reduce((s, p) => s + p.qty, 0)


    return(
        <nav className="bg-white shadow p-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
                <Link to="/" className="font-black text-lg">My Store</Link>
                <Link to="/admin" className="text-sm text-gray-600">Admin</Link>
            </div>

            <div>
                <Link to="/cart" className="px-3 py-1 border rounded"> Cart ({count})</Link>
            </div>


        </nav>
    )

}