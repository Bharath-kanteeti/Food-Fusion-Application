import { useContext } from "react";
import { CARD_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestroCards = (props) => {
    const {resData} = props;
    const {name, 
            cloudinaryImageId, 
            cuisines, 
            avgRatingString, 
            locality, 
            costForTwo
        } = resData?.info

    const {loggedinUser} = useContext(UserContext);
      return(
          <div data-testid = "restro-cards" className="m-4 p-4 w-52 bg-gray-100 hover:bg-gray-200 rounded-lg">
              <img src={CARD_URL
                            + cloudinaryImageId
                    } className="rounded-lg"/>
              <h3 className="font-bold text-xl py-2">{name}</h3>
              <h4>{avgRatingString}</h4>
              <p>{costForTwo}</p>
              <h5>{locality}</h5>
              <h4>{cuisines.join(", ")}</h4>
              <h2>{loggedinUser}</h2>
          </div>
      )
  }


  // Higher Order Function or Component

  export const withVegOrNonVeg = (RestroCards) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-green-400 text-white p-1 px-1.5 rounded-lg">
                    Pure Veg
                </label>
                <RestroCards {...props} />  {/* {...props} is a spread operator which passes all the props received above */}
            </div>
        )
    }
  }

export default RestroCards