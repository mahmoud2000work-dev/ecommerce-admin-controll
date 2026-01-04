import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";


export default function CartPage(){
    const {cart, removeFromCart, updateQty, clearCart} = useContext(CartContext)
    const total = cart.reduce((s,p) => s + p.price * p.qty, 0).toFixed(2)


    if (cart.length === 0) return (
        <div className="p-6">Your Cart Is Empty. <Link to="/"> Shop now</Link></div>
    )

    return(
        <div className="p-6 space-y-4">
            {cart.map(item => (
                <div key={item.id} className=" flex items-center gap-4 border p-3 rounded">
                    <img src={item.image} alt="" className="w-20 h-20 object-cover rounded" />
                    <div className="flex-1">
                        <div className="font-semibold">
                            {item.title}
                        </div>

                        <div>{item.price}</div>

                        <div className="mt-2">
                            <button onClick={()=> updateQty(item.id, Math.max(1, item.qty - 1))}>-</button>
                            <span className="px-2">{item.qty}</span>
                            <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                        </div>

                    </div>

                    <div>
                        <button onClick={() => removeFromCart(item.id)} className="text-red-600">Remove</button>
                    </div>
                </div>
            ))}

            <div className="text-right font-bold">ToTal: ${total}</div>
            <div className="flex gap-2 justify-end"> 
                <button onClick={clearCart}>Clear</button>
                <Link to="/checkout" className="px-4 py-2 bg-green-600 text-white rounded">Checkout</Link>
            </div>
        </div>

    );
}