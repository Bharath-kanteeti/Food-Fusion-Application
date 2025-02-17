import { useDispatch } from "react-redux"
import { CARD_URL } from "../utils/constants"
import { addItems } from "../utils/cartSlice"

const ItemList = (props) => {
    const {items} = props
    const dispatch = useDispatch()
    const handleAddToCart = (item) => {
        // Dispatching an action
        // addItems is a dispatch action which take payload as an argument
        // so action.payload is the argument for the addItems action
        dispatch(addItems(item))
    }
    return(
        <div>
            {items.map((item) =>(
                <div 
                key = {item.card.info.id} 
                className="m-2 p-2 border-b-[1px] border-black shadow-lg flex text-left justify-between">
                    <div>
                        <div className="py-1">
                                <span className="">{item.card.info.name}</span>
                                <span className="px-1"> - ₹{item.card.info.price ? 
                                    item.card.info.price / 100 : 
                                    item.card.info.defaultPrice / 100}
                                </span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <img src = {item.card.info.imageId ? CARD_URL+ item.card.info.imageId : `https://via.placeholder.com/100`} className="w-36 ml-2 rounded-xl " />
                    <button className="absolute bg-slate-300 p-1 ml-[567px] hover:bg-slate-400 text-xs rounded-md"
                    onClick={() => handleAddToCart(item)}>
                        ADD
                    </button>
                </div>
            ))}

        </div>
    )
}
export default ItemList