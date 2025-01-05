import { useState } from "react"
import ItemList from "./ItemList"

const RestaurantCategory = (props) => {
    const {data, showItems, setShowIndex} = props
    
    const handleClicked = () => {
        setShowIndex()
    }
    return (
        <div>
            {/* Accoridion Header */}
            <div className="w-6/12 my-5 mx-auto p-2 bg-slate-100 shadow-xl text-center">
                <div className="justify-between flex cursor-pointer" onClick={handleClicked}>
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    <span>{'🔽'}</span>
                </div>
            {/* Acordion Body */}
                <div>
                    {showItems && <ItemList items= {data.itemCards} />}
                </div>
            </div>
        </div>
    )
}

export default RestaurantCategory