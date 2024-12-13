import data from "../utils/rawData";
import RestroCards from "../components/RestroCards"
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { APP_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () =>{
  const [searchText, setsearchText] = useState("")

  const [listofRestro, setlistofRestro] = useState([/* data.restaurants */])
  const [filteredRestaurant, setfilteredRestaurant] = useState([])
  
  useEffect(() => {
    fetchData();
  }, [])
  
  const fetchData = async() => {
    const data = await fetch( APP_URL )

    const json = await data.json()
    
    //https://corsproxy.io/?
    //console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants) //--- > To check data flow from live
    liveData = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setlistofRestro(liveData)
    setfilteredRestaurant(liveData)
  }
  
  const onlineStatus = useOnlineStatus()
  if (onlineStatus === false) return <div>
    <h1>Oops!! You're disconnected from internet</h1>
    <h3>Check your internet connection</h3>
  </div>

    return listofRestro?.length === 0 ? (
            <Shimmer/>
          ) : (
        <div className="body">
            <div className="filter">
              <input type="text" className="search-input"
                value={searchText}
                onChange={(event) => {
                  setsearchText(event.target.value)
                }}
                />

              <button className="search-btn" onClick={() => {
                const filtred = listofRestro.filter((res) => {
                  return res.info.name.toLowerCase().includes(searchText.toLowerCase()) 
                })
                setfilteredRestaurant(filtred)
              }}>Search</button>

              <button className="filter-btn" onClick={()=>{
                // need to write filter logic acc to ratings
                const filteredList =  listofRestro.filter(
                  res => res.info.avgRatingString > 4.3
                )
                setfilteredRestaurant(filteredList);
              }}>Top rated restaurants
              </button>
            </div>
            <div className="restauremnts">
              {
                /* data.restaurants.map(restaurants => <RestroCards key = {restaurants.info.id} resData = {restaurants}/>) */
                filteredRestaurant?.map(restaurants => 
                  <Link key = {restaurants.info.id} to={"/restaurants/" + restaurants.info.id }><RestroCards resData = {restaurants}/></Link>
                ) 
              }
            </div>
        </div>
    )
}

export default Body;