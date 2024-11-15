import RestroCards from "../components/RestroCards"
import data from "../utils/rawData";
import { useState } from "react";


const Body = () =>{
  const [listofRestro, setlistofRestro] = useState(data.restaurants)

    return(
        <div className="body">
            <div className="filter">
              <button className="filter-btn" onClick={()=>{
                // need to write filter logic acc to ratings
                const filteredList =  listofRestro.filter(res => res.info.avgRatingString > 4.3
                )
                console.log(filteredList)
                setlistofRestro(filteredList);
              }}>Top rated restaurants</button>
            </div>
            <div className="restauremnts">
              {
                /* data.restaurants.map(restaurants => <RestroCards key = {restaurants.info.id} resData = {restaurants}/>) */
                listofRestro.map(restaurants => <RestroCards key = {restaurants.info.id} resData = {restaurants}/>)
              }
            </div>
        </div>
    )
}

export default Body;