import data from "../utils/rawData";
import RestroCards, { withVegOrNonVeg } from "../components/RestroCards"
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { APP_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body = () =>{
  const [searchText, setsearchText] = useState("")

  const [listofRestro, setlistofRestro] = useState([/* data.restaurants */])
  const [filteredRestaurant, setfilteredRestaurant] = useState([])

  const RestroCardsUpdated = withVegOrNonVeg(RestroCards)
  
  useEffect(() => {
    fetchData();
  }, [])
  
  const fetchData = async() => {
    const data = await fetch( APP_URL )

    const json = await data.json()

    
    //https://corsproxy.io/?
    //console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants) //--- > To check data flow from live
    const liveData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setlistofRestro(liveData)
    setfilteredRestaurant(liveData)
  }
  
  const onlineStatus = useOnlineStatus()
  if (onlineStatus === false) return <div>
    <h1>Oops!! You're disconnected from internet</h1>
    <h3>Check your internet connection</h3>
  </div>

const {setUserName, loggedinUser} = useContext(UserContext)
return listofRestro?.length === 0 ? (
  <Shimmer/>
) : (
  <div className="body">
            <div className="filter m-4 p-4">
              <input type="text" data-testid = "search-text" className="border border-solid border-black mx-2 px-1"
                value={searchText}
                onChange={(event) => {
                  setsearchText(event.target.value)
                }}
                />

              <button data-testid = "search-btn" className="bg-gray-200 px-2 text-center py-0.5 rounded-lg mr-1 " onClick={() => {
                const filtred = listofRestro.filter((res) => {
                  return res.info.name.toLowerCase().includes(searchText.toLowerCase()) 
                })
                setfilteredRestaurant(filtred)
              }}>Search</button>

              <button data-textid = "rated-restro" className="bg-gray-200 px-2 text-center py-0.5 rounded-lg" onClick={()=>{
                // need to write filter logic acc to ratings
                const filteredList =  listofRestro.filter(
                  res => res.info.avgRatingString > 4.3
                )
                setfilteredRestaurant(filteredList);
              }}>Top rated restaurants
              </button>

              {/* Here we use context API */}
              <label className="mx-2">UserName</label>
              <input className="border border-black m-2 p-1"
                value = {loggedinUser}
                onChange={(e) => {setUserName(e.target.value)}}
              />
            </div>
            <div className="flex flex-wrap">
              {
                /* data.restaurants.map(restaurants => <RestroCards key = {restaurants.info.id} resData = {restaurants}/>) */
                filteredRestaurant?.map(restaurants => 
                  <Link key = {restaurants.info.id} to={"/restaurants/" + restaurants.info.id }>
                    {restaurants.info?.veg ? <RestroCardsUpdated resData = {restaurants}/> : <RestroCards resData = {restaurants}/>}
                  </Link>
                ) 
              }
            </div>
        </div>
    )
}

export default Body;