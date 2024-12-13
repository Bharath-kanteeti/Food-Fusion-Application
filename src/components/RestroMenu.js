import { useState, useEffect } from "react"
import { MENU_URL } from "../utils/constants"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import useRestroMenu from "../utils/useRestroMenu"

const RestroMenu = () => {

    //const [resInfo, setresInfo] =  useState(null)
    const {resId} = useParams()
    const resInfo = useRestroMenu(resId)

/*  
    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async() => {
        const data = await fetch( MENU_URL + resId )
        const  json = await data.json()
        setresInfo(json.data)
    }
    */
    if(resInfo === null ) return <Shimmer />

    const {name, cuisines, locality, costForTwoMessage} =
        resInfo?.cards[2]?.card?.card?.info
    const {itemCards} = 
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{locality}</h3>
            <h4>{cuisines.join(", ")} </h4>
            <h4>{costForTwoMessage}</h4>
            <h3>Menu</h3>
            <ul>
                {itemCards?.map((items) => (
                    <li key={items.card.info.id}>{items.card.info.name}</li>
                ))}
            </ul>
            
        </div>
    )
}

export default RestroMenu