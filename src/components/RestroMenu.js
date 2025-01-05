import { MENU_URL } from "../utils/constants"
import { useState, useEffect } from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import useRestroMenu from "../utils/useRestroMenu"
import RestaurantCategory from "./RestaurantCategory"

const RestroMenu = () => {

    const {resId} = useParams()
    const resInfo = useRestroMenu(resId)
    const [showIndex, setShowIndex] = useState(null)

    if(resInfo === null ) return <Shimmer />

    const {name, cuisines, locality, costForTwoMessage} =
        resInfo?.cards[2]?.card?.card?.info
    
    const {itemCards} = 
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

    const data = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    
    const categories = data.filter((c) => {
        return c?.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    });

    const toggleAccordion = (index) => {
        index === showIndex ? setShowIndex(null) : setShowIndex(index)
    };

    return (
        <div className="">
            <h1 className="text-center font-bold text-3xl py-2">{name}</h1>
            <h3 className="text-center">{locality}</h3>
            <h4 className="text-center">{cuisines.join(", ")} </h4>
            {
                categories.map((category, index) => {
                    return (
                        // controlled Component
                        <RestaurantCategory 
                            key = {index}
                            data = {category?.card?.card}
                            showItems = {index === showIndex && true}
                            setShowIndex = {() => (
                                toggleAccordion(index)
                            )}
                            />)
                })
            }
            
        </div>
    )
}

export default RestroMenu