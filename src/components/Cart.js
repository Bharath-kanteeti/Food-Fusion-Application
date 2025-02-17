import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../utils/cartSlice"

const Cart = () => {
const cartItems = useSelector((store) => store.cart.items)
const dispatch = useDispatch()
const handleClearcart = () => {
    dispatch(clearCart())
}
console.log(cartItems)
    return (
        <div className="m-4 p-4 text-center">
            <h1 className="font-bold text-2xl ">Cart</h1>
            <div className = "w-6/12 m-auto">
                <button className="bg-gray-300 p-2 m-2 rounded-lg"
                onClick={handleClearcart}
                >
                    Clear
                </button>
                {cartItems.length === 0 && <p className="text-lg m-4">Your cart is empty</p>}
                <ItemList items = {cartItems} />
            </div>
        </div>
    )
}

export default Cart